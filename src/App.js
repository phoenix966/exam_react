import SimpleSlider from './components/slider/SimpleSlider'
import './default.sass'
import BlogList from './parts/BlogList/BlogList'
import {Route,Switch} from 'react-router-dom'
import Layout from './parts/Layout/Layout'
import Editor from './parts/Editor/Editor'

function App() {
  
  return (
    <div className="wrapper">
        <Layout>
            {/* <SimpleSlider/> */}
            {/* <div className="empty__block">
                
            </div> */}
            {/* <Route path="/" render={()=>{
              return <Header/>
            }}/> */}
          <Switch>
            <Route exact path="/" component={SimpleSlider}/>
            <Route path="/blog-list" component={BlogList}/>
            <Route path="/blog-editor" render={()=>{
              return <Editor/>
            }}/>
          </Switch>
    
        </Layout>
    </div>
  );
}


export default App;
