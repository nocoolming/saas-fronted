import Model from "~/business/model/Model";
import Product from "~/business/model/Prodcut";
import Value from "~/business/model/Value";

export default interface Variant extends Model {
    id: string;
    price: number;
    quantity: number;
    productId: string;
    product: Product;
    values: Value[];
}

// private Long id;
// private BigDecimal price;
// private int quantity;
// private long productId;