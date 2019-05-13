import React from 'react';
// import _ from 'lodash';

// import safePrefix from '../utils/safePrefix';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header">
              <div className="go-back__nav is-hidden-mobile has-text-white">
                <div className="go-back__wrapper">
                  <div className="go-back">
                      <span className="arrow-left">
                      {/*<!-- css generated icon -->*/}
                      </span>
                      <a href="//arpitgoyal.com" className="back-title">Back</a>
                    </div>
                </div>
              </div>
              {/*<div className="inner">
                <div className="site-header-inside">
                  <div className="site-branding">
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') && 
                    <p className="site-logo">
                      <a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')}><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))}
                          alt="Logo" /></a>
                    </p>
                    }
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') ? 
                    <h1 className="site-title"><a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title') ? _.get(this.props, 'pageContext.site.siteMetadata.header.title') : _.get(this.props, 'pageContext.site.data.author.name')}</a></h1>
                     : 
                    <p className="site-title"><a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title') ? _.get(this.props, 'pageContext.site.siteMetadata.header.title') : _.get(this.props, 'pageContext.site.data.author.name')}</a></p>
                    }
                  </div>
                  {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav')) && <React.Fragment>
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">
                      <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Menu</span><span className="icon-close"
                          aria-hidden="true" /></button>
                      <ul className="menu">
                        {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                        <li key={item_idx} className={'menu-item ' + ((_.get(this.props, 'pageContext.url') === _.get(item, 'url')) ? ' current-menu-item' : '')}>
                          <a href={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</a>
                        </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Menu</span><span className="icon-menu"
                      aria-hidden="true" /></button>
                  </React.Fragment>}
                </div>
              </div>*/}
            </header>
        );
    }
}
