import angular from 'angular';
import content from './content/content';
import mainContent from './mainContent/mainContent';
import lesson from './lesson/lesson';

let componentModule = angular.module('app.components', [
    content,
    mainContent,
    lesson,
])
.name;

export default componentModule;
