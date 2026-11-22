async function getData() {
    try {
        const result = await Promise.reject("Server Error");

        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Completed");
    }
}

getData();