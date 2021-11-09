import React from "react";
import {Link} from "react-router-dom"
import "./style.css"
const Home=() => {
    return(
        <div className="home">
        <div className="title">
          <h1>
            <p>Betül Karayakalı</p>
            <p>Bilgisayar Mühendisi</p>
          </h1>
          <Link to="/about">
            <button>Daha Fazla Bilgi...</button>
          </Link>
        </div>
        <div className="person">
          <img
            src={`${process.env.PUBLIC_URL}/betul.png`}
            alt="person picture"
          />
        </div>
      </div>
    );
};
export default Home;