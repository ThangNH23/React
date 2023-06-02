import WatchImg from '../assets/watch.png'
import ImgBtn1 from '../assets/imgBtn1.png'
import ImgBtn2 from '../assets/imgBtn2.png'


const Watch = () => {
    return(
        <div className="Watch">
            <div className="TeksWatch">
                <h5>Download Our App</h5>
                <h1>Watch Anywhere</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et repellendus sapiente mollitia quas autem, ullam quod sint inventore possimus?</p>
                <ul className="btns">
                    <li><button><img src={ImgBtn1} alt="" /></button></li>
                    <li><button><img src={ImgBtn2} alt="" /></button></li>
                </ul>
            </div>
            <div className="images">
                <img src={WatchImg} alt="" />
            </div>
        </div>
    )
}

export default Watch