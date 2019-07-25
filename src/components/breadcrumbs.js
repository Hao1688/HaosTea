import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styles from './scss/breadcrumbs.module.scss';

class Breadcrumbs extends Component {

  render(){
      const {data,previouspageUrl,thispageName} = this.props
    return(
        <div className={styles.breadcrumbs}>
            {thispageName ? <div><Link to="/">首頁 </Link>/ <Link to={previouspageUrl}>{data} </Link>/ <span className={styles.fontcolor}>{thispageName}</span></div> : 
                            <div><Link to="/">首頁 </Link>/ <span className={styles.fontcolor}>{data}</span></div>}
            {/* <div><Link to="/">首頁 </Link>/ <span className={styles.fontcolor}>{data}</span></div> */}
        </div>
    )
  }
}

export default Breadcrumbs;
