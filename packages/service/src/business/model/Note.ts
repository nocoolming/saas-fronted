import Model from "~/business/model/Model";
import User from "~/business/model/User";
import Site from "~/business/model/Site";
import Category from "~/business/model/Category";


export default interface Note extends Model {
    id: string;
    title: string;
    description: string;
    keywords: string;
    content: string;
    categoryId: string;
    slateContent: string;
    icon: string;
    language: string;
    createAt: Date;
    updateAt: Date;
    createUserId: string;
    createUser: User;
    upgradeUserId: string;
    upgradeUser: User;
    siteId: string;
    site: Site;
    category: Category;
}