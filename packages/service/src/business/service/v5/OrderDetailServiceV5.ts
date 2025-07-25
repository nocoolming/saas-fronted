import BaseServiceV5 from "./BaseServiceV5";
import {OrderDetail} from "../../model/OrderDetail";
import ming from "../../lib/Ming";


class OrderDetailServiceV5 extends BaseServiceV5<OrderDetail> {
    constructor() {
        super();

        this.serviceName = 'orderDetail';
    }


    async create(params) {
        const url: string = `orderDetail/create`;

        const refund = await this.post(url, params);

        // console.log(JSON.stringify(refund));

        return refund;
    }
}

const orderDetailService = new OrderDetailServiceV5();
export default orderDetailService;