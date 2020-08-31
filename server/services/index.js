const firebase = require("firebase");

const getPhones = () => {
  const phoneReference = firebase.database().ref("/Phones/");
  return (new Promise((resolve, reject) => {
    phoneReference.on("value", function (snapshot) {
      const folders = snapshot.val();
      if (folders === null) {
        resolve([]);
      } else {
        const data = Object.keys(folders).map(o => Object.assign({ phoneId: o }, folders[o]));
        resolve(data);
      }
      phoneReference.off("value");
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
      reject("The read failed: " + errorObject.code);
    });
  }));
}

//Create new instance
const addPhones = (phone) => {
  const referencePath = `/Phones/${phone.id}/`;
  const phoneReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    phoneReference.set({ Name: phone.Name, PhoneNumber: phone.PhoneNumber }, (error) => {
      if (error) {
        reject("Data could not be added." + error);
      } else {
        resolve(phone);
      }
    });
  }));
}

//Update existing instance
const updatePhone = (phone) => {
  var referencePath = `/Phones/${phone.id}/`;
  var phoneReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    phoneReference.update({ Name: phone.Name, PhoneNumber: phone.PhoneNumber }, (error) => {
      if (error) {
        reject("Data could not be updated." + error);
      } else {
        resolve(phone);
      }
    });
  }));
}

//Delete an instance
const deletePhone = (phone) => {
  var referencePath = `/Phones/${phone.id}/`;
  var phoneReference = firebase.database().ref(referencePath);
  return (new Promise((resolve, reject) => {
    phoneReference.remove((error) => {
      if (error) {
        reject("Data could not be deleted." + error);
      } else {
        resolve(phone);
      }
    })
  }));
}

module.exports = { getPhones, addPhones, updatePhone, deletePhone }