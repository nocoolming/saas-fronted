import { environment } from "../../../Environment";
import type { Page } from "../../model/Page";
import BaseServiceV5 from "./BaseServiceV5";

class PageServiceV5 extends BaseServiceV5<Page> {
    constructor() {
        super();

        this.version = '1';
        this.serviceName = 'page';
        this.apiUrl = environment.siteServiceUrl;

        // console.log('apiUrl: ' + this.apiUrl);
    }


    async getPagesBySiteId(id: string) {
        const action = 'getPagesBySiteId';

        const params = id;

        const pages = await this.post(action, params);

        return pages;
    }

    async save(page: Page) {
        const action: string = 'save';
        const result = await this.post(action, page);

        return result;
    }
}

export { PageServiceV5 };