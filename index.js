let a=+prompt("enter digit here");
let count=0;

for(i=1;i<=a;i++){
   if(a % i==0){
        count++
   }
}
if(count==2){
       console.log(a , "is prime number")
    }else{
        console.log(a , "is not prime number")
    }


// output:>>  a= 89 >> 89 is prime number 
    //  a= 90 >> 90 is not prime number