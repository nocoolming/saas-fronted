import BaseServiceV5 from "~/business/service/v5/BaseServiceV5";
import Option from "~/business/model/Option";


class OptionServiceV5 extends BaseServiceV5<Option> {
    constructor() {
        super();

        this.serviceName = 'option';
    }

    // 获取所有商品
    async getOptions(productId) {
        const url = `productId/${productId}`;

        const result = await this.getAction(url);

        // console.log(options);
        return result.value;
        // const result = (await Api.get(url)).data
    }
}

const optionService = new OptionServiceV5();
export default optionService;
