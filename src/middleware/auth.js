const adminAuth = (req,res,next)=>{
    console.log("security level 1");
    const token = "xyz";
    const Auth = token==="xyz";
    if(!Auth){
        res.status(401).send("unauthorise");
    }
    else next();
};

module.exports = adminAuth;