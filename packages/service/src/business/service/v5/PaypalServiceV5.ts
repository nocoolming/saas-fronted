import ming from "../../lib/Ming";


class PaypalServiceV5 {
    async createOrder(order) {
        const url = "site/v1/paypal/createOrder";

        const result = await ming.post(url, order);

        console.log(result);
        return result.data.value;
    }
}

const paypalService = new PaypalServiceV5();
export default paypalService;
