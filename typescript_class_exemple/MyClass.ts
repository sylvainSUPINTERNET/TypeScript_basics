'use strict';


/**
 * My exemple parent class MyClass.
 * @class
 */
export class MyClass {
    // can remove 'public' (default public)
    public yourStr: string;
    public initString = "CONNA";
    private password = "passsswwooooordd";
    protected arr: Array<string>;

    /**
     * @constructor
     * @param {string} yourStr
     */
    constructor(yourStr: string){
        this.yourStr = yourStr;
    }

    /**
     *
     * @returns {string}
     */
    getYourStr():string{
        return this.yourStr;
    }

    /**
     *
     * @returns {Array<string>}
     */
    getArr():Array<string>{
        return this.arr;
    }



}