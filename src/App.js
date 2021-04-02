import SimpleSlider from './components/slider/SimpleSlider'
import './default.sass'
import BlogList from './parts/BlogList/BlogList'
import {Route,Switch} from 'react-router-dom'
import Layout from './parts/Layout/Layout'
import Page from './components/postPage/Page'
import Add from './parts/Add/Add'

function App() {
  
  return (
    <div className="wrapper">
        <Layout>
          <Switch>
            <Route exact path="/" component={SimpleSlider}/>
            <Route path="/blog-editor" render={()=>{
              return <Add/>
            }}/>
            <Route exact path="/blog-editor/:id" component={Page}/>
            <Route path="/blog-list/:id" component={Page}/>
            <Route path="/blog-list" component={BlogList}/>
          </Switch>
    
        </Layout>
    </div>
  );
}


export default App;
