import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useMutation } from "react-query";
import GlobalButton from "../components/Button";
import { LoginContext } from "../components/LoginContext";
import NavbarComponent from "../components/NavbarComponent";
import { API } from "../config/api";

function Pay() {
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "Mid-client-viJBL-THAw0O311SB-Mid-client-xS3tQOWydg5_Sven";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
 const [state, dispatch] = useContext(LoginContext);
 const [trans, setTrans] = useState([]);
 const id = state.user.id

 
  const getTrans = async () => {
    try {
      const response = await API.get("/ftransaction");
      const responbyid = response?.data.data.filter((p) => p.user.id === id);
      console.log("byiid", responbyid);
      setTrans(responbyid);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(trans,"okeeeeeeeee");
 useEffect(() => {
   getTrans();
 }, [state]);
 console.log("state:", state);
 const handlePay = async () => {
   try {
     // Get data from product
   

     // Create variabel for store token payment from response here ...
     const response = await API.post("/createtransaction");

     const token = response.data.data.token;
     

     window.snap.pay(token, {
       onSuccess: function (result) {
         /* You may add your own implementation here */
         console.log(result);
         // history.push("/profile");
       },
       onPending: function (result) {
         /* You may add your own implementation here */
         console.log(result);
         // history.push("/profile");
       },
       onError: function (result) {
         /* You may add your own implementation here */
         console.log(result);
       },
       onClose: function () {
         /* You may add your own implementation here */
         alert("you closed the popup without finishing the payment");
       },
     });

     // Init Snap for display payment page with token here ...
   } catch (error) {
     console.log(error);
   }
 }


  

  return (
    <div>
      <NavbarComponent />
      <div style={{ height: "70vh" }} className="d-flex align-items-center">
      <Container className="text-white  text-center ">
      {trans.length ===0? (
      <div>
      <h2> Premium</h2>
      <p>
              Bayar sekarang dan nikmati streaming music yang kekinian dari
              <span className="text-danger ms-1">DUMB</span>
              <span className="text-white">SOUND</span>
            </p>
            <p>
              {" "}
              <span className="text-danger ms-1">DUMB</span>
              <span className="text-white">SOUND : 0981312323</span>
            </p>
            <GlobalButton text="Send" style={{ width: "300px" }} onClick={handlePay} />
          </div>
          ):(
           <div style={{ height: "70vh" }} className="justify-content-center d-flex align-items-center text-white text-center">
          <div >
            <h2 >  Anda Sudah Premium</h2>
            <p>
              Nikmati Lagu yang anda inginkan
              <span className="text-danger ms-1">DUMB</span>
              <span className="text-white">SOUND</span>
            </p>
            <p>
              {" "}
              <span className="text-danger ms-1">DUMB</span>
              <span className="text-white">SOUND : 0981312323</span>
            </p>

          </div>
      
         </div>)}
        </Container>
      </div>
    </div>
  );
}

export default Pay;
