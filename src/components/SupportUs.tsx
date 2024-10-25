// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import WspButton from "./WhatsAppButton";

export default function SupportUs() {
  return (
    <>
      <section className="max-w-[1440px] mx-auto my-32">
        <Swiper
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-auto lg:h-[500px] overflow-hidden w-full grid grid-cols-1 md:grid-cols-2 shadow-lg mx-2 rounded-lg my-0 border border-t-gray-100">
              <img
                src="https://www.nutrastevia.pe/nutrablog/wp-content/uploads/2015/01/Stevia-en-la-agricultura.jpg"
                alt=""
              />
              <div className="h-auto lg:h-[500px] text-start p-2 lg:p-8 flex flex-col justify-between">
                <div>
                  <h1 className="font-semibold text-xl lg:text-4xl mb-5">
                    Fertilizante de Stevia
                  </h1>
                  <p className="text-base lg:text-xl">
                    El fertilizante orgánico de stevia posibilita la realización
                    de una agricultura que protege al ambiente, revitaliza a los
                    microorganismos benéficos del suelo, permite recuperar su
                    fertilidad, estimula el crecimiento radicular, purifica el
                    suelo contaminado por agroquímicos, aumenta la resistencia
                    de las plantas frente al ataque de plagas y enfermedades,
                    contribuye a prevenir la caída de los frutos y finalmente,
                    aumenta el contenido de vitaminas, minerales, azúcar y otros
                    nutrientes en la planta mejorando el sabor y la durabilidad
                    de los frutos.
                  </p>
                </div>

                <div className="flex justify-end">
                  <WspButton
                    title="Estoy interesado en su producto: Fertilizante de Stevia"
                    isFloat={false}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto lg:h-[500px] overflow-hidden w-full grid grid-cols-1 md:grid-cols-2 shadow-lg mx-2 rounded-lg my-0 border border-t-gray-100">
              <div className="h-auto lg:h-[500px] text-start p-2 lg:p-8 flex flex-col justify-between">
                <div>
                  <h1 className="font-semibold text-xl lg:text-4xl mb-5">Miel Orgánica</h1>
                  <p className="text-base lg:text-xl">
                    La miel multifloral (intervienen varias especies de la flora
                    nativa) es extraída de los bosques relicto ubicados en las
                    estribaciones de la cordillera de Los Andes, al sur del
                    Departamento de Chuquisaca. La producción 100% orgánica es
                    dirigida por un joven apicultor autodidacta y lleva el sello
                    ecológico del Estado Plurinacional de Bolivia.
                  </p>
                </div>

                <div className="flex justify-end h-[54px] mt-3 lg:mt-0">
                  <WspButton
                    title="Estoy interesado en su producto: Miel Orgánica"
                    isFloat={false}
                  />
                </div>
              </div>
              <img
              className="order-first lg:order-last"
                src="https://cdn.agroempresario.com/images/posts/c01b0cfaf51d0b1280c57d06022a7163bc5b728aeea97f33_840.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto lg:h-[500px] overflow-hidden w-full grid grid-cols-1 md:grid-cols-2 shadow-lg mx-2 rounded-lg my-0 border border-t-gray-100">
              <img
                src="https://i.pinimg.com/736x/4d/e1/c2/4de1c2e8425b5cbfedbf66f60e0b2e45.jpg"
                alt=""
              />
              <div className="h-auto lg:h-[500px] text-start p-2 lg:p-8 flex flex-col justify-between">
                <div>
                  <h1 className="font-semibold text-xl lg:text-4xl mb-5">
                    Macetas a Grochet
                  </h1>
                  <p className="text-base lg:text-xl">
                    El Crochet y el Ganchillo han sido tendencias en el año 2023
                    y siguen con más fuerza en el 2024. Somos Vecrola Atelier,
                    nace a mediados del 2020, en plena pandemia. Su marca
                    remonta a los tiempos dónde las abuelitas se ponían a tejer.
                    Sin embargo, Vecrola Atelier es algo más que eso. Es
                    atención, perfección, salud, relajación y por sobre todo es
                    Arte. Somos un estilo que busca lo auténtico, lo simple,
                    pero con elegancia. Hemos avanzado a lo largo de estos tres
                    años a pasos lentos, el mercado ha sido difícil de
                    conquistar, sin embargo, nuestros clientes quedan
                    satisfechos con nuestros productos.
                  </p>
                </div>

                <div className="flex justify-end mt-3 lg:mt-0">
                  <WspButton
                    title="Estoy interesado en su producto: Macetas a Grochet"
                    isFloat={false}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto lg:h-[500px] overflow-hidden w-full grid grid-cols-1 md:grid-cols-2 mb-10 shadow-lg mx-2 rounded-lg my-0 border border-t-gray-100">
              <div className="h-auto lg:h-[500px] text-start p-2 lg:p-8 flex flex-col justify-between">
                <div>
                  <h1 className="font-semibold text-xl lg:text-4xl mb-5">
                    Chocolate Artesanal
                  </h1>
                  <p className="text-base lg:text-xl">
                    Una familia indígena que vive en la reserva forestal del
                    Tipnis, haciendo alusión a su cultura conservadora del
                    bosque, implementa en forma práctica el manejo responsable
                    de sus recursos naturales, producen actualmente un cacao de
                    excelente calidad en sabor, aroma y composición de grasa,
                    100% orgánico, de sabor concentrado y delicioso para
                    degustarlo puro o mezclado con leche. Adquirir el chocolate
                    con la <strong>Sra. Ruth Ortega</strong>.
                  </p>
                </div>

                <div className="flex justify-end mt-3 lg:mt-0">
                  <WspButton
                    title="Estoy interesado en su producto: Chocolate Artesanal"
                    isFloat={false}
                  />
                </div>
              </div>
              <img
              className="order-first lg:order-last"
                src="https://infonegocios.info/content/images/2022/07/22/282890/barroco-chocolate-infogourmet.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
