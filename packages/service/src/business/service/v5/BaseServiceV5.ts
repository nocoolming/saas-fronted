import { environment } from "../../../Environment";
import ming from "../../lib/Ming";
import Model from "../../model/Model";


export default abstract class BaseServiceV5<T extends Model> {
    constructor() {
        this.version = '1';
        this.serviceName = '';
        this.apiUrl = environment.siteServiceUrl;
    }

    version: string;
    serviceName: string;
    apiUrl: string;

    async insert(o: T) {

        return await this.post('insert', o);
    }

    async update(o: T) {
        return await this.post('update', o);
    }

    async delete(o: T) {
        return await this.post('delete', o);
    }

    async get(id: string) {
        const result = await this.getAction(id);
        // console.log(result);
        return result.value;
    }

    async getAll() {
        return await this.getAction('all');
    }


    async post(action: string, o: any) {
        // debugger;
        const url: string = `${this.host()}/${action}`;

        // console.log(url);
        const res = await ming.post(url, o);

        return res.data;
    }

    async getAction(action: string) {
        const url: string = `${this.host()}/${action}`;

        // console.log(url);
        const res = await ming.get(url);

        return res.data;
    }


    host() {
        // console.log('apiUrl: ' + this.apiUrl);
        return `${this.apiUrl}/site/v${this.version}/${this.serviceName}`;
    }
}