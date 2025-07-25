import BaseServiceV5 from "~/business/service/v5/BaseServiceV5";
import Product from "~/business/model/Prodcut";


class ProductServiceV5 extends BaseServiceV5<Product> {
    constructor() {
        super();

        this.serviceName = 'product';
    }

    async setIcon(id, icon) {
        const url = "setIcon";

        const result = await this.post(url, { id, icon });

        return result.value;
    }

    async getProductsBySiteId(siteId: string, begin: Date) {
        const url: string = `siteId/${siteId}/beginTime/${begin.toISOString()}`;
        // console.log(url);
        // url = `/v1/product/all`;
        console.log(`siteId: ${siteId}, beginTime: ${begin.toISOString()}`);
        const result = await this.getAction(url);
        return result.value;
    }

    async waterfall({ siteId, begin, language }: { siteId: string, begin: string, language: string }): Promise<Product[]> {
        const url = "waterfall";

        let param = {
            siteId: siteId,
            language,
        }

        // console.log(`siteId: ${siteId}`)

        if (begin) {
            // console.log(`begin is not null, begin: ${begin}`)
            param = {
                begin,
                ...param,
            }
        }

        // console.log(JSON.stringify(param));
        const result = await this.post(url, param);
        return result.value;
    }

    async get(id) {
        const url = `get/${id}`;
        const result =  await this.getAction(url);
        return result.value
    }
}

const productService = new ProductServiceV5();
export default productService;