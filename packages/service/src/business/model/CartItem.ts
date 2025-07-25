import Model from "~/business/model/Model";
import Product from "~/business/model/Prodcut";
import Variant from "~/business/model/Varient";
import Cart from "~/business/model/Cart";
import Site from "~/business/model/Site";

export interface CartItem extends Model {
    id: string;
    currency: string;
    price: number;
    quantity: number;
    createAt: Date;
    upgradeAt: Date;
    productId: string;
    variantId: string;
    cartId: string;
    siteId: string;

    product: Product;
    variant: Variant;
    cart: Cart
    site: Site;
}
