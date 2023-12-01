alert("hello");
console.log("test");

var navbar = '<nav><a href="../index.html">Homepage</a></nav>';

// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navbar);
