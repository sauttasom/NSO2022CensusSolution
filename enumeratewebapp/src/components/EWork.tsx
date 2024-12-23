import { faCaretDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Day, Month } from "./DayMonthYear";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { useGlobalUserContext } from "./UserContext";

export default function EWork() {
  //const { enumerate } = useGlobalEnumerateContext();
  const { enumeratesk2 } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  const pad: string = "00";
  const currentYear: number = new Date().getFullYear() + 543;
  const currentMonth: string = "" + (new Date().getMonth() + 1).toString();
  const currentDay: string = "" + new Date().getDate().toString();

  //EnumerateSK2
  const [SDATE_A, setSDATE_A] = useState<string>("");
  const [SDATE_B, setSDATE_B] = useState<string>("");
  const [SDATE_C, setSDATE_C] = useState<string>("");

  const [STIME_A, setSTIME_A] = useState<string>("");
  const [STIME_B, setSTIME_B] = useState<string>("");
  const [STIME_C, setSTIME_C] = useState<string>("");

  const [CDATE_A, setCDATE_A] = useState<string>("");
  const [CDATE_B, setCDATE_B] = useState<string>("");
  const [CDATE_C, setCDATE_C] = useState<string>("");

  const [CTIME_A, setCTIME_A] = useState<string>("");
  const [CTIME_B, setCTIME_B] = useState<string>("");
  const [CTIME_C, setCTIME_C] = useState<string>("");

  const [P1_A, setP1_A] = useState<string>("");
  const [P2_A, setP2_A] = useState<string>("");
  const [P3_A, setP3_A] = useState<string>("");

  const monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
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
    let day: string =
      pad.substring(0, pad.length - currentDay.toString().length) +
      currentDay.toString();

    let month: string =
      pad.substring(0, pad.length - currentMonth.toString().length) +
      currentMonth.toString();

    let year: string = currentYear.toString();

    setSDATE_A(enumeratesk2?.SDATE_A === "" ? day : enumeratesk2?.SDATE_A!);
    setSDATE_B(enumeratesk2?.SDATE_B === "" ? getMonthName(month) : getMonthName(enumeratesk2?.SDATE_B!));
    setSDATE_C(enumeratesk2?.SDATE_C === "" ? year : enumeratesk2?.SDATE_C!);

    setSTIME_A(enumeratesk2?.STIME_A === "" ? "" : enumeratesk2?.STIME_A!);
    setSTIME_B(enumeratesk2?.STIME_B === "" ? "" : enumeratesk2?.STIME_B!);
    setSTIME_C(enumeratesk2?.STIME_C === "" ? "" : enumeratesk2?.STIME_C!);

    setCDATE_A(enumeratesk2?.CDATE_A === "" ? "" : enumeratesk2?.CDATE_A!);
    setCDATE_B(enumeratesk2?.CDATE_B === "" ? "" : getMonthName(enumeratesk2?.CDATE_B!));
    setCDATE_C(enumeratesk2?.CDATE_C === "" ? "" : enumeratesk2?.CDATE_C!);

    setCTIME_A(enumeratesk2?.CTIME_A === "" ? "" : enumeratesk2?.CTIME_A!);
    setCTIME_B(enumeratesk2?.CTIME_B === "" ? "" : enumeratesk2?.CTIME_B!);
    setCTIME_C(enumeratesk2?.CTIME_C === "" ? "" : enumeratesk2?.CTIME_C!);

    /* setCDATE_A(enumeratesk2?.CDATE_A === "" ? day : enumeratesk2?.CDATE_A!);
    setCDATE_B(enumeratesk2?.CDATE_B === "" ? getMonthName(month) : getMonthName(enumeratesk2?.CDATE_B!));
    setCDATE_C(enumeratesk2?.CDATE_C === "" ? year : enumeratesk2?.CDATE_C!);

    setCTIME_A(enumeratesk2?.CTIME_A === "" ? "00" : enumeratesk2?.CTIME_A!);
    setCTIME_B(enumeratesk2?.CTIME_B === "" ? "00" : enumeratesk2?.CTIME_B!);
    setCTIME_C(enumeratesk2?.CTIME_C === "" ? "00" : enumeratesk2?.CTIME_C!); */

  }, [enumeratesk2, currentDay, currentMonth, currentYear]);

  return (
    <>
      <Container className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="header">
                <Row className="flex-between-center">
                  <Col
                    md={8}
                    className="col-8 d-flex align-items-center pr-0"
                  >
                    <h5 className="mb-0 py-2 py-xl-0 text-white ">
                      ข้อมูลการปฎิบัติงาน
                    </h5>
                  </Col>

                  <Col md={4} className="col-4 ml-auto pl-0">
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
                <Row className="collapse show" id="collapseOperation">
                  <Col md={12}>
                    <Row>
                      <Col md={6} className="mt-2">
                        <label style={{ fontWeight: "bold" }}>
                          วันที่และเวลา ที่นับจด (เริ่ม - แล้วเสร็จ)
                        </label>

                        <table className="table table-sm">
                          <tbody>
                            <tr className="border-top ">
                              <td className="bg-100">
                                วันที่และเวลา เริ่มปฏิบัติงาน{" "}
                              </td>
                              <td>
                                {SDATE_A} {SDATE_B} {SDATE_C} {STIME_A !== ""? STIME_A + ":" + STIME_B + ":" + STIME_C  :  ""}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">
                                วันที่และเวลา ปฏิบัติงานแล้วเสร็จ{" "}
                              </td>
                              <td>
                                {CDATE_A} {CDATE_B} {CDATE_C} {CTIME_A !== ""?  CTIME_A + ":" + CTIME_B + ":" + CTIME_C  :  ""}
                              </td>
                            </tr>
                            <tr>
                              
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
                                {enumeratesk2 && enumeratesk2?.P1_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${enumeratesk2?.P1_A ?? ""} (${
                                      enumeratesk2?.P1_C ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${enumeratesk2?.P1_B ?? ""}`}
                                    </li>
                                  </ul>
                                )}
                              </td>
                            </tr>
                            <tr className="border-top ">
                              <td className="bg-100">เจ้าหน้าที่วิชาการ </td>
                              <td>
                                {enumeratesk2 && enumeratesk2?.P2_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${enumeratesk2?.P2_A ?? ""} (${
                                      enumeratesk2?.P2_C ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${enumeratesk2?.P2_B ?? ""}`}
                                    </li>
                                  </ul>
                                )}
                              </td>
                            </tr>
                            <tr className="border-top ">
                              <td className="bg-100">ผู้ประสานงานในพื้นที่</td>
                              <td>
                                {enumeratesk2 && enumeratesk2?.P3_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${enumeratesk2?.P3_A ?? ""} (${
                                      enumeratesk2?.P3_C ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${enumeratesk2?.P3_B ?? ""}`}
                                    </li>
                                  </ul>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
