import $ from "jquery"
class ListLessonController {
  constructor($lesson, $http, $static) {
    "ngInject";
    this.$lesson = $lesson;
    this.name = 'listLesson';
    var req = {
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
        "authorization": "Bearer " + localStorage.getItem('token'),
      },

    }
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://185.88.153.198/lesson/list",
      "method": "POST",
      "headers": {
        "authorization": "Bearer " + localStorage.getItem('token')
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
    // $http(settings)
  }

  $onInit() {
    // this.$lesson.list()
  }
}

export default ListLessonController;