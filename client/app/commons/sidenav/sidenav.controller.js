class SidenavController {
  constructor($mdSidenav) {
    "ngInject";
    this.$mdSidenav = $mdSidenav;
    this.name = 'menuTrigger';
    this.config = {
      autoHideScrollbar: false,
      theme: 'light',
      advanced: {
        updateOnContentResize: true
      },
      setHeight: 200,
      scrollInertia: 0
    }
  }
  toggleLeft() {
    this.$mdSidenav("left").toggle();
  }
}
export default SidenavController;