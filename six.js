let words = ["abcw","baz","foo","bar","xtfn","abcdef"]

let max=0
let word1=""
let word2=""
for(let i=0;i<words.length;i++)
{
    for(let j=1;j<words.length;j++)
    {
        let res=strcompare(words[i],words[j])
        if(res!=-1)
        {
           
            let len=words[i].length*words[j].length
            if(max<len)
            {
                max=len
                word1=words[i]
                word2=words[j]
            }
        }
    }
}
console.log("max value is:"+max)
console.log("string1:"+word1)
console.log("string2:"+word2)
function strcompare(str1,str2)
{
    
    for(let i=0;i<str1.length;i++)
    {
        for(let j=0;j<str2.length;j++)
        {

        
            if(str1[i]===str2[j])
            {
                
                return -1
                
            }
        }
    }
}


