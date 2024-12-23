import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AMP, CWT, TAM, VIL } from "../model/Address";
import { APIService } from "../service/APIService";
import { CalculateService } from "../service/CalculateService";
import { useGlobalListingContext } from "./ListingContext";
import { IsNot, R37_LIST, R36_LIST, R33_LIST, R32_LIST } from "./Option";
import { useGlobalUserContext } from "./UserContext";

export default function CVerify() {
  const { listing, noFarmer, page, setListing, setPage } =
    useGlobalListingContext();
  const { userInfo } = useGlobalUserContext();

  const [ddlCwt, setDllcwt] = useState<CWT[]>();
  const [ddlAMP, setDllamp] = useState<AMP[]>();
  const [ddlTam, setDlltam] = useState<TAM[]>();
  const [ddlVil, setDllVil] = useState<VIL[]>();

  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [resource, setResource] = useState<string>("");

  const [selectedR31, setSelectedR31] = useState<string>("");
  const [selectedR32, setSelectedR32] = useState<string>("");
  const [selectedR33, setSelectedR33] = useState<string>("");
  const [selectedR34, setSelectedR34] = useState<string>("");
  const [selectedR35, setSelectedR35] = useState<string>("");
  const [selectedR36, setSelectedR36] = useState<string>("");
  const [selectedR37, setSelectedR37] = useState<string>("");
  const [selectedR38_A, setSelectedR38_A] = useState<string>("");
  const [selectedR38_B, setSelectedR38_B] = useState<string>("");
  const [selectedR38_C, setSelectedR38_C] = useState<string>("");
  const [selectedR38_G, setSelectedR38_G] = useState<string>("");
  const [txtR38_H, setTxtR38_H] = useState<string>("");

  const [hideR32, setHideR32] = useState<boolean>(true);
  const [hideR33, setHideR33] = useState<boolean>(true);
  const [hideR34, setHideR34] = useState<boolean>(true);
  const [hideR35, setHideR35] = useState<boolean>(true);
  const [hideR36, setHideR36] = useState<boolean>(true);
  const [hideR37, setHideR37] = useState<boolean>(true);
  const [hideR38, setHideR38] = useState<boolean>(true);
  const [requiredR32, setRequiredR32] = useState<boolean>(false);
  const [requiredR33, setRequiredR33] = useState<boolean>(false);
  const [requiredR34, setRequiredR34] = useState<boolean>(false);
  const [requiredR35, setRequiredR35] = useState<boolean>(false);
  const [requiredR36, setRequiredR36] = useState<boolean>(false);
  const [requiredR37, setRequiredR37] = useState<boolean>(false);
  const [requiredR38, setRequiredR38] = useState<boolean>(false);

  const backPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (page > 0) {
      if (listing?.r07! === "1") {
        setPage(page - 1);
      } else {
        //กรณี R07 = 2,3,4 จะต้องเปิดที่หน้าแรกเลย เพราะว่าหน้า 2 ไม่ได้กรอกข้อมูล
        setPage(1);
      }
    }
  };

  //pageLoad is first load
  useEffect(() => {
    async function pageLoad() {
      setSelectedR36(listing?.r36!);
      setSelectedR37(listing?.r37!);

      if (listing?.r36! === "1") {
        setHideR37(false);
      } else {
        setHideR37(true);
      }

      if (listing?.r37 !== "") {
        if (listing?.r37! === "0") {
          setHideR38(false);

          setSelectedR38_A(listing?.r38_A!);

          //อำเภอ R38_B
          if (listing?.r38_A !== "") {
            bindingAMP(listing?.r38_A!);
            setSelectedR38_B(listing?.r38_B!);
          }

          //ตำบล R38_C
          if (listing?.r38_B !== "") {
            let ampCode: string = listing?.r38_A! + listing?.r38_B!;
            bindingTAM(ampCode);
            setSelectedR38_C(listing?.r38_C!);
          }

          //หมู่ที่ R38_G
          if (listing?.r38_C !== "") {
            let tamCode: string =
              listing?.r38_A! + listing?.r38_B! + listing?.r38_C!;
            bindingVIL(tamCode);
            setSelectedR38_G(listing?.r38_G!);
          }

          setTxtR38_H(listing?.r38_H!);
        } else {
          setHideR38(true);
        }
      }
    }
    async function bindindCWT(url: string) {
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API ?? "");
      if (api.authToken) {
        let auth: string = api.authToken;
        api.setHeaders([
          {
            key: "Authorization",
            value: "Basic " + auth,
          },
          {
            key: "Content-Type",
            value: "application/json;charset=UTF-8",
          },
        ]);

        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + url;
          }

          await axios
            .get(url_enumerate_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setDllcwt(res.data);
              }
            })
            .catch((err) => {
              console.log("AXIOS (CWT) ERROR: ", err);
            });
        } catch (err) {
          console.error("ERROR (CWT): ", err);
        }
      }
    }

    async function bindFarmer() {
      if (listing?.r04 === "1") {
        setGender("ชาย");
      } else {
        setGender("หญิง");
      }

      if (listing?.bd !== "" && listing?.r05 === "") {
        let birthDay: string = listing?.bd!;
        //console.log(birthDay);
        const calculate = new CalculateService();
        calculate.birthDate = birthDay;
        calculate.calculateAge();
        setAge(calculate.age.toString());
      } else if (listing?.r05 !== "") {
        setAge(listing?.r05!);
      } else {
        setAge("");
      }

      switch (listing?.r06) {
        case "1":
          return setResource("ทะเบียน และ สก.56");
        case "2":
          return setResource("ทะเบียน เท่านั้น");
        case "3":
          return setResource("สก.56 เท่านั้น");
        case "4":
          return setResource("นอกทะเบียน เท่านั้น");
        default:
          return setResource("");
      }
    }

    bindindCWT("/Address/cwt");
    pageLoad();
    bindFarmer();
  }, [listing]);

  const bindingAMP = async (cwtCode: string) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API ?? "");
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Address/amp/" + cwtCode;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDllamp(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS (AMP) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (AMP): ", err);
      }
    }
  };

  const bindingTAM = async (ampCode: string) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API ?? "");
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Address/tam/" + ampCode;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDlltam(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS (TAM) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TAM): ", err);
      }
    }
  };

  const bindingVIL = async (tamCode: string) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API ?? "");
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Address/vil/" + tamCode;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDllVil(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS (TAM) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TAM): ", err);
      }
    }
  };

  //bind R31 and open R26 if R07 = 2,3,4
  useEffect(() => {
    if (listing?.r07 === "1") {
      //R07 = 1 คือ มีผู้อยู่อาศัย จะทำการนับจดต่อ
      setSelectedR32(listing?.r32);
      setSelectedR33(listing?.r33);
      setSelectedR34(listing?.r34);
      setSelectedR35(listing?.r35);

      //assign value in radio R31
      if (listing?.r11 === "1" || listing?.r12 === "1") {
        if (listing?.r31 !== "") {
          setSelectedR31(listing?.r31);

          if (listing?.r31 === "1") {
            setHideR32(true);
            setHideR33(true);
            setHideR34(true);
            setHideR35(true);
            setHideR36(true);
            setHideR37(true);
            setHideR38(true);
          }
        } else {
          let checkR14: boolean = false;
          let checkR13: boolean = false;
          let checkR16: boolean = false;

          if (listing?.r14 !== "" && listing?.r14 !== "b") {
            checkR14 = true;
          }

          if (checkR14) {
            let r14: string = listing.r14;
            let pid: string = listing.pid;

            if (r14 === pid) {
              //R14 # blank ให้ match กับ PID ของบ้านเลขที่นี้
              //ถ้าตรง R31 = 1
              setSelectedR31("1");
            }
          } else {
            checkR13 = true;
          }

          if (checkR13) {
            //ถ้า match R14 ไม่ตรง
            //ให้ match R13_B และ R13_C กับ R03_B และ R03_C แล้วตรงกัน
            if (
              listing?.r13_B.trim() === listing?.r03_B.trim() &&
              listing?.r13_C.trim() === listing?.r03_C.trim()
            ) {
              setSelectedR31("1");
            } else {
              checkR16 = true;
            }
          }

          if (checkR16) {
            //ถ้า match R13_B และ R13_C กับ R03_B และ R03_C ไม่ตรง
            //ให้ match R16_A - R16_C กับ BD
            let birthDay: string = listing.bd;
            let bd_Year: string = birthDay.substring(0, 4);
            let bd_Month: string = birthDay.slice(-4).substring(0, 2);
            let bd_Day: string = birthDay.slice(-2);

            if (
              listing.r16_A === bd_Day &&
              listing.r16_B === bd_Month &&
              listing.r16_C === bd_Year
            ) {
              setSelectedR31("1");
            } else {
              setSelectedR31("0");
            }
          }
        }
      } else {
        setSelectedR31("0");
      }
    } else {
      setSelectedR31("");
      setSelectedR32("");
      setSelectedR33("");
      setSelectedR34("");
      setSelectedR35("");

      setHideR36(false);
    }
  }, [listing]);

  //handle radio changed
  useEffect(() => {
    if (selectedR31 === "0" || listing?.r10 === "0" || listing?.r11 === "0") {
      if (listing?.r04 === "1") {
        setGender("ชาย");
      } else {
        setGender("หญิง");
      }
    }

    if (selectedR31 === "0") {
      setRequiredR36(false);
      setHideR32(false);
      setHideR36(true);
      if (selectedR32 === "" || selectedR32 === "b") {
        setRequiredR32(true);
      }
    } else if (selectedR31 === "1") {
      setHideR32(true);
      setHideR36(true);
      setRequiredR32(false);
      setRequiredR36(false);
    }

    if (selectedR32 === "1") {
      setRequiredR36(false);
      setRequiredR37(false);
      setHideR36(true);
      setHideR37(true);
      setHideR38(true);

      setSelectedR36("");
      setSelectedR37("");

      if (listing?.r10 === "0") {
        //R33 ต้อง # blank
        //R34 – R35 ต้อง = blank

        if (selectedR33 !== "") {
          setRequiredR33(false);
        } else {
          setRequiredR33(true);
        }

        setHideR33(false);
        setHideR34(true);
        setHideR35(true);

        setSelectedR34("");
        setSelectedR35("");
      } else if (listing?.r11 === "1" || listing?.r12 === "1") {
        //R34 ต้อง # blank
        //R33 และ R35 ต้อง = blank

        if (selectedR34 !== "") {
          setRequiredR34(false);
        } else {
          setRequiredR34(true);
        }

        setHideR33(true);
        setHideR34(false);
        setHideR35(true);

        setSelectedR33("");
        setSelectedR35("");
      } else if (listing?.r11 === "0") {
        //R35 ต้อง # blank
        //R33 และ R34 ต้อง = blank

        if (selectedR35 !== "") {
          setRequiredR35(false);
        } else {
          setRequiredR35(true);
        }

        setHideR33(true);
        setHideR34(true);
        setHideR35(false);

        setSelectedR33("");
        setSelectedR34("");
      }
    } else if (selectedR32 === "2") {
      //R33 – R38 ต้อง = blank
      //R39 ต้อง = 11
      setRequiredR33(false);
      setRequiredR34(false);
      setRequiredR35(false);
      setRequiredR36(false);
      setRequiredR37(false);
      setRequiredR38(false);

      setHideR33(true);
      setHideR34(true);
      setHideR35(true);
      setHideR36(true);
      setHideR37(true);
      setHideR38(true);

      setSelectedR33("");
      setSelectedR34("");
      setSelectedR35("");
      setSelectedR36("");
      setSelectedR37("");
      setSelectedR38_A("");
      setSelectedR38_B("");
      setSelectedR38_C("");
      setSelectedR38_G("");
      setTxtR38_H("");
    } else if (selectedR32 === "3") {
      //ถ้า R07=2 หรือ R07=3 หรือ R07=4 หรือ R32=3 แล้ว
      //R36 ต้อง # blank
      setRequiredR33(false);

      if (selectedR36 !== "") {
        setRequiredR36(false);
      } else {
        setRequiredR36(true);
      }

      setHideR33(true);
      setHideR34(true);
      setHideR35(true);
      setHideR36(false);

      setSelectedR33("");
      setSelectedR34("");
      setSelectedR35("");
    }
  }, [
    selectedR31,
    selectedR32,
    selectedR33,
    selectedR34,
    selectedR35,
    selectedR36,
    selectedR37,
    requiredR32,
    requiredR33,
    requiredR34,
    requiredR35,
    requiredR36,
    requiredR37,
    requiredR38,
    listing,
  ]);

  const radioR32 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR32(event.target.value);
    setRequiredR32(false);
  };

  const radioR33 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR33(event.target.value);
    setRequiredR33(false);
  };

  const radioR34 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR34(event.target.value);
    setRequiredR34(false);
  };

  const radioR35 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR35(event.target.value);
    setRequiredR35(false);
  };

  const radioR36 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR36(event.target.value);
    setRequiredR36(false);

    if (event.target.value === "1") {
      setHideR37(false);
      setRequiredR37(true);
    } else {
      setHideR37(true);
      setRequiredR37(false);
    }
  };

  const radioR37 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR37(event.target.value);
    setRequiredR37(false);

    if (event.target.value === "0") {
      setHideR38(false);
      setRequiredR38(true);
    } else {
      setHideR38(true);
      setRequiredR38(false);

      setSelectedR38_A("");
      setSelectedR38_B("");
      setSelectedR38_C("");
      setSelectedR38_G("");
      setTxtR38_H("");
    }
  };

  const ddlR38_A = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR38_A(event.target.value);
    setDlltam(undefined);
    setDllVil(undefined);

    if (event.target.value !== "") {
      bindingAMP(event.target.value);
      setSelectedR38_B("");
    } else {
      setDllamp(undefined);
    }
  };

  const ddlR38_B = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR38_B(event.target.value);

    if (event.target.value !== "") {
      let ampCode: string = selectedR38_A! + event.target.value;
      bindingTAM(ampCode);
    }
  };

  const ddlR38_C = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR38_C(event.target.value);

    if (event.target.value !== "") {
      let tamCode: string =
        selectedR38_A! + selectedR38_B! + event.target.value;
      bindingVIL(tamCode);
    }
  };

  const ddlR38_G = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR38_G(event.target.value);
  };

  const inputR38_H = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR38_H(event.target.value);
  };

  async function valiateCheck() {
    let inValidate: boolean = false;

    if (requiredR32) {
      if (selectedR32 === "" || selectedR32 === undefined) {
        setRequiredR32(true);
        inValidate = true;
      } else {
        setRequiredR32(false);
        inValidate = false;
      }
    }

    //required R33 แต่ว่าไม่เลือก radio R33
    if (requiredR33) {
      if (selectedR33 === "") {
        setRequiredR33(true);
        inValidate = true;
      } else {
        setRequiredR33(false);
        inValidate = false;
      }
    }
    //required R34 แต่ว่าไม่เลือก radio R34
    if (requiredR34) {
      if (selectedR34 === "") {
        setRequiredR34(true);
        inValidate = true;
      } else {
        setRequiredR34(false);
        inValidate = false;
      }
    }

    //required R35 แต่ว่าไม่เลือก radio R35
    if (requiredR35) {
      if (selectedR35 === "") {
        setRequiredR35(true);
        inValidate = true;
      } else {
        setRequiredR35(false);
        inValidate = false;
      }
    }

    //required R36 แต่ว่าไม่เลือก radio R36
    console.log(requiredR36);
    if (requiredR36) {
      if (selectedR36 === "") {
        setRequiredR36(true);
        inValidate = true;
      } else {
        setRequiredR36(false);
        inValidate = false;
      }
    }

    //required R37 แต่ว่าไม่เลือก radio R37
    console.log(requiredR37);
    if (requiredR37) {
      if (selectedR37 === "") {
        setRequiredR37(true);
        inValidate = true;
      } else {
        setRequiredR37(false);
        inValidate = false;
      }
    }

    //required R38 แต่ว่าไม่เลือก radio R38
    let R28blank: boolean = false;
    if (requiredR38) {
      if (selectedR38_A === "") {
        R28blank = true;
      }
      if (selectedR38_B === "") {
        R28blank = true;
      }
      if (selectedR38_C === "") {
        R28blank = true;
      }
      if (txtR38_H === "") {
        R28blank = true;
      }

      if (R28blank) {
        setRequiredR38(true);
        inValidate = true;
      } else {
        setRequiredR38(false);
        inValidate = false;
      }
    }

    if (inValidate) {
    } else {
      SaveListing();
    }
  }

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
            process.env.REACT_APP_ENUMERATE_API + "/Listing/updateVerify";
        }

        const body = {
          listingKey: listing?.listingKey ?? 0,
          r31: selectedR31,
          r32: selectedR32,
          r33: selectedR33,
          r34: selectedR34,
          r35: selectedR35,
          r36: selectedR36,
          r37: selectedR37,
          r38_A: selectedR38_A,
          r38_B: selectedR38_B,
          r38_C: selectedR38_C,
          r38_G: selectedR38_G,
          r38_H: txtR38_H,
          r05: age,
        };

        //console.log(JSON.stringify(body));

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              if (res.data) {
                setPage(page + 1);
                getDetail();
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

  async function getDetail() {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
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
                      ตอนที่ 3 ตรวจสอบและติดตามผู้ถือครองทำการเกษตร
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
                    <Row className="mt-2 mb-2">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          ง.
                          ตรวจสอบข้อมูลผู้ถือครองที่นับจดได้กับผู้ถือครองตามฐานฯ(ระบบแสดงข้อมูลเพื่อตรวจสอบ)
                        </label>
                      </Col>
                    </Row>

                    <Row
                      style={{ display: listing?.status === "C" ? "none" : "" }}
                    >
                      <Col md={6}>
                        <table className="table table-sm">
                          <tbody>
                            <tr className="border-top ">
                              <td colSpan={2}>
                                ข้อมูลผู้ถือครองทำการเกษตรตามฐานฯ
                                (เปิดเพื่อตรวจสอบหลังนับจดแล้ว)
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">R03 : ชื่อ</td>
                              <td>
                                {listing &&
                                  listing.r03_AT +
                                    listing.r03_B +
                                    " " +
                                    listing.r03_C}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">R04 : เพศ </td>
                              <td>{listing && gender}</td>
                            </tr>
                            <tr>
                              <td className="bg-100">R05 : อายุ </td>
                              <td>{age}</td>
                            </tr>
                            <tr>
                              <td className="bg-100">R06 : แหล่งข้อมูล </td>
                              <td>{listing && resource}</td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: noFarmer ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>
                          R31 : ผู้ถือครองที่นับจดได้
                          เป็นผู้ถือครองตามฐานฯหรือไม่
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {IsNot.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR31"
                                type="radio"
                                value={option.value}
                                id={`rdR31${index}`}
                                checked={option.value === selectedR31}
                                readOnly={true}
                                disabled={true}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR31${index}`}
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
                        display: noFarmer ? "none" : hideR32 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R32 : ผู้ถือครองตามฐานฯ เป็นสมาชิกครัวเรือนนี้หรือไม่
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR32 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R32
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {R32_LIST.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR32"
                                type="radio"
                                value={option.value}
                                id={`rdR32${index}`}
                                onChange={radioR32}
                                checked={option.value === selectedR32}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR32${index}`}
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
                        display: noFarmer ? "none" : hideR33 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R33 : ผู้ถือครองตามฐานฯ เคยทำการเกษตรหรือไม่
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR33 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R33
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {R33_LIST.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR33"
                                type="radio"
                                value={option.value}
                                id={`rdR33${index}`}
                                checked={option.value === selectedR33}
                                onChange={radioR33}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR33${index}`}
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
                        display: noFarmer ? "none" : hideR34 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R34 : ผู้ถือครองตามฐานฯ เป็นผู้ช่วยทำการเกษตรหรือไม่
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR34 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R34
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {IsNot.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR34"
                                type="radio"
                                value={option.value}
                                id={`rdR34${index}`}
                                onChange={radioR34}
                                checked={option.value === selectedR34}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR34${index}`}
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
                        display: noFarmer ? "none" : hideR35 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R35 : ผู้ถือครองตามฐานฯ
                          เป็นผู้รับจ้างทำการเกษตรหรือไม่
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR35 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R35
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {IsNot.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR35"
                                type="radio"
                                value={option.value}
                                id={`rdR35${index}`}
                                onChange={radioR35}
                                checked={option.value === selectedR35}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR35${index}`}
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
                        display: hideR36 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R36 : ท่านทราบที่อยู่ปัจจุบันของผู้ถือครองตามฐานฯ
                          หรือไม่
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR36 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R36
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {R36_LIST.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR36"
                                type="radio"
                                value={option.value}
                                id={`rdR36${index}`}
                                onChange={radioR36}
                                checked={option.value === selectedR36}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR36${index}`}
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
                      style={{ display: hideR37 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>
                          R37 : ที่อยู่ปัจจุบันฯ อยู่ในเขตปฎิบัติงานนี้
                          (หมู่บ้าน/ชุมชน) หรือไม่
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR37 ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R37
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {R37_LIST.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR37"
                                type="radio"
                                value={option.value}
                                id={`rdR37${index}`}
                                onChange={radioR37}
                                checked={option.value === selectedR37}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR37${index}`}
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
                      style={{ display: hideR38 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R38 : ที่อยู่ปัจจุบันฯ </label>
                      </Col>
                      <Col md={6}>
                        <div className="mb-2">
                          <label>จังหวัด</label>
                          {listing && (
                            <select
                              className="form-select"
                              value={selectedR38_A}
                              onChange={ddlR38_A}
                            >
                              <option value="">จังหวัด</option>
                              {ddlCwt &&
                                ddlCwt.map((d) => (
                                  <option key={d.CwtCode} value={d.CwtCode}>
                                    {`${d.CwtCode}-${d.CwtName}`}
                                  </option>
                                ))}
                            </select>
                          )}
                        </div>
                        <div className="mb-2">
                          <label>อำเภอ</label>
                          {listing && (
                            <select
                              className="form-select"
                              value={selectedR38_B}
                              onChange={ddlR38_B}
                            >
                              <option value="">อำเภอ</option>
                              {ddlAMP &&
                                ddlAMP.map((d) => (
                                  <option key={d.AmpOrder} value={d.AmpOrder}>
                                    {`${d.AmpOrder}-${d.AmpName}`}
                                  </option>
                                ))}
                            </select>
                          )}
                        </div>
                        <div className="mb-2">
                          <label>ตำบล</label>
                          {listing && (
                            <select
                              className="form-select"
                              value={selectedR38_C}
                              onChange={ddlR38_C}
                            >
                              <option value="">ตำบล</option>
                              {ddlTam &&
                                ddlTam.map((d) => (
                                  <option key={d.TamOrder} value={d.TamOrder}>
                                    {`${d.TamOrder}-${d.TamName}`}
                                  </option>
                                ))}
                            </select>
                          )}
                        </div>
                        <div className="mb-2">
                          <label>หมู่ที่</label>
                          {listing && (
                            <select
                              className="form-select"
                              value={selectedR38_G}
                              onChange={ddlR38_G}
                            >
                              <option value="">หมู่ที่</option>
                              {ddlVil &&
                                ddlVil.map((d) => (
                                  <option key={d.VilOrder} value={d.VilOrder}>
                                    {`${d.VilOrder}-${d.VilName}`}
                                  </option>
                                ))}
                            </select>
                          )}
                        </div>
                        <div className="mb-2">
                          <label>บ้านเลขที่</label>
                          {listing && (
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={txtR38_H}
                              onChange={inputR38_H}
                            />
                          )}
                        </div>

                        <label
                          className="ms-1"
                          style={{
                            display: requiredR38 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องระบุข้อมูลลง R38
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
              <div className="col-lg-12 col-sm-auto pr-0">
                <div className="float-end">
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
                    onClick={() =>
                      listing?.status === "C" || userInfo?.roleId !== 9
                        ? setPage(page + 1)
                        : process.env.REACT_APP_PROJECT === "open"
                        ? valiateCheck()
                        : setPage(page + 1)
                    }
                  >
                    ถัดไป
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
