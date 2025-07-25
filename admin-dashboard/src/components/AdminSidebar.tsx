import React from "react";
import { RiDashboardFill, RiShoppingBag3Fill,RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, Location, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import {FaChartBar,FaChartPie,FaChartLine,FaStopwatch, FaGamepad} from 'react-icons/fa'

const AdminSidebar:React.FC = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>logo</h2>
      <DivOne location={location}/>
      <DivTwo location={location}/>
      <DivThree location={location}/>
    </aside>
  );
};

const DivOne = ({location}:{location:Location})=>(
<div>
        <h5>dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            text="Dashboard"
            Icon={RiDashboardFill}
            location={location}
          />
          <Li
            url="/admin/product"
            text="Products"
            Icon={RiShoppingBag3Fill}
            location={location}
          />
          <Li
            url="/admin/customer"
            text="Customer"
            Icon={IoIosPeople}
            location={location}
          />
          <Li
            url="/admin/transaction"
            text="Transactions"
            Icon={AiFillFileText}
            location={location}
          />
        </ul>
      </div>
)

const DivTwo = ({location}:{location:Location}) =>(
  <div>
        <h5>Charts</h5>
        <ul>
          <Li
            url="/admin/charts/bar"
            text="Bar"
            Icon={FaChartBar}
            location={location}
          />
          <Li
            url="/admin/charts/pie"
            text="Pie"
            Icon={FaChartPie}
            location={location}
          />
          <Li
            url="/admin/charts/line"
            text="Line"
            Icon={FaChartLine}
            location={location}
          />
       
        </ul>
      </div>

)
const DivThree = ({location}:{location:Location}) =>(
  <div>
        <h5>Apps</h5>
        <ul>
          <Li
            url="/admin/apps/stopwatch"
            text="Stopwatch"
            Icon={FaStopwatch}
            location={location}
          />
          <Li
            url="/admin/apps/coupan"
            text="Coupan"
            Icon={RiCoupon3Fill}
            location={location}
          />
          <Li
            url="/admin/apps/toss"
            text="Toss"
            Icon={FaGamepad}
            location={location}
          />
        
        </ul>
      </div>

)


interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link to={url}>
        <Icon />
        {text}
      </Link>
    </li>

);

export default AdminSidebar;
