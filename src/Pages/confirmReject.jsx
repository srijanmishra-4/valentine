import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmReject = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 bg-[url('https://www.transparenttextures.com/patterns/heart-background.png')] bg-repeat">
      <div className="text-center space-y-6">
        <img
          src="https://tenor.com/view/tooji-bubududu-gif-26984460.gif"
          alt="Are you sure?"
          className="w-full max-w-xs mx-auto rounded-lg shadow-md"
        />
        <h1 className="m-3 p-5 text-2xl font-bold text-pink-700">You Don't Wanna Be my Valentine ?</h1>
        <div className="flex space-x-4 justify-center">
          <button
            className="w-20 h-10 text-pink-500 border border-pink-500 hover:bg-pink-100 rounded-lg shadow-lg text-sm"
            onClick={() => navigate("/proposal/confirm")}
          >
            No
          </button>
          <button
            className="w-40 h-20 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-lg text-lg"
            onClick={() => navigate("/proposal/accepted")}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReject;
