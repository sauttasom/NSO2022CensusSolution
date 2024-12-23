import { faCaretDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Day, Month } from "./DayMonthYear";
import { useGlobalListingContext } from "./Listing2Context";

function Operation() {
  const { listing } = useGlobalListingContext();

  const pad: string = "00";
  const currentYear: number = new Date().getFullYear() + 543;
  const currentMonth: string = "" + (new Date().getMonth() + 1).toString();
  const currentDay: string = "" + new Date().getDate().toString();
  const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });

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

    setStartD(listing?.ST_A === "" ? day : listing?.ST_A);
    setStartM(listing?.ST_B === "" ? getMonthName(month) : getMonthName(listing?.ST_B));
    setStartY(listing?.ST_C === "" ? year : listing?.ST_C);

    if(listing?.ST_A === "" && listing?.ST_B === "" && listing?.ST_C === ""){
      setStartTime(currentTime);
    }else{
      setStartTime(listing.ST_Time.slice(0, 8));
    }
 
    setFinD(listing?.FN_A);
    setFinM(listing?.FN_B === "" ? "" : getMonthName(listing?.FN_B));
    setFinY(listing?.FN_C === "" ? "" : listing?.FN_C);
    setFinTime(listing?.FN_Time === null ? "" : listing?.FN_Time.slice(0, 8));
  }, [listing, currentDay, currentMonth, currentYear]);

  return (
    <>
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
                      ข้อมูลการปฎิบัติงาน
                    </h5>
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
                                {listing &&
                                  `${startD} ${startM} ${startY} ${startTime}`}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">
                                วันที่และเวลา ปฏิบัติงานแล้วเสร็จ{" "}
                              </td>
                              <td>
                                {listing && `${finD} ${finM} ${finY} ${finTime}`}
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
                                {listing && listing?.ENU_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${listing?.ENU_A ?? ""} (${
                                      listing?.ENU_B ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${listing?.ENU_C ?? ""}`}
                                    </li>
                                  </ul>
                                )}
                              </td>
                            </tr>
                            <tr className="border-top ">
                              <td className="bg-100">เจ้าหน้าที่วิชาการ </td>
                              <td>
                                {listing && listing?.ACA_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${listing?.ACA_A ?? ""} (${
                                      listing?.ACA_B ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${listing?.ACA_C ?? ""}`}
                                    </li>
                                  </ul>
                                )}
                              </td>
                            </tr>
                            <tr className="border-top ">
                              <td className="bg-100">ผู้ประสานงานในพื้นที่</td>
                              <td>
                                {listing && listing?.SUB_A && (
                                  <ul
                                    style={{
                                      listStyleType: "none",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li>{`${listing?.SUB_A ?? ""} (${
                                      listing?.SUB_B ?? ""
                                    })`}</li>
                                    <li>
                                      {" "}
                                      <FontAwesomeIcon icon={faPhone} />{" "}
                                      {`${listing?.SUB_C ?? ""}`}
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
export default Operation;
