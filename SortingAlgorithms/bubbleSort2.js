// largest values bubble to the top 
// swap using temp variables

function bubbleSort(arr){
    let noSwaps;
    for (let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j=0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break
    }
    console.log(arr)
}

bubbleSort([25,6,22,40,5,12,1])