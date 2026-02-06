export const validateCreateUserDTO = (req,res,next)=>{
    console.log("using dto to check data validation")
    
    const {name,email}=req.body;

        //validation
        if(!name || !email){
            return res.status(400).json({
                success:false,
                message:"Name and email are required"
            });
        }
        next();

};