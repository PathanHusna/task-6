// PART 1: ARRAY HIGHER-ORDER METHODS
// ==========================================

// Q1. Create an array of 10 numbers and use forEach() to print each number.
const numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers1.forEach(num => console.log(num));

// Q2. Use map() to create a new array where every number is multiplied by 5.
const numbers2 = [1, 2, 3, 4, 5];
const multiplied = numbers2.map(num => num * 5);
console.log(multiplied);

// Q3. Use filter() to get only numbers greater than 20.
const numbers3 = [10, 25, 15, 30, 40, 5];
const greaterThan20 = numbers3.filter(num => num > 20);
console.log(greaterThan20);

// Q4. Use filter() to display employees earning <= ₹300,000.
const employees = [
    { name: "Rahul", salary: 250000 },
    { name: "Priya", salary: 350000 },
    { name: "Amit", salary: 200000 },
    { name: "Sneha", salary: 400000 },
    { name: "Kiran", salary: 300000 }
];
const lowSalaryEmployees = employees.filter(emp => emp.salary <= 300000);
console.log(lowSalaryEmployees);

// Q5. Use find() to get the first employee earning > ₹200,000.
const firstEmployee = employees.find(emp => emp.salary > 200000);
console.log(firstEmployee);

// Q6. Use reduce() to calculate the total of all numbers.
const numbers6 = [10, 20, 30, 40, 50];
const total = numbers6.reduce((sum, num) => sum + num, 0);
console.log(total);

// Q7. Use some() to check whether at least one number is even.
const numbers7 = [1, 3, 5, 8, 9];
const hasEven = numbers7.some(num => num % 2 === 0);
console.log(hasEven);

// Q8. Use every() to check whether all numbers are greater than zero.
const numbers8 = [1, 2, 3, 4, 5];
const allPositive = numbers8.every(num => num > 0);
console.log(allPositive);

// Q9. Sort numbers in ascending order using a sort callback.
const numbers9 = [50, 10, 40, 20, 30];
numbers9.sort((a, b) => a - b);
console.log(numbers9);

// Q10. Sort numbers in descending order using (a, b) => b - a.
const numbers10 = [50, 10, 40, 20, 30];
numbers10.sort((a, b) => b - a);
console.log(numbers10);


// ==========================================
// PART 2: STRING METHODS
// ==========================================

// Q11. Print the character at index 4 of "javascript" using charAt().
const str11 = "javascript";
console.log(str11.charAt(4));

// Q12. Find the character code at index 2 using charCodeAt().
const str12 = "javascript";
console.log(str12.charCodeAt(2));

// Q13. Remove extra spaces using trim().
const str13 = "   Hello JavaScript   ";
console.log(str13.trim());

// Q14. Convert a string to uppercase and lowercase.
const str14 = "JavaScript Programming";
console.log(str14.toUpperCase());
console.log(str14.toLowerCase());

// Q15. Check whether a string contains "script" using includes().
const str15 = "Learn JavaScript";
console.log(str15.includes("script"));

// Q16. Check whether a string starts with "Java" and ends with "Script".
const str16 = "JavaScript";
console.log(str16.startsWith("Java"));
console.log(str16.endsWith("Script"));

// Q17. Replace every occurrence of "java" with "python" using replaceAll().
const str17 = "java is popular and java is powerful";
console.log(str17.replaceAll("java", "python"));

// Q18. Split "html-css-javascript-react" into an array.
const str18 = "html-css-javascript-react";
console.log(str18.split("-"));

// Q19. Convert an array of names into a string using join().
const names19 = ["Rahul", "Priya", "Amit", "Sneha"];
console.log(names19.join(","));

// Q20. Create a string and extract a portion using slice().
const str20 = "JavaScript Programming";
console.log(str20.slice(0, 10));


// ==========================================
// PART 3: DATE METHODS
// ==========================================

// Q21. Print the current year, month, date, and day.
const date21 = new Date();
console.log("Year:", date21.getFullYear());
console.log("Month:", date21.getMonth() + 1); // Months are 0–11
console.log("Date:", date21.getDate());
console.log("Day:", date21.getDay()); // Sunday = 0

// Q22. Use getMonth() to display the current month name.
const months22 = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
console.log(months22[new Date().getMonth()]);

// Q23. Print the current hours, minutes, and seconds.
const date23 = new Date();
console.log("Hours:", date23.getHours());
console.log("Minutes:", date23.getMinutes());
console.log("Seconds:", date23.getSeconds());

// Q24. Change a date object's year to 2003, month to January,
// and date to 30 using setter methods.
const date24 = new Date();
date24.setFullYear(2003);
date24.setMonth(0); // January = 0
date24.setDate(30);
console.log(date24);


// ==========================================
// PART 4: ASYNCHRONOUS JAVASCRIPT
// ==========================================

// Q25. Print "Welcome to JavaScript" after 3 seconds.
setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 3000);

// Q26. Print "Learning JavaScript" every 2 seconds.
const interval26 = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

// Q27. Stop the interval created in Q26 after 8 seconds.
setTimeout(() => {
    clearInterval(interval26);
    console.log("Interval stopped");
}, 8000);

// Q28. Observe the output order of one(), two(), and three().
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();
// Output order: One, Three, Two


// ==========================================
// PART 5: PROMISES AND API FETCHING
// ==========================================

// Q29. Create a Promise that resolves with "Login successful"
// and display the result using then().
const promise29 = new Promise((resolve) => {
    resolve("Login successful");
});

promise29.then(message => console.log(message));

// Q30. Create a Promise that rejects with "Invalid password"
// and handle the error using catch().
const promise30 = new Promise((resolve, reject) => {
    reject(new Error("Invalid password"));
});

promise30.catch(error => console.log(error.message));

// Q31. Use finally() to print "Process completed" regardless
// of whether the Promise resolves or rejects.
const promise31 = new Promise((resolve) => {
    resolve("Task successful");
});

promise31
    .then(message => console.log(message))
    .catch(error => console.log(error.message))
    .finally(() => console.log("Process completed"));

// Q32. Fetch product data and print all product titles using forEach().
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => console.log(product.title));
    })
    .catch(error => console.warn(error.message));

// Q33. Fetch products and print title, price, and category.
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(
                "Title:", product.title,
                "Price:", product.price,
                "Category:", product.category
            );
        });
    })
    .catch(error => console.warn(error.message));

// Q34. Handle API errors using catch() and console.warn().
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed: " + response.status);
        }
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.warn(error.message));

// Q35. Use finally() to print "API call completed".
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.warn(error.message))
    .finally(() => console.log("API call completed"));


// ==========================================
// PART 6: REAL-TIME MINI TASKS
// ==========================================

// Q36. Select employees earning less than ₹300,000 using filter()
// and print their names and salaries using forEach().
const employees36 = [
    { name: "Rahul", salary: 250000 },
    { name: "Priya", salary: 350000 },
    { name: "Amit", salary: 200000 },
    { name: "Sneha", salary: 280000 },
    { name: "Kiran", salary: 300000 }
];

employees36
    .filter(emp => emp.salary < 300000)
    .forEach(emp => {
        console.log("Name:", emp.name, "Salary:", emp.salary);
    });

// Q37. Fetch products and use map() to create an array
// containing only product titles and prices.
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        const productPrices = products.map(product => ({
            title: product.title,
            price: product.price
        }));
        console.log(productPrices);
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("Product price calculation completed"));

// Q38. Fetch products and filter by a chosen category.
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        const chosenCategory = "electronics";
        const filteredProducts = products.filter(
            product => product.category === chosenCategory
        );
        console.log(filteredProducts);
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("Product search completed"));

// Q39. Use map(), filter(), reduce(), some(), and every()
// to perform number calculations and checks.
const numbers39 = [2, 5, 8, 10, 15];

// map(): Multiply every number by 2.
const doubled39 = numbers39.map(num => num * 2);
console.log("Doubled:", doubled39);

// filter(): Select even numbers.
const even39 = numbers39.filter(num => num % 2 === 0);
console.log("Even numbers:", even39);

// reduce(): Calculate the sum.
const sum39 = numbers39.reduce((sum, num) => sum + num, 0);
console.log("Sum:", sum39);

// some(): Check whether at least one number is greater than 10.
const someGreaterThan10 = numbers39.some(num => num > 10);
console.log("Some greater than 10:", someGreaterThan10);

// every(): Check whether all numbers are positive.
const everyPositive = numbers39.every(num => num > 0);
console.log("All numbers positive:", everyPositive);

// Q40. Fetch products, print title, price, and category.
// Handle errors using catch() and print a completion message using finally().
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed: " + response.status);
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(
                "Title:", product.title,
                "Price:", product.price,
                "Category:", product.category
            );
        });
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("API call completed"));