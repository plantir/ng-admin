import FourZeroFourModule from './fourZeroFour'
import FourZeroFourController from './fourZeroFour.controller';
import FourZeroFourComponent from './fourZeroFour.component';
import FourZeroFourTemplate from './fourZeroFour.html';

describe('FourZeroFour', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FourZeroFourModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FourZeroFourController();
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
      expect(FourZeroFourTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FourZeroFourComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FourZeroFourTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FourZeroFourController);
      });
  });
});
