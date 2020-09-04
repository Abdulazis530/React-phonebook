
const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql')
const { getPhones } = require('../../services');
const { phoneType } = require('../types/phone')
const PaginationArgType = require('../types/paginationParam');
const PaginatedListType = require('../types/paginationOutput');


exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      phones: {
        type: PaginatedListType(phoneType),
        args: {
          name: { type: GraphQLString },
          phone: { type: GraphQLString },
          pagination: {
            type: PaginationArgType,
            defaultValue: { offset: 0, limit: 5 }
          },
        },
        resolve: async (root, args) => {
          const { offset, limit } = args.pagination
          const data = await getPhones(offset, limit)
          console.log(data)
          return {
            items: data.listData,
            totalData: data.totalData
          }
        }
      }
    }
  }

})
