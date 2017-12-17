import React from 'react'
import fetch from "isomorphic-fetch"

import Layout from "../components/Layout"
import Pager from "../components/Pager"
import Stories from '../components/Stories'

const getPage = async (page) => {
  const url = `https://api.hackerwebapp.com/news?page=${page}`
  const req = await fetch(url)
  const stories = await req.json()
  return stories
}

export default class extends React.Component {
  state = {
    page: this.props.page,
    stories: this.props.stories
  }

  static async getInitialProps() {
    const page = 1
    const stories = await getPage(page)
    return { stories, page }
  }

  handlePage = async page => {
    const newStories = await getPage(page)
    this.setState({
      stories: newStories,
      page
    })
  }


  render() {
    return (
      <Layout title="Latest News" name="home">
        <Pager page={this.state.page} onClick={this.handlePage} />
        <Stories stories={this.state.stories} />
        <Pager page={this.state.page} onClick={this.handlePage} />
      </Layout>
    )
  }
}
