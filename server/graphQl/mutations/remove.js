const{GraphQLNonNull,GraphQLID}=require('graphql')
var services = require('../../services');
const { phoneType } = require('../types/phone');

exports.removeContact = {
    type: phoneType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return services.deletePhone(params);
    }
}