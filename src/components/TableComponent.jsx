import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const contracts = [
  {
    no: 1,
    Type: "Sales Representative Agreement",
    CounterPartyName: "S JayKumar",
    CreatedDate: "10/09/2024",
    Status: "Signed"
  },
  {
    no: 2,
    Type: "Service Level Agreement (SLA) with Customers",
    CounterPartyName: "N/A",
    CreatedDate: "07/09/2024",
    Status: "Drafted"
  },
  {
    no: 3,
    Type: "Internship Agreement",
    CounterPartyName: "Nitin",
    CreatedDate: "06/09/2024",
    Status: "Signed"
  },
  {
    no: 4,
    Type: "Not Given",
    CounterPartyName: "Not Given",
    CreatedDate: "05/09/2024",
    Status: "Drafted"
  },
  {
    no: 5,
    Type: "Beta Testing Agreement",
    CounterPartyName: "N/A",
    CreatedDate: "27/08/2024",
    Status: "Drafted"
  }
];


const TableComponent = () => {
  return (
    <>
      <div className="w-full h-full ">
      <Table>
          <TableHeader>
            <TableRow className='sticky top-0 right-0 left-0 w-full' >
              <TableHead className="w-1/4 text-white  text-sm" style={{ backgroundColor: "rgba(0, 33, 44, 1)" }} >No.</TableHead>
              <TableHead className="w-1/3 text-white  text-sm" style={{ backgroundColor: "rgba(0, 33, 44, 1)" }} >Type</TableHead>
              <TableHead className="w-1/4 text-white  text-sm" style={{ backgroundColor: "rgba(0, 33, 44, 1)" }} >Counter Party</TableHead>
              <TableHead className="w-1/4 text-right text-white text-sm" style={{ backgroundColor: "rgba(0, 33, 44, 1)" }} >Created Date</TableHead>
              <TableHead className="w-1/4 text-right text-white text-sm" style={{ backgroundColor: "rgba(0, 33, 44, 1)" }} >Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.no}>
                <TableCell className="font-medium ">{contract.no}</TableCell>
                <TableCell className="font-medium ">{contract.Type}</TableCell>
                <TableCell>{contract.CounterPartyName}</TableCell>
                <TableCell>{contract.CreatedDate}</TableCell>
                <TableCell className="text-right">
                  {contract.Status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TableComponent;
