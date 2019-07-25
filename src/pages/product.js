import React, {Component} from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import styles from '../scss/product.module.scss';
import main from '../scss/main.module.scss';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Product_Bg from '../assets/images/product_bg.jpg'

class Product extends Component {
  constructor(props){
    super(props)
    this.state={
        pagename:'',
        pagetitle:'',
        data:[]
    }
  }
  componentDidMount(){
    const {match} =this.props
    console.log(match.path)
    let pageName='';
    let pageTitle='';
    let Productname='';
    if(match.path === '/black_tea'){
        pageName='紅茶'
        pageTitle="紅茶經歷四個生產階段 - 萎凋，滾動，氧化和乾燥燒製。該過程產生強烈的味道並且比較少氧化的茶含有更多的咖啡因。Hao's Tea只尋找致力於質量和可持續實踐的小茶園。Hao's Tea選擇大型，形狀良好的葉子，經過手工加工和精心製作，這項任務需要耐心和對我們精美紅茶的熱情。"
        Productname = 'black_tea'
    }else if(match.path === '/green_tea'){
        pageName='綠茶'
        pageTitle="一系列經久耐用的綠茶，以每日杯子帶來的顯著和重要的健康益處而聞名。我們的綠茶可以捕捉高山茶園的清新空氣，並定義綠茶應該如何品嚐。新鮮收穫的葉子巧妙地蒸熟，滾動和平底鍋炒鍋，為您帶來終極幸福。"
        Productname="green_tea"
    }else if(match.path === '/oolong_tea'){
        pageName='烏龍茶'
        pageTitle="Hao's Tea的烏龍茶在綠茶的清新草味和紅茶的微妙複雜性之間提供了完美的平衡。烏龍茶的生產是由真正的手工茶製造商進行的勞動密集型過程，其技巧決定了香氣，味道和顏色。Hao's Tea的烏龍茶以其清新的香氣而聞名，被許多人認為是一種鑑賞家的茶，提供了一種音符和細微差別的交響樂。"
        Productname ='oolong_tea'
    }
    axios.get('https://www.mocky.io/v2/5d1d68bc3000008f00d71f06').then(res=>{
        this.setState({
            pagename:pageName,
            pagetitle:pageTitle,
            data: res.data[Productname]
        })
    })
    window.scrollTo(0,0)
  }
  render(){
    const {match} = this.props
    const {pagename,pagetitle,data} = this.state
    return(
        <div className={styles.productpage}>
            <Breadcrumbs data={pagename}/>
            <div className={main.pagecontent}>
                <div className={styles.product_banner}>
                    <div className={styles.product_banner_content}>
                        <h1>{pagename}</h1>
                        <p>{pagetitle}</p>
                    </div>
                    <div className={styles.product_banner_img}>
                        <img src={Product_Bg} alt="茶葉"/>
                    </div>
                </div>
                <div className={styles.product_item}>
                    {data.map(data=>(
                        <div className={styles.product_item_tea} key={data.id}>
                            <Link to={`${match.path}/${data.type}`}>
                                <img src={data.img} alt={data.name}/>
                                <h3>{data.name}</h3>
                                <p>{data.title}</p>
                                <p>100/g {data.price100g}</p>
                            </Link>
                        </div>	
                    ))}
                </div>
            </div>
        </div>
    )
  }
}

export default Product;
