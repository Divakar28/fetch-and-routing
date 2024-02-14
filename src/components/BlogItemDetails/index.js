import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const UpdatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      topic: data.topic,
      avatarUrl: data.avatar_url,

      author: data.author,

      id: data.id,
    }
    this.setState({blogData: UpdatedData, isLoading: false})
  }

  getBlogList = () => {
    const {blogData, isLoading} = this.state
    const {title, avatarUrl, imageUrl, content, author} = blogData

    return (
      <div className="k">
        <div className="j">
          <img src={avatarUrl} alt={author} className="avatarSize" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="imgus" />

        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.getBlogList()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
