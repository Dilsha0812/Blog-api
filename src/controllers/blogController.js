const blogs = require('../models/blog');
const blogService = require('../service/blogService')

const getAllblog = async (req,res)=>{
    const blogList = await blogService.fetchAllBlogs();
    res.json({data: blogList});

}


const addBlog = async(req,res)=>{
    
    const insertBlog = await blogService.createNewBlog(req.body)
    if (insertBlog){
        res.json({message:'inserted successfully',data:insertBlog});
    }
    else{
        res.json({message:'insertion failed',data:null});
    }
    
}

module.exports = {
    getAllblog,addBlog
};





