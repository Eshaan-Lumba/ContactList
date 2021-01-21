const express = require('express');
const router = express.Router();

//Create API for retrieivng, adding contact etc. This brings up contact schema
const Contact = require('../models/contacts');



// anything /api/contacts will get directed to this method
//retreiving data
router.get('/contacts', (req, res, next)=>{
  Contact.find(function (err, contacts){
    res.json(contacts);
  })
});

//add contact
router.post('/contact', (req, res, next)=>{
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
  });

  newContact.save((err, contact) =>{
    if (err)
    {
      res.json({msg: 'Failed to add contact'});
    } 
    else 
    {
      res.json({msg: 'Contact added successfully'});;
    }
  });
});


//delete contact. You refer to the particular contact by using its id
router.delete('/contact/:id', (req, res, next)=>{
  Contact.remove({_id: req.params.id}, function(err, result){
    if (err)
    {
      res.json(err);
    } 
    else 
    {
      res.json(result);
    }
  });
});



//Whenever you are creating route, you need to export the router as well
module.exports = router;