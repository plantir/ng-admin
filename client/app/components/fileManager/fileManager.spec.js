import FileManagerModule from './fileManager'
import FileManagerController from './fileManager.controller';
import FileManagerComponent from './fileManager.component';
import FileManagerTemplate from './fileManager.html';

describe('FileManager', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FileManagerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FileManagerController();
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
      expect(FileManagerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FileManagerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FileManagerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FileManagerController);
      });
  });
});
