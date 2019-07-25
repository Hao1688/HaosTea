import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import Breadcrumbs from '../components/breadcrumbs';
import styles from '../scss/contact.module.scss';
import ContactBg from '../assets/images/contact_bg.jpg';

class Contact extends Component {
  constructor(props){
    super(props)
    this.state={
      pagename:'聯絡我們',
      queation:'',
      name:'',
      phone:'',
      tel:'',
      mail:'',
      memo:''
    }
  }
  componentDidMount(){
    window.scrollTo(0,0)
  }
  SubmitData = (e) =>{
    e.preventDefault();
    console.log(this.state)
    alert(this.state.mail)
  }
  changequeation = (e) =>{
    this.setState({
      queation:e.target.value
    })
  }
  changeInput = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    const {pagename,queation} = this.state
    return(
      <div> {/*查看一開始視窗寬度*/}
        <div className={styles.contactpage}>
          <img src={ContactBg} alt="background" />
        </div>
        <Breadcrumbs data={pagename}/>
        <div className={styles.contact_content}>
          <div className={styles.form_bgcolor}>
            <h2>聯絡我們</h2>
            <h4>若您有任何需求或是相關問題，請填寫以下資料，我們將會盡快與您聯絡，謝謝。</h4>
            <form onSubmit={this.SubmitData}>
              <div>
                <select value={queation} className={styles.tdwidth} onChange={this.changequeation}>
                  <option value="" disabled>請選擇問題類別</option>
                  <option value="產品詢問">產品詢問</option>
                  <option value="訂貨詢問">訂貨詢問</option>
                  <option value="退貨詢問">退貨詢問</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div><input type="text" name="name" maxLength="5" className={styles.tdwidth} placeholder="姓 名" onChange={this.changeInput}/></div>
              <div><input type="text" name="phone"  className="tdwidth" placeholder="手 機"  onChange={this.changeInput}/></div>
              <div><input type="text" name="tel" maxLength="10" className={styles.tdwidth} placeholder="電 話"  onChange={this.changeInput}/></div>
              <div><input type="email" name="mail" className={styles.tdwidth} placeholder="電子信箱"  onChange={this.changeInput}/></div>
              <div><textarea name="memo" placeholder="內 容" className={styles.font_size}  onChange={this.changeInput}/></div>
              <input type="submit" value="確認送出" className={styles.submitbtn}/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
