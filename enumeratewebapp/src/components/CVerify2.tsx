import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalListingContext } from "./Listing2Context";
import { IsNot, R32_LIST, R33_LIST, _R35, _R36 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import LoadingSpinner from "./LoadingSpinner";

export default function CVerify2() {
  interface CWT {
    cwtCode: string;
    cwtOrder: string;
    cwtName: string;
  }

  interface AMP {
    ampCode: string;
    ampOrder: string;
    ampName: string;
  }

  interface TAM {
    tamCode: string;
    tamOrder: string;
    tamName: string;
  }

  interface TYPE {
    typeCode: string;
    typeOrder: string;
    typeName: string;
  }

  interface MUN {
    munCode: string;
    munOrder: string;
    munName: string;
  }

  interface VIL {
    vilCode: string;
    vilOrder: string;
    vilName: string;
  }

  const { listing, page, setListing, setPage } = useGlobalListingContext();
  const { userInfo } = useGlobalUserContext();

  const [valueR07, setValueR07] = useState<string>("");
  const [valueR10, setValueR10] = useState<string>("");
  const [valueR11, setValueR11] = useState<string>("");
  const [valueR12, setValueR12] = useState<string>("");
  const [valueR26, setValueR26] = useState<string>("");

  const [valueR30, setValueR30] = useState<string>("");
  const [valueR31, setValueR31] = useState<string>("");
  const [valueR32, setValueR32] = useState<string>("");
  const [valueR33, setValueR33] = useState<string>("");
  const [valueR34, setValueR34] = useState<string>("");
  const [valueR35, setValueR35] = useState<string>("");
  const [valueR36, setValueR36] = useState<string>("");
  const [valueR37_A, setValueR37_A] = useState<string>("");
  const [valueR37_B, setValueR37_B] = useState<string>("");
  const [valueR37_C, setValueR37_C] = useState<string>("");
  const [valueR37_D, setValueR37_D] = useState<string>("");
  const [valueR37_E, setValueR37_E] = useState<string>("");
  const [valueR37_F, setValueR37_F] = useState<string>("");
  const [valueR37_G, setValueR37_G] = useState<string>("");

  const [invalidR31, setInvalidR31] = useState<string>("");
  const [invalidR32, setInvalidR32] = useState<string>("");
  const [invalidR33, setInvalidR33] = useState<string>("");
  const [invalidR34, setInvalidR34] = useState<string>("");
  const [invalidR35, setInvalidR35] = useState<string>("");
  const [invalidR36, setInvalidR36] = useState<string>("");
  const [invalidR37_A, setInvalidR37_A] = useState<string>("");
  const [invalidR37_B, setInvalidR37_B] = useState<string>("");
  const [invalidR37_C, setInvalidR37_C] = useState<string>("");
  const [invalidR37_D, setInvalidR37_D] = useState<string>("");
  const [invalidR37_E, setInvalidR37_E] = useState<string>("");
  const [invalidR37_F, setInvalidR37_F] = useState<string>("");
  const [invalidR37_G, setInvalidR37_G] = useState<string>("");

  const radioR31 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR31(event.target.value);
    setInvalidR31("");
  };

  const radioR32 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR32(event.target.value);
    setInvalidR32("");
  };

  const radioR33 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR33(event.target.value);
    setInvalidR33("");
  };

  const radioR34 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR34(event.target.value);
    setInvalidR34("");
  };

  const radioR35 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR35(event.target.value);
    setInvalidR35("");
  };

  const radioR36 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR36(event.target.value);
    setInvalidR36("");

    if(event.target.value === "0"){
      bindingCWT();
    }
  };

  const [ddlCwt, setDdlCWT] = useState<CWT[]>();
  const [ddlAMP, setDdlAmp] = useState<AMP[]>([]);
  const [ddlTAM, setDdlTam] = useState<TAM[]>([]);
  const [ddlTYPE, setDdlType] = useState<TYPE[]>([]);
  const [ddlMUN, setDdlMun] = useState<MUN[]>([]);
  const [ddlVIL, setDdlVil] = useState<VIL[]>([]);

  const bindingCWT = async () => {
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
        let url_control: string = "";
        if (process.env.REACT_APP_SERVICE_CWT_API) {
          url_control = process.env.REACT_APP_SERVICE_CWT_API;
        }

        await axios
          .get(url_control, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDdlCWT(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS (CWT) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (CWT): ", err);
      }
    }
  };

  const onChangeDdlCwt = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValueR37_A(event.target.value);
    setInvalidR37_A("");

    if (event.target.value !== "") {
      let cwtCode: string = event.target.value;
      bindingAMP(cwtCode);
    }

    setValueR37_B("");
    setValueR37_C("");
    setValueR37_D("");
    setValueR37_F("");
    setValueR37_G("");

    setDdlAmp([]);
    setDdlTam([]);
    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingAMP = async (cwtCode: string) => {
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
        let url_service_amp_api: string = "";
        if (process.env.REACT_APP_SERVICE_AMP_API) {
          url_service_amp_api =
            process.env.REACT_APP_SERVICE_AMP_API + "?cwt=" + cwtCode;
        }

        await axios
          .get(url_service_amp_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDdlAmp(res.data);
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

  const onChangeDdlAmp = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValueR37_B(event.target.value);
    setInvalidR37_B("");

    if (event.target.value !== "") {
      let cwtOrder: string = valueR37_A;
      let ampOrder: string = event.target.value;
      bindingTAM(cwtOrder, ampOrder);
    }

    setValueR37_C("");
    setValueR37_D("");
    setValueR37_F("");
    setValueR37_G("");

    setDdlTam([]);
    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingTAM = async (cwtCode: string, ampOrder: string) => {
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
        let url_service_tam_api: string = "";
        if (process.env.REACT_APP_SERVICE_TAM_API) {
          url_service_tam_api =
            process.env.REACT_APP_SERVICE_TAM_API +
            "?cwt=" +
            cwtCode +
            "&amp=" +
            ampOrder +
            "&pre=ignore";
        }

        await axios
          .get(url_service_tam_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDdlTam(res.data);
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

  const onChangeDdlTam = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValueR37_C(event.target.value);
    setInvalidR37_C("");

    if (event.target.value !== "") {
      let tamOrder: string = event.target.value;
      bindingTYPE(valueR37_A, valueR37_B, tamOrder);
    }

    setValueR37_D("");
    setValueR37_F("");
    setValueR37_G("");

    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingTYPE = async (cwtOrder:string, ampOrder:string, tamOrder:string) => {
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
        let url_service_tam_api: string = "";
        if (process.env.REACT_APP_SERVICE_TYPE_API) {
          url_service_tam_api =
            process.env.REACT_APP_SERVICE_TYPE_API +
            "?cwt=" +
            cwtOrder +
            "&amp=" +
            ampOrder +
            "&tam=" +
            tamOrder +
            "&pre=ignore";
        }

        await axios
          .get(url_service_tam_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDdlType(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS (TYPE) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TYPE): ", err);
      }
    }
  };

  const onChangeDdlType = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValueR37_F(event.target.value);
    setInvalidR37_F("");
    if (event.target.value !== "") {
      bindingMUN(valueR37_A, valueR37_B, valueR37_C, event.target.value);
    }

    setValueR37_D("");
    setValueR37_G("");

    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingMUN = async (
    cwtOrder: string,
    ampOrder: string,
    tamOrder: string,
    type: string
  ) => {
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
        let url_service_mun_api: string = "";
        if (process.env.REACT_APP_SERVICE_MUN_API) {
          url_service_mun_api =
            process.env.REACT_APP_SERVICE_MUN_API +
            "?cwt=" +
            cwtOrder +
            "&amp=" +
            ampOrder +
            "&tam=" +
            tamOrder+
            "&type=" +
            type +
            "&pre=ignore";
        }

        if (cwtOrder !== "" && ampOrder !== "") {
          await axios
            .get(url_service_mun_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setDdlMun(res.data);
              }
            })
            .catch((err) => {
              console.log("AXIOS (MUN) ERROR: ", err);
            });
        }
      } catch (err) {
        console.error("ERROR (MUN): ", err);
      }
    }
  };

  const onChangeDdlMun = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValueR37_G(event.target.value);
    setInvalidR37_G("");
    if (event.target.value !== "") {
      let munOrder: string =  event.target.value;
      bindingVIL(valueR37_A, valueR37_B, valueR37_C, munOrder);
    } 
    setValueR37_D("");
    setDdlVil([]);
  };

  const bindingVIL = async (cwtOrder: string,
    ampOrder: string,
    tamOrder: string,munOrder: string) => {
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
        let url_service_vil_api: string = "";
        if (process.env.REACT_APP_SERVICE_VIL_API) {
          url_service_vil_api =
            process.env.REACT_APP_SERVICE_VIL_API +
            "?cwt=" +
            cwtOrder +
            "&amp=" +
            ampOrder +
            "&tam=" +
            tamOrder+
            "&mun=" +
            munOrder +
            "&pre=ignore";
        }

        await axios
          .get(url_service_vil_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDdlVil(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS (VIL) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (VIL): ", err);
      }
    }
  };

  const onChangeDdlVil = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValueR37_D(event.target.value);
    setInvalidR37_D("");
  };

  const inputR37_E = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR37_E(event.target.value);
    setInvalidR37_E("");
  };

  useEffect(() => {
    console.log("load section3");
    async function pageLoad() {
      setValueR07(listing?.R07);
      setValueR10(listing?.R10);
      setValueR11(listing?.R11);
      setValueR12(listing?.R12);
      setValueR26(listing.R26);

      setValueR30(listing?.R30);

      if(listing?.R30 !== ""){
        setValueR31("");
        setValueR32("");
        setValueR33("");
        setValueR34("");
        setValueR35("");
        setValueR36("");
      }else{
        setValueR31(listing?.R31);
        setValueR32(listing?.R32);
        setValueR33(listing?.R33);
        setValueR34(listing?.R34);
  
        if (listing?.R07 === "1") {
          if (listing?.R31 === "3") {
            setValueR35(listing?.R35);
            setValueR36(listing?.R36);
          } else {
            setValueR35("");
            setValueR36("");
          }
        } else {
          setValueR35(listing?.R35);
          setValueR36(listing?.R36);
        }
      }      

      if (listing?.R36 === "0") {
        bindingCWT();
        bindingAMP(listing?.R37_A);
        bindingTAM(listing?.R37_A, listing?.R37_B);
        bindingTYPE(listing?.R37_A, listing?.R37_B, listing?.R37_C);
        bindingMUN(
          listing?.R37_A,
          listing?.R37_B,
          listing?.R37_C,
          listing?.R37_F
        );
        bindingVIL(
          listing?.R37_A,
          listing?.R37_B,
          listing?.R37_C,
          listing?.R37_G
        );
      }

      setValueR37_A(listing?.R37_A); //CWT
      setValueR37_B(listing?.R37_B); //AMP
      setValueR37_C(listing?.R37_C); //TAM
      setValueR37_D(listing?.R37_D); //VIL
      setValueR37_E(listing?.R37_E); //ADD
      setValueR37_F(listing?.R37_F); //TYPE
      setValueR37_G(listing?.R37_G); //MUN
    }

    pageLoad();
  }, [listing]);

  //modal popup R37
   // use ref to store the timer id
   const refTimer = useRef<number | null>(null);

  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const handleClose = () => {
    if (refTimer.current === null) return;
    window.clearTimeout(refTimer.current);
    refTimer.current = null;
    setShow(false);
  };
  const handleShow = () => setShow(true);

  async function modalTracking2() {
    console.log(refTimer);

    if (refTimer.current === null) {
      console.log("refTimer is null");
      refTimer.current = window.setTimeout(() => {
        console.log("refTimer 1000");

        setTitleModal("ที่อยู่ปัจจุบัน");
        handleShow();
      }, 1000);
    }else{
      window.clearTimeout(refTimer.current);
    }
  }

  useEffect(() => {
    // cleanup function
    return () => {
      if (refTimer.current !== null) {
        window.clearTimeout(refTimer.current);
      }
    };
  }, []);

  async function save() {
    let isValid: boolean = true;

    if (valueR30 === "0" && valueR31 === "") {
      setInvalidR31("is-invalid");
      isValid = false;
    }

    if (valueR31 === "1" && valueR10 === "0" && valueR32 === "") {
      setInvalidR32("is-invalid");
      isValid = false;
    }

    if (
      valueR31 === "1" &&
      (valueR11 === "1" || Number(valueR12) >= 1) &&
      valueR33 === ""
    ) {
      setInvalidR33("is-invalid");
      isValid = false;
    }

    if (valueR31 === "1" && valueR11 === "0" && valueR34 === "") {
      setInvalidR34("is-invalid");
      isValid = false;
    }

    if ((valueR07 !== "1" || valueR31 === "3") && valueR35 === "") {
      setInvalidR35("is-invalid");
      isValid = false;
    }

    if (valueR35 === "1" && valueR36 === "") {
      setInvalidR36("is-invalid");
      isValid = false;
    }

    if (valueR36 === "0" && valueR37_A === "") {
      setInvalidR37_A("is-invalid");
      isValid = false;
    }

    if (valueR36 === "0" && valueR37_B === "") {
      setInvalidR37_B("is-invalid");
      isValid = false;
    }

    if (valueR36 === "0" && valueR37_C === "") {
      setInvalidR37_C("is-invalid");
      isValid = false;
    }

    if (valueR36 === "0" && valueR37_D === "") {
      setInvalidR37_D("is-invalid");
      isValid = false;
    }

    if (valueR36 === "0" && valueR37_E === "") {
      setInvalidR37_E("is-invalid");
      isValid = false;
    }  
    
    if (isValid) {
      updateSection3();
    }
  }

  const [loading, setLoading] = useState(false);
  async function updateSection3() {
    setLoading(true);
    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing2/updateSection3_sk1";
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

      let ENU: string = "";

      if (valueR26 === "1") {
        ENU = "1";
      }

      if (valueR26 === "2") {
        ENU = "2";
      }

      if (valueR10 === "0" || valueR11 === "0") {
        ENU = "3";
      }

      if (valueR36 === "0") {
        ENU = "4";
      }

      if (valueR35 === "2" || valueR35 === "3") {
        ENU = "5";
      }

      const body = {
        areA_CODE: listing.AREA_CODE,
        r01: listing.R01,
        tempKey: listing.TempKey,
        r30: valueR30,
        r31: valueR30 === "1"? "" : valueR31,
        r32: valueR32,
        r33: valueR33,
        r34: valueR34,
        r35: valueR35,
        r36: valueR35 === "1"? valueR36 : "",
        r37_A: valueR36 === "0"? valueR37_A : "",
        r37_B: valueR36 === "0"? valueR37_B : "",
        r37_C: valueR36 === "0"? valueR37_C : "",
        r37_D: valueR36 === "0"? valueR37_D : "",
        r37_E: valueR36 === "0"? valueR37_E : "",
        r37_F: valueR36 === "0"? valueR37_F : "",
        r37_G: valueR36 === "0"? valueR37_G : "",
        enu: ENU,
        modifyBy: userInfo?.userId,
      };  

      //console.log(JSON.stringify(body));
      
      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            getDetail();
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("AXIOS ERROR: ", err);
        });
    } catch (err) {
      setLoading(false);
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
            `/Listing2/getDetail/${listing.TempKey}`;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setListing(res.data[0]);
              setPage(4);
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

  async function backPage() {
    if (valueR07 === "1") {          
      //R10 = 0 && R11 = 0 ไปหน้า 1 ข้ามตอนที่ 2
      if (valueR10 === "0" || valueR11 === "0") {
        setPage(1);
      } else {
        setPage(page - 1);
      }
    } else {
      //R07 = 2,3,4 ไปหน้า 1 ข้ามตอนที่ 2
      setPage(1);
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
                      ตอนที่ 3 ตรวจสอบและติดตามผู้ถือครองตามฐานข้อมูล
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
                          ฉ.
                          ตรวจสอบข้อมูลผู้ถือครองที่นับจดได้กับผู้ถือครองตามฐานข้อมูล
                        </label>
                      </Col>
                    </Row>

                    {valueR07 === "1" &&
                      valueR10 === "1" &&
                      valueR11 === "1" && (
                        <Row className="mt-2">
                          <Col md={6}>
                            <label>
                              R30 : ผู้ถือครองที่นับจดได้{" "}
                              {valueR30 === "0" && (
                                <b>{`${
                                  listing?.R13_A === "1"
                                    ? "นาย"
                                    : listing?.R13_A === "2"
                                    ? "นาง"
                                    : listing?.R13_A === "3"
                                    ? "นางสาว"
                                    : ""
                                }${listing?.R13_B} ${listing?.R13_C} `}</b>
                              )}
                              เป็นผู้ถือครองตามฐานข้อมูลหรือไม่
                            </label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {IsNot.map((option, index) => (
                                <div className="form-check" key={option.value}>
                                  <input
                                    className="form-check-input"
                                    name="rdR30"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR30${index}`}
                                    checked={option.value === valueR30}
                                    readOnly={true}
                                    disabled={true}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR30${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>
                      )}

                    {(valueR30 === "0" ||
                      valueR10 === "0" ||
                      valueR11 === "0") &&
                      listing.FromE === "1" && (
                        <>
                          <Row className="mt-2">
                            <Col md={6}>
                              <label>
                                R31 : ผู้ถือครองตามฐานข้อมูล{" "}
                                {listing.Status === "C" ? (
                                  ""
                                ) : (
                                  <b>{`${
                                    listing?.Ename_A === "1"
                                      ? "นาย"
                                      : listing?.Ename_A === "2"
                                      ? "นาง"
                                      : listing?.Ename_A === "3"
                                      ? "นางสาว"
                                      : ""
                                  }${listing?.Ename_B} ${
                                    listing?.Ename_C
                                  } `}</b>
                                )}
                                เป็นสมาชิกครัวเรือนนี้หรือไม่
                              </label>
                            </Col>
                            <Col md={6}>
                              <div className="form-group">
                                {R32_LIST.map((option, index) => (
                                  <div
                                    className="form-check"
                                    key={option.value}
                                  >
                                    <input
                                      className={`form-check-input ${invalidR31}`}
                                      name="rdR31"
                                      type="radio"
                                      value={option.value}
                                      id={`rdR31${index}`}
                                      onChange={radioR31}
                                      checked={option.value === valueR31}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`rdR31${index}`}
                                    >
                                      {option.text}
                                    </label>
                                    {index === R32_LIST.length - 1 ? (
                                      <div className="invalid-feedback">
                                        กรุณาเลือก R31
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ))}
                              </div>
                            </Col>
                          </Row>
                        </>
                      )}

                    {valueR31 === "1" && valueR10 === "0" && (
                      <>
                        <Row className="mt-2">
                          <Col md={6}>
                            <label>
                              R32 : ผู้ถือครองตามฐานข้อมูล เคยทำการเกษตรหรือไม่
                            </label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {R33_LIST.map((option, index) => (
                                <div className="form-check" key={option.value}>
                                  <input
                                    className={`form-check-input ${invalidR32}`}
                                    name="rdR32"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR32${index}`}
                                    checked={option.value === valueR32}
                                    onChange={radioR32}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR32${index}`}
                                  >
                                    {option.text}
                                  </label>
                                  {index === R33_LIST.length - 1 ? (
                                    <div className="invalid-feedback">
                                      กรุณาเลือก R32
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>
                      </>
                    )}

                    {valueR31 === "1" &&
                      (valueR11 === "1" || Number(valueR12) > 0) && (
                        <>
                          <Row className="mt-2">
                            <Col md={6}>
                              <label>
                                R33 : ผู้ถือครองตามฐานข้อมูล
                                เป็นผู้ช่วยทำการเกษตรหรือไม่
                              </label>
                            </Col>
                            <Col md={6}>
                              <div className="form-group">
                                {IsNot.map((option, index) => (
                                  <div
                                    className="form-check"
                                    key={option.value}
                                  >
                                    <input
                                      className={`form-check-input ${invalidR33}`}
                                      name="rdR33"
                                      type="radio"
                                      value={option.value}
                                      id={`rdR33${index}`}
                                      onChange={radioR33}
                                      checked={option.value === valueR33}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`rdR33${index}`}
                                    >
                                      {option.text}
                                    </label>
                                    {index === IsNot.length - 1 ? (
                                      <div className="invalid-feedback">
                                        กรุณาเลือก R33
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ))}
                              </div>
                            </Col>
                          </Row>
                        </>
                      )}

                    {valueR31 === "1" && valueR11 === "0" && (
                      <>
                        <Row className="mt-2">
                          <Col md={6}>
                            <label>
                              R34 : ผู้ถือครองตามฐานข้อมูล
                              เป็นผู้รับจ้างทำการเกษตรหรือไม่
                            </label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {IsNot.map((option, index) => (
                                <div className="form-check" key={option.value}>
                                  <input
                                    className={`form-check-input ${invalidR34}`}
                                    name="rdR34"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR34${index}`}
                                    onChange={radioR34}
                                    checked={option.value === valueR34}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR34${index}`}
                                  >
                                    {option.text}
                                  </label>
                                  {index === IsNot.length - 1 ? (
                                    <div className="invalid-feedback">
                                      กรุณาเลือก R34
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>
                      </>
                    )}

                    {(valueR07 !== "1" || valueR31 === "3") && (
                      <>
                        <Row>
                          <Col md={6}>
                            <label>
                              R35 :
                              ท่านทราบที่อยู่ปัจจุบันของผู้ถือครองตามฐานข้อมูล{" "}
                              {listing.Status === "C" ? (
                                ""
                              ) : (
                                <b>{`${
                                  listing?.Ename_A === "1"
                                    ? "นาย"
                                    : listing?.Ename_A === "2"
                                    ? "นาง"
                                    : listing?.Ename_A === "3"
                                    ? "นางสาว"
                                    : ""
                                }${listing?.Ename_B} ${listing?.Ename_C} `}</b>
                              )}
                              หรือไม่
                            </label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {_R35.map((option, index) => (
                                <div className="form-check" key={option.value}>
                                  <input
                                    className={`form-check-input ${invalidR35}`}
                                    name="rdR35"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR35${index}`}
                                    onChange={radioR35}
                                    checked={option.value === valueR35}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR35${index}`}
                                  >
                                    {option.text}
                                  </label>
                                  {index === _R35.length - 1 ? (
                                    <div className="invalid-feedback">
                                      กรุณาเลือก R35
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>
                      </>
                    )}

                    {valueR35 === "1" && (
                      <>
                        <Row className="mt-2">
                          <Col md={6}>
                            <label>
                              R36 : ที่อยู่ปัจจุบันฯ อยู่ในเขตปฎิบัติงานนี้
                              (หมู่บ้าน/ชุมชน) หรือไม่
                            </label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {_R36.map((option, index) => (
                                <div className="form-check" key={option.value}>
                                  <input
                                    className={`form-check-input ${invalidR36}`}
                                    name="rdR36"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR36${index}`}
                                    onChange={radioR36}
                                    checked={option.value === valueR36}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR36${index}`}
                                  >
                                    {option.text}
                                  </label>
                                  {index === _R36.length - 1 ? (
                                    <div className="invalid-feedback">
                                      กรุณาเลือก R36
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>
                      </>
                    )}

                    {valueR35 === "1" && valueR36 === "0" && (
                      <>
                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R37 : ที่อยู่ปัจจุบัน</label>
                            {invalidR37_A === "" &&
                            invalidR37_B === "" &&
                            invalidR37_C === "" &&
                            invalidR37_D === "" &&
                            invalidR37_E === "" ? (
                              ""
                            ) : (
                              <label
                                className="ms-1"
                                style={{
                                  color: "red",
                                  fontSize: "smaller",
                                }}
                              >
                                กรุณาระบุที่อยุ่ปัจจุบัน
                              </label>
                            )}
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              <div className="mt-2">
                                <button
                                  className="btn btn-primary mt-1 ms-2"
                                  onClick={() => {
                                    modalTracking2();
                                  }}
                                >
                                  <i className="bx bxs-map-pin text-white me-1"></i>
                                  ระบุที่อยู่ปัจจุบัน
                                </button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </>
                    )}
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
                <div className="float-end">
                  <button
                    type="button"
                    className="btn btn-primary mt-2 me-2"
                    // onClick={() => save()}
                    disabled={loading}
                    onClick={() =>
                      userInfo?.roleId !== 9
                        ? setPage(page + 1)
                        : process.env.REACT_APP_PROJECT === "open"
                        ? save()
                        : setPage(page + 1)
                    }
                  >
                    ถัดไป {loading && <LoadingSpinner />}
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
          <Modal.Header className="header" closeButton>
            <Modal.Title>{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <div className="form-group">
                  <select
                    className={`form-select ${invalidR37_A}`}
                    onChange={onChangeDdlCwt}
                    value={valueR37_A}
                  >
                    <option value="">จังหวัด</option>
                    {ddlCwt &&
                      ddlCwt.map((d) => (
                        <option key={d.cwtCode} value={d.cwtCode}>
                          {`${d.cwtCode}-${d.cwtName}`}
                        </option>
                      ))}
                  </select>
                  <div className="invalid-feedback">กรุณาเลือกจังหวัด</div>

                  <select
                    className={`form-select mt-1 ${invalidR37_B}`}
                    onChange={onChangeDdlAmp}
                    value={valueR37_B}
                  >
                    <option value="">อำเภอ</option>
                    {ddlAMP &&
                      ddlAMP.map((d, index) => (
                        <option key={index} value={d.ampOrder!}>
                          {`${d.ampOrder!}-${d.ampName!}`}
                        </option>
                      ))}
                  </select>
                  <div className="invalid-feedback">กรุณาเลือกอำเภอ</div>

                  <select
                    className={`form-select mt-1 ${invalidR37_C}`}
                    onChange={onChangeDdlTam}
                    value={valueR37_C}
                  >
                    <option value="">ตำบล</option>
                    {ddlTAM &&
                      ddlTAM.map((d, index) => (
                        <option key={index} value={d.tamOrder!}>
                          {`${d.tamOrder!}-${d.tamName!}`}
                        </option>
                      ))}
                  </select>
                  <div className="invalid-feedback">กรุณาเลือกตำบล</div>

                  <select
                    className={`form-select mt-1 ${invalidR37_F}`}
                    onChange={onChangeDdlType}
                    value={valueR37_F}
                  >
                    <option value="">ประเภทเทศบาล</option>
                    {ddlTYPE &&
                      ddlTYPE.map((d, index) => (
                        <option key={index} value={d.typeOrder!}>
                          {`${d.typeOrder!}-${d.typeName!}`}
                        </option>
                      ))}
                  </select>
                  <div className="invalid-feedback">กรุณาเลือกประเภทเทศบาล</div>

                  <select
                    className={`form-select mt-1 ${invalidR37_G}`}
                    onChange={onChangeDdlMun}
                    value={valueR37_G}
                  >
                    <option value="">เทศบาล</option>
                    {ddlMUN &&
                      ddlMUN.map((d, index) => (
                        <option key={index} value={d.munOrder!}>
                          {`${d.munOrder!}-${d.munName!}`}
                        </option>
                      ))}
                  </select>
                  <div className="invalid-feedback">กรุณาเลือกเทศบาล</div>

                  <select
                    className={`form-select mt-1 ${invalidR37_D}`}
                    onChange={onChangeDdlVil}
                    value={valueR37_D}
                  >
                    <option value="">หมู่ที่</option>
                    {ddlVIL &&
                      ddlVIL.map((d, index) => (
                        <option key={index} value={d.vilOrder!}>
                          {`${d.vilOrder!}-${d.vilName!}`}
                        </option>
                      ))}
                  </select>
                  <div className="invalid-feedback">กรุณาเลือกหมู่ที่</div>

                  <input
                    type="text"
                    className={`form-control mt-1 ${invalidR37_E}`}
                    value={valueR37_E}
                    placeholder="บ้านเลขที่"
                    onChange={inputR37_E}
                  />
                  <div className="invalid-feedback">กรุณาระบุบ้านเลขที่</div>
                </div>

                <b>
                  <u>หมายเหตุ</u>: หากไม่สามารถกรอกที่อยู่ปัจจุบันครบทุกช่อง
                  ให้กลับไปแก้ R35 = 2
                </b>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
              }}
            >
              บันทึกที่อยู่ปัจจุบัน
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
