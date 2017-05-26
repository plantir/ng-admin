class StrengthFormulaController {

  constructor(NgTableParams, $mdDialog, $q, $timeout, $systemConfiguration, $httpParamSerializerJQLike) {
    "ngInject";

    this.$mdDialog = $mdDialog;
    this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
    this.$systemConfiguration = $systemConfiguration;
    this.$q = $q;
    this.$timeout = $timeout;
    this.data = []
    this.NgTableParams = NgTableParams;
  }

  $onInit() {
    this.$systemConfiguration.ListStrengthFormula((res) => {
      this.data = res.data
      this.tableParams = new this.NgTableParams({
        count: 12
      }, {
        dataset: this.data,
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
      });
    })
  }
  add() {
    // this.$systemConfiguration.EditStrengthFormula()

    this.tableParams.settings().dataset.unshift({
      $editing: true,
      $adding: true
    });
    this.tableParams.page(1);
    this.tableParams.reload();
  }

  delete(item, index, ev) {
    let formulaApi = new this.$systemConfiguration(item);
    var self = this;

    function a() {

      return self.$q((resolve, reject) => {
        formulaApi.$DeleteStrengthFormula(
          response => {
            resolve(response)
          },
          error => {
            reject(error)
          }
        )
      })
    }
    var confirm = this.$mdDialog
      .confirm()
      .targetEvent(ev)
      .parent(angular.element(document.body))
      .doneFN(a)
      // .ok('Yes DELETE IT!')
      // .textContent('You will not be able to recover this imaginary file!')
      // .title('Are You Sure?')
      // .cancel('CANCEL')
      // .doneTitle('Deleted')
      // .doneTextContent('Your imaginary file has been deleted.')
      // .doneOk('ok')

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

  save(item) {
    let serializeLesson = this.$httpParamSerializerJQLike(item)
    if (item.id) {
      this.$systemConfiguration.EditStrengthFormula(serializeLesson,
        response => {
          item.$editing = false;

        },
        error => {

        }
      )
    } else {
      this.$systemConfiguration.CreateStrengthFormula(serializeLesson,
        response => {
          item.$editing = false;
        },
        error => {

        }
      )
    }

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
export default StrengthFormulaController;