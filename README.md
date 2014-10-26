##Introduction

If you have been introduced to LoopBack, you know it’s easy to create Models which map to your Data Assets.

This Document and Sample Application will help you understand how to create meaningful Relationships between your Data Models.

So let’s dive right in and set the scene at a School where “Students” take “Classes” taught by “Teachers” and where “Students” and “Teachers” schedule “Appointments” for one-on-one learning sessions.

Using the technical Relationship Terminology used when declaring LoopBack Models, let’s list the Relationships which define the interactions within our School.  Pardon us if the English sounds awkward but we think you’ll get the idea and learn the keywords at the same time.

* Classes **belongsTo** Teachers.  In other words, Teachers **own** the Classes and only one Teacher teaches a Class (at least at this school).


* Teachers **hasMany** Classes.  In other words, Teachers sometimes teach **many** Classes (and ** exclusively own** each one of them).


* Students **hasAndBelongsToMany** Classes.  **Students have** one or more **Classes** and **Classes have** one or more **Students**.


* Classes **hasAndBelongsToMany** Students.  Again, **Students have** one or more **Classes** and **Classes have** one or more Students.


* Students **hasMany** Teachers related **through** Appointments.  Although **Teachers** and **Students** are indirectly related through their common **Classes**, the direct relationships between **many** Students and **many** Teachers takes place **through** the **Appointments** they arrange.


* Symmetrically, Teachers **hasMany** Students related **through** Appointments.  As stated above, although **Teachers** and **Students** are indirectly related through their common **Classes**, the direct relationships between **many** Students and **many** Teachers takes place **through** the **Appointments** they arrange.

That sets the scene so now let’s build a working **School** from the ground up.

##Part 1 - Relating Models in the LoopBack API Server

To follow along as you read below, you might want to install and run this LoopBack / Node.js REST API Server App.  Follow the steps below.

```
Clone or Download a Zip of this GitHub Repository.

$ cd /YourChosenDirectory/.../LoopBackRelationships
	// wherever you saved the Project
    
$ npm install -g strongloop
	// So that you have LoopBack available if you haven't done so already
    
$ npm install
	// Ensures that all of the Project Dependencies are installed.
    
$ node ./server/server.js

	Browse your REST API at http://localhost:3000/explorer
	Web server listening at: http://localhost:3000/
    
_____>  From another Terminal session

$ curl http://localhost:3000/api/classes
	// Will show you the List of Classes in the Database in JSON Format

    
```


###Basic Models

Let’s start by looking at the **Class** Model and notice that **No “relations”** are defined…

```
{
  "name": "Class",
  "plural": "Classes",
  "base": "PersistedModel",
  "properties": {
    "subject": {
      "type": "string",
      "required": true
    }
  },

  "relations": {},

  "acls": [],
  "validations": [],
  "methods": []
}
```

Next, let’s look at the **Teacher** Model and notice that **No “relations”** are defined…

```
{
  "name": "Teacher",
  "plural": "Teachers",
  "base": "Person",
  "properties": {},

  "relations": {},

  "acls": [],
  "validations": [],
  "methods": []
}
```

Note above that the **Teacher** Model is is **based** on another Model named **Person**.  For completeness, here is what the **Person** Model looks like.

```
{
  "name": "Person",
  "plural": "People",
  "base": "PersistedModel",
  "properties": {
    "firstName": {
      "type": "string",
      "inputType": "text",
      "label": "First Name"
    },
    "lastName": {
      "type": "string",
      "inputType": "text",
      "label": "First Name"
    }
  }
}
```

At this point, just about all we can do is Create, Read, Update, and Delete Classes and Teachers.

List all Classes: **http://localhost:3000/api/Classes**

List all Teachers: **http://localhost:3000/api/Teachers** 

**NOTE:** Whenever you see a links like the ones above and you have installed and run the LoopBack REST API Server Application associated with this Repository, you can navigate to the links and exercise the API against the Sample Data.  You'll be seeing the final results of this Project and not the Step-by-Step build-up we're writing here.

