import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div style={{ marginTop: "0px" }} className="home__row">
          <Product
            id={979754}
            title={
              "Coffee Can Investing: The Low Risk Road to Stupendous Wealth"
            }
            price={15.99}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/51w5fy6w2zL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            }
            rating={4}
          />
          <Product
            id={87874}
            title={"Casio Analog Dial Men's Watch"}
            price={99.99}
            image={
              "https://m.media-amazon.com/images/I/71CQ4XvDqfL._UY879_.jpg"
            }
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id={879867}
            title={"Woodland Mens OGC 3501119 Closed Shoe"}
            price={25}
            image={
              "https://m.media-amazon.com/images/I/81tDWYE3lzL._UX675_.jpg"
            }
            rating={3}
          />
          <Product
            id={67643}
            title={"MYFITNESS Chocolate Peanut Butter Crunchy 1250g"}
            price={11.99}
            image={"https://m.media-amazon.com/images/I/51MrKVHPCIS.jpg"}
            rating={4}
          />
          <Product
            id={26464}
            title={"ESPAWN 110 Ergonomic Gaming Chair with Footrest Recliner"}
            price={150.83}
            image={
              "https://m.media-amazon.com/images/I/71y8rPagzDL._AC_SX679_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={64636}
            title={
              "Havells Fusion Prime 1200mm Ceiling Fan (Indigo Blue, Pack of 2)"
            }
            price={109.99}
            image={
              "https://m.media-amazon.com/images/I/61d9O6ICIrL._SX679_.jpgtps://m.media-amazon.com/images/I/71CQ4XvDqfL._UY879_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
