const promise = new Promise((resolve, reject)=>{
    reject('Fetching Error')
})

promise.then((result) =>{
    console.log(result);
    
}).catch((err) =>{
    console.log(err);
    
});