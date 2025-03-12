
const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-slate-200 my-4 p-4 rounded-xl">
            <h2>{bookmark.title}</h2>
        </div>
    );
};

export default Bookmark;