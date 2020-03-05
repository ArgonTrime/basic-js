module.exports = function transform(arr) {
    if(Array.isArray(arr) == false) throw Error;

    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "--double-next":
                if(i < arr.length - 1) newArr.push(arr[i + 1]);
                break;

            case "--double-prev":
                if(i) newArr.push(arr[i - 1]);
                break;

            case "--discard-next":
                i++;
                break;

            case "--discard-prev": 
                if(newArr.length) newArr.pop();
                break;

            default:
                newArr.push(arr[i]);     
        }
    }
    return newArr;      
};