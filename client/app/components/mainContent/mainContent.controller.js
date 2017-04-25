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

  selectBox(box, index) {
    this.$selected.pixel = null;
    box.$index = index;
    this.$selected.box = box;
    this.pixels.$loading = true;
    this.$pixel.list((res) => {
      this.pixels = res;
      this.pixels.pageNumber = 1;
    })
  }

  selectPixel(pixel, index) {
    pixel.$index = index;
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
        }, {

        }, (res) => {
          if (res.data.length < 10) {
            this.pixels.noMore = true;
          }
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

    function deleteFn() {

      return self.$q((resolve, reject) => {
        fn.$delete((res) => {
          resolve(res)
        }, (err) => {
          reject(err.data.message)
        })
        // self.$timeout(() => {
        //   resolve('kh')
        // }, 300)
      })
    }

    var confirm = this.$mdDialog
      .confirm()
      .targetEvent(ev)
      .parent(angular.element(document.body))
      .doneFN(deleteFn)
    // .title('Are You Sure?')
    // .textContent('You will not be able to recover this imaginary file!')
    // .ok('Yes DELETE IT!')
    // .cancel('CANCEL')
    // .doneTitle('Deleted')
    // .doneTextContent('Your imaginary file has been deleted.')
    // .doneOk('ok')
    // .errRetry('ok')
    // .errTitle('ok')
    // .errTextContent('ok')

    this.$mdDialog.show(confirm).then((result) => {
      switch (type) {
        case 'lesson':
          this.$selected.lesson.$class = 'animated ng-zoomOut';
          this.$timeout(() => {
            this.lessons.data.splice(this.$selected.lesson.$index, 1);
            this.$selected = {};
            this.boxes = {};
            this.pixels = {};
          }, 1)
          break;
        case 'box':
          this.$selected.box.$class = 'animated ng-zoomOut';
          this.$timeout(() => {
            this.boxes.data.splice(this.$selected.box.$index, 1);
            this.$selected.box = {};
            this.pixels = {};
          }, 1)
          break;
        case 'pixel':
          this.$selected.pixel.$class = 'animated ng-zoomOut';
          this.$timeout(() => {
            this.pixels.data.splice(this.$selected.pixel.$index, 1);
            this.$selected.pixel = {};
          }, 1)
          break;
      }



    }, this, () => {
      console.log("cancel");
    });
  }
  edit(type) {
    let model
    switch (type) {
      case 'lesson':
        model = angular.copy(this.$selected.lesson);
        break;
      case 'box':
        model = angular.copy(this.$selected.box);
        break;
      case 'pixel':
        model = angular.copy(this.$selected.pixel);
        break;
    }
    console.log(model);
    this.$edit = {
      type: type,
      model: model
    }
  }
  $onInit() {
    this.lessons.$loading = true;
    this.$lesson.list((res) => {
      this.lessons = res;
    })

  }
}

export default MainContentController;