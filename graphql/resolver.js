const {UserSchema}=require("../models/UserSchema")
module.exports={
    createUser:async function ({userInput},req){
        const user=new UserSchema({
            name:userInput.name,
            age:userInput.age
        })

        console.log(user)

        const userSaved=await user.save();
        console.log("Enterd")
        return {...userSaved._doc,_id:userSaved._id+""}
    },
    getUsers:async function(){
        const result = await UserSchema.find().select('name  age _id')
        console.log(result);
        return result
    },
    updateUserAge:async function({updatingData},req){
        let user=await UserSchema.findById(updatingData._id)
        user.age=updatingData.age
        let result=await user.save()
        return result+""
    },
    deleteUser:async function({deleting_id},req){
        let result =await UserSchema.findOneAndRemove({_id:deleting_id})
        console.log(result)
    
        return (result)
    }
    
}