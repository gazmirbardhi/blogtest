import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, {LayoutTwo} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Notfound extends React.Component {
    render() {
        return (
            <LayoutTwo {...this.props}>
              <main className="image-container">
                <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.illustration_image'))} alt="Illustration" />
                <section className="section hero is-fullheight">
                  <div className="hero-body has-text-white">
                    <div className="container is-fluid">
                      <div className="columns">
                        <div className="column is-one-quarters no-padding" />
                        <div className="column is-three-quarters">
                          <section className="section">
                            <h1 className="title has-text-white">Arpit Goyal</h1>
                            <h2 className="subtitle is-size-4 has-text-white">
                              Product Manager | Engineer with an eye for design
                            </h2>
                          </section>
                          <section className="section is-paddingless-vertical">
                            <div className="tile is-ancestor">
                              <div className="tile is-horizontal is-parent">
                                <a
                                  href="/work"
                                  className="tile is-child box things-i-do"
                                >
                                  <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.build_image'))} alt="Build Products" />
                                  <p className="title">Build</p>
                                  <p>
                                    I build products.<br />Code &amp; design.
                                  </p>
                                </a>
                              </div>
                              <div className="tile is-horizontal is-parent">
                                <a
                                  href="//blog.arpitgoyal.com"
                                  className="tile is-child box things-i-do"
                                >
                                  <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.blog_image'))} alt="Blogging" />
                                  <p className="title">Blog</p>
                                  <p>
                                    I write, and<br />share my opinions
                                  </p>
                                </a>
                              </div>
                              <div className="tile is-horizontal is-parent is-hidden-mobile">
                                <div className="tile is-child box things-i-do coming-soon">
                                  <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.everything_else_image'))} alt="Everything else" />
                                  <p className="title three" />
                                  <p>
                                    Travelling, Cycling,<br />everything else
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <a
                                href="/resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="is-link negative-margin-top has-text-white level is-flex-mobile level-left is-inline-flex"
                              >
                                <span className="c">look at my résumé here</span>
                                {/*<svg
                                  className="i"
                                  height="12px"
                                  id="Capa_1"
                                  style={{ enableBackground: "new 0 0 80 80" }}
                                  version="1.1"
                                  viewBox="0 0 80 80"
                                  width="12px"
                                  xmlSpace="preserve"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <g>
                                    <path
                                      d="M29.298,63.471l-4.048,4.02c-3.509,3.478-9.216,3.481-12.723,0c-1.686-1.673-2.612-3.895-2.612-6.257   s0.927-4.585,2.611-6.258l14.9-14.783c3.088-3.062,8.897-7.571,13.131-3.372c1.943,1.93,5.081,1.917,7.01-0.025   c1.93-1.942,1.918-5.081-0.025-7.009c-7.197-7.142-17.834-5.822-27.098,3.37L5.543,47.941C1.968,51.49,0,56.21,0,61.234   s1.968,9.743,5.544,13.292C9.223,78.176,14.054,80,18.887,80c4.834,0,9.667-1.824,13.348-5.476l4.051-4.021   c1.942-1.928,1.953-5.066,0.023-7.009C34.382,61.553,31.241,61.542,29.298,63.471z M74.454,6.044   c-7.73-7.67-18.538-8.086-25.694-0.986l-5.046,5.009c-1.943,1.929-1.955,5.066-0.025,7.009c1.93,1.943,5.068,1.954,7.011,0.025   l5.044-5.006c3.707-3.681,8.561-2.155,11.727,0.986c1.688,1.673,2.615,3.896,2.615,6.258c0,2.363-0.928,4.586-2.613,6.259   l-15.897,15.77c-7.269,7.212-10.679,3.827-12.134,2.383c-1.943-1.929-5.08-1.917-7.01,0.025c-1.93,1.942-1.918,5.081,0.025,7.009   c3.337,3.312,7.146,4.954,11.139,4.954c4.889,0,10.053-2.462,14.963-7.337l15.897-15.77C78.03,29.083,80,24.362,80,19.338   C80,14.316,78.03,9.595,74.454,6.044z"
                                      fill="#ffffff"
                                    />
                                  </g>
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                  <g />
                                </svg>*/}
                              </a>
                            </div>
                          </section>
                          <section className="section social">
                            <div className="level">
                              <a
                                href="https://medium.com/@arpit_goyal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="is-link  negative-margin-top has-text-white level is-flex-mobile is-inline-flex level-left"
                              >
                                <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.medium_icon'))} alt="medium" />
                                <span className="c">
                                  I've written some articles on Medium
                                </span>
                              </a>
                            </div>
                            <div className="level">
                              <a
                                href="https://twitter.com/_arpitgoyal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="is-link  negative-margin-top has-text-white level is-flex-mobile is-inline-flex level-left"
                              >
                                <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.twitter_icon'))} alt="twitter" />
                                <span className="c">I tweet, sometimes</span>
                              </a>
                            </div>
                            <div className="level">
                              <a
                                href="https://www.quora.com/profile/Arpit-Goyal-14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="is-link  negative-margin-top has-text-white is-flex-mobile is-inline-flex level level-left"
                              >
                                <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.quora_icon'))} alt="quora" />
                                <span className="c">Some answers on Quora</span>
                              </a>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </LayoutTwo>
        );
    }
}
