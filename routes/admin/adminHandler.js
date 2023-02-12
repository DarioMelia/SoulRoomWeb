const adminGet = async (req,res,next) =>{
    try{
        res.render("admin")
    } catch(err){
        res.send("No Hello World")
    }
}

module.exports = {adminGet}