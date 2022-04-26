import "./stats.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Stats = () => {
  return (
    <div className="stats">
      <Sidebar />
      <div className="statsContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Patient Visit Analytics" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Prescription Orders</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Stats;
