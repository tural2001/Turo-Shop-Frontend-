import React from 'react';
import Marquee from 'react-fast-marquee';

const Repair = () => {
  return (
    <div className="services-wrapper overflow-hidden">
      <div className="row d-flex">
        <div className="col-12 bg-light">
          <div className="d-flex justify-content-center py-5">
            <img
              src="https://content.artofmanliness.com/uploads/2020/03/car.jpg"
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
                  <td>
                    <a href="tel:+994 8721231" className="text-dark">
                      055-239-11-12
                    </a>
                  </td>
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
              Məsul və peşəkar komandamız maşınınızın hər hansı bir problemi ilə
              başa çıxmağı təmin edir. Müştəri məmnuniyyəti bizim əsas
              prioritetimizdir. Bizi seçərək maşınızın uzunmüddətli işləməsini
              təmin edə bilərsiniz. ən son texnologiyaları və təcrübəli
              təmirçiləri istifadə edirik.Müştərilərimizin tələblərini yerinə
              yetirmək üçün texnologiyaları istifadə edirik və keyfiyyətli
              xidmət təklif edirik. Komandamız müştərilərə yalnız güvənli,
              effektiv və sürətli xidmət təmin edir. Ən vacib vəziyyət, sizin
              məqsədinizi tam yerinə yetirmək üçün bütün imkanlarımızdan
              istifadə etməyimizdir.
            </p>
          </div>
          <div className="row py-3 bg-light mt-5">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee>
                  <div className="mx-4 w-25">
                    <img
                      src="https://media.ridex.de/360_photos/7999960/preview.jpg"
                      width="140px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://media.ridex.de/360_photos/12754689/preview.jpg"
                      width="90px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://media.ridex.de/360_photos/16349507/preview.jpg"
                      width="100px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://media.ridex.de/360_photos/15079243/preview.jpg"
                      width="110px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://media.ridex.de/360_photos/13643706/preview.jpg"
                      width="120px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://media.ridex.de/360_photos/8054694/preview.jpg"
                      width="140px"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://media.ridex.de/360_photos/7998985/preview.jpg"
                      width="150px"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h4 className="text-center mt-3">
              Təmir xidməti çərçivəsində müştərilərimizə aşağıdakı xidmətləri
              təqdim edirik:
            </h4>
            <ul className="mt-5 text-center lh-lg">
              <li className="border">
                1. Maşın mühərrik problemləri arxasında çeşitli səbəblər ola
                bilər və biz bu səbəbləri tapmaq üçün ən son texnologiyalardan
                istifadə edirik.
              </li>
              <li className="border bg-light">
                2. Problemin təyini və müalicəsi üçün təcrübəli
                mütəxəssislərimiz müştərinin xidmətindədir.
              </li>
              <li className="border">
                3. Mühərrik problemləri zamanı müştərilərimizin vaxtını qənaətli
                istifadə etməsi üçün sürətlə və effektiv şəkildə işləyirik.
              </li>
              <li className="border bg-light">
                4. Problemin müəyyən edilməsindən sonra, müştərimizə problemin
                nə olduğu və bütün əsas mövzular barədə ətraflı məlumat veririk.
              </li>
              <li className="border">
                5. Digər problemlər daxil olmaqla, avtomobillərin təmiri üçün
                təchizatlı mərkəzlərimizdə sürətli və keyfiyyətli xidmət təmin
                edirik.
              </li>
              <li className="border bg-light">
                6. Xərclərin səmərəliliyi üçün, təmir və bərpa işləri zamanı
                müştərilərimizə detallı hesabat və qiymət təklifləri veririk.
              </li>
              <li className="border">
                7. Maşınınızın mühərriki, təkər və digər sistemləri haqqında tam
                diagnostik sınaqlar aparırıq.
              </li>
              <li className="border bg-light">
                8. Biz, təmir və bərpa işləri zamanı, yalnız orijinal ehtiyat
                hissələri və əlavə aksesuarlar istifadə edirik.
              </li>
              <li className="border">
                9. Müştərilərimizə problemin həllinə necə kömək edəcəyimiz
                haqqında ətraflı məlumat vermək üçün müvafiq texniki təhsil
                almış kadrlarımız var.
              </li>
              <li className="border bg-light">
                10. Müştərilərimizin güvəninə malik olmaq, təmir və bərpa işləri
                zamanı birinci sinif xidmət təqdim etmək üçün çalışırıq.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair;
