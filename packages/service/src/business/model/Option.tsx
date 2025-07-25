import Model from "~/business/model/Model";
import Value from "~/business/model/Value";


export default interface Option extends Model {
    id: string;
    title: string;
    icon: string;
    productId: string;
    values: Value[];
}


// private Long id;
// private String title;
// private Long productId;
// private Product product;
// @RelationOneToMany(selfField = "id", targetField = "optionId")
// private List<Value> values;