import BaseServiceV5 from "./BaseServiceV5";
import User from "../../model/User";
import ming from "../../lib/Ming";


class UserServiceV5 extends BaseServiceV5<User> {
    constructor() {
        super();

        this.version = '1';
        this.serviceName = 'user';
    }

    async signIn(o: SignInParam) {
        const url = `site/v2/auth/signIn`;

        return await ming.post(url, o);
    }

    async findByUsernameOrMailOrMobile(username: string, siteId: string) {
        const url: string = `username/${username}/siteId/${siteId}`;

        // console.log(`url: ${url}`);
        const result = await this.getAction(url);

        return result.value;
    }

    async getUsersByIds(ids) {
        const url: string = 'getUsersByIds';

        const result = await this.post(url, ids);


        return result.value;
    }


    async signOn({
                     username, password, email, siteId
                 }: { username: string, password: string, email: string, siteId: string }) {
        const url = 'site/v2/auth/signOn';

        const param = {
            username,
            password,
            mail: email,
            siteId,
        }

        // console.log(param);

        const result = await ming.post(url, param);
        // console.log(user);
        return result;

    }
}

export type SignInParam = {
    username: string;
    password: string;
    siteId: string;
};

const userService = new UserServiceV5();
export default userService;