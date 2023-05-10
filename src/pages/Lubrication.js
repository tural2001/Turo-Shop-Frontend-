import React from 'react';
import Marquee from 'react-fast-marquee';

const Lubrication = () => {
  return (
    <div className="services-wrapper overflow-hidden">
      <div className="row d-flex">
        <div className="col-12 bg-light">
          <div className="d-flex justify-content-center py-5">
            <img
              src="https://blog.napacanada.com/wp-content/uploads/2023/03/how-to-do-an-oil-change-comment-faire-une-vidange-dhuile.jpg"
              className="rounded-pill"
              alt=""
              width={700}
            />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-6  justify-content-center  mx-5">
            <h2 className="text-center">Kollektivimiz</h2>
            <table className="table table-lg border mt-5">
              <thead className="bg-light">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Ad Siyahısı</th>
                  <th scope="col">Maşın Siyahısı</th>
                  <th scope="col">Əlaqə Nömrəsi</th>
                  <th scope="col">Məkan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Məmmədov Tural</td>
                  <td>Opel , Nissan ,Bmw</td>
                  <td>
                    <a href="tel:+994 8721231" className="text-dark">
                      055-239-11-12
                    </a>
                  </td>
                  <td>Sumqayit</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Məmmədov Tural</td>
                  <td>Opel , Nissan ,Bmw</td>
                  <td>055-239-11-12</td>
                  <td>Bakı</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Məmmədov Tural</td>
                  <td>Opel , Nissan ,Bmw</td>
                  <td>
                    <a href="tel:+994 8721231" className="text-dark">
                      055-239-11-12
                    </a>
                  </td>
                  <td>Gəncə</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-5">
            <h2 className="text-center ">Üstünlüklərimiz</h2>
            <p className="d-flex justify-content-center mx-4 mt-5">
              Dəyərli müştərilər, bizim yağ dəyişmə xidmətimiz yalnız motorunuza
              yeni yağ doldurmaq deyil, aynı zamanda filtrlərinizi və digər
              avtomobil sisteminin hissələrini yoxlamaq da daxildir. Keyfiyyətli
              yağlarımız və mütəxəssis kadromuz ilə maşınızı sərfəli və effektiv
              edirik. Siz də bizimlə əlaqə saxlayaraq maşınızın ömrünü
              artırın.Məqsədimiz, sizin maşınızın mükəmməl performansı və
              uzunömürlüyüdür. Yağ dəyişmə xidmətimiz sürətli, effektiv və
              sərfəlidir. Hər zaman müştəri təcrübəsini qarşılıqlı münasibət,
              səmərəli qiymətləndirmə və yüksək keyfiyyətli işlər təmin edirik.
              Bizi seçin və maşınızı gələcəyə hazırlayın.
            </p>
          </div>
          <div className="row py-3 bg-light mt-5">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.svg" width="140px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.svg" width="100px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.svg" width="110px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.svg" width="120px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.svg" width="140px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.svg" width="90px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.svg" width="150px" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h4 className="text-center mt-3">
              Yağ dəyişmə xidməti çərçivəsində müştərilərimizə aşağıdakı
              xidmətləri təqdim edirik:
            </h4>
            <ul className="mt-5 text-center lh-lg">
              <li className="border">
                1. Biz, maşınınızın motorunun daha uzun ömürlü olması üçün
                yalnız keyfiyyətli və sertifikatlı məhsullar istifadə edirik.
              </li>
              <li className="border bg-light">
                2. Uyğun qiymət və mövcud olan vaxtınızı qənaətli və optimal
                şəkildə istifadə etmək üçün sürətli xidmət təklif edirik.
              </li>
              <li className="border">
                3. Biz, hər növ maşın üçün müxtəlif yağlar təmin edirik və
                təklif etdiyimiz yağlar maşınınızın mühərrik sisteminin
                tələblərinə tam uyğun gəlir.
              </li>
              <li className="border bg-light">
                4. Bizim ekspert kadromuz sizin maşınınızın yağını dəyişmək üçün
                fərdi yanaşır və onu optimal performansı üçün ən yaxşı qaydada
                tənzimləyir.
              </li>
              <li className="border">
                5. Yağ dəyişmə xidmətimizdən istifadə etdiyiniz zaman, sürücülük
                təcrübənizi və sürətlərinizi maksimum səviyyədə qoruyacaqsınız.
              </li>
              <li className="border bg-light">
                6. Bizim məqsədimiz sizin maşınınızın performansını artırmaq və
                təhlükəsizliyini təmin etməkdir.
              </li>
              <li className="border">
                7. Yağ dəyişmə işi zamanı həm maşınınızın yağı, həm də filtrləri
                dəyişirik ki, bu da maşınınızın daha uzun müddət sağlam və
                xərclərinizi azaldar.
              </li>
              <li className="border bg-light">
                8. Biz sizin maşınınızın yağını dəyişmək üçün sizə zəmanət
                veririk ki, əməliyyatın keyfiyyəti mükəmməl olacaq və sizin
                maşınınız daha uzun ömürlü olacaq.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lubrication;
