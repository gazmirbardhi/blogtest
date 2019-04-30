import React from 'react';
import _ from 'lodash';

import markdownify from '../utils/markdownify';
import safePrefix from '../utils/safePrefix';

export default class Intro extends React.Component {
    render() {
        return (
            <div id={_.get(this.props, 'section.section_id')} className="intro">
              <div className="intro-text">
                {markdownify(_.get(this.props, 'section.content'))}
              </div>
              {_.get(this.props, 'section.actions') && 
              <p className="intro-cta">
                {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                <a key={action_idx} href={safePrefix(_.get(action, 'url'))} className="button">{_.get(action, 'label')}</a>
                ))}
              </p>
              }
            </div>
        );
    }
}
