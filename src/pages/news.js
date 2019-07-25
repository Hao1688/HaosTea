import React, {Component} from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import styles from '../scss/news.module.scss';
import main from '../scss/main.module.scss';
import axios from 'axios'
import {Link} from 'react-router-dom';
// import Img from '../assets/images/NEWS/2017winter.png'
// import Img2 from '../assets/images/NEWS/2018spring.jpg'
// import Img3 from '../assets/images/NEWS/news_b1.jpg'

class News extends Component {
  constructor(props){
    super(props)
    this.state={
      pagename:'最新消息',
      filter:'all',
      data:[]
    }
  }
  componentDidMount(){
    axios.get('http://www.mocky.io/v2/5d08a20334000059005d98dc').then(res=>{
      this.setState({
        data:res.data
      })
    })
    window.scrollTo(0,0)
  }
  render(){
    const {pagename,filter,data} = this.state
    return(
      <div className={styles.newspage}>
        <Breadcrumbs data={pagename}/>
        <div className={styles.newstitle}>
            <ul>
              <li className={filter === 'all' ? styles.fontcolor : ''} onClick={()=>{
                this.setState({
                  filter:'all'
                })
              }}>全部消息</li>
              <li className={filter === 'new' ? styles.fontcolor : ''} onClick={()=>{
                this.setState({
                  filter:'new'
                })
              }}>新品上市</li>
              <li className={filter === 'sale' ? styles.fontcolor : ''} onClick={()=>{
                this.setState({
                  filter:'sale'
                })
              }}>優惠活動</li>
            </ul>
            <div className={styles.hr}></div>
        </div>
        <div className={main.pagecontent}>
          <div className={styles.news_box}>
            {data.filter(data=> {
              if(filter === 'all'){
                return data
              }
              return filter === data.event
            }).map(data=>(
              <Link to="/news" className={styles.news_content_card} key={data.id}>
                <img src={data.img} alt="茶壺" />
                <p>{data.date}</p>
                <p>{data.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default News;
