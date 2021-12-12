import * as React from 'react'
import reactDom from 'react-dom'
import * as uniUX from 'uniux'
import { Link } from 'gatsby'
import * as firebaseSetup from '../../components/firebasesetup.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import {appConfig} from './config.js'

class Page extends React.Component{
  render(){
    return <body>
    <uniUX.Main pageType={'app'} content={
      <uniUX.ColumnedApp appConfig={appConfig} page={appConfig.pageConfigs.home}
      pageOptionButtons={[]} pageContent={
        <span>
        <h4>
          Welcome to UniUX
        </h4>
        <p>
          UniUX is more than just a user interface library. While conventional UI libraries provide all the components and styles you may need,
          the UniUX library gives you the ability to build apps easily and always synchronise configurations across pages.
        </p>

        <br/>

        <h4>
          How does it work?
        </h4>

        <p>
          UniUX only requires three things to work at its most basic level.
          <ul>
            <li>
              An app type
            </li>
            <li>
              An app configuration
            </li>
            <li>
              A page configuration
            </li>
            <li>
              Your pages' content!
            </li>
          </ul>

          With little frontend work on your end (just the above), UniUX can put together a full, responsive and good-looking web application.
          It's easy to install and set up UniUX apps, with the Node module working similarly to other things you'd use.<br/>

          UniUX is based on React and Gatsby which gives it the ability to be dynamic and modular behind the scenes while 
        </p>

        <br/>

        <h4>
          Developer Documentation
        </h4>

        <p>
          This developer documentation is not complete (yet) and is currently only available in English. It covers how to make a UniUX
          app and set up your app's configuration for the best possible results. We're always adding to UniUX since it's a relatively new product
          and we want to make new styles and layouts of apps for you to utilise.
        </p>

        <br/>

        <h4>
          The Node module
        </h4>

        <p>
          The Node module, easily installable, gives you access to all UniUX offers, through of course a means we anticipate you'll know quite well.
          UniUX is only available for Node.js and we have no current plans to make it compatible with any other environment, since that is the best
          environment to suit.
        </p>
        
        </span>
      }/>
    }>
    </uniUX.Main>
    </body>
  }
}

export default Page
