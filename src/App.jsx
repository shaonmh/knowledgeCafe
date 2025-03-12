
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarsks/Bookmarks'
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmark = blog =>{
    const newBookMarks = [...bookmarks, blog]
    setBookmarks(newBookMarks)
    
    
  }

  return (
    <>
      <div className="text-amber-700 mt-8 font-medium text-5xl text-center">KNOWLEDGE <span className='font-extrabold'>Café</span></div>
      <hr class="w-full h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700"></hr>
      <div className="flex w-full m-0 justify-between gap-10">
      
        <Blogs  handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmarks  bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
