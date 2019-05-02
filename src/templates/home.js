import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Home extends React.Component {
    render() {
        let display_posts = _.orderBy(_.get(this.props, 'pageContext.pages').filter(page => page.relativeDir === 'posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              {/*_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                  let GetSectionComponent = components[_.get(section, 'component')];
                  return (
                    <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                  )
              })*/}
              <div className="post-feed">
                {_.map(display_posts, (post, post_idx) => (
                <article key={post_idx} className="post post-card">
                  <div className="post-card-inside">
                    {_.get(post, 'frontmatter.thumb_img_path') && 
                    <a className="post-card-thumbnail" href={safePrefix(_.get(post, 'url'))}>
                      <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                    </a>
                    }
                    <div className="post-card-content">
                      <header className="post-header">
                        <div className="post-meta">
                          <time className="published"
                          datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                        </div>
                        <h2 className="post-title"><a href={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</a></h2>
                      </header>
                      <div className="post-excerpt">
                        <p>{_.get(post, 'frontmatter.excerpt')}</p>
                        <p className="read-more">
                          <a className="button inverse" href={safePrefix(_.get(post, 'url'))}>Read more</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                ))}
              </div>
            </Layout>
        );
    }
}
