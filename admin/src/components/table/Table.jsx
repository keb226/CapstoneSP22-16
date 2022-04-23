import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Novolin",
      img: "https://www.diabeticpromotions.com/media/catalog/product/cache/926eb0025a4663dfb7886d35c1b0ac7f/n/o/novolin7030.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: "30-70U",
      method: "Cash on Delivery",
      status: "Stocked",
    },
    {
      id: 2235235,
      product: "FASENRA",
      img: "https://www.empr.com/wp-content/uploads/sites/7/2018/12/4250739ea4e84e2ab497af5e9dec95ee-Fasenra_new_mon.png",
      customer: "Michael Doe",
      date: "1 March",
      amount: "12.5 mg",
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Sensorcaine-MPF",
      img: "https://biosupply.fffenterprises.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/e/sensorcaine-mpf-0_25-10ml-product-image.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: "125 mg",
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Gardasil 9",
      img: "https://qtxasset.com/quartz/qcloud5/media/image/FiercePharma-1507662171/gardasil9.jpg?VersionId=XBGjx5Nvdf8VM1h0Jentt95cfC3nZ523",
      customer: "Jane Smith",
      date: "1 March",
      amount: "0.5 mL",
      method: "Online",
      status: "Stocked",
    },
    {
      id: 2342355,
      product: "BNT162b2",
      img: "https://assets.medpagetoday.net/media/images/88xxx/88222.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: "3 mL",
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Patient</TableCell>
            <TableCell className="tableCell">Administration Date</TableCell>
            <TableCell className="tableCell">Dosage</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
