import Model from "../Model";

export default interface User extends Model {
    id: string;
    email: string;
    password: string;
    username: string;
}