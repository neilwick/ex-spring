const db = require('../config/db');

module.exports = {
    getPage: async function (pageKey) {
        let connection = await db.getConnection();
        const rows = await connection.query("SELECT pageID,page_key,title,content,dateModified FROM `page` WHERE page_key = ?;",
            [
                pageKey
            ]);

        let data = rows[0];
        connection.end();

        return data;
    }
}