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
    <uniUX.Main pageType={'columnedApp'} appConfig={appConfig} page={appConfig.pageConfigs.home}>
      <h3>
          Welcome to UniUX
        </h3>
        <p>
          UniUX is more than just a user interface library. While conventional UI libraries provide all the components and styles you may need,
          the UniUX library gives you the ability to build apps easily and always synchronise configurations across pages.
        </p>

        <br/>

        <h3>
          How does it work?
        </h3>

        <p>
          UniUX only requires four things to work at its most basic level.
          <ul>
            <li>
              A page type
            </li>
            <li>
              An app configuration
            </li>
            <li>
              Page configurations
            </li>
            <li>
              Your pages' content
            </li>
          </ul>

          With little frontend work on your end (just the above), UniUX can put together a full, responsive and good-looking web application.
          It's easy to install and set up UniUX apps, with the Node module working similarly to other things you'd use.<br/>

          UniUX is based on React and Gatsby which gives it the ability to be dynamic and modular behind the scenes while 
        </p>

        <br/>

        <h3>
          Developer Documentation
        </h3>

        <p>
          This developer documentation is not complete (yet) and is currently only available in English. It covers how to make a UniUX
          app and set up your app's configuration for the best possible results. We're always adding to UniUX since it's a relatively new product
          and we want to make new styles and layouts of apps for you to utilise.
        </p>

        <br/>

        <h3>
          The Node module
        </h3>

        <p>
          The Node module, easily installable, gives you access to all UniUX offers, through of course a means we anticipate you'll know quite well.
          UniUX is only available for Node.js and we have no current plans to make it compatible with any other environment, since that is the best
          environment to suit.
        </p>
    </uniUX.Main>
    </body>
  }
}

export default Page
