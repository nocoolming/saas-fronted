import Model from "~/business/model/Model";
import User from "~/business/model/User";
import Site from "~/business/model/Site";

export default interface Order extends Model {
    id: string;
    title: string;
    total: number;
    currency: string;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    city: string;
    zip: string;
    phone: string;
    status: string;
    paymentStatus: string;
    fulfillmentStatus: string;
    returnStatus: string;
    shippingStatus: string;
    createAt: Date;
    updateAt: Date;
    createUserId: string;
    siteId: string;
    createUser: User;
    site: Site;
}
