const {GraphQLInputObjectType, GraphQLInt}  = require('graphql');

const PaginationArgType = new GraphQLInputObjectType({
    name: 'PaginationArg',
    fields: {
      offset: {
        type: GraphQLInt,
        description: "Skip n rows."
      },
      limit: {
        type: GraphQLInt,
        description: "total data"
      },
    }
  })
  
  module.exports = PaginationArgType