import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01, _T04 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC16Info } from "../model/REC16Info";
import { LandCalculator } from "../service/LandCalculator";
import { REC01Info } from "../model/REC01Info";

export default function ESeaSaltFarming2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputT04, setInputT04] = useState<string>("");
  const [inputM01, setInputM01] = useState<string>("16200"); //รหัสอะไรหรอครับ 16200
  const [inputM02, setInputM02] = useState<string>("");
  const [inputM03, setInputM03] = useState<string>("");
  const [inputM03A, setInputM03A] = useState<string>("");
  const [inputM03B, setInputM03B] = useState<string>("");
  const [inputM03C, setInputM03C] = useState<string>("");
  const [inputM04, setInputM04] = useState<string>("");

  const [rec01list, setRec01list] = useState<REC01Info[]>([]);

  //state rec01
  const [valueA17, setValueA17] = useState<string>("");


  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {
    console.log("load page ESeaSaltFarming2");

    setInputT04("1")

    getREC16()
    getREC01()

  }, [page === 17]);

  async function getREC16() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC16/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                //console.log(res.data);

                //set state
                let item: REC16Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                //setInputT04(item?.T04!)

                //setInputM01(item.M01)
                setInputM02(item?.M02 === "" ? "" : parseInt(item?.M02!).toString())
                setInputM03A(item?.M03A === "" ? "" : parseInt(item?.M03A!).toString())
                setInputM03B(item?.M03B === "" ? "" : parseInt(item?.M03B!).toString())
                setInputM03C(item?.M03C === "" ? "" : parseInt(item?.M03C!).toString())
                setInputM04(item?.M04 === "" ? "" : parseInt(item?.M04!).toString())

              }

              
          
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC16): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC16): ", err);
      }
    }
  }

  async function getREC01() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data !== undefined) {

                //set state
                setRec01list(JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value));

                let rec01: REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                //เนื้อที่ที่เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด
                setValueA17(rec01?.A17!)
                

              }                            

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List on ESeaSaltFarming2): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC01List on ESeaSaltFarming2): ", err);
      }
    }
  }



  //action : input
  const T04OnChange = (event: any) => {
    setInputT04(event.currentTarget.value)
  }

  const M01OnChange = (event: any) => {
    setInputM01(event.currentTarget.value)
  }

  const M02OnChange = (event: any) => {
    setInputM02(event.currentTarget.value)
  }

  const M03OnChange = (event: any) => {
    setInputM03(event.currentTarget.value)
  }

  const M03AOnChange = (event: any) => {
    setInputM03A(event.currentTarget.value)
  }

  const M03BOnChange = (event: any) => {
    setInputM03B(event.currentTarget.value)
  }

  const M03COnChange = (event: any) => {
    setInputM03C(event.currentTarget.value)
  }

  const M04OnChange = (event: any) => {
    setInputM04(event.currentTarget.value)
  }



  //state warning
  const [showWarningM02, setShowWarningM02] = useState<string>("none"); // ปิด
  const [showWarningM03, setShowWarningM03] = useState<string>("none"); // ปิด
  const [showWarningM04, setShowWarningM04] = useState<string>("none"); // ปิด
  const [showWarningA17Blank, setShowWarningA17Blank] = useState<string>("none"); // ปิด


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 6 การทำนาเกลือสมุทร
  const SaveOnClick = async () => {

    //คำนวณผลรวมของ m03 เป็นทศนิยม xxxxx.xxxx
    const _M03= LandCalculator.CalculateSummary(Number(inputM03A),Number(inputM03B),Number(inputM03C)).toFixed(4).toString().padStart(10,'0')

    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      t04: inputT04,
      m01: inputM01,
      m02: inputM02,
      m03: _M03,
      m03A: inputM03A.padStart(5, '0'),
      m03B: inputM03B.padStart(1, '0'),
      m03C: inputM03C.padStart(2, '0'),
      m04: inputM04.padStart(7, '0')
    };

    //consistency check
    let isvalid = true;

    if(Number(inputM02) <= 0 ){
      isvalid = false
      setShowWarningM02("")
    }
    else{
      setShowWarningM02("none")
    }

    if(Number(inputM03A) > 0 || Number(inputM03B) > 0 || Number(inputM03C) > 0 ){
      setShowWarningM03("none")
    }
    else{      
      isvalid = false
      setShowWarningM03("")
    }

    if(Number(inputM04) <= 0 ){
      isvalid = false
      setShowWarningM04("")
    }
    else{
      setShowWarningM04("none")
    }

    //A17 ≠ blank
    if(Number(valueA17) > 0 ){
      setShowWarningA17Blank("none")
    }
    else{      
      setShowWarningA17Blank("")
      isvalid = false
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

          //url insertREC16
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC16";
          }

          //api insertREC16
          const result = await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  return true;                  

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });


            //รอจนกว่าบันทึกเสร็จ
            if(result){
              setPage(page + 1);
            }

        }

      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 6 การทำนาเกลือสมุทร): ", error);
      }

    }
    else{
      //ไม่ต้องทำอะไร
    }
    
    
  };


  async function OnClickBack(){

    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        //header api
        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        try {

          // url getREC01List
          let url_getREC01List_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_getREC01List_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
          }

          // api getREC01List
          await axios
            .get(url_getREC01List_api, {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {

                let rec01list: REC01Info[] = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)

                //consistency check 
                if (rec01list[0].A02_3 === "1"){
                  setPage(15); //ไปตอนที่ 5 การเลี้ยงสัตว์น้ำ
                }   
                else if (rec01list[0].A02_2 === "1"){
                  setPage(13); //ไปตอนที่ 4 การเลี้ยงสัตว์
                }   
                else if (rec01list[0].A02_1 === "1"){
                  setPage(3); //ไปตอนที่ 3 การปลูกพืช
                }                 
                else{
                  setPage(2); //ไปตอนที่ 2 เนื้อที่
                }
                                

              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01List in ESeaSaltFarming2 ): ", err);
            });
          
        } catch (error) {
          console.error("OnClickBack ERROR (ตอนที่ 6 การทำนาเกลือสมุทร): ", error);
        }

      }

  }

  //สำหรับสิทธิ์ 3 , 7
  async function NextOnClick(){

    try {
   
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

          //
          if(true){
            setPage(page + 1);
          }

      }

    } catch (error) {
      console.error("NextOnClick ERROR (ตอนที่ 6 การทำนาเกลือสมุทร): ", error);
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
                        ตอนที่ 6 การทำนาเกลือสมุทร (เฉพาะผู้ถือครองทำการเกษตรที่ตอบ A02_4 = 1)
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl52266"
                        aria-expanded="false"
                        aria-controls="collapseControl52266"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl52266">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการทำนาเกลือสมุทรหรือไม่ (ระบบกำหนดให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>T04</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_T04.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_T04"
                                  type="radio"
                                  value={option.value}
                                  id={`rd_T04${index}`}
                                  checked={option.value === inputT04}
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_T04${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Col>
                      </Row>

                      <Row >
                        <Col md={12}>

                          <Row className="mt-2 question-title">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                2. ให้สอบถามและบันทึกรายละเอียดการทำนาเกลือสมุทร
                              </label>
                            </Col>
                          </Row>

                          <Row className="">
                            <Col md={4} className="mt-3">
                              <label> M01 รหัส</label>
                              <input
                                type="text"
                                className="form-control"
                                disabled
                                value={inputM01}
                              />
                            </Col>
                            <Col md={4} className="mt-3">
                              <label> M02 จำนวนครั้งที่ทำ</label>
                              <div className="input-group mb-3">
                                <input
                                  type="number"
                                  className={`form-control ${inputM02 === "" || (Number(inputM02) >= 1 && Number(inputM02) <= 9)
                                      ? ""
                                      : "is-invalid"
                                    }`}
                                  min={1}
                                  max={9}
                                  onChange={M02OnChange}
                                  value={inputM02}
                                />
                                <span className="input-group-text">ครั้ง</span>
                                <div className="invalid-feedback">
                                  ค่าที่ระบุได้คือ 1 ถึง 9
                                </div>
                              </div>
                              <div className="" style={{ display: showWarningM02 }}><label className="text-danger">กรุณาระบุ M02 มากกว่า 0</label></div>
                            </Col>
                          </Row>

                          <Row className="">
                            <Col md={6} className="mt-3">
                              <label> M03A / M03B / M03C เนื้อที่ทำนาเกลือสมุทร (นับรวมทุกครั้งที่ทำ)  </label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  className={`form-control form-control-mini-x ${Number(inputM03A) >= 0 &&
                                      Number(inputM03A) <= 99999 && Number.isInteger(Number(inputM03A))
                                      ? ""
                                      : "is-invalid"
                                    }`}
                                  min={0}
                                  max={99999}
                                  onChange={M03AOnChange}
                                  value={inputM03A}
                                />
                                <span className="input-group-text">
                                  ไร่
                                </span>
                                <input
                                  type="number"
                                  className={`form-control form-control-mini-x ${Number(inputM03B) >= 0 &&
                                      Number(inputM03B) <= 3 && Number.isInteger(Number(inputM03B))
                                      ? ""
                                      : "is-invalid"
                                    }`}
                                  min={0}
                                  max={3}
                                  onChange={M03BOnChange}
                                  value={inputM03B}
                                />
                                <span className="input-group-text">
                                  งาน
                                </span>
                                <input
                                  type="number"
                                  className={`form-control form-control-mini-x ${Number(inputM03C) >= 0 &&
                                      Number(inputM03C) <= 99 && Number.isInteger(Number(inputM03C))
                                      ? ""
                                      : "is-invalid"
                                    }`}
                                  min={0}
                                  max={99}
                                  onChange={M03COnChange}
                                  value={inputM03C}
                                />
                                <span className="input-group-text">
                                  ตารางวา
                                </span>

                                <div className="invalid-feedback">
                                  ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                </div>

                              </div>
                              <div className="" style={{ display: showWarningM03 }}><label className="text-danger">กรุณาระบุ M03 มากกว่า 0</label></div>
                            </Col>
                            <Col md={6} className="mt-3">
                              <label> M04 ผลผลิต (นับรวมทุกครั้งที่เก็บผลผลิต)</label>
                              <div className="input-group mb-3">
                                <input
                                  type="number"
                                  className={`form-control ${inputM04 === "" || (Number(inputM04) >= 0 && Number(inputM04) <= 9999999 && Number.isInteger(Number(inputM04)) )
                                      ? ""
                                      : "is-invalid"
                                    }`}
                                  min={0}
                                  max={9999999}
                                  onChange={M04OnChange}
                                  value={inputM04}
                                />
                                <span className="input-group-text">กิโลกรัม</span>
                                <div className="invalid-feedback">
                                  ค่าที่ระบุได้คือ 0 ถึง 999999
                                </div>
                              </div>
                              <div className="" style={{ display: showWarningM04 }}><label className="text-danger">กรุณาระบุ M04 มากกว่า 0</label></div>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={12}>
                              <div className="mt-3" style={{ display: showWarningA17Blank}}><label className="text-danger">กรุณาระบุ เนื้อที่ของการทำนาเกลือสมุทร A17 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
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
                      onClick={() => OnClickBack()}
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
