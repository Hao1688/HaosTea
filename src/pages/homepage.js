import React, {Component} from 'react';
import styles from '../scss/homepage.module.scss';
import main from '../scss/main.module.scss';
import {Link} from 'react-router-dom';
import Banner from '../assets/images/homepage_banner.jpg';
import Video from '../assets/video/homepagevideo.mp4';
import Blackteabox from '../assets/images/blacktea/blackteabox.png';
import Blacktea from '../assets/images/blacktea/EnglishBreakfast.jpg';
import Greenteabox from '../assets/images/greentea/greenteabox.png';
import Greentea from '../assets/images/greentea/MoroccanMint.png';
import Oolongteabox from '../assets/images/Oolongtea/Oolongteabox.png';
import Oolongtea from '../assets/images/Oolongtea/FormosaOolong.jpg';
import NewsSpring from '../assets/images/NEWS/2018spring.jpg';
import NewsWinter from '../assets/images/NEWS/2017winter.png';
import News1 from '../assets/images/NEWS/news1.jpg';
import News2 from '../assets/images/NEWS/news2.jpg';
import About1 from '../assets/images/about/img2.jpg';
import About2 from '../assets/images/about/img3.jpg';

const rdom = require('react-dom'); 

class HonmePage extends Component{
    constructor(props){
        super(props)
        this.state={
            teaBox:false,
            newsspring:false,
            newswinter:false,
            newssmall:false,
            aboutbox:false
        }
    }
    componentDidMount(){
      window.scrollTo(0,0)
    }
    scroll = () =>{
        const {teaBox,newsspring,newswinter,newssmall,aboutbox} = this.state  
        const windowHeight = window.screen.availHeight  //螢幕可用工作區高度      
        const tea_Box = rdom.findDOMNode(this.refs.teaBox).getBoundingClientRect();
        const news_spring = rdom.findDOMNode(this.refs.news_spring).getBoundingClientRect();
        const news_winter = rdom.findDOMNode(this.refs.news_winter).getBoundingClientRect();
        const news_small = rdom.findDOMNode(this.refs.news_small).getBoundingClientRect();
        const about_box = rdom.findDOMNode(this.refs.about_box).getBoundingClientRect();

        teaBox === true ? this.setState({teaBox:true}) :windowHeight - 200 > tea_Box.top ? this.setState({teaBox:true}) : this.setState({teaBox:false});
        newsspring === true ? this.setState({news_spring:true}) : windowHeight - 200 > news_spring.top ? this.setState({newsspring:true}) : this.setState({newsspring:false});
        newswinter === true ? this.setState({news_winter:true}) :windowHeight - 200 > news_winter.top ? this.setState({newswinter:true}) : this.setState({newswinter:false});
        newssmall === true ? this.setState({news_winter:true}) : windowHeight - 200 > news_small.top ? this.setState({newssmall:true}) : this.setState({newssmall:false});
        aboutbox === true ? this.setState({news_winter:true}) :windowHeight - 200 > about_box.top ? this.setState({aboutbox:true}) : this.setState({aboutbox:false});
    }
      render(){
        const {teaBox,newsspring,newswinter,newssmall,aboutbox} =this.state
        return (
            <div className={styles.homepage} onWheel={this.scroll}>
                {/* index_banner */}
                <div className={styles.index_banner}>
                    <div className={styles.index_banner_font}>
                        <p className={styles.bigfont}>THE</p>
                        <p className={styles.smallfont}>THE</p>
                        <p className={styles.bigfont}>NATURE</p>
                        <p className={styles.smallfont}>TEA</p>
                        <p className={styles.bigfont}>TASTE</p>
                        <p className={styles.smallfont}>OF</p>
                        <p className={styles.bigfont}>OF LIFE</p>
                        <p className={styles.smallfont}>TASTE</p>
                    </div>
                    <div className={styles.index_banner_img}>
                        <img src={Banner} alt="茶背景01" />
                    </div>
                </div>

                {/* index_Video */}
                <div className={styles.index_video}>
                    <div className={main.pagecontent}>	
                        <div  className={styles.homepage_title}>
                            <h2>精選茶葉</h2>
                            <h3>每一個產地 都是一個獨特的景致</h3>	
                        </div>
                        <video src={Video} loop={true} autoPlay="autoPlay" muted={true} playsInline>
                        </video>
                    </div>
                    <div className={styles.index_Video_bg}></div>
                </div>

                {/* 茶葉、茶罐 */}
                <div className={styles.index_product}>
                    <div className={main.pagecontent}>
                        <div className={styles.index_product_flex}>
                            <div ref="teaBox" className={teaBox ? "index_product_tea FadeIn fadeInLeft" : 'index_product_tea FadeIn'}>
                                <div className={styles.tea_box_top}>
                                    <Link to="/black_tea">
                                        <img src={Blackteabox} alt="紅茶茶罐"/>
                                        <h3>紅茶系列</h3>
                                    </Link>
                                </div>
                                <div className={styles.tea_box_bottom}>
                                    <Link to="/black_tea">
                                        <img src={Blacktea} alt="紅茶茶葉"/>
                                        <h3>紅茶系列</h3>
                                    </Link>
                                </div> 
                            </div>
                            <div className={teaBox ? "index_product_tea FadeIn fadeInUp" : 'index_product_tea FadeIn'}>
                                <div className={styles.tea_box_top}>
                                    <Link to="/oolong_tea">
                                        <img src={Oolongteabox} alt="烏龍茶茶罐"/>
                                        <h3>烏龍茶系列</h3>
                                    </Link>
                                </div>
                                <div className={styles.tea_box_bottom}>
                                    <Link to="/oolong_tea">
                                        <img src={Oolongtea} alt="烏龍茶茶葉"/>
                                        <h3>烏龍茶系列</h3>
                                    </Link>
                                </div> 
                            </div>
                            <div className={teaBox ? "index_product_tea FadeIn fadeInRight" : 'index_product_tea FadeIn'}>
                                <div className={styles.tea_box_top}>
                                    <Link to="/green_tea">
                                        <img src={Greenteabox} alt="綠茶茶罐"/>
                                        <h3>綠茶系列</h3>
                                    </Link>
                                </div>
                                <div className={styles.tea_box_bottom}>
                                    <Link to="/green_tea">
                                        <img src={Greentea} alt="綠茶茶葉" className={styles.tea_green}/>
                                        <h3>綠茶系列</h3>
                                    </Link>
                                </div> 
                            </div>
                        </div>	
                    </div>	
                </div>

                {/* index_News */}
                <div className={styles.index_News}>
                    <div className={styles.index_left_bg}></div>
                    <div className={main.pagecontent}>			
                        <div className={styles.homepage_title}>
                            <div className={styles.titleline}></div>
                            <h2>最新消息</h2>		
                        </div>
                        <div className={styles.news_box_item}>
                            <div className={styles.index_news_box}>
                                <Link ref="news_spring" to="/news" className={newsspring ? "index_news_bignews FadeIn fadeInRight" : 'index_news_bignews FadeIn'}>
                                    <img src={NewsSpring} alt="春茶" />
                                    <div className={styles.index_news_content1}>
                                        <h3>2018年春茶上市</h3>
                                        <p>更甚於去年的好品質，給你品質最好的茶葉，都會親自上茶山找尋連我們自己都滿意的好茶，讓喝好茶不再是難事，我們已經為您挑選、焙火、包裝成一支支的茶葉，方便您選購。</p>
                                        <p className={styles.news_time}>訊息發佈日2018/03/20</p>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.index_news_box}>
                                <Link ref="news_winter" to="/news" className={newswinter ? "index_news_bignews_winter FadeIn fadeInLeft" : 'index_news_bignews_winter FadeIn'}>
                                    <img src={NewsWinter} alt="冬茶" />
                                    <div className={styles.index_news_content1}>
                                        <h3>2017年冬茶上市</h3>
                                        <p>秋山職人每年春冬採茶節氣，都會親自上茶山找尋連我們自己都滿意的好茶，讓喝好茶不再是難事，我們已經為您挑選、焙火、包裝成一支支的茶葉，方便您選購。</p>
                                        <p className={styles.news_time}>訊息發佈日2017/12/18</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.index_news_box2}>					
                            <Link ref="news_small" to="/news" className={newssmall ? "index_news_bignews FadeIn fadeInUp" : 'index_news_bignews FadeIn'}>
                                <img src={News1} alt="2018春節禮盒" />
                                <div className={styles.index_news_content1}>
                                    <p>2018 春節緣滿茶禮｜2/1起全台門市販售</p>
                                    <p className={styles.news_time}>訊息發佈日2018/01/31</p>	
                                </div>
                            </Link>
                            <Link to="/news" className={newssmall ? "index_news_bignews FadeIn fadeInUp" : 'index_news_bignews FadeIn'}>
                                <img src={News2} alt="24周年慶" />
                                <div className={styles.index_news_content1}>
                                    <p>歡慶品牌二十四周年，此次將推出一系列活動！</p>
                                    <p className={styles.news_time}>訊息發佈日2018/01/26</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>	
                
                {/* index_About */}
                <div className={styles.index_about}>
                    <div className={main.pagecontent}>
                        <div className={styles.homepage_title}>
                            <div className={styles.titleline}></div>
                            <h2>關於我們</h2>		
                        </div>
                        <div ref="about_box" className={aboutbox ? "index_about_img FadeIn fadeIn" : 'index_about_img FadeIn'}>
                            <img src={About1} className={styles.about_img_mobile}  alt="about"/>
                            <img src={About2} className={styles.about_img_computer}  alt="about"/>
                            <Link to="/about" className={styles.index_about_font} >
                                <h3>沒有深刻動人的起源故事</h3>
                                <h2>只有一步一印的百年茶事</h2>
                                <p>前  往</p>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="index_About_bg"></div>	 */}
                </div>
            </div>
        );
    }
}

export default HonmePage;