import React from "react";
import Profile from "../assets/images/avatar-jessica.jpeg";

const Card = () => {
  return (
    <div className="card">
      <img src={Profile} alt="Profile" className="w-15 rounded-full" />
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <p className="mt-1">"Front-end developer and avid reader."</p>

      <div className="flex flex-col gap-2 justify-center w-full mt-3 text-center">
        <button>
          <a href="https://github.com/KpG782">Github</a>
        </button>
        <button>
          <a href="https://www.frontendmentor.io/profile/KpG782">
            Frontend Mentor
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/ken-patrick-garcia-ba5430285/">
            LinkedIn
          </a>
        </button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
};

export default Card;
