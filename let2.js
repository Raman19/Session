function fun (){
  let i=1;
  if(true){
     let i=2;
    console.log('i inside block',i);
  }
  console.log('i inside block',i);
}
fun();

let x=10;
var y=10;
{
  let x=5;
  var y=5;
  {
    let x=2;
    var y=2;
     console.log('x ----',x);
      console.log('y ------',y);
  }
  console.log('x ====',x);
   console.log('y=====',y);
}
