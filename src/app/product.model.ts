export class Product {
    public Pname :string;
    public description :string;
    public Price :Number;
    public imagepath :string;
    public avaliablePecies :Number;
    public  seller:string;
    public  category:string;
    public  subcategory:string;


    constructor(name :string , desc:string , Price:Number, imagepath:string ,avaliablePecies :Number , Seller:string){
        this.Pname =name;
        this.description =desc;
        this.imagepath=imagepath;
        this.Price=Price;
        this.avaliablePecies =avaliablePecies ;
        this.seller=Seller;

    }}
