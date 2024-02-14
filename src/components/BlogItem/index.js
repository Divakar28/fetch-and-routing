import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blgItem} = props
  const {id, topic, title, avatarUrl, imageUrl, author} = blgItem
  return (
    <Link to={`/Blogs/${id}`}>
      <div className="top">
        <img src={imageUrl} alt={title} className="imgSize" />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="bottom">
            <img src={avatarUrl} alt={author} className="avatarSize" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
