import angular from 'angular';
import content from './content/content';
import mainContent from './mainContent/mainContent';
import fileManager from './fileManager/fileManager';
import placementTest from './placementTest/placementTest';
import numbers from './numbers/numbers';
import strengthFormula from './strengthFormula/strengthFormula';
import levelGrade from './level-Grade/level-Grade';

let componentModule = angular.module('app.components', [
    content,
    mainContent,
    fileManager,
    placementTest,
    numbers,
    strengthFormula,
    levelGrade
])
.name;

export default componentModule;
