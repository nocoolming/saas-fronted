import BaseServiceV5 from "./BaseServiceV5";
import Variant from "../../model/Varient";

class VariantServiceV5 extends BaseServiceV5<Variant> {
    constructor() {
        super();

        this.serviceName = 'variant';
    }

    async getVariantsByProductId(productId) {
        const url: string = `product/${productId}`;

        const variants = await this.getAction(url);

        return variants;
    }

    async getVariantModelByProductId(productId) {
        const url: string = `getVariantMapByProductId/${productId}`;

        const result = await this.getAction(url);

        // console.log(variantMap);

        return result.value;
    }
}

const variantService = new VariantServiceV5();
export default variantService;