

const{GraphQLNonNull,GraphQLString}=require('graphql')
const { phoneType } = require('../types/phone');
const services = require('../../services');
exports.updateContact = {
  type: phoneType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    Name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    PhoneNumber: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return services.updatePhone(params)
  }
}