import Model from "./Model";
import User from "./User";


export default interface Site extends Model{
    id: string;
    title: string;
    description: string;
    keywords: string;
    content: string;
    createAt: Date;
    updateAt: Date;
    createUserId: string;
    createUser: User;
}