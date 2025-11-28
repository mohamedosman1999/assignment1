//Assignment2

//q1:

// function path() {
//     console.log({
//         file:__filename,
//         dir:__dirname
//     });
    
// }
// path();

//q2:

// const path = require("path");

// function getFileName(filePath) {
//     return path.basename(filePath);
// }

// console.log(getFileName('C:\\Users\\moham\\Downloads\\New folder\\Assignments\\assignment2.js'));

//q3:

// const path=require("path");
// function buildPath(obj) {
//     return path.format(obj);
// }
// console.log(buildPath({dir: 'C:\\Users\\moham\\Downloads\\New folder',name: 'Assignments',ext: '',}));


//q4:

// const path = require("path");

// function getExtension(filePath) {
//     return path.extname(filePath);
// }
// console.log(getExtension('C:\\Users\\moham\\Downloads\\New folder\\Assignments\\assignment2.js'));

//q5:

// const path = require("path");

// function getNameAndExt(filePath) {
//     const parsed = path.parse(filePath);
//     return {
//         Name: parsed.name,
//         Ext: parsed.ext
//     };
// }

// console.log(getNameAndExt('C:\\Users\\moham\\Downloads\\New folder\\Assignments\\assignment2.js'));

//q6:

// const path = require("path");

// function isAbsolutePath(filePath) {
//     return path.isAbsolute(filePath);
// }

// console.log(isAbsolutePath('C:\\Users\\moham\\Downloads\\New folder\\Assignments\\assignment2.js'));
// console.log(isAbsolutePath('assignment2.js'));  

//q7:

// const path=require("path");
// function joinSegments(...segments) {
//     return path.join(...segments);
// }

// console.log(joinSegments('C:\\Users\\moham\\Downloads\\New folder', 'Assignments', 'assignment2.js'));

//q8:

// const path = require("path");

// function resolvePath(relativePath) {
//     return path.resolve(relativePath);
// }

// console.log(resolvePath("./index.js"));

//q9:

// const path = require("path");

// function joinTwoPaths(path1, path2) {
//     return path.join(path1, path2);
// }
// console.log(joinTwoPaths('C:\\Users\\moham\\Downloads\\New folder', 'Assignments'));

//q10:

// const fs = require("fs").promises;

// async function deleteFileAsync(filePath) {
//     try {
//         await fs.unlink(filePath);
//         console.log("File deleted successfully!");
//     } catch (err) {
//         console.error("Error deleting file:", err);
//     }
// }

// deleteFileAsync('C:\\Users\\moham\\Downloads\\New folder\\Assignments\\assignment2.js');

//q12:

// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("start", () => {
//     console.log("Welcome The start event has been triggered");
// });

// event.emit("start");

//q13:

// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("login", (username) => {
//     console.log(`User "${username}" has logged in successfully`);
// });

// event.emit("login", "Mohamed");

//q14:

// const fs = require("fs");
// const path = require("path");


// const filePath = 'C:\\Users\\moham\\Downloads\\New folder\\Assignments\\assignment2.js';

// try {
//     const data = fs.readFileSync(filePath, "utf-8"); 
//         console.log("File contents:\n", data);
// } catch (err) {
//     console.error("Error reading file:", err)};

//q17:

// const os = require("os");

// function getSystemInfo() {
//     return {
//         Platform: os.platform(),   
//         Arch: os.arch()            
//         };
// }

// console.log(getSystemInfo());