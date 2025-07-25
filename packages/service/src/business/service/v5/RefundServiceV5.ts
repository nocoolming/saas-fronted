import BaseServiceV5 from "./BaseServiceV5";
import Refund from "../../model/Refund";
import ming from "../../lib/Ming";

class RefundServiceV5 extends BaseServiceV5<Refund> {
    constructor() {
        super();

        this.serviceName = 'refund';
    }

    async create(refund) {
        const url = "create";
        console.log(refund);

        const result = await this.post(url, refund);

        console.log(result);

        return result.value;
    }

    async queryByUserId({ userId, index, size }) {
        const url = "queryByUserId";

        const result = await this.post(url, { userId, index, size });

        return result.value;
    }

}

const refundService = new RefundServiceV5();
export default refundService;