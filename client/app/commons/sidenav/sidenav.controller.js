class SidenavController {
  constructor($mdSidenav,$state) {
    "ngInject";
    this.$state = $state;
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

  logOut(){
    localStorage.removeItem('token');
    this.$state.go('login')
  }
}
export default SidenavController;