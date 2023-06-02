import Category1 from '../assets/category1.jpg'
import Category2 from '../assets/category2.jpg'
import Category3 from '../assets/category3.jpg'
import Category4 from '../assets/category4.jpg'


const Category = () =>{
    return(
        <div className="Category">
            <div className="images">
                <div className="imagesCard">
                    <img src={Category1} alt="" />
                    <h3>Drama</h3>
                </div>
                <div className="imagesCard">
                    <img src={Category2} alt="" />
                    <h3>Drama</h3>
                </div>
                <div className="imagesCard">
                    <img src={Category3} alt="" />
                    <h3>Drama</h3>
                </div>
                <div className="imagesCard">
                    <img src={Category4} alt="" />
                    <h3>Drama</h3>
                </div>
            </div>
            <div className="teks">
                <h1>Popular Category</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor magnam inventore praesentium dolorum, illo autem odit iure assumenda accusamus labore!</p>
                <button>View All</button>
            </div>
        </div>
    )
}

export default Category