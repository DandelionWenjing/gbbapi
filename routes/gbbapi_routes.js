var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/health', (req, res) => {
        res.send('OK')
    });
   
   
   
    app.get('/gbbfinder/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('gbbs').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
   });  
  
   app.delete('/gbbfinder/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('gbbs').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('GBB ' + id + ' deleted!');
      } 
    });
   });

   app.put('/gbbfinder/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const gbb = { skills: req.body.skills, name: req.body.name, location: req.body.location };
    db.collection('gbbs').update(details, gbb, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(gbb);
      } 
    });
  });
  
    app.post('/gbbfinder', (req, res) => {
    const gbb = {skills: req.body.skills, name: req.body.name, location: req.body.location };
    db.collection('gbbs').insert(gbb, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error occured'});
        } else {
        res.send(result.ops[0]);
    }
    }); 
  });
};