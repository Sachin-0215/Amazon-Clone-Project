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

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={890}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={17750}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={14850}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={7348.64}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={44466.74}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={81287.15}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="214324"
            title={`Razer Blade 15 Gaming Laptop 2019: Intel Core i7-9750H 6 Core, NVIDIA GeForce RTX 2070 Max-Q, 15.6" FHD 1080p 240Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB Lighting, Thunderbolt 3`}
            price={167080.77}
            image={
              "https://m.media-amazon.com/images/I/71VniIMpMkL._AC_UY218_.jpg"
            }
            rating={5}
          />
          <Product
            id="4326483"
            title={
              'MSI GS75 Stealth 10SGS-271 17.3" 300Hz 3ms Ultra Thin and Light Gaming Laptop Intel Core i7-10750HK RTX 2080 Super 32GB 512GB NVMe SSD Win10PRO VR Ready'
            }
            price={200401.29}
            image={
              "https://m.media-amazon.com/images/I/710pmUkw2rL._AC_UY218_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="987098"
            title={
              "Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor"
            }
            price={1484930}
            image={
              "https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg"
            }
            rating={3}
          />
          <Product
            id="098774"
            title={
              "Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Sandstone"
            }
            price={4454.7}
            image={
              "https://m.media-amazon.com/images/I/51hZ1Ix1bdL._AC_UL320_.jpg"
            }
            rating={5}
          />
          <Product
            id="984738"
            title={"Oculus Quest All-in-one VR Gaming Headset – 128GB"}
            price={56806.83}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/31AZvhYLyeL._AC_SY200_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="56577"
            title={
              "Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
            }
            price={111385.95}
            image={
              "https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="WiFi enabled Complete set of Dell OptiPlex Dual Core Windows 10 Desktop PC Computer"
            image="https://images-na.ssl-images-amazon.com/images/I/41x81v5aR8L._AC_.jpg"
            price={25000}
            rating={5}
          />
          <Product
            id="2"
            title="USB C Cable, JSAUX (2m 2-Pack) Type C Fast Charger Charging Cable Braided Compatible for Samsung Galaxy S10 S9 S8 S20 Plus A3 A5 2017 Note 10 9 8, Huawei P10 P9, Google Pixel, Sony Xperia XZ, LG -Red"
            image="https://images-na.ssl-images-amazon.com/images/I/61kEKkw2D%2BL._SX425_.jpg"
            price={140}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title={`Samsung 50" TU8000 HDR Smart 4K TV with Tizen OS [Energy Class A]`}
            image="https://images-na.ssl-images-amazon.com/images/I/81wu6OvfcNL._AC_SX679_.jpg"
            price={53990}
            rating={4}
          />
          <Product
            id="4"
            title="Google Chromecast Smart TV Streaming Stick"
            image="https://images-na.ssl-images-amazon.com/images/I/51eLlTTHpAL._AC_SL1000_.jpg"
            price={3500}
            rating={1}
          />
          <Product
            id="5"
            title={`ELEPHAS Projector, GC333 Portable Projector with 4500 Lumens and Full HD 1080p, 180” Display and 50000 Hours Lamp Life LED Video Projector`}
            image="https://images-na.ssl-images-amazon.com/images/I/61CDSCGhozL._AC_SX679_.jpg"
            price={8990}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="HUAWEI MatePad Pro 10.8-inch 2K FullView Tablet - HUAWEI Kirin 990, 6 GB RAM, 128 GB ROM, Multi-screen Collaboration, EMUI 10.0.1 (Based Android 10.0), Wi-Fi, Midnight Grey"
            image="https://images-na.ssl-images-amazon.com/images/I/41MzCMwfG9L._AC_.jpg"
            price={44990}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
