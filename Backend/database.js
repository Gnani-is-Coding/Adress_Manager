const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./addresses.db", (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log("Connected to the database.")
})


function  initializeDatabase() {
    db.serialize(() => {

        db.run(
            `CREATE TABLE Users(Id INTEGER NOT NULL PRIMARY KEY, Name VARCHAR, PASSWORD TEXT)`
        );

        db.run(`
            CREATE TABLE ADDRESS(Id INTEGER NOT NULL PRIMARY KEY, USER_ID INTEGER,NAME VARCHAR, ADDRESS TEXT NOT NULL, FOREIGN KEY (USER_ID) REFERENCES USERS(Id) ON DELETE CASCADE )
        `)
    })
}


module.exports = {db, initializeDatabase}