*The easiest way to Explore and manipulate the APIs you create with Loopback is to use LoopBack Explorer: (http://localhost:3000/explorer)*

***

###Classes related to Teachers
Now, let’s set up the Relationships between **Classes** and **Teachers**.

Classes **belongsTo** Teachers.  In other words, **Teachers own** the **Classes** and only one **Teacher** teaches a **Class** (at least at our School).

First, let’s look at the additions we’ll make to the **Class** Model within [**common/models/class.json**](https://github.com/tonysoft/LoopBackRelationships/blob/master/common/models/class.json)

```
{
  "name": "Class",
  "plural": "Classes",
  "relations": {
    "teachers": {
        "type": "belongsTo",
        "model": "Teacher",
        "foreignKey": "teacherId"
    }
  },
…
```

Teachers **hasMany** Classes (pardon the grammar).  In other words, Teachers sometimes teach **many** Classes (and **own** each one of them). Next, let’s look at the additions we’ll make to the **Teacher** Model within  [**common/models/teacher.json**](https://github.com/tonysoft/LoopBackRelationships/blob/master/common/models/teacher.json)

```
{
  "name": "Teacher",
  "plural": "Teachers",

  "relations": {
    "classes": {
      "type": "hasMany",
      "model": "Class"
    }
  },
…
```

Let’s now take a look at what **Classes** have been assigned to **Teachers 1**…

** http://localhost:3000/api/Teachers/1/classes?filter={"include":"teachers"} **

If you try to check to see the **Classes** assigned to **Teacher 2**, you’d get an empty result. 

** http://localhost:3000/api/Teachers/2/classes?filter={"include":"teachers"} **

So let’s assign a **Class** to **Teacher 2**.  Let’s assume that we have a **Class** with an **ID of 2** and we want to assigned **Teacher 2** to this **Class**.  Because Classes **belongsTo** Teachers, the way to accomplish this is simply to **Update** (http **PUT**) the **Class** with **ID 2**…

Where the body of the **PUT** message we pass along looks like below…  

**NOTE** that this is EASY to do within LoopBack Explorer:  
** [.../api/Classes](http://localhost:3000/explorer/#!/Classes/Class_upsert)  **

```
{
  "id": 2,
  "teacherId": 2
}
```

Now, if you checked **Classes** for **Teacher 2** again, you see this…

```
[
  {
    "subject": "Entrepreneurship 101",
    "id": 2,
    "teacherId": 2,
    "teachers": {
      "firstName": "Juan Carlos",
      "lastName": "Soto",
      "id": 2
    }
  }
]
```

***

###Students and Classes

Now, let’s set up the **Relationships** between **Classes** and **Students**.

Students **hasAndBelongsToMany** Classes.  In other words, **Students have** one or more **Classes** and **Classes have** one or more **Students**.

First, let’s look at the additions we’ll make to the **Class** Model within [**common/models/class.json**](https://github.com/tonysoft/LoopBackRelationships/blob/master/common/models/class.json)

```
{
  "name": "Class",
  "plural": "Classes",
  
  "relations": {

    "students": {
      "type": "hasAndBelongsToMany",
      "model": "Student"
    },
    
    "teachers": {
        "type": "belongsTo",
        "model": "Teacher",
        "foreignKey": "teacherId"
    }
  },
...
```

Then, let’s look at the symmetrical additions we’ll make to the Student Model within  [**common/models/student.json**](https://github.com/tonysoft/LoopBackRelationships/blob/master/common/models/student.json)

```
{
  "name": "Student",
  "plural": "Students",

  "relations": {
    "classes": {
      "type": "hasAndBelongsToMany",
      "model": "Class"
    }
  },
...

```

Now, if we want to look at what **Classes** a **Student** is taking we can use this API Link.  And, while we’re at it, let’s list **ALL** of the **Students** in that **Class**...

** http://localhost:3000/api/Students/1/classes?filter={"include":"students"} **

```
[
  {
    "subject": "LoopBack",
    "id": 1,
    "teacherId": 1,
    "students": [
      {
        "firstName": "Tony",
        "lastName": "Sukiennik",
        "id": 1
      },
      {
        "firstName": "Dennis",
        "lastName": "Ashby",
        "id": 8
      }
    ]
  }
]
```

If we want to add another **Class** for a **Student**: Say **Student 1** now wants to enroll in **Class 2** we'd simply use one of the API Links below…

** [.../api/Students/1/classes/rel/2](http://localhost:3000/explorer/#!/Students/Student_prototype_link_classes) **

or

** [.../api/Classes/2/students/rel/1](http://localhost:3000/explorer/#!/Classes/Class_prototype_link_students) **

If we again want to look at the **Classes** taken by **Student 1** as well ALL of the **Students** in each **Class** as well as the **Teachers** who teach the **Classes**, we’d use this API Link…

http://localhost:3000/api/Students/1/classes?filter={"include":["students","teachers"]}

```
[
  {
    "subject": "LoopBack",
    "id": 1,
    "teacherId": 1,
    "teachers": {
      "firstName": "Issac",
      "lastName": "Roth",
      "id": 1
    },
    "students": [
      {
        "firstName": "Tony",
        "lastName": "Sukiennik",
        "id": 1
      },
      {
        "firstName": "Dennis",
        "lastName": "Ashby",
        "id": 8
      }
    ]
  },
  {
    "subject": "Entrepreneurship 101",
    "id": 2,
    "teacherId": 2,
    "teachers": {
      "firstName": "Juan Carlos",
      "lastName": "Soto",
      "id": 2
    },
    "students": [
      {
        "firstName": "Tony",
        "lastName": "Sukiennik",
        "id": 1
      }
    ]
  }
]
```
***

###Teachers and Students related **through** Appointments

We’re almost done now with the last task to relate two Models **through** a third.

In the discussion above about **Students** and **Classes** there was a direct relationship between the two Models.  **Students** can have many **Classes** and **Classes** can have many **Students**.

When we think about creating **Appointments** between **Students** and **Teachers**, we want to keep some extra information about the relationship such as the **Date / Time** of the **Appointment**.  It wouldn’t make sense to keep the Date and Time within either **Student** or **Teacher**, so the  **Appointment** Model will serve the purpose of joining **Students** and **Teachers** as well as keeping the other details straight.

First, let’s take a look at the **Appointment** Model within  [**common/models/appointment.json**](https://github.com/tonysoft/LoopBackRelationships/blob/master/common/models/appointment.json)

```
{
  "name": "Appointment",
  "plural": "Appointments",
  "base": "PersistedModel",
  
  "properties": {
    "dateTime": {
      "type": "date",
      "required": true
    }
  },

  "relations": {
    "teachers": {
        "type": "belongsTo",
        "model": "Teacher",
        "foreignKey": "teacherId"
    },
    "students": {
        "type": "belongsTo",
        "model": "Student",
        "foreignKey": "studentId"
    }
  },
  
  "validations": [],
  "acls": [],
  "methods": []
}
```

As you can see, the **Appointment** defines a **date(time)** property as well as two relations which imply that ownership of the **Appointment** by a specific **Student** and **Teacher**.

Now if we again look at [**common/models/student.json**](https://github.com/tonysoft/LoopBackRelationships/blob/master/common/models/student.json) we’ll see the relation which binds the **Student** to the **Teacher** **“through”** the **Appointment**.

```
{
  "name": "Student",
  "plural": "Students",

  "relations": {
    "classes": {
      "type": "hasAndBelongsToMany",
      "model": "Class"
    },

    "teachers": {
      "type": "hasMany",
      "model": "Teacher",
      "through": "Appointment",
      "foreignKey": "teacherId"
    }

  },
  ...
  ```
  
Symmetrically, if we again look at [**common/models/teacher.json**](https://github.com/tonysoft/LoopBackRelationships/blob/master/common/models/teacher.json) we’ll see the relation which binds the **Teacher** to the **Student** **“through”** the **Appointment**.


```
{
  "name": "Teacher",
  "plural": "Teachers",

  "relations": {
    "classes": {
      "type": "hasMany",
      "model": "Class"
    },
    
    "students": {
      "type": "hasMany",
      "model": "Student",
      "through": "Appointment",
      "foreignKey": "studentId"
    }
  },
...
```

Let’s say we want to CREATE an **Appointment** between **Student 1** and **Teacher 2**.  Because Appointments **belongsTo** Teachers as well as **belongsTo** Students, the way to CREATE an Appointment is to (http POST) as below...

POST:  ** [../api/Appointments](http://localhost:3000/explorer/#!/Appointments/Appointment_create) **

The **body** of the **POST** message we pass along looks like below...

```
{
  "dateTime": "2014-10-25 8:15",
  "teacherId": 2,
  "studentId": 1
}
```

Lastly, let’s look at the **Appointments** for **Student 1**.  Just enter this API Link:

**[.../api/Appointments?filter={"where":{"studentId":1},"include":["teachers","students"](http://localhost:3000/explorer/#!/Appointments/Appointment_find)**

```
[
  {
    "dateTime": "2014-10-15T15:15:00.000Z",
    "id": 1,
    "teacherId": 1,
    "studentId": 1,
    "teachers": {
      "firstName": "Issac",
      "lastName": "Roth",
      "id": 1
    },
    "students": {
      "firstName": "Tony",
      "lastName": "Sukiennik",
      "id": 1
    }
  },
  {
    "dateTime": "2014-10-25T15:15:00.000Z",
    "id": 3,
    "teacherId": 2,
    "studentId": 1,
    "teachers": {
      "firstName": "Juan Carlos",
      "lastName": "Soto",
      "id": 2
    },
    "students": {
      "firstName": "Tony",
      "lastName": "Sukiennik",
      "id": 1
    }
  }
]
```

**Note**: From **LoopBack Explorer**, when you want to **Query** your **Models**, the concept of **filter** is very useful and important.  In the example above the **LoopBack Explorer** will allow you enter a **filter** and entering "**{"where":{"studentId":1},"include":["teachers","students"]}** will yield the results listed above.

***

###Summary of Part 1 - Relating Models in the LoopBack API Server

It's really easy to Model your Data Assets using **LoopBack**.  But you **APIs** becomes REALLY powerful when your **Interrelate** your **Models** in ways that make sense for your App.  

Speaking of **Apps**, an **API** would be useless without **Apps**, so **Part 2** below will show you how to easily access your **API** from a **Single Page Web App** suitable for porting to **Mobile Devices**.

***

##Part 2 - Building a App which accesses your API

First, run a **[Student Enrollment App](http://localhost:3000)** at our School and includes Classes, Teachers and easily and seamlessly explores all of their interrelationships.  

**Note**: you will only be able to **Run the App** locally if you followed the **installation instructions** at the **Top of Part 1** above.

You can start exploring the **[Source Code for the Student Enrollment App](https://github.com/tonysoft/LoopBackRelationships/tree/master/client)** and we'll be decomposing that code below.

***

###Accessing your API from within AngularJS Apps

Coming soon...


