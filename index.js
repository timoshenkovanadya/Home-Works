Array.prototype.myFilter = function(callbackFn, thisArr) {
    return this.reduce((acc, current, index, array) => {
        if (callbackFn.call(thisArr, current, index, array)) {
            acc.push(current);
        }
        return acc;
    }, []);
};

// use example:

// const context = {
//     maxLength: 5
// };

// const words = ['say', 'meet', 'kitchen', 'dog', 'lecture'];

// const result = words.myFilter(function(word) {return word.length > this.maxLength}, context);

// console.log(result);