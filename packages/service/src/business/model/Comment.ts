import Model from "~/business/model/Model";
import Note from "~/business/model/Note";
import User from "~/business/model/User";


export default interface Comment extends Model {
    id: string;
    content: string;
    createAt: Date;
    noteId: string;
    productId: string;
    createUserId: string;
    commentId: string;

    note: Note;
    createUser: User;
    // product: Product
    comment: Comment;
}




