const {buildSchema}=require('graphql')
/*
module.exports=buildSchema(`
type TestData{
    text:String,
    views:Int
}
type RootQuery{

    hello:TestData
}

schema{

    query: RootQuery
}`)*/

/*Mutation*/
module.exports=buildSchema(`
type User{
    _id:String
    name:String!
    age:String!
}
input UserData{
    _id:String
    name:String!
    age:Int!
}
type Users{
    name:String!
    age:Int!
    _id:String!
}
type RootQuery{
    getUsers:[Users]!
}
input updateData{
    age:Int!
    _id:String!
}

type RootMutation{
    createUser(userInput:UserData):User!
    updateUserAge(updatingData:updateData):String!
    deleteUser(deleting_id:String!):String!
}
schema {
    query:RootQuery
    mutation: RootMutation
}
`)