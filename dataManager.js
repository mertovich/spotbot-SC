const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data.db');
const fs = require('fs');

module.exports.createDB = function(userList) {
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER UNIQUE , name TEXT, image TEXT)");
    
        const stmt = db.prepare("INSERT OR IGNORE INTO users(id,name,image) VALUES (?, ?, ?)");
        userList.forEach(element => {
                stmt.run(element.id,element.name,element.image);
                console.log(element.id + ": " + element.name + ": " + element.image);
        });
        stmt.finalize();
    });
}

function getUsers() {
    var userList = []
    db.each("SELECT id, name, image FROM users", (err, row) => {
      userList.push({
        id: row.id,
        name: row.name,
        image: row.image
      })
      fs.writeFile('users.txt',`${JSON.stringify(userList)}`, function (err, data) {
        if (err) throw err;
      });
    });
    var data = fs.readFileSync('users.txt', 'utf-8');
    return data
}
exports.Users = getUsers();

function getBotInfo() {
  var data = fs.readFileSync('bot.txt', 'utf-8');
  return data
}
exports.botInfo = getBotInfo();