/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  console.log(allActors)

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
        {
            allActors.map(actor => (
                <div key={actor.id} className="card">
          <div className="card-img">
            <img
              className="photo"
              src={actor.image}
              alt=""
            />
          </div>
          <h2>{actor.name}</h2>
          <p>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              unde?
            </small>
          </p>
          <div className="info">
            <p>salary: $ {actor.salary}</p>
            <p>{actor.role}</p>
          </div>
          <button className="card-btn">select</button>
        </div>
            ))
        }
        </div>
        <div className="cart">
            <h1>This is cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
