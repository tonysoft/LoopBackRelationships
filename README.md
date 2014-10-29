##Creating Relationships between LoopBack Models

Contact **[Tony Sukiennik](mailto:tony@iRelate.us)** with feedback

If you have been introduced to **[LoopBack](http://loopback.io/)**, you know it’s easy to create Models which map to your Data Assets.

This Document and Sample Application will help you understand how to create meaningful Relationships between your Data Models.

So let’s dive right in and set the scene at a School where “Students” take “Classes” taught by “Teachers” and where “Students” and “Teachers” schedule “Appointments” for one-on-one learning sessions.

Using the technical Relationship Terminology used when declaring **[LoopBack](http://loopback.io/)** Models, let’s list the Relationships which define the interactions within our School.  Pardon us if the English sounds awkward but we think you’ll get the idea and learn the keywords at the same time.

* Classes **belongsTo** Teachers.  In other words, Teachers **own** the Classes and only one Teacher teaches a Class (at least at this school).


* Teachers **hasMany** Classes.  In other words, Teachers sometimes teach **many** Classes (and **exclusively own** each one of them).


* Students **hasAndBelongsToMany** Classes.  **Students have** one or more **Classes** and **Classes have** one or more **Students**.


* Classes **hasAndBelongsToMany** Students.  Again, **Students have** one or more **Classes** and **Classes have** one or more Students.


* Students **hasMany** Teachers related **through** Appointments.  Although **Teachers** and **Students** are indirectly related through their common **Classes**, the direct relationships between **many** Students and **many** Teachers takes place **through** the **Appointments** they arrange.


* Symmetrically, Teachers **hasMany** Students related **through** Appointments.  As stated above, although **Teachers** and **Students** are indirectly related through their common **Classes**, the direct relationships between **many** Students and **many** Teachers takes place **through** the **Appointments** they arrange.

That sets the scene so now let’s build a working **School** from the ground up.

##Part 1 - Relating Models in the LoopBack API Server

To follow along as you read below, you might want to install and run this **[LoopBack](http://loopback.io/)** / Node.js REST API Server App.  Follow the steps below.

```
Clone or Download a Zip of this GitHub Repository.

Ensure that you have installed Node.js



$ cd /YourChosenDirectory/.../LoopBackRelationships
	// wherever you saved the Project
    
$ npm install -g strongloop
	// So that you have LoopBack available if you haven't done so already

$ npm install -g bower
	// This will be required to download dependencies during the app install.
    
$ npm install
	// Ensures that all of the Project Dependencies are installed.
    
$ node ./server/server.js

	Browse your REST API at http://localhost:3000/explorer
	Web server listening at: http://localhost:3000/
    
    // Alternatively...
    
$ PORT=6000 node ./server/server.js
	// Would make your API explorable at http://localhost:6000/explorer
    
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

List all Classes: **[http://localhost:3000/api/Classes](http://localhost:3000/api/Classes)**

List all Teachers: **[http://localhost:3000/api/Teachers](http://localhost:3000/api/Teachers)** 

>**NOTE:** Whenever you see a links like the ones above and you have installed and run the **[LoopBack](http://loopback.io/)** REST API Server Application associated with this Repository, you can navigate to the links and exercise the API against the Sample Data.  You'll be seeing the final results of this Project and not the Step-by-Step build-up we're writing here.

The easiest way to Explore and manipulate the APIs you create with Loopback is to use LoopBack Explorer: **[http://localhost:3000/explorer](http://localhost:3000/explorer)**

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

Let’s now take a look at what **Classes** have been assigned to **Teacher 1**…

**[http://localhost:3000/api/Teachers/1/classes?filter={"include":"teachers"}](http://localhost:3000/api/Teachers/1/classes?filter={"include":"teachers"})**

If you try to check to see the **Classes** assigned to **Teacher 2**, you’d get an empty result. 

**[http://localhost:3000/api/Teachers/2/classes?filter={"include":"teachers"}](http://localhost:3000/api/Teachers/2/classes?filter={"include":"teachers"})**

So let’s assign a **Class** to **Teacher 2**.  Let’s assume that we have a **Class** with an **ID of 2** and we want to assigned **Teacher 2** to this **Class**.  Because Classes **belongsTo** Teachers, the way to accomplish this is simply to **Update** (http **PUT**) the **Class** with **ID 2**…

Where the body of the **PUT** message we pass along looks like below…  

>**NOTE** that this is EASY to do within LoopBack Explorer:  
**[.../api/Classes](http://localhost:3000/explorer/#!/Classes/Class_upsert)**

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

**[http://localhost:3000/api/Students/1/classes?filter={"include":"students"}](http://localhost:3000/api/Students/1/classes?filter={"include":"students"})**

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

**[.../api/Students/1/classes/rel/2](http://localhost:3000/explorer/#!/Students/Student_prototype_link_classes)**

or

**[.../api/Classes/2/students/rel/1](http://localhost:3000/explorer/#!/Classes/Class_prototype_link_students)**

If we again want to look at the **Classes** taken by **Student 1** as well ALL of the **Students** in each **Class** as well as the **Teachers** who teach the **Classes**, we’d use this API Link…

**[http://localhost:3000/api/Students/1/classes?filter={"include":["students","teachers"]}](http://localhost:3000/api/Students/1/classes?filter={"include":["students","teachers"]})**

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

POST:  **[../api/Appointments](http://localhost:3000/explorer/#!/Appointments/Appointment_create)**

The **body** of the **POST** message we pass along looks like below...

```
{
  "dateTime": "2014-10-25 8:15",
  "teacherId": 2,
  "studentId": 1
}
```

Lastly, let’s look at the **Appointments** for **Student 1**.  Just enter this API Link:

**[.../api/Appointments?filter={"where":{"studentId":1},"include":["teachers","students"]}](http://localhost:3000/explorer/#!/Appointments/Appointment_find)**

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

>**Note**: From **LoopBack Explorer**, when you want to **Query** your **Models**, the concept of **filter** is very useful and important.  In the example above the **LoopBack Explorer** will allow you enter a **filter** and entering ```**{"where":{"studentId":1},"include":["teachers","students"]}**``` will yield the results listed above.

***

###Summary of Part 1 - Relating Models in the LoopBack API Server

It's really easy to Model your Data Assets using **[LoopBack](http://loopback.io/)**.  But you **APIs** becomes REALLY powerful when your **Interrelate** your **Models** in ways that make sense for your App.  

Speaking of **Apps**, an **API** would be useless without **Apps**, so **Part 2** below will show you how to easily access your **API** from a **Single Page Web App** suitable for porting to **Mobile Devices**.

***

##Part 2 - Building a App which accesses your API

First, run the **[Student Enrollment App](http://localhost:3000)** from our School which includes Classes, Teachers and easily and seamlessly explores all of their interrelationships.  

>**Note**: you will only be able to **Run the App** locally if you followed the **installation instructions** at the **Top of Part 1** above.

You can start exploring the **[Source Code for the Student Enrollment App](https://github.com/tonysoft/LoopBackRelationships/tree/master/client)** and we'll be decomposing that code below.

***

###Accessing our Modelled APIs from an App

Consider the two images from our **Student Enrollment App** below based on the **API** we created in **Part 1** above.

![Student Enrollment](https://github.com/tonysoft/LoopBackRelationships/blob/master/ScreenShots/StudentEnrollmentBasic.png)
![Student Enrollment](https://github.com/tonysoft/LoopBackRelationships/blob/master/ScreenShots/StudentEnrollment.png)

In the first image, we see a **Simple List** of **Students** produced by accessing our **API**'s **Student** Model ```find()``` method as in the code below.

```
function getStudents() {
  Student							// access the Student Model Resource
  .find()							// call the "find" method
    .$promise                      
    .then(function(results) {
      $scope.students = results;	// and store the results
    });
}
```

Now let's exploit the **Model Relationships** we created in our **API** as illustrated in the second image above.  All we'll do is change the ```filter``` we pass into the ```find()``` method as seen in the code below.

```
function getStudents() {
  var filter =  { "filter":
                  {
                    "include":  { "relation": "classes", 
                                  "scope":  { 
                                              "include": ["teachers","students"]
                                            }
                                }
                  }
                };

  Student                         // access the Student Model Resource
    .find(filter)                 // call the "find" method
    .$promise                      
    .then(function(results) {
      $scope.students = results;  // and store the results
    });
}
```

In english, the ```filter``` applied above can be described as follows:

* ```find``` **Students**

* and also ```include``` all of the **Classes** ( ```relation```:```classes``` ) in which the **Student** is enrolled.

* Within the ```scope``` of all of the **Classes** related to and retrieved for each **Student**,

* also ```include``` the **Teacher** ( ```relation```:```teachers``` ) who teaches the **Class** as well as ALL other **Students** ( ```relation```:```students``` ) enrolled in the **Class**...

In the ensuing sections below, we'll de-mystify all of the **LoopBack / Angular Magic** that took place to display that list of **Students** and their related **Classes**, **Teachers**, and **Students** (classmates).

***

### Generating Angular Resources to access your LoopBack API

Once you've **created** and **related** your Models using **[LoopBack](http://loopback.io/)**, you can explore the resulting **APIs** using **[LoopBack Explorer](http://localhost:3000/explorer)** (assuming you followed the **Installation Instructions** near the top of **Part 1**).

Using **Explorer**, say you wanted to **[GET a List of all Students](http://localhost:3000/explorer/#!/Students/Student_find)**, you'd see the **GET URL**: **http://localhost:3000/api/Students** after you: ```Try it out!```.

If you wanted to **hand craft Client App Access** to your **APIs**, you'd could use **AJAX** type calls with the **XMLHttpRequest** object.  

But **[LoopBack](http://loopback.io/)** provides much easier way to access your **APIs** from your **App** when it is based on the **AngularJS Framework**.  It does this with the **LoopBack Angular SDK** and the Terminal Session below shows how we generated the **Angular Resources** used to provide **API Access** for our **App**.  The code samples above used these **Resources**,
  

```
$ cd /YourChosenDirectory/.../LoopBackRelationships/client
 
$ lb-ng ../server/server.js js/lb-services.js
Saving the generated services source to "js/lb-services.js"

$ cd js

$ ls
app.js		controllers.js	lb-services.js

```

Once you install **strongloop**, **Terminal Commands** like ```lb-ng``` (**LoopBack Angular**) are available as illustrated above.

Our **Student Enrollment App** is an **Angular Single Page App** accessed as a **Node.js Static Resource** at **[client/index.html](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/index.html)**

Below is a snippet from **index.html** which shows the **script tags** that are needed to run our **App**.

```
<!DOCTYPE html>
<html lang="en">
  <head>

	.
    .
    .
    
    <div class="container">
      <div ui-view></div>
    </div>

    <script src="vendor/jquery/dist/jquery.js"></script>
    <script src="vendor/bootstrap/dist/js/bootstrap.js"></script>
    <script src="vendor/angular/angular.js"></script>
    <script src="vendor/angular-resource/angular-resource.js"></script>
    <script src="vendor/angular-ui-router/release/angular-ui-router.js"></script>

    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>

    <script src="js/lb-services.js"></script>
    
  </body>
</html>
```

You'll notice that **[client/js/lb-services.js](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/js/lb-services.js)** generated by **lb-ng** above is loaded to provide access to our **API**.  You don't really have to be concerned about the structuree of its contents and can pretty much treat it as a **Black Box** to access your **API**.

But you'll want to see what **API Methods** have been made available to you.


```
// From a new Terminal Session...

$ cd /YourChosenDirectory/.../LoopBackRelationships/client
 
$ lb-ng-doc js/lb-services.js
Browse the documentation at http://localhost:3030/

```

>**Note:** LoopBack API Documentation will ONLY be viewable on Port 3030 as shown above.  The Port cannot be configured at this time.

Navigating to that Link will allow you to look at the **Methods** and their **Signatures**.  See the full **[LoopBack Angular SDK Documentation](http://docs.strongloop.com/display/LB/AngularJS+JavaScript+SDK)** for more options.

***

###Wiring your API into your Angular App

As discussed and illustrated above, the first step is to simply reference **[client/js/lb-services.js](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/js/lb-services.js)** from within **[client/index.html](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/index.html)**

```
<!DOCTYPE html>
<html lang="en">
  <head>

	.
    .
    .
    

    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>

    <script src="js/lb-services.js"></script>
    
  </body>
</html>
```

In the snippent above, we also reference  **[client/js/app.js](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/js/app.js)** which serves to set up the **Routes** that will be available from your **Angular App**. In our simple App, it's pretty compact and is listed in full below.

```
angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('students', {
        url: '/students',
        templateUrl: 'templates/students.html',
        controller: 'StudentsCtrl'
      })
      .state('student', {
        url: '/student/:id',
        templateUrl: 'templates/student.html',
        controller: 'StudentCtrl'
      })
      .state('class', {
        url: '/class/:id',
        templateUrl: 'templates/class.html',
        controller: 'ClassCtrl'
      })
      .state('teacher', {
        url: '/teacher/:id',
        templateUrl: 'templates/teacher.html',
        controller: 'TeacherCtrl'
      });
    $urlRouterProvider.otherwise('/students');
  }]);

```

If you're using **AngularJS**, you've seen this typical **App** definiation.  This important thing is specifying the ```dependency``` on our **LoopBack API Resource** from the module named ```'lbServices'```.

The **States** (Routes) we'll expose in our **App** are ```students```, ```student```, ```class```, and ```teacher```.  You can see how we've wired together the ```state```, ```url``` (path), ```templateUrl``` (html), and ```controller``` for each of the **Views** we will expose in our **App**.

As mentioned near the top of **Part 2**, you can run our **[Student Enrollment App](http://localhost:3000)** (if you've set it up) to see how it flows from a list of **Students**, into drilldowns for a specific **Student**, **Teacher**, or **Class**. See the **Students** and **Class** views illustrated below... 

![Student Enrollment](https://github.com/tonysoft/LoopBackRelationships/blob/master/ScreenShots/StudentEnrollment.png) ![Class Profile](https://github.com/tonysoft/LoopBackRelationships/blob/master/ScreenShots/Class.png)

***
###Retrieving Data via your LoopBack APIs

As you saw in the **Angular States** illustrated above, if we navigate to
**[http://localhost:3000/#/students](http://localhost:3000/#/students)** you'll see a list of all **Students** enrolled in our School as illustrated above left.

```
      .state('students', {
        url: '/students',
        templateUrl: 'templates/students.html',
        controller: 'StudentsCtrl'
      })
```

For simplicity, we put all of our **Angular Controllers** into a single module at **[client/js/controllers.js](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/js/controllers.js)** and below, we'll see the **Students Controller** illustrated.

```
angular
  .module('app')


  .controller
      ('StudentsCtrl', ['$scope', '$state', 'Student', function($scope, $state,
          Student) {
        $scope.students = [];
        function getStudents() {          // Define a helper function  
          var filter =  
                { "filter":
                  {
                    "include":  { "relation": "classes", 
                                  "scope":  { 
                                              "include": ["teachers","students"]
                                            }
                                }
                  }
                };
      
          Student                         // access the Student Model Resource
            .find(filter)                 // call the "find" method with a "filter"
            .$promise                      
            .then(function(results) {
              $scope.students = results;  // and store the results
            });
        }
        
        getStudents();                    // When the Controller is loaded...
      
    }])
```

The **JSON** return from ```results``` above and stored in ```$scope.students``` looks like this below...

```
[{
  "firstName": "Tony",
  "lastName": "Sukiennik",
  "id": 1,
  "classes": [{
    "subject": "LoopBack",
    "id": 1,
    "teacherId": 1,
    "teachers": {
      "firstName": "Issac",
      "lastName": "Roth",
      "id": 1
    },
    "students": [{
      "firstName": "Tony",
      "lastName": "Sukiennik",
      "id": 1
    }, {
      "firstName": "Dennis",
      "lastName": "Ashby",
      "id": 8
    }]
  }]
}, {
  "firstName": "Dennis",
  "lastName": "Ashby",
  "id": 8,
  "classes": [{
    "subject": "LoopBack",
    "id": 1,
    "teacherId": 1,
    "teachers": {
      "firstName": "Issac",
      "lastName": "Roth",
      "id": 1
    },
    "students": [{
      "firstName": "Tony",
      "lastName": "Sukiennik",
      "id": 1
    }, {
      "firstName": "Dennis",
      "lastName": "Ashby",
      "id": 8
    }]
  }]
}, {
  "firstName": "Ted",
  "lastName": "Smith",
  "id": 9,
  "classes": []
}]
```

It's as simple as that. Look at the ```filter``` specified above and then at the **JSON** results and see how the **Relationships** you created in **Part 1** above are easily reflected through the **API**.


***
###Rendering with **Angular Data Binding**

The last step in the **end-to-end** process which comes after **Creating**, **Retrieving** and **Rendering** your **LoopBack Relationships** is **Rendering** them within your **Angular Views**.

For the **Students View**, let look at **[client/templates/students.html](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/templates/students.html)** and check out the **Angular Data Binding** used to **Render** our **Students** View.  Check out the **HTML Template Markup** below.

```
<h1>Student Enrollment</h1>
<hr>
<div class="list-group">
 	<div class="list-group-item level1" style="cursor:default;" 

 		ng-repeat="student in students">
	 		<!-- 'students' above is '$scope.students' in the controller -->
	 		<!--  let's iterate for each 'student' we find in that array -->

  		<a class="paddedBlock"

  			href="#/student/{{student.id}}">
  				<!-- hyperlink to a specific 'student' -->

  			{{student.firstName}}
  			{{student.lastName}}
  				<!-- data bind to the first and last name of the 'student' -->

  		</a>

  		<ng-include src="'templates/studentProfile.html'"/>
  			<!-- This renders the students's Classes, Teachers, Classmates -->

	</div>
</div>
```

Notice above ```<ng-include src="'templates/studentProfile.html'"/>```.  This is the detail for each ```student``` that is rendered from the **Student Enrollment** list. It is also included to render a specific **Student** when we drill down from any other view. Below is what the **[client/templates/studentProfile.html](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/templates/studentProfile.html)** template looks like.  This is an example of **Code Reuse** within your **Angular Templating**.

```
<a class="paddedBlock"

	href="#/student/{{student.id}}">
		<!-- hyperlink to a specific 'student' -->

	{{student.firstName}}
	{{student.lastName}}
		<!-- data bind to the first and last name of the 'student' -->

</a>

<div class="list-group-item level2" style="cursor:default;" 
			ng-repeat="class in student.classes">
				<!-- we included 'classes' for each 'student' -->
				<!-- so iterate for each 'class' -->

		<div class="paddedBlock">
			<a href="#/class/{{class.id}}">
				<!-- hyperlink to a specific 'student' -->

				{{class.subject}}
					<!-- display the 'subject' of the 'class' -->

			</a>

  		<span ng-if="class.teachers">
				<!-- if the 'class' has a teacher assigned -->
  			taught by: 

  			<a href="#/teacher/{{class.teachers.id}}">
					<!-- hyperlink to that 'teacher' -->

  				{{class.teachers.firstName}}
  				{{class.teachers.lastName}}
						<!-- first and last name of the 'teacher' -->

  			</a>
  		</span>
  	</div>
 	<div class="list-group-item level3" style="cursor:default;"

 		ng-repeat="studentInClass in class.students"
 		ng-if="class.students && (student.id != studentInClass.id)">
				<!-- for each 'student' in each 'class' -->
				<!-- if the 'student' is not the top level 'student' -->

  			<span>Classmate: 
  				<a href="#/student/{{studentInClass.id}}">
						<!-- hyperlink to the 'classmate' 'student' -->

  					{{studentInClass.firstName}}
  					{{studentInClass.lastName}}
							<!-- and display their first and last name -->
							
  				</a>
  			</span>
	</div>
</div>
```

And the resulting **View** looks like this...

![Student Enrollment](https://github.com/tonysoft/LoopBackRelationships/blob/master/ScreenShots/StudentEnrollment.png) 

###Exploring the **Student**, **Class**, and **Teacher** Views

The **Student**, **Class**, and **Teacher** controllers co-reside in **[client/js/controllers.js](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/js/controllers.js)** so look at the subtle differences in the ```filter``` used to retrieve each one of these **Entities** via the **API**.  Check out the **[Querying model data LoopBack Documentation](http://docs.strongloop.com/display/LB/Querying+model+data)** and experiment further.  

One difference you'll see if that the **Controllers** other than **Students** use a ```where``` clause within their ```filter``` as seen below in a snippet from the **Class Controller**.  You might ask: "Why didn't you use the ```findById``` method instead of the ```find``` method in these cases?  It's because ```findById``` does not accept a ```filter``` parameter and that's what we need in order to also retrieve the **Relationships** to each **Entity**.

```
function getClass() {
  Class
    .find({"filter":
              {
                "where": {"id": $state.params.id},
                "include": ["teachers","students"]
              }})
    .$promise
    .then(function(results) {
      $scope.class = results[0];
    });
}
```

Explore the **[Student View Template](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/templates/student.html)**, **[Teacher View Template](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/templates/teacher.html)**, and **[Class View Template](https://github.com/tonysoft/LoopBackRelationships/blob/master/client/templates/class.html)** to close the loop on how each **View** is rendered.



##Summary

Enjoy how easy it is to **Create** and **Relate** your **LoopBack Models** and how easy it is to access the resulting **APIs** within the awesome **Apps** you'll dream of and create.


Stay tuned for a tutorial on how to configure the **App** to **Create**, **Update**, and **Delete** both **Entities** as well as the **Relationships** between them.  

That's all for now...  

***

Contact **[Tony Sukiennik](mailto:tony@iRelate.us)** with feedback


