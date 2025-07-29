import BaseServiceV5 from "./BaseServiceV5";
import Domain from "../../model/Domain";
import { environment } from "../../../Environment";
import Site from "../../model/Site";

export class DomainServiceV5 extends BaseServiceV5<Domain> {
    constructor() {
        super();

        this.version = '1';
        this.serviceName = 'domain';
        this.apiUrl = environment.siteServiceUrl;
    }

    async getSite(request: Request) {
        const domain = request.headers.get("host");
        // console.log(`Getting domain from ${domain}`);
        const action = `domain/${domain}`;
        // console.log(`url: ${url} version: ${this.version}`);
        const result = await this.getAction(action);
        const site: Site = result.value;
        return site;
    }

}
