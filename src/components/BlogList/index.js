import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogListData: [], isLoading: true}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const UpdatedData = data.map(each => ({
      id: each.id,
      topic: each.topic,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
    }))
    this.setState({blogListData: UpdatedData, isLoading: false})
  }

  render() {
    const {blogListData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogListData.map(each => <BlogItem key={each.id} blgItem={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
