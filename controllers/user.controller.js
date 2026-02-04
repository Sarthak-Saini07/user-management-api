import {users} from "../data/users.js"

//post method (postman)
export const createUser=(req,res)=>{
    try{
        const {name,email}=req.body;

        //validation
        if(!name || !email){
            return res.status(400).json({
                success:false,
                message:"Name and email are required"
            });
        }

        const newUser={
            id:Date.now().toString(),
            name,
            email
        };

        users.push(newUser);

        res.status(201).json({
            success:true,
            data:newUser
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

//get method (postman)
export const getUsers=(req,res)=>{
    res.status(200).json({
        success:true,
        count:users.length,
        data:users
    });
};

//put or patch method (postman)
export const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        // finding user
        const user = users.find(i => i.id.toString() === id.toString());

        //if user not found
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        //partial update
        if (name) user.name = name;
        if (email) user.email = email;

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};