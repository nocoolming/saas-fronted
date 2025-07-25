import Model from "~/business/model/Model";
import User from "~/business/model/User";
import Site from "~/business/model/Site";

export default interface Cart extends Model {
    id: string;
    currency: string;
    subtotal: number;
    createUserId: string;
    createAt: Date;
    upgradeAt: Date;
    siteId: string;
    createUser: User;
    site: Site;
}


// private Long id;
// private String currency;
// private BigDecimal subtotal;
//
// private Long createUserId;
// private LocalDateTime createAt;
// private LocalDateTime upgradeAt;
//
// private long siteId;