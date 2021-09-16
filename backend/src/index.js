import { ApolloServer} from "apollo-server";

//Models
import models from "../models";

//TypeDefs
import typeDefs from "./graphql/typeDefs";

//Resolvers
import resolvers from "./graphql/resolvers";

//Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
  },
});

//sincronizamos nuestros modelos con la BD para que cree las tablas
//adentro metemos el Running Apollo Server
//force true elimina las tablas si estan y las crea nuevamente
models.sequelize.sync({ force: false }).then(() => {
  apolloServer
    .listen(4000)
    .then(({ url }) => console.log(`Corriendo Apollo Server en ${url}`));
});
