import SimpleSlider from './components/slider/SimpleSlider'
import './default.sass'
// import {Route,Switch} from 'react-router-dom'
// import Header from './parts/Header/Header';
import Layout from './parts/Layout/Layout'

function App() {
  
  return (
    <div className="wrapper">
        <Layout>
            <SimpleSlider/>
            {/* <div className="empty__block">
                
            </div> */}
            {/* <Route path="/" render={()=>{
              return <Header/>
            }}/> */}
  
            
        </Layout>
    </div>
  );
}


export default App;
