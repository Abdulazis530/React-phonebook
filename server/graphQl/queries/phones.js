
const { GraphQLObjectType, GraphQLList } = require('graphql')
const services = require('../../services');
const { phoneType } = require('../types/phone')

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      phones: {
        type: new GraphQLList(phoneType),
        resolve: services.getPhones
      }
    }
  }
});