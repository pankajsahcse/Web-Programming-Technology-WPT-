console.log('Start');

const id = setInterval(() => {
    console.log('Set Interval Working');

}, 1000);


setTimeout(() => {
    clearInterval(id);
    console.log('Stop the Interval');

}, 5000)

//clearTimeout(id); // EK baar bhi run nhi hone dega

console.log('End');

