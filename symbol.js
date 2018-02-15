 var abc = Symbol();
 var bar = Symbol();


 var obj = {[abc] : 'raman' , [bar] : 'palli'};

 console.log(Object.getOwnPropertySymbols(obj).map(s =>obj[s]));
