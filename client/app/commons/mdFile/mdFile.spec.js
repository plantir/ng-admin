import MdFileModule from './mdFile'
import MdFileController from './mdFile.controller';
import MdFileComponent from './mdFile.component';
import MdFileTemplate from './mdFile.html';

describe('MdFile', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MdFileModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MdFileController();
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
      expect(MdFileTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MdFileComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MdFileTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MdFileController);
      });
  });
});
