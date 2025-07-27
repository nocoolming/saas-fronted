import { PageServiceV5 } from "./v5";
import { UserServiceV5 as platformUserService } from "./v5/platform/UserServiceV5";
import { UserServiceV5 } from "./v5/UserServiceV5";

export class ServiceSimpleFactory {
    constructor() {
        this.cache = {};
    }

    cache;

    push(k, v) {
        this.cache[k] = v;
    }

    get(k) {
        switch (k) {
            case 'pageService': {
                if (!this.cache(k)) {
                    const o: PageServiceV5 = new PageServiceV5();
                    this.push(k, o);
                    break;
                }
            }
            case 'platformUserService': {
                if (!this.cache[k]) {
                    const o: platformUserService = new platformUserService();
                    this.push(k, o);
                    break;
                }
            }
            case 'userService': {
                if (!this.cache[k]) {
                    const o: UserServiceV5 = new UserServiceV5();
                    this.push(k,o);
                    break;
                }
            }
        }
        if (this.cache[k]) {
            return this.cache[k];
        }

        return undefined;
    }
}

const factory: ServiceSimpleFactory = new ServiceSimpleFactory();
export { factory };