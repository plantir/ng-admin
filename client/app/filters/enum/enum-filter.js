import enums from './enum-value';
let enumsFilter = () => {
    return function (value, name) {
        if (!enums) {
            console.error('enums not find');
            return value;
        } else {
            if (!enums[name]) {
                console.error(`can't find enums ${name} in enums`);
                return value;

            } else {
                if (!enums[name][value]) {
                    console.error(`can't find value ${value} in enums ${name} in enums`);
                    return value;

                } else {
                    return enums[name][value];
                }
            }
        }
    }
}


export default enumsFilter;