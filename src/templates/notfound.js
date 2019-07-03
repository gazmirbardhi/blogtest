import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, {LayoutTwo} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Notfound extends React.Component {
    render() {
        return (
            <LayoutTwo {...this.props}>
              <main className="container is-fluid">
                <section className="section hero is-fullheight">
                  <div className="hero-body has-text-white">
                    <div className="container is-fluid">
                      <div className="columns is-vcentered">
                        <div className="column is-three-fifths no-padding content is-large has-text-centered-mobile">
                          <h1 className="title is-1 has-text-primary has-text-weight-bold">Oops..</h1>
                          <h3 className="title is-3 is-size-5-mobile has-text-primary negative-margin-top">The treasure is somewhere else!</h3>
                          {'{'}/*<p className="has-text-primary">The page you're looking for doesn't exist</p>*/{'}'}
                          <a href="/" className="button is-primary is-large">Let's go home</a>
                        </div>
                        <div className="column is-two-fifths">
                          <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
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
