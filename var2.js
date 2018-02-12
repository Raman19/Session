var p =1;
function fun(){
   var p=2;
  console.log('p outside if block', p);
}
fun();
console.log('p outside function', p);
