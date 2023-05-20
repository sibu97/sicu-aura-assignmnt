import React from 'react'
import Illust from '../assets/header-illust.png'

const Header = () => {
  return (
      <div  style={{display: 'flex'}}>
          <div style={{ height: '100px', width:'30vw',padding:'10%'}}>
              <p><h3>Lorem ipsum dolor sit amet consectetur. Amet diam ipsum suspendisse gravida.
                  Metus sit habitant amet quam risus eget consequat. Phasellus nec morbi sit magna.
              </h3></p>
          </div>
          <div id="ill">
              <img src={Illust} alt='logo' />
          </div>
          
      </div>
  )
}

export default Header