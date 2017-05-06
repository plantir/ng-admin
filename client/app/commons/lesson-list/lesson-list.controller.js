class LessonListController {
  constructor($lesson) {
    "ngInject";
    console.log("object");
    this.$lesson = $lesson;
    this.lessons = {}
  }



  $onInit() {
    this.lessons.$loading = true;
    this.$lesson.list((res) => {
      this.lessons = res;
      this.lessons.pageNumber = 1;

    })
  }

  selectLesson(lesson, index) {
    lesson.$index = index;
    this.$selected.lesson = lesson;

    this.boxes = {};
    this.pixels = {};
    this.boxes.$loading = true;
    this.$box.list((res) => {
      this.boxes = res;
      this.boxes.pageNumber = 1;
    })

  }
}

export default LessonListController;