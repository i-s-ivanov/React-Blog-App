import './Post.css';

const Post = () => {
    return (
        <div className='post'>
            <img className='postImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet .</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit odio fugiat expedita, similique quam rerum nihil dolores? Consectetur hic totam voluptatem, perferendis culpa animi possimus nihil minus officia inventore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit odio fugiat expedita, similique quam rerum nihil dolores? Consectetur hic totam voluptatem, perferendis culpa animi possimus nihil minus officia inventore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit odio fugiat expedita, similique quam rerum nihil dolores? Consectetur hic totam voluptatem, perferendis culpa animi possimus nihil minus officia inventore.
            </p>
        </div>
    );
};

export default Post;
