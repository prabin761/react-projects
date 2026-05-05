import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='main_container'>
      <div className="left">
        <h1>Styless and Comfortable foot ware.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos reprehenderit laboriosam, repudiandae illum accusamus nesciunt! Veritatis expedita neque illo aliquid tempora, voluptate labore mollitia repellat.</p>
        <div className="actions">
            <button className="shop">shop now</button>
            <button className="category">Category</button>
        </div>
        <div className="available">
            <p>Also available on</p>
            <div className="social">
                <img src="\src\assets\flipkart.png" alt="" />
                <img src="/src/assets/amazon.png" alt="" />
            </div>
        </div>
      </div>
      <div className="right">
        <img src="/src/assets/shoe_image.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
