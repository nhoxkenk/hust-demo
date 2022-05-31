import React from 'react';
import './Main.css'

class Main extends React.Component {
    render() {
        return (
            <>

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

                <div class='new-section'>
                    <div class='row section-row mx-auto'>
                        <div class='col-12 first-col'>
                            <h2>Tin mới nhất</h2>
                        </div>
                        <div class='col-12 second-col pb-0'>
                            <div class='row'>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Vòng chung kết BKAI-NAVER CHALLENGE 2022</h5>
                                            <p class="card-text">BKAI-NAVER Challenge 2022 là hoạt động thuộc dự
                                                án hợp tác nghiên cứu AI giữa Trung tâm BKAI, Trường CNTT&TT...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE</h5>
                                            <p class="card-text">Ngày 14/05/2022, Innovation Day 2022 đã diễn ra thành công với rất nhiều
                                                hoạt động, trải nghiệm thú vị, bao gồm: Tọa...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</h5>
                                            <p class="card-text">Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT,
                                                Đại học Bách khoa Hà Nội. Hoàn cảnh...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">️TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ</h5>
                                            <p class="card-text">️Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự
                                                đồng ý của Đoàn thanh niên Trường Đại...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class='section-bg fill'>
                        <div class='section-overlay fill'></div>
                    </div>
                    <div class='section-row mx-auto relative'>
                        <div class='text-center'>
                            <span>Xem thêm tin tức</span>
                        </div>
                    </div>
                </div>

                <div class="section ">
                    <div class='section-bg fill bg-load'>
                        <div class='section-overlay-2 fill'></div>
                    </div>
                    <div class='new-section'>
                        <div class='row section-row mx-auto'>
                            <div class='col-12 first-col relative text-light'>
                                <h2>Sự kiện mới nhất</h2>
                            </div>
                            <div class='col-12 second-col pb-0'>
                                <div class='row'>
                                    <div class='col'>
                                        <div class="card" >
                                            <img src={"./img/new-section/new-section-5.jpg"} class="card-img-top"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">Lễ ra mắt "Trung tâm công nghệ và Giải pháp chuyển đổi"</h5>
                                                <p class="card-text">
                                                    <span>Thời gian: 9:45 AM - 01/06/2022</span>
                                                    <span>Địa điểm: Phòng 404, nhà B1, Trường Đại học</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col'>
                                        <div class="card" >
                                            <img src={"./img/new-section/new-section-5.jpg"} class="card-img-top"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">INNOVATION DAY 2022</h5>
                                                <p class="card-text">
                                                    <span>Thời gian: 9:45 AM - 01/06/2022</span>
                                                    <span>Địa điểm: Phòng 404, nhà B1, Trường Đại học</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col'>
                                        <div class="card" >
                                            <img src={"./img/new-section/new-section-5.jpg"} class="card-img-top"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">CUỘC THI TÌM KIẾM Ý TƯỞNG SÁNG TẠO SINH VIÊN 2022</h5>
                                                <p class="card-text">
                                                    <span>Thời gian: 9:45 AM - 01/06/2022</span>
                                                    <span>Địa điểm: Phòng 404, nhà B1, Trường Đại học</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col'>
                                        <div class="card" >
                                            <img src={"./img/new-section/new-section-5.jpg"} class="card-img-top"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">️HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG LAI</h5>
                                                <p class="card-text">️
                                                    <span>Thời gian: 9:45 AM - 01/06/2022</span>
                                                    <span>Địa điểm: Phòng 404, nhà B1, Trường Đại học</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="section">
                    <div class='section-bg fill'>
                        <div class='section-overlay fill'></div>
                    </div>
                    <div class='section-row mx-auto relative'>
                        <div class='text-center'>
                            <span>Xem thêm sự kiện</span>
                        </div>
                    </div>
                </div>


                <div class='new-section '>
                    <div class='row section-row mx-auto justify-content-center'>
                        <div class='col-9 first-col'>
                            <h2>ĐÀO TẠO - TUYỂN SINH</h2>
                            <p class='text-center'>
                                Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS – Vương quốc Anh) đã đánh
                                giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường
                                đang đảm nhận thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1
                                tại Việt Nam.
                            </p>
                        </div>

                        <div class='col-6 second-col pb-0'>
                            <div class='col-inner'>
                                <div class='row'>
                                    <div class="col-6">
                                        <div class='img-inner'>
                                            <img src={"./img/section-model-2/section-1.jpg"} ></img>
                                        </div>
                                    </div>
                                    <div class="col-6 cols-inner">
                                        <h5>CHƯƠNG TRÌNH ĐÀO TẠO</h5>
                                        <p>Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học,
                                            ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn
                                            60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc vào 3
                                            nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và Trí tuệ
                                            Nhân tạo…
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class='col-6 second-col pb-0'>
                            <div class='col-inner'>
                                <div class='row'>
                                    <div class="col-6">
                                        <div class='img-inner'>
                                            <img src={"./img/section-model-2/section-2.jpg"} ></img>
                                        </div>
                                    </div>
                                    <div class="col-6 cols-inner">
                                        <h5>KIẾN TẠO TƯƠNG LAI VỚI SoICT</h5>
                                        <p>Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh
                                            được chất lượng trên trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương
                                            lai với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia công nghệ, có khả năng
                                            làm chủ và dẫn dắt sự phát triển KHCN nước nhà…
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class='section'>
                    <div class='section-bg fill bg-load-2'>
                        <div class='section-overlay-2 fill'></div>
                    </div>
                    <div class='new-section text-light relative'>
                        <div class='row section-row mx-auto justify-content-center'>
                            <div class='col-9 first-col'>
                                <h2>HỢP TÁC ĐỐI NGOẠI</h2>
                                <p class='text-center'>
                                    Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc
                                    tế và hợp tác doanh nghiệp để nâng cao chất lượng các hoạt
                                    giảng dạy, nghiên cứu và chuyển giao công nghệ.
                                </p>
                            </div>

                            <div class='col-6 second-col pb-0'>
                                <div class='col-inner bg-light text-dark'>
                                    <div class='row'>
                                        <div class="col-6">
                                            <div class='img-inner'>
                                                <img src={"./img/section-model-2/section-3.png"} ></img>
                                            </div>
                                        </div>
                                        <div class="col-6 cols-inner">
                                            <h5>CÁC TRƯỜNG ĐỐI TÁC</h5>
                                            <p class='lh-2'>Trường CNTT&TT có quan hệ hợp tác với nhiều trường đại học và
                                                viện nghiên cứu uy tín trên Thế giới. Thông qua hợp tác, sinh
                                                viên của Trường có cơ hội học tập, nghiên cứu tại các trường đối
                                                tác thông qua các học bổng trao đổi sinh viên, cũng như các dự án
                                                hợp tác nghiên cứu. Trường hợp tác với các đại học lớn ở Châu Âu,
                                                Nhật Bản… để cung cấp cho sinh viên các chương trình đào tạo song
                                                bằng (double degree), một hình thức “du học” kinh tế và hiệu quả…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class='col-6 second-col pb-0'>
                                <div class='col-inner bg-light text-dark'>
                                    <div class='row'>
                                        <div class="col-6">
                                            <div class='img-inner'>
                                                <img src={"./img/section-model-2/section-3.png"} ></img>
                                            </div>
                                        </div>
                                        <div class="col-6 cols-inner">
                                            <h5>DOANH NGHIỆP ĐỐI TÁC</h5>
                                            <p>Đào tạo và nghiên cứu rất cần sự hợp tác thực chất với cộng đồng doanh nghiệp.
                                                Trường hiện đang duy trì hợp tác với mạng lưới gồm hơn 130 doanh nghiệp CNTT
                                                trong và ngoài nước, trong đó có thể kể tới HEDSPI Supporting Partner Network
                                                (HEDSPI-SPN), mạng lưới hỗ trợ sinh viên tăng cường ngoại ngữ, phát triển kỹ năng mềm,
                                                cũng như làm quen với văn hóa DN để gia tăng sức cạnh tranh trong thị trường lao động quốc tế…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class='new-section'>
                    <div class='row section-row mx-auto'>
                        <div class='col-12 first-col'>
                            <h2>CỰU SINH VIÊN</h2>
                        </div>
                        <div class='col-12 second-col pb-0'>
                            <div class='row'>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/section-3/section3-2.jpg"} class="card-img-top"></img>
                                        <div class="card-body card-bg">
                                            <h5 class="card-title">Hoàng Việt Anh - Chỉ có một tình yêu duy nhất</h5>
                                            <p class="card-text">
                                                Gia nhập FPT năm 1993, từ khi còn là sinh viên năm 3 khoa CNTT  ĐH Bách...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/section-3/section3-2.jpg"} class="card-img-top"></img>
                                        <div class="card-body card-bg">
                                            <h5 class="card-title">Lữ Thành Long - Thủ lĩnh công nghệ</h5>
                                            <p class="card-text">
                                                Nhắc đến ngôi trường đã gắn bó suốt 5 năm đại học, doanh nhân Lữ Thành ...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/section-3/section3-2.jpg"} class="card-img-top"></img>
                                        <div class="card-body card-bg">
                                            <h5 class="card-title">Nguyễn Hà Đông - Cha đẻ Flappy Bird "náo loạn" Thế giới</h5>
                                            <p class="card-text">
                                                Tạp chí công nghệ Cnet của Mỹ công bố danh sách 25 ứng dụng có ảnh hưởng ...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/section-3/section3-2.jpg"} class="card-img-top"></img>
                                        <div class="card-body card-bg ">
                                            <h5 class="card-title">️Hùng Trần - Tấm gương khởi nghiệp người Việt tại Silicon Valley</h5>
                                            <p class="card-text">️
                                                "Gãi đúng chỗ ngứa" của người dùng Trần Việt Hùng là cựu nghiên cứu sinh ...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='new-section-2'>
                    <div class='row section-row mx-auto  justify-content-center'>
                        <div class='col-12 first-col'>
                            <h2 class='text-light'>NÓI VỀ SoICT</h2>
                        </div>
                        <div class='col-9 second-col pb-0'>
                            <div class='row'>
                                <div class='icon-box col'>
                                    <img width={'150'} height={'250'} src={"./img/icon-box/icon-box-1.jpg"}></img>
                                </div>
                                <div class='col'>
                                    <blockquote>
                                        <p class='text-light text-para'>
                                            Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến thức kỹ thuật
                                            sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm vụ nào được giao, mà còn được
                                            đánh giá cao bởi tư duy phản biện và sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội
                                            nói chung và sinh viên Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng,
                                            và trở thành thành viên chủ chốt trong nhiều dự án cốt lõi của Trung tâm. Trường
                                            và SVMC đã củng cố mối quan hệ bền chặt, được thể hiện thông qua văn bản hợp tác
                                            chính thức, mở đường cho các hoạt động tài trợ tăng cường năng lực, cũng như
                                            học bổng cho sinh viên. Hiện tại, hơn 25% nhân viên của SVMC đã tốt nghiệp từ
                                            ĐHBK Hà Nội, trong đó có Trường CNTT&TT, và ...
                                        </p>
                                    </blockquote>

                                    <p class='text-light'>
                                        <strong>
                                            Ông Kim In Soo
                                            <br></br>
                                        </strong>
                                        Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='new-section-3'>
                    <div class='row section-row mx-auto'>
                        <div class='col-12 first-col'>
                            <h2>VỀ CHÚNG TÔI</h2>
                        </div>
                        <div class='col-12 second-col pb-0'>
                            <div class='row'>
                                <div class='col-2 second-col text-align-center'>
                                    <p class='m-0'>
                                        <span class='text-fs-1'>QS ranking 2022</span>
                                    </p>

                                    <p>
                                        <strong>
                                            <span class='text-fs-2'>401 - 450</span>
                                        </strong>
                                    </p>

                                    <p>
                                        <span class='text-fs-3'>
                                            trên Thế giới trong nhóm ngành Khoa học Máy tính và Hệ thống Thông tin
                                        </span>
                                    </p>
                                </div>
                                <div class='col-3 second-col text-align-center'>
                                    <p class='m-0'>
                                        <span class='text-fs-1'>Sinh viên thuộc TOP</span>
                                    </p>

                                    <p>
                                        <strong>
                                            <span class='text-fs-2'>1%</span>
                                        </strong>
                                    </p>

                                    <p>
                                        <span class='text-fs-3'>
                                            điểm cao nhất Khối A Toàn quốc mùa Tuyển sinh 2019
                                        </span>
                                    </p>
                                </div>
                                <div class='col-2 second-col text-align-center'>
                                    <p class='m-0'>
                                        <span class='text-fs-1'>Sinh viên</span>
                                    </p>

                                    <p>
                                        <strong>
                                            <span class='text-fs-2'>4.000+</span>
                                        </strong>
                                    </p>

                                    <p>
                                        <span class='text-fs-3'>

                                        </span>
                                    </p>
                                </div>
                                <div class='col-3 second-col text-align-center'>
                                    <p class='m-0'>
                                        <span class='text-fs-1'>Chương trình đào tạo</span>
                                    </p>

                                    <p>
                                        <strong>
                                            <span class='text-fs-2'>17+</span>
                                        </strong>
                                    </p>

                                    <p>
                                        <span class='text-fs-3'>
                                            thuộc các hệ đào tạo cử nhân, kỹ sư, thạc sỹ khoa học, tiến sỹ
                                        </span>
                                    </p>
                                </div>
                                <div class='col-2 second-col text-align-center'>
                                    <p class='m-0'>
                                        <span class='text-fs-1'>Đối tác</span>
                                    </p>

                                    <p>
                                        <strong>
                                            <span class='text-fs-2'>200+</span>
                                        </strong>
                                    </p>

                                    <p>
                                        <span class='text-fs-3'>
                                            các trường đại học, viện nghiên cứu, tập đoàn, công ty trong nước và quốc tế
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='temp'></div>

                <div class="section">
                    <div class='section-bg fill'>
                        <div class='section-overlay fill'></div>
                    </div>
                    <div class='section-row mx-auto relative'>
                        <div class='text-center'>
                            <span>Xem thêm video</span>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Main;