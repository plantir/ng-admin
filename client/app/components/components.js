import angular from 'angular';
import content from './content/content';
import mainContent from './mainContent/mainContent';
import lesson from './lesson/lesson';
import fileManager from './fileManager/fileManager';

let componentModule = angular.module('app.components', [
    content,
    mainContent,
    lesson,
    fileManager,
])
.name;

export default componentModule;
