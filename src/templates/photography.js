import React from 'react';
import _ from 'lodash';
import htmlToReact from '../utils/htmlToReact';

import {LayoutThree} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Page extends React.Component {
    render() {
        return (
            <LayoutThree {...this.props}>
              <article className="post page post-full">
                <header className="post-header">
                  <h1 className="post-title has-text-centered">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                  </div>
                  }
                </header>
                {_.get(this.props, 'pageContext.frontmatter.img_path') && 
                <div className="post-thumbnail">
                  <img className="thumbnail" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                </div>
                }
                <div className="post-content">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
                <div className="columns bandw_gallery">
                  <div className="column pr-6">
                    <h2 className="pt-6">My trials on B&W Photography:</h2>
                    <p>We have to admit there is something exceptionally aesthetically pleasing in a well-composed black and white imagery where everything is stripped down to the core – light, contrast, textures, even emotions.</p>
                    <p><i>There is definitely something elemental in black and white, which eliminates so many of the potential distractions that color is all about. Black and white can reduce a scene to something more easily and quickly absorbed. It retains a kind of purity which we respond to without so much study</i>, claims David Burnett, a legendary world-traveling photojournalist.</p>
                  </div>
                  <div className="column">
                    <div className="grid-container">
                      {
                        _.map( _.get(this.props, 'pageContext.frontmatter.bandw_gallery'), (src) => {
                          return (
                            <figure className="grid-card">
                              <img src={safePrefix(src)} alt={safePrefix(src)} />
                            </figure>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className="columns coloured_gallery">
                  <div className="column pr-6">
                    <h2 className="pt-6">Colored Photography:</h2>
                    <p>When photographing the world around us, the property of color is likely something most people tend to take for granted. We expect our cameras to portray the visible light spectrum accurately. However, in a world so engrossed with color, we sometimes forget how long it took to get to this point in time and how many photographers and scientists viewed the concept as a pipe dream.</p>
                    <p>When photography was invented in 1839, it was a black-and-white medium, and it remained that way for almost one hundred years.</p>
                    <p></p>
                  </div>
                  <div className="column">
                    <div className="grid-container">
                      {
                        _.map( _.get(this.props, 'pageContext.frontmatter.coloured_gallery'), (src) => {
                          return (
                            <figure className="grid-card">
                              <img src={safePrefix(src)} alt={safePrefix(src)} />
                            </figure>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </article>
            </LayoutThree>
        );
    }
}
