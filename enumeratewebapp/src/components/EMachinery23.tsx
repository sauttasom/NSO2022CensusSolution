import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01, _N01, _N26, _N31 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC17Info } from "../model/REC17Info";

export default function EMachinery23() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();



  //state : input
  const [inputN31, setInputN31] = useState<string>("");
  const [inputN32, setInputN32] = useState<string>("");
  const [inputN33, setInputN33] = useState<string>("");
  const [inputN34, setInputN34] = useState<string>("");
  const [inputN35, setInputN35] = useState<string>("");
  const [inputN36, setInputN36] = useState<string>("");
  const [inputN37, setInputN37] = useState<string>("");
  const [inputN38, setInputN38] = useState<string>("");
  const [inputN39, setInputN39] = useState<string>("");
  const [inputN40, setInputN40] = useState<string>("");
  const [inputN41, setInputN41] = useState<string>("");
  const [inputN42, setInputN42] = useState<string>("");
  const [inputN43, setInputN43] = useState<string>("");
  const [inputN44, setInputN44] = useState<string>("");
  const [inputN45, setInputN45] = useState<string>("");
  const [inputN45_T, setInputN45_T] = useState<string>("");

  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {
    console.log("load page EMachinery23");

    getREC17()

    setShowWarningN31("none")

  }, [page === 20]);

  async function getREC17() {
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
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC17/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                //set state
                let item: REC17Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                //เซตให้ครบทุกฟิลดิ์ด้วยนะ ในตอนที่ 7-3 นี้เซต N31 ถึง N45_T
                setInputN31(item?.N31!)
                setInputN32(item?.N32!)
                setInputN33(item?.N33!)
                setInputN34(item?.N34!)
                setInputN35(item?.N35!)
                setInputN36(item?.N36!)
                setInputN37(item?.N37!)
                setInputN38(item?.N38!)
                setInputN39(item?.N39!)
                setInputN40(item?.N40!)
                setInputN41(item?.N41!)
                setInputN42(item?.N42!)
                setInputN43(item?.N43!)
                setInputN44(item?.N44!)
                setInputN45(item?.N45!)
                setInputN45_T(item?.N45_T!)

                //panel
                if (item?.N31! === "0" || item?.N31! === "") {
                  setIsPanel3_2("none") //ปิด
                }
                else {
                  setIsPanel3_2("") //เปิด
                }

              }
              

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC17 7-3): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC17 7-3): ", err);
      }
    }
  }

  //state : panel
  const [isPanel3_2, setIsPanel3_2] = useState<string>("none"); //ปิด


  //action : input
  const N31OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN31(event.target.value)

    //ถ้า N31 = 0 แล้ว N32 - N45 = blank --> ข้ามไปถาม ตอนที่ 8  , page = 21
    if (event.target.value === "0") {
      setIsPanel3_2("none") //ปิด

      setInputN32("");
      setInputN33("");
      setInputN34("");
      setInputN35("");
      setInputN36("");
      setInputN37("");
      setInputN38("");
      setInputN39("");
      setInputN40("");
      setInputN41("");
      setInputN42("");
      setInputN43("");
      setInputN44("");
      setInputN45("");
      setInputN45_T("");

    }
    else {
      setIsPanel3_2("") //เปิด

      setInputN32("0");
      setInputN33("0");
      setInputN34("0");
      setInputN35("0");
      setInputN36("0");
      setInputN37("0");
      setInputN38("0");
      setInputN39("0");
      setInputN40("0");
      setInputN41("0");
      setInputN42("0");
      setInputN43("0");
      setInputN44("0");
      setInputN45("0");
      setInputN45_T("");

    }

  }

  const N32OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN32(event.target.checked === true ? "1" : "0");
  };

  const N33OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN33(event.target.checked === true ? "1" : "0");
  };

  const N34OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN34(event.target.checked === true ? "1" : "0");
  };

  const N35OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN35(event.target.checked === true ? "1" : "0");
  };

  const N36OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN36(event.target.checked === true ? "1" : "0");
  };

  const N37OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN37(event.target.checked === true ? "1" : "0");
  };

  const N38OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN38(event.target.checked === true ? "1" : "0");
  };

  const N39OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN39(event.target.checked === true ? "1" : "0");
  };

  const N40OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN40(event.target.checked === true ? "1" : "0");
  };

  const N41OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN41(event.target.checked === true ? "1" : "0");
  };

  const N42OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN42(event.target.checked === true ? "1" : "0");
  };

  const N43OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN43(event.target.checked === true ? "1" : "0");
  };

  const N44OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN44(event.target.checked === true ? "1" : "0");
  };

  const N45OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN45(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setShowN45_T("")      
    }
    else{
      setShowN45_T("none")
      setInputN45_T("")
    }

    setShowWarningN45_T("none")
  };

  const N45_TOnChange = (event: any) => {
    setInputN45_T(event.currentTarget.value)
  };


  //state show / hide : input
  const [showN45_T, setShowN45_T] = useState<string>("none"); // ปิด



  //state warning
  const [showWarningN31, setShowWarningN31] = useState<string>("none"); // ปิด
  const [showWarningN31Blank, setShowWarningN31Blank] = useState<string>("none"); // ปิด
  const [showWarningN45_T, setShowWarningN45_T] = useState<string>("none"); // ปิด

  const scollToWarning  = useRef<null | HTMLDivElement>(null);

  //save N31
  const SaveOnClick = async () => {

    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      n31: inputN31,
      n32: inputN32,
      n33: inputN33,
      n34: inputN34,
      n35: inputN35,
      n36: inputN36,
      n37: inputN37,
      n38: inputN38,
      n39: inputN39,
      n40: inputN40,
      n41: inputN41,
      n42: inputN42,
      n43: inputN43,
      n44: inputN44,
      n45: inputN45,
      n45_T: inputN45_T
    };

    //consistency check
    let isvalid = true;

    if (inputN31 === "1") {
      if (inputN32 === "1" || inputN33 === "1" || inputN34 === "1" || inputN35 === "1"
        || inputN36 === "1" || inputN37 === "1" || inputN38 === "1" || inputN39 === "1" || inputN40 === "1"
        || inputN41 === "1" || inputN42 === "1" || inputN43 === "1" || inputN44 === "1" || inputN45 === "1") {
        setShowWarningN31("none")
      }
      else {
        isvalid = false
        setShowWarningN31("")
        scollToWarning.current?.scrollIntoView({behavior: 'smooth'})
      }
    }

    if (inputN31 === ""){
      isvalid = false
      setShowWarningN31Blank("")
    }
    else{
      setShowWarningN31Blank("none")
    }

    if(inputN45 === "1"){
      if(inputN45_T === "" ){
        isvalid = false
        setShowWarningN45_T("")
        scollToWarning.current?.scrollIntoView({behavior: 'smooth'})
      }
      else{
        setShowWarningN45_T("none")
      }
    }

 

    //ผ่านการ consistency check
    if (isvalid) {

      try {

        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N31";
        }

        const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
        if (api.authToken) {
          let auth: string = api.authToken;

          const headers = {
            Authorization: "Basic " + auth,
            "Content-Type": "application/json;charset=UTF-8",
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  setPage(page + 1);

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });
        }

      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 7 (7.3) เครื่องจักร เครื่องมือ เทคโนโลยีดิจิทัลทางการเกษตร และอุปกรณ์การขนส่งเพื่อการเกษตร): ", error);
      }

    }
    else {
      //ไม่ต้องทำอะไร
    }
    
  };

  async function NextOnClick(){

    setPage(page + 1);

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
                        ตอนที่ 7 เครื่องจักร เครื่องมือ และเทคโนโลยีดิจิทัลทางการเกษตร อุปกรณ์การขนส่งเพื่อการเกษตร และแอปพลิเคชันเพื่อการเกษตร (ต่อ)
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl52233"
                        aria-expanded="false"
                        aria-controls="collapseControl52233"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl52233">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            3. แอปพลิเคชันเพื่อการเกษตร
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            3.1 ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการใช้แอปพลิเคชันเพื่อการเกษตรหรือไม่
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>N31</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_N31.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_N31"
                                  type="radio"
                                  id={`rd_N31${index}`}
                                  checked={option.value === inputN31}
                                  onChange={N31OnChange}
                                  value={option.value}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_N31${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Col>
                      </Row>

                      <Row style={{display:isPanel3_2}} >
                        <Col md={12}>

                          <Row className="mt-2 question-subTitle">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                3.2 ให้สอบถามและบันทึก วัตถุประสงค์ของการใช้แอปพลิเคชันเพื่อการเกษตร (ตอบได้มากกว่า 1 ข้อ)
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">

                            <Col md={12} className="mt-3">
                              <label> N32  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N32"
                                    onChange={N32OnChange}
                                    checked={inputN32 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N32">
                                    {" "}
                                    1. ดูพยากรณ์อากาศ
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N33  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N33"
                                    onChange={N33OnChange}
                                    checked={inputN33 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N33">
                                    {" "}
                                    2. วางแผนการใช้ที่ดินในแปลง
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N34  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N34"
                                    onChange={N34OnChange}
                                    checked={inputN34 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N34">
                                    {" "}
                                    3. หาคำแนะนำด้านการผลิต
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N35  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N35"
                                    onChange={N35OnChange}
                                    checked={inputN35 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N35">
                                    {" "}
                                    4. ตรวจสอบข้อมูลดิน ความอุดมสมบูรณ์ และคำแนะนำปุ๋ย
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N36  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N36"
                                    onChange={N36OnChange}
                                    checked={inputN36 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N36">
                                    {" "}
                                    5. ตรวจสอบการระบาดของโรคแมลง
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N37  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N37"
                                    onChange={N37OnChange}
                                    checked={inputN37 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N37">
                                    {" "}
                                    6. บริหารจัดการ การให้น้ำตามความต้องการของพืช
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N38  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N38"
                                    onChange={N38OnChange}
                                    checked={inputN38 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N38">
                                    {" "}
                                    7. ตรวจสอบราคาปัจจัยการผลิต เช่น ปุ๋ย สารกำจัดศัตรูพืช อุปกรณ์ เป็นต้น
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N39  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N39"
                                    onChange={N39OnChange}
                                    checked={inputN39 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N39">
                                    {" "}
                                    8. ตรวจสอบราคาสินค้าที่ขาย
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N40  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N40"
                                    onChange={N40OnChange}
                                    checked={inputN40 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N40">
                                    {" "}
                                    9. หาร้านจำหน่ายและให้บริการรวมถึงการจองคิวปัจจัยการผลิต
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N41  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N41"
                                    onChange={N41OnChange}
                                    checked={inputN41 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N41">
                                    {" "}
                                    10. หาแหล่งรับซื้อผลผลิตของท่าน
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N42  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N42"
                                    onChange={N42OnChange}
                                    checked={inputN42 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N42">
                                    {" "}
                                    11. บันทึกข้อมูลกิจกรรมการผลิตและบัญชีรายรับรายจ่าย
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N43  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N43"
                                    onChange={N43OnChange}
                                    checked={inputN43 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N43">
                                    {" "}
                                    12. ประกันภัยพืชผลทางการเกษตร
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N44  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N44"
                                    onChange={N44OnChange}
                                    checked={inputN44 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N44">
                                    {" "}
                                    13. ใช้สำหรับลงทะเบียน ให้ข้อมูล และติดต่อภาครัฐ
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="mt-3">
                              <label> N45  </label>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="N45"
                                    onChange={N45OnChange}
                                    checked={inputN45 === "1" ? true : false}
                                  />
                                  <label className="form-check-label" htmlFor="N45">
                                    {" "}
                                    14. อื่นๆ (โปรดระบุ)
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12} className="">
                              <label> </label>
                              <input
                                type="text"
                                className="form-control"
                                maxLength={50}
                                onChange={N45_TOnChange}
                                value={inputN45_T}
                                style={{ display: showN45_T }}
                              />
                            </Col>


                          </Row>


                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div ref={scollToWarning}></div>
                          <div className="mt-3" style={{ display: showWarningN45_T }}><label className="text-danger">กรุณาระบุ อื่นๆ (N45_T)</label></div>
                          <div className="mt-3" style={{ display: showWarningN31 }}><label className="text-danger">กรุณาเลือก N32 ถึง N45 อย่างน้อย 1 รายการ</label></div>
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
