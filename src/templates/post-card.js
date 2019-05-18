import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import _ from 'lodash';
import moment from 'moment-strftime';
import safePrefix from '../utils/safePrefix';

const PostCard = (props) => {
	const {post, data} = props;
  const fluid = _.get(data, 'file.childImageSharp.fluid');
  // console.log("props => ", props);
	// console.log("fluid => ", fluid);
	return (
  <article className="post post-card">
    <div className="post-card-inside">
      {_.get(post, 'frontmatter.thumb_img_path') && 
        (
          _.get(post, 'frontmatter.is_external')
          ?
          <a target="_blank" rel="noopener noreferrer" className="post-card-thumbnail" href={safePrefix(_.get(post, 'frontmatter.url'))}>
            <Img fluid={fluid ? fluid : {"src": "/static/4cac8be2ce5d1ce879b6320fb2765137/cf658/1-ssPaHnqjgTjkP0hwO8nGZw.jpg", "aspectRatio": 2.8426395939086295}} />
            {/*<img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />*/}
          </a>
          :
          <a className="post-card-thumbnail" href={safePrefix(_.get(post, 'url'))}>
            <Img fluid={fluid ? fluid : {"src": "/static/4cac8be2ce5d1ce879b6320fb2765137/cf658/1-ssPaHnqjgTjkP0hwO8nGZw.jpg", "aspectRatio": 2.8426395939086295}} />
            {/*<img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />*/}
          </a>
        )
      }
      <div className="post-card-content">
        <header className="post-header">
          <div className="post-meta">
            <time className="published"
            dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
          </div>
          <h2 className="post-title"><a href={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</a></h2>
        </header>
        <div className="post-excerpt">
          <p>{_.get(post, 'frontmatter.excerpt')}</p>
          <p className="read-more">
            {
              _.get(post, 'frontmatter.is_external')
              ?
              <a target="_blank" rel="noopener noreferrer" className="button inverse" href={safePrefix(_.get(post, 'frontmatter.url'))}>Read more</a>
              :
              <a className="button inverse" href={safePrefix(_.get(post, 'url'))}>Read more</a>
            }
          </p>
        </div>
      </div>
    </div>
  </article>
)
}

export default PostCard

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "1-ssPaHnqjgTjkP0hwO8nGZw.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
         src 
        }
      }
    }
  }
`
//...GatsbyImageSharpFluid