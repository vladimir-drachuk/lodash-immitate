class Lodash {
    chunk(array, number) {
        if (array instanceof Array) {
            if (typeof number !== 'number') number = 1;
            let current;
            let result = array.map((item, i) => {
                if (!(i%number)) {
                    const arr = [];
                    arr.push(item);
                    current = arr;
                    return arr;
                } else {
                    current.push(item);
                }
            });
            result = result.filter((item) => item !== undefined);
            return result;
        } else return [];
    }

    compact(array) {
        return array.filter((item) => !!(item))
    }

    drop(array, number) {
        if (number === undefined) number = 1;
        if (!(array instanceof Array)) return [];
        return array.filter((item,i) => i >= number);
    }

    dropWhile(array, predicate) {
        let dropNumber = array.findIndex((item, i) => {
            ((predicate(item, i, array)) && predicate(array[i+1], i+1, array));
            console.log((predicate(item, i, array)));
            return i;
        });
        if (!dropNumber) return array;
        let droppedArray = this.drop(array, dropNumber + 1);
        return droppedArray;
    }
}

const _$ = new Lodash();

var  users = [
    {  'user' :  'barney' ,   'active' : false} ,
    {  'user' :  'barney1' ,   'active' : false} ,
    {  'user' :  'barney2' ,   'active' : false} ,
    {  'user' :  'fred' ,     'active' : false} ,
    {  'user' :  'pebbles' ,  'active' : true}
  ];

console.log(_$.dropWhile(users, function(o) { return !o.active; }));