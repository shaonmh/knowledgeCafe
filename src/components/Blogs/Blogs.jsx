import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs ] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data)
        )
    },[])

    return (
        <div className="w-3/5"  >
            <h2 className='pb-3'>Blogs:{blogs.length}</h2>
            <div >
                {blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}></Blog>)}
            </div>
                
            
        </div>
    );
};

export default Blogs;