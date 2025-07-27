import Model from "./Model";
import Site from "./Site";
import User from "./User";

interface Page extends Model {
    id: string;
    category: string;
    content: string;
    templateId: string;
    createAt: Date;
    upgradeAt: Date;
    createUserId: string;
    upgradeUserId: string;
    siteId: string;
    site: Site;
    createUser: User;
    upgradeUser: User;
    
}

// id bigint not null primary key,

export {Page}