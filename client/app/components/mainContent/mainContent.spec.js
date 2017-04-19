import MainContentModule from './mainContent'
import MainContentController from './mainContent.controller';
import MainContentComponent from './mainContent.component';
import MainContentTemplate from './mainContent.html';

describe('MainContent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MainContentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MainContentController();
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
      expect(MainContentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MainContentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MainContentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MainContentController);
      });
  });
});
