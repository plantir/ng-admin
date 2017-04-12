import MenuTriggerModule from './menuTrigger'
import MenuTriggerController from './menuTrigger.controller';
import MenuTriggerComponent from './menuTrigger.component';
import MenuTriggerTemplate from './menuTrigger.html';

describe('MenuTrigger', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MenuTriggerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MenuTriggerController();
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
      expect(MenuTriggerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MenuTriggerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MenuTriggerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MenuTriggerController);
      });
  });
});
