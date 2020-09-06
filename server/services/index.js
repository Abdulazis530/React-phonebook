const firebase = require("firebase");

//load existing instance
const getPhones = (offset, limit) => {

  const phoneReference = firebase.database().ref("/Phones/");

  return (new Promise((resolve, reject) => {
    phoneReference.on("value", function (snapshot) {
      const folders = snapshot.val();

      if (folders === null) {
        resolve([]);
      } else {

        const rows = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]))
        const totalData = rows.length
        const listData = rows.splice(offset, limit);

        resolve({ totalData, listData });
      }
      phoneReference.off("value");
    }, (errorObject) => {

      console.log("The read failed: " + errorObject.code);
      reject("The read failed: " + errorObject.code);

    });
  }));
}

//search existing instance
const searchPhones = (name, phone, offset, limit) => {

  const regName = new RegExp(name, 'ig')
  const regPhone = new RegExp(phone, 'g')
  const phoneReference = firebase.database().ref("/Phones/");

  return (new Promise((resolve, reject) => {

    phoneReference.on("value", function (snapshot) {
      const folders = snapshot.val();

      if (folders === null) {
        resolve([]);
      } else {

        const rows = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o])).filter(item => {

          if (name && phone) {
            return item.Name.match(regName) && item.PhoneNumber.match(regPhone)
          }else if(name) {
            return item.Name.match(regName)
          }else if(phone) { 
            return item.PhoneNumber.match(regPhone)
          }else{
            
          return false
            
          } 
        })

        const dataLength = rows.length
        const listData = rows.splice(offset, limit)

        resolve({ listData, dataLength });
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

  const referencePath = `/Phones/${phone.id}/`;
  const phoneReference = firebase.database().ref(referencePath);

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

  const referencePath = `/Phones/${phone.id}/`;
  const phoneReference = firebase.database().ref(referencePath);
  
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

module.exports = { getPhones, addPhones, updatePhone, deletePhone, searchPhones }