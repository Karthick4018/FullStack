import './hero.css'
import hero from '../Assests/hero_image.png'
import hand from '../Assests/hand_icon.png'
import arrow from '../Assests/arrow.png'

export const Hero = () => {
  return (
    <div className="hero-outer">
    <div className='hero'>
        <div className="name">
            <div className="row">
            <h1>WELCOME</h1>
            <img src={hand} alt="hand" />
            </div>
            <div className="name2">
            <h2>NEW COLLECTIONS FOR EVERYONE</h2>
            <p>NEVER SETTLE !!</p>
            <p>DISCOUNT OFFER COMING SOON</p>
            <div className="latest">
            <div><p>LATEST</p></div>
            <img src={arrow} alt="arrow" />
            </div>
            </div>
            </div>
        <div className="banner">
            <img src={hero} alt="banner" />
            </div>
    </div>
    </div>
  )
}
