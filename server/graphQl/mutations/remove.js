const{GraphQLNonNull,GraphQLString}=require('graphql')
var services = require('../../services');
const { phoneType } = require('../types/phone');

exports.remove = {
    type: phoneType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        return services.deleteUser(params);
    }
}