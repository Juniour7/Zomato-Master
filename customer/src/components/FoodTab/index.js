import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline, IoTimeSharp } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";

const MobileTab = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      icon: <BsHandbag />,
      name: "Delivery",
      isActive: false
    },
    {
      id: `night`,
      icon: <IoBeerOutline />,
      name: "Night Life",
      isActive: false
    },
    {
      id: `dining out`,
      icon: <GiMorgueFeet />,
      name: "Dining Out",
      isActive: false
    }
  ]);

  const {type} = useParams();
  useEffect(() => {
    if(type) {
      const updateTypes = allTypes.map((item) => {
        if(item.id === type) {
          return {...item, isActive: true};
        }
        return item;
      });
      setAllTypes(updateTypes);
    }
  },[type]);

  return (
    <>
      <div className="md:hidden bg-white p-3 fixed bottom-0 z-10 w-full flex items-center justify-between border text-gray-500">
        {
          allTypes.map((item => {
            <div className= {
              item.isActive ? "flex flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-400" : "flex flex-col items-center text-xl"
            } >
              {item.icon}
              <h5>{item.name}</h5>
            </div>
          }))
        }
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <MobileTab />
    </>
  );
};

export default FoodTab;