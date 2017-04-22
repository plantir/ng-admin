class MainContentController {
  constructor($lesson, $box, $pixel, $rootScope) {
    "ngInject";
    this.$lesson = $lesson;
    this.$box = $box;
    this.$pixel = $pixel;
    this.$selected = {}
    this.lessons = $lesson.list()
    this.boxes = {}
    this.pixels = {}
    $rootScope.$on('TotalScroll', () => {
      console.log("object");
    })
  }

  selectLesson(lesson) {
    this.$selected.lesson = lesson;
    this.boxes = {}
    this.pixels = {}
    this.boxes = this.$box.list()

  }
  selectBox(box) {
    this.$selected.box = box;
    this.pixels = this.$pixel.list(()=>{
      this.pixels.pageNumber = 1;
    })
  }


  onScroll(type) {
    switch (type) {
      case "lessons":

        break;
      case "boxes":

        break;
      case "pixels":
        if(this.pixels.noMore){
          break;
        }
        
        this.pixels.pageNumber++;
        this.$pixel.list({pageNumber:this.pixels.pageNumber},(res)=>{
          this.pixels.data = this.pixels.data.concat(res.data)
        })
        console.log("object");
        // this.pixels.noMore = true;

        break;

    }
  }
}

export default MainContentController;