import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { Day, Month } from "./DayMonthYear";
import { useGlobalListingContext } from "./ListingContext";
import Operation from "./Operation";
import { Gender, Prefix, TypeMember, TypeResident, YesNo } from "./Option";
import { useGlobalUserContext } from "./UserContext";

export default function CAgricultural() {
  const { listing, noFarmer, page, setListing, setNoFarmer, setPage } =
    useGlobalListingContext();
  const { userInfo } = useGlobalUserContext();

  const [selectedR07, setSelectedR07] = useState<string>();
  const [house, setHouse] = useState<string>();

  const [txtR02_A, setTxtR02_A] = useState<string>("");
  const [txtR09, setTxtR09] = useState<string>();
  const [selectedR10, setSelectedR10] = useState<string>();
  const [selectedR11, setSelectedR11] = useState<string>();
  const [txtR12, setTxtR12] = useState<string>();
  const [selectedR13_A, setselectedR13_A] = useState<string>();
  const [isShowR13_A, setIsShowR13_A] = useState<boolean>(true);
  const [txtR13_AT, setTxtR13_AT] = useState<string>();
  const [txtR13_B, setTxtR13_B] = useState<string>();
  const [txtR13_C, setTxtR13_C] = useState<string>();
  const [txtR14, setTxtR14] = useState<string>("");
  const [checkDigit, setCheckDigit] = useState<boolean>(true);
  const [selectedR15, setSelectedR15] = useState<string>();
  const [selectedR16_A, setSelectedR16_A] = useState<string>();
  const [selectedR16_B, setSelectedR16_B] = useState<string>();
  const [txtR16_C, setTxtR16_C] = useState<string>();

  const [hideR11, setHideR11] = useState<boolean>(true);
  const [hideR12, setHideR12] = useState<boolean>(true);

  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");

  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [disableR08, setDisableR08] = useState<boolean>(false);
  const [disableR12, setDisableR12] = useState<boolean>(false);

  const [requiredR10, setRequiredR10] = useState<boolean>(false);
  const [requiredR11, setRequiredR11] = useState<boolean>(false);

  const [isHouseHolder, setIsHouseHolder] = useState<boolean>(false);

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [msgModal, setMsgModal] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validate, setValidate] = useState<string[]>([]);

  useEffect(() => {
    async function pageLoad() {
      if (listing?.r07 === "1") {
        setNoFarmer(false);
      } else {
        setNoFarmer(true);
      }

      if (listing?.lat === "" && listing?.long === "") {
        getGeolocation();
      } else {
        setLatitude(listing?.lat!);
        setLongitude(listing?.long!);
      }

      setTxtR02_A(listing?.r02_A!);
      setSelectedR07(listing?.r07);
      setHouse(listing?.r08 === "b" ? "" : listing?.r08);
      setTxtR09(listing?.r09 === "b" ? "" : listing?.r09);
      setSelectedR10(listing?.r10 === "b" ? "" : listing?.r10);
      setSelectedR11(listing?.r11 === "b" ? "" : listing?.r11);
      setTxtR12(listing?.r12 === "b" ? "" : listing?.r12);
      setselectedR13_A(listing?.r13_A === "b" ? "" : listing?.r13_A);
      setTxtR13_AT(listing?.r13_AT === "b" ? "" : listing?.r13_AT);
      setTxtR13_B(listing?.r13_B === "b" ? "" : listing?.r13_B);
      setTxtR13_C(listing?.r13_C === "b" ? "" : listing?.r13_C);
      setTxtR14(listing?.r14 === "b" ? "" : listing?.r14!);
      setSelectedR15(listing?.r15 === "b" ? "" : listing?.r15);
      setSelectedR16_A(listing?.r16_A === "b" ? "" : listing?.r16_A);
      setSelectedR16_B(listing?.r16_B === "b" ? "" : listing?.r16_B);
      setTxtR16_C(listing?.r16_C === "b" ? "" : listing?.r16_C);

      if (listing?.subRecordR08 !== 0) {
        setDisableR08(true);
      }

      if (listing?.subRecordR12 !== 0) {
        if (listing?.r08 === "") {
          setHouse("1");
          setTxtR09("1");
        }
        setDisableR08(true);
        setDisableR12(true);
      }
    }
    async function consistencyCheck() {
      if (listing?.r10 === "1") {
        setHideR11(false);
        setHideR12(false);
      } else {
        setHideR11(true);
        setHideR12(true);
      }

      if (listing?.r11 === "1") {
        setHideR12(false);
      } else {
        setHideR12(true);
      }
    }

    pageLoad();
    consistencyCheck();
  }, [listing, setNoFarmer]);

  //radio changed
  useEffect(() => {
    if (selectedR11 === "1" || Number(txtR12) > 0) {
      //ข้อมูลผู้ถือครองทำการเกษตร
      setIsHouseHolder(false);
    } else if (selectedR10 === "0" || selectedR11 === "0") {
      //ข้อมูลหัวหน้าครัวเรือน
      setTxtR14("");
      setIsHouseHolder(true);
    } else {
      setIsHouseHolder(false);
    }
  }, [selectedR10, selectedR11, txtR12, isHouseHolder]);

  function no_Farmer() {
    if (listing?.r08! !== "") {
      //กรณีเป็นรายการ sub record ถ้าเลือก R07 = 2,3,4 ไม่ต้อง clear ค่าที่มีอยู่
    } else {
      setHouse("");
      setTxtR09("");
    }

    setSelectedR10("");
    setSelectedR11("");
    setTxtR12("");
    setselectedR13_A("");
    setTxtR13_AT("");
    setTxtR13_B("");
    setTxtR13_C("");
    setTxtR14("");
    setSelectedR15("");
    setSelectedR16_A("");
    setSelectedR16_B("");
    setTxtR16_C("");
  }

  async function getGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude.toString());
      setLongitude(position.coords.longitude.toString());
    });
  }

  const inputR02_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR02_A(event.target.value);
  };

  const radioR07 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR07(event.target.value);

    if (event.target.value === "1") {
      setNoFarmer(false);
    } else {
      no_Farmer();
      setNoFarmer(true);
    }
  };

  const inputR08 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHouse(event.target.value);
    if (event.target.value !== "") {
      let numberHouse: number = Number(event.target.value);
      if (numberHouse < 1) {
        setTitleModal("แจ้งเตือน");
        setMsgModal("กรุณาระบุจำนวนครัวเรือนมากกว่า 0");
        handleShow();
      } else {
        setHouse(event.target.value);
        setTxtR09("1");
      }
    }
  };

  const inputR09 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR09(event.target.value);
  };

  const radioR10 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR10(event.target.value);
    setRequiredR10(false);
    if (event.target.value === "1") {
      setHideR11(false);
      setHideR12(false);
    } else {
      setSelectedR11("");
      setTxtR12("");
      setHideR11(true);
      setHideR12(true);
    }
  };

  const radioR11 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR11(event.target.value);
    setRequiredR11(false);
    if (event.target.value === "1") {
      setHideR12(false);
      setTxtR12("0");
    } else {
      setHideR12(true);
      setTxtR12("");
    }
  };

  const inputR12 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR12(event.target.value);
    if (event.target.value !== "") {
      let numberFarmer: number = Number(event.target.value);
      if (numberFarmer < 0) {
        setTitleModal("แจ้งเตือน");
        setMsgModal("กรุณาระบุจำนวนสมาชิกไม่น้อยกว่า 0 , กรณีไม่มีให้ใส่ 0");
        handleShow();
      }
    }
  };

  const radioR13_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setselectedR13_A(event.target.value);

    if (event.target.value === "4") {
      setIsShowR13_A(false);
    } else {
      setIsShowR13_A(true);
    }
  };

  const inputR13_AT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR13_AT(event.target.value);
  };

  const inputR13_B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR13_B(event.target.value);
  };

  const inputR13_C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR13_C(event.target.value);
  };

  const inputR14 = (event: React.ChangeEvent<HTMLInputElement>) => {
    let idCard: string = event.target.value;
    if (idCard.length === 13) {
      setTxtR14(idCard);
      CheckDigit(idCard);
    } else if (idCard.length === 0) {
      setTxtR14("");
      setCheckDigit(true);
      setDisableBtn(false);
    }
  };

  async function CheckDigit(idCard: string) {
    let rExp: RegExp = /^[0-9\b]+$/;

    if (rExp.test(idCard)) {
      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API +
            "/CheckDigit?idCard=" +
            idCard;
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
          .post(url_enumerate_api, null, {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              if (res.data) {
                setCheckDigit(true);
                setDisableBtn(false);
              } else {
                setCheckDigit(false);
                setDisableBtn(true);
              }
            }
          })
          .catch((err) => {
            console.error("AXIOS ERROR: ", err);
          });
      } catch (err) {
        console.error("CheckDigit ERROR: ", err);
      }
    } else {
      setCheckDigit(false);
    }
  }

  const radioR15 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR15(event.target.value);
  };

  const selectR16_A = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR16_A(event.target.value);
  };

  const selectR16_B = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR16_B(event.target.value);
  };

  const inputR16_C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR16_C(event.target.value);
  };

  async function SaveListing() {
    if (listing?.status! === "C" || userInfo?.roleId !== 9) {
      //record ที่สำเร็จ จะไม่ให้แก้ไข
      if (selectedR07 === "1") {
        setPage(page + 1);
      } else {
        setPage(3);
      }
    } else {
      //record ที่ยังไม่สำเร็จ
      if (txtR14 !== undefined && txtR14 !== "") {
        let idCard: string = txtR14;
        CheckDigit(idCard);
      } else if (txtR14 === "") {
        setCheckDigit(true);
      }

      //validate
      let validate: string[] = [];

      if (selectedR07 === "1") {
        if (Number(house) <= 0) {
          validate.push("กรุณาระบุจำนวนครัวเรือนมากกว่า 0");
        }

        if (Number(txtR12) < 0) {
          validate.push(
            "กรุณาระบุจำนวนสมาชิกไม่น้อยกว่า 0 , กรณีไม่มีให้ใส่ 0"
          );
        }

        if (selectedR10 === "") {
          setRequiredR10(true);
          validate.push(
            "กรุณาเลือกมีสมาชิกอย่างน้อย 1 คน ทำการเกษตรหรือไม่ (R10)"
          );
        } else {
          if (selectedR10 === "1" && selectedR11 === "") {
            setRequiredR11(true);
            validate.push(
              "กรุณาเลือกมีสมาชิกอย่างน้อย 1 คน ทำการเกษตรของตนเองหรือไม่ (R11)"
            );
          }
        }
      }

      if(latitude === "" && longitude === ""){
        validate.push("กรุณาเปิดตำแหน่งบนอุปกรณ์ เพื่อระบุค่าพิกัด หรือกดปุ่มตำแหน่ง");
      }

      if (listing?.iS_FARMER === "0") {
        if (txtR02_A === "") {
          validate.push("กรุณาระบุบ้านเลขที่");
        } else {
          //check บ้านเลขที่ใหม่ ว่ามีซ้ำกับของเดิมหรือป่าว?
          if (listing.status === "") {
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
                    process.env.REACT_APP_ENUMERATE_API +
                    "/Listing/checkHouseNo";
                }

                const body = {
                  areA_CODE: listing?.areA_CODE!,
                  r02_A: txtR02_A,
                };

                await axios
                  .post(url_enumerate_api, JSON.stringify(body), {
                    headers: headers,
                  })
                  .then((res) => {
                    if (res.status === 200) {
                      let haveRecords: number = Number(res.data);
                      if (haveRecords > 0) {
                        validate.push(`บ้านเลขที่ ${txtR02_A} มีอยู่แล้ว`);
                      }
                    }
                  })
                  .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                  });
              } catch (err) {
                console.error("ERROR (checkHouseNo): ", err);
              }
            }
          }
        }
      }
      //

      if (validate.length === 0) {
        if (checkDigit) {
          updateDetail();

          if (Number(house) >= 1) {
            let subRecord: number = Number(house);
            subRecord = subRecord - 1;
            checkSubreocrd("R08", subRecord);
          }

          if (Number(txtR12) > 0) {
            checkSubreocrd("R12", Number(txtR12));
          }
        } else {
          // id card ไม่ถูกต้อง หรือ ไม่ได้ระบุ id card
        }
      } else {
        setValidate(validate);
        setTitleModal("แจ้งเตือน");
        setMsgModal("");
        handleShow();
      }
    }
  }

  async function checkSubreocrd(rxx: string, house: number) {
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
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API +
            "/Listing/checkSubrecord/" +
            rxx +
            "/" +
            listing?.listingKey;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              let records: number = Number(res.data);
              if (records > 0) {
                //มีรายการ sub record แล้ว
              } else {
                insertSubreocrd(rxx, house);
              }
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (checkSubreocrd): ", err);
      }
    }
  }

  async function insertSubreocrd(subRecord: string, house: Number) {
    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing/insertSubrecord";
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
        listingKey: listing?.listingKey ?? 0,
        subRecord: subRecord,
        amount: house,
      };

      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data) {
              //insert sub record success
            }
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    } catch (err) {
      console.error("ERROR (insertSubreocrd): ", err);
    }
  }

  async function updateDetail() {
    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing/updateControl";
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

      const pad: string = "00";
      const currentYear: number = new Date().getFullYear() + 543;
      const currentMonth: string = "" + (new Date().getMonth() + 1).toString();
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
        lat: latitude,
        long: longitude,
        r02_A: txtR02_A,
        r07: selectedR07 === "" ? "b" : selectedR07,
        r08: house === "" ? "b" : house,
        r09: txtR09 === "" ? "b" : txtR09,
        r10: selectedR10 === "" ? "b" : selectedR10,
        r11: selectedR11 === "" ? "b" : selectedR11,
        r12: txtR12 === "" ? "b" : txtR12,
        r13_A: selectedR13_A === "" ? "b" : selectedR13_A,
        r13_AT: txtR13_AT === "" ? "b" : txtR13_AT,
        r13_B: txtR13_B === "" ? "b" : txtR13_B,
        r13_C: txtR13_C === "" ? "b" : txtR13_C,
        r14: txtR14 === "" ? "b" : txtR14,
        r15: selectedR15 === "" ? "b" : selectedR15,
        r16_A: selectedR16_A === "" ? "b" : selectedR16_A,
        r16_B: selectedR16_B === "" ? "b" : selectedR16_B,
        r16_C: txtR16_C === "" ? "b" : txtR16_C,
        sT_A: listing?.sT_A === "" ? day : listing?.sT_A,
        sT_B: listing?.sT_B === "" ? month : listing?.sT_B,
        sT_C: listing?.sT_C === "" ? year : listing?.sT_C,
      };

      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data) {
              //ดึงข้อมูลหลังจากบันทึกอีกคร้ง เพราะว่าต้องนำไปใช้ต่อใน component อื่น
              getDetail();

              if (selectedR07 === "1") {
                setPage(page + 1);
              } else {
                //R07 = 2,3,4 ข้ามไป R36 แล้วซ่อนตัวเลือกที่ไม่เกี่ยวข้อง
                setPage(3);
              }
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

  async function getDetail() {
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
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API +
            "/Listing/getDetail/" +
            listing?.listingKey;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setListing(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (getDetail): ", err);
      }
    }
  }

  function Back() {
    if (userInfo?.roleId === 3) {
      window.location.href = process.env.PUBLIC_URL + "/list";
    } else {
      window.location.href = process.env.PUBLIC_URL + "/ownerList";
    }
  }

  return (
    <div>
      {listing && userInfo?.roleId !== 3 && (
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
                    <Operation />
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      <Container className="container-xxl flex-grow-1">
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
                      ตอนที่ 1 คุมยอดผู้ถือครองทำการเกษตร
                    </h5>
                  </Col>

                  <Col md={8} className="col-sm-auto ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseControl"
                      aria-expanded="false"
                      aria-controls="collapseControl"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>

              <Card.Body>
                <Row className="collapse show" id="collapseControl">
                  <Col md={12}>
                    <Row className="mt-2 mb-2">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          ก. ข้อมูลผู้ถือครองทำการเกษตรตามฐานฯ (ระบบจัดการให้)
                          และรายใหม่
                        </label>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <table className="table table-sm">
                          <tbody>
                            <tr className="border-top ">
                              <td className="bg-100">
                                R01 : ลำดับที่ของที่อยู่อาศัย{" "}
                              </td>
                              <td>
                                {listing && listing.r01}
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{
                                    display:
                                      listing?.listingKey === 0 ? "" : "none",
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">F1code : ลำดับอ้างอิง </td>
                              <td>{listing && listing.f1CODE}</td>
                            </tr>
                            <tr>
                              <td className="bg-100">R02 : บ้านเลขที่ </td>
                              <td>
                                {listing && (
                                  <label
                                    style={{
                                      display:
                                        listing?.iS_FARMER === "0"
                                          ? "none"
                                          : "",
                                    }}
                                  >
                                    {listing.r02_A}
                                  </label>
                                )}

                                <input
                                  type="text"
                                  className="form-control"
                                  style={{
                                    display:
                                      listing?.iS_FARMER === "0" ? "" : "none",
                                  }}
                                  onChange={inputR02_A}
                                  value={txtR02_A}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">lat : latitude </td>
                              <td>
                                {listing && (
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled={true}
                                    value={latitude}
                                  />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">long : longitude </td>
                              <td>
                                {listing && (
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled={true}
                                    value={longitude}
                                  />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100"></td>
                              <td>
                                <button
                                  className="btn btn-primary"
                                  onClick={getGeolocation}
                                >
                                  ตำแหน่ง
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          ข. การติดตามผู้ถือครองทำการเกษตรตามฐานฯ และรายใหม่
                          (สอบถาม)
                        </label>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <label>R07 : ลักษณะของที่อยู่อาศัย</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {TypeResident.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR07"
                                type="radio"
                                value={option.value}
                                id={`rdR07${index}`}
                                onChange={radioR07}
                                checked={option.value === selectedR07}
                                disabled={
                                  listing?.listingKey === 0 ? true : false
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR07${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R08 : จำนวนครัวเรือนที่อาศัยในบ้านหลังนี้</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="number"
                            className="form-control"
                            defaultValue={house}
                            onChange={inputR08}
                            disabled={
                              noFarmer ? true : disableR08 ? true : false
                            }
                            placeholder="ระบุเป็นตัวเลข"
                            min={1}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>
                          R09 : ลำดับที่ของครัวเรือน/บริษัท/ฟาร์ม/สถาบัน/ฯลฯ
                        </label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={txtR09}
                            onChange={inputR09}
                            disabled={true}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>
                          R10 : มีสมาชิกอย่างน้อย 1 คน ทำการเกษตรหรือไม่{" "}
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR10 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R10
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR10"
                                type="radio"
                                value={option.value}
                                id={`rdR10${index}`}
                                onChange={radioR10}
                                checked={option.value === selectedR10}
                                disabled={noFarmer}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR10${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: noFarmer ? "none" : hideR11 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R11 : มีสมาชิกอย่างน้อย 1 คน ทำการเกษตรของตนเองหรือไม่{" "}
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR11 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R11
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {TypeMember.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR11"
                                type="radio"
                                value={option.value}
                                id={`rdR11${index}`}
                                onChange={radioR11}
                                checked={option.value === selectedR11}
                                disabled={
                                  noFarmer === false ? hideR11 : noFarmer
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR11${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: noFarmer ? "none" : hideR12 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R12 : มีสมาชิกอย่างน้อย 1 คน
                          ทำการเกษตรของตนเองแยกต่างหากหรือไม่{" "}
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {listing && (
                            <input
                              type="number"
                              className="form-control"
                              value={txtR12 === undefined ? "" : txtR12}
                              onChange={inputR12}
                              disabled={
                                noFarmer ? true : disableR12 ? true : false
                              }
                              placeholder="กรณีไม่มีระบุ 0, ระบุเป็นตัวเลขเท่านั้น"
                              min={0}
                            />
                          )}
                        </div>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2 question-title"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={12}>
                        <div className="form-group">
                          <label>
                            {isHouseHolder
                              ? "บันทึกข้อมูลหัวหน้าครัวเรือน หรือ บริษัท/ฟาร์ม/สถาบัน ฯลฯ"
                              : "บันทึกข้อมูลผู้ถือครองทำการเกษตร"}
                          </label>
                        </div>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R13_A : คำนำหน้าชื่อ</label>
                      </Col>
                      <Col md={6}>
                        {listing &&
                          Prefix.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR13"
                                type="radio"
                                value={option.value}
                                id={`rdR13${index}`}
                                onChange={radioR13_A}
                                checked={option.value === selectedR13_A}
                                disabled={noFarmer}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR13${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R13_AT : คำนำหน้าชื่อ อื่นๆ</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            onChange={inputR13_AT}
                            disabled={isShowR13_A}
                            defaultValue={txtR13_AT}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R13_B : ชื่อ</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={txtR13_B}
                            onChange={inputR13_B}
                            disabled={noFarmer}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R13_C : นามสกุล</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={txtR13_C}
                            onChange={inputR13_C}
                            disabled={noFarmer}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R14 : เลขบัตรประจำตัวประชาชน</label>
                        {checkDigit === false && (
                          <span className="badge bg-danger mx-1">
                            ไม่ถูกต้อง
                          </span>
                        )}
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={txtR14}
                            onChange={inputR14}
                            maxLength={13}
                            disabled={isHouseHolder}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R15 : เพศ</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <div className="form-group">
                            {Gender.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rdR15"
                                  type="radio"
                                  value={option.value}
                                  id={`rdR15${index}`}
                                  onChange={radioR15}
                                  checked={option.value === selectedR15}
                                  disabled={noFarmer}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rdR15${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R16 : วัน/เดือน/ปี เกิด</label>
                      </Col>
                      <Col md={2}>
                        {
                          <select
                            className="form-select"
                            defaultValue={""}
                            onChange={selectR16_A}
                            disabled={noFarmer}
                            value={selectedR16_A}
                          >
                            <option value="">วัน</option>
                            {Day.map((d) => (
                              <option key={d.value} value={d.value}>
                                {d.text}
                              </option>
                            ))}
                          </select>
                        }
                      </Col>

                      <Col md={2}>
                        {
                          <select
                            className="form-select"
                            defaultValue={""}
                            onChange={selectR16_B}
                            disabled={noFarmer}
                            value={selectedR16_B}
                          >
                            <option value="">เดือน</option>
                            {Month.map((d) => (
                              <option key={d.value} value={d.value}>
                                {d.text}
                              </option>
                            ))}
                          </select>
                        }
                      </Col>

                      <Col md={2}>
                        {listing && (
                          <input
                            type="number"
                            className="form-control"
                            defaultValue={
                              txtR16_C === undefined ? "" : txtR16_C
                            }
                            onChange={inputR16_C}
                            maxLength={4}
                            disabled={noFarmer}
                          />
                        )}
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
                      Back();
                    }}
                    type="button"
                    className="btn btn-outline-secondary me-2"
                    style={{ display: userInfo?.roleId === 3 ? "none" : "" }}
                  >
                    หน้ารายการ
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary me-2"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                    style={{ display: userInfo?.roleId === 3 ? "" : "none" }}
                  >
                    กลับ
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      process.env.REACT_APP_PROJECT === "open"
                        ? SaveListing()
                        : setPage(page + 1);
                    }}
                    disabled={disableBtn}
                  >
                    ถัดไป
                  </button>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">{titleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{msgModal}</h5>
          {validate.length > 0 &&
            validate.map((item, index) => {
              return (
                <div key={index}>
                  <h5>{`${item}`}</h5>
                </div>
              );
            })}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
