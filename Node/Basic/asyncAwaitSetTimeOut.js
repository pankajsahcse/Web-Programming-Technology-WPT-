function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching Data...");

    const result = await fetchData();

    console.log(result);
    console.log("Completed");
}

getData();

console.log("Outside Function");


// Fetching Data...
// Outside Function

// // Approximately 2 seconds later
// Data Received
// Completed