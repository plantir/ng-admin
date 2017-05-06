import PlacementTestModule from './placementTest'
import PlacementTestController from './placementTest.controller';
import PlacementTestComponent from './placementTest.component';
import PlacementTestTemplate from './placementTest.html';

describe('PlacementTest', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PlacementTestModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PlacementTestController();
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
      expect(PlacementTestTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PlacementTestComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PlacementTestTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PlacementTestController);
      });
  });
});
