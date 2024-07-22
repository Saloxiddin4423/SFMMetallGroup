let lenguageValue = document.getElementById("lenguageValue");
let home = document.getElementById("home");
let about = document.getElementById("about");
let servicess = document.getElementById("servicess");
let portfolio = document.getElementById("portfolio");
let team = document.getElementById("team");
let contact = document.getElementById("contact");
let contactbtn = document.getElementById("contactbtn");
let lazer = document.getElementById("lazer");
let metall = document.getElementById("metall");
let bizhaqimizda = document.getElementById("bizhaqimizda");
let textAbout = document.getElementById("textAbout");
let kategoria = document.getElementById("kategoria");
let hamkorlar = document.getElementById("hamkorlar");
let Micropul = document.getElementById("Micropul");
let TOTAL = document.getElementById("TOTAL");
let bitzer = document.getElementById("bitzer");
let vk = document.getElementById("vk");
let faoliyati = document.getElementById("faoliyati");
let faoliyatiText = document.getElementById("faoliyatiText");
let servicesss = document.getElementById("servicesss");
let intro = document.getElementById("intro");
let faq = document.getElementById("faq");
let info = document.getElementById("info");
let con = document.getElementById("con");
let foot = document.getElementById("foot");
// let bizhaqimizda = document.getElementById("bizhaqimizda");
// let bizhaqimizda = document.getElementById("bizhaqimizda");
// let bizhaqimizda = document.getElementById("bizhaqimizda");
// let bizhaqimizda = document.getElementById("bizhaqimizda");

function lenguage() {
  console.log(lenguageValue.value);
  if (lenguageValue.value == "1") {
    home.innerHTML = "Bosh sahifa";
    about.innerHTML = "Biz haqimizda";
    servicess.innerHTML = "Xizmat ko'rsatish";
    portfolio.innerHTML = "Portfolio";
    team.innerHTML = "Bizning jamoa";
    contact.innerHTML = "Biz bilan bog'lanish";
    contactbtn.innerHTML = "Biz bilan bog'lanish";
    lazer.innerHTML = "Lazer orqali metalga ishlov berish";
    metall.innerHTML = "Metalni bukish va unga ishlov berish";
    bizhaqimizda.innerHTML = "Biz haqimizda";
    textAbout.innerHTML = `"NEW SFM METALL GROUP" tashkiloti 2023 yil tashkil topib qisqa vaqt oralig'ida ko'plab ishlarni amalga oshirdi. Yuqori sifat bilan server shkaflari,optik krosslar. <br />
Kichik do'kon stellajlaridan-yuk ko'taruvchanligi 1T dan yuqori bo'lgan yig'ma konstruksiya. <br />
Dekorativ konstruksiyalar:metaldan yasalgan kichik konstruksiya-salfetnitsa,perila,zinalar,ilgichlar,barcha turdagi jihoz yoki shitlar. <br />
LOFT yo'nalishda barcha turdagi mebellarni mijozlarimiz xohishidan kelib chiqib tayyorlab beramiz. <br />
Sovutish tizimi:biznesingiz uchun siz xohlagan dizayn ko'rinishida va kerakli sovutish darajasidagi vetrina xalodilniki,boshqa maxsulotlar saqlash uchun katta muzlatish skladi va avtomobilingiz bortini sizga kerakli darajada sovutish tizimi bilan ta'minlab,moslashtirib,tayyorlab beramiz!`;
    kategoria.innerHTML = ` <p>Bizda amalga oshiriladigan xizmatlar turlari</p>
              <ul>
                <li>
                  <i class="ri-check-double-line"></i>Lazer orqali metalga
                  ishlov berish
                </li>
                <li>
                  <i class="ri-check-double-line"></i>Changlatiladigan kraska
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Payvandlash barcha
                  turlari
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Metalni bukish va unga
                  ishlov berish
                </li>
              </ul>
             `;
    hamkorlar.innerHTML = ` <h3>
                  Bizning hamkorlarimiz orasida
                  <strong>Quydagi tashkilotlar mavjud</strong>
                </h3>`;
    Micropul.innerHTML =
      "Kukunli bo'yoq bugungi kunda eng zamonaviy, samarali va iqtisodiy bo'yash usullaridan biri hisoblanadi. Ushbu texnologiya erituvchilardan foydalanmasdan sirtlarni bo'yash usuli bo'lib, buning natijasida eng yuqori sifatli dekorativ, himoya va dekorativ polimer qoplamalar olinadi. Ushbu bo'yoq polimer kukuniga asoslangan. Nima uchun biz MICROPULni tanlaymiz? -Samaradorlik - Foydalanish oson - Ish tezligini oshirish - Ranglarning katta tanlovi -Tabiatga zarar keltirmaydigan - Yuzaki mustahkamlik va chidamlili";
    TOTAL.innerHTML =
      "Keng assortiment, minimal narxlar va hamma uchun individual yondashuv. Ular bizning professional vositaga bo'lgan ehtiyojimizni tezda qondiradilar. Ular sotadigan asboblarning buzilishi yoki ishdan chiqishining barcha holatlarini mutlaqo ko'rib chiqadilar. Kompaniyamiz faoliyati davomida biz TOTAL asbobining haqiqiy sifatiga amin bo'ldik.";
    bitzer.innerHTML = ` Sovutgich va konditsioner sanoatidagi muammolar
                        xilma-xildir, shuning uchun biz BITZER sovutish
                        agregatlarini ko'p yillik tajribamiz davomida qo'llab
                        kelamiz.Tijorat sovutgichlari sohasidagi BITZER
                        kompressorlari ko'chadagi haroratdan qat'i nazar, butun
                        yil davomida mahsulotlarni kerakli haroratda muzlatib
                        beradi. Faqat sovutish zanjirlari mutlaq ishonchlilik
                        bilan ishlaganda, oziq-ovqat sifati va saqlash muddati
                        pasaymaydi. BITZER mahsulotlari haroratga sezgir bo'lgan
                        tovarlarni mijozga eng yuqori sifat darajasida yetib
                        borishini ta'minlashga yordam beradi.`;
    vk.innerHTML = `"VKMEBEL" biz uchun yuqori sifatdagi yog'och va DSP mahsulotlarini yetkazib beradilar.Biz mijozlarimiz uchun faqat sifatli maxsulotlarni ravo ko'ramiz.`;
    faoliyati.innerHTML = "FAOLIYATIMIZ YO'NALISHLARI";
    faoliyatiText.innerHTML =
      "Bizning maqsadimiz - sizning talablaringizni boshqarish va sizga eng yaxshi yechimlarni taklif qilishdir.";
    servicesss.innerHTML = `
     <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Bizning afzalliklarimiz</h2>
            <p>
              Mijozlar uchun yuqori xizmat darajasini ta'minlash, ularning
              talablari va istaklariga tezlik bilan javob berish, ularni
              qondirish va uning o'ziga xos injiniring va xizmatni taklif etish
            </p>
          </div>

          <div class="row">
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4>
                  <a href="">Uskunalar xizmatlarining to‘liq assortimenti</a>
                </h4>
                <p>
                  Bu assortiment kompaniyadagi barcha mahsulotlar va xizmatlarni
                  o'z ichiga oladi.
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4><a href="">Qarorlarni oqilona iqtisodiyoti</a></h4>
                <p>
                  Bu qarorlar qonunlar, siyosat, iqtisodiy vaqtinchalik,
                  moliyaviy risklar, sarmoyaviy tajribalar va boshqa
                  o'zgaruvchan omillar asosida olingan tahlillar va prognozlar
                  bilan moslashtiriladi.
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-tachometer"></i></div>
                <h4><a href="">Individual chegirma tizimi</a></h4>
                <p>
                  Bu tizimlar, shaxsiy chegirmalar yoki bonuslar orqali
                  mijozlarga takliflar berishga imkoniyat yaratadi.
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Kafolat va kafolatdan keyingi xizmat</a></h4>
                <p>
                  "Kafolatdan keyingi xizmat" kafolatni olgan soha yoki mahsulot
                  uchun taklif etilgan qo'shimcha xizmatlar.
                </p>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">O‘rnatish va ishga tushirish ishlari </a></h4>
                <p>
                  Bizda o'z mahsulotlarimizni o'rnatish va ishga tushirib berish
                  xizmatini ham o'z mijozlarimizga taklif qilamiz
                </p>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Servis xizmatlar</a></h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>`;
    intro.innerHTML = ` <h2 class="text-center">Photo Gallery</h2>
              <p class="text-center">
                Bu yerda siz biz amalga oshira oladigan ishlar bilan tanishib
                chiqishingiz mumkin
              </p>`;
    faq.innerHTML = `  <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Eng ko'p beriladigan savolar</h2>
          </div>

          <div class="faq-list">
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  class="collapse"
                  data-bs-target="#faq-list-1"
                  >Qayerda joylashgansizlar?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-1"
                  class="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Toshkent sh.Sergeli t.Qubay tepa MFY.Saadiy ko'chasi,6-uy
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  class="collapsed"
                  >Tayyor maxsulotingiz bormi?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-2"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Biz har bir mijoz uchun talablari va individual g'oyalarni
                    inobatga olgan holda buyurtma asosida ishlab chiqaramiz.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  class="collapsed"
                  >Buyurtmani qanchalar tez tayyorlash mumkin?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-3"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Buyurtmaning tayyorlanish usuli,qiyinchiliklari va qancha
                    miqdorda ekanligini inobatga olgan holda mijoz bilan
                    kelishiladi va maqullanadi.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  class="collapsed"
                  >Sizda ishlab chiqarilgan maxsulotni o'rnatib berish xizmati
                  mavjudmi? <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-4"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Albatta mavjud! <br />
                    Biz ishlab chiqargan maxsulotimizni kerakli joyga olib borib
                    hamda o'rnatib berish xizmati ham mavjud.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="500">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  class="collapsed"
                  >Qanday yo'nalishlarda ish olib borasiz?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-5"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <ul>
                    <li>Tarmoq apparatlari</li>
                    <li>Sanoatda kerakli bo'ladigan sovutish tizimi</li>
                    <li>LOFT yo'nalishdagi mebellar</li>
                    <li>Barcha turdagi temir qalqonlar</li>
                    <li>
                      Temirdan yasalishi kerak bo'lgan barcha turdagi
                      konstruksiyalar.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>`;
    info.innerHTML = ` <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Manzil:</h4>
                  <p>
                    Toshkent sh.Sergeli t Qubay tepa MFY Saadiy ko'chasi ,6-uy
                  </p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>newsfmmetallgroup@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Telfon:</h4>
                  <p>+998770133344</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                  style="border: 0; width: 100%; height: 290px"
                  allowfullscreen
                ></iframe>
              </div>`;
    con.innerHTML = "BIZ BILAN BOG'LANISH";
    foot.innerHTML = ` <div id="foot" class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>SFM Metall group</h3>
              <p>
                Toshkent sh.Sergeli t <br />
                Qubay tepa MFY<br />
                Saadiy ko'chasi ,6-uy <br /><br />
                <strong>Phone:</strong> +998770133344<br />
                <strong>Email:</strong>newsfmmetallgroup@gmail.com<br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Foydali havolalar</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Bosh sahifa </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Biz haqimizda</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Xizmat ko'rsatish</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Xizmat ko'rsatish shartlari</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Bizning xizmatlar</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Lazer orqali metalga ishlov berish</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Changlatiladigan kraska</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Payvandlash barcha turlarit</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Metalni bukish va unga ishlov berish</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Bizning ijtimoiy tarmoqlarimiz</h4>
              <p>Bizni ijtimoiy tarmoqlarda ham kuzatib boring!</p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"
                  ><i class="bx bxl-instagram"></i
                ></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>`;
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
  } else if (lenguageValue.value == "2") {
    home.innerHTML = "Home";
    about.innerHTML = "About";
    servicess.innerHTML = "Services";
    portfolio.innerHTML = "Portfolio";
    team.innerHTML = "Team";
    contact.innerHTML = "Contact";
    contactbtn.innerHTML = "Contact";
    lazer.innerHTML = "Laser metal processing";
    metall.innerHTML = "Metal bending and processing";
    bizhaqimizda.innerHTML = "About US";
    textAbout.innerHTML = `"NEW SFM METALL GROUP" organization has done a lot of work in a short period of time since its establishment in 2023. High quality server cabinets, optical crossovers.
Small shop racks-prefab structure with load capacity above 1T.
Decorative constructions: small constructions made of metal - napkin holder, railing, stairs, hangers, all kinds of equipment or ceilings.
We prepare all types of furniture in the LOFT direction based on the wishes of our customers.
Refrigeration system: we will provide, adapt and prepare a display cooler in the design you want for your business and with the required cooling level, a large freezing warehouse for storing other products, and a cooling system for your vehicle at the level you need!`;
    kategoria.innerHTML = ` <p>Types of services we provide</p>
              <ul>
                <li>
                  <i class="ri-check-double-line"></i>To metal by laser
                   processing
                </li>
                <li>
                  <i class="ri-check-double-line"></i>Pollinating kraska
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Welding all
                   types
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Metal bending and flour
                   processing
                </li>
              </ul>
              <a href="#" class="btn-learn-more">More information</a>`;
    hamkorlar.innerHTML = ` <h3>
                  Our partners
                  <strong>the following</strong>
                </h3>`;
    Micropul.innerHTML =
      "Powder paint is one of the most modern, effective and economical painting methods today. This technology is a method of painting surfaces without the use of solvents, as a result of which the highest quality decorative, protective and decorative polymer coatings are obtained. This paint is based on polymer powder. Why do we choose MICROPUL? -Efficiency - Easy to use - Increase work speed - Large selection of colors - Environmentally friendly - Surface strength and durability";
    TOTAL.innerHTML =
      "A wide range, minimum prices and an individual approach for everyone. They quickly satisfy our need for a professional tool. They absolutely handle all cases of damage or failure of the devices they sell. During the activity of our company, we were convinced of the real quality of the TOTAL tool.";
    bitzer.innerHTML = `Challenges in the Refrigeration and Air Conditioning Industry
                         is diverse, so we BITZER cooling
                         aggregates using our many years of experience
                         BITZER in the field of commercial refrigerators
                         compressors, regardless of the temperature on the street, the whole
                         freezing products at the required temperature throughout the year
                         will give. Only cooling chains absolute reliability
                         when working with food quality and shelf life
                         does not decrease. BITZER products are temperature sensitive
                         goods reach the customer at the highest quality level
                         helps to ensure the progress.`;
    vk.innerHTML = `"VKMEBEL" supplies high-quality wood and chipboard products for us. We provide only quality products for our customers.`;
    faoliyati.innerHTML = "AREAS OF OUR ACTIVITY";
    faoliyatiText.innerHTML =
      "Our goal is to manage your requirements and offer you the best solutions.";
    servicesss.innerHTML = ` <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Our advantages</h2>
            <p>
              Ensuring a high level of service for customers, their
               quickly respond to their demands and wishes
               meet and offer its unique engineering and service
            </p>
          </div>

          <div class="row">
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4>
                  <a href="">Full range of equipment services</a>
                </h4>
                <p>
                 This assortment includes all products and services of the company
                   includes.
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4><a href="">Rational economics of decisions</a></h4>
                <p>
                 These decisions are laws, politics, economic temporal,
                   financial risks, investment experiences and others
                   analysis and forecasts based on variable factors
                   is compatible with
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-tachometer"></i></div>
                <h4><a href="">Individual discount system</a></h4>
                <p>
                 This is through systems, personal discounts or bonuses
                   provides an opportunity to make offers to customers.
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Warranty and post-warranty service</a></h4>
                <p>
                "After-warranty service" is the field or product that received the warranty
                   additional services offered for
                </p>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Installation and commissioning </a></h4>
                <p>
                We have our own products to install and run
                   We also offer this service to our customers
                </p>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Service services</a></h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>`;
    intro.innerHTML = ` <h2 class="text-center">Photo Gallery</h2>
              <p class="text-center">
              Here you can find out what we can do
                 you can exit
              </p>`;
    faq.innerHTML = `  <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Frequently asked questions</h2>
          </div>

          <div class="faq-list">
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  class="collapse"
                  data-bs-target="#faq-list-1"
                  >Where are you located?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-1"
                  class="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                   Tashkent city, Sergeli district, Kubay tepa MFY, Saadiy street, 6th house
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  class="collapsed"
                  >Do you have a finished product?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-2"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                   We have requirements and individual ideas for each customer
                     We produce to order.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  class="collapsed"
                  >How quickly can an order be prepared?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-3"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                   How to prepare the order, difficulties and how much
                     with the customer, taking into account the amount
                     agreed and approved.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  class="collapsed"
                  >Installation service for your manufactured product
                   is there <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-4"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                  Of course there is! <br />
                     Taking our manufactured product to the right place
                     and installation service is also available.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="500">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  class="collapsed"
                  >What areas do you work in?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-5"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <ul>
                  <li>Network hardware</li>
                     <li>Cooling system that will be needed in industry</li>
                     <li>Furniture in LOFT direction</li>
                     <li>All types of iron shields</li>
                     <li>
                       All types that should be made of iron
                       constructions.
                     </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>`;
    info.innerHTML = ` <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Address:</h4>
                  <p>
                    6th house, MFY Saadiy street, Sergeli t. Qubay tepa, Tashkent city
                  </p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>newsfmmetallgroup@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Phone:</h4>
                  <p>+998770133344</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                  style="border: 0; width: 100%; height: 290px"
                  allowfullscreen
                ></iframe>
              </div>`;
    con.innerHTML = "CONTACT US";
    foot.innerHTML = ` <div id="foot" class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>SFM Metall group</h3>
              <p>
               Tashkent sh. Sergeli t <br />
                 Kubay Tepa MFY<br />
                 Saadiy Street, 6th <br /><br />
                <strong>Phone:</strong> +998770133344<br />
                <strong>Email:</strong>newsfmmetallgroup@gmail.com<br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Homepage </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">about Us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Laser metal processing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Pollinating kraska</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">All types of welding</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Metal bending and processing</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our social networks</h4>
              <p>Follow us on social media too!</p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"
                  ><i class="bx bxl-instagram"></i
                ></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>`;
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
  } else if (lenguageValue.value == "3") {
    home.innerHTML = "Домашняя страница";
    about.innerHTML = "O нас";
    servicess.innerHTML = "Услуги";
    portfolio.innerHTML = "портфолио";
    team.innerHTML = "Команда";
    contact.innerHTML = "Контакт";
    contactbtn.innerHTML = "Контакт";
    lazer.innerHTML = "Лазерная обработка металла";
    metall.innerHTML = "Гибка и обработка металла";
    bizhaqimizda.innerHTML = "O нас";
    textAbout.innerHTML = `Организация «NEW SFM METALL GROUP» проделала большую работу за короткий период времени с момента своего создания в 2023 году. Высококачественные серверные шкафы, оптические кроссоверы.
Малые торговые стеллажи-сборная конструкция грузоподъемностью более 1т.
Декоративные конструкции: небольшие конструкции из металла – салфетницы, перила, лестницы, вешалки, всевозможное оборудование или потолки.
Все виды мебели в направлении ЛОФТ мы изготавливаем исходя из пожеланий наших клиентов.
Холодильная система: мы предоставим, адаптируем и подготовим витринный холодильник в нужном Вам исполнении для Вашего бизнеса и с необходимым уровнем охлаждения, большой морозильный склад для хранения других продуктов, а также систему охлаждения Вашего автомобиля на нужном Вам уровне!`;
    kategoria.innerHTML = ` <p>Виды услуг, которые мы предоставляем</p>
              <ul>
                <li>
                  <i class="ri-check-double-line"></i>Лазерная обработка металла
                </li>
                <li>
                  <i class="ri-check-double-line"></i>Опыляющая краска
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Все виды сварки
                </li>
                <li>
                  <i class="ri-check-double-line"></i>Metalni bukish va unga ishlov berish
                </li>
              </ul>
              <a href="#" class="btn-learn-more">Больше информации</a>`;
    hamkorlar.innerHTML = ` <h3>
                  Наши 
                  <strong>партнеры</strong>
                </h3>`;
    Micropul.innerHTML =
      "Порошковая краска на сегодняшний день является одним из самых современных, эффективных и экономичных способов покраски. Данная технология представляет собой метод окраски поверхностей без применения растворителей, в результате которого получаются декоративно-защитно-декоративные полимерные покрытия высочайшего качества. Эта краска основана на полимерном порошке. Почему мы выбираем МИКРОПУЛ? -Эффективность - Простота в использовании - Увеличение скорости работы - Большой выбор цветов - Экологичность - Прочность и долговечность поверхности";
    TOTAL.innerHTML =
      "Широкий ассортимент, минимальные цены и индивидуальный подход к каждому. Они быстро удовлетворяют нашу потребность в профессиональном инструменте. Они берут на себя абсолютно все случаи повреждения или выхода из строя продаваемых ими устройств. За время деятельности нашей компании мы убедились в настоящем качестве инструмента TOTAL.";
    bitzer.innerHTML = `Проблемы в отрасли холодильного оборудования и кондиционирования воздуха
                         разнообразен, поэтому мы охлаждаем BITZER
                         агрегаты, используя наш многолетний опыт
                         BITZER в сфере коммерческих холодильников
                         компрессоры, независимо от температуры на улице, весь
                         заморозка продуктов при необходимой температуре в течение всего года
                         дам. Только холодильные цепи абсолютная надежность
                         при работе с качеством и сроком годности продуктов питания
                         не уменьшается. Продукты BITZER чувствительны к температуре.
                         товары доходят до покупателя на самом высоком уровне качества
                         помогает обеспечить прогресс.`;
    vk.innerHTML =
      "«ВКМЕБЕЛЬ» поставляет для нас качественную продукцию из дерева и ДСП. Мы предоставляем нашим клиентам только качественную продукцию.";
    faoliyati.innerHTML = "НАПРАВЛЕНИЯ НАШЕЙ ДЕЯТЕЛЬНОСТИ";
    faoliyatiText.innerHTML =
      "Наша цель — удовлетворить ваши требования и предложить вам лучшие решения.";
    servicesss.innerHTML = ` <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Наши преимущества</h2>
            <p>
             Обеспечение высокого уровня обслуживания клиентов, их
               быстро реагировать на их требования и пожелания
               встретиться и предложить свои уникальные разработки и услуги
            </p>
          </div>

          <div class="row">
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4>
                  <a href="">Полный комплекс услуг по оборудованию</a>
                </h4>
                <p>
                 В данный ассортимент входят все товары и услуги компании.
                   включает в себя.
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4><a href="">Рациональная экономика решений</a></h4>
                <p>
                  Эти решения являются законами, политикой, экономическими временными,
                   финансовые риски, инвестиционный опыт и др.
                   анализ и прогнозы на основе переменных факторов
                   совместим с
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-tachometer"></i></div>
                <h4><a href="">Индивидуальная система скидок</a></h4>
                <p>
                 Это через системы, персональные скидки или бонусы.
                   предоставляет возможность делать предложения клиентам.
                </p>
              </div>
            </div>

            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Гарантийное и послегарантийное обслуживание</a></h4>
                <p>
                 «Послегарантийное обслуживание» — это область или продукт, на который распространяется гарантия.
                   дополнительные услуги, предлагаемые для
                </p>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Монтаж и наладка </a></h4>
                <p>
                  У нас есть собственные продукты для установки и запуска.
                   Мы также предлагаем эту услугу нашим клиентам
                </p>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box mt-5">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Сервисные услуги</a></h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>`;
    intro.innerHTML = ` <h2 class="text-center">Фотогалерея</h2>
              <p class="text-center">
               Здесь вы можете узнать, что мы можем сделать
                 ты можешь выйти
              </p>`;
    faq.innerHTML = `  <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Часто задаваемые вопросы</h2>
          </div>

          <div class="faq-list">
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  class="collapse"
                  data-bs-target="#faq-list-1"
                  >Где вы находитесь?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-1"
                  class="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                   г.Ташкент, Сергелийский район, МФУ Кубай-тепа, улица Саадия, дом 6
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  class="collapsed"
                  >У вас есть готовый продукт?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-2"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    У нас есть требования и индивидуальные идеи для каждого клиента
                     Производим на заказ.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  class="collapsed"
                  >Как быстро может быть изготовлен заказ?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-3"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                  Как подготовить заказ, сложности и сколько
                     с заказчиком, с учетом суммы
                     согласован и одобрен.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  class="collapsed"
                  >Услуга установки вашего изделия
                   есть <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-4"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                   Есть конечно! <br />
                     Доставляем произведенную продукцию в нужное место
                     Также доступна услуга установки.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="500">
                <i class="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  class="collapsed"
                  >В каких сферах вы работаете?
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-5"
                  class="collapse"
                  data-bs-parent=".faq-list"
                >
                  <ul>
                   <li>Сетевое оборудование</li>
                     <li>Система охлаждения, которая понадобится в промышленности.</li>
                     <li>Мебель в направлении ЛОФТ.</li>
                     <li>Все типы железных щитов</li>
                     <ли>
                       Все виды, которые должны быть изготовлены из железа
                       конструкции.
                     </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>`;
    info.innerHTML = ` <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Адрес:</h4>
                  <p>
                    г.Ташкент, ул.МФЮ Саадий, дом 6, р-н Кубай-Тепа.
                  </p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Электронная почта:</h4>
                  <p>newsfmmetallgroup@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Телефон:</h4>
                  <p>+998770133344</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                  style="border: 0; width: 100%; height: 290px"
                  allowfullscreen
                ></iframe>
              </div>`;
    con.innerHTML = "СВЯЗАТЬСЯ С НАМИ";
    foot.innerHTML = ` <div id="foot" class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>SFM Metall group</h3>
              <p>
                Ташкент ш.Сергелий т<br/>
                 Кубай Тепа МФЮ<br />
                 улица Саадия, 6-я <br /><br />
                <strong>Телефон:</strong> +998770133344<br />
                <strong>Электронная почта:</strong>newsfmmetallgroup@gmail.com<br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Полезные ссылки</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Домашняя страница </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">о нас</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Услуга</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Условия использования</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Наши сервисы</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Лазерная обработка металла</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Опыляющая краска</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Все виды сварки</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Гибка и обработка металла</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Наши социальные сети</h4>
              <p>Следите за нами и в социальных сетях!</p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"
                  ><i class="bx bxl-instagram"></i
                ></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>`;
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
    // portfolio.innerHTML = "Portfolio";
  }
}
