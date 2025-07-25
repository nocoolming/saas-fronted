import Order from "../../model/Order";
import BaseServiceV5 from "./BaseServiceV5";

class OrderServiceV5 extends BaseServiceV5<Order> {
    constructor() {
        super();

        this.serviceName = 'order';
    }

    async getCount({userId, startTime, endTime, status}) {
        const action = `getCount`;

        const result = await this.post(action, {
            userId,
            startTime,
            endTime,
            status,
        });

        return result.value;
    }

    async createOrder(order) {
        const url = "createOrder";

        const result = await this.post(url, order);

        return result.value;
    }

    async createOrderByCartItemIds(params) {
        const url = "createOrderByCartItemIds";

        const result = await this.post(url, params);

        return result.value;
    }

    // test ci
    async get(id) {
        const url = `` + id;
        // console.log(url);
        const result = await this.getAction(url);
        //
        return result.value;
    }

    async getOrdersByPredicate({
                                   userId,
                                   startTime,
                                   endTime,
                                   index,
                                   size,
                                   status,
                               }) {
        const url = `getOrdersByUserIdAndPredicate`;

        const params = {
            userId,
            startTime,
            endTime,
            index,
            size,
            status,
        };

        // console.log(params);

        const result = await this.post(url, params);

        return result.value;
    }
}

const orderService: OrderServiceV5 = new OrderServiceV5();
export default orderService;