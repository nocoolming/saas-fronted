import BaseServiceV5 from "./BaseServiceV5";
import Domain from "../../model/Domain";
import ming from "../../lib/Ming";


class DomainServiceV5 extends BaseServiceV5<Domain> {
    constructor() {
        super();

        this.version = '1';
        this.serviceName = 'domain';
    }

    async getSite(request: Request) {
        const domain = request.headers.get("host");
        // console.log(`Getting domain from ${domain}`);
        const url = `site/v${this.version}/${this.serviceName}/domain/${domain}`;
// console.log(`url: ${url} version: ${this.version}`);
        const res = await ming.get(url);

        return res.data.value;
    }

}

const domainService = new DomainServiceV5();

export default domainService;