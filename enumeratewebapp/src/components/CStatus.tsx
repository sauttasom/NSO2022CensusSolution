import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { APIService } from "../service/APIService";
import { useGlobalListingContext } from "./ListingContext";
import { R39_LIST, R40_LIST } from "./Option";
import { useGlobalUserContext } from "./UserContext";

export default function CStatus() {
  const { listing, page, setPage } = useGlobalListingContext();
  const { userInfo } = useGlobalUserContext();

  const [selectedR39, setSelectedR39] = useState<String>();
  const [selectedR40, setSelectedR40] = useState<String>();

  const navigate = useNavigate();

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [msgModal, setMsgModal] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const backPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    async function pageLoad() {
      //assign value status R39
      if (listing?.r39 !== "") {
        setSelectedR39(listing?.r39!);
      } else {
        if (listing?.r31 === "1") {
          setSelectedR39("1");
        } else if (listing.r34 === "1") {
          setSelectedR39("2");
        } else if (listing.r34 === "0") {
          setSelectedR39("3");
        } else if (listing.r33 !== "") {
          if (listing?.r33 === "1") {
            setSelectedR39("4");
          }

          if (listing?.r33 === "2") {
            setSelectedR39("5");
          }

          if (listing?.r33 === "3") {
            setSelectedR39("6");
          }
        } else if (listing.r35 === "1") {
          setSelectedR39("7");
        } else if (listing.r37 === "0" || listing.r37 === "1") {
          setSelectedR39("9");
        } else if (listing.r36 === "2" || listing.r36 === "3") {
          setSelectedR39("10");
        } else if (listing.r32 === "2" || listing.r36 === "4") {
          setSelectedR39("11");
        } else if (listing.r36 === "2") {
          setSelectedR39("12");
        }
      }

      //assign value status R40
      if (listing?.r40 !== "") {
        setSelectedR40(listing?.r40!);
      } else {
        if (listing.r31 === "1") {
          if (listing.r25 === "1" || listing.r25 === "2") {
            //มีเฉพาะในจังหวัดนี้
            switch (listing.r06) {
              case "1":
                return setSelectedR40("1");
              case "2":
                return setSelectedR40("3");
              case "3":
                return setSelectedR40("2");
              case "4":
                return setSelectedR40("4");
              default:
                return setSelectedR40("");
            }
          } else if (listing.r25 === "3") {
            //มีเฉพาะจังหวัดอื่น
            switch (listing.r06) {
              case "1":
                return setSelectedR40("5");
              case "2":
                return setSelectedR40("6");
              case "3":
                return setSelectedR40("7");
              case "4":
                return setSelectedR40("8");
              default:
                return setSelectedR40("");
            }
          }
        } else if (listing.r31 === "0") {
          setSelectedR40("9");
        }
      }
    }
    pageLoad();
  }, [listing, selectedR39, selectedR40]);

  async function SaveListing() {
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
            process.env.REACT_APP_ENUMERATE_API + "/Listing/updateStatus";
        }

        const pad: string = "00";
        const currentYear: number = new Date().getFullYear() + 543;
        const currentMonth: string =
          "" + (new Date().getMonth() + 1).toString();
        const currentDay: string = "" + new Date().getDate().toString();

        let day: string =
          pad.substring(0, pad.length - currentDay.toString().length) +
          currentDay.toString();

        let month: string =
          pad.substring(0, pad.length - currentMonth.toString().length) +
          currentMonth.toString();

        let year: string = currentYear.toString();

        const body = {
          listingKey: listing?.listingKey ?? 0,
          r39: selectedR39,
          r40: selectedR40 === undefined ? "" : selectedR40,
          fN_A: listing?.fN_A === "" ? day : listing?.fN_A,
          fN_B: listing?.fN_B === "" ? month : listing?.fN_B,
          fN_C: listing?.fN_C === "" ? year : listing?.fN_C,
        };

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              if (res.data) {
                setTitleModal("บันทึกแบบคุมยอดและนับจด (สก.1) เรียบร้อยแล้ว");
                if (listing?.r29 === "1" || listing?.r29 === "3") {
                  setMsgModal(
                    `ท่านต้องบันทึกแบบแจงนับ (สก.2) หรือไม่? กดที่ปุ่ม "สก.2" เพื่อบันทึกแบบแจงนับ (สก.2) ต่อไป`
                  );
                } else {
                  setMsgModal(`กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก`);
                }
                handleShow();
              }
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
      } catch (err) {
        console.error("SaveListing ERROR: ", err);
      }
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
                      ตอนที่ 4 ระบุสถานะผู้ถือครองทำการเกษตร
                    </h5>
                  </Col>

                  <Col md={8} className="col-sm-auto ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEnumberate"
                      aria-expanded="false"
                      aria-controls="collapseEnumberate"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>

              <Card.Body>
                <Row className="collapse show" id="collapseEnumberate">
                  <Col md={12}>
                    <Row className="mt-2">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          จ. ระบุรหัสสถานะผู้ถือครอง (ระบบกำหนดให้)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={6}>
                        <div className="form-group">
                          <label>R39 : ผู้ถือครองฯ ตามฐานฯ (status 1)</label>

                          <div className="mt-2">
                            <label>พบอยู่ในเขตปฏิบัติงานนี้</label>
                            {R39_LIST.map((option, index) =>
                              option.value === "text" ? (
                                <label key={option.value}>{option.text}</label>
                              ) : (
                                <div className="form-check" key={option.value}>
                                  <input
                                    className="form-check-input"
                                    name="rdR39"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR39${index}`}
                                    checked={option.value === selectedR39}
                                    disabled={true}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR39${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <label>
                            R40 : ผู้ถือครองฯ ที่นับจดได้ (status 2)
                          </label>

                          <div className="mt-2">
                            <label>
                              <u>ในเขต</u>ปฏิบัติงานนี้
                            </label>
                            {R40_LIST.map((option, index) =>
                              option.value === "text" ? (
                                <div key={option.value}>
                                  <u>{option.text}</u>
                                  <label>ปฏิบัติงานนี้</label>
                                </div>
                              ) : (
                                <div className="form-check" key={option.value}>
                                  <input
                                    className="form-check-input"
                                    name="rdR40"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR40${index}`}
                                    checked={option.value === selectedR40}
                                    disabled={true}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR40${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        </div>
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
                  <a
                    href={process.env.PUBLIC_URL + "/ownerList"}
                    type="button"
                    className="btn btn-outline-secondary me-2"
                    style={{
                      display:
                      process.env.REACT_APP_PROJECT === "open"
                      ? listing?.status! === "C" || userInfo?.roleId !== 9
                        ? ""
                        : "none"
                      : "",
                    }}
                  >
                    หน้ารายการ
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2"
                    onClick={backPage}
                  >
                    กลับ
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => SaveListing()}
                    style={{
                      display:
                        process.env.REACT_APP_PROJECT === "open"
                          ? listing?.status! === "C" || userInfo?.roleId !== 9
                            ? "none"
                            : ""
                          : "none",
                    }}
                  >
                    บันทึกผลนับจด
                  </button>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title className="text-primary">{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 style={{ lineHeight: "unset" }}>{msgModal}</h5>
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
              state={listing?.listingKey}
              className="btn btn-info"
              style={{
                display:
                  listing?.r29 === "1" || listing?.r29 === "3" ? "" : "none",
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
