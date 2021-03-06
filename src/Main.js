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
                            <h2>Tin m???i nh???t</h2>
                        </div>
                        <div class='col-12 second-col pb-0'>
                            <div class='row'>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">V??ng chung k???t BKAI-NAVER CHALLENGE 2022</h5>
                                            <p class="card-text">BKAI-NAVER Challenge 2022 l?? ho???t ?????ng thu???c d???
                                                ??n h???p t??c nghi??n c???u AI gi???a Trung t??m BKAI, Tr?????ng CNTT&TT...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">INNOVATION DAY V?? CU???C THI S??NG T???O ?? T?????NG SINH VI??N CREATIVE</h5>
                                            <p class="card-text">Ng??y 14/05/2022, Innovation Day 2022 ???? di???n ra th??nh c??ng v???i r???t nhi???u
                                                ho???t ?????ng, tr???i nghi???m th?? v???, bao g???m: T???a...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">SOICT ?????ng h??nh v?? h??? tr??? sinh vi??n Nguy???n V??n Quy???n</h5>
                                            <p class="card-text">Nguy???n V??n Quy???n l?? m???t sinh vi??n l???p KHMT04 K65 thu???c Tr?????ng CNTT&TT,
                                                ?????i h???c B??ch khoa H?? N???i. Ho??n c???nh...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/new-section/new-section-1.jpg"} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">???T???NG K???T ?????I H???I ?????I BI???U ??O??N THANH NI??N TR?????NG C??NG NGH???</h5>
                                            <p class="card-text">???V??o h???i 14h ng??y 07/05/2022 t???i H???i tr?????ng d???c t??a nh?? B1, ???????c s???
                                                ?????ng ?? c???a ??o??n thanh ni??n Tr?????ng ?????i...</p>
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
                            <span>Xem th??m tin t???c</span>
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
                                <h2>S??? ki???n m???i nh???t</h2>
                            </div>
                            <div class='col-12 second-col pb-0'>
                                <div class='row'>
                                    <div class='col'>
                                        <div class="card" >
                                            <img src={"./img/new-section/new-section-5.jpg"} class="card-img-top"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">L??? ra m???t "Trung t??m c??ng ngh??? v?? Gi???i ph??p chuy???n ?????i"</h5>
                                                <p class="card-text">
                                                    <span>Th???i gian: 9:45 AM - 01/06/2022</span>
                                                    <span>?????a ??i???m: Ph??ng 404, nh?? B1, Tr?????ng ?????i h???c</span>
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
                                                    <span>Th???i gian: 9:45 AM - 01/06/2022</span>
                                                    <span>?????a ??i???m: Ph??ng 404, nh?? B1, Tr?????ng ?????i h???c</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col'>
                                        <div class="card" >
                                            <img src={"./img/new-section/new-section-5.jpg"} class="card-img-top"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">CU???C THI T??M KI???M ?? T?????NG S??NG T???O SINH VI??N 2022</h5>
                                                <p class="card-text">
                                                    <span>Th???i gian: 9:45 AM - 01/06/2022</span>
                                                    <span>?????a ??i???m: Ph??ng 404, nh?? B1, Tr?????ng ?????i h???c</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col'>
                                        <div class="card" >
                                            <img src={"./img/new-section/new-section-5.jpg"} class="card-img-top"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">???H???I TH???O KHOA H???C V??? C??C XU TH??? HI???N T???I V?? T????NG LAI</h5>
                                                <p class="card-text">???
                                                    <span>Th???i gian: 9:45 AM - 01/06/2022</span>
                                                    <span>?????a ??i???m: Ph??ng 404, nh?? B1, Tr?????ng ?????i h???c</span>
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
                            <span>Xem th??m s??? ki???n</span>
                        </div>
                    </div>
                </div>


                <div class='new-section '>
                    <div class='row section-row mx-auto justify-content-center'>
                        <div class='col-9 first-col'>
                            <h2>????O T???O - TUY???N SINH</h2>
                            <p class='text-center'>
                                N??m 2020, T??? ch???c Gi??o d???c Quacquarelli Symonds (vi???t t???t QS ??? V????ng qu???c Anh) ???? ????nh
                                gi?? v?? x???p ch???t l?????ng ????o t???o v?? nghi??n c???u c???a ??HBK H?? N???i trong c??c l??nh v???c m?? Tr?????ng
                                ??ang ?????m nh???n thu???c nh??m h???ng t??? 451 ?????n 500 tr??n to??n Th??? gi???i, ti???p t???c gi??? v??? tr?? s??? 1
                                t???i Vi???t Nam.
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
                                        <h5>CH????NG TR??NH ????O T???O</h5>
                                        <p>Tr?????ng hi???n ??ang cung c???p h??n 20 ch????ng tr??nh ????o t???o ch???t l?????ng cao thu???c 3 h??? ?????i h???c,
                                            ThS v?? TS; trong ????, c?? ch????ng tr??nh ???????c th??? tr?????ng lao ?????ng qu???c t??? ????n nh???n v???i h??n
                                            60% sinh vi??n t???t nghi???p l??m vi???c ??? n?????c ngo??i. C??c ch????ng tr??nh ????o t???o thu???c v??o 3
                                            nh??m ng??nh ch??nh: Khoa h???c M??y t??nh, K??? thu???t M??y t??nh, v?? Khoa h???c D??? li???u v?? Tr?? tu???
                                            Nh??n t???o???
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
                                        <h5>KI???N T???O T????NG LAI V???I SoICT</h5>
                                        <p>Th????ng hi???u K??? s?? CNTT B??ch khoa ???? v?????t ra kh???i bi??n gi???i n?????c nh??, v?? ng??y c??ng ch???ng minh
                                            ???????c ch???t l?????ng tr??n tr?????ng Qu???c t???. Trong l??n s??ng Chuy???n ?????i s???, l???a ch???n ph??t tri???n t????ng
                                            lai v???i SoICT s??? ??em l???i cho c??c b???n c?? h???i tr??? th??nh c??c chuy??n gia c??ng ngh???, c?? kh??? n??ng
                                            l??m ch??? v?? d???n d???t s??? ph??t tri???n KHCN n?????c nh?????
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
                                <h2>H???P T??C ?????I NGO???I</h2>
                                <p class='text-center'>
                                    Tr?????ng CNTT&TT lu??n coi tr???ng c??c ho???t ?????ng h???p t??c qu???c
                                    t??? v?? h???p t??c doanh nghi???p ????? n??ng cao ch???t l?????ng c??c ho???t
                                    gi???ng d???y, nghi??n c???u v?? chuy???n giao c??ng ngh???.
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
                                            <h5>C??C TR?????NG ?????I T??C</h5>
                                            <p class='lh-2'>Tr?????ng CNTT&TT c?? quan h??? h???p t??c v???i nhi???u tr?????ng ?????i h???c v??
                                                vi???n nghi??n c???u uy t??n tr??n Th??? gi???i. Th??ng qua h???p t??c, sinh
                                                vi??n c???a Tr?????ng c?? c?? h???i h???c t???p, nghi??n c???u t???i c??c tr?????ng ?????i
                                                t??c th??ng qua c??c h???c b???ng trao ?????i sinh vi??n, c??ng nh?? c??c d??? ??n
                                                h???p t??c nghi??n c???u. Tr?????ng h???p t??c v???i c??c ?????i h???c l???n ??? Ch??u ??u,
                                                Nh???t B???n??? ????? cung c???p cho sinh vi??n c??c ch????ng tr??nh ????o t???o song
                                                b???ng (double degree), m???t h??nh th???c ???du h???c??? kinh t??? v?? hi???u qu??????
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
                                            <h5>DOANH NGHI???P ?????I T??C</h5>
                                            <p>????o t???o v?? nghi??n c???u r???t c???n s??? h???p t??c th???c ch???t v???i c???ng ?????ng doanh nghi???p.
                                                Tr?????ng hi???n ??ang duy tr?? h???p t??c v???i m???ng l?????i g???m h??n 130 doanh nghi???p CNTT
                                                trong v?? ngo??i n?????c, trong ???? c?? th??? k??? t???i HEDSPI Supporting Partner Network
                                                (HEDSPI-SPN), m???ng l?????i h??? tr??? sinh vi??n t??ng c?????ng ngo???i ng???, ph??t tri???n k??? n??ng m???m,
                                                c??ng nh?? l??m quen v???i v??n h??a DN ????? gia t??ng s???c c???nh tranh trong th??? tr?????ng lao ?????ng qu???c t??????
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
                            <h2>C???U SINH VI??N</h2>
                        </div>
                        <div class='col-12 second-col pb-0'>
                            <div class='row'>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/section-3/section3-2.jpg"} class="card-img-top"></img>
                                        <div class="card-body card-bg">
                                            <h5 class="card-title">Ho??ng Vi???t Anh - Ch??? c?? m???t t??nh y??u duy nh???t</h5>
                                            <p class="card-text">
                                                Gia nh???p FPT n??m 1993, t??? khi c??n l?? sinh vi??n n??m 3 khoa CNTT  ??H B??ch...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/section-3/section3-2.jpg"} class="card-img-top"></img>
                                        <div class="card-body card-bg">
                                            <h5 class="card-title">L??? Th??nh Long - Th??? l??nh c??ng ngh???</h5>
                                            <p class="card-text">
                                                Nh???c ?????n ng??i tr?????ng ???? g???n b?? su???t 5 n??m ?????i h???c, doanh nh??n L??? Th??nh ...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/section-3/section3-2.jpg"} class="card-img-top"></img>
                                        <div class="card-body card-bg">
                                            <h5 class="card-title">Nguy???n H?? ????ng - Cha ????? Flappy Bird "n??o lo???n" Th??? gi???i</h5>
                                            <p class="card-text">
                                                T???p ch?? c??ng ngh??? Cnet c???a M??? c??ng b??? danh s??ch 25 ???ng d???ng c?? ???nh h?????ng ...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col'>
                                    <div class="card" >
                                        <img src={"./img/section-3/section3-2.jpg"} class="card-img-top"></img>
                                        <div class="card-body card-bg ">
                                            <h5 class="card-title">???H??ng Tr???n - T???m g????ng kh???i nghi???p ng?????i Vi???t t???i Silicon Valley</h5>
                                            <p class="card-text">???
                                                "G??i ????ng ch??? ng???a" c???a ng?????i d??ng Tr???n Vi???t H??ng l?? c???u nghi??n c???u sinh ...
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
                            <h2 class='text-light'>N??I V??? SoICT</h2>
                        </div>
                        <div class='col-9 second-col pb-0'>
                            <div class='row'>
                                <div class='icon-box col'>
                                    <img width={'150'} height={'250'} src={"./img/icon-box/icon-box-1.jpg"}></img>
                                </div>
                                <div class='col'>
                                    <blockquote>
                                        <p class='text-light text-para'>
                                            Sinh vi??n Tr?????ng CNTT&TT kh??ng ch??? ???????c bi???t ?????n v???i n???n t???ng ki???n th???c k??? thu???t
                                            s???c b??n v?? s??? th??ch ???ng tuy???t v???i v???i b???t k??? nhi???m v??? n??o ???????c giao, m?? c??n ???????c
                                            ????nh gi?? cao b???i t?? duy ph???n bi???n v?? s??ng t???o. Trong SVMC, sinh vi??n ??HBK H?? N???i
                                            n??i chung v?? sinh vi??n Tr?????ng CNTT&TT n??i ri??ng lu??n gi??? c??c v??? tr?? quan tr???ng,
                                            v?? tr??? th??nh th??nh vi??n ch??? ch???t trong nhi???u d??? ??n c???t l??i c???a Trung t??m. Tr?????ng
                                            v?? SVMC ???? c???ng c??? m???i quan h??? b???n ch???t, ???????c th??? hi???n th??ng qua v??n b???n h???p t??c
                                            ch??nh th???c, m??? ???????ng cho c??c ho???t ?????ng t??i tr??? t??ng c?????ng n??ng l???c, c??ng nh??
                                            h???c b???ng cho sinh vi??n. Hi???n t???i, h??n 25% nh??n vi??n c???a SVMC ???? t???t nghi???p t???
                                            ??HBK H?? N???i, trong ???? c?? Tr?????ng CNTT&TT, v?? ...
                                        </p>
                                    </blockquote>

                                    <p class='text-light'>
                                        <strong>
                                            ??ng Kim In Soo
                                            <br></br>
                                        </strong>
                                        T???ng Gi??m ?????c Trung t??m Nghi??n c???u v?? Ph??t tri???n ??i???n tho???i Di ?????ng Samsung Vi???t Nam (SVMC)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='new-section-3'>
                    <div class='row section-row mx-auto'>
                        <div class='col-12 first-col'>
                            <h2>V??? CH??NG T??I</h2>
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
                                            tr??n Th??? gi???i trong nh??m ng??nh Khoa h???c M??y t??nh v?? H??? th???ng Th??ng tin
                                        </span>
                                    </p>
                                </div>
                                <div class='col-3 second-col text-align-center'>
                                    <p class='m-0'>
                                        <span class='text-fs-1'>Sinh vi??n thu???c TOP</span>
                                    </p>

                                    <p>
                                        <strong>
                                            <span class='text-fs-2'>1%</span>
                                        </strong>
                                    </p>

                                    <p>
                                        <span class='text-fs-3'>
                                            ??i???m cao nh???t Kh???i A To??n qu???c m??a Tuy???n sinh 2019
                                        </span>
                                    </p>
                                </div>
                                <div class='col-2 second-col text-align-center'>
                                    <p class='m-0'>
                                        <span class='text-fs-1'>Sinh vi??n</span>
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
                                        <span class='text-fs-1'>Ch????ng tr??nh ????o t???o</span>
                                    </p>

                                    <p>
                                        <strong>
                                            <span class='text-fs-2'>17+</span>
                                        </strong>
                                    </p>

                                    <p>
                                        <span class='text-fs-3'>
                                            thu???c c??c h??? ????o t???o c??? nh??n, k??? s??, th???c s??? khoa h???c, ti???n s???
                                        </span>
                                    </p>
                                </div>
                                <div class='col-2 second-col text-align-center'>
                                    <p class='m-0'>
                                        <span class='text-fs-1'>?????i t??c</span>
                                    </p>

                                    <p>
                                        <strong>
                                            <span class='text-fs-2'>200+</span>
                                        </strong>
                                    </p>

                                    <p>
                                        <span class='text-fs-3'>
                                            c??c tr?????ng ?????i h???c, vi???n nghi??n c???u, t???p ??o??n, c??ng ty trong n?????c v?? qu???c t???
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
                            <span>Xem th??m video</span>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Main;