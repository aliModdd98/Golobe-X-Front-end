import React from 'react'
import './AmenitiesStyle.css'
import { FaWifi } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineCleaningServices } from "react-icons/md"
import { FaPersonShelter } from "react-icons/fa6";
import { MdOutlineLocalBar } from "react-icons/md";
import { CiDumbbell } from "react-icons/ci";
import { MdOutlinePool } from "react-icons/md";
import { FaSpa } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiAsda } from "react-icons/si";
import { GiClothes } from "react-icons/gi";
import { GiSewedShell } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { useState } from 'react';
function Amenities() {
 const amenities=
 [{name:"Free Wi-Fi",
    icon:<FaWifi/>},   {name:"24-hour front desk service",
icon:<Ri24HoursLine/>},
  {name:"  Room service",icon:<MdOutlineCleaningServices/>},
   {name:" On-site restaurant",icon:<FaPersonShelter/>},
 { name: " Bar/lounge",icon:<MdOutlineLocalBar/>},
   {name:" Fitness center",icon:<CiDumbbell/>},
 { name:" Swimming pool",icon:<MdOutlinePool/>},
    {name:"Spa facilities",icon:<FaSpa/>},
   {name:" Business center",icon:<BsPersonWorkspace/>},
   {name:" Concierge service",icon:<SiAsda/>},
    {name:"Laundry facilities",icon:<GiClothes/>},
   {name:" Shuttle service",icon:<GiSewedShell/>},
  { name:" Parking facilities",icon:<FaCar/>},
  {name:"  Room service",icon:<MdOutlineCleaningServices/>},
  {name:" On-site restaurant",icon:<FaPersonShelter/>},
{ name: " Bar/lounge",icon:<MdOutlineLocalBar/>},
  {name:" Fitness center",icon:<CiDumbbell/>},
{ name:" Swimming pool",icon:<MdOutlinePool/>},
   {name:"Spa facilities",icon:<FaSpa/>},
  {name:" Business center",icon:<BsPersonWorkspace/>},
    
   ];
    const [showMore, setShowMore] = useState(false);
  const visibleAmenities = showMore ? amenities : amenities.slice(0, 10);

  const handleMore = () => {
    setShowMore(!showMore);
  };
  
   return (
    <div className='container'>
      <h2>Amenities</h2>
      <div className="row amenities">
        {visibleAmenities.map((amen, index) => (
          <div key={index} className="col-lg-5 itemAmen">
            {amen.icon} {amen.name}
          </div>
        ))}
      </div>
      {!showMore && (
        <div className="showAmenities" onClick={handleMore}>
          +{amenities.length - 10} more
        </div>
      )}
    </div>
  )
}

export default Amenities