class PlacementTestController {
  constructor($lesson, $placementTest, $systemConfiguration, $mdDialog, $q, $timeout, $document, $httpParamSerializerJQLike, $mdToast) {
    "ngInject";
    this.$mdDialog = $mdDialog;
    this.$q = $q;
    this.$timeout = $timeout;
    this.$document = $document;
    this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
    this.$mdToast = $mdToast;
    this.$selected = {};
    this.phaseNumbers = [1, 2, 3, 4];
    this.$edit = {};
    this.$lesson = $lesson;
    this.lessons = {};
    this.$systemConfiguration = $systemConfiguration;
    this.placements = {};
    this.$placementTest = $placementTest;
    this.pixels = {}
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
    this.$selected.placement = null;
    this.$selected.pixel = null;
    this.placements.$loading = true;
    this.placements = {};
    this.pixels = {};
    this.$systemConfiguration.ListPlacementTestThreshold((res) => {
      this.placements = res;
      this.placements.pageNumber = 1;
    })

  }

  selectPlacement(placement, index) {
    placement.$index = index;
    this.$selected.placement = placement;
    this.pixels.$loading = true;
    this.pixels = {};
    this.$placementTest.ListPlacementTestPixels((res) => {
      this.pixels = res;
      this.pixels.pageNumber = 1;
    })

  }

  deletePlacement(ev) {
    var fn = new this.$systemConfiguration(this.$selected.placement)
    var self = this;

    function deleteFn() {

      return self.$q((resolve, reject) => {
        fn.$DeletePlacementTestThreshold((res) => {
          resolve(res)
        }, (err) => {
          reject(err.data.message)
        })
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

      this.$selected.placement.$class = 'animated ng-zoomOut';
      this.$timeout(() => {
        this.placements.data.splice(this.$selected.placement.$index, 1);
        this.$selected.placement = {};
        this.pixels = {};
      }, 1)
    }, this, () => {
      console.log("cancel");
    });
  }

  editPlacement() {
    let model = angular.copy(this.$selected.placement);
    this.$edit = {
      mode: true,
      type: 'placement',
      model: model,
      $error: null
    }
    this.$timeout(() => {
      this.$onFromInit()
    }, 500)
  }

  addPlacement() {
    let model = {
      lessonId: this.$selected.lesson.id
    };
    this.$edit = {
      mode: true,
      type: 'placement',
      model: model,
      $error: null
    }
    this.$timeout(() => {
      this.$onFromInit()
    }, 500)
  }

  savePlacement(placement) {
    this.$edit.loading = true;
    var serializePlacement = this.$httpParamSerializerJQLike(placement)
    if (placement.id) {
      this.$systemConfiguration.EditPlacementTestThreshold(serializePlacement, (res) => {
        this.$edit.mode = false;
        this.$onFromDestriy();
        this.$notify('عملیات با موفقیت انجام شد');
        this.placements.data[placement.$index] = placement;
      }, (err) => {
        this.$edit.loading = false;
        this.$edit.$error = err.data.message;
      });
    } else {
      this.$systemConfiguration.CreatePlacementTestThreshold(serializePlacement, (res) => {
        this.$edit.mode = false;
        this.$onFromDestriy();
        this.$notify('عملیات با موفقیت انجام شد');

        // this.$edit.model = res.data;
        // this.placements.data.push(res.data);

        this.$systemConfiguration.ListPlacementTestThreshold((res) => {
          this.placements = res;
          this.placements.pageNumber = 1;
        })
      }, (err) => {
        this.$edit.loading = false;
        this.$edit.$error = err.data.message;
      });
    }
  }

  selectPixel(pixel, index) {
    pixel.$index = index;
    this.$selected.pixel = pixel;
  }

  addPixel() {
    let model = [{
      phaseNumber: this.$selected.placement.phaseNumber,
      orderNumber: null
    }];
    this.$edit = {
      mode: true,
      type: 'pixel',
      model: model,
      $error: null
    }
    this.$timeout(() => {
      this.$onFromInit()
    }, 500)
  }
  removeRow(i) {
    this.$edit.model.splice(i, 1)
  }
  savePixel(pixel) {
    this.$placementTest.ChoosePixelsForPlacementTests(pixel, (res) => {
      this.$edit.mode = false;
      this.$onFromDestriy();
      this.$notify('عملیات با موفقیت انجام شد');
      this.pixels.data.push(res.data)
    }, (err) => {
      this.$edit.loading = false;
      this.$edit.$error = err.data.message;
    });
    // ChoosePixelsForPlacementTests
  }

  deletePixel(ev) {
    var fn = new this.$placementTest(this.$selected.pixel)
    var self = this;

    function deleteFn() {

      return self.$q((resolve, reject) => {
        fn.$DeletePixel((res) => {
          resolve(res)
        }, (err) => {
          reject(err.data.message)
        })
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

      this.$selected.pixel.$class = 'animated ng-zoomOut';
      this.$timeout(() => {
        this.pixels.data.splice(this.$selected.pixel.$index, 1);
        this.$selected.pixel = {};
      }, 1)
    }, this, () => {
      console.log("cancel");
    });
  }

  cancelEdit() {
    this.$edit = null;
    this.$onFromDestriy()
  }

  $onFromInit() {
    var someElement = angular.element(document.getElementById('editForm'));
    this.$document.scrollToElement(someElement, 150, 1000);
  }

  $onFromDestriy() {
    var someElement = angular.element(document.getElementById('content-tables'));
    this.$document.scrollToElement(someElement, 250, 1000);
  }

  $notify(text, hideDelay, pinTo) {
    pinTo = pinTo || 'center top';
    hideDelay = hideDelay || 1000;
    this.$mdToast.show(
      this.$mdToast.notify()
      .textContent(text)
      .position(pinTo)
      .hideDelay(hideDelay)
      .parent(angular.element(document.getElementById('main-content')))
    )
  }
}

export default PlacementTestController;