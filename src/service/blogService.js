const blogs = require('../models/blog')

const fetchAllBlogs = async()=>{
    const blogLists = await blogs.find({},{__v:1});
    return blogLists;
}

const createNewBlog = async(bodyData)=>{
    const { title, content, author } =bodyData;
    return await blogs.create({title,content,author});
    
}

const findABlogById = async(id) =>{
    return await blogs.findById({_id:id})
}

module.exports = {
    fetchAllBlogs,
    createNewBlog,
    findABlogById
}