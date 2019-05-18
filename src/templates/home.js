import React from 'react';
import { graphql } from "gatsby"
import _ from 'lodash';
import components, {Layout} from '../components/index';
import PostCard from './post-card';

export default class Home extends React.Component {
    render() {
        console.log("props => ", this.props)
        let display_posts = _.orderBy(_.get(this.props, 'pageContext.pages').filter(page => page.relativeDir === 'posts'), 'frontmatter.date', 'desc');
        const featured_posts = display_posts.filter(page => _.get(page, 'frontmatter.is_featured'))
        const non_featured_posts = display_posts.filter(page => !_.get(page, 'frontmatter.is_featured'))
        return (
            <Layout {...this.props}>
              {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                  let GetSectionComponent = components[_.get(section, 'component')];
                  return (
                    <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                  )
              })}
              <div className="post-feed">
                <div className="layout-list">
                {_.map(featured_posts, (post, post_idx) => (
                  <PostCard post={post} key={post_idx} />
                ))}
                </div>
                {_.map(non_featured_posts, (post, post_idx) => (
                  <PostCard post={post} key={post_idx} />
                ))}
              </div>
            </Layout>
        );
    }
}

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
