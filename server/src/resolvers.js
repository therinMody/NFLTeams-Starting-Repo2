const resolvers = {

    Query: {

        getTeams: (_,__, {dataSources}) => {
            return dataSources.sportsAPI.getTeams();
        }
        
    }

}

module.exports = resolvers;