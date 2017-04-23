class MainContentController {
  constructor($lesson, $box, $pixel, $timeout, $mdDialog, $q) {
    "ngInject";
    this.$lesson = $lesson;
    this.$box = $box;
    this.$pixel = $pixel;
    this.$timeout = $timeout;
    this.$mdDialog = $mdDialog;
    this.$q = $q;
    this.$selected = {};
    this.lessons = {};
    this.boxes = {};
    this.pixels = {};


  }

  selectLesson(lesson, index) {
    this.$selected.box = null;
    this.$selected.pixel = null;
    lesson.$index = index;
    this.$selected.lesson = lesson;

    this.boxes = {};
    this.pixels = {};
    this.boxes.$loading = true;
    this.$box.list((res) => {
      this.boxes = res;
    })

  }

  selectBox(box) {
    this.$selected.pixel = null;
    this.$selected.box = box;
    this.pixels.$loading = true;
    this.$pixel.list((res) => {
      this.pixels = res;
      this.pixels.pageNumber = 1;
    })
  }

  selectPixel(pixel) {
    this.$selected.pixel = pixel;
  }

  onScroll(type) {
    switch (type) {
      case "lessons":

        break;
      case "boxes":

        break;
      case "pixels":
        if (this.pixels.noMore) {
          break;
        }

        this.pixels.pageNumber++;
        this.pixels.$loading = true;
        this.$pixel.list({
          pageNumber: this.pixels.pageNumber
        }, (res) => {
          this.pixels.data = this.pixels.data.concat(res.data)
          this.pixels.$loading = false;

        })
        // this.pixels.noMore = true;

        break;

    }
  }

  delete(type, ev) {
    var self = this;

    var fn;

    switch (type) {
      case 'lesson':
        fn = new this.$lesson(this.$selected.lesson);
        break;
      case 'box': 
        fn = new this.$box(this.$selected.box);
        break;
      case 'pixel':
        fn = new this.$pixel(this.$selected.pixel);
        break;

    }

    function a() {

      return self.$q((resolve, reject) => {
        // fn.$delete(()=>{
        //   resolve('deleted')
        // },()=>{
        //   reject('err')
        // })
        self.$timeout(() => {
          resolve('kh')
        }, 300)
      })
    }

    var confirm = this.$mdDialog
      .confirm()
      .title('Are You Sure?')
      .textContent('You will not be able to recover this imaginary file!')
      .ok('Yes DELETE IT!')
      .targetEvent(ev)
      .parent(angular.element(document.body))
      .cancel('CANCEL')
      .doneTitle('Deleted')
      .doneTextContent('Your imaginary file has been deleted.')
      .doneFN(a)
      .doneOk('ok')

    this.$mdDialog.show(confirm).then((result) => {
      this.$selected.lesson.$class = 'animated ng-zoomOut';
      this.$timeout(() => {
        this.lessons.data.splice(this.$selected.lesson.$index, 1);
        this.$selected = {};
        this.boxes = {};
        this.pixels = {};
      }, 1)

    }, this, () => {
      console.log("cancel");
    });
  }

  $onInit() {
    this.lessons.$loading = true;
    this.$lesson.list((res) => {
      this.lessons = res;
    })

  }
}

export default MainContentController;