const MergeSort=(arr)=>{
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    
    if(arr.length <= 1){
        return arr;
    }
    const leftSide = MergeSort(left)
    const rightSide = MergeSort(right)

    return merge(leftSide, rightSide)

}

function merge(left,right){
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex<left.length && rightIndex<right.length) {
        if(left[leftIndex]<right[rightIndex]){
            resultArray.push(left[leftIndex])
            leftIndex++
        }else{
            resultArray.push(right[rightIndex])
            rightIndex++
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const arr = [24,3,12,11,21,10,49,19]
console.log(MergeSort(arr))