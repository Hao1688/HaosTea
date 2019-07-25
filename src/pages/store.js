import React, {Component} from 'react';
import styles from '../scss/store.module.scss';
// import main from '../scss/main.module.scss';
import Breadcrumbs from '../components/breadcrumbs';
import StoreImg1 from '../assets/images/store/store1.jpg';
import StoreMap from '../assets/images/store/map.jpg';

class StorePage extends Component {
  constructor(props){
    super(props)
    this.state={
      pagename:'店鋪介紹'
    }
  }
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
    const {pagename} = this.state
    return(
      <div className={styles.storepage}>
        <Breadcrumbs data={pagename} />
          <div className={styles.storepagecontent}>
            <div className={styles.store_img}>
              <img className={styles.store_banner_img} src={StoreImg1} alt="store"/>
              {/* <img className="store_banner_img w3-animate-fading"src="store/store3.jpg">
              <img className="store_banner_img w3-animate-fading"src="store/store4.jpg">
              <img className="store_banner_img w3-animate-fading"src="store/5.jpeg">
              <img className="store_banner_img w3-animate-fading"src="store/6.jpeg">
              <img className="store_banner_img w3-animate-fading"src="store/7.jpeg">
              <img className="store_banner_img w3-animate-fading"src="store/8.jpeg"> */}
            </div>
            <div className={styles.store_map_content}>
              <div className={styles.map_img}>
                <img src={StoreMap} alt="誠品松菸地圖" />
              </div>
              <div className={styles.map_content}>
                <h3 className={styles.fontcolor}>地址</h3>
                <p>110 台北市信義區菸廠路88號1樓<a href="https://www.google.com.tw/maps/place/%E8%AA%A0%E5%93%81%E7%94%9F%E6%B4%BB%E6%9D%BE%E8%8F%B8%E5%BA%97/@25.0421526,121.5610159,17z/data=!4m8!1m2!2m1!1z5p2-6I-46Kqg5ZOB!3m4!1s0x3442abbf1460de89:0x9d204e656cd39b8!8m2!3d25.044545!4d121.5614574" target="_black"><i className="fas fa-map-marker-alt"></i></a></p>
                <h3 className={styles.fontcolor}>電話</h3>
                <p>02-5888-5888</p>
                <h3 className={styles.fontcolor}>營業時間</h3>
                <p>周日至周四 10:00-22:00</p>
                <p>周五至周六 10:00-23:00</p>
                <h3 className={styles.fontcolor}>搭乘捷運</h3>
                <p>板南線 / 市政府站 / 1號出口步行約400公尺</p>
                <p>板南線 / 國父紀念館捷運站 / 5號出口步行約500公尺</p>
              </div>
            </div>
          </div>
      


      </div>
    )
  }
}

export default StorePage;
