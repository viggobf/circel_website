import * as icons from '@fortawesome/free-solid-svg-icons'
import { colourPacks } from 'uniux'

var appConfig = {
    name: 'Developer Docs',
    appRootURL: 'developer',
    shortenedName: 'Dev Docs',
    pageConfigs: {
        home: {
        name: 'Welcome',
        icon: icons.faHandPaper,
        url: '/'
        },
        start: {
        name: 'Get Started',
        icon: icons.faPlay,
        url: '/start'
        }
    },
    themeColour: colourPacks.green,
}

export {appConfig}