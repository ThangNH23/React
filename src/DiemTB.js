import { Component } from "react";

class TinhDiemTrungBinh extends React.Component {
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
        <div>
          <h2>Tính điểm trung bình và xếp loại học sinh</h2>
          <label>
            Điểm toán:
            <input type="number" value={diemToan} onChange={this.handleDiemToanChange} />
          </label>
          <br />
          <label>
            Điểm lý:
            <input type="number" value={diemLy} onChange={this.handleDiemLyChange} />
          </label>
          <br />
          <label>
            Điểm hóa:
            <input type="number" value={diemHoa} onChange={this.handleDiemHoaChange}/>
          </label>
          <br />
          <button onClick={this.tinhDiemTrungBinh}>Tính điểm trung bình</button>
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

export default DiemTB;