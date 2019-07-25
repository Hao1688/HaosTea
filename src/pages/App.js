import React, {Component} from 'react';
import styles from '../scss/app.module.scss';
import {Route} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'
import HomePage from './homepage'
import Product from './product'
import News from './news'
import StorePage from './store'
import AboutPage from './about'
import Contact from './contact'
import TeaDetail from '../components/productDetail'

class App extends Component {
  
  render(){
    return(
      <div className={styles.wrap}> {/*查看一開始視窗寬度*/}
        <Header />
        <section className={styles.container}>
          <Route path="/" exact component={HomePage}/>
          {/* <Route path="/black_tea" exact component={Product}/> */}
          <Route path="/black_tea" exact component={Product}/>
          <Route path="/green_tea" exact component={Product}/>
          <Route path="/oolong_tea" exact component={Product}/>
          <Route path="/black_tea/:type" exact component={TeaDetail}/>
          <Route path="/green_tea/:type" exact component={TeaDetail}/>
          <Route path="/oolong_tea/:type" exact component={TeaDetail}/>
          <Route path="/news" exact component={News}/>
          <Route path="/store" exact component={StorePage}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route path="/contact" exact component={Contact}/>
        </section>
        <Footer />
      </div>
    )
  }
}

export default App;
