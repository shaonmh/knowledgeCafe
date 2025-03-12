import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {

    const {title, cover, author_img, author, posted_date, reading_time } = blog;
    return (
        <div className='pb-20'>
            <img className="w-full" src={cover} alt={title} />
            <h1 className="text-3xl font-bold text-gray-700 mt-10"><a href="#">{title}</a></h1>
            <div className="flex h-20 justify-between align-middle py-6 text-slate-400">
                    <div className=" align-middle flex">
                        <img className="h-full mr-3" src={author_img} alt={author} />
                        <h4 className=" my-auto">{author}</h4>
                    
                    </div>
                    <div className="flex align-middle h-full">
                        
                        <p className="my-auto">{posted_date}</p>
                        
                    </div>
                    <div className="right flex">
                         <p className="my-auto mr-2">Reading Time: {reading_time} minutes</p>    
                         <button onClick={()=>handleAddToBookmark(blog)} className='text-2xl text-gray-300 cursor-pointer '><FaBookmark /></button>
                    </div>
                
                

            </div>
        </div>
    );
};

export default Blog;