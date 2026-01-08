const router = require('express').Router();
const User = require('../models/user.js');
const List = require('../models/list.js');
const list = require('../models/list.js');
//create 
router.post("/addTask",async(req,res) =>{
    try {
        const {title,body,id} = req.body;
        const existinguser = await User.findById(id);
        if(existinguser){
            const list=new List({
                title,body,user:existinguser._id
            });
            await list.save().then(()=>res.status(200).json({list}))
            existinguser.list.push(list._id);
            existinguser.save()
        }
    } catch (error) {
        console.log(error);
    }
})

//update
// Update
router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existinguser = await User.findOne({ email: email });
        if (existinguser) {
            const list = await List.findByIdAndUpdate(
                req.params.id,
                { title, body },  // Correctly update the fields
                { new: true }     // Option to return the updated document
            );
            if (list) {
                res.status(200).json({ message: "Task Updated", list });
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//delete
router.put("/deleteTask/:id", async (req, res) => {
    try {
        const { email } = req.body;
        const existinguser = await User.findOne({ email: email });
        if (existinguser) {
            const list = await List.findByIdAndDelete(
                req.params.id,
            ).then(()=>res.status(200).json({message: "Task Deleted"})
            );
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
//gettask
router.get("/getTask/:id", async (req, res) => {
    const list=await List.find({user : req.params.id})
    res.status(200).json({list});
})
module.exports = router;    