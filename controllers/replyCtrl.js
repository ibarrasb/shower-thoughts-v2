const User = require('../models/userModel');
const Reply = require('../models/replyModels');


const replyCtrl = {

getReply: async(req, res) =>{
        try {
            const posts = await Reply.find()
            res.json(posts)
    
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
},
createReply: async(req,res) => {
        try{
            const{id, posterid, name, username, post} = req.body;

            const acc = await User.findOne({username})
            
            const newPost = new Reply({
                id, posterid, name, username, post
            })
            await newPost.save()
            
            res.json({msg: "Created a post"})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
},
deleteReply: async(req, res) => {
    try {

            await Reply.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a post"})

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

}
}

module.exports = replyCtrl