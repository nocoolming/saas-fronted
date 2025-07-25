import Model from "./Model";
import Site from "./Site";
import User from "./User";


export default interface Page extends Model {
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
// category varchar(64) not null,
// content text null,
// template_id bigint null,
// create_at timestamp null,
// create_user_id BIGINT null ,
// upgrade_at timestamp null,
// upgrade_user_id BIGINT null ,
// site_id BIGINT null