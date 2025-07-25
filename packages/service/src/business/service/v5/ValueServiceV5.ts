import BaseServiceV5 from "./BaseServiceV5";
import Value from "../../model/Value";

class ValueServiceV5 extends BaseServiceV5<Value> {
    constructor() {
        super();

        this.serviceName = 'value';
    }


}

const valueService = new ValueServiceV5();
export default valueService;