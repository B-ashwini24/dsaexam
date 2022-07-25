let arr=[3, 12, 34, 2, 0, -1]
let min=arr[0]
let arr1=[]
for(let i=0;i<arr.length;i++)
{
	min=arr[i+1]
    if(arr[i]>min)
      {
      	arr1.push(arr[i])
      }
}
arr1.push(arr[arr.length-1])
console.log(arr1)