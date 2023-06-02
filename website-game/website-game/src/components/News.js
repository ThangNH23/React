import News1 from '../assets/news1.jpg'
import News2 from '../assets/news2.jpg'
import News3 from '../assets/news3.jpg'
import News4 from '../assets/news4.jpg'

const News = () =>{
    return(
        <div className="News">
            <div className="title">
                <h1>News</h1>
            </div>

            <div className="NewsContent">
                <div className="card">
                    <div className="images">
                        <img src={News1} alt="" />
                    </div>
                    <div className="NewsTeks">
                        <h2>Top 10 Movies Watch This Summer</h2>
                        <p>SEPTEMBER 12, 2022</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={News2} alt="" />
                    </div>
                    <div className="NewsTeks">
                        <h2>Top 10 Movies Watch This Summer</h2>
                        <p>SEPTEMBER 12, 2022</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={News3} alt="" />
                    </div>
                    <div className="NewsTeks">
                        <h2>Top 10 Movies Watch This Summer</h2>
                        <p>SEPTEMBER 12, 2022</p>
                    </div>
                </div>
                <div className="card">
                    <div className="images">
                        <img src={News4} alt="" />
                    </div>
                    <div className="NewsTeks">
                        <h2>Top 10 Movies Watch This Summer</h2>
                        <p>SEPTEMBER 12, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News