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
};




const findABlog = async (req,res)=>{
    const id = req.params.blog_id;
    const fetchedBlog = await blogService.findABlogById(id);
    if(fetchedBlog){
        res.json({message: "data fetched successfully",data : fetchedBlog});
    } else{
        res.json({message: "failed to fetch data",data : null});
    }
};

const deleteBlog = async (req,res)=>{
    const deleteBlog = await blogService.deleteABlogById(req.params.id);
    if(deleteBlog){
        res.json({message: "data deleted successfully",data : deleteBlog});
    } else{
        res.json({message: "failed to delete data",data : null});
    }
};

module.exports = {
    getAllblog,addBlog,findABlog,deleteBlog
};





