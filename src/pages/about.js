import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from '../scss/about.module.scss';
import Breadcrumbs from '../components/breadcrumbs';
import main from '../scss/main.module.scss';
import About1 from '../assets/images/about/img2.jpg';
import Aboutbgright from '../assets/images/about/aboutbgright.png';
import Aboutbgleft from '../assets/images/about/aboutbgleft.png';
import About2 from '../assets/images/about/about2.jpg';
import About3 from '../assets/images/about/about3.jpg';
import Abouttea1 from '../assets/images/about/abouttea1.jpg';
import Abouttea2 from '../assets/images/about/abouttea2.jpg';
import Abouttea3 from '../assets/images/about/abouttea3.jpg';
const rdom = require('react-dom'); 

class AboutPage extends Component {
  constructor(props){
    super(props)
    this.state={
      pagename:'關於我們',
      ourstory:false,
      aboutBox1:false,
      aboutBox2:false,
      aboutnews:false
    }
  }
  componentDidMount(){
    window.scrollTo(0,0)
  }
  scroll = () =>{
    const {ourstory , aboutBox1 , aboutBox2 , aboutnews} = this.state
    const windowHeight = window.screen.availHeight  //螢幕可用工作區高度      
    const story = rdom.findDOMNode(this.refs.story).getBoundingClientRect();
    const aboutbox1 = rdom.findDOMNode(this.refs.aboutbox1).getBoundingClientRect();
    const aboutbox2 = rdom.findDOMNode(this.refs.aboutbox2).getBoundingClientRect();
    const aboutNews = rdom.findDOMNode(this.refs.aboutNews).getBoundingClientRect();
    // console.log(windowHeight)
    // console.log(outstory)
    ourstory === true ? this.setState({ourstory:true}) :windowHeight -200> story.top ? this.setState({ourstory:true}) : this.setState({ourstory:false});
    aboutBox1 === true ? this.setState({aboutBox1:true}) :windowHeight -200> aboutbox1.top ? this.setState({aboutBox1:true}) : this.setState({aboutBox1:false});
    aboutBox2 === true ? this.setState({aboutBox2:true}) :windowHeight -200> aboutbox2.top ? this.setState({aboutBox2:true}) : this.setState({aboutBox2:false});
    aboutnews === true ? this.setState({aboutnews:true}) :windowHeight -200> aboutNews.top ? this.setState({aboutnews:true}) : this.setState({aboutnews:false});
    
  }

  render(){
    const {pagename,ourstory,aboutBox1,aboutBox2,aboutnews} = this.state
    return(
      <div onWheel={this.scroll}>
        <div className={styles.aboutus_bg}>
          <Breadcrumbs data={pagename}/>
          <div className={styles.slogan_content}>
            <h2>從一株株茶苗落地生根的那刻起</h2>
            <h2>就開始訴說著他們蛻變的故事</h2>
          </div>	
        </div>
        <div className={styles.aboutus_intro}>
          <div className={main.pagecontent}>
            <div ref="story" className={ourstory ? "aboutus_intro_flex FadeIn fadeIn" : 'aboutus_intro_flex FadeIn'}>
              <div className={styles.aboutus_intro_content}>
                <h3>品牌故事</h3>
                <p>我們希望能為您帶來一杯美味與健康兼具的自然好茶，為了實現這樣的想法，我們選擇從源頭著手，堅持使用有機認證與生態永續的產品，以生產我們所特色的各種茶。
                </p>
              </div>
              <div className={styles.aboutus_intro_img}>
                  <img src={About1} alt="倒茶"/>
              </div>
            </div>
          </div>	
            <img src={Aboutbgright} className={styles.about_bg_right} alt="about"/>
        </div>

        <div className={styles.aboutus_orgin}>
          <div className={main.pagecontent}>
            <div ref="aboutbox1" className={aboutBox1 ? "aboutus_orgin_1 FadeIn fadeInLeft" : 'aboutus_orgin_1 FadeIn'}>
              <div className={styles.aboutus_orgin_1_img}>
                <img src={About2} alt="採茶"/>
              </div>
              <div className={styles.aboutus_intro_content}>
                <h3>以茶會友</h3>
                <p>源於唐代飲茶文化，取「以茶聚會」、「以茶宴會友」之意，融合累積數百年來的調茶技術，因應現代人茶飲便利性的需求，同時講究品質享受的趨勢，體現唐宋文人茶宴為底蘊，調和著人間甘露的幸福味為初衷，重塑少長咸集，以茶聚會的庶民茶飲。</p>
              </div>		
            </div>
            <div ref="aboutbox2" className={aboutBox2 ? "aboutus_orgin_2 FadeIn fadeInRight" : 'aboutus_orgin_2 FadeIn'}>
              <div className={styles.aboutus_orgin_1_img}>
                <img src={About3} alt="採茶"/>
              </div>
              <div className={styles.aboutus_intro_content}>
                <h3>以茶遞情</h3>
                <p>用心接承這一份以茶遞情的美好，嚴選每一款好茶，堅持每一杯現調。在競爭激烈、千變萬化的外帶茶飲市場中，始終秉持以真心調和令人回甘的幸福茶，即使走得慢、卻將行得更穩、望得更遠。</p>
              </div>		
            </div>
          </div>
          <div className={styles.aboutus_orgin_bg}>
              <img src={Aboutbgleft} className={styles.about_bg_left}  alt="about"/>
          </div> 
        </div>

        <div className={styles.aboutus_tea_intro}>
          <div className={main.pagecontent}>
            <div className={styles.aboutus_tea_intro_box}>		
              <div ref="aboutNews" className={aboutnews ? "aboutus_tea_intro_content FadeIn fadeIn" : 'aboutus_tea_intro_content FadeIn'}>
                <Link to="/about" className={styles.shadow}>
                  <img src={Abouttea1}  alt="about"/>			
                  <div className={styles.aboutus_tea_intro_content_font}>
                    <h4>茶的準備</h4>
                    <h5>如何準備大吉嶺茶</h5>
                    <p>正如所有茶藝愛好者所知，大吉嶺茶是特別的。由於特殊的工藝，它比其他紅茶更複雜......</p>
                  </div>
                </Link>
              </div>
              <div className={aboutnews ? "aboutus_tea_intro_content FadeIn fadeIn" : 'aboutus_tea_intro_content FadeIn'}>
                <Link to="/about" className={styles.shadow}>
                  <img src={Abouttea2}  alt="about"/>			
                  <div className={styles.aboutus_tea_intro_content_font}>
                    <h4>茶對健康的益處</h4>
                    <h5>英式早餐茶的好處</h5>
                    <p>英式早餐茶具有恢復和令人愉悅的口感，是在英國開始早晨的傳統方式，儘管它可能......</p>
                  </div>
                </Link>
              </div>
              <div className={aboutnews ? "aboutus_tea_intro_content FadeIn fadeIn" : 'aboutus_tea_intro_content FadeIn'}>
                <Link to="/about" className={styles.shadow}>
                  <img src={Abouttea3}  alt="about"/>			
                  <div className={styles.aboutus_tea_intro_content_font}>
                    <h4>茶的起源和儀式</h4>
                    <h5>茶的誕生地和歷史</h5>
                    <p>除了水和咖啡，茶是世界上消費量最高的三種飲料之一，讓那些喜歡它的人感到高興......</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>	
      </div>
    )
  }
}

export default AboutPage;
