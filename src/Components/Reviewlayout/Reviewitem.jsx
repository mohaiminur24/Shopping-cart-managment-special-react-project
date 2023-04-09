import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  DecreaseQuantity,
  IncreaseQuantity,
  deletecartitem,
} from "../JSfunction";
import toast, { Toaster } from "react-hot-toast";

const Reviewitem = ({ item, state, statevalue }) => {
  const { image, name, price, rating, Quantity, id } = item;
  return (
    <div className="border p-3 rounded-md flex lg:flex-row flex-col gap-3 my-3 bg-gray-50 shadow-sm">
      <div>
        <Toaster />
      </div>

      <img className="w-28 h-24 rounded-md" src={image} alt="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between w-full gap-5 items-center">
        <div className="text-sm">
          <h1 className="font-semibold">{name}</h1>
          <h2>Rating: {rating}</h2>
          <h4>Price: {(price * Quantity).toFixed(2)}</h4>
        </div>

        <div className="mx-5 grid grid-cols-2 ml-auto justify-between w-full">
          <div>
            <button
              onClick={() => {
                DecreaseQuantity(id), state(!statevalue);
              }}
              className="px-2 rounded-md bg-yellow-200 border-gray-400 hover:scale-105 border"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="mx-5 font-bold">{Quantity}</span>
            <button
              onClick={() => {
                IncreaseQuantity(id), state(!statevalue);
              }}
              className="px-2 rounded-md bg-yellow-200 border-gray-400 hover:scale-105 border"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="ml-auto mr-5">
            <button
              onClick={() => {
                deletecartitem(id),
                  state(!statevalue),
                  toast.success("Successfully delete this items!", {
                    style: {
                      boxShadow: "0px 0px 1px gray",
                      borderRadius: "3px",
                    },
                  });
              }}
              className="shadow-sm rounded-full"
            >
              <FontAwesomeIcon
                className="text-2xl text-red-500 hover:text-red-700"
                icon={faTrash}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewitem;
