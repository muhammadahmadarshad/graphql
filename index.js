const graphqlHttp=require('express-graphql')
const graphqlSchema=require('./graphql/schema')
const graphqlResolver=require('./graphql/resolver')
const app=require('express')()
const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost/graphqlData",{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log("Connected")
})


app.use('/graphql',graphqlHttp({
    schema:graphqlSchema,
    rootValue:graphqlResolver,
    graphiql:true
}))


app.listen(8080,()=>{
    console.log('server listening at 8080')
})