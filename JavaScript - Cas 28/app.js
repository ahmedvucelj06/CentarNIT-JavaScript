function prioritize(array, callback) {
    let arr = [];
    let arr2 = [];
    
    for( let i = 0; i < array.length; i++){
      if(callback(array[i])){
        arr.push(array[i])
      }else{
        arr2.push(array[i])
      }
    }
    return arr.concat(arr2)
  
  }

  