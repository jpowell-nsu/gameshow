document.getElementById('myForm').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior (page refresh)
    event.preventDefault();

    // 1. Capture form data using the FormData API
    const formData = new FormData(event.target);
	
	const value = formData.get('username');
	
	console.log({ value });

    // 2. Convert FormData to a standard JavaScript object
    const dataObject = Object.fromEntries(formData.entries());

    // 3. Convert the JavaScript object to a formatted JSON string
    const jsonString = JSON.stringify(dataObject, null, 4);

    // 4. Create a Blob (Binary Large Object) from the JSON string
    const blob = new Blob([jsonString], { type: 'application/json' });

    // 5. Create a downloadable link
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'formData.json'; // Set the desired file name

    // 6. Programmatically click the link to trigger the download
    anchor.click();

    // 7. Clean up the object URL after the download is initiated
    // Using setTimeout is a good practice to ensure the click has registered
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 50);
});