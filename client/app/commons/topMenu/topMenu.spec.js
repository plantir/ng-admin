import TopMenuModule from './topMenu'
import TopMenuController from './topMenu.controller';
import TopMenuComponent from './topMenu.component';
import TopMenuTemplate from './topMenu.html';

describe('TopMenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TopMenuModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TopMenuController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TopMenuTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TopMenuComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TopMenuTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TopMenuController);
      });
  });
});
