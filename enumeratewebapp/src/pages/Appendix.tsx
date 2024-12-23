import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import CAppendix from "../components/CAppendix";
import NavbarMenu from "../components/NavbarMenu";
import { Listing2 } from "../model/Listing2";
import { UserInfo } from "../model/UserInfo";
import { APIService } from "../service/APIService";
import { TriangulationInfo } from "../model/TriangulationInfo";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Appendix() {
  let defaultValue: Listing2 = {
    TempKey: 0,
    AREA_CODE: "",
    REG: "",
    REGN: "",
    CWT: "",
    CWTN: "",
    AMP: "",
    AMPN: "",
    TAM: "",
    TAMN: "",
    TYPE: "",
    MUN: "",
    MUNN: "",
    VIL: "",
    VILN: "",
    VILT: "",
    ST_A: "",
    ST_B: "",
    ST_C: "",
    ST_Time: "",
    FN_A: "",
    FN_B: "",
    FN_C: "",
    FN_Time: "",
    ENU_A: "",
    ENU_B: "",
    ENU_C: "",
    ACA_A: "",
    ACA_B: "",
    ACA_C: "",
    SUB_A: "",
    SUB_B: "",
    SUB_C: "",
    ENO: "",
    F1CODE: "",
    Eadd_A: "",
    Eadd_B: "",
    Eadd_C: "",
    Eadd_D: "",
    Ename_A: "",
    Ename_AT: "",
    Ename_B: "",
    Ename_C: "",
    Esex: "",
    EPID: "",
    EBD: "",
    ESI: "",
    status1: "",
    R01: "",
    R02: "",
    R03_A: "",
    R03_B: "",
    R03_C: "",
    lat: "",
    long: "",
    R07: "",
    R08: "",
    R08_sub: "",
    R09: "",
    R10: "",
    R11: "",
    R12: "",
    R12_sub: "",
    R13_A: "",
    R13_AT: "",
    R13_B: "",
    R13_C: "",
    R14: "",
    R15: "",
    R16_A: "",
    R16_B: "",
    R16_C: "",
    R17: "",
    R18: "",
    R19: "",
    R20: "",
    R21: "",
    R22: "",
    R23: "",
    R24: "",
    R25: "",
    R26: "",
    R27: "",
    Status2: "",
    R28: "",
    R29_A: "",
    R29_AT: "",
    R29_B: "",
    R29_C: "",
    R29_D: "",
    R29_E: "",
    R29_F: "",
    R29_G: "",
    R29_H: "",
    R29_I: "",
    R30: "",
    R31: "",
    R32: "",
    R33: "",
    R34: "",
    R35: "",
    R36: "",
    R37_A: "",
    R37_B: "",
    R37_C: "",
    R37_D: "",
    R37_E: "",
    R37_F: "",
    R37_G: "",
    ENU: "",
    AH_CODE: "", //Enumerate
    AH_CODE1: "", //TempListing
    FromE: "",
    Status: "",
    Active: "",
    IsTracking: "",
    TrackingStatus: "",
    IsMakeUp: "",
    SDATE_A: "",
    SDATE_B: "",
    SDATE_C: "",
    CDATE_A: "",
    CDATE_B: "",
    CDATE_C: "",
    P1_A: "",
    FROM_AREA_CODE: "",
    FROM_ADD: "",
  };

  const [cookies] = useCookies(["token"]);
  const [userInfo, setUser] = useState<UserInfo | null>(null);
  const [listing, setListing] = useState<Listing2[] | null>([]);
  const [appendix, setAppendix] = useState<Listing2 | null>(null);
  const [confirmTriangulation, setIsConfirmTriangulation] = useState<boolean>(false);
  const navigate = useNavigate();

  //pageload getUser
  useEffect(() => {
    const getUser = async () => {
      if (cookies.token !== "" && cookies.token !== undefined) {
        let url_auth_validate: string = "";
        if (process.env.REACT_APP_AUTH_VALIDATE_API) {
          url_auth_validate = process.env.REACT_APP_AUTH_VALIDATE_API;

          await axios
            .get(url_auth_validate, {
              headers: { Authorization: "Bearer " + cookies.token },
            })
            .then((res) => {
              if (res.status === 200) {
                setUser(res.data);
              } else {
                window.location.href = process.env.REACT_APP_PORTAL + "/logout";
              }
            });
        }
      }
    };

    getUser();
    removeCookie("key", { path: "/" });
  }, [cookies.token, navigate]);

  const [loading, setLoading] = useState(false);
  async function getHolding() {
    setLoading(true);

    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;

      const headers = {
        Authorization: "Basic " + auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Listing2/getList2";
        }

        const amp_Code = userInfo?.ampCode!;
        const ampCode = amp_Code.substring(amp_Code.length - 2);

        const tam_Code = userInfo?.tamCode!;
        const tamCode = tam_Code.substring(tam_Code.length - 2);

        const vil_Code = userInfo?.vilCode!;
        const vilCode = vil_Code.substring(vil_Code.length - 2);

        if (userInfo?.cwtCode! !== undefined || userInfo?.cwtCode! !== "") {
          const body = {
            CwtCode: userInfo?.cwtCode!,
            AmpCode: ampCode,
            TamCode: tamCode,
            TypeCode: userInfo?.typeCode!,
            MunCode: userInfo?.munCode!,
            VilCode: vilCode,
            IsMakeUp: "",
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setLoading(false);

                let item: Listing2[];
                if (vilCode !== "") {
                  item = res.data;
                  item = item.filter((item) => item.FromE === "1");
                  setListing(item);
                } else {
                  item = [];
                  setTitleModal("แจ้งเตือน");
                  setMsgModal("พนักงานแจงนับมีรหัสเขตปฎิบัติงานไม่ถูกต้อง");
                  handleShow();
                }

                let apdx: Listing2 = defaultValue;
                if (item.length > 0) {
                  setAppendix(item[0]);
                } else {
                  let apdx: Listing2 = defaultValue;
                  apdx.REGN = userInfo?.regn ?? "";
                  apdx.CWTN = userInfo?.cwtName ?? "";
                  apdx.AMPN = userInfo?.ampName ?? "";
                  apdx.TAMN = userInfo?.tamName ?? "";
                  apdx.TYPE = userInfo?.typeCode ?? "";
                  apdx.MUN = userInfo?.munCode ?? "";
                  apdx.MUNN = userInfo?.munName ?? "";
                  apdx.VIL = userInfo?.vilCode ?? "";
                  apdx.VILN = userInfo?.vilName ?? "";
                  apdx.VILT = userInfo?.vilt ?? "";
                  setAppendix(apdx);
                }

                checkTriangulation(userInfo?.areA_CODE ?? "");
              }
            })
            .catch((err) => {
              setLoading(false);
              console.error("AXIOS ERROR: ", err);
            });
        } else {
          //redirect หน้า portal
          navigate("/");
        }
      } catch (err) {
        setLoading(false);
        console.error("Search ERROR: ", err);
      }
    }
  }

  async function checkTriangulation(area_code: string) {
    let url_enumerate_api: string = "";

    let base64 = require("base-64");
    let basic_auth: string = "";

    if (process.env.REACT_APP_BASIC_AUTH_API) {
      basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
    }

    if (process.env.REACT_APP_ENUMERATE_API) {
      url_enumerate_api =
        process.env.REACT_APP_ENUMERATE_API +
        `/Triangulation/getData/${area_code}`;
    }

    console.log(area_code);   

    const headers = {
      Authorization: "Basic " + basic_auth,
      "Content-Type": "application/json;charset=UTF-8",
    };

    if (area_code !== "") {
      await axios
        .get(url_enumerate_api, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            let item: TriangulationInfo = res.data[0];

            if (item === undefined) {
              console.log("ไม่มีข้อมูลจ้า");
            } else {
              if (item.Lock === "1") {
                // setIsConfirmTriangulation(true);
                // setTitleModal("แจ้งเตือน");
                // setMsgModal("ไม่สามารถแก้ไขข้อมูล สก.1, สก.12 และ สก.2 ได้ เนื่องจากข้อมูลถูกส่งไปยังผู้ประสานงานในพื้นที่และเจ้าหน้าที่วิชาการตรวจสอบเรียบร้อยแล้ว");
                // handleShow();

                //เปลี่ยนจากแสดง Modal เป็นแสดงปุ่ม 'Make up' 2023-08-09 12:14
                setIsConfirmTriangulation(true);

              } else {
                setIsConfirmTriangulation(false);
              }
            }
          }
        })
        .catch((err: any) => {
          console.log("AXIOS ERROR: ", err);
        });
    }
  }

  useEffect(() => {
    if (userInfo !== null) {
      const getList = async () => {
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
            if (userInfo?.userId !== undefined) {
              getHolding();
            }
          } catch (err) {
            console.error("ERROR (getList): ", err);
          }
        }
      };
      getList();
    }
  }, [userInfo]);

  const [key, setKey, removeCookie] = useCookies(["key"]);
  async function newHouse() {
    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing2/addHouse";
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

      const amp_Code = userInfo?.ampCode!;
      const ampCode = amp_Code.substring(amp_Code.length - 2);

      const tam_Code = userInfo?.tamCode!;
      const tamCode = tam_Code.substring(tam_Code.length - 2);

      const vil_Code = userInfo?.vilCode!;
      const vilCode = vil_Code.substring(vil_Code.length - 2);

      const body = {
        userId: userInfo?.userId,
        cwtCode: userInfo?.cwtCode!,
        ampCode: ampCode,
        tamCode: tamCode,
        typeCode: userInfo?.typeCode!,
        munCode: userInfo?.munCode!,
        vilCode: vilCode,
      };

      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            let base64 = require("base-64");
            setKey(
              "key",
              base64.encode(`${res.data.tempKey}`),
              { path: "/" }
            );
            navigate("/listingDetail");
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    } catch (err) {
      console.error("ERROR (newHouse): ", err);
    }
  }

  async function makeUp() {
    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing2/addMakeUp";
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

      const amp_Code = userInfo?.ampCode!;
      const ampCode = amp_Code.substring(amp_Code.length - 2);

      const tam_Code = userInfo?.tamCode!;
      const tamCode = tam_Code.substring(tam_Code.length - 2);

      const vil_Code = userInfo?.vilCode!;
      const vilCode = vil_Code.substring(vil_Code.length - 2);

      const body = {
        userId: userInfo?.userId,
        cwtCode: userInfo?.cwtCode!,
        ampCode: ampCode,
        tamCode: tamCode,
        typeCode: userInfo?.typeCode!,
        munCode: userInfo?.munCode!,
        vilCode: vilCode,
      };

      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            let base64 = require("base-64");
            setKey(
              "key",
              base64.encode(`${res.data.tempKey}`),
              { path: "/" }
            );
            navigate("/listingDetail");
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    } catch (err) {
      console.error("ERROR (newHouse): ", err);
    }
  }

  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [msgModal, setMsgModal] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavbarMenu />
      {appendix === null && (
        <Row style={{backgroundColor:'#028174'}}>
          <Col md={12} className="text-center">
          <LoadingSpinner />
          </Col>
        </Row>
      )}
      {appendix && <CAppendix appendixInfo={appendix} />}

      <Container className="container-xxl flex-grow-1">
        {appendix && confirmTriangulation === false && (
          <Row
            style={{
              display: userInfo?.vilCode === "" ? "none" : "",
            }}
          >
            <Col md={12}>
              <Card>
                <Card.Body className="card-menu">
                  <Row className="mt-2">
                    <Col md={12} lg={12} sm={12} className="col-12 mb-2">
                      บ้านเลขที่ตามฐานข้อมูล
                      <label className="mb-2 badge rounded-pill bg-secondary py-1 px-2 ms-2">
                        {listing && listing.length}
                      </label>{" "}
                      รายการ
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col md={12} lg={12} sm={12} className="col-12 mb-2">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <tbody>
                            {listing &&
                              Array.from(
                                { length: Math.ceil(listing.length / 10) },
                                (_, i) => (
                                  <tr key={i}>
                                    {listing
                                      .slice(i * 10, i * 10 + 10)
                                      .map((item, index) => (
                                        <td key={index + 1}>
                                          <Link
                                            to={"/listingDetail"}
                                            state={`${item.TempKey}`}
                                          >
                                            {item.R02}
                                          </Link>
                                          <span
                                            className="me-2 float-end"
                                            style={{
                                              color:
                                                item.Status === "C" &&
                                                item.CDATE_A !== "" &&
                                                item.CDATE_B !== "" &&
                                                item.CDATE_C !== ""
                                                  ? "#82CD47"
                                                  : item.Status === "C" &&
                                                    item.CDATE_A === "" &&
                                                    item.CDATE_B === "" &&
                                                    item.CDATE_C === ""
                                                  ? "#EEBB4D"
                                                  : "#B7C4CF",
                                            }}
                                          >
                                            <FontAwesomeIcon icon={faCircle} />
                                          </span>
                                        </td>
                                      ))}
                                  </tr>
                                )
                              )}
                          </tbody>
                        </table>
                      </div>
                    </Col>
                  </Row>

                  <Row
                    className="mt-2"
                    style={{
                      display: userInfo?.vilCode === "" ? "none" : "",
                    }}
                  >
                    <Col md={12} lg={12} sm={12} className="col-12 mb-2">
                      <button
                        className="btn btn-primary float-end"
                        style={{
                          display: "inline",
                        }}
                        onClick={newHouse}
                      >
                        <i className="bx bxs-message-square-add text-white me-1"></i>
                        เพิ่มที่อยู่ใหม่
                      </button>

                      <a
                        href={process.env.PUBLIC_URL + "/ownerList"}
                        type="button"
                        className="btn btn-outline-secondary me-2 float-end"
                      >
                        ถัดไป
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        {appendix && confirmTriangulation === true && (
          <Row>
            <Col md={12}>
              <Card>
                <Card.Body className="card-menu">
                <Row
                    className="mt-2"
                  >
                    <Col md={12} lg={12} sm={12} className="col-12 mb-2">
                      <button
                        className="btn btn-primary float-end"
                        style={{
                          display: "inline",
                        }}
                        onClick={makeUp}
                      >
                        <i className="bx bxs-message-square-add text-white me-1"></i>
                        เพิ่มเติมข้อมูล
                      </button>

                      <a
                        href={process.env.PUBLIC_URL + "/ownerList"}
                        type="button"
                        className="btn btn-outline-secondary me-2 float-end"
                      >
                        ถัดไป
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title>{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <h5>{msgModal}</h5>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
