var x = 30;
 x=5; // declared variable x
console.log('before call---',x);

function abc(){
  var x =10;
   console.log('x value inside function ---',x);
}
 // var x =6;
  console.log('x value after function call',x);
  abc();
  // x =7;
   console.log('x value after call',x);
console.log('outside function is ',x);
