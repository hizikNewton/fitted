import Icons from "../Icons";
import { ReactComponent as Dot } from "../../assets/dots.svg";
import { Tab, TabContainer, Table, TableContainer } from "./styled";
import DropDown from "../DropDown";
import useOnClickOutside from "../../hooks/UseOnClickOutside";
import { useState } from "react";

import { ReactComponent as Search } from "../../assets/Search.svg";
import { useRef } from "react";

const tableHeadData = [
  {
    name: "transactionId",
    label: "Transaction ID",
  },
  {
    name: "transactionType",
    label: "Transaction Type",
  },
  {
    name: "date",
    label: "Date",
  },
  {
    name: "amount",
    label: "Amount",
  },
  {
    name: "payment",
    label: "Payment",
  },
  {
    name: "status",
    label: "Status",
  },
];

const tableRowData = [
  {
    transactionId: "#790841",
    transactionType: "Receive token",
    date: "12-Jun- 2021",
    amount: "5 tokens",
    payment: "Token wallet",
    status: "successful",
  },
  {
    transactionId: "#790841",
    transactionType: "Receive token",
    date: "12-Jun- 2021",
    amount: "5 tokens",
    payment: "Token wallet",

    status: "failed",
  },
  {
    transactionId: "#790841",
    transactionType: "Receive token",
    date: "12-Jun- 2021",
    amount: "5 tokens",
    payment: "Token wallet",

    status: "successful",
  },
];

export const Tabs = () => {
  const ref = useRef();
  // State for our modal
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setMenuOpen(false));
  const handleClick = (e, id) => {
    setMenuOpen(true);
    setActive(id);
  };

  return (
    <TabContainer>
      <Tab>
        <button>{"Transaction History"}</button>

        <button>{"Billing Address"}</button>

        <button>{"Account Settings"}</button>
      </Tab>
      <TableContainer>
        <div className="topActions">
          <div className="input-wrapper">
            <Icons Comp={Search} />
            <input placeholder="Search order" />
          </div>
          <select>
            <option>{"actions"}</option>
          </select>
        </div>
        <Table>
          <thead>
            <tr>
              <td>
                <input type={"checkbox"} />
              </td>
              {tableHeadData.map(({ label }, id) => (
                <th key={id}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRowData.map((i, id) => {
              return (
                <tr key={id}>
                  <td>
                    <input type={"checkbox"} />
                  </td>
                  <td>{i.transactionId}</td>
                  <td>{i.transactionType}</td>
                  <td>{i.date}</td>
                  <td>{i.amount}</td>
                  <td>{i.payment}</td>

                  <td>{i.status}</td>
                  <td ref={ref}>
                    <button onClick={(e) => handleClick(e, id)}>
                      <Icons Comp={Dot} />
                    </button>
                    {isMenuOpen && active === id && (
                      <DropDown
                        listItem={[
                          { name: "View More" },
                          { name: "Download Receipt" },
                        ]}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </TabContainer>
  );
};
