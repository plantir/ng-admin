import Level-gridModule from './level-grid'
import Level-gridController from './level-grid.controller';
import Level-gridComponent from './level-grid.component';
import Level-gridTemplate from './level-grid.html';

describe('Level-grid', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Level-gridModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Level-gridController();
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
      expect(Level-gridTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Level-gridComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Level-gridTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Level-gridController);
      });
  });
});
