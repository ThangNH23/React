import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';


// function Header(){
//   return(
//     <div className="container-fluid">
//         <div className="row">
//         <div className="col-sm-8">
//       <div className="row">
//     <div className="col-sm-4">
//     <img className="logo" src="https://danavtc.edu.vn/Portals/0/logo.png?ver=2019-10-13-182116-600" alt="logo" />
//     </div>
//     <div className="col-sm-8" >
//       <h3> <span> </span> TRƯỜNG CAO ĐẲNG NGHỀ ĐÀ NẴNG</h3>
//       <h4 className="dana">DANANG VOCATIONAL TRAINING COLLEGE</h4>
//       <p><i class="fa-solid fa-location-dot"></i> 99 Tô Hiến Thành, Sơn Trà, Đà Nẵng</p>
//       <p> <i class="fa-solid fa-envelope"></i>danavtc@danavtc.edu.vn</p>
//       <p><i class="fa-solid fa-phone"></i>02363.942.790 – 02363.940.946</p>

//     </div>
//   </div>
//   </div>
//   <div className="col-sm-4 search" >
//   <p> Đăng nhập | Liên hệ</p>
//   <input type="text" placeholder="Search.." name="search" />
//   <button type="submit"><i className="fa fa-search"></i></button>
// </div>

//       </div>
// </div>

//   )
// }
// function Menu() {
//   return (
//     <div className="navbar">
//       <a href="#home">Trang chủ</a>
//       <a href="#news">Giới thiệu</a>
//       <a href="#news">Khoa - Phòng</a>
//       <a href="#news">Đào tạo</a>
//       <a href="#news">Tuyển sinh</a>
//       <a href="#news">Nguyên cứu KH</a>
//       <a href="#news">Hoạt động</a>
//       <a href="#news">Lịch công tác</a>
//       <a href="#news">Sinh viên</a>
//       <a href="#news">Đoàn thể</a>
      
//     </div>
//   );
// }
// function Content() {
//   return (
//    <div className="content">
//     <img src="https://danavtc.edu.vn/Portals/0/EasyDNNNews/2004/1700440p1453EDNthumbimg-ts2022012.jpg">
//     </img>
//    </div>
//   );
// }

// -----------------------------------------------------------

function Member(props) {
  return (
    <div className="Member">
      <h2>{props.khoa}</h2>
      <h4>Lop: {props.lop}</h4>
    </div>
  )
};

class Member_state extends React.Component {
  constructor (props) {
    super(props) ;
    this.state = {
      khoa : "Cong nghe thong tin",
      lop : "PNV24A"
    };
  };
  doikhoa = () => {
    this.setState ({
      khoa : "du lich",
      lop : "PNV24B"
    })
  };

  render() { 
    return (
      <div>
        <h1>Khoa: {this.state.khoa}</h1>
        <h3>lop : {this.state.lop}</h3>
        <button type="button" onClick={this.doikhoa}>thay doi khoa theo khoa hoc</button>
      </div>
    )
  }
}

// ------------------------------------------------------------------------------------------

class Dem extends React.Component {
  constructor (props) {
    super(props) ;
    this.state = {
      so : 0
    };
  };
  tangso = () => {
    this.setState ({
      so : this.state.so+1
    })
  };
  render() {
    return (
      <div>
        <h1> Number : {this.state.so} </h1>
        <button type="button" onClick={this.tangso}>click</button>
      </div>
    )
  }
}

class Hinh_anh extends React.Component {
  constructor (props) {
    super(props) ;
    this.state = {
      img : 1
    };
  };
  thaydoiImg = () => {
    this.setState (
      {img : this.state.img+1}
    );
    // const divstyle = {
    //   color: 'red'
    // };
  };
  render() {
    const aistyle = {
      color: 'red',
      backgroundColor: 'green',
    };
    return (
      <div>
        <img src={`${this.state.img}.png`}></img>  <br></br> <br></br>
        <div style={aistyle}>
          <button type="button" onClick={this.thaydoiImg}>click</button>
        </div>
        
      </div>
    )
  }
}


class imageChanger extends React.Component {
  constructor (props) {
    super(props) ;
    this.state = {
      images : ['public/images/image_1','public/images/image_2','public/images/image_3','public/images/image_4']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex +1) % prevState.images.length,
    })); 
  } 
  render() {
    return (
      <div>
        <img src={this.state.images[this.state.currentImageIndex]} alt="display" />
        <button onClick={this.handleClick}>Change image</button>
      </div>
    );
  }
}

// ------------------------------------------------------

class Vongdoi extends React.Component {
  constructor (props) {
    super(props) ;
    this.state = ({lop: "pnv24a"})
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState ({lop: "pnv24b"})
    }, 5000)
  }
  render() {
    return (
      <h1>khoa học công nghệ thông tin lớp {this.state.lop}</h1>
    );
  }
}
class Vongdoi2 extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {so: 1};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState ({so:this.state.so+1})
    },5000)
  }
  render() {
    return (
      <h3>Số thứ tự tăng dần {this.state.so}</h3>
    );
  }
}


class Vonglap extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // khởi tạo state với giá trị ban đầu là 0
      number: 0,
    };
  }
  componentDidMount() { // sử dụng 'setInterval' để gọi một hàm mỗi giây và tăng giá trị của number trong state dần dần
    this.intervalId = setInterval(() => {
      if (this.state.number < 30) {
        this.setState(prevState => ({
          number: prevState.number + 1,
        }));
      }
      else { // clearInterval dùng để dừng việc tăng số
        clearInterval(this.intervalId);
      }
    },1000)
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return <h1>Số thứ tự tăng dần là: {this.state.number}</h1>;
  }
}

// -------------------------------------------------------------------------------

class ThietlapData extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      data : 0
    }
  };
  Ham_tudongtang() {
    this.setState({data: this.state.data + 1})
  }
  componentDidMount() {
    this.intervalId = setInterval (() =>
    this.Ham_tudongtang(),1000
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.data >= 10 ) {
      ReactDOM.unmountComponentAtNode(document.getElementById('data'));
    }
  };
  componentWillUnmount() {
    class ThietlapData extends React.Component {
      constructor (props) {
        super (props);
        this.state = {
          data : 0
        }
      }; 
    }
  };
  render() {
    return (
      <div>
        <h3>{this.state.data}</h3>
      </div>
    );
  }
}

// GetData from API

class AppData extends React.Component {
  constructor() {
      super();
      this.state = {data: []};
  }

  async componentDidMount() {
      const response = await fetch (`https://63a571e42a73744b008e23f7.mockapi.io/API/Hotel`);
      const json = await response.json();
      this.setState({data: json});
  }

  render() {
      return (
          <div>
              <ul>
                  {this.state.data.map(el => (
                      <li>
                          {el.id} : {el.name} : {el.price}
                      </li>
                  ))}
              </ul>
          </div>
      );
  }
}

// REACT FORM ***



function App() {
  return (
    <div>
      {/* <Header/>
      <Menu/>
      <Content/> */}

      {/* -------------------------- */}

{/* 
     <div>
      <Member khoa="khoa: Cong nghe thong tin" lop="PNV24A"/>
      <Member khoa="khoa: Cong nghe thong tin" lop="PNV24B"/>
     </div> */}

     {/* ---------------------------------- */}

     {/* <Member_state/>
     <Dem/>
     <imageChanger/>
     <Hinh_anh/> */}
     {/* <Vongdoi/>
     <Vongdoi2/>
     <Vonglap/> */}
     {/* <ThietlapData/> */}
     <AppData/>
    </div>
  );
}



export default App