'use strict';

import {MyClass} from "./MyClass";
import {Child} from "./Child";



// class parent test
let yourStr = "randomstrrrr";
/**
 *
 * @type {MyClass}
 */
let instance_myClass = new MyClass(yourStr)



// class child test
let childName = "childNOOOOAAME";
let childNb = 1234;
/**
 *
 * @type {Child}
 */
    // DONT forget yourStr because this class is extended from MyClass(yourStr:string)
let instance_childClass = new Child(yourStr, childName, childNb);



//display
console.log(instance_myClass.getYourStr());

console.log(instance_childClass.getChildName(), instance_childClass.getYourStr(), instance_childClass.getChildNb());