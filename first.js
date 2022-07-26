let arr=[3 ,12, 34, 2, 0, -1]
let newarr=[]

for(let i=0;i<arr.length;i++)
{
		for(let j=i+1;j<arr.length;j++)
    {
    		if(arr[i]>arr[j])
        {
        	newarr.push(arr[i])
          break
        }
        else
        {
        		break
        }
    }
    
        		
}
newarr.push(arr[arr.length-1])
console.log(newarr)