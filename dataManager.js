const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data.db');

module.exports.createDB = function(userList) {
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER UNIQUE , name TEXT, image TEXT)");
    
        const stmt = db.prepare("INSERT OR IGNORE INTO users(id,name,image) VALUES (?, ?, ?)");
        userList.forEach(element => {
                stmt.run(element.id,element.name,element.image);
        });
        stmt.finalize();

        db.each("SELECT id, name, image FROM users", (err, row) => {
            console.log(row.id + ": " + row.name + ": " + row.image);
        });
    });
}