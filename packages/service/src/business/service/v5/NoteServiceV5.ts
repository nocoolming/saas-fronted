
import BaseServiceV5 from "./BaseServiceV5";
import Note from "../../model/Note";
import ming from "../../lib/Ming";


class NoteServiceV5 extends BaseServiceV5<Note> {
    constructor() {
        super();

        this.version = '1';
        this.serviceName = 'note';
    }

    async findNotesBySiteId({siteId, begin, lang}: { siteId: string, begin: Date, lang: string }) {
        const action = "site/v1/note/site";

        const param = {
            siteId,
            begin,
            lang,
        };

        const res = await ming.post(action, param);

        return res.data.value;
    }

    async findNotesByCategoryCode(siteId: string, code: string, begin: Date) {
        const action = "site/v1/note/category";

        const param = {
            siteId,
            code,
            begin,
        };

        const res = await ming.post(action, param);

        return res.data.value;
    }
}

const noteService: NoteServiceV5 = new NoteServiceV5();

export  {noteService};