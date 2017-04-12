class MenuTriggerController {
  constructor($mdSidenav) {
    "ngInject";
    this.$mdSidenav = $mdSidenav;
    this.menuIsopen = false;
  }
  toggleMenu(){
    this.$mdSidenav("menu").toggle();
    this.menuIsopen = ! this.menuIsopen;
  }
}

export default MenuTriggerController;
