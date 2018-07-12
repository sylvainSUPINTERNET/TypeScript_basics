'use strict';


import {MyClass} from "./MyClass";

/**
 * My exemple child class Child.
 * @class
 */
export class Child extends MyClass{

    public childName: string;
    protected childNb: number;
    private childPass: "pass";

    /**
     * @constructor
     * @param {string} parent_yourStr -> correspond to prop yourStr from parent class (MyClass)
     * @param {string} childName -> child prop public
     * @param {number} childNb -> child prop protected
     */
    constructor(parent_yourStr:string,childName: string, childNb:number){
        super(parent_yourStr);

        this.childName = childName;
        this.childNb = childNb;
    }


    /**
     *
     * @returns {string} child name public prop
     */
    getChildName(): string{
        return this.childName;
    }

    /**
     *
     * @returns {number} child nb protected prop
     */
    getChildNb():number{
        return this.childNb;
    }

    /**
     *
     * @returns {string} result of merge prop yourStr (myClass) + childName (Child)
     */
    mergeParentAndChild():string{
        return this.childName + this.yourStr;
    }

}