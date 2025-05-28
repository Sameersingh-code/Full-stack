const express = require('express');
    var path=require('path')
    const app = express();
    const port = 3000;

    // Set EJS as the view engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    // Define a route to render an EJS template
    app.get('/', (req, res) => {
      // Data to pass to the template
      
      // Render the 'index' template with the provided data
      res.render('index');
    });
    

    // Start the server
    app.listen(port, () => {
      console.log(`Serverlistening on port ${port}`);
    });