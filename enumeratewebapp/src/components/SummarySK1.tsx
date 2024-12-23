import React, { useEffect, useState } from "react";
import { useGlobalListingContext } from "./Listing2Context";
import { useGlobalUserContext } from "./UserContext";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";
import { Link } from "react-router-dom";


export default function SummarySK1() {
  const { listing, page, setPage } = useGlobalListingContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputStatus_Address, setInputStatus_Address] = useState("");
  const [inputStatus_Resident, setInputStatus_Resident] = useState("");
  const [inputStatus_Holder, setInputStatus_Holder] = useState("");
  const [inputStatus_Name, setInputStatus_Name] = useState("");
  const [inputStatus_Farming, setInputStatus_Farming] = useState("");
  const [inputStatus_Activity, setInputStatus_Activity] = useState("");

  //state : info
  const [inputAddress, setInputAddress] = useState("");
  const [inputResident, setInputResident] = useState("");
  const [inputHolder, setInputHolder] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputFarming, setInputFarming] = useState("");
  const [inputSK2, setInputSK2] = useState("");

  //state show / hide
  const [showBtnStatus_Address, setshowBtnStatus_Address] = useState<string>("none"); // ปิด
  const [showBtnStatus_Resident, setShowBtnStatus_Resident] = useState<string>("none"); // ปิด
  const [showBtnStatus_Holder, setShowBtnStatus_Holder] = useState<string>("none"); // ปิด
  const [showBtnStatus_Name, setShowBtnStatus_Name] = useState<string>("none"); // ปิด
  const [showBtnStatus_Farming, setShowBtnStatus_Farming] = useState<string>("none"); // ปิด
  const [showBtnStatus_Activity, setShowBtnStatus_Activity] = useState<string>("none"); // ปิด

  const Status_AddressOnchange = (event: any) => {
    setInputStatus_Address(event.currentTarget.value);

    if (event.currentTarget.value === "0") {
      setshowBtnStatus_Address(""); //เปิด
    } else {
      setshowBtnStatus_Address("none"); //ปิด
    }
  };

  const Status_ResidentOnchange = (event: any) => {
    setInputStatus_Resident(event.currentTarget.value);

    if (event.currentTarget.value === "0") {
        setShowBtnStatus_Resident(""); //เปิด
    } else {
        setShowBtnStatus_Resident("none"); //ปิด
    }
  };

  const Status_HolderOnchange = (event: any) => {
    setInputStatus_Holder(event.currentTarget.value);

    if (event.currentTarget.value === "0") {
        setShowBtnStatus_Holder(""); //เปิด
    } else {
        setShowBtnStatus_Holder("none"); //ปิด
    }
  };

  const Status_NameOnchange = (event: any) => {
    setInputStatus_Name(event.currentTarget.value);

    if (event.currentTarget.value === "0") {
        setShowBtnStatus_Name(""); //เปิด
    } else {
        setShowBtnStatus_Name("none"); //ปิด
    }
  };

  const Status_FarmingOnchange = (event: any) => {
    setInputStatus_Farming(event.currentTarget.value);

    if (event.currentTarget.value === "0") {
        setShowBtnStatus_Farming(""); //เปิด
    } else {
        setShowBtnStatus_Farming("none"); //ปิด
    }
  };

  const Status_ActivityOnchange = (event: any) => {
    setInputStatus_Activity(event.currentTarget.value);

    if (event.currentTarget.value === "0") {
        setShowBtnStatus_Activity(""); //เปิด
    } else {
        setShowBtnStatus_Activity("none"); //ปิด
    }
  };


  useEffect(() => {
    if (listing.FromE === "1") {
      setInputStatus_Address("1");
    }
    setInputAddress(listing.R02);

    switch (listing.R07) {
      case "1":
        setInputResident("มีผู้อยู่อาศัย");
        break;
      case "2":
        setInputResident("บ้านว่าง");
        break;
      case "3":
        setInputResident("บ้านร้าง");
        break;
      case "4":
        setInputResident("หาไม่พบ");
        break;
      default:
        setInputResident("");
        break;
    }

    if (listing.R11 === "1") {
      setInputHolder("เป็น");
    } else if (listing.R10 === "0" || listing.R11 === "0") {
      setInputHolder("ไม่เป็น");
    }

    let prefix: string = "";
    switch (listing.R13_A) {
      case "1":
        prefix = "นาย";
        break;
      case "2":
        prefix = "นาง";
        break;
      case "3":
        prefix = "นางสาว";
        break;
      case "4":
        prefix = listing.R13_AT;
        break;
      default:
        prefix = "";
        break;
    }

    setInputName(prefix + listing.R13_B + " " + listing.R13_C);

    switch (listing.R18) {
      case "1":
        setInputFarming("มีเฉพาะในจังหวัดนี้");
        break;
      case "2":
        setInputFarming("มีทั้งในจังหวัดนี้และจังหวัดอื่น");
        break;
      case "3":
        setInputFarming("มีเฉพาะจังหวัดอื่น");
        break;
      default:
        setInputFarming("");
        break;
    }

    switch (listing.R26) {
      case "1":
        setInputSK2("แจงนับต่อไป");
        break;
      case "2":
        setInputSK2("ไม่แจงนับต่อไป");
        break;
      default:
        setInputSK2("");
        break;
    }

    if (listing.Status === "C") {
      setInputStatus_Address("1");
      setInputStatus_Resident("1");

      if (listing.R07 === "1") {
        setInputStatus_Holder("1");
      }

      if (listing.R07 === "1") {
        setInputStatus_Name("1");
      }

      if (listing.R18 !== "") {
        setInputStatus_Farming("1");
      }
  
      if (listing.R18 !== "" && listing.R18 !== "3") {
        setInputStatus_Activity("1");
      }
  
    }
  }, [listing]);

  const [showButtonConfirm, setShowButtonConfirm] = useState("none");
  useEffect(() => {
    let validate_Address: boolean = false;
    let validate_Resident: boolean = false;
    let validate_Holder: boolean = false;
    let validate_Name: boolean = false;
    let validate_Farming: boolean = false;
    let validate_Activity: boolean = false;

    if (inputStatus_Address === "1") {
      validate_Address = true;
    }

    if (inputStatus_Resident === "1") {
      validate_Resident = true;
    }

    if (listing.R07 === "1") {
      if (inputStatus_Holder === "1") {
        validate_Holder = true;
      }
    }else{
      validate_Holder = true;
    }

    if (listing.R07 === "1") {
      if (inputStatus_Name === "1") {
        validate_Name = true;
      }
    } else {
      validate_Name = true;
    }

    if (listing.R18 !== "") {
      if (inputStatus_Farming === "1") {
        validate_Farming = true;
      }
    } else {
      validate_Farming = true;
    }

    if (listing.R18 !== "" && listing.R18 !== "3") {
      if (inputStatus_Activity === "1") {
        validate_Activity = true;
      }
    } else {
      validate_Activity = true;
    }

    if (
      validate_Address &&
      validate_Resident &&
      validate_Holder &&
      validate_Name &&
      validate_Farming &&
      validate_Activity
    ) {
      setShowButtonConfirm("");
    } else {
      setShowButtonConfirm("none");
    }
  }, [
    inputStatus_Address,
    inputStatus_Resident,
    inputStatus_Holder,
    inputStatus_Name,
    inputStatus_Farming,
    inputStatus_Activity,
  ]);

  async function backPage() {
    if(listing.FromE === "1"){
      setPage(page - 1);
    }else{
      //subrecord | ไม่ได้มาจากฐาน E
      if(listing.R10 === "0" || listing.R11 === "0"){
        //ไม่เข้าข่ายทำตอนที่ 2
        setPage(1);
      }else{
        //เข้าข่ายทำตอนที่ 2
        setPage(2);
      }
    }    
  }

  const [showButtonEnumerate, setShowButtonEnumerate] = useState(false);
  const [saveDraft, setSaveDraft] = useState(false);
  const [saveCompleted, setSaveCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false);

  async function save(status: string) {
    if (status === "P") {
      setTitleModalCompleted(`บันทึกแบบคุมยอดและนับจด (สก.1) เรียบร้อยแล้ว`);
      setMsgModalCompleted(
        `กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก หรือกดปุ่มกากบาทมุมบนขวาเพื่ออยู่หน้าเดิม สามารถกลับมาแก้ไขได้ตลอด จนกว่าจะกดปุ่ม "บันทึกผลนับจด (นับจดเสร็จ)"`
      );
      handleShowModalCompleted();
    } else {
      if (listing.FromE === "1") {
        updateSection3(status);
      } else if (listing.FromE === "0" && (listing.R10 === "1" || listing.R11 === "1")) {
        updateSection3(status);
      } else {
        const body = {
          areA_CODE: listing.AREA_CODE,
          r01: listing.R01,
          tempKey: listing.TempKey,
          r18: listing.R18,
          r19: listing.R18 === "3" ? "" : listing.R19,
          r20: listing.R18 === "3" ? "" : listing.R20,
          r21: listing.R18 === "3" ? "" : listing.R21,
          r22: listing.R18 === "3" ? "" : listing.R22,
          r23: listing.R18 === "3" ? "" : listing.R23,
          r24: listing.R18 === "3" ? "" : listing.R24,
          r25: listing.R18 === "3" ? "" : listing.R25,
          r26: listing.R18 === "3" ? "" : listing.R26,
          r27: listing.R26 === "1" ? listing.R27 : "",
          status2: listing.Status2,
          r28: listing.R28,
          r29_A: listing.R28 === "2" ? listing.R29_A : "",
          r29_AT: listing.R28 === "2" ? listing.R29_AT : "",
          r29_B: listing.R28 === "2" ? listing.R29_B : "",
          r29_C: listing.R28 === "2" ? listing.R29_C : "",
          r29_D: listing.R28 === "2" ? listing.R29_D : "",
          r29_E: listing.R28 === "2" ? listing.R29_E : "",
          r29_F: listing.R28 === "2" ? listing.R29_F : "",
          r29_G: listing.R28 === "2" ? listing.R29_G : "",
          r29_H: listing.R28 === "2" ? listing.R29_H : "",
          r29_I: listing.R28 === "2" ? listing.R29_I : "",
          r30: listing.R30,
          modifyBy: userInfo?.userId,
        };

        console.log(JSON.stringify(body));
        insertEnumerateSection2(JSON.stringify(body));
      }
    }
  }

  //modal popup redirect
  const [showCompleted, setShowModalCompleted] = useState(false);
  const [titleModalCompleted, setTitleModalCompleted] = useState("");
  const [msgModalCompleted, setMsgModalCompleted] = useState("");
  const handleCloseModalCompleted = () => setShowModalCompleted(false);
  const handleShowModalCompleted = () => setShowModalCompleted(true);

  async function insertEnumerateSection2(jsonString: string) {
    setLoading(false);
    setSaveCompleted(false);

    setLoadingCompleted(true);
    setSaveDraft(true);

    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API +
          "/Listing2/insertEnumerateSection2";
      }

      let base64 = require("base-64");
      let basic_auth: string = "";

      if (process.env.REACT_APP_BASIC_AUTH_API) {
        basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
      }

      const headers = {
        Authorization: "Basic " + basic_auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      await axios
        .post(url_enumerate_api, jsonString, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            setSaveCompleted(false);
            setTitleModalCompleted(
              "บันทึกแบบคุมยอดและนับจด (สก.1) เรียบร้อยแล้ว"
            );
            if (listing.R26 === "1") {
              setMsgModalCompleted(
                `ท่านต้องบันทึกแบบแจงนับ (สก.2) หรือไม่? กดที่ปุ่ม "สก.2" เพื่อบันทึกแบบแจงนับ (สก.2) ต่อไป`
              );
            } else {
              setMsgModalCompleted(
                `กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก`
              );
            }
            handleShowModalCompleted();
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    } catch (err) {
      console.error("SaveListing ERROR: ", err);
    }
  }

  async function updateSection3(status: string) {
    console.log("status",status === "C");
    
    if (status === "C") {
      setLoading(false);
      setSaveCompleted(false);

      setLoadingCompleted(true);
      setSaveDraft(true);
    } else {
      setLoading(true);
      setSaveCompleted(true);

      setLoadingCompleted(false);
      setSaveDraft(false);
    }

    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing2/summarySK1";
      }

      let base64 = require("base-64");
      let basic_auth: string = "";

      if (process.env.REACT_APP_BASIC_AUTH_API) {
        basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
      }

      const headers = {
        Authorization: "Basic " + basic_auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      const body = {
        TempKey: listing.TempKey,
        Status: status,
        ModifyBy: userInfo?.userId,
      };

      console.log(JSON.stringify(body));

      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            if (status === "C") {
              setShowButtonEnumerate(true);
              setLoadingCompleted(false);
              setSaveDraft(false);
              setTitleModalCompleted(
                "บันทึกแบบคุมยอดและนับจด (สก.1) เรียบร้อยแล้ว"
              );
              if (listing?.R26 === "1") {
                setMsgModalCompleted(
                  `ท่านต้องบันทึกแบบแจงนับ (สก.2) หรือไม่? กดที่ปุ่ม "สก.2" เพื่อบันทึกแบบแจงนับ (สก.2) ต่อไป`
                );
              } else {
                setMsgModalCompleted(
                  `กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก`
                );
              }
              handleShowModalCompleted();
            } else {
              setShowButtonEnumerate(false);
              setLoading(false);
              setSaveCompleted(false);
              setTitleModalCompleted(
                `บันทึกแบบคุมยอดและนับจด (สก.1) เรียบร้อยแล้ว`
              );
              setMsgModalCompleted(
                `กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก หรือกดปุ่มกากบาทมุมบนขวาเพื่ออยู่หน้าเดิม สามารถกลับมาแก้ไขได้ตลอด จนกว่าจะกดปุ่ม "บันทึกผลนับจด (นับจดเสร็จ)"`
              );
              handleShowModalCompleted();
            }
          }
        })
        .catch((err) => {
          setLoading(false);
          setLoadingCompleted(false);
          console.log("AXIOS ERROR: ", err);
        });
    } catch (err) {
      setLoading(false);
      setLoadingCompleted(false);
      console.error("SaveListing ERROR: ", err);
    }
  }

  return (
    <div>
      <Container className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="header">
                <Row className="flex-between-center">
                  <Col
                    md={4}
                    className="col-sm-auto d-flex align-items-center pr-0"
                  >
                    <h5 className="mb-0 py-2 py-xl-0 text-white ">
                      แสดงรายการข้อมูลสำคัญ (สก.1)
                    </h5>
                  </Col>

                  <Col md={8} className="col-sm-auto ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSummary"
                      aria-expanded="false"
                      aria-controls="collapseSummary"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>

              <Card.Body>
                <Row className="collapse show" id="collapseSummary">
                  <Col md={12}>
                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          ระบบแสดงรายการข้อมูลสำคัญของที่ถือครองนี้
                          เพื่อตรวจสอบข้อมูล
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          1. บ้านเลขที่{" "}
                          <span className="text-primary fw-bold">
                            {inputAddress}
                          </span>
                        </label>
                      </Col>
                      <Col
                        md={4}
                        style={{ display: listing.FromE === "1" ? "none" : "" }}
                      >
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_1"
                              type="radio"
                              value="1"
                              id="SP1_1_1"
                              onChange={Status_AddressOnchange}
                              checked={"1" === inputStatus_Address}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_1_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_1"
                              type="radio"
                              value="0"
                              id="SP1_1_2"
                              onChange={Status_AddressOnchange}
                              checked={"0" === inputStatus_Address}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_1_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(1)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Address }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          2. ลักษณะของที่อยู่อาศัย{" "}
                          <span className="text-primary fw-bold">
                            {inputResident}
                          </span>
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_2"
                              type="radio"
                              value="1"
                              id="SP1_2_1"
                              onChange={Status_ResidentOnchange}
                              checked={"1" === inputStatus_Resident}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_2_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_2"
                              type="radio"
                              value="0"
                              id="SP1_2_2"
                              onChange={Status_ResidentOnchange}
                              checked={"0" === inputStatus_Resident}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_2_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(1)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Resident }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          3. เป็นผู้ถือครองทำการเกษตร{" "}
                          <span className="text-primary fw-bold">
                            {inputHolder}
                          </span>
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_3"
                              type="radio"
                              value="1"
                              id="SP1_3_1"
                              onChange={Status_HolderOnchange}
                              checked={"1" === inputStatus_Holder}
                              disabled={listing.R07 !== "1" ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_3_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_3"
                              type="radio"
                              value="0"
                              id="SP1_3_2"
                              onChange={Status_HolderOnchange}
                              checked={"0" === inputStatus_Holder}
                              disabled={listing.R07 !== "1" ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_3_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(1)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Holder }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          4. ชื่อผู้ถือครองทำการเกษตร/หัวหน้าครัวเรือน{" "}
                          <span className="text-primary fw-bold">
                            {inputName}
                          </span>
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_4"
                              type="radio"
                              value="1"
                              id="SP1_4_1"
                              onChange={Status_NameOnchange}
                              checked={"1" === inputStatus_Name}
                              disabled={listing.R07 !== "1" ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_4_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_4"
                              type="radio"
                              value="0"
                              id="SP1_4_2"
                              onChange={Status_NameOnchange}
                              checked={"0" === inputStatus_Name}
                              disabled={listing.R07 !== "1" ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_4_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(1)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Name }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          5. การทำเกษตร{" "}
                          <span className="text-primary fw-bold">
                            {inputFarming}
                          </span>
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_5"
                              type="radio"
                              value="1"
                              id="SP1_5_1"
                              onChange={Status_FarmingOnchange}
                              checked={"1" === inputStatus_Farming}
                              disabled={listing.R18 === "" ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_5_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_5"
                              type="radio"
                              value="0"
                              id="SP1_5_2"
                              onChange={Status_FarmingOnchange}
                              checked={"0" === inputStatus_Farming}
                              disabled={listing.R18 === "" ? true : false}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_5_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(2)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Farming }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>6. กิจกรรมการเกษตรที่อยู่จังหวัดนี้</label>
                        <div>
                          <p
                            style={{
                              textIndent: "30px",
                              display: listing.R19 === "1" ? "" : "none",
                            }}
                          >
                            <span className="text-primary fw-bold">
                              ปลูกพืช
                            </span>
                          </p>

                          <p
                            style={{
                              textIndent: "30px",
                              display: listing.R20 === "1" ? "" : "none",
                            }}
                          >
                            <span className="text-primary fw-bold">
                              เลี้ยงสัตว์
                            </span>
                          </p>

                          <p
                            style={{
                              textIndent: "30px",
                              display: listing.R21 === "1" ? "" : "none",
                            }}
                          >
                            <span className="text-primary fw-bold">
                              เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด
                            </span>
                          </p>

                          <p
                            style={{
                              textIndent: "30px",
                              display: listing.R22 === "1" ? "" : "none",
                            }}
                          >
                            <span className="text-primary fw-bold">
                              นาเกลือสมุทร
                            </span>
                          </p>

                          <p
                            style={{
                              textIndent: "30px",
                              display: listing.R23 === "1" ? "" : "none",
                            }}
                          >
                            <span className="text-primary fw-bold">
                              ประมงน้ำจืด
                            </span>
                          </p>

                          <p
                            style={{
                              textIndent: "30px",
                              display: listing.R24 === "1" ? "" : "none",
                            }}
                          >
                            <span className="text-primary fw-bold">
                              ประมงทะเล
                            </span>
                          </p>

                          <p
                            style={{
                              textIndent: "30px",
                              display: listing.R25 === "1" ? "" : "none",
                            }}
                          >
                            <span className="text-primary fw-bold">
                              เพาะเลี้ยงชายฝั่ง
                            </span>
                          </p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_6"
                              type="radio"
                              value="1"
                              id="SP1_6_1"
                              onChange={Status_ActivityOnchange}
                              checked={"1" === inputStatus_Activity}
                              disabled={
                                listing.R18 === ""
                                  ? true
                                  : listing.R18 === "3"
                                  ? true
                                  : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_6_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP1_6"
                              type="radio"
                              value="0"
                              id="SP1_6_2"
                              onChange={Status_ActivityOnchange}
                              checked={"0" === inputStatus_Activity}
                              disabled={
                                listing.R18 === ""
                                  ? true
                                  : listing.R18 === "3"
                                  ? true
                                  : false
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP1_6_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(2)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Activity }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          7. สถานะการแจงนับ{" "}
                          <span className="text-primary fw-bold">
                            {inputSK2}
                          </span>
                        </label>
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
              <div className="col-12 pr-0">
                <div className="float-start">
                  <button
                    onClick={() =>
                      userInfo?.roleId === 9
                        ? (window.location.href =
                            process.env.PUBLIC_URL + "/ownerList")
                        : (window.location.href =
                            process.env.PUBLIC_URL + "/list")
                    }
                    type="button"
                    className="btn btn-outline-secondary mt-2 me-2"
                  >
                    หน้ารายการ
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary mt-2 me-2"
                    onClick={() => {
                      backPage();
                    }}
                  >
                    กลับ
                  </button>
                </div>

                {process.env.REACT_APP_PROJECT === "open" &&
                  userInfo?.roleId === 9 && (
                    <div className="float-end">
                      <button
                        type="button"
                        className="btn btn-secondary mt-2 me-2"
                        onClick={() => save("P")}
                        style={{
                          display:
                            listing?.Status === "C" || userInfo?.roleId !== 9
                              ? "none"
                              : "",
                        }}
                        disabled={loading ? true : saveDraft}
                      >
                        บันทึกแบบร่าง {loading && <LoadingSpinner />}
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary mt-2"
                        onClick={() => save("C")}
                        style={{
                          display:
                            userInfo?.roleId !== 9 ? "none" : showButtonConfirm,
                        }}
                        disabled={loadingCompleted ? true : saveCompleted}
                      >
                        บันทึกผลนับจด (นับจดเสร็จ){" "}
                        {loadingCompleted && <LoadingSpinner />}
                      </button>
                    </div>
                  )}
              </div>
            </Row>
          </Card.Body>
        </Card>

        <Modal
          show={showCompleted}
          onHide={handleCloseModalCompleted}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title>{titleModalCompleted}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 style={{ lineHeight: "unset" }}>{msgModalCompleted}</h5>
          </Modal.Body>
          <Modal.Footer>
            <a
              href={process.env.PUBLIC_URL + "/ownerList"}
              type="button"
              className="btn btn-secondary me-1"
            >
              หน้ารายการ
            </a>
            <Link
              to={"/enumerateDetail"}
              state={listing?.AH_CODE}
              className="btn btn-info"
              style={{
                display:
                  listing?.R26 === "1" && showButtonEnumerate ? "" : "none",
              }}
            >
              สก.2
            </Link>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
