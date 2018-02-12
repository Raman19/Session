const a =1;
// a =10;
function func(){
    const a =2;
    if(true){
      const a =3;
      console.log('inside if ---',a);
    }
    console.log('inside function ---',a);
}
func();
console.log('outside function ---',a);
