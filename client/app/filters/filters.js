import angular from "angular";
import enumFilter from "./enum/enum-filter"
let filtersModule = angular.module('app.filters',[
])
.filter('enum',enumFilter)
// .filter('reverse', function() {
//  return reverse
// })
.name;


export default filtersModule;