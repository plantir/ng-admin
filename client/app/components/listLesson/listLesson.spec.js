import ListLessonModule from './listLesson'
import ListLessonController from './listLesson.controller';
import ListLessonComponent from './listLesson.component';
import ListLessonTemplate from './listLesson.html';

describe('ListLesson', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ListLessonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ListLessonController();
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
      expect(ListLessonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ListLessonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ListLessonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ListLessonController);
      });
  });
});
