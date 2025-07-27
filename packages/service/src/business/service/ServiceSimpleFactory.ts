import { PageServiceV5 } from "./v5";

export class ServiceSimpleFactory {
    constructor() {
        this.cache = {};
    }

    cache;

    get(k) {
        switch (k) {
            case 'pageService': {
                if (!this.cache(k)) {
                    const o: PageServiceV5 = new PageServiceV5();
                    this.push(k, o);
                }
            }
        }
        if (this.cache[k]) {
            return this.cache[k];
        }

        return undefined;
    }

    push(k, v) {
        this.cache[k] = v;
    }
}

const factory: ServiceSimpleFactory = new ServiceSimpleFactory();
export { factory };