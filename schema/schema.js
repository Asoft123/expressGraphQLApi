const graphql = require('graphql')
const _ = require('lodash')


const { 
 GraphQLObjectType,
 GraphQLString,
 GraphQLInt,
 GraphQLSchema
} = graphql;

const users = [
    {id:"1", firstName:"John", age: 23},
    {id:"2", firstName:"Peper", age: 27}
]
const UserType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id: {type: GraphQLString},
        firstName:{type:GraphQLString} ,
        age: {type:GraphQLInt}  ,
    }
});

const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        user: {
            type: UserType, 
            args: {id:{type: GraphQLString} },
             resolve(parentValue, args) {
                return _.find(users, {id: args.id})
            },

        },

    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})