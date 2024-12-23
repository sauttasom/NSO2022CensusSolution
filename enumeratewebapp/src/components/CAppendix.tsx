import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Listing2 } from "../model/Listing2";

interface Props {
  appendixInfo?: Listing2;
}

function CAppendix({appendixInfo}:Props) {
  const [appendix, setAppendix] = useState<Listing2>();

  useEffect(() => {
    setAppendix(appendixInfo);
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
                  >
                  </Col>

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
                    <h6 className='mb-0 py-2 py-xl-0'>
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
                            <td>{appendix?.TYPE}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">6. เทศบาล </td>
                            <td>
                              <Row>
                                <Col md={6}>
                                  รหัสเทศบาล {appendix?.MUN}
                                </Col>
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
                            <td>{appendix?.VILT === ""? "1" : appendix?.VILT}-{appendix?.VILT === "1"? "เขตปฏิบัติงานเดิม" : appendix?.VILT === "2"? "เขตปฏิบัติงานที่แบ่งใหม่" : "เขตปฏิบัติงานเดิม"}</td>
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
                            <h6 className="mt-2 mb-0"><b>คำชี้แจง</b></h6>
                            <label
                              className="fs-6"
                              style={{ textIndent: "20px" }}
                            >
                              1. ข้อมูลที่บันทึกในแบบสอบถามนี้
                              ต้องเป็นผู้ถือครองทำการเกษตรที่อาศัยอยู่ในเขตปฏิบัติงานนี้
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
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CAppendix;
