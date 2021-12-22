import * as React from "react"
import { Link } from "gatsby"
import * as uniUX from 'uniux'


const Page = () => {
    return (
        <body>
            <uniUX.Main pageType={'website'} pageName={'Design'} content={
                <div>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <h1 style={uniUX.welcomeHeadingStyles}><span style={{color: 'rgb(109, 109, 109)'}}></span><br/><span style={{fontSize: '9vw', color: 'var(--red)'}}>Beauty meets Power</span></h1>
                    <p className={uniUX.styles.minorText}>Meet the team behind UniUX.</p><br/><br/>

                    <br/><br/><br/><br/>
                    <h1 className={uniUX.styles.bigPageHeader} style={{ textAlign: 'left' }}><span style={{ color: 'rgb(233, 233, 233)' }}>Who are we?</span><br />
                        <span style={{ fontSize: '6vw' }}>Powerful. Beautiful. Unified.</span>
                    </h1>
                    <p className={uniUX.styles.minorText}>
                       Our team is devoted to your experience whilst using UniUX, and put security first. Your safety whilst using it is in the best hands.
                    </p><br/><br/>

                    <span className={uniUX.styles.pageTileRow}>
                        <uniUX.SmallCard name='Powerful' styles={{background: 'linear-gradient(5deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 70%)'}} content={<span>
                        <p className={uniUX.styles.minorText}>
                        Viggo B-F is our CEO, and the primary developer of UniUX. He has expreence in javascript, css and HTML.<br/><br/>
                        Viggo is CEO.<br/><br/>
                        Placeholder text
                        </p>
                        </span>}/>

                        <uniUX.SmallCard name='Beautiful' styles={{background: 'linear-gradient(5deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 70%)'}} content={<span>
                        <p className={uniUX.styles.minorText}>
                       Hannah please put some stuff here about you.<br/><br/>
                        Placeholder text
                        </p>
                        </span>}/>
                        
                        <uniUX.SmallCard name='Unified' styles={{background: 'linear-gradient(5deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 70%)'}} content={<span>
                        <p className={uniUX.styles.minorText}>
                        Kingerous same for u (or DM me)
                        of different UniUX apps and their pages.<br/><br/>
                        This helps the user to learn quickly, and helps Circel easily roll out
                        new features to generic parts of all apps with minimal disruption.
                        </p>
                        </span>}/>
                    </span>
                </div>
            }>
            </uniUX.Main>
        </body>
    )
}

export default Page
