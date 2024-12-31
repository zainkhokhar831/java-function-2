function reverse() {
    let str = prompt("Enter a string to reverse:");
    
    if (str) {
        let reversedStr = str.split('').reverse().join(''); 
        alert("Reversed string is: " + reversedStr);
        return reversedStr; 
    } else {
        alert("Please enter a valid string.");
    }
}
reverse();
