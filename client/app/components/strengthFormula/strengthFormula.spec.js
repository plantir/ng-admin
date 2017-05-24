import StrengthFormulaModule from './strengthFormula'
import StrengthFormulaController from './strengthFormula.controller';
import StrengthFormulaComponent from './strengthFormula.component';
import StrengthFormulaTemplate from './strengthFormula.html';

describe('StrengthFormula', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StrengthFormulaModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StrengthFormulaController();
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
      expect(StrengthFormulaTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StrengthFormulaComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StrengthFormulaTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StrengthFormulaController);
      });
  });
});
