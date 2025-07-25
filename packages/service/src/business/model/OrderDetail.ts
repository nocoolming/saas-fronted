import Model from "~/business/model/Model";
import User from "~/business/model/User";
import Product from "~/business/model/Prodcut";
import Variant from "~/business/model/Varient";
import Site from "./Site";


export interface OrderDetail extends Model {
    id: string;
    title: string;
    price: number;
    quantity: number;
    subtotal: number;
    currency: string;
    createAt: Date;
    upgradeAt: Date;
    createUserId: string;
    orderId: string;
    icon: string;
    productId: string;
    variantId: string;
    stockId: string;
    siteId: string;
    createUser: User
    product: Product;
    variant: Variant;
    site: Site;
}

