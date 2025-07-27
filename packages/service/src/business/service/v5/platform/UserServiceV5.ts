import { environment } from "../../../../Environment";
import User from "../../../model/playform/User";
import BaseServiceV5 from "../BaseServiceV5";


export class UserServiceV5 extends BaseServiceV5<User> {
    constructor(){
        super();

        this.version = '1';
        this.serviceName = "user";
        this.apiUrl = environment.userServiceUrl;
    }


}