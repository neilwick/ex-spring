var express = require('express');
var router = express.Router();
const db = require('../config/db');

/* GET home page. */
router.get('/', async function (req, res, next) {

  const pageData = await getPage("home");
  console.log(pageData);
  res.render('index', { title: pageData.title, page: pageData });
});

const getPage = async function (pageKey) {
  let connection = await db.getConnection();
  const rows = await connection.query("SELECT pageID,page_key,title,content,dateModified FROM `page` WHERE page_key = ?;",
    [
      pageKey
    ]);

  let data = rows[0];
  connection.end();

  return data;
}

module.exports = router;
