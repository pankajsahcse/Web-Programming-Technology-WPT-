const promise = new Promise((resolve,reject) =>{
    resolve('Data Successfully Fetched')
})

promise.then((result) =>{
    console.log(result);
    
})