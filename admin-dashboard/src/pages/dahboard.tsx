import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from '../assets/data.json';
import { BarChart,DoughnutChart } from "../components/Chart";
import { BiMaleFemale } from "react-icons/bi";
import DashbordTable from "../components/DashbordTable";


const Dashboard = () => {
  const userImg =
    "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png";
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs " />
          <FaRegBell />
          <img
            src={userImg}
            alt="Users"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <section className="widgetcontainer">
            <WidgetItem percent={-70} 
           heading="Revenue" amount={true} value={48003} 
           color="rgb(0 115 255)"/>
            <WidgetItem percent={90} 
           heading="Users" amount={true} value={3400} 
           color="rgb(0 198 202)"/>
            <WidgetItem percent={60} 
           heading="Transactions" amount={true} value={34020} 
           color="rgb(255 196 0)"/>
            <WidgetItem percent={80} 
           heading="Products" amount={true} value={340014268} 
           color="rgb(76 0 255)"/>
        </section>
        <section className="graphContainer">
         <div className="revenueChart">
            <h2>Revenue & Transactions</h2>
            <BarChart data_1={[300,144,333,655,237, 755, 190]}
            data_2={[370,744,733,675,277, 775, 180]}
            title_1="Revenue"
            title_2="Transactions"
            bgColor_1="rgb(0,115,255)"
            bgColor_2="rgba(53,162,235,0.8)"
            />
         </div>
         <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {
                data?.categories?.map((category)=>{
                  return <CategoryItem key={category?.heading}
                   heading={category?.heading}
                  value={category?.value} color={`hsl(${(category.value)}, ${category?.value}%, 50%)`}/>
                })
              }
                
  
            </div>
         </div>
            </section>
            <section className="transaction-container">
              <div className="gender-chart">
                <h2>Gender Ratio</h2>
                <DoughnutChart labels={["Female", "Male"]}
                data={[12,19]}
                backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}/>
                <p>
                  <BiMaleFemale/>
                </p>
              </div>
              <DashbordTable data={data?.transaction}/>
            </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount=false,
}: WidgetItemProps) => <article className="widget">
    <div className="widgetinfo">
        <p>{heading}</p>
        <h4>{amount ? `${value}` :value}</h4>
        {
            percent > 0 ? (<span className="green"><HiTrendingUp/> +{percent}%{" "}</span>) :
            (<span className="red"><HiTrendingDown/> -{percent}%{" "}</span>)
        }
    </div>
    <div className="widgetCircle" style={{
        background:`conic-gradient(${color} ${Math.abs(percent)/100*360 }deg, rgb(255, 255, 255) 0
    )`
    }}>
        <span style={{color}}>{percent}%</span>
    </div>
</article>;


interface categoryItemProps {
color:string;
value:number;
heading:string;
}

const CategoryItem =({color,value,heading}:categoryItemProps)=>(
    <div className="categoryItem">
  <h5>{heading}</h5>
  <div>
    <div style={{backgroundColor:`${color}`,
width:`${value}%`}}>

    </div>
  </div>
  <span>{value}%</span>
    </div>
)

export default Dashboard;
