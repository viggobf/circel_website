import * as icons from '@fortawesome/free-solid-svg-icons'
import { colourPacks } from 'uniux'

var appConfig = {
    name: 'UniUX Developer Docs',
    rootURL: 'uniux/docs',
    shortenedName: 'UniUX Docs',
    loginRequired: false,
    overrideCBPBarring: true,
    firebase: {
        enable: true,
        config: {
            apiKey: "AIzaSyDGFdDCD1ZwvOzbvtWNxseRpSfOOz5dAro",
            authDomain: "circel-app.firebaseapp.com",
            projectId: "circel-app",
            storageBucket: "circel-app.appspot.com",
            messagingSenderId: "121186697586",
            appId: "1:121186697586:web:93874da3a21c182b219deb",
            measurementId: "G-72PCDLGBEL"
        }
    },
    sections: [
        'Getting Started', 'Columned Apps'
    ],
    pageConfigs: {
        home: {
            name: 'Welcome',
            icon: icons.faHandPaper,
            url: '/'
        },
        start: {
            name: 'Installation',
            icon: icons.faDownload,
            url: '/install',
            section: 'Getting Started'
        },
        columnedApps: {
            name: 'Introduction',
            icon: icons.faColumns,
            url: '/columned-apps-intro',
            section: 'Columned Apps'
        },
        configure: {
            name: 'Conf',
            icon: icons.faColumns,
            url: '/columned-apps',
            section: 'Columned Apps'
        }
    },
    themeColour: colourPacks.green,
}

export { appConfig }