import React, {Component} from 'react';
import styles from './scss/footer.module.scss';
import {Link} from 'react-router-dom'

class Footer extends Component{
      render(){
        return (
            <footer className={styles.footerimg}>
                <div className={styles.footertop}>
                    <div className={styles.footericon}>    
                        <p>
                            <i className="fas fa-clock"></i>10:00 ~ 22:00
                        </p>
                    </div>
                    <div className={styles.footericon}>
                        <p>
                            <i className="fas fa-phone-square"></i>02-5888-5888
                        </p>
                    </div>
                    <div className={styles.footericon}>
                        <p>
                            <i className="fas fa-map-marker-alt"></i>台北市信義區菸廠路88號1樓
                        </p>
                    </div>
                    <div className={styles.footericon}>	
                        <p>
                            <i className="fas fa-envelope"></i>ilovetea@gmail.com
                        </p>
                    </div>
                </div>
                <div className={styles.footerbottom}>
                    <div className={styles.footer_icon}>
                        <Link to="/"><i className="fab fa-facebook-f"></i></Link>	
                        <Link to="/"><i className="fab fa-twitter"></i></Link>	
                        <Link to="/"><i className="fab fa-instagram"></i></Link>
                    </div>
                    <p>&copy;2018 Hao's Tea</p>
                </div>
            </footer>
        );
    }
}

export default Footer;