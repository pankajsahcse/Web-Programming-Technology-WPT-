## Topic: Modules in Node.js (require, module.exports, import, export)

Reusable Function is known Module

Node.js mein mainly 2 module systems hain:
1. CommonJS (CJS) → require() and module.exports
2. ES Modules (ESM) → import and export


# exports vs module.exports
 Both are use for export data in CommonJS

 * exports.a = 10;
 * exports.b = 20;

   module.exports = {
    a: 10,
    b: 20
   };


 ## Modern JavaScript mein ES Modules use kiye jate hain.

  # File name - math.mjs 
   export function add(a, b) {
    return a + b;
   }

  export const PI = 3.14;

  # File name - app.mjs

    import { add, PI } from './math.mjs';

    console.log(add(10, 20));
    console.log(PI);



 ## Named Export vs Default Export   

  1. Named Export   
- Ek file se multiple named exports kar sakte ho.
- Import karte time {} use hota hai.   IMP - fileName with Extention
- Export aur import ka naam same hona chahiye (unless as use karo).

 2. Default Export
- Ek module mein sirf one default export ho sakta hai.
- Import karte time {} nahi lagate.
- Import ka naam kuch bhi rakh sakte ho.