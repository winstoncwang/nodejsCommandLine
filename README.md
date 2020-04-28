# nodejsCommandLine
Using nodejs to create a custom command line similar to the 'ls' command used in a linux terminal. 'ls' is used to print all the documents inside a folder and display them to the user.

getting to know Node.js

-------------------------------------------------------------
JS in browser                                               |
-------------------------------------------------------------
-Execute by adding tags to an html document
-Access the DOM Object and Window object
-Codes can be implemented by using <script> and works across
the whole browser.
-Varaiables are shared throughout the browser

-------------------------------------------------------------
JS in Node.js                                               |
-------------------------------------------------------------
-Execute by using Node CLI from terminal
-No DOM exists
-Each file is a separate world, variables are shared using
exports
-Include various libraries by using NPM(node package manager)

-------------------------------------------------------------
Node.js can be used in terminal by using node <filename> or use node REPL which can be used to run JS scripts directly.

-------------------------------------------------------------
Node.js modules system                                      |
-------------------------------------------------------------
using <require('filedir')> and module.exports = variables


-------------------------------------------------------------
NodeJS essential knowledge                                  |
-------------------------------------------------------------
The exported file is wrapped inside a function before it is ran inside nodejs. The function wrapper includes four arguments,
exports(equivalent to 'module.exports'), require(function used to get access to the exports from another file), module(object that defines some properties + information), __filename and __dirname(full path of this file).

Nodejs uses Require Cache to store the exported file and get a reference from the Cache the second or the third time it needs a reference to the exports from that file. HENCE Nodejs only fetches the required file only once.

-------------------------------------------------------------
NodeJS debugging commandline                                |
-------------------------------------------------------------
use node inspect index.js
use node --inspect index.js
use node --inspect-brk index.js  (mostly use this one)  debugger can be viewed using chrome://inspect

---

initial commit

     initial commit 
---

experimenting with node modules
---

Readme update

     adding more info on nodejs, debugging tools and module.exports concept
---

V 0.11

     use node to display the documents in current directory
---

V 0.12

     structure node.js package.json for executables
---

V 0.13

     link our commandline tool using npm link
---

V 0.14

     use fs.lstat to check the stats of the file and change color accordingly.

     bug:
     random order displayed everytime the function is called.
---

V 0.141

     bug fix using two different approaches
---

V 0.142

     using promise appoach with fs.promise and util.promisify to allow all results to be return and displayed at once.
---

V 0.15

     use await+promise.all+async tools to allow all promise to resolve at once rather than one-by-one.
---

V 0.16

     color texting commandline tool using chalk(npm package).
---

V 0.17

     path input other than current working directory.