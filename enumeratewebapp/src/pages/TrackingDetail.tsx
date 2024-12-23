import React, { useEffect, useState } from "react";
import NavbarMenu from "../components/NavbarMenu";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { TrackingInfo } from "../model/TrackingInfo";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { APIService } from "../service/APIService";

export default function TrackingDetail() {

  const location = useLocation();
  const TrackingKey = location.state;
  const [tracking, setTracking] = useState<TrackingInfo | null>(null);

  useEffect(() => {
    const getDetail = async () => {
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);

    if (api.authToken) {
      let auth: string = api.authToken;
      const headers = {
        Authorization: "Basic " + auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API +
          `/Listing2/getTrackigDetail/${TrackingKey}`;
      }
      

      try {
        await axios
          .get(url_enumerate_api, {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setTracking(res.data[0]);
            }
          })
          .catch((err) => {
            console.error("AXIOS ERROR: ", err);
          });
      } catch (err) {
        console.error("Tracking Page ERROR: ", err);
      }
    }
    }

    getDetail();
  }, [TrackingKey]);

  function getDate(date: string): string {
    let d = new Date(date);
    return d.getDate() + "/" + (d.getMonth()+1) + "/" + (d.getFullYear()+543);
  }

  function getTime(date: string): string {
    let d = new Date(date);
    return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  }

  return (
    <div>
      <NavbarMenu />
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
                      ระบบติดตามผู้ถือครองทำการเกษตร (Tracking)
                    </h5>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className="card-menu">
                <Row className="mt-2">
                  <Col md={12}>
                    <label style={{ fontWeight: "bold" }}>
                      การติดตามผู้ถือครองทำการเกษตรที่ส่งออกจากเขตปฏิบัติงานในแต่ละพื้นที่
                    </label>
                  </Col>
                </Row>

                <Row className="mt-2 mb-2">
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <Card>
                          <Card.Header className="question-title">
                            <Row className="flex-between-center">
                              <Col
                                md={12}
                                className="col-sm-auto d-flex align-items-center pr-0"
                              >
                                <h6 className="mb-0 py-2 py-xl-0">
                                  เขตปฏิบัติงาน (ต้นทาง)
                                </h6>
                              </Col>
                            </Row>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col md={12}>
                                <div className="table-responsive">
                                  <table className="table table-sm">
                                    <tbody>
                                      <tr className="border-top ">
                                        <td className="bg-100">บ้านเลขที่</td>
                                        <td>109</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">จังหวัด </td>
                                        <td>{`${tracking?.CWT_FROM}-${tracking?.CWTN_FROM}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">อำเภอ </td>
                                        <td>{`${tracking?.AMP_FROM}-${tracking?.AMPN_FROM}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">ตำบล </td>
                                        <td>{`${tracking?.TAM_FROM}-${tracking?.TAMN_FROM}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">เทศบาล </td>
                                        <td>{`${tracking?.MUN_FROM}-${tracking?.MUNN_FROM}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">หมู่บ้าน </td>
                                        <td>{`${tracking?.VIL_FROM}-${tracking?.VILN_FROM}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">
                                          วันที่ส่งข้อมูล{" "}
                                        </td>
                                        <td>
                                          {getDate(tracking?.TRACK_DATE!)}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">เวลา </td>
                                        <td>
                                          {getTime(tracking?.TRACK_DATE!)}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <Card>
                          <Card.Header className="question-title">
                            <Row className="flex-between-center">
                              <Col
                                md={12}
                                className="col-sm-auto d-flex align-items-center pr-0"
                              >
                                <h6 className="mb-0 py-2 py-xl-0">
                                  เขตปฏิบัติงาน (ปลายทาง)
                                </h6>
                              </Col>
                            </Row>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col md={12}>
                                <div className="table-responsive">
                                  <table className="table table-sm">
                                    <tbody>
                                      <tr className="border-top ">
                                        <td className="bg-100">บ้านเลขที่</td>
                                        <td>
                                          {tracking?.TYPE_TRACKING === "12" &&
                                          tracking?.ADD_TO === "" ? (
                                            <b>(รอปลายทางบันทึก สก.12)</b>
                                          ) : (
                                            tracking?.ADD_TO
                                          )}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">จังหวัด </td>
                                        <td>{`${tracking?.CWT_TO}-${tracking?.CWTN_TO}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">อำเภอ </td>
                                        <td>{`${tracking?.AMP_TO}-${tracking?.AMPN_TO}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">ตำบล </td>
                                        <td>{`${tracking?.TAM_TO}-${tracking?.TAMN_TO}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">เทศบาล </td>
                                        <td>{`${tracking?.MUN_TO}-${tracking?.MUNN_TO}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">หมู่บ้าน </td>
                                        <td>{`${tracking?.VIL_TO}-${tracking?.VILN_TO}`}</td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">สถานะ </td>
                                        <td>
                                          <span
                                            className="me-2"
                                            style={{
                                              color:
                                                tracking?.PROCESS_DATE === null
                                                  ? "#B7C4CF"
                                                  : "#82CD47",
                                            }}
                                          >
                                            <FontAwesomeIcon icon={faCircle} />
                                          </span>
                                          <label>
                                            {tracking?.PROCESS_DATE === null
                                              ? "รอดำเนินการ"
                                              : "สำเร็จ"}
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">
                                          วันที่ดำเนินการ{" "}
                                        </td>
                                        <td>
                                          {tracking?.PROCESS_DATE! === null
                                            ? ""
                                            : getDate(tracking?.PROCESS_DATE!)}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">เวลา </td>
                                        <td>
                                          {tracking?.PROCESS_DATE! === null
                                            ? ""
                                            : getTime(tracking?.PROCESS_DATE!)}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">
                                          วันที่สำเร็จ{" "}
                                        </td>
                                        <td>
                                          {tracking?.SUCCESS_DATE! === null
                                            ? ""
                                            : getDate(tracking?.SUCCESS_DATE!)}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="bg-100">เวลา </td>
                                        <td>
                                          {tracking?.SUCCESS_DATE! === null
                                            ? ""
                                            : getTime(tracking?.SUCCESS_DATE!)}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
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
                    onClick={() => {
                      window.location.href =
                        process.env.PUBLIC_URL + "/trackingList";
                    }}
                    type="button"
                    className="btn btn-outline-secondary me-2"
                  >
                    หน้ารายการ
                  </button>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
