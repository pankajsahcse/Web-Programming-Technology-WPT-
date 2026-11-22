async function test() {
    return 10;
}

console.log('End');

console.log(test());  // Async function Return Promise 

console.log(test().then((res) => { res }));  // Pending

test().then( res => console.log(res)); // 10



