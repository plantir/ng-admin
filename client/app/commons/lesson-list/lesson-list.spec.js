import Lesson-listModule from './lesson-list'
import Lesson-listController from './lesson-list.controller';
import Lesson-listComponent from './lesson-list.component';
import Lesson-listTemplate from './lesson-list.html';

describe('Lesson-list', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Lesson-listModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Lesson-listController();
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
      expect(Lesson-listTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Lesson-listComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Lesson-listTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Lesson-listController);
      });
  });
});
