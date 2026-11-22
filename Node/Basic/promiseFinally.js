const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation Completed");
    });