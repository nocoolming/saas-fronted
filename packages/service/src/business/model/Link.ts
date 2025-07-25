import Model from "~/business/model/Model";
import Site from "~/business/model/Site";
import User from "~/business/model/User";


export default interface Link extends Model{
    id: string;
    icon: string;
    url: string;
    alt: string;
    createUserId: string;
    siteId: string;
    createAt: Date;
    site: Site;
    createUser: User
}