module.exports = function(app,db){
  app.post('/notes',(req,res)=>{
    const note = {test: req.body.body,title: req.body.title};
    db.collection('notes').insert(note,(err,results)=>{

    });
  })
}
