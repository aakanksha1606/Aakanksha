function sayHello()
{
    function sayHello1(){
        console.log("this is nested function") 
    }
    console.log("this is sayHello")
    sayHello1();
}
function sayHi()
{
    console.log("This is Sayhi function")
}
sayHello();
sayHi();