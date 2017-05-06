import angular from 'angular';
import content from './content/content';
import mainContent from './mainContent/mainContent';
import fileManager from './fileManager/fileManager';
import placementTest from './placementTest/placementTest';

let componentModule = angular.module('app.components', [
    content,
    mainContent,
    fileManager,
    placementTest
])
.name;

export default componentModule;
