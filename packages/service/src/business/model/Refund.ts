import Model from "./Model";
import Order from "./Order";
import User from "./User";

export default interface Refund extends Model {
    id: string;
    status: string;
    orderId: string;
    orderDetailId: string;
    upgradeUserId: string;
    categoryId: string;
    createAt: Date;
    upgradeAt: Date;

    order: Order;
    createUser: User;
    upgradeUser: User;
}


// private Long id;
// private String status;
// private Long orderId;
// private Long orderDetailId;
// private Long createUserId;
// private Long upgradeUserId;
// private Long categoryId;
// private LocalDateTime createAt;
// private LocalDateTime upgradeAt;
//
// private Order order;
// private User createUser;
// private User upgradeUser;