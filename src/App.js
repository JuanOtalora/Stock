import './App.css';
import TopNavigation from './components/view/TopNavigation';
import Info from './constants/img/info.svg'
import Back from './constants/img/stockImage.svg'
import Graph from './constants/img/graph.svg'
import Videoback from './constants/img/posible.png'


function AppRoute({ ...rest }) {
  

  // TEMPORARY
  // For some reason there is a race condition that let's us get to AppRoute
  // when for a split second user is undefined. This was causing infinite redirects
  // making it impossible to refresh the page.
  // TODO need to figure out what is causing user to be undefined for a split second upon refreshing the page
  // if (!user) {
  //   return null;
  // }

  // if (!tokenData?.access_token) {
  //   return <Redirect to="/app/signin" />;
  // }

  // if (!user?.phoneNum) {
  //   return <Redirect to="/app/onboarding/2fa" />;
  // }
  // if (!user?.onboardingComplete) {
  //   return <Redirect to="/app/onboarding/games" />;
  // }
  // return <Route {...rest} path={`/app/${rest.path}`} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavigation></TopNavigation>
      </header>
      <div style={{backgroundColor: 'rgb(243,246,128)'}}>
          <div style={{width: '100%', maxWidth: '100%', minWidth: '320px', paddingLeft: 24, paddingRight: 24, boxSizing: 'border-box'}}>
            <div className="rowHeader" >
              <div className="textHeader" >
                <div className="subTextHeader" style={{paddingTop: 50, paddingBottom: 50}}>
                  <div style={{marginBottom: 18, whiteSpace: 'pre-line'}}>
                    <h1 className="titleH1">Investing for Everyone</h1>
                  </div>
                  <div style={{marginTop:24}}>
                    <span className="descriptionP">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations and fees apply.</span>
                  </div>
                  <div style={{marginTop: 32}}>
                    <div style={{display:'flex', flexDirection: 'column-reverse', marginTop: '-16px', marginBottom: '-16px'}}>
                      <div className='signUp' style={{width: '100%', marginBottom: '16px', marginTop: '16px'}}>
                        <a className='button' style={{alignItems:'center', display:'inline-flex', justifyContent:'center', position:'static', textAlign:'center', whiteSpace:'nowrap', height: 48, minWidth: 144, borderRadius: 24, cursor: 'pointer', backgroundColor: 'rgb(25, 25, 30)'}}>
                          <span style={{position: 'static', visibility:'inherit'}}>
                            <span style={{fontSize: 18, fontWeight: 700, letterSpacing: '-0.25px', lineHeight: '28px', textDecoration: 'unset', color: 'white'}}>
                              Sign Up
                            </span>
                          </span>
                        </a>
                      </div>
                      <div style={{marginTop: 16, marginBottom: 16}}>
                        <button type='button' style={{}} className='buttonConditions'>
                          <span style={{display:'flex', alignItems:'center'}}>
                            <span style={{marginRight: 12}}>
                              <img src={Info} height='28'></img>
                            </span>
                            <span style={{paddingTop:2}}>
                              <span className="commissions">Commissions & Free Stock Disclosures</span>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="imageBack">
                  <div className="backupBack">
                    <img src={Back} className="background"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center', height: 100, borderTopColor: 'black', border: '1px', borderStyle:'solid', backgroundColor: 'white', paddingRight: 10, paddingLeft: 10}}>
          <span style={{fontWeight: 'bold', textAlign: 'center'}}>See our fee schedule to learn more about cost</span>
        </div>
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', backgroundColor:'white', paddingTop: 40}}>
          <div className='leftGridImg' style={{display: 'flex'}}>
            <img src={Graph} style={{maxWidth: '100%',height: '100%',width: '100%',objectFit: 'contain'}}/>
          </div>
          <div className='rightGrid' style={{display:'flex', width: 'calc(50%-18px)'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
              <h2 className="h2Title">Introducing IPO Access</h2>
              <span className="spanIpo">Get in at the IPO price. Now, you can become one of the first public investors in upcoming IPOs.</span>
              <div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
