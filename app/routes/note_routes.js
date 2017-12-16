var ObjectID = require('mongodb').ObjectId;

module.exports = function(app,db){

  app.get('/notes/:id', (req,res) =>{
    const id = req.params.id;
    console.log(req);
    console.log(id);
    const details = {'_id': new ObjectID(id)};
    db.collection('notes').findOne(details,(err,item)=>{
      if(err){
        res.send({'error':'An error has occured'});
      }
      else{
        console.log(item);
        res.send(item);
      }
    });
  });

  app.put('/notes/:id', (req,res) =>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('notes').update(details,note,(err,item)=>{
      if(err){
        res.send({'error':'An error has occured'});
      }
      else{
        console.log(item);
        res.send(item);
      }
    });
  });

  app.delete('/notes/:id', (req,res) =>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const note = {test: req.body.body,title: req.body.title};
    db.collection('notes').remove(details,(err,item)=>{
      if(err){
        res.send({'error':'An error has occured'});
      }
      else{
        res.send("Note: "+id+" deleted!");
      }
    });
  });

  app.post('/notes',(req,res)=>{
    const note = {test: req.body.body,title: req.body.title};
    db.collection('notes').insert(note,(err,result)=>{
      if(err){
        res.send({"error":"An error has occured."});
      }
       else{
         res.send(result.ops[0]);
       }
    });
  })
}
