import * as React from 'react'
import reactDom from 'react-dom'
import * as uniUX from 'uniux'
import { Link } from 'gatsby'
import * as firebaseSetup from '../../../components/firebasesetup.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import {appConfig} from '../../../components/appConfigs/uniux/uniux-docs.js'

class Page extends React.Component{
  render(){
    return <body>
    <uniUX.Main pageType={'columnedApp'} appConfig={appConfig} page={appConfig.pageConfigs.start}>
        <h3>
          Install UniUX
        </h3>
        <p>
          UniUX can be installed and updated just like any other Node module. We're available on the NPM and Yarn package managers for you to install.
          To install, run in your project's root directory:
          <ul>
            <li>
              <code>npm install uniux</code> if using NPM, or;
            </li>
            <li>
              <code>yarn add uniux</code> if using Yarn as your package manager
            </li>
          </ul>

          Check out the package on <a href='https://www.npmjs.com/package/uniux' target='new'>NPM</a> and <a href='https://www.yarnpkg.com/package/uniux' target='new'>Yarn</a>.
        </p>

        <br/>
        <h3>
          Keep UniUX up to date
        </h3>
        <p>
          It's essential to keep your UniUX package updated. This is especially important if you're developing Circel Apps.<br/><br/>
 
          It's easy to update the package to the latest version - run <code>npm update uniux</code> or <code>yarn upgrade uniux</code>.
        </p>

        <br/>
        <h3>
          Breaking changes
        </h3>
        <p>
          The only thing that may potentially stop you from updating UniUX immediately is breaking changes. This is perfectly understandable,
          and normal, since UniUX continuously evolves and new features are added and stuff removed.<br/><br/>

          Please make sure you have checked the changelog before updating to avoid potentially breaking parts of your app. Breaking changes are rare
          for minor updates (x.x.X), mostly coming in major ones (x.X.x).
        </p>
    </uniUX.Main>
    </body>
  }
}

export default Page
