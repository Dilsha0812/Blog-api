const blogs = require('../models/blog')

const fetchAllBlogs = async()=>{
    const blogLists = await blogs.find({},{__v:0});
    return blogLists;
}

const createNewBlog = async(bodyData)=>{
    const { title, content, author } =bodyData;
    return await blogs.create({title,content,author});
    
}



module.exports = {
    fetchAllBlogs,
    createNewBlog
}