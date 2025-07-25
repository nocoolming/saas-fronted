import * as process from "node:process";
import axios from "axios";


class Ming {

    async get(action: string) {
        const url = `${process.env.API_SERVICE}/${action}`;
        // console.log(process.env.API_SERVICE)
        //         console.log(url);
        return axios.get(url);

    }

    async post(action: string, params) {
        // console.log(action);
        const url = `${process.env.API_SERVICE}/${action}`;
        // console.log(url);
        const res
            = axios.post(
                url,
                params,
                {
                    headers: {
                        'content-type': 'application/json',
                    }
                });

        return res;
    }

}

const ming = new Ming();
export default ming;