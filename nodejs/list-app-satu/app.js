const express = require('express');
const mysql = require('mysql');
const app = express();

// Paste the code to specify the folder that stores CSS and image files
app.use(express.static('public'));

// Make it so that you can get values from submitted forms
app.use(express.urlencoded({
    extended: false
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hendri123',
    database: 'list_app'
});

connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected!');
});

// Add the route for the top page
app.get('/', (req, res) => {
    res.render('top.ejs');
});

// Add the route for the list page
app.get('/index', (req, res) => {
    // Write the necessary code to get data from the database
    connection.query('SELECT * FROM items', (error, results) => {
        res.render('index.ejs', {
            items: results
        });
    });
});

app.get('/new', (req, res) => {
    res.render('new.ejs');
});

// Add a route method for creating items
app.post('/create', (req, res) => {
    connection.query(
        'INSERT INTO items (name) VALUES(?)',
        [req.body.itemName],
        (error, results) => {
            if (error) {
                console.log(error);
            }
            res.redirect('/index');
        }
    );
});

// Add a route for deleting items
app.post('/delete/:id', (req, res) => {
    connection.query(
        'DELETE FROM items WHERE id = ?',
        [req.params.id],
        (error, results) => {
            res.redirect('/index');
        }
    );
});

// Add a route for the edit page
app.get('/edit/:id', (req, res) => {
    connection.query(
        'SELECT * FROM items WHERE id = ?',
        [req.params.id],
        (error, results) => {
            res.render('edit.ejs', {
                item: results[0]
            });
        }
    );
});

// Add a route for updating items
app.post('/update/:id', (req, res) => {
    connection.query(
        'UPDATE items SET name = ? WHERE id = ?',
        [req.body.itemName, req.params.id],
        (error, results) => {
            res.redirect('/index');
        }
    );
});

app.listen(3000);