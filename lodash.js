class Lodash {
    chunk(array, number) {
        if (array instanceof Array) {
            if (typeof number !== 'number') number = 1;
            let current;
            const result = array.map((item, i) => {
                if (!i%number) {
                    const arr = [];
                    arr.push(item);
                    current = arr;
                    return arr;
                } else {
                    current.push(item);
                }
            });
            return result;
        } else return [];
    }
}

const _$ = new Lodash();

console.log(_$.chunk([1,2,3,4,5],2));