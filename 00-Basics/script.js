import naam from './app.js'
//we can import with any name as we used default export in app.js
//but if we use named export we need to write same name as exported
import {age,skills} from './app.js'
//here age was exported by name so we need to use same name unlike 'naam'
import user2 from './test.js'

console.log(age);
console.log(naam);
