import React, { Component } from 'react';
import ArticleTile from '../components/ArticleTile';

class ArticleIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.setState({
      articles: [
        {
          id: 1,
          name: 'Article 1',
          feedUrl: 'article1.com',
          imgUrl: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'
        },
        {
          id: 2,
          name: 'Article 2',
          feedUrl: 'article2.com',
          imgUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg'
        },
        {
          id: 3,
          name: 'Article 3',
          feedUrl: 'article3.com',
          imgUrl: 'http://luisjimenez.com/wp-content/uploads/2017/05/dog-1.jpg'
        }
      ]
    })
  }

  // componentWillMount() {
  //   fetch(`api/v1/causes/${causeId}/articles`)
  // }

  render() {
    let active;
    let count = 0;
    let articles = this.state.articles.map(article => {
      if(count < 1) {
        active = 'active';
      } else {
        active = '';
      }
      count += 1;
      return (
        <ArticleTile
          key={article.id}
          id={article.id}
          name={article.name}
          feedUrl={article.feedUrl}
          imgUrl={article.imgUrl}
          active={active}
        />
      )
    })
    return (
      <div id='carouselControls' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>
          Articles List
          {articles}
        </div>
        <a className='carousel-control-prev' href='#carouselControls' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        </a>
        <a className='carousel-control-next' href='#carouselControls' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
        </a>
      </div>
    )
  }
}

export default ArticleIndexContainer;

// <ArticleShow
//   key={this.state.article.id}
//   id={this.state.article.id}
//   name={this.state.article.name}
// />
