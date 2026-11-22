async function test() {
    console.log('Start');

    const res = await Promise.resolve(100);

    console.log(res);
    console.log('End'); 
}

test();



// Start
// 100
// End


async function test1() {
    console.log('Start');

    const res = Promise.resolve(100);

    res.then(value => console.log(value));

    console.log('End');
}

test1();



// Start
// End
// 100




