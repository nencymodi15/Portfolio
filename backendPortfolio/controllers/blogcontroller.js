const blogSchema = require('../model/blogschema');

//Create a new BlogPost

const createBlog = async (req,res)=>{
    try{
        const {title,content,author,photo,tags} = req.body;
        const newblog = new blogSchema({title,content,author,photo,tags});
        await newblog.save();

        res.status(201).json({message:"Blog Post Created Sucessfully", blog:newblog});

    }catch(error){
        res.status(500).json({message:"Error creating blog post",error});

    }
};

//get allblog according to new to old
const getAllBlogs = async(req,res)=>{
    try{
        const blogs = await blogSchema.find().sort({createdAt:-1});//sort by newest
        res.status(200).json(blogs);
    }catch(error){
        res.status(500).json({message:"Error fetching blogs",error});
    }
};

//get blog by id
const getblogByid = async (req,res) => {
    try{
        const {id} = req.params;
        const blog =await blogSchema.findById(id);

        if(!blog){
            return res.status(404).json({message:"Blog not found"});
        }
        res.status(200).json(blog);

    }catch(error){
        res.status(500).json({message:"Error fetching blog",error});
    }
};
//update blog by id
const updateBlog = async (req,res) =>{
    try{
        const {id} = req.params;
        const {title,content,author,photo,tags} = req.body;

        const updateblog = await blogSchema.findByIdAndUpdate(id,
            {title,content,author,photo,tags},{new:true,runValidator:true}
        );
        if(!updateblog){
            return res.status(404).json({message:"Blog not found"});
        }
        res.status(200).json({message:"Blogupdated sucessfully", blog: updateblog})

    }catch(error){
        res.status(500).json({message:"Error updating blog",error});
    }
};
//delete blog by id
const deleteBlog = async (req,res) => {
    try{

        const{id} =req.params;
        const deleteblog = await blogSchema.findByIdAndDelete(id);
        if(!deleteblog){
            return res.status(404).json({message:"Blog not found"});
        }
        res.status(200).json({message:"Blog deleted sucessfully"});

    }catch(error){
        res.status(500).json({message:"Error deleting blog",error});

    }
};

module.exports = {
    createBlog,
    getAllBlogs,
    getblogByid,
    updateBlog,
    deleteBlog
}