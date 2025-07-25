import BaseServiceV5 from "./BaseServiceV5";
import Site from "../../model/Site";

class SiteServiceV5 extends BaseServiceV5<Site> {
    constructor() {
        super();

        this.serviceName = 'site';
    }

    async getSite(request: Request) {
        const domain = request.headers.get("host");
        // console.log(`domain: ${domain}`);
        const url = `domain/${domain}`;

        const result = await this.getAction(url);
        return result.value;
    }

    async update(site) {
        const url = "update";

        const result = await this.post(url, site);
        return result.value;
    }
}

const siteService: SiteServiceV5 = new SiteServiceV5();
export default siteService;