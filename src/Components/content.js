import React from 'react';
import { ReactDOM } from 'react';
import { useFormik } from "formik";
import "./css/web.css";

export default function Contents() {
    return (
        <div className='Container'>
            
            <h1 className='title'>Đây là những sinh viên của tôi</h1>
            <div class="row">
            <div class="col-md-4">
                <div class="thumbnail">
                <a href="">
                    <img src="" alt="Lights" style="width:100%">
                    <div class="caption">
                    <p>Lorem ipsum...</p>
                    </div>
                </a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                <a href="/w3images/nature.jpg">
                    <img src="/w3images/nature.jpg" alt="Nature" style="width:100%">
                    <div class="caption">
                    <p>Lorem ipsum...</p>
                    </div>
                </a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                <a href="/w3images/fjords.jpg">
                    <img src="/w3images/fjords.jpg" alt="Fjords" style="width:100%">
                    <div class="caption">
                    <p>Lorem ipsum...</p>
                    </div>
                </a>
                </div>
            </div>
            </div>
        </div>
    )
}