function nice(name) {
    console.log("Hey"  + name +  " good morning")
    console.log("Hey"  + name +  " good night")
    console.log("Hey"  + name +  " good afternoon")

}

nice("shashank")

function sum(a,b,c=3)
{
    // console.log(a+b);

    // return a+b
    return a+b+c;
    
}

result=sum(3,4);
console.log("The sum of these numbers is : ",result)

result1=sum(9,4);
console.log("The sum of these numbers is : ",result1)

result2=sum(9,4,100);
console.log("The sum of these numbers is : ",result2)

const func1 =(x)=>{

    console.log("I am an arrow function" +" " + x , x)
}
func1(55);
func1(75);
func1(95);

const sum1=(a,b) =>{
    let c= a+b;
    return c;

}
let u= sum1(1,3)
console.log(u)