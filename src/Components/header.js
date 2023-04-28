// import logo from '../logo.svg';
import React from 'react';
import { ReactDOM } from 'react';
import "./css/web.css";



export default function Head(){
  return(
    <div className="container-fluid">
        <div className="row">
        <div className="col-sm-8">
      <div className="row">
    <div className="col-sm-4">
    <img className="logo" src="images.png" alt="logo" />
    </div>
    <div className="col-sm-8" id='title'>
      <h3> TRƯỜNG ĐẠI HỌC CHUYÊN DẠY VỀ KỸ NĂNG NÉM NATE</h3>
      <h4 className="dana">DANANG VOCATIONAL TRAINING COLLEGE</h4>
      <div className='address'>
        <p><i class="fa-solid fa-location-dot"></i> 99 Tô Hiến Thành, Sơn Trà, Đà Nẵng </p>
        <p> <i class="fa-solid fa-envelope"></i> danavtc@danavtc.edu.vn</p>
        <p><i class="fa-solid fa-phone"></i> 02363.942.790 – 02363.940.946</p>
      </div>
    </div>
  </div>
  </div>
<div className="col-sm-4 search" id='search'>
  <input type="text" placeholder="Search.." name="search" />
  <button type="submit"><i className="fa fa-search"></i></button>
</div>
      </div>
      <Menu/>
</div>

  )
}

function Menu() {
    return (
      <div className="navbar">
        <a href="#home">Trang chủ</a>
        <a href="#news">Giới thiệu</a>
        <a href="#news">Khoa - Phòng</a>
        <a href="#news">Đào tạo</a>
        <a href="#news">Tuyển sinh</a>
        <a href="#news">Nguyên cứu KH</a>
        <a href="#news">Hoạt động</a>
        <a href="#news">Lịch công tác</a>
        <a href="#news">Sinh viên</a>
        <a href="#news">Đoàn thể</a>
      </div>
    );
  }
