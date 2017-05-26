class LevelGradeController {
  constructor($state, NgTableParams, $mdDialog, $q, $timeout, $systemConfiguration, $httpParamSerializerJQLike) {
    "ngInject";
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
    this.$systemConfiguration = $systemConfiguration;
    this.$q = $q;
    this.$timeout = $timeout;
    this.data = []
    this.NgTableParams = NgTableParams;
  }

  typeChange() {
    this.$state.go(this.type)
  }
  $onInit() {
    this.type = this.$state.current.name;

    if (this.type == 'level') {

      this.$systemConfiguration.ListLevel(
        response => {
          this.data = response.data
          this.tableParams = new this.NgTableParams({
            count: 12
          }, {
            dataset: this.data,
            counts: [],
            paginationMaxBlocks: 13,
            paginationMinBlocks: 2,
          });
        }
      )
    } else if (this.type == 'grade') {

      this.$systemConfiguration.ListGrade(
        response => {
          this.data = response.data
          this.tableParams = new this.NgTableParams({
            count: 12
          }, {
            dataset: this.data,
            counts: [],
            paginationMaxBlocks: 13,
            paginationMinBlocks: 2,
          });
        }
      )

    }


  }

  add() {
    // this.$systemConfiguration.EditLevel()

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

      if (this.type == 'level') {
        return self.$q((resolve, reject) => {
          formulaApi.$DeleteLevel(
            response => {
              resolve(response)
            },
            error => {
              reject(error)
            }
          )
        })
      } else if (this.type == 'grade') {
        return self.$q((resolve, reject) => {
          formulaApi.$DeleteGrade(
            response => {
              resolve(response)
            },
            error => {
              reject(error)
            }
          )
        })
      }
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

  edit(item) {
    item.$editing = true;
    item.$backup = angular.copy(item);
  }

  save(item) {
    let serializeitem = this.$httpParamSerializerJQLike(item)
    if (item.id) {
      if (this.type == 'level') {

        this.$systemConfiguration.EditLevel(serializeitem,
          response => {
            item.$editing = false;

          },
          error => {

          }
        )
      } else if (this.type == 'grade') {
        this.$systemConfiguration.EditGrade(serializeitem,
          response => {
            item.$editing = false;

          },
          error => {

          }
        )
      }
    } else {
      if (this.type == 'level') {

        this.$systemConfiguration.CreateLevel(serializeitem,
          response => {
            item.$editing = false;
          },
          error => {

          }
        )
      } else if (this.type == 'grade') {
        this.$systemConfiguration.CreateGrade(serializeitem,
          response => {
            item.$editing = false;
          },
          error => {

          }
        )
      }
    }

  }

  cancelEdit(item, $index) {
    if (item.$adding) {
      this.data.splice($index, 1)
      this.tableParams.settings({
        dataset: this.data
      });
      this.tableParams.reload();
    } else {

      item.$backup.$editing = false;
      angular.extend(item, item.$backup)
    }
  }
}

export default LevelGradeController;