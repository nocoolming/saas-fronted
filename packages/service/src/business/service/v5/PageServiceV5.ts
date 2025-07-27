import { environment } from "../../../Environment";
import type { Page } from "../../model/Page";
import BaseServiceV5 from "./BaseServiceV5";

class PageServiceV5 extends BaseServiceV5<Page> {
    constructor() {
        super();

        this.version = '1';
        this.serviceName = 'page';
        this.apiUrl = environment.siteServiceUrl;

        console.log('apiUrl: ' + this.apiUrl);
    }


}

export { PageServiceV5 };