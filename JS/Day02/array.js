let arr = [1,2,3,4,5,6,7,8,9,0]

let count = 0

let array = []

for(let i = 0;i<arr.length;i++){

    if(arr[i]%2===1){

        array[count]=arr[i]
        count++

    }
}

console.log(array);
