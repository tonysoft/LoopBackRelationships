If you have been introduced to LoopBack, you know it’s easy to create Models which map to your Data Assets.

This Document and Sample Application will help you understand how to create meaningful Relationships between your Data Models.

So let’s dive right in and set the scene at a School where “Students” take “Classes” taught by “Teachers” and where “Students” and “Teachers” schedule “Appointments” for one-on-one learning sessions.

Using the technical Relationship Terminology used when declaring LoopBack Models, let’s list the Relationships which define the interactions within our School.  Pardon us if the English sounds awkward but we think you’ll get the idea and learn the keywords at the same time.

1. Classes belongsTo Teachers.  In other words, Teachers own the Classes and only one Teacher teaches a Class (at least at this school).

2. Teachers hasMany Classes.  In other words, Teachers sometimes teach many Classes (and own each one of them).

3. Students hasAndBelongsToMany Classes.  Students generally have more than one Class and most Classes have more than one Student.

4. Classes hasAndBelongsToMany Students.  Again, Students generally have more than one Class and most Classes have more than one Student.

5. Students hasMany Teachers related through appointments.  Although Teachers and Students are indirectly related through their common classes, the direct relationships between many Students and many Teachers takes place through the Appointments they arrange.

6. Symmetrically, Teachers hasMany Students related through appointments.  As stated above, although Teachers and Students are indirectly related through their common classes, the direct relationships between many Students and many Teachers takes place through the Appointments they arrange.




[Now Read this Document to walk you through this Project](https://docs.google.com/document/d/18qPcyOCkWF6xBYz4JZzjNMERTGMehYRiPfrlao3tkTM/edit?usp=sharing)