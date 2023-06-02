import Logo from '../assets/logo.png'


const Navbar = () =>{
    return(
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navigation">
                    <a href="">Home</a>
                    <a href="">Movie</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar