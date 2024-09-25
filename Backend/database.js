const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./addresses.db", (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log("Connected to the database.")
})

const initializeDatabase = () => {
    db.serialize(() => {

        db.run(
            `CREATE TABLE Users(Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name TEXT, ADDRESS TEXT, PHONE TEXT)`
        );
    })
}

