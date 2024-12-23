import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01, _N01, _N26, _N31, _O01, _O03, _O05, _O06 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC18Info } from "../model/REC18Info";
import { REC01Info } from "../model/REC01Info";

export default function EFertilizer2() {
  const { enumeratesk2, page, setPage} = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputO01, setInputO01] = useState<string>("");
  const [inputO02_1, setInputO02_1] = useState<string>("");
  const [inputO02_2, setInputO02_2] = useState<string>("");
  const [inputO02_3, setInputO02_3] = useState<string>("");
  const [inputO02_4, setInputO02_4] = useState<string>("");
  const [inputO02_5, setInputO02_5] = useState<string>("");
  const [inputO02_6, setInputO02_6] = useState<string>("");

  const [inputO03, setInputO03] = useState<string>("");
  const [inputO04_1, setInputO04_1] = useState<string>("");
  const [inputO04_2, setInputO04_2] = useState<string>("");
  const [inputO04_3, setInputO04_3] = useState<string>("");
  const [inputO04_4, setInputO04_4] = useState<string>("");

  const [inputO05, setInputO05] = useState<string>("");
  const [inputO06, setInputO06] = useState<string>("");
  const [inputO07_1, setInputO07_1] = useState<string>("");
  const [inputO07_2, setInputO07_2] = useState<string>("");

  //state disabled
  const [disabledA02_1, setDisabledA02_1] = useState<boolean>(false);

  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {
    console.log("load page EFertilizer2");

    getREC18()

  }, [page === 21]);
  
  async function getREC18() {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
      ]);

      try {

        //url getREC18
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC18/" + enumeratesk2?.AH_CODE;
        }

        //api getREC18
        const result = await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                //set state
                let item: REC18Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                setInputO01(item?.O01!)
                setInputO02_1(item?.O02_1!)
                setInputO02_2(item?.O02_2!)
                setInputO02_3(item?.O02_3!)
                setInputO02_4(item?.O02_4!)
                setInputO02_5(item?.O02_5!)
                setInputO02_6(item?.O02_6!)
                setInputO03(item?.O03!)
                setInputO04_1(item?.O04_1!)
                setInputO04_2(item?.O04_2!)
                setInputO04_3(item?.O04_3!)
                setInputO04_4(item?.O04_4!)
                setInputO05(item?.O05!)
                setInputO06(item?.O06!)
                setInputO07_1(item?.O07_1!)
                setInputO07_2(item?.O07_2!)

                //panel
                if (item?.O01! === "0") {
                  setIsPanel2("none") //ปิด
                }
                else {
                  setIsPanel2("") //เปิด
                }

                if (item?.O03! === "0") {
                  setIsPanel4("none") //ปิด
                }
                else {
                  setIsPanel4("") //เปิด
                }

                if (item?.O06! === "0") {
                  setIsPanel7("none") //ปิด
                }
                else {
                  setIsPanel7("") //เปิด
                }

                if(item?.O02_1! === "1" || item?.O04_1! === "1"){
                  setDisabledO05(false)
                }
                else{
                  setDisabledO05(true)
                }

              }
              else{

                //เริ่มมาหน้านี้ครั้งแรกยังไม่มีข้อมูล ขอให้เทาๆไว้ก่อน 
                setDisabledO05(true)

              }

              return true;
      
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC18): ", err);
          });

          //หลังจากเรียกข้อมูล การใช้ปุ๋ย REC18 เสร็จแล้ว
          if(result){

            //เรียกข้อมูล ผืนที่ดิน REC01 มาใช้ตรวจสอบ

            //url getREC01
            let url_rec01_api: string = "";
            if (process.env.REACT_APP_ENUMERATE_API) {
              url_rec01_api =
                process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01/" + enumeratesk2?.AH_CODE!;
            }

            //api getREC01
            await axios
            .get(url_rec01_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {

                if (res.data[0] !== undefined) {

                  let rec01:REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) =>value === null ? "" : value)
                  //ถ้า A02_1 = 0 ให้ disabled O01-O05 และให้ค่าว่างไว้
                  if(rec01?.A02_1! === "0"){

                    setDisabledA02_1(true)
                    setDisabledO05(true)

                    setInputO01("")
                    setInputO02_1("")
                    setInputO02_2("")
                    setInputO02_3("")
                    setInputO02_4("")
                    setInputO02_5("")
                    setInputO02_6("")
                    setInputO03("")
                    setInputO04_1("")
                    setInputO04_2("")
                    setInputO04_3("")
                    setInputO04_4("")
                    setInputO05("")

                    setIsPanel2("none") //ปิด
                    setIsPanel4("none") //ปิด

                    setInvalidO01(false)
                    setInvalidO03(false)


                  }
                  
                }
          
              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01 on EFertilizer2): ", err);
            });

          }


      } catch (err) {
        console.error("ERROR (getREC18): ", err);
      }
    }
  }

  //state : panel
  const [isPanel2, setIsPanel2] = useState<string>("none"); //ปิด
  const [isPanel4, setIsPanel4] = useState<string>("none"); //ปิด
  const [isPanel7, setIsPanel7] = useState<string>("none"); //ปิด

  //action : input
  const O01OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO01(event.target.value)

    //ถ้า O01 = 0 แล้ว O02_1 - O02_6 = blank
    if (event.target.value === "0") {
      setIsPanel2("none") //ปิด

      setInputO02_1("")
      setInputO02_2("")
      setInputO02_3("")
      setInputO02_4("")
      setInputO02_5("")
      setInputO02_6("")

      if (inputO03 !== "1"){
        setDisabledO05(true)
        setInputO05("")
      }
      else{
        if(inputO04_1 !== "1"){
          setDisabledO05(true)
          setInputO05("")
        }
        else{
          setDisabledO05(false)
        }        
      }
     

      setShowWarningO02("none")
    }
    else{
      setIsPanel2("") //เปิด

      setInputO02_1("0")
      setInputO02_2("0")
      setInputO02_3("0")
      setInputO02_4("0")
      setInputO02_5("0")
      setInputO02_6("0")
    }

    setInvalidO01(false)
  }

  const O02_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO02_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked !== true && inputO04_1 !== "1"){
      setDisabledO05(true)
      setInputO05("")
      
    }
    else{
      setDisabledO05(false)
    }
    setShowWarningO05("none")
  }
  const O02_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO02_2(event.target.checked === true ? "1" : "0");
  }
  const O02_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO02_3(event.target.checked === true ? "1" : "0");
  }
  const O02_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO02_4(event.target.checked === true ? "1" : "0");
  }
  const O02_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO02_5(event.target.checked === true ? "1" : "0");
  }
  const O02_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO02_6(event.target.checked === true ? "1" : "0");
  }

  const O03OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO03(event.target.value)

    //ถ้า O03 = 0 แล้ว O04_1 - O04_4 = blank
    if (event.target.value === "0") {
      setIsPanel4("none") //ปิด

      setInputO04_1("")
      setInputO04_2("")
      setInputO04_3("")
      setInputO04_4("")

      if (inputO01 !== "1"){
        setDisabledO05(true)
        setInputO05("")
      }
      else{
        if(inputO02_1 !== "1"){
          setDisabledO05(true)
          setInputO05("")
        }
        else{
          setDisabledO05(false)
        }        
      }

      setShowWarningO04("none")

    }
    else{
      setIsPanel4("") //เปิด

      setInputO04_1("0")
      setInputO04_2("0")
      setInputO04_3("0")
      setInputO04_4("0")
    }

    setInvalidO03(false)
  }
  const O04_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO04_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked !== true && inputO02_1 !== "1"){
      setDisabledO05(true)
      setInputO05("")
      
    }
    else{
      setDisabledO05(false)
    }
    setShowWarningO05("none")
  }
  const O04_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO04_2(event.target.checked === true ? "1" : "0");
  }
  const O04_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO04_3(event.target.checked === true ? "1" : "0");
  }
  const O04_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO04_4(event.target.checked === true ? "1" : "0");
  }

  const O05OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO05(event.target.value)
  }

  const O06OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO06(event.target.value)

    //ถ้า O06 = 0 แล้ว O07_1 - O07_2 = blank
    if (event.target.value === "0") {
      setIsPanel7("none") //ปิด

      setInputO07_1("")
      setInputO07_2("")

    }
    else{
      setIsPanel7("") //เปิด
    }

    setInvalidO06(false)
  }

  const O07_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO07_1(event.target.checked === true ? "1" : "0");
  }
  const O07_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputO07_2(event.target.checked === true ? "1" : "0");
  }


  //state invalid
  const [invalidO01, setInvalidO01] = useState<boolean>(false);
  const [invalidO03, setInvalidO03] = useState<boolean>(false);
  const [invalidO06, setInvalidO06] = useState<boolean>(false);

  //state warning
  const [showWarningO02, setShowWarningO02] = useState<string>("none"); // ปิด
  const [showWarningO04, setShowWarningO04] = useState<string>("none"); // ปิด
  const [showWarningO07, setShowWarningO07] = useState<string>("none"); // ปิด
  const [showWarningO05, setShowWarningO05] = useState<string>("none"); // ปิด

  const scollToWarningO02  = useRef<null | HTMLDivElement>(null);
  const scollToWarningO04  = useRef<null | HTMLDivElement>(null);
  const scollToWarningO07  = useRef<null | HTMLDivElement>(null);
  const scollToWarningO05  = useRef<null | HTMLDivElement>(null);

  //state disabled
  const [disabledO05, setDisabledO05] = useState<boolean>(false);


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 8 การใช้ปุ๋ย
  const SaveOnClick = async () => {

    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      o01: inputO01,
      o02_1: inputO02_1,
      o02_2: inputO02_2,
      o02_3: inputO02_3,
      o02_4: inputO02_4,
      o02_5: inputO02_5,
      o02_6: inputO02_6,
      o03: inputO03,
      o04_1: inputO04_1,
      o04_2: inputO04_2,
      o04_3: inputO04_3,
      o04_4: inputO04_4,
      o05: inputO05,
      o06: inputO06,
      o07_1: inputO07_1,
      o07_2: inputO07_2
    };

    //consistency check
    let isvalid = true;

    //ถ้าไม่ใช่ผืนที่ดินที่มีการปลูกพืช
    if(disabledA02_1 === true){

    }
    else{
      //มีการปลูกพืช

      if(inputO01 === ""){
        isvalid = false
        setInvalidO01(true)
      }
      else{
        setInvalidO01(false)
      }
  
      //
      if(inputO03 === ""){
        isvalid = false
        setInvalidO03(true)
      }
      else{
        setInvalidO03(false)
      }

    }
    

    if(inputO06 === ""){
      isvalid = false
      setInvalidO06(true)
    }
    else{
      setInvalidO06(false)
    }

    if(inputO01 === "1"){
      if(inputO02_1 === "1" || inputO02_2 === "1" || inputO02_3 === "1" || inputO02_4 === "1" || inputO02_5 === "1" || inputO02_6 === "1" ){
        setShowWarningO02("none")
      }
      else{
        isvalid = false
        setShowWarningO02("")
        scollToWarningO02.current?.scrollIntoView({behavior: 'smooth'})
      }
    }

    if(inputO03 === "1"){
      if(inputO04_1 === "1" || inputO04_2 === "1" || inputO04_3 === "1" || inputO04_4 === "1"  ){
        setShowWarningO04("none")
      }
      else{
        isvalid = false
        setShowWarningO04("")
        scollToWarningO04.current?.scrollIntoView({behavior: 'smooth'})
      }
    }

    if(inputO02_1 === "1" || inputO04_1 === "1" ){
      if(inputO05 === ""){
        isvalid = false
        setShowWarningO05("")
        scollToWarningO05.current?.scrollIntoView({behavior: 'smooth'})
      }
      else{
        setShowWarningO05("none")
      }
    }

    if(inputO06 === "1"){
      if(inputO07_1 === "1" || inputO07_2 === "1" ){
        setShowWarningO07("none")
      }
      else{
        isvalid = false
        setShowWarningO07("")
        scollToWarningO07.current?.scrollIntoView({behavior: 'smooth'})
      }
    }








    //ผ่านการ consistency check
    if (isvalid) {

      try {
      
        const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
        if (api.authToken) {
          let auth: string = api.authToken;

          const headers = {
            Authorization: "Basic " + auth,
            "Content-Type": "application/json;charset=UTF-8",
          };

          //url insertREC18
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC18";
          }

          //api insertREC18
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  //setPage(page + 1);
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });

          //consistency check ===============================================================
          let rec01list: REC01Info[] = [];
          // url getREC01List
          let url_getREC01List_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_getREC01List_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
          }

          // api getREC01List
          await axios
            .get(url_getREC01List_api, { headers: headers, })
            .then((res) => {
              if (res.status === 200) {
                rec01list = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
              }
            })
            .catch((err) => { console.log("AXIOS ERROR (getREC01List in EFertilizer2): ", err); }); 

          //เช็คจาก A04
          //(เฉพาะผู้ถือครองที่ตอบ A04 = 1 หรือ A04 = 2)
          if(rec01list[0].A04 === "1" || rec01list[0].A04 === "2"){
            setPage(22); //ไปตอนที่ 9 แหล่งที่มาของรายได้
          }
          else{

            //ถ้า A04 = 3 หรือ A04 = 4 หรือ A04 = 5 แล้ว ตอนที่ 9, 10 ทุกตัวแปร = blank


            setPage(24); //ข้ามไปตอนที่ 11 การประสบปัญหา/ภัยพิบัติ 
          }


        }

      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 8 การใช้ปุ๋ย): ", error);
      }

      

    }
    else {
      //ไม่ต้องทำอะไร
    }

    
  };


  async function NextOnClick(){

    try {
      
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        //consistency check ===============================================================
        let rec01list: REC01Info[] = [];
        // url getREC01List
        let url_getREC01List_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_getREC01List_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
        }

        // api getREC01List
        await axios
          .get(url_getREC01List_api, { headers: headers, })
          .then((res) => {
            if (res.status === 200) {
              rec01list = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
            }
          })
          .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in EFertilizer2): ", err); }); 

        //เช็คจาก A04
        //(เฉพาะผู้ถือครองที่ตอบ A04 = 1 หรือ A04 = 2)
        if(rec01list[0].A04 === "1" || rec01list[0].A04 === "2"){
          setPage(22); //ไปตอนที่ 9 แหล่งที่มาของรายได้
        }
        else{

          //ถ้า A04 = 3 หรือ A04 = 4 หรือ A04 = 5 แล้ว ตอนที่ 9, 10 ทุกตัวแปร = blank


          setPage(24); //ข้ามไปตอนที่ 11 การประสบปัญหา/ภัยพิบัติ 
        }


      }

    } catch (error) {
      console.error("NextOnClick ERROR (ตอนที่ 8 การใช้ปุ๋ย): ", error);
    }

  }

  return (
    <div>
      <Container className="container-xxl flex-grow-1 container-p-y">

        <form
          onSubmit={handleSubmit(() =>
            userInfo?.roleId !== 9 && userInfo?.roleId !== 10
              ? NextOnClick() //setPage(page + 1)
              : process.env.REACT_APP_PROJECT === "open"
                ? SaveOnClick()
                : setPage(page + 1)
          )}
        >

          <Row>
            <Col md={12}>
              <Card>
                <Card.Header className="header">
                  <Row className="flex-between-center">
                    <Col
                      className="col-10 d-flex align-items-center pr-0"
                    >
                      <h5 className="mb-0 py-2 text-white ">
                        ตอนที่ 8 การใช้ปุ๋ย การป้องกันกำจัดศัตรูพืช และการจ้างทำงานเกษตรในที่ถือครอง
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl522338"
                        aria-expanded="false"
                        aria-controls="collapseControl522338"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl522338">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้ใช้ปุ๋ยหรือไม่ (ตอบเพียงข้อเดียว)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>O01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_O01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className={`form-check-input ${invalidO01?"is-invalid":""}`}
                                  name="rd_O01"
                                  type="radio"
                                  id={`rd_O01${index}`}
                                  checked={option.value === inputO01}
                                  onChange={O01OnChange}
                                  value={option.value}
                                  disabled={disabledA02_1}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_O01${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                            <div className="invalid-feedback">กรุณาเลือก O01 </div>
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title" style={{display:isPanel2}}>
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            2. ชนิดปุ๋ยที่ใช้ (ตอบได้มากกว่า 1 ข้อ)
                          </label>
                        </Col>
                      </Row>

                      <Row style={{display:isPanel2}} >
                        <Col md={12}>

                          <Row className="">

                            <Col md={12} className="mt-3">
                              <label> O02_1 </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O02_1"
                                    onChange={O02_1OnChange}
                                    checked={inputO02_1 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O02_1">
                                    {" "}
                                    1. ปุ๋ยเคมี
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O02_2  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O02_2"
                                    onChange={O02_2OnChange}
                                    checked={inputO02_2 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O02_2">
                                    {" "}
                                    2. ปุ๋ยคอก
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O02_3  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O02_3"
                                    onChange={O02_3OnChange}
                                    checked={inputO02_3 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O02_3">
                                    {" "}
                                    3. ปุ๋ยพืชสด
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O02_4  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O02_4"
                                    onChange={O02_4OnChange}
                                    checked={inputO02_4 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O02_4">
                                    {" "}
                                    4. ปุ๋ยหมัก
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O02_5  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O02_5"
                                    onChange={O02_5OnChange}
                                    checked={inputO02_5 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O02_5">
                                    {" "}
                                    5. ปุ๋ยอินทรีย์อื่น ๆ เช่น ฟางข้าว กากตะกอนอ้อย ทะลายปาล์ม เป็นต้น
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O02_6  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O02_6"
                                    onChange={O02_6OnChange}
                                    checked={inputO02_6 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O02_6">
                                    {" "}
                                    6. ปุ๋ยชีวภาพ
                                  </label>
                                </div>
                              </div>
                            </Col>


                          </Row>

                          <Row>
                            <Col md={12}>
                              <div ref={scollToWarningO02}></div>
                              <div className="mb-3" style={{ display: showWarningO02 }}><label className="text-danger">กรุณาเลือก O02_1 ถึง O02_6 อย่างน้อย 1 รายการ</label></div>
                            </Col>
                          </Row>

                        </Col>
                      </Row>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            3. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการป้องกัน/กำจัดศัตรูพืชหรือไม่ (ตอบเพียงข้อเดียว)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>O03</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_O03.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className={`form-check-input ${invalidO03?"is-invalid":""}`}
                                  name="rd_O03"
                                  type="radio"
                                  id={`rd_O03${index}`}
                                  checked={option.value === inputO03}
                                  onChange={O03OnChange}
                                  value={option.value}
                                  disabled={disabledA02_1}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_O03${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                            <div className="invalid-feedback">กรุณาเลือก O03 </div>
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title" style={{display:isPanel4}}>
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            4. วิธีการป้องกัน/กำจัดศัตรูพืช (ตอบได้มากกว่า 1 ข้อ)
                          </label>
                        </Col>
                      </Row>

                      <Row style={{display:isPanel4}}>
                        <Col md={12}>

                          <Row className="">

                            <Col md={12} className="mt-3">
                              <label> O04_1 </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O04_1"
                                    onChange={O04_1OnChange}
                                    checked={inputO04_1 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O04_1">
                                    {" "}
                                    1. สารเคมี
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O04_2  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O04_2"
                                    onChange={O04_2OnChange}
                                    checked={inputO04_2 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O04_2">
                                    {" "}
                                    2. สารธรรมชาติ
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O04_3  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O04_3"
                                    onChange={O04_3OnChange}
                                    checked={inputO04_3 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O04_3">
                                    {" "}
                                    3. ใช้ศัตรูธรรมชาติ
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O04_4  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O04_4"
                                    onChange={O04_4OnChange}
                                    checked={inputO04_4 === "1" ? true : false}
                                    disabled={disabledA02_1}
                                  />
                                  <label className="form-check-label" htmlFor="O04_4">
                                    {" "}
                                    4. ใช้วิธีอื่น ๆ เช่น การห่อผลไม้ การใช้ไฟล่อ การไถพรวน ฯลฯ
                                  </label>
                                </div>
                              </div>
                            </Col>

                          </Row>

                          <Row>
                            <Col md={12}>
                            <div ref={scollToWarningO04}></div>
                              <div className="mb-3" style={{ display: showWarningO04 }}><label className="text-danger">กรุณาเลือก O04_1 ถึง O04_4 อย่างน้อย 1 รายการ</label></div>
                            </Col>
                          </Row>

                        </Col>
                      </Row>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            ถามเฉพาะผู้ถือครองทำการเกษตรที่ใช้ปุ๋ยเคมี และ/หรือ สารเคมีในที่ถือครอง (O02_1 = 1 และ/หรือ O04_1 = 1)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            5. ท่านกังวลถึงความเสี่ยงต่อสิ่งแวดล้อมและสุขภาพ จากการใช้ปุ๋ยเคมีและสารเคมีกำจัดศัตรูพืชหรือไม่ (ตอบเพียงข้อเดียว)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>O05</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_O05.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_O05"
                                  type="radio"
                                  id={`rd_O05${index}`}
                                  checked={option.value === inputO05}
                                  onChange={O05OnChange}
                                  value={option.value}
                                  disabled={disabledO05}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_O05${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div ref={scollToWarningO05}></div>
                          <div className="mb-3" style={{ display: showWarningO05 }}><label className="text-danger">กรุณาเลือก O05</label></div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            6. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้ มีการจ้างลูกจ้างทำงานเกษตรหรือไม่ (ตอบเพียงข้อเดียว)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>O06</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_O06.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className={`form-check-input ${invalidO06?"is-invalid":""}`}
                                  name="rd_O06"
                                  type="radio"
                                  id={`rd_O06${index}`}
                                  checked={option.value === inputO06}
                                  onChange={O06OnChange}
                                  value={option.value}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_O06${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                            <div className="invalid-feedback">กรุณาเลือก O06 </div>
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title" style={{display:isPanel7}}>
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            7. แหล่งที่มาของลูกจ้าง (ตอบได้มากกว่า 1 ข้อ)
                          </label>
                        </Col>
                      </Row>

                      <Row style={{display:isPanel7}}>
                        <Col md={12}>

                          <Row className="">

                            <Col md={12} className="mt-3">
                              <label> O07_1 </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O07_1"
                                    onChange={O07_1OnChange}
                                    checked={inputO07_1 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="O07_1">
                                    {" "}
                                    1. คนไทย
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> O07_2  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="O07_2"
                                    onChange={O07_2OnChange}
                                    checked={inputO07_2 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="O07_2">
                                    {" "}
                                    2. คนต่างชาติ
                                  </label>
                                </div>
                              </div>
                            </Col>


                          </Row>

                          <Row>
                            <Col md={12}>
                              <div ref={scollToWarningO07}></div>
                              <div className="mb-3" style={{ display: showWarningO07 }}><label className="text-danger">กรุณาเลือก O07_1 ถึง O07_2 อย่างน้อย 1 รายการ</label></div>
                            </Col>
                          </Row>

                        </Col>
                      </Row>


                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="mt-2 sticky-bottom">
            <Card.Body>
              <Row>
                <div className="col-lg-12 col-sm-auto pr-0">
                  <div className="float-end">
                    <button
                      onClick={() => setPage(page - 1)}
                      type="button"
                      className="btn btn-outline-secondary me-2"
                    >
                      กลับ
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      ถัดไป
                    </button>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>

        </form>

      </Container>


    </div>
  );
}
