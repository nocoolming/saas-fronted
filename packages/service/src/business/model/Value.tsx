import Model from "~/business/model/Model";
import Product from "~/business/model/Prodcut";
import Option from "cac/deno/Option";


export default interface Value extends Model {
    id:string;
    title: string;
    icon: string;
    optionId: string;
    productId: string;
    option: Option;
    product: Product;
}
