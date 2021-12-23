var sqlite3 = require('sqlite3').verbose()
//in order to retriever the patient data, we type //patients at the end.

// open the database : I changed from mybooks.db to mypatients.db to patients
let db = new sqlite3.Database('mypatients.db', (err) => {
    if (err) {
      console.error(err.message);
      throw err
    }
    console.log('Connected to the mypatients database.');
  });


  // create table 'book' : I changed from book to patient
  const sql='CREATE TABLE patient(name text)';
  db.run(sql, (err) => {
    if (err) {
        // Table already created
        console.log('Table already created.');
    }else{
      console.log('Table created.');
      
      // First time Table created, insert some rows
      console.log('First time Table created, creating some rows.');
      
      var insert = 'INSERT INTO patient(name) VALUES(?)';
      
      
      db.run(insert, '["treatId: "LHM912","treatCourseId":"40644", "type": "short term", "category": "calf injury", "name": "Omar Adnan", "startDate": "13-10-2021"');
    
    }
  });


// export as module, called db
module.exports = db
