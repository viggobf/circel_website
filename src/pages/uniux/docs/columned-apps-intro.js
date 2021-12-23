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
    <uniUX.Main pageType={'columnedApp'} appConfig={appConfig} page={appConfig.pageConfigs.columnedApps}>
        <h3>
          What is a Columned App?
        </h3>
        <p>
          Short answer: the page you're looking at right now.<br/><br/>

          Columned Apps comprise a top navigation bar, sidebar and 
        </p>
      
    </uniUX.Main>
    </body>
  }
}

export default Page
