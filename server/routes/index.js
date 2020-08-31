const express = require('express');
const router = express.Router();
const firebase = require("firebase");

//Fetch instances
router.get('/', function (req, res) {
  const phoneReference = firebase.database().ref("/Phones/");
  console.log('here')
  //Attach an asynchronous callback to read the data
  phoneReference.on("value", function (snapshot) {
    console.log(snapshot.val());
    res.json(snapshot.val());
    phoneReference.off("value");
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  });
});

//Create new instance
router.post('/', function (req, res) {
  const PhoneNumber = req.body.phoneNumber;
  const Name = req.body.name;
  const id = Date.now()

  const referencePath = `/Phones/${id}/`;
  const phoneReference = firebase.database().ref(referencePath);
  phoneReference.set({ Name, PhoneNumber }, function (error) {
    if (error) {
      res.send("Data could not be saved." + error);
    } else {
      res.send(`${Name}'s phone number saved successfully.`);
    }
  });
});

//Update existing instance
router.put('/:id', function (req, res) {
  const id = req.params.id;
  const Name = req.body.name;
  const PhoneNumber = req.body.phoneNumber;


  const referencePath = `/Phones/${id}/`;
  const phoneReference = firebase.database().ref(referencePath);
  phoneReference.update({ Name, PhoneNumber}, function (error) {
    if (error) {
      res.send("Data could not be updated." + error);
    } else {
      res.send("Data updated successfully.");
    }
  });
});

//Delete an instance
router.delete('/:id', function (req, res) {
  const id = req.params.id
  const referencePath = `/Phones/${id}/`;
  const phoneReference = firebase.database().ref(referencePath);
  phoneReference.remove((error) => {
    if (error) {
      res.send("Data could not be deleted." + error);
    } else {
      res.send("Data deleted successfully.");
    }
  })
});

module.exports = router;