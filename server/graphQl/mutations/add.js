const{GraphQLNonNull,GraphQLString}=require('graphql')
const { phoneType } = require('../types/phone');
var services = require('../../services');

exports.addContact = {
    type:phoneType,
    args: {
        Name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        PhoneNumber: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return services.addPhones(params);
    }
}


// LITLE BIT ENLIGHTMENT
// args is inputs params through the queries input 1:id,2:Name,3:PhoneNumber


//what is params??
//well if you ctrl+click through the addPhones function, vscode will redirect you into the its source , 

//this is from service

// const addPhones = (phone) => {
//     const referencePath = `/Phones/${phone.id}/`;
//     const phoneReference = firebase.database().ref(referencePath);
//     return (new Promise((resolve, reject) => {
//       phoneReference.set({ Name: phone.Name, PhoneNumber: phone.PhoneNumber }, (error) => {
//         if (error) {
//           reject("Data could not be added." + error);
//         } else {
//           resolve(phone);
//         }
//       });
//     }));
//   }

//you can see addPhones accept one parameter which is an object, so we can make conclucion that params (line 19) is an object
//in this case the params has 3 property those are id,Name,PhoneNumber that coresponding to args. 