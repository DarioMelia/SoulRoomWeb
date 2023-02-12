const storeGet = async (req,res,next) =>{
    try{
        res.render("store")
    } catch(err){
        res.send("No Hello World", err)
    }
}

module.exports = {storeGet}