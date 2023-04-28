import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { ReactDOM } from 'react';
import '../src/style.css';
import Head from './Components/header';
import Contents from './Components/content';



function Header(){
  return(
    <div className="container-fluid">
        <div className="row">
        <div className="col-sm-8">
      <div className="row">
    <div className="col-sm-4">
    <img className="logo" src="https://danavtc.edu.vn/Portals/0/logo.png?ver=2019-10-13-182116-600" alt="logo" />
    </div>
    <div className="col-sm-8" >
      <h3> <span> </span> TRƯỜNG CAO ĐẲNG NGHỀ ĐÀ NẴNG</h3>
      <h4 className="dana">DANANG VOCATIONAL TRAINING COLLEGE</h4>
      <p><i class="fa-solid fa-location-dot"></i> 99 Tô Hiến Thành, Sơn Trà, Đà Nẵng</p>
      <p> <i class="fa-solid fa-envelope"></i>danavtc@danavtc.edu.vn</p>
      <p><i class="fa-solid fa-phone"></i>02363.942.790 – 02363.940.946</p>

    </div>
  </div>
  </div>
  <div className="col-sm-4 search" >
  <p> Đăng nhập | Liên hệ</p>
  <input type="text" placeholder="Search.." name="search" />
  <button type="submit"><i className="fa fa-search"></i></button>
</div>

      </div>
</div>

  )
}

function Content() {
  return (
   <div className="content">
    <img src="https://danavtc.edu.vn/Portals/0/EasyDNNNews/2004/1700440p1453EDNthumbimg-ts2022012.jpg">
    </img>
   </div>
  );
}

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

  render() { return (
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
};

// REACT FORM ***
// b1 Tạo  state chứa các gtr của input khi tạo constructor
// b2 Bắt sự kiện onChange
// b3 Xây dựng hàm thay đổi state

class Forms extends React.Component {
  constructor (props) {
    super(props) ;
    this.state = {
      username:'',
    };
  }
  myChangeHandler = (event) => {
    this.setState({username:event.target.value});
  }
  render() {
    return (
      <form align = "center">
        <p>Nhập tên: </p>
        <input 
        type ='text'
        name = 'username'
        onChange = {this.myChangeHandler} 
        />
        <h1>XIN CHÀO {this.state.username}</h1>
      </form>
    )
  }
}


//-------------------------------------------------------------------

class Timkiem extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {hoten:'', lop:'',diachi:''};

    this.handleChange = this.handleChange.bind(this); // bind trả về bản sao của hàm handleChange
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit(event) {
    alert(`Đã lưu thông tin sinh viên, Ten la: ${this.state.hoten}, lop: ${this.state.lop}, Địa chỉ: ${this.state.diachi}`)
  }

render() {
  return (
    <form onSubmit={this.handleSubmit} align= 'center'>
    <h3>Your name</h3>
    <input type="text" name="hoten" onChange={this.handleChange} />

    <h3>Your address</h3>
    <input type="text" name="diachi" onChange={this.handleChange} />

    <h3>Your class</h3>
    <select name="lop" onChange={this.handleChange}>
      <option value="">-- Chọn lớp --</option>
      <option value="PNV24A">PNV24A</option>
      <option value="PNV24B">PNV24B</option>

    </select>

    <br /><br />
    <button type="submit">Submit</button>
    </form>
  );
}
}


//--------------------------------------------------------------------------

class TinhDiem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        diemToan: 0,
        diemLy: 0,
        diemHoa: 0,
        diemTrungBinh: 0,
        xepLoai: '',
      };
      this.handleDiemToanChange = this.handleDiemToanChange.bind(this);
      this.handleDiemLyChange = this.handleDiemLyChange.bind(this);
      this.handleDiemHoaChange = this.handleDiemHoaChange.bind(this);
      this.tinhDiemTrungBinh = this.tinhDiemTrungBinh.bind(this);
      this.xepLoaiHocSinh = this.xepLoaiHocSinh.bind(this);
    }
  
    handleDiemToanChange(event) {
      this.setState({ diemToan: Number(event.target.value) });
    }
  
    handleDiemLyChange(event) {
      this.setState({ diemLy: Number(event.target.value) });
    }
  
    handleDiemHoaChange(event) {
      this.setState({ diemHoa: Number(event.target.value) });
    }
  
    tinhDiemTrungBinh() {
      const { diemToan, diemLy, diemHoa } = this.state;
      const diemTong = diemToan + diemLy + diemHoa;
      const diemTB = diemTong / 3;
      this.setState({ diemTrungBinh: diemTB });
      this.xepLoaiHocSinh(diemTB);
    }
  
    xepLoaiHocSinh(diemTB) {
      let xepLoai = '';
      if (diemTB >= 8.5 && diemTB <= 10) {
        xepLoai = "Học sinh giỏi";
      } else if (diemTB >= 7 && diemTB < 8.5) {
        xepLoai = "Học sinh khá";
      } else if (diemTB >= 5 && diemTB < 7) {
        xepLoai = "Học sinh trung bình";
      } else {
        xepLoai = "Học sinh yếu";
      }
      this.setState({ xepLoai });
    }
  
    render() {
      const { diemToan, diemLy, diemHoa, diemTrungBinh, xepLoai } = this.state;
      return (
        <div align='center' className='headers'> 
          <div className='tinhdiem'>
            <h2>Tính điểm trung bình</h2> 
          </div> <br/> <br/>
          
          <label className='score'>
            Điểm thứ nhất:
            <input type="number" value={diemToan} onChange={this.handleDiemToanChange} /> <br/> <br/>
          </label>
          <br/> 
          <label className='score'>
            Điểm thứ hai:
            <input type="number" value={diemLy} onChange={this.handleDiemLyChange} /> <br/> <br/>
          </label>
          <br />
          <label className='score'>
            Điểm thứ ba:
            <input type="number" value={diemHoa} onChange={this.handleDiemHoaChange}/> <br/> <br/>
          </label>
          <br />
          <button onClick={this.tinhDiemTrungBinh}>Tính điểm trung bình</button> <br/> <br/>
          <br />
          <label>
            Điểm trung bình:
            <input type="text" value={diemTrungBinh.toFixed(2)} readOnly />
          </label>
          <br />
          <label>
            Xếp loại:
            <input type="text" value={xepLoai} readOnly />
          </label>
          </div>
      );
    }
  }




function App() {
  return (
    <div>  
     <Head/>
     <Contents/>
    </div>
  );
}


export default App