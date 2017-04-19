class LessonController {
  constructor(NgTableParams, $mdDialog, $lesson, $q, $timeout) {
    "ngInject";
    this.$mdDialog = $mdDialog;
    this.$lesson = $lesson;
    $lesson.list()
    this.$q = $q;
    this.$timeout = $timeout;
    this.name = 'lesson';
    this.data = [{
        "code": "L1",
        "name": "درس اول",
        "path": 1,
        "indexInPath": 1,
        "xpValue": 10,
        "isActive": true,
        "id": 3
      },
      {
        "code": "L2",
        "name": "درس دوم",
        "path": 1,
        "indexInPath": 2,
        "xpValue": 10,
        "isActive": false,
        "id": 6
      },
      {
        "code": "L3",
        "name": "درس سوم",
        "path": 1,
        "indexInPath": 3,
        "xpValue": 10,
        "isActive": false,
        "id": 7
      },
      {
        "code": "FlashCard",
        "name": "درس لغات",
        "path": 3,
        "indexInPath": 1,
        "xpValue": 0,
        "isActive": true,
        "id": 11
      },
      {
        "code": "S1",
        "name": "درس اول مدرسه",
        "path": 2,
        "indexInPath": 1,
        "xpValue": 30,
        "isActive": true,
        "id": 12
      }, {
        "code": "L1",
        "name": "درس ششم",
        "path": 1,
        "indexInPath": 1,
        "xpValue": 10,
        "isActive": true,
        "id": 3
      },
      {
        "code": "L2",
        "name": "درس دوم",
        "path": 1,
        "indexInPath": 2,
        "xpValue": 10,
        "isActive": false,
        "id": 6
      },
      {
        "code": "L3",
        "name": "درس سوم",
        "path": 1,
        "indexInPath": 3,
        "xpValue": 10,
        "isActive": false,
        "id": 7
      },
      {
        "code": "FlashCard",
        "name": "درس لغات",
        "path": 3,
        "indexInPath": 1,
        "xpValue": 0,
        "isActive": true,
        "id": 11
      },
      {
        "code": "S1",
        "name": "درس اول مدرسه",
        "path": 2,
        "indexInPath": 1,
        "xpValue": 30,
        "isActive": true,
        "id": 12
      }, {
        "code": "L1",
        "name": "درس اول",
        "path": 1,
        "indexInPath": 1,
        "xpValue": 10,
        "isActive": true,
        "id": 3
      },
      {
        "code": "L2",
        "name": "درس دوم",
        "path": 1,
        "indexInPath": 2,
        "xpValue": 10,
        "isActive": false,
        "id": 6
      },
      {
        "code": "L3",
        "name": "درس سوم",
        "path": 1,
        "indexInPath": 3,
        "xpValue": 10,
        "isActive": false,
        "id": 7
      },
      {
        "code": "FlashCard",
        "name": "درس لغات",
        "path": 3,
        "indexInPath": 1,
        "xpValue": 0,
        "isActive": true,
        "id": 11
      },
      {
        "code": "S1",
        "name": "درس اول مدرسه",
        "path": 2,
        "indexInPath": 1,
        "xpValue": 30,
        "isActive": true,
        "id": 12
      }
    ]
    this.tableParams = new NgTableParams({
      count: 12
    }, {
      dataset: this.data,
      counts: [],
      paginationMaxBlocks: 13,
      paginationMinBlocks: 2,
    });
  }

  add() {
    this.tableParams.settings().dataset.unshift({
      $editing: true,
      $adding: true
    });
    this.tableParams.page(1);
    this.tableParams.reload();
  }

  delete(item, index, ev) {
    var lesson = new this.$lesson(item);
    var self = this;

    function a() {

      return self.$q((resolve, reject) => {
        self.$timeout(() => {
          resolve('kh')
        }, 3000)
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
      this.data.splice(index, 1)
      this.tableParams.reload().then((data) => {
        if (data.length === 0 && this.tableParams.total() > 0) {
          this.tableParams.page(this.tableParams.page() - 1);
          this.tableParams.reload();
        }
      }, this)
    }, this, function () {
      console.log("cancel");
    });
  }

  edit(lesson) {
    lesson.$editing = true;
    lesson.$backup = angular.copy(lesson);
  }

  save(lesson) {
    lesson.$editing = false;
  }

  cancelEdit(lesson, $index) {
    if (lesson.$adding) {
      this.data.splice($index, 1)
      this.tableParams.settings({
        dataset: this.data
      });
      this.tableParams.reload();
    } else {

      lesson.$backup.$editing = false;
      angular.extend(lesson, lesson.$backup)
    }
  }
}

export default LessonController;