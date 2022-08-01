let arr=[10, 22, 28, 29, 30, 40]
let target=54
let sum=0
let num1=0
let num2=0
function findClosestsum(arr,target)
{
			sum=0
			for(let i=0;i<arr.length;i++)
      {
      	for(let j=1;j<arr.length;j++)
        {
        		if(arr[i]+arr[j]<54)
            {
            		if(sum<(arr[i]+arr[j]))
                {
                		sum=arr[i]+arr[j]
                 
                  num1=arr[i]
                  num2=arr[j]
                }
            }
        }
      }
			
return [num1,num2]
}

console.log(findClosestsum(arr,target))