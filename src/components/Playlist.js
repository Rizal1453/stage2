import React, { useContext, useEffect, useRef, useState } from "react";

import { Card, CardGroup, Container, Modal } from "react-bootstrap";

import { API } from "../config/api";
import { LoginContext } from "./LoginContext";
import { Error,Success } from "../helper/toast";
import Player from "./PlayMusic";


import { useNavigate } from "react-router-dom";

const Playlist = () => {
  const [state, dispatch] = useContext(LoginContext);
  const loginsukses = state.isLogin;
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClos = () => setShow(false);

  const handleClose = () => setMusicShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState();
  const [musicShow, setMusicShow] = useState(false);
  

  const [isplaying, setisplaying] = useState(false);
  const [lagu, setLagu] = useState();
 

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current?.play();
    } else {
      audioElem.current?.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setLagu({
      ...lagu,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  // const a
  // function cek(a,b) {
  //   if (a === b ) {
  //     console.log("horreeee");
  //   }else{
  //     console.log("bangsaddd");
  //   }

  // }

  // cek()
  // const { data: trans } = useQuery("transCache", async () => {
  //   const id = state.user.id;
  //   const response = await API.get("/ftransaction");
  //   const responbyid = response?.data.data.filter((p) => p.userid === id);
  //   console.log("byiid", responbyid);

  //   console.log(response, "keluuuuuaaaar doong");
  //   return responbyid;
  // });

  const [trans, setTrans] = useState([]);
  const id = state.user.id;

  console.log("userid", id);

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

  // const getTransaction = async () => {
  //   try {
  //     const id = state.user.id
  //     const response = await API.get("/ftransaction");
  //     const responbyid = response.data.data.filter((p)=> p.userid===id)
  //     setTransaction(responbyid);
  //     console.log(response, "keluuuuuaaaar doong");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log("user id :", userId);
  console.log(trans, "byyyyyyyyyyyyyyyyyy id");

  const getData = async () => {
    try {
      const response = await API.get("/fsong");
      setData(response.data.data);
      setloading(false)
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  // }, []);

  useEffect(() => {
    getData();
    getTrans();
  }, [state]);

  
  return (
    
    <div className="my-5">
      <Container>
      <div className="my-5 color-orens text-center ">
      <h2>Dengarkan Dan Rasakan</h2>
      </div>
      {loading? (<h2 className="text-white bg-danger">loading...</h2> ):(
        <div className="row ">
          {data?.map((item) => (
            <div className="col-lg-3 col-12 mb-lg-3 mb-3">
              <CardGroup className=" h-100 ">
                <Card
                  key={item.id}
                  className="shadow bg-card "
                  onClick={
                    !loginsukses? 
                    handleShow
                    :
                    trans.length === 0
                      ? () => navigate("/pay")
                      : () => {
                          setMusicShow(true);
                          // console.log(`ini item yang di mapping ${}`);
                          setLagu(item);
                        }
                  }
                >
                  <Card.Body style={{height:"300px"}} className=" d-flex flex-column justify-content-between text-white">
                    <img style={{height:"170px"}} alt="" src={item.image} />
                    <div className="d-flex justify-content-between mt-1">
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.year}</Card.Text>
                    </div>
                    <Card.Text>{item.artis.name}</Card.Text>
               
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          ))}
        </div> )}
        <Modal show={show} onHide={handleClos}>
          <Modal.Body>Harap Login terlebih dahulu</Modal.Body>
        </Modal>
        <Modal
          size="xl"
          show={musicShow}
          onHide={handleClose}
          setisplaying={setisplaying}
          className="stmodal"
          aria-labelledby="contained-modal-title-vcenter stmodal"
          centered
        >
        
          <audio src={lagu?.song} ref={audioElem} onTimeUpdate={onPlaying} />
          <Player
            songs={data}
            setSongs={setData}
            isplaying={isplaying}
            setisplaying={setisplaying}
            audioElem={audioElem}
            currentSong={lagu}
            setCurrentSong={setLagu}
          />
        </Modal> 
      </Container>
    </div>
  );
};

export default Playlist;
