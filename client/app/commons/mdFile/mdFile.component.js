import template from './mdFile.html';
import controller from './mdFile.controller';

let mdFileComponent = {
  bindings: {
    label:"@"
  },
  template,
  controller
};

export default mdFileComponent;
