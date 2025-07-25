import BaseServiceV5 from "./BaseServiceV5";
import Comment from "../../model/Comment";
import ming from "../../lib/Ming";

class CommentServiceV5 extends BaseServiceV5<Comment> {
    constructor() {
        super();
        this.serviceName = 'comment';
    }
    async getCommentsByProductId(productId: string, begin: Date) {
        const url = 'getCommentsByProduct';

        const param = {
            productId,
            begin,
        };

        const result =  await this.post(url, param);
        return result.value
    }

    async getCommentsByNoteId(noteId: string, begin: Date) {
        const url = 'getCommentsByNote';

        const param = {
            noteId,
            begin,
        };

        const result =  await this.post(url, param);
        return result.value
    }

}

const commentService = new CommentServiceV5();
export default commentService;