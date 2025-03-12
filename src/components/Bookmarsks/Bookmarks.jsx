import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-2/5 bg-slate-100 p-5 ">
            <h2 className='text-center font-semibold text-xl'>Bookmarked Blogs : {bookmarks.length}</h2>
            {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}>
                {
                    console.log(bookmark)
                }
            </Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;