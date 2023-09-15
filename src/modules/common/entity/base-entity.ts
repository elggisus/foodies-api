export abstract class BaseEntity<ID>{
    
    private id!:ID;

    public get getId():ID{
        return this.id;
    }

    public set setId(id:ID){
        this.id = id;
    }
}