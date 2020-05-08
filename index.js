const fs = require("fs"); //file-system module included

// //Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //open file and read it with a utf-8 format
// console.log(textIn);

// //const textOut = `` 'this is: ' + textIn;  //old methode
// //const textOut = `This is what we know about the avocado: ${textIn}`; //${textIn}. ile ek özelliklere erişim de var
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`; //.\n = new line
// //console.log(textOut);

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

//Non-blocking, asynchronous way
//3rd parameter is a callback function. When main function ends this callback will be called...
//Callback function's 1st parameter is error, 2nd one is data. This is very typical in node.js
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  //ES6 syntax "(err, data) =>..."
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("Readed with no error :)");
  }
  console.log(data);
});

console.log("The file will be readed...");

//check lesson 02-06 codes for multiple read and write
