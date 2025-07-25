import BaseServiceV5 from "./BaseServiceV5";
import {CartItem} from "../../model/CartItem";

class CartItemServiceV5 extends BaseServiceV5<CartItem> {
    constructor() {
        super();

        this.serviceName = 'cartItem';
    }

    async add(item) {
        const url: string = `addToCart`;

        const cartItem = await this.post(url, item);

        return cartItem;
    }

    async getItemsByCartId(cartId: string) {
        const url: string = `getItemsByCartId/${cartId}`;

        const list = await this.getAction(url);

        return list;
    }
}

const cartItemService: CartItemServiceV5 = new CartItemServiceV5();

export default cartItemService;