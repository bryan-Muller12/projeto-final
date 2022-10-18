import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      {/* Inicio da Tela Inicial  */}
      <section className="bg-gray-light p-8">
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center text-blue gap-4 w-full">
            <h2 className="text-4xl font-bold ">
              First I wanted to be a musculation
            </h2>
            <p className="flex w-9/12 text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              vitae excepturi praesentium. Corporis voluptatibus non facilis
              repudiandae repellat expedita quasi veritatis neque eum, molestiae
              eaque dignissimos qui exercitationem! Vitae dolorem explicabo
              facilis autem! Ratione praesentium excepturi vitae? Quibusdam,
              expedita earum sed laborum magni, nemo praesentium culpa aliquid
              dolor hic numquam.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <button className="flex items-center justify-center gap-4 w-full py-5 px-8 text-xl text-white bg-blue rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
                Contato
              </button>
              <button className="flex items-center justify-center gap-4 py-5 px-8 text-xl bg-yellow rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
                Calcule seu IMC
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full ">
            <picture>
              <img className="w-76" src="./img/img-musc.png" alt="" />
            </picture>
          </div>
        </div>
      </section>
      {/* Fim da Tela Inicial  */}

      {/* Inicio exercite-se em casa */}

      <section className="bg-blue p-20 h-full">
        <div className="flex  justify-center items-center gap-20 ">
          <div className="flex">
            <picture>
              <img
                className="w-full h-96 border-yellow border-2"
                src="./img/modelo-treino-casa.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="flex flex-col items-center justify-center text-white gap-8 w-1/2">
            <h2 className="text-4xl font-bold ">Pratique exercícios em casa</h2>
            <p className="flex w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              vitae excepturi praesentium. Corporis voluptatibus non facilis
              repudiandae repellat expedita quasi veritatis neque eum, molestiae
              eaque dignissimos qui exercitationem! Vitae dolorem explicabo
              facilis autem! Ratione praesentium excepturi vitae? Quibusdam,
              expedita earum sed laborum magni, nemo praesentium culpa aliquid
              dolor hic numquam.
            </p>
            <div className="flex items-center">
              <Link href="/treinos">
                <button className="flex items-center justify-center gap-4 py-5 px-12 text-xl text-blue bg-yellow rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all focus:scale-105 focus:underline ">
                  Veja mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fim exercite-se em casa */}
    </>
  );
};

export default Home;
