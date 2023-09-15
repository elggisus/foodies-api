
export class GetResturantCategoryDto{
    
    private readonly idRestaurant:number | undefined;


    constructor(builder:Builder){
        this.idRestaurant = builder.getIdRestaurant
    
    }

    public get getIdRestaurant():number | undefined {
        return this.idRestaurant
    }


    static builder():Builder{
        return new Builder();
    }

    // toPrimitive(){
    //     return {
    //         name: this.idRestaurant,
    //     }
    // }

    
}

class Builder{

    private idRestaurant!:number | undefined;

    

    public build():GetResturantCategoryDto {
        return new GetResturantCategoryDto(this);
    }

    public setIdRestaurant(val:number | undefined):Builder {
        this.idRestaurant = val;
        return this;
    }
    public get getIdRestaurant():number | undefined{
        return this.idRestaurant;   
    }
   
    

   
}