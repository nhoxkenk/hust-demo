import React from 'react'
import './News.css'

class News extends React.Component {
    render() {
        return (
            <>
                <main>
                    <div class="container-new container">
                        <div class="row">
                            <span>

                                <a>Trang chủ </a>
                                {'>>'}
                                <span>tin tức</span>
                            </span>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <div>
                                    <h2 class='mb-3'>Tin tức – Sự kiện</h2>
                                    <ul class='p-0'>
                                        <li class='py-1'>Tin tức</li>
                                        <li class='py-1'>– Thông báo</li>
                                        <li class='py-1'>– Tin bài</li>
                                        <li class='py-1'>Sự kiện</li>
                                        <li class='py-1'>– Sự kiện sắp diễn ra</li>
                                        <li class='py-1'>– Sự kiện đã diễn ra</li>
                                        <li class='py-1'>SoICT Talks</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-9 px-3 pt-4">
                                <div class="row">
                                    <div class="col-12 px-2 pb-5">
                                        <img src={"./img/a.jpg"} width={'100%'} ></img>
                                    </div>
                                    <div class="col-9">
                                        <div class="row">
                                            <div class=" col-sm-6 pb-4">
                                                <div class="card">
                                                    <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                                    <div class="card-body px-0">
                                                        <h5 class="card-title mb-0">VÒNG CHUNG KẾT BKAI-NAVER CHALLENGE 2022</h5>
                                                        <h6 class="card-subtitle my-1 text-muted ">31 Tháng Năm, 2022</h6>
                                                        <p class="card-text">BKAI-NAVER Challenge 2022 là hoạt động thuộc dự án hợp tác nghiên cứu AI giữa...</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class=" col-sm-6 pb-4">
                                                <div class="card">
                                                    <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                                    <div class="card-body px-0">
                                                        <h5 class="card-title mb-0">INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE IDEA CHALLENGE 2022</h5>
                                                        <h6 class="card-subtitle my-1 text-muted ">31 Tháng Năm, 2022</h6>
                                                        <p class="card-text">Ngày 14/05/2022, Innovation Day 2022 đã diễn ra thành công với rất nhiều hoạt động,...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" col-sm-6 pb-4">
                                                <div class="card">
                                                    <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                                    <div class="card-body px-0">
                                                        <h5 class="card-title mb-0">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</h5>
                                                        <h6 class="card-subtitle my-1 text-muted ">31 Tháng Năm, 2022</h6>
                                                        <p class="card-text">Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" col-sm-6 pb-4">
                                                <div class="card">
                                                    <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                                    <div class="card-body px-0">
                                                        <h5 class="card-title mb-0">️TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG – NHIỆM KỲ 2022-2024</h5>
                                                        <h6 class="card-subtitle my-1 text-muted ">31 Tháng Năm, 2022</h6>
                                                        <p class="card-text">Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" col-sm-6 pb-4">
                                                <div class="card">
                                                    <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                                    <div class="card-body px-0">
                                                        <h5 class="card-title mb-0">Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ hội Đào tạo, việc làm và trải nghiệm môi trường làm việc chuyên nghiệp</h5>
                                                        <h6 class="card-subtitle my-1 text-muted ">31 Tháng Năm, 2022</h6>
                                                        <p class="card-text">NẮM BẮT CƠ HỘI TRỞ THÀNH KỸ SƯ AI VINGROUP Nếu bạn đang băn khoăn...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" col-sm-6 pb-4">
                                                <div class="card">
                                                    <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                                    <div class="card-body px-0">
                                                        <h5 class="card-title mb-0">HỘI NGHỊ SINH VIÊN NGHIÊN CỨU KHOA HỌC 2021-2022</h5>
                                                        <h6 class="card-subtitle my-1 text-muted ">31 Tháng Năm, 2022</h6>
                                                        <p class="card-text">I. MỤC ĐÍCH Hội nghị Sinh viên nghiên cứu khoa học (SV NCKH) là sự kiện...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" col-sm-6 pb-4">
                                                <div class="card">
                                                    <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                                    <div class="card-body px-0">
                                                        <h5 class="card-title mb-0">THÔNG BÁO VỀ VIỆC TỔ CHỨC TRẢ HỒ SƠ VÀ BẰNG TỐT NGHIỆP CHO SINH VIÊN TRƯỜNG CNTT&TT KỲ 2021.1B</h5>
                                                        <h6 class="card-subtitle my-1 text-muted ">31 Tháng Năm, 2022</h6>
                                                        <p class="card-text">Ngày 15/05/2022, Trường CNTT&TT và các đơn vị phối hợp tổ chức trả bằng và...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class=" col-sm-6 pb-4">
                                                <div class="card">
                                                    <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                                    <div class="card-body px-0">
                                                        <h5 class="card-title mb-0">THÔNG BÁO VỀ THỰC TẬP DOANH NGHIỆP KỲ 2021.3</h5>
                                                        <h6 class="card-subtitle my-1 text-muted ">31 Tháng Năm, 2022</h6>
                                                        <p class="card-text">Trường CNTT&TT thông báo quy trình đăng ký Thực tập Doanh nghiệp (TTDN) kỳ hè...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                    <span class='fw-bold'>TIN NỔI BẬT</span>
                                    <div class='divine-news'></div>
                                    <ul class='p-0'>
                                        <li class='mb-2 lh-2'><a>THÔNG BÁO TUYỂN GIẢNG VIÊN NGÀNH CÔNG NGHỆ THÔNG TIN</a></li>
                                        <li class='mb-2 lh-2'><a>INVITATION TO JOIN BK.AI RESEARCH GROUPS 2021</a></li>
                                        <li class='mb-2 lh-2'><a>THÔNG BÁO VỀ ĐĂNG KÝ LỚP HỌC PHẦN THỰC TẬP DOANH NGHIỆP KỲ HÈ 2020.3</a></li>
                                        <li class='mb-2 lh-2'><a>TĂNG CƯỜNG LỢI THẾ CẠNH TRANH DỰA TRÊN CÔNG NGHỆ SỐ, TẠO ĐỘT PHÁ TRONG MỌI MẶT HOẠT ĐỘNG</a></li>
                                        <li class='mb-2 lh-2'><a>ĐẦU TƯ CHO NCKH VÀ ĐT TRÌNH ĐỘ CAO TRONG TRƯỜNG ĐẠI HỌC: ĐIỂM ĐỘT PHÁ TRONG QUÁ TRÌNH CHUYỂN ĐỔI SỐ TẠI VN</a></li>
                                        <li class='mb-2 lh-2'><a>TUYỂN DỤNG 2020</a></li>
                                        <li class='mb-2 lh-2'><a>SOICT YEAR-END REVIEW 2019</a></li>
                                        <li class='mb-2 lh-2'><a>HỘI THẢO QUỐC TẾ THƯỜNG NIÊN SOICT - 10 NĂM MỘT CHẶNG ĐƯỜNG</a></li>
                                        <li class='mb-2 lh-2'><a>HUST-SOICT'S TALK, SỐ 2: BẢN GIAO HƯỞNG MÙA THU VỀ KHỞI NGHIỆP!</a></li>
                                        <li class='mb-2 lh-2'><a>DẤU ẤN CNTT BÁCH KHOA TRONG 15 MÙA NHÂN TÀI ĐẤT VIỆT</a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default News