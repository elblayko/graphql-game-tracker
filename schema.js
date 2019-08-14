const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLInt
} = graphql;

var games = [
    { id: 1, title: "Halo: Combat Evolved", year: 2001 },
    { id: 2, title: "Halo 2", year: 2004 },
    { id: 3, title: "Halo 3", year: 2007 },
    { id: 4, title: "Halo Wars", year: 2009 },
    { id: 5, title: "Halo 3: ODST", year: 2009 },
    { id: 6, title: "Halo: Reach", year: 2010 },
    { id: 7, title: "Halo 4", year: 2012 },
    { id: 8, title: "Halo 5: Guardians", year: 2015 },
    { id: 9, title: "Halo Wars 2", year: 2017 },
    { id: 10, title: "Halo: Infinite", year: 2020 }
];

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        year: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        games: {
            type: new GraphQLList(GameType),
            resolve(parent, args) {
                return games;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})

