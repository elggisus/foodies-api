export class BaseId<T>{
    private value:T;

    constructor(value:T){
        this.value = value;
    }

    public get getValue(){
        return this.value;
    }
}