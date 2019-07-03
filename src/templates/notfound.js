import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, {LayoutTwo} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Notfound extends React.Component {
    render() {
        return (
            <LayoutTwo {...this.props}>
              <main class="container is-fluid">
                <section class="section hero is-fullheight">
                  <div class="hero-body has-text-white">
                    <div class="container is-fluid">
                      <div class="columns is-vcentered">
                        <div class="column is-three-fifths no-padding content is-large has-text-centered-mobile">
                          <h1 class="title is-1 has-text-primary has-text-weight-bold">Oops..</h1>
                          <h3 class="title is-3 is-size-5-mobile has-text-primary negative-margin-top">The treasure is somewhere else!</h3>
                          {/*<p class="has-text-primary">The page you're looking for doesn't exist</p>*/}
                          <a href="/" class="button is-primary is-large">Let's go home</a>
                        </div>
                        <div class="column is-two-fifths">
                          <img src="../images/pirate.png"/>
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
