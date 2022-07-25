let nums=[1,8,5,9,3]
target=2
nums.sort((a,b)=>a-b)
console.log(nums)
let newarr=[]
for(let i=0;i<nums.length;i++)
{
    if(nums[i]==target)
    {
         newarr.push(i)   
    }
}
console.log(newarr)