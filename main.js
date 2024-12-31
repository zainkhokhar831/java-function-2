function reverse() {
    let str = prompt("Enter name:");
    
    if (str) {
        let reversedStr = str.split('').reverse().join(''); 
        alert("Reversed name is: " + reversedStr);
        return reversedStr; 
    } else {
        alert("Please enter a valid Name.");
    }
}
reverse();
