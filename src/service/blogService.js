const blogs = require('../models/blog')

const fetchAllBlogs = async()=>{
    const blogLists = await blogs.find({},{__v:0});
    return blogLists;
}

const createNewBlog = async(bodyData)=>{
    const { title, content, author } =bodyData;
    return await blogs.create({title,content,author});
    
}

const findABlogById = async(id) =>{
    return await blogs.findById({_id:id})
}

const deleteABlogById = async(id) =>{
    return await blogs.findByIdAndDelete({_id: id})
}

module.exports = {
    fetchAllBlogs,
    createNewBlog,
    findABlogById,
    deleteABlogById
}