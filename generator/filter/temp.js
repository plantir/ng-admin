import angular from "angular";
let <%= name %>Filter = angular.module('<%= name %>Filter', [])
    .filter('<%= name %>', filter)
    .name;

function filter() {
    return FilterFilter;

    ////////////////

    function FilterFilter(Params) {
        return Params;
    }
}

export default <%= name %>Filter;