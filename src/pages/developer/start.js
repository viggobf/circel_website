import * as React from 'react'
import reactDom from 'react-dom'
import * as uniUX from 'uniux'
import { Link } from 'gatsby'
import * as firebaseSetup from '../../components/firebasesetup.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import {appConfig} from '../../components/appConfigs/settings.js'

class Page extends React.Component{
  render(){
    return <body>
    <uniUX.Main pageType={'app'} content={
      <uniUX.ColumnedApp appConfig={appConfig} page={appConfig.pageConfigs.start}
      pageOptionButtons={[]} pageContent={
        <span>
        <h3>
          Install UniUX (unfinished).
        </h3>
        <p>
          UniUX can be installed and updated just like any other Node module. Simply run <strong>npm install uniux</strong> to add it to your project.
        </p>
        
        </span>
      }/>
    }>
    </uniUX.Main>
    </body>
  }
}

export default Page
