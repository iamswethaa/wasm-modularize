const createModule = require('./sub.js');

createModule().then((Module) => {
  const result = Module.ccall('sub', 'number', ['number', 'number'], [10, 3]);
  console.log('Result : ', result); 
});