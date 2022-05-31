// import React from 'react';

// function Header() {
//   return (
//     <div class="container">
//         <h1 class="bg-primary">I'm Home</h1>
//     </div>
//   )
// }

// export default Header;

// const Header = () => (<h1>I am header</h1>)

import React from "react";
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <>

        <div class="container">
          <div class="row">
            <div class="col-3 logo">
              <img style={{ width: "226px", height: "100px" }} src={"./img/hust.png"}></img>
            </div>
            <div class="col-7 align-self-center">
              <div class="text-adjs">
                <strong>ĐẠI HỌC BÁCH KHOA HÀ NỘI</strong>
                <br></br>
                <strong>TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong>
              </div>
              

            </div>

            <div class="col-2 align-self-center">
              <ul class="nav-right p-0 d-flex flex-column mb-0">
                <li class="img-example">
                  <ul class=" d-flex justify-content-evenly px-0">
                    <li><img src={"./img/vn.png"}></img></li>
                    <li><img src={"./img/gb.png"}></img></li>
                  </ul>
                </li>
                <li class="search-bar d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search"></input>
                  <button class="btn" type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>

        

        <div class="container-fluid px-0 mt-2 header-nav">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              {/* <a class="navbar-brand" href="#"></a> */}
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item d-flex align-items-center active">
                    <a class="nav-link nav-link-style" href="#">
                      Giới thiệu
                      <i class="fa-solid fa-angle-down icon-header"></i>
                      <span class="sr-only">(current)</span></a>

                  </li>

                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Khoa-Trung tâm
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>

                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Đào tạo
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>

                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Nghiên cứu
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>

                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Tuyển sinh
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>

                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Sinh viên
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>

                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Hợp tác đối ngoại
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>

                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Cựu sinh viên
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>

                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Tin tức-sự kiện
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>
                  <li class="nav-item d-flex align-items-center">
                    <a class="nav-link nav-link-style" href="#">
                      Tuyển dụng
                      <i class="fa-solid fa-angle-down icon-header"></i>
                    </a>

                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        
      </>
    )
  }
}

export default Header;