import Page from "../../model/Page";
import BaseServiceV5 from "./BaseServiceV5";

class PageServiceV5 extends BaseServiceV5<Page> {
    constructor(){
        super();

        this.version = '1';
        this.serviceName = 'page';
    }


}

const pageService: PageServiceV5 = new PageServiceV5();
export {pageService};