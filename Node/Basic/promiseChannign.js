Promise.resolve(20)
  .then((res)=>{
    console.log(res);
    return res*res;
    
  })
  .then((num) =>{
    console.log(num);
    return num + 5;
    
  })
  .then((ans)=>{
    console.log(ans);
    
  })