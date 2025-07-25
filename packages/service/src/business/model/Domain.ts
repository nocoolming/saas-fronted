import Model from "~/business/model/Model";
import Site from "~/business/model/Site";


export default interface Domain extends Model {
    id: string;
    domain: string;
    siteId: string;
    site: Site;
}