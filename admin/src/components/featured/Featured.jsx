import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Weekly Overview</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">
          Overall appointments completed
          </p>
        <p className="amount">14</p>
        <p className="desc">
          New patients registered this week. *May not be included all.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">&nbsp;Target&nbsp;</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">&nbsp;20&nbsp;</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">&nbsp;Last Week&nbsp;</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">&nbsp;21&nbsp;</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">&nbsp;Last Month&nbsp;</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">&nbsp;63&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;