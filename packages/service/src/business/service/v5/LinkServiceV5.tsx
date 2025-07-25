import BaseServiceV5 from "~/business/service/v5/BaseServiceV5";

import Link from "~/business/model/Link";


export class LinkServiceV5 extends BaseServiceV5<Link> {
    constructor() {
        super();

        this.serviceName = 'link';
    }

    async findByLinksBySiteId(siteId: string) {
        const url = `links-site`;

        // console.log(siteId);
        const result = await this.post(url, siteId);

        // console.log(JSON.stringify(result));

        return result.value;
    }

}

const linkService = new LinkServiceV5();
export default linkService;

