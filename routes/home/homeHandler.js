const homeGet = async (req,res,next) =>{
    try{
        res.render("home")
    } catch(err){
        res.send("No Hello World", err)
    }
}

module.exports = {homeGet}