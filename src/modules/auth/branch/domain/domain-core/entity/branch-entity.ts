import { BaseEntity } from "../../../../../common/entity/base-entity";
import { BranchId } from "../valueobject/branch-id";
import { BranchStatus } from "../valueobject/branch-status";

export class Branch extends BaseEntity<BranchId>{
    
    private readonly name:string;
    private status:BranchStatus;


    constructor(builder:Builder){
        super();
        super.setId = builder.getBranchId;
        this.name = builder.getName;
        this.status = builder.getStatus;
        
    }
    
    static builder():Builder{
        return new Builder();
    }

    public get getName():string{
        return this.name;
    }

    public get getStatus():BranchStatus{
        return this.status;
    }

    initializeAndValidate(){
        this.status = BranchStatus.ENABLED;
    }

   
}

class Builder{

    private branchId!:BranchId;
    private name!:string;
    private status!:BranchStatus;
   

    public build():Branch {
        return new Branch(this);
    }

    public setBranchId(val:BranchId):Builder {
        this.branchId = val;
        return this;
    }

    public get getBranchId():BranchId{
        return this.branchId;
    }
    
    public setName(val:string):Builder {
        this.name = val;
        return this;
    }

    public get getName():string {
        return this.name;
    }

    public setSatus(val:BranchStatus):Builder {
        this.status = val;
        return this;
    }

    public get getStatus():BranchStatus{
        return this.status;
    }

}
