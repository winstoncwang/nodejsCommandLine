# nodejsCommandLine
Using nodejs to create a custom command line

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

    