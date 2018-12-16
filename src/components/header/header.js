import React, { Component } from 'react'
import css from './header.module.sass'
export class componentName extends Component {
  render() {
    return (
      <div className={css.header}>
        <div className={css.logo}></div>
        <div className={css.headerMain}>
          <div className={[css.navItem,css.left,css.active].join(' ')}>首页</div>
          <div className={[css.navItem,css.left].join(' ')}>下载APP1</div>
          <div className={[css.navItem,css.left].join(' ')}>
            <div className={css.searchbox}>
              <input className={css.serchInput} placeholder="请输入"></input>
              <i className="iconfont icon-icon-checkin"></i>
            </div>
          </div>
          <div className={[css.navItem,css.right].join(' ')}>
            <i className="iconfont icon-Aa"></i>
          </div>
          <div className={[css.navItem,css.right].join(' ')}>登录</div>
        </div>
        <div className={css.headerRight}>
          <div className={[css.navItem].join(' ')}>注册</div>
          <div className={[css.navItem,css.active].join(' ')}>
            <i className="iconfont icon-icon-checkin"></i>写文章
          </div>
        </div>
      </div>
      
    )
  }
}

export default componentName
