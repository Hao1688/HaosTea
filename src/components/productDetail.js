import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';
import styles from './scss/productDetail.module.scss';
import main from '../scss/main.module.scss';
import Teabag from '../assets/images/blacktea/teabag.jpg';


class TeaDetail extends Component {
    constructor(props){
      super(props)
      this.state={
          pagename:'',
          previouspageUrl:'',
          data:[],
          explain:[],
          meterial:[],
          HotProducts:[]
        }
    }
    
  componentDidMount(){
    const {match} = this.props;
    const previousUrl = match.path.split('/:type');
    console.log(previousUrl)
    const teaName=match.params.type;
    this.changeTea(previousUrl,teaName)
  }

  changeTea(previousUrl,teaName){
    let showTeaDetail='';
    let previousPageName='';
    if(previousUrl[0] === '/black_tea'){
         showTeaDetail = 'black_tea'
         previousPageName = '紅茶'
    }else if(previousUrl[0] === '/green_tea'){
         showTeaDetail = 'green_tea'
         previousPageName = '綠茶'
    }else if(previousUrl[0] === '/oolong_tea'){
        showTeaDetail = 'oolong_tea'
        previousPageName = '烏龍茶'
   }
   axios.get('http://www.mocky.io/v2/5d1d68bc3000008f00d71f06').then(res=>{
   res.data[showTeaDetail].filter(data=>{
       // data.type  跟  teaName 產品英文名稱
       if(data.type !== teaName){
           return data
       }
       return(
           this.setState({
               data:data,
               pagename:previousPageName,
               previouspageUrl:previousUrl[0],
               explain:data.explain,
               meterial:data.meterial
           })
       )
   })
   })
   //4項推薦商品
    axios.get('http://www.mocky.io/v2/5d1d68bc3000008f00d71f06').then(res=>{
        
        const num=res.data[showTeaDetail].length <=4 ?  res.data[showTeaDetail].length : 4;
        let arr=[]
        for(let i=0 ; i<num ; i++){
            let num = Math.floor(Math.random() * res.data[showTeaDetail].length)
            arr.indexOf(num) === -1 ?arr[i]=num:i--
        }
        this.setState({
            HotProducts:arr.map(data=>res.data[showTeaDetail][data])
        })
    })
    window.scrollTo(0,0)
  }


  render(){
    const {data,pagename,previouspageUrl,explain,meterial,HotProducts} = this.state
    return(
        <div className={styles.teaDetail}>
        <Breadcrumbs data={pagename} previouspageUrl={previouspageUrl} thispageName={data.name}/>
        <div className={main.pagecontent}>
            <div className={styles.product_intro}>
                <div className={styles.tea_img}>
                    <img src={data.img} alt={data.name} />
                </div>
                <div className={styles.tea_contnet}>
                    <h1>{data.name}</h1>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <h3>{data.title}</h3>
                    <h3>{data.win}</h3>
                    <h3 className={styles.fontcolor}>品茶筆記</h3>
                    <ul>
                        <li>味道：{data.flavor}</li>
                        <li>香氣味：{data.smell}</li>
                        <li>色澤：{data.color}</li>
                    </ul>
                </div>
            </div>
            {/* 茶罐 /茶包 */}
            <div className={styles.tea_cart}>
                <div className={styles.tea_box}>
                    <div className={styles.tea_cart_img}>
                        <img src={data.boximg} alt={`${pagename}茶罐`} />
                    </div>
                    <div className={styles.tea_cart_item}>
                        <div className={styles.cart_item_price}>
                            <h3>經典茶罐  600g</h3>
                            <h3>{data.boxprice}</h3>
                        </div>
                        <div className={styles.cart_item_option}>
                            <select name="number" className={styles.cart_item_select}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <div className={styles.cart_btn}>加入購物車</div>
                        </div>
                    </div>
                </div>
                <div className={styles.tea_box}>
                    <div className={styles.tea_cart_img}>
                        <img src={Teabag} alt={`${pagename}茶包`} />
                    </div>
                    <div className={styles.tea_cart_item}>
                        <div className={styles.cart_item_price}>
                            <h3>經典茶包/15包</h3>
                            <h3>{data.bagprice}</h3>
                        </div>
                        <div className={styles.cart_item_option}>
                            <select name="number" className={styles.cart_item_select}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <div className={styles.cart_btn}>加入購物車</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 關於茶葉 */}
            <h2>關於{data.name}</h2>
            <div className={styles.about_tea_content}>
                <div className={styles.about_tea}>
                    <h3 className={styles.fontcolor}>茶類型：{pagename}</h3>
                    <p>{data.content}</p>
                </div>
                <div className={styles.about_tea}>
                    <h3 className={styles.fontcolor}>浸泡說明</h3>
                    <ol>
                        {explain.map(data=>(
                            <li key={data}>{data}</li>
                        ))}
                    </ol>
                    <p>對於散裝茶葉，每230g使用2茶匙。</p>
                    <h3 className={styles.fontcolor}>配  料</h3>
                    {meterial.map(data=>(<p key={data}>{data}</p>))}
                </div>
            </div>
        </div>
        <h2 className={styles.title_center}>你可能也喜歡這些</h2>
        <div className={styles.product_item}>
            {HotProducts.map(data=>(
                // <Recommend data={data} key={data.id} previousUrl={previousUrl}/>
                <div className={styles.product_item_tea} key={data.id}>
                    {/* <Link to={`${data.type}`} target="_blank"> */}
                    <Link to={`${data.type}`} onClick={()=>{
                        const teaName=data.type
                        const {match} = this.props;
                        const previousUrl = match.path.split('/:type');
                        this.changeTea(previousUrl,teaName)
                    }}>
                        <img src={data.img} alt={data.name}/>
                        <h3>{data.name}</h3>
                        <p>{data.title}</p>
                        <p>100/g {data.price100g}</p>
                    </Link>
                </div>
            ))}
        </div>
        </div> 
    )
  }
}

export default TeaDetail;