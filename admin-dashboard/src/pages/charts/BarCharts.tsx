import AdminSidebar from '../../components/AdminSidebar'
import { BarChart } from '../../components/Chart'


const BarCharts = () => {
  return (
    <div className="adminContainer">
    <AdminSidebar />
    <main className="chart-container">
      <h1>Bar Chart</h1>
      <section>
        <BarChart
          data_1={[200, 300, 400, 200, 230, 430, 234]}
          data_2={[206, 306, 460, 600, 260, 436, 264]}
          title_1="Products"
          title_2="Users"
          bgColor_1={`hsl(260,50%,30%)`}
          bgColor_2={`hsl(360,60%,90%)`}
        />
        <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
      </section>
      <section>
        <BarChart
          horizontal={true}
          data_1={[200, 300, 400, 200, 230, 430, 234]}
          data_2={[106, 206, 460, 400, 260, 336, 264]}
          title_1="Products"
          title_2="Users"
          bgColor_1={`hsl(280,40%,40%)`}
          bgColor_2={`hsl(180,30%,70%)`}
        />
        <h2>Orders throughout the year</h2>
      </section>
    </main>
  </div>
  )
}

export default BarCharts
