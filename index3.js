// Step 1: Create an array of books
const books = ['Python Basics', 'JavaScript for Beginners', 'React Guide', 'Data Structures'];

// Step 2: Check if 'JavaScript for Beginners' is in the array
const hasJavaScriptBook = books.includes('JavaScript for Beginners');

// Step 3: Print a message
if (hasJavaScriptBook) {
    console.log('Yes, the JavaScript book is in the collection.');
} else {
    console.log('No, the JavaScript book is not in the collection.');
}

// Output: Yes, the JavaScript book is in the collection.
