import Model from "./Model";
import User from "./User";
import Site from "./Site";

export default interface Product extends Model {
    id: string;
    title: string;
    description: string;
    keywords: string;
    content: string;
    icon: string;
    language: string;
    createAt: Date;
    updateAt: Date;
    createUserId: string;
    upgradeUserId: string;
    categoryId: string;
    upgradeUser: User;
    siteId: string;
    site: Site;
    createUser: User;
}

