(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Student
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Student` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Student",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Students/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Student.classes.findById() instead.
        "prototype$__findById__classes": {
          url: urlBase + "/Students/:id/classes/:fk",
          method: "GET",
        },

        // INTERNAL. Use Student.classes.destroyById() instead.
        "prototype$__destroyById__classes": {
          url: urlBase + "/Students/:id/classes/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Student.classes.updateById() instead.
        "prototype$__updateById__classes": {
          url: urlBase + "/Students/:id/classes/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Student.classes.link() instead.
        "prototype$__link__classes": {
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Student.classes.unlink() instead.
        "prototype$__unlink__classes": {
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Student.classes.exists() instead.
        "prototype$__exists__classes": {
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "HEAD",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__findById__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find a related item by id for teachers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__findById__teachers": {
          url: urlBase + "/Students/:id/teachers/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__destroyById__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a related item by id for teachers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "prototype$__destroyById__teachers": {
          url: urlBase + "/Students/:id/teachers/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__updateById__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update a related item by id for teachers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__updateById__teachers": {
          url: urlBase + "/Students/:id/teachers/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__link__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Add a related item by id for teachers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__link__teachers": {
          url: urlBase + "/Students/:id/teachers/rel/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__unlink__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Remove the teachers relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "prototype$__unlink__teachers": {
          url: urlBase + "/Students/:id/teachers/rel/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__exists__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Check the existence of teachers relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for teachers
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__exists__teachers": {
          url: urlBase + "/Students/:id/teachers/rel/:fk",
          method: "HEAD",
        },

        // INTERNAL. Use Student.classes() instead.
        "prototype$__get__classes": {
          url: urlBase + "/Students/:id/classes",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Student.classes.create() instead.
        "prototype$__create__classes": {
          url: urlBase + "/Students/:id/classes",
          method: "POST",
        },

        // INTERNAL. Use Student.classes.destroyAll() instead.
        "prototype$__delete__classes": {
          url: urlBase + "/Students/:id/classes",
          method: "DELETE",
        },

        // INTERNAL. Use Student.classes.count() instead.
        "prototype$__count__classes": {
          url: urlBase + "/Students/:id/classes/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__get__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries teachers of Student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__get__teachers": {
          url: urlBase + "/Students/:id/teachers",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__create__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Creates a new instance in teachers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__create__teachers": {
          url: urlBase + "/Students/:id/teachers",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__delete__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Deletes all teachers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__teachers": {
          url: urlBase + "/Students/:id/teachers",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__count__teachers
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Counts teachers of Student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__teachers": {
          url: urlBase + "/Students/:id/teachers/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#create
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Students",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#upsert
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Students",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#exists
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Students/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#findById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Students/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#find
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Students",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#findOne
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Students/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#updateAll
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Students/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#deleteById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Students/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#count
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Students/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$updateAttributes
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Students/:id",
          method: "PUT",
        },

        // INTERNAL. Use Class.students.findById() instead.
        "::findById::Class::students": {
          url: urlBase + "/Classes/:id/students/:fk",
          method: "GET",
        },

        // INTERNAL. Use Class.students.destroyById() instead.
        "::destroyById::Class::students": {
          url: urlBase + "/Classes/:id/students/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Class.students.updateById() instead.
        "::updateById::Class::students": {
          url: urlBase + "/Classes/:id/students/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Class.students.link() instead.
        "::link::Class::students": {
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Class.students.unlink() instead.
        "::unlink::Class::students": {
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Class.students.exists() instead.
        "::exists::Class::students": {
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "HEAD",
        },

        // INTERNAL. Use Class.students() instead.
        "::get::Class::students": {
          url: urlBase + "/Classes/:id/students",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Class.students.create() instead.
        "::create::Class::students": {
          url: urlBase + "/Classes/:id/students",
          method: "POST",
        },

        // INTERNAL. Use Class.students.destroyAll() instead.
        "::delete::Class::students": {
          url: urlBase + "/Classes/:id/students",
          method: "DELETE",
        },

        // INTERNAL. Use Class.students.count() instead.
        "::count::Class::students": {
          url: urlBase + "/Classes/:id/students/count",
          method: "GET",
        },

        // INTERNAL. Use Appointment.students() instead.
        "::get::Appointment::students": {
          url: urlBase + "/Appointments/:id/students",
          method: "GET",
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Student#updateOrCreate
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Student#update
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Student#destroyById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Student#removeById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
     * @ngdoc object
     * @name lbServices.Student.classes
     * @object
     * @description
     *
     * The object `Student.classes` groups methods
     * manipulating `Class` instances related to `Student`.
     *
     * Use {@link lbServices.Student#classes} to query
     * all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#classes
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries classes of Student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#count
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Counts classes of Student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.classes.count = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::count::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#create
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Creates a new instance in classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.create = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::create::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#destroyAll
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Deletes all classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::delete::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#destroyById
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Delete a related item by id for classes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::destroyById::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#exists
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Check the existence of classes relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.exists = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::exists::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#findById
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Find a related item by id for classes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::findById::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#link
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Add a related item by id for classes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.link = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::link::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#unlink
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Remove the classes relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        R.classes.unlink = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::unlink::Student::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.classes#updateById
         * @methodOf lbServices.Student.classes
         *
         * @description
         *
         * Update a related item by id for classes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::updateById::Student::classes"];
          return action.apply(R, arguments);
        };

    /**
    * @ngdoc property
    * @name lbServices.Student#modelName
    * @propertyOf lbServices.Student
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Student`.
    */
    R.modelName = "Student";

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Teacher
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Teacher` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Teacher",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Teachers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Teacher.classes.findById() instead.
        "prototype$__findById__classes": {
          url: urlBase + "/Teachers/:id/classes/:fk",
          method: "GET",
        },

        // INTERNAL. Use Teacher.classes.destroyById() instead.
        "prototype$__destroyById__classes": {
          url: urlBase + "/Teachers/:id/classes/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Teacher.classes.updateById() instead.
        "prototype$__updateById__classes": {
          url: urlBase + "/Teachers/:id/classes/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__findById__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find a related item by id for students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__findById__students": {
          url: urlBase + "/Teachers/:id/students/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__destroyById__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a related item by id for students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "prototype$__destroyById__students": {
          url: urlBase + "/Teachers/:id/students/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__updateById__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update a related item by id for students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__updateById__students": {
          url: urlBase + "/Teachers/:id/students/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__link__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Add a related item by id for students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__link__students": {
          url: urlBase + "/Teachers/:id/students/rel/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__unlink__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Remove the students relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "prototype$__unlink__students": {
          url: urlBase + "/Teachers/:id/students/rel/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__exists__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Check the existence of students relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__exists__students": {
          url: urlBase + "/Teachers/:id/students/rel/:fk",
          method: "HEAD",
        },

        // INTERNAL. Use Teacher.classes() instead.
        "prototype$__get__classes": {
          url: urlBase + "/Teachers/:id/classes",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Teacher.classes.create() instead.
        "prototype$__create__classes": {
          url: urlBase + "/Teachers/:id/classes",
          method: "POST",
        },

        // INTERNAL. Use Teacher.classes.destroyAll() instead.
        "prototype$__delete__classes": {
          url: urlBase + "/Teachers/:id/classes",
          method: "DELETE",
        },

        // INTERNAL. Use Teacher.classes.count() instead.
        "prototype$__count__classes": {
          url: urlBase + "/Teachers/:id/classes/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__get__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Queries students of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__get__students": {
          url: urlBase + "/Teachers/:id/students",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__create__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$__create__students": {
          url: urlBase + "/Teachers/:id/students",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__delete__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Deletes all students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__students": {
          url: urlBase + "/Teachers/:id/students",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$__count__students
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Counts students of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__students": {
          url: urlBase + "/Teachers/:id/students/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#create
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Teachers",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#upsert
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Teachers",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#exists
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Teachers/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#findById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Teachers/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#find
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Teachers",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#findOne
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Teachers/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#updateAll
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Teachers/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#deleteById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Teachers/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#count
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Teachers/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$updateAttributes
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Teachers/:id",
          method: "PUT",
        },

        // INTERNAL. Use Class.teachers() instead.
        "::get::Class::teachers": {
          url: urlBase + "/Classes/:id/teachers",
          method: "GET",
        },

        // INTERNAL. Use Appointment.teachers() instead.
        "::get::Appointment::teachers": {
          url: urlBase + "/Appointments/:id/teachers",
          method: "GET",
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Teacher#updateOrCreate
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#update
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#destroyById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#removeById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
     * @ngdoc object
     * @name lbServices.Teacher.classes
     * @object
     * @description
     *
     * The object `Teacher.classes` groups methods
     * manipulating `Class` instances related to `Teacher`.
     *
     * Use {@link lbServices.Teacher#classes} to query
     * all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Teacher#classes
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Queries classes of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::get::Teacher::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.classes#count
         * @methodOf lbServices.Teacher.classes
         *
         * @description
         *
         * Counts classes of Teacher.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.classes.count = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::count::Teacher::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.classes#create
         * @methodOf lbServices.Teacher.classes
         *
         * @description
         *
         * Creates a new instance in classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.create = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::create::Teacher::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.classes#destroyAll
         * @methodOf lbServices.Teacher.classes
         *
         * @description
         *
         * Deletes all classes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::delete::Teacher::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.classes#destroyById
         * @methodOf lbServices.Teacher.classes
         *
         * @description
         *
         * Delete a related item by id for classes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::destroyById::Teacher::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.classes#findById
         * @methodOf lbServices.Teacher.classes
         *
         * @description
         *
         * Find a related item by id for classes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::findById::Teacher::classes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Teacher.classes#updateById
         * @methodOf lbServices.Teacher.classes
         *
         * @description
         *
         * Update a related item by id for classes
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Person id
         *
         *  - `fk` – `{*}` - Foreign key for classes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Class");
          var action = TargetResource["::updateById::Teacher::classes"];
          return action.apply(R, arguments);
        };

    /**
    * @ngdoc property
    * @name lbServices.Teacher#modelName
    * @propertyOf lbServices.Teacher
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Teacher`.
    */
    R.modelName = "Teacher";

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Class
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Class` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Class",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Classes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Class.students.findById() instead.
        "prototype$__findById__students": {
          url: urlBase + "/Classes/:id/students/:fk",
          method: "GET",
        },

        // INTERNAL. Use Class.students.destroyById() instead.
        "prototype$__destroyById__students": {
          url: urlBase + "/Classes/:id/students/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Class.students.updateById() instead.
        "prototype$__updateById__students": {
          url: urlBase + "/Classes/:id/students/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Class.students.link() instead.
        "prototype$__link__students": {
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Class.students.unlink() instead.
        "prototype$__unlink__students": {
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Class.students.exists() instead.
        "prototype$__exists__students": {
          url: urlBase + "/Classes/:id/students/rel/:fk",
          method: "HEAD",
        },

        // INTERNAL. Use Class.teachers() instead.
        "prototype$__get__teachers": {
          url: urlBase + "/Classes/:id/teachers",
          method: "GET",
        },

        // INTERNAL. Use Class.students() instead.
        "prototype$__get__students": {
          url: urlBase + "/Classes/:id/students",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Class.students.create() instead.
        "prototype$__create__students": {
          url: urlBase + "/Classes/:id/students",
          method: "POST",
        },

        // INTERNAL. Use Class.students.destroyAll() instead.
        "prototype$__delete__students": {
          url: urlBase + "/Classes/:id/students",
          method: "DELETE",
        },

        // INTERNAL. Use Class.students.count() instead.
        "prototype$__count__students": {
          url: urlBase + "/Classes/:id/students/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#create
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Classes",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#upsert
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Classes",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#exists
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Classes/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#findById
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Classes/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#find
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Classes",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#findOne
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Classes/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#updateAll
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Classes/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#deleteById
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Classes/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#count
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Classes/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Class#prototype$updateAttributes
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Classes/:id",
          method: "PUT",
        },

        // INTERNAL. Use Student.classes.findById() instead.
        "::findById::Student::classes": {
          url: urlBase + "/Students/:id/classes/:fk",
          method: "GET",
        },

        // INTERNAL. Use Student.classes.destroyById() instead.
        "::destroyById::Student::classes": {
          url: urlBase + "/Students/:id/classes/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Student.classes.updateById() instead.
        "::updateById::Student::classes": {
          url: urlBase + "/Students/:id/classes/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Student.classes.link() instead.
        "::link::Student::classes": {
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Student.classes.unlink() instead.
        "::unlink::Student::classes": {
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Student.classes.exists() instead.
        "::exists::Student::classes": {
          url: urlBase + "/Students/:id/classes/rel/:fk",
          method: "HEAD",
        },

        // INTERNAL. Use Student.classes() instead.
        "::get::Student::classes": {
          url: urlBase + "/Students/:id/classes",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Student.classes.create() instead.
        "::create::Student::classes": {
          url: urlBase + "/Students/:id/classes",
          method: "POST",
        },

        // INTERNAL. Use Student.classes.destroyAll() instead.
        "::delete::Student::classes": {
          url: urlBase + "/Students/:id/classes",
          method: "DELETE",
        },

        // INTERNAL. Use Student.classes.count() instead.
        "::count::Student::classes": {
          url: urlBase + "/Students/:id/classes/count",
          method: "GET",
        },

        // INTERNAL. Use Teacher.classes.findById() instead.
        "::findById::Teacher::classes": {
          url: urlBase + "/Teachers/:id/classes/:fk",
          method: "GET",
        },

        // INTERNAL. Use Teacher.classes.destroyById() instead.
        "::destroyById::Teacher::classes": {
          url: urlBase + "/Teachers/:id/classes/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Teacher.classes.updateById() instead.
        "::updateById::Teacher::classes": {
          url: urlBase + "/Teachers/:id/classes/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Teacher.classes() instead.
        "::get::Teacher::classes": {
          url: urlBase + "/Teachers/:id/classes",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Teacher.classes.create() instead.
        "::create::Teacher::classes": {
          url: urlBase + "/Teachers/:id/classes",
          method: "POST",
        },

        // INTERNAL. Use Teacher.classes.destroyAll() instead.
        "::delete::Teacher::classes": {
          url: urlBase + "/Teachers/:id/classes",
          method: "DELETE",
        },

        // INTERNAL. Use Teacher.classes.count() instead.
        "::count::Teacher::classes": {
          url: urlBase + "/Teachers/:id/classes/count",
          method: "GET",
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Class#updateOrCreate
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Class` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Class#update
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Class#destroyById
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Class#removeById
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
     * @ngdoc object
     * @name lbServices.Class.students
     * @object
     * @description
     *
     * The object `Class.students` groups methods
     * manipulating `Student` instances related to `Class`.
     *
     * Use {@link lbServices.Class#students} to query
     * all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Class#students
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Queries students of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#count
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Counts students of Class.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.students.count = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::count::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#create
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Creates a new instance in students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.create = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::create::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#destroyAll
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Deletes all students of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.students.destroyAll = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::delete::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#destroyById
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Delete a related item by id for students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        R.students.destroyById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::destroyById::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#exists
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Check the existence of students relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.exists = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::exists::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#findById
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Find a related item by id for students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.findById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::findById::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#link
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Add a related item by id for students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.link = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::link::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#unlink
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Remove the students relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        R.students.unlink = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::unlink::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class.students#updateById
         * @methodOf lbServices.Class.students
         *
         * @description
         *
         * Update a related item by id for students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for students
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students.updateById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::updateById::Class::students"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Class#teachers
         * @methodOf lbServices.Class
         *
         * @description
         *
         * Fetches belongsTo relation teachers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::get::Class::teachers"];
          return action.apply(R, arguments);
        };

    /**
    * @ngdoc property
    * @name lbServices.Class#modelName
    * @propertyOf lbServices.Class
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Class`.
    */
    R.modelName = "Class";

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Appointment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Appointment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Appointment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Appointments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Appointment.teachers() instead.
        "prototype$__get__teachers": {
          url: urlBase + "/Appointments/:id/teachers",
          method: "GET",
        },

        // INTERNAL. Use Appointment.students() instead.
        "prototype$__get__students": {
          url: urlBase + "/Appointments/:id/students",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#create
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Appointments",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#upsert
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Appointments",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#exists
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Appointments/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#findById
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Appointments/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#find
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Appointments",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#findOne
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Appointments/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#updateAll
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Appointments/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#deleteById
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Appointments/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#count
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Appointments/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Appointment#prototype$updateAttributes
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Appointments/:id",
          method: "PUT",
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Appointment#updateOrCreate
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appointment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Appointment#update
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Appointment#destroyById
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Appointment#removeById
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];



        /**
         * @ngdoc method
         * @name lbServices.Appointment#teachers
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Fetches belongsTo relation teachers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.teachers = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::get::Appointment::teachers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appointment#students
         * @methodOf lbServices.Appointment
         *
         * @description
         *
         * Fetches belongsTo relation students
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.students = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::Appointment::students"];
          return action.apply(R, arguments);
        };

    /**
    * @ngdoc property
    * @name lbServices.Appointment#modelName
    * @propertyOf lbServices.Appointment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Appointment`.
    */
    R.modelName = "Appointment";

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = '$LoopBack$' + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = '$LoopBack$' + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc provider
   * @name lbServices.LoopBackResourceProvider
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
