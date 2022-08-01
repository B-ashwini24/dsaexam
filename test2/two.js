let arr=[-1,-2,-3,4,3,2,1,5]
	let sum=0
  let prevsum=-14;
  let res=0
function findcontarray(arr,prevsum)
{
			sum=0
      for(let i=0;i<arr.length;i++)
      {
      	
          		sum+=arr[i]
          
      	
      }
  
      if(prevsum<sum)
      {
      		prevsum=sum
        
      }
    res=prevsum
        arr.pop()
        while(arr.length>0)
        {
        		  findcontarray(arr,prevsum) 
        }
     return res
  
}
 console.log(findcontarray(arr,prevsum)) 