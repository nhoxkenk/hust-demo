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

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={"./img/carousel/slide-show-1.png"} class="d-block w-100" alt=""></img>
            </div>
            <div class="carousel-item">
              <img src={"./img/carousel/slide-show-1.png"} class="d-block w-100" alt=""></img>
            </div>
            <div class="carousel-item">
              <img src={"./img/carousel/slide-show-1.png"} class="d-block w-100" alt=""></img>
            </div>
            <div class="carousel-item">
              <img src={"./img/carousel/slide-show-1.png"} class="d-block w-100" alt=""></img>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </>
    )
  }
}

export default Header;