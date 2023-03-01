function add(){
    let counter = 0;
    function plus(y){
        counter += y;
    }
    return plus;
}
let broj = add();
broj(10);
broj(15);



// CHALLENGE 5
function after(count, func) {
    let counter = 0;
     return function(){
       counter++;
      if ( counter === count ){
      func()
      }
    
    }
    
  }
  
  // /*** Uncomment these to check your work! ***/
  const called = function() { console.log('hello') };
  const afterCalled = after(3, called);
  afterCalled(); // => nothing is printed
  afterCalled(); // => nothing is printed
  afterCalled(); // => 'hello' is printed

  // CHALLENGE 6
function delay(func, wait){
    return function(){
      setTimeout(()=>func(),wait)
    }
  }
  
  const varijabla = delay(()=>{console.log("Bilo Sta");}, 1000);
  varijabla();


  function rollCall(names) {
    let counter = 0;
    return function(){
      if (names.length > counter){
        console.log(names[counter]);
        counter ++;
      }
      else{
        console.log("Everyone accounted for")
      }
      
    }
  }
  
  // /*** Uncomment these to check your work! ***/
  const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
  rollCaller() // => should log 'Victoria'
  rollCaller() // => should log 'Juan'
  rollCaller() // => should log 'Ruth'
  rollCaller() // => should log 'Everyone accounted for'



  // CHALLENGE 8
function saveOutput(func, magicWord) {
    const obj = {}
    return function(abcd){
      if( abcd === magicWord){
       return obj;
      }
      else{
        obj[abcd] = func(abcd)
        return func(abcd);
      }
    }
  }
  
  // /*** Uncomment these to check your work! ***/
  const multiplyBy2 = function(num) { return num * 2; };
  const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
  console.log(multBy2AndLog(2)); // => should log 4
  console.log(multBy2AndLog(9)); // => should log 18
  console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }