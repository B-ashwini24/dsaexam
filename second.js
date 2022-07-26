let str="";
const printPattern = (count) => {
 for(i=1; i<=count; i++){   
        for(j=1; j<=count-i; j++){
            str+=" "
        }
        for(k=i; k>=1; k--){
            str+=k;
        }
        for(l=2; l<=i; l++){
            str+=l;
        }
        str+="\n";
    }
        console.log(str);

};


printPattern(5);