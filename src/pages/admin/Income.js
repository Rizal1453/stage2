import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import NavbarComponent from "../../components/NavbarComponent";
import { API } from "../../config/api";

const Income = () => {
  const[loading,setLoading] = useState (true)

  const [transaction, setTransaction] = useState([]);
  const getTransaction = async () => {
    try {
      const response = await API.get("/ftransaction");
      setTransaction(response.data.data)
      setLoading(false)
    } catch (error) {

      console.log(error);
    }
  };
  useEffect(() => {
    getTransaction();
  }, []);


  return (
    <div>
      <NavbarComponent />
      {loading?(<h2> Loading ..</h2>):(
      <Container>

        <h2 className="mt-5 text-white">Incoming Transaction</h2>
        <Table className="border border-2 my-5" bordered hover responsive>
        <thead style={{ backgroundColor: "#E5E5E5" }}>
        <tr>
        <th>No</th>
        <th>Users</th>
        <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              </tr>
              </thead>
              <tbody className="shadow bg-light">
              {transaction?.map((item, index) => (
                <tr>
                <td>{index + 1}</td>
                <td>{item.user.fullname}</td>
                <td>{}</td>
                <td>{item.StatusUser}.</td>
                <td
                className={
                  item.StatusUser == "No Active"
                  ? "d-flex text-warning justify-content-center"
                  : "text-success d-flex justify-content-center"
                  }
                >
                  {item.status}
                </td>
                </tr>
                ))}
                </tbody>
                </Table>
                </Container>
                )}
                </div>
                );
              };
              
export default Income;
