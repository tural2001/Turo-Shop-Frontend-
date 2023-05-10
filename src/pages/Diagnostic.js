import React from 'react';
import Marquee from 'react-fast-marquee';

const Diagnostic = () => {
  return (
    <div className="services-wrapper overflow-hidden">
      <div className="row d-flex">
        <div className="col-12 bg-light">
          <div className="d-flex justify-content-center py-5">
            <img
              src="https://fed.az/upload/news/61341.jpg"
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
              Diaqnostika komandası olarak müştərilərimizə yüksek keyfiyyətli
              avtomobil servis xidmətləri təqdim edirik. Profesional komandamız,
              ən son avtomobil diaqnostika və təmir texnologiyalarını tətbiq
              edərək müştərilərimizin maşınlarını təhlil edir və bir çox
              problemləri həll edir. Hər bir müştərimizə, maşınlarının effektiv
              işləməsinə və uzunömürlülüyünə diqqət yetirərək, ən yüksək
              səviyyədə xidmət göstərəcəyimizə söz veririk. Bizim üçün,
              müştərilərimizin təminatı və rəğbəti çox vacibdir.
            </p>
          </div>
          <div className="row py-5 bg-light mt-5">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper ">
                <Marquee className="">
                  <div className="mx-4 w-25">
                    <img src="images/opel.svg" width="80px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/bmw.svg" width="80px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/chrysler.svg" width="80px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/mercedes.svg" width="80px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/kia.svg" width="80px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/hyundai.svg" width="80px" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/romeo.svg" width="80px" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h4 className="text-center mt-3">
              Maşın diaqnostikası xidməti çərçivəsində müştərilərimizə aşağıdakı
              xidmətləri təqdim edirik:
            </h4>
            <ul className="mt-5 text-center lh-lg">
              <li className="border">
                1. Maşının əsas komponentlərinin və sistemlərinin diaqnostikası
              </li>
              <li className="border bg-light">
                2. Motor və transmissiya diaqnostikası
              </li>
              <li className="border">
                3. Elektronika və elektrik sistemlərinin yoxlanması
              </li>
              <li className="border bg-light">
                4. Hava süspansiyası və sürtünməli sistemlərin yoxlanması
              </li>
              <li className="border">
                5. Təyin edilən problemlərin səbəbinin təyini və təklif olunan
                çözümlər
              </li>
              <li className="border bg-light">
                6. ABS, ESP və s. kimi təhlükəsizlik sistemlərinin diaqnostikası
              </li>
              <li className="border">
                7. Dəyişdirilməsi tövsiyə olunan hissələrin siyahısı
              </li>
              <li className="border bg-light">
                8. Təklif olunan tamir və dəyişikliklərin haqqında məlumat
                vermək
              </li>
              <li className="border">
                9. Xəritə və sürtməli yol şərtlərinə əsasən təyin edilmiş
                hərəkət nəzarət sistemlərinin yoxlanması
              </li>
              <li className="border bg-light">
                10. Diqqət mərkəzində olan prioritet problemlərinin müvafiq
                qaydada təmiri və ya dəyişdirilməsi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;
