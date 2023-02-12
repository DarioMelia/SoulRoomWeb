const homeGet = async (req,res,next) =>{
    try{
        res.send("Hello World")
    } catch(err){
        res.send("No Hello World", err)
    }
}

module.exports = {homeGet}