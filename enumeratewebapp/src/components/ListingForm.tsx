import { faCaretDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Listing2 } from "../model/Listing2";

interface Props {
  appendixInfo?: Listing2;
}

function ListingForm({appendixInfo}:Props) {
  const [appendix, setAppendix] = useState<Listing2>();

  const [startD, setStartD] = useState<string>("");
  const [startM, setStartM] = useState<string>("");
  const [startY, setStartY] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");

  const [finD, setFinD] = useState<string>("");
  const [finM, setFinM] = useState<string>("");
  const [finY, setFinY] = useState<string>("");
  const [finTime, setFinTime] = useState<string>("");

  const monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤกษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  function getMonthName(month: string): string {
    let monthNumber = parseInt(month);
    if (monthNumber < 1 || monthNumber > 12) {
      return "Invalid month";
    }
    return monthNames[monthNumber - 1];
  }


  useEffect(() => {
    setAppendix(appendixInfo);

    setStartD(appendixInfo?.ST_A!);
    setStartM(getMonthName(appendixInfo?.ST_B!));
    setStartY(appendixInfo?.ST_C!);

    if(appendixInfo?.ST_Time !== null){
      let time = appendixInfo?.ST_Time!;
      setStartTime(time.slice(0, 8));
    }
   
    setFinD(appendixInfo?.CDATE_A ?? "");
    setFinM(appendixInfo?.CDATE_B === undefined? "" : getMonthName(appendixInfo?.CDATE_B));
    setFinY(appendixInfo?.CDATE_C ?? "");

    if(appendixInfo?.FN_Time !== null){
      let time = appendixInfo?.FN_Time!;
      setFinTime(time.slice(0, 8));
    }
    
  }, []);

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
                  ></Col>

                  <Col md={8} className="col-sm-auto ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOperation"
                      aria-expanded="false"
                      aria-controls="collapseOperation"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <div className="collapse show" id="collapseOperation">
                  <Row>
                    <Col md={12}>
                      <div>
                        <img
                          className="float-start mt-2"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/logo/nso-logo.png"
                          }
                          width="100"
                          alt=""
                        />
                      </div>
                      <div className="text-center mt-2">
                        <div
                          className="form-group"
                          style={{ display: "inline-block" }}
                        >
                          <h6>แบบสอบถาม </h6>
                          <h5>โครงการสำมะโนการเกษตร พ.ศ. 2566</h5>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <div>
                        <h6 className="float-start">แบบ สก.1</h6>
                      </div>
                    </Col>
                  </Row>

                  <Row className="justify-content-md-center">
                    <Col md={12}>
                      <div className="border border-light">
                        <label className="fs-6" style={{ textIndent: "50px" }}>
                          ข้อมูลในแบบสอบถามนี้จะได้รับการคุ้มครองตาม พรบ. สถิติ
                          พ.ศ. 2550 และ พรบ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
                        </label>
                        <label className="fs-6">
                          ข้อมูลนี้จะถูกนำไปใช้ตามภารกิจสำนักงานสถิติแห่งชาติ
                          และเป็นส่วนสำคัญในการพัฒนาภาคการเกษตรของประเทศ
                        </label>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col className="col-12">
                      <h6 className="mb-0 py-2 py-xl-0">
                        <b>สถานที่ตั้งของเขตปฎิบัติงาน</b>
                      </h6>
                      <table className="table table-sm">
                        <tbody>
                          <tr className="border-top ">
                            <td className="bg-100">1. ภาค </td>
                            <td>{appendix?.REGN}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">2. จังหวัด </td>
                            <td>{appendix?.CWTN}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">3. อำเภอ </td>
                            <td>{appendix?.AMPN}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">4. ตำบล </td>
                            <td>{appendix?.TAMN}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">5. รหัสประเภทเขตเทศบาล </td>
                            <td>05</td>
                          </tr>
                          <tr>
                            <td className="bg-100">6. เทศบาล </td>
                            <td>
                              <Row>
                                <Col md={6}>รหัสเทศบาล {appendix?.MUN}</Col>
                                <Col md={6}>ชื่อเทศบาล {appendix?.MUNN}</Col>
                              </Row>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-100">7. </td>
                            <td>
                              <Row>
                                <Col md={6}>หมู่ที่ {appendix?.VIL}</Col>
                                <Col md={6}>ชื่อหมู่บ้าน {appendix?.VILN}</Col>
                              </Row>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-100">8. รหัสประเภทหมู่ที่</td>
                            <td>
                              {appendix?.VILT}-
                              {appendix?.VILT === "1"
                                ? "เขตปฏิบัติงานเดิม"
                                : "เขตปฏิบัติงานที่แบ่งใหม่"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>

                  <Row className="mt-0">
                    <Col md={12}>
                      <div className="border border-light">
                        <Row>
                          <Col md={10}>
                            <h6 className="mt-2 mb-0">
                              <b>คำชี้แจง</b>
                            </h6>
                            <label
                              className="fs-6"
                              style={{ textIndent: "20px" }}
                            >
                              1. ข้อมูลที่บันทึกในแบบสอบถามนี้
                              ต้องเป็นผู้ถือครองทำการเกษตรที่อาศัยอยู่ในเขตปฏิบัติงานนนี้
                              เท่านั้น
                            </label>
                            <br></br>
                            <label
                              className="fs-6"
                              style={{ textIndent: "20px" }}
                            >
                              2. ให้นับจดผู้ถือครองทำการเกษตรของเขตปฏิบัติงานนี้
                              ให้ครบถ้วนทุกราย
                            </label>
                            <br></br>
                            <label
                              className="fs-6"
                              style={{ textIndent: "20px" }}
                            >
                              3. คาบเวลาอ้างอิง
                            </label>
                            <br></br>
                            <label
                              className="fs-6"
                              style={{ textIndent: "30px" }}
                            >
                              3.1 วันสำมะโน 1 พฤษภาคม 2566
                            </label>
                            <br></br>
                            <label
                              className="fs-6"
                              style={{ textIndent: "30px" }}
                            >
                              3.2 ในรอบ 12 เดือนที่แล้ว 1 พฤษภาคม 2565 - 30
                              เมษายน 2566
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-2">
                      <Col md={6} className="mt-2">
                        <label style={{ fontWeight: "bold" }}>
                          วันที่และเวลา ที่นับจด (เริ่ม - แล้วเสร็จ)
                        </label>

                        <table className="table table-sm">
                          <tbody>
                            <tr className="border-top ">
                              <td className="bg-100">
                                วันที่และเวลา เริ่มปฎิบัติงาน{" "}
                              </td>
                              <td>
                                {appendix &&
                                  `${startD} ${startM} ${startY} ${startTime}`}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">
                                วันที่และเวลา ปฎิบัติงานแล้วเสร็จ{" "}
                              </td>
                              <td>
                                {appendixInfo && `${finD} ${finM} ${finY} ${finTime}`}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>

                      <Col md={6} className="mt-2">
                        <label style={{ fontWeight: "bold" }}>
                          ข้อมูลผู้ที่ได้รับมอบหมาย
                        </label>

                        <table className="table table-sm">
                          <tbody>
                            <tr className="border-top ">
                              <td className="bg-100">พนักงานแจงนับ </td>
                              <td>
                                {appendixInfo && appendixInfo?.ENU_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${appendixInfo?.ENU_A ?? ""} (${
                                      appendixInfo?.ENU_B ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${appendixInfo?.ENU_C ?? ""}`}
                                    </li>
                                  </ul>
                                )}
                              </td>
                            </tr>
                            <tr className="border-top ">
                              <td className="bg-100">เจ้าหน้าที่วิชาการ </td>
                              <td>
                                {appendixInfo && appendixInfo?.ACA_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${appendixInfo?.ACA_A ?? ""} (${
                                      appendixInfo?.ACA_B ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${appendixInfo?.ACA_C ?? ""}`}
                                    </li>
                                  </ul>
                                )}
                              </td>
                            </tr>
                            <tr className="border-top ">
                              <td className="bg-100">ผู้ประสานในพื้นที่ </td>
                              <td>
                                {appendixInfo && appendixInfo?.SUB_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${appendixInfo?.SUB_B ?? ""} (${
                                      appendixInfo?.SUB_B ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${appendixInfo?.SUB_C ?? ""}`}
                                    </li>
                                  </ul>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                </div>
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
                      (window.location.href = process.env.PUBLIC_URL + "/list")
                    }
                    type="button"
                    className="btn btn-outline-secondary me-2"
                  >
                    หน้ารายการ
                  </button>
                </div>
                <div className="float-end">
                  <Link
                    to={"/listingDetail"}
                    state={`${appendix?.AREA_CODE!},${appendix?.R01!}`}
                    className="btn btn-primary"
                  >
                    สก.1
                  </Link>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ListingForm;
