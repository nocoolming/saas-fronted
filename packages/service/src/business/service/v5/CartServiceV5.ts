import BaseServiceV5 from "./BaseServiceV5";
import Cart from "../../model/Cart";


class CartServiceVt5 extends BaseServiceV5<Cart> {
    constructor() {
        super();

        this.serviceName = 'cart';
    }

    // 获取购物车列表
    public async getCartList() {
        const url = `/list`;
    }
}

const cartService: CartServiceVt5 = new CartServiceVt5();
export default cartService;