let arr=[3, 2, 1, 56, 10000, 167]

function findMin(arr)
{
			let min=arr[0]
      for(let i=0;i<arr.length;i++)
      {
      	
      		if(arr[i]<min)
          {
          	min=arr[i]
          }
      }
      console.log("Minimum Number is:"+min)
}
function findMax(arr)
{
			let max=0
      for(let i=0;i<arr.length;i++)
      {
      		if(arr[i]>max)
          {
          	max=arr[i]
          }
      }
      console.log("Max number is:"+max)
}
findMin(arr)
findMax(arr)