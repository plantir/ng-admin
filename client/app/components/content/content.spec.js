import ContentModule from './content'
import ContentController from './content.controller';
import ContentComponent from './content.component';
import ContentTemplate from './content.html';

describe('Content', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContentController();
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
      expect(ContentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ContentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContentController);
      });
  });
});
