const fs = require('fs');
const path = require('path');

const rootPath = require('../util/path');

const p = path.join(
   rootPath,
   'data',
   'products.json'
);

const getProductsFromFile = (cb) => {

   fs.readFile(p, (err, fileContent) => {
      if (err) {
         return cb([]); //no data detected, call back in products.js will get an empty array
      }
      cb(JSON.parse(fileContent)); //call back in products will get parsed data
   });
};

module.exports = class Product {

   //parse and stringify are joth JSON methods used to 
   //retrieve from and write on JSON files with JSON objects


   constructor(t) {
      this.title = t;
   }

   save() {
      getProductsFromFile((products) => {
         products.push(this);
         fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err);
         });
      });
   }

   //utility function used on the class itself and not on an instantiated object
   static fetchAll(cb) {
      //forwarding the callback into the helper function
      getProductsFromFile(cb);
   }
}