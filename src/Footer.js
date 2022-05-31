import React from 'react'
import './Footer.css'

class Footer extends React.Component{
    render() {
        return(
            <>
                <footer class="footer">
                    <div class='footer-widget'>
                        <div class='container'>
                            <div class='row'>
                                <div class='col footer-col'>
                                    <span class='fw-bold'>KHOA - TRUNG TÂM</span>
                                    <div class='divine'></div>
                                    <ul class='p-0 lh-1'>
                                        <li><a>Khoa học Máy tính</a></li>
                                        <li><a>Kỹ thuật Máy tính</a></li>
                                        <li><a>Trung tâm Cyber Security</a></li>
                                        <li><a>Trung tâm Đổi mới Sáng tạo</a></li>
                                        <li><a>Trung tâm Máy tính và Thực hành</a></li>
                                        <li><a>Trung tậm Nghiên cứu Quốc tế về Định vị sử dụng vệ tinh (NAVIS)</a></li>
                                        <li><a>Trung tâm Nghiên cứu Quốc tế về Trí tuệ nhân tạo</a></li>
                                        <li><a>Văn Phòng Trường</a></li>
                                    </ul>
                                </div>
                                
                                <div class='col footer-col'>
                                <span class='fw-bold'>CHƯƠNG TRÌNH ĐÀO TẠO</span>
                                    <div class='divine'></div>
                                    <ul class='p-0 lh-1'>
                                        <li><a>Chương trình Việt Nhật (HEDSPI)</a></li>
                                        <li><a>Chương trình Global ICT</a></li>
                                        <li><a>Chương trình Khoa học dữ liệu và trí tuệ nhân tạo</a></li>
                                        <li><a>Chương trình Thạc sỹ Chuyển đổi số</a></li>
                                        <li><a>Các chương trình đại học</a></li>
                                        <li><a>Các chương trình thạc sỹ</a></li>
                                        <li><a>Các chương trình tiến sỹ</a></li>
                                        <li><a>Các chương trình đào tạo ngắn hạn</a></li>
                                    </ul>
                                </div>
                                <div class='col footer-col'>
                                <span class='fw-bold'>HỆ THỐNG VÀ TÀI NGUYÊN</span>
                                    <div class='divine'></div>
                                    <ul class='p-0 lh-1'>
                                        <li><a>Hệ thống Quản lý Đào tạo</a></li>
                                        <li><a>Hệ thống Quản lý Hợp tác Doanh nghiệp</a></li>
                                        <li><a>Các mẫu biểu dành cho sinh viên Viện</a></li>
                                    </ul>
                                </div>
                                <div class='col footer-col'>
                                    <p>
                                        <img src={"./img/footer-logo.png"} width={204} height={45}></img>
                                    </p>
                                    <p class='mb-0'>
                                        <i class="fa-solid fa-phone"> </i>
                                        (+84) 24 3869 2463
                                    </p>
                                    <p class='mb-0'>
                                        <i class="fa-solid fa-envelope"> </i>
                                        vp@soict.hust.edu.vn
                                    </p>
                                    <p class='mb-0'>
                                        P. 505 – Nhà B1 – Đại học Bách khoa Hà Nội
                                    </p>
                                    <p class='mb-0'>
                                        Số 1 Đại Cồ Việt – Hai Bà Trưng – Hà Nội
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='footer-widget-2'>
                        <div class='container container-footer'>
                            <div>
                                
                                Copyright © 
                                <strong>Trường Công nghệ Thông tin và Truyền thông</strong>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer