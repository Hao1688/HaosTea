import React, {Component} from 'react';
import styles from './scss/header.module.scss';
import {Link,withRouter} from 'react-router-dom';
// const rdom = require('react-dom'); 
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
          hamburger:false,
          itemTea:false,
          fontColor:'',
          scrollY:false
        }
      }
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll) //监听滚动
        window.addEventListener('resize', this.handleResize)  //監聽視窗寬度(拉動)
        
        const windowWidth = window.screen.availWidth  //螢幕可用工作區寬度  
        windowWidth > 1200 ? this.setState({hamburger:true}) : this.setState({hamburger:false});
      }
      componentWillUnmount() { //一定要最后移除監聽器，以防多個组件之间導致this的指向紊亂
        window.removeEventListener('scroll', this.handleScroll) 
        window.removeEventListener('resize', this.handleResize)
      }
      handleScroll = (e) => {
        const scrollHeight = e.srcElement.scrollingElement.scrollHeight;
        const scrollTop = e.srcElement.scrollingElement.scrollTop;
        scrollTop !== 0 ? this.setState({scrollY:true}) : this.setState({scrollY:false});
        // console.log(scrollTop)
        // e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
        // e.srcElement.scrollingElement.scrollHeight为整个文档高度
      }

      handleResize = (e) => {
        const computerWidth = e.target.innerWidth;
        computerWidth > 1200 ? this.setState({hamburger:true}) : this.setState({hamburger:false});
      }
      hamburger = () =>{
        this.setState({
          hamburger:!this.state.hamburger
        })
      }
      showTea = () =>{
        this.setState({
          itemTea:!this.state.itemTea,
          itemNews:false
        })
      }
      coloseHB = () =>{
        const windowWidth = window.screen.availWidth
        this.setState({
          hamburger:windowWidth < 1200 ? false : true
        })
      }
      closeItemList = (e) =>{
        const windowWidth = window.screen.availWidth
        const match = this.props
        // console.log(match.location.pathname)
        this.setState({
          pageLink:match.location.pathname,
          itemTea:false,
          hamburger:windowWidth < 1200 ? false : true //隱藏Navbar
        })
      }
      render(){
        const {hamburger , itemTea , scrollY} = this.state
        const {location} = this.props
        return (
            <header ref={this.saveRef} className={scrollY ? 'header scroll_header' : 'header'}> {/*查看一開始視窗寬度*/}
              <div className={styles.logo} onClick={this.closeItemList}>
                <Link to="/"><img src={require("../assets/icons/logo.png")} alt="logo"/></Link>
              </div>
                <div className={styles.hamburger} onClick={this.hamburger}></div>
              {hamburger === false ? '' :
                <div className={styles.navbar}>
                  <ul className={styles.nav_title}>
                    <li className={styles.nav_font} onClick={this.showTea}>
                    <span className={location.pathname === '/black_tea'  || location.pathname === '/green_tea' || location.pathname === '/oolong_tea'? styles.fontcolor : ''}>經典產品<span className={styles.nav_engfont} onClick={this.showitem}>Product</span></span>
                      {itemTea === false ? '' :<ul className={styles.item_list}>
                        <li onClick={this.coloseHB}><Link to="/black_tea" className={location.pathname === '/black_tea' ? styles.fontcolor : ''}>紅茶系列</Link></li>
                        <li onClick={this.coloseHB}><Link to="/green_tea" className={location.pathname === '/green_tea' ? styles.fontcolor : ''}>綠茶系列</Link></li>
                        <li onClick={this.coloseHB}><Link to="/oolong_tea" className={location.pathname === '/oolong_tea' ? styles.fontcolor : ''}>烏龍茶系列</Link></li>
                      </ul>}
                    </li>
                    <li className={styles.nav_font} onClick={this.closeItemList}>
                      <Link to="/news" className={location.pathname === '/news' ? styles.fontcolor : ''}>最新消息<span className={styles.nav_engfont}>News</span></Link>
                    </li>
                    <li className={styles.nav_font} onClick={this.closeItemList}>
                    <Link to="/store" className={location.pathname === '/store' ? styles.fontcolor : ''}>店鋪介紹<span className={styles.nav_engfont}>Store</span></Link>
                    </li>
                    <li className={styles.nav_font} onClick={this.closeItemList}>
                    <Link to="/about" className={location.pathname === '/about' ? styles.fontcolor : ''}>關於我們<span className={styles.nav_engfont}>About</span></Link>
                    </li>
                    <li className={styles.nav_font} onClick={this.closeItemList}>
                    <Link to="/contact" className={location.pathname === '/contact' ? styles.fontcolor : ''}>聯絡我們<span className={styles.nav_engfont}>Contact</span></Link>
                    </li>


                    {/* <li className="nav_font hb_icno">
                      <div className="icon">
                        <Link to="/"><i className="fas fa-sign-in-alt"></i></Link>
                        <Link to="/"><i className="fas fa-shopping-basket"></i></Link>
                      </div>
                    </li> */}
                  </ul>
                </div>}
            </header>
        );
    }
}

export default withRouter(Header);