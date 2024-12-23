import { faArrowsRotate, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { APIService } from "../service/APIService";
import { useGlobalListingContext } from "./Listing2Context";
import { Inside, Prefix, R26, R40_LIST, YesNo, _R28 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import LoadingSpinner from "../components/LoadingSpinner";

export default function CFarming2() {
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

  const { userInfo } = useGlobalUserContext();
  const { listing, page, setListing, setPage } = useGlobalListingContext();

  const [valueR18, setValueR18] = useState<string>("");
  const [farming, setFarming] = useState<boolean>(false);
  const [invalidR18, setInvalidR18] = useState<string>("");

  const radioR18 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR18(event.target.value);
    setInvalidR18("");

    if (event.target.value === "1" || event.target.value === "2") {
      setFarming(true);
    } else {
      setFarming(false);
    }
  };

  const [valueR19, setValueR19] = useState<string>("");
  const [valueR20, setValueR20] = useState<string>("");
  const [valueR21, setValueR21] = useState<string>("");
  const [valueR22, setValueR22] = useState<string>("");
  const [valueR23, setValueR23] = useState<string>("");
  const [valueR24, setValueR24] = useState<string>("");
  const [valueR25, setValueR25] = useState<string>("");
  const [valueR26, setValueR26] = useState<string>("");

  const [valueR27, setValueR27] = useState<string>("");
  const [status2, setStatus2] = useState<string>("");
  const [valueR30, setValueR30] = useState<string>("");
  const [invalidR27, setInvalidR27] = useState<string>("");
  const [invalidR19R25, setInvalidR19R25] = useState<string>("");
  const [valueAH_CODE, setValueAH_CODE] = useState<string>("");

  const radioR19 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR19(event.target.value);
    if(event.target.value === "1"){
      setInvalidR19R25("");
    }
  };

  const radioR20 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR20(event.target.value);
    if(event.target.value === "1"){
      setInvalidR19R25("");
    }
  };

  const radioR21 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR21(event.target.value);
    if(event.target.value === "1"){
      setInvalidR19R25("");
    }
  };

  const radioR22 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR22(event.target.value);
    if(event.target.value === "1"){
      setInvalidR19R25("");
    }
  };

  const radioR23 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR23(event.target.value);
    if(event.target.value === "1"){
      setInvalidR19R25("");
    }
  };

  const radioR24 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR24(event.target.value);
    if(event.target.value === "1"){
      setInvalidR19R25("");
    }
  };

  const radioR25 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR25(event.target.value);
    if(event.target.value === "1"){
      setInvalidR19R25("");
    }
  };

  const [valueR28, setValueR28] = useState<string>("");
  const [invalidR28, setInvalidR28] = useState<string>("");
  const radioR28 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR28(event.target.value);
    setInvalidR28("");

    if(event.target.value === "2"){
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
    setValueR29_D(event.target.value);
    setInvalidR29_D("");

    if (event.target.value !== "") {
      let cwtCode: string = event.target.value;
      bindingAMP(cwtCode);
    } 

    setValueR29_E("");
    setValueR29_F("");
    setValueR29_G("");
    setValueR29_H("");
    setValueR29_I("");

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
    setValueR29_E(event.target.value);
    setInvalidR29_E("");

    if (event.target.value !== "") {
      let cwtOrder: string = valueR29_D;
      let ampOrder: string = event.target.value;
      bindingTAM(cwtOrder, ampOrder);
    }

    setValueR29_F("");
    setValueR29_G("");
    setValueR29_H("");
    setValueR29_I("");

    setDdlTam([]);
    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingTAM = async (cwtOrder: string, ampOrder: string) => {
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
            cwtOrder +
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
    setValueR29_F(event.target.value);
    setInvalidR29_F("");

    if (event.target.value !== "") {
      let tamOrder: string = event.target.value;
      bindingTYPE(valueR29_D, valueR29_E, tamOrder);
    }

    setValueR29_G("");
    setValueR29_H("");
    setValueR29_I("");

    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingTYPE = async (cwtOrder: string,
    ampOrder: string,
    tamOrder: string) => {
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
        let url_service_type_api: string = "";
        if (process.env.REACT_APP_SERVICE_TYPE_API) {
          url_service_type_api =
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
          .get(url_service_type_api, {
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
    setValueR29_H(event.target.value);
    if (event.target.value !== "") {
      bindingMUN(valueR29_D, valueR29_E, valueR29_F, event.target.value);
    }

    setValueR29_I("");
    setDdlMun([]);
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
    setValueR29_I(event.target.value);
    if (event.target.value !== "") {
      let munOrder: string =  event.target.value;
      bindingVIL(valueR29_D, valueR29_E, valueR29_F, munOrder);
    } 
    setValueR29_G("");
    setDdlVil([]);
  };

  const bindingVIL = async ( cwtOrder: string,
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

        if(cwtOrder !== "" && ampOrder !== "" && tamOrder !== ""){
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
        }
        
      } catch (err) {
        console.error("ERROR (VIL): ", err);
      }
    }
  };

  const onChangeDdlVil = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValueR29_G(event.target.value);
    setInvalidR29_G("");
  };

  const [valueR29_A, setValueR29_A] = useState<string>("");
  const [valueR29_AT, setValueR29_AT] = useState<string>("");
  const [valueR29_B, setValueR29_B] = useState<string>("");
  const [valueR29_C, setValueR29_C] = useState<string>("");
  const [isShowR29_AT, setIsShowR29_AT] = useState<boolean>(false);

  const [valueR29_D, setValueR29_D] = useState<string>("");
  const [valueR29_E, setValueR29_E] = useState<string>("");
  const [valueR29_F, setValueR29_F] = useState<string>("");
  const [valueR29_G, setValueR29_G] = useState<string>("");
  const [valueR29_H, setValueR29_H] = useState<string>("");
  const [valueR29_I, setValueR29_I] = useState<string>("");

  const [invalidR29_A, setInvalidR29_A] = useState<string>("");
  const [invalidR29_B, setInvalidR29_B] = useState<string>("");
  const [invalidR29_C, setInvalidR29_C] = useState<string>("");
  const [invalidR29_D, setInvalidR29_D] = useState<string>("");
  const [invalidR29_E, setInvalidR29_E] = useState<string>("");
  const [invalidR29_F, setInvalidR29_F] = useState<string>("");
  const [invalidR29_G, setInvalidR29_G] = useState<string>("");
  const [invalidR29_H, setInvalidR29_H] = useState<string>("");
  const [invalidR29_I, setInvalidR29_I] = useState<string>("");

  const radioR29_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR29_A(event.target.value);
    setInvalidR29_A("");

    if (event.target.value === "4") {
      setIsShowR29_AT(true);
    } else {
      setIsShowR29_AT(false);
    }
  };

  const inputR29_AT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR29_AT(event.target.value);
  };

  const inputR29_B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR29_B(event.target.value);
    setInvalidR29_B("");
  };

  const inputR29_C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR29_C(event.target.value);
    setInvalidR29_C("");
  };

  useEffect(() => {
    console.log("load section2");
    async function pageLoad() {
      setValueR18(listing?.R18 === "" ? "" : listing?.R18);
      setFarming(listing?.R18 === "1" || listing?.R18 === "2" ? true : false);

      setValueR19(listing?.R19);
      setValueR20(listing?.R20);
      setValueR21(listing?.R21);
      setValueR22(listing?.R22);
      setValueR23(listing?.R23);
      setValueR24(listing?.R24);
      setValueR25(listing?.R25);

      setValueR26(listing?.R26);
      setValueR27(listing?.R27);

      console.log("listing?.R27 == ",listing?.R27);

      setStatus2(listing?.Status2 === "" ? "" : listing?.Status2);
      setValueR28(listing?.R28);
      
      if (listing?.R28 === "2") {     
        bindingCWT();
        bindingAMP(listing?.R29_D);
        bindingTAM(listing?.R29_D, listing?.R29_E);
        bindingTYPE(listing?.R29_D, listing?.R29_E, listing?.R29_F);
        bindingMUN(listing?.R29_D, listing?.R29_E, listing?.R29_F, listing?.R29_H);
        bindingVIL(listing?.R29_D, listing?.R29_E, listing?.R29_F, listing?.R29_I);
      }

      setValueR29_A(listing?.R29_A);
      setValueR29_AT(listing?.R29_AT);
      setValueR29_B(listing?.R29_B);
      setValueR29_C(listing?.R29_C);
      setValueR29_D(listing?.R29_D); //CWT
      setValueR29_E(listing?.R29_E); //AMP
      setValueR29_F(listing?.R29_F); //TAM
      setValueR29_G(listing?.R29_G); //VIL
      setValueR29_H(listing?.R29_H); //TYPE
      setValueR29_I(listing?.R29_I); //MUN
    }

    pageLoad();
  }, [listing]);

  useEffect(() => {
    async function consistencyCheck() {
      let matchName: boolean = false;
      let matchBD: boolean = false;
      let R30: string = "";

      if (listing?.R14 !== "") {
        let r14: string = listing?.R14;
        let pid: string = listing?.EPID;

        if (r14 === pid) {
          R30 = "1";
        } else {
          matchName = true;
        }
      } else {
        matchName = true;
      }

      if (matchName) {
        if (
          listing?.R13_B.trim() === listing?.R03_B.trim() &&
          listing?.R13_C.trim() === listing?.R03_C.trim()
        ) {
          R30 = "1";
        } else {
          matchBD = true;
        }
      }

      if (matchBD) {
        let birthDay: string = listing?.EBD;
        let bd_Year: string = birthDay.substring(0, 4);
        let bd_Month: string = birthDay.slice(-4).substring(0, 2);
        let bd_Day: string = birthDay.slice(-2);

        if (
          listing?.R16_A! === bd_Day &&
          listing?.R16_B! === bd_Month &&
          listing?.R16_C! === bd_Year
        ) {
          R30 = "1";
        } else {
          R30 = "0";
        }
      }

      setValueR30(R30);

      if (listing?.FromE === "0") {
        //รายใหม่ default ว่านอกเขต status2 = 5 || 6 || 7 || 8 || 9
        if (R30 === "0") {
          setStatus2("9");
        } else if (R30 === "") {
          setStatus2("");
        } else if (R30 === "1") {
          switch (listing.ESI) {
            case "1":
              return setStatus2("5");
            case "2":
              return setStatus2("6");
            case "2":
              return setStatus2("7");
            case "4":
              return setStatus2("8");
            default:
              return setStatus2("");
          }
        }
      } else {
        
        if (R30 === "0") {
          setStatus2("9");
        } else {
          if (valueR18 === "1" || valueR18 === "2") {
            switch (listing?.ESI) {
              case "1":
                return setStatus2("1");
              case "2":
                return setStatus2("3");
              case "3":
                return setStatus2("2");
              case "4":
                return setStatus2("4");
              default:
                return setStatus2("9");
            }
          } else if (valueR18 === "2") {
            switch (listing?.ESI!) {
              case "1":
                return setStatus2("5");
              case "2":
                return setStatus2("7");
              case "3":
                return setStatus2("6");
              case "4":
                return setStatus2("8");
              default:
                return setStatus2("");
            }
          }
        }
      }
    }

    consistencyCheck();

    if (
      valueR19 === "1" ||
      valueR20 === "1" ||
      valueR21 === "1" ||
      valueR22 === "1"
    ) {
      setValueR26("1");
    } else {
      setValueR26("2");
    }
  }, [
    listing,
    valueR18,
    valueR19,
    valueR20,
    valueR21,
    valueR22,
    valueR23,
    valueR24,
    valueR25,
  ]);

  useEffect(() => {
    if(listing.R27 === ""){
      genR27(valueR26);
    }
  }, [listing,valueR26]);

  async function genR27(r26: string) {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let base64 = require("base-64");
      let basic_auth: string = "";

      if (process.env.REACT_APP_BASIC_AUTH_API) {
        basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
      }

      const headers = {
        Authorization: "Basic " + basic_auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + `/Listing2/updateR27`;
        }

        const body = {
          TempKey: listing.TempKey,
          AREA_CODE: listing.AREA_CODE,
          R26: r26,
        };

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setValueR27(res.data.r27);
            }
          })
          .catch((err) => {
            console.log("AXIOS (GEN R27) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (GEN R27): ", err);
      }
    }
  }

  const [waitR27, setWaitR27] = useState<string>("");
  async function refreshR27() {
    setWaitR27("none");
    if (valueR26 === "1") {
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let base64 = require("base-64");
        let basic_auth: string = "";

        if (process.env.REACT_APP_BASIC_AUTH_API) {
          basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
        }

        const headers = {
          Authorization: "Basic " + basic_auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api =
              process.env.REACT_APP_ENUMERATE_API + `/Listing2/updateR27`;
          }

          const body = {
            TempKey: listing.TempKey,
            AREA_CODE: listing.AREA_CODE,
            R26: valueR26,
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setInvalidR27("");
                setWaitR27("none");
                setValueR27(res.data.r27);
              }
            })
            .catch((err) => {
              setWaitR27("");
              console.log("AXIOS (REFRESH R27) ERROR: ", err);
            });
        } catch (err) {
          setWaitR27("");
          console.error("ERROR (REFRESH R27): ", err);
        }
      }
    }
  }

  //modal popup
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

  const [saveCompleted, setSaveCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  async function modalTracking1() {
    console.log(refTimer);

    if (refTimer.current === null) {
      console.log("refTimer is null");
      refTimer.current = window.setTimeout(() => {
        console.log("refTimer 1000");

        setTitleModal(
          "ข้อมูลการทำเกษตรในเนื้อที่ถือครองนอกจังหวัด ของผู้ถือครองที่นับจดได้"
        );
        handleShow();
      }, 1000);
    }else{
      window.clearTimeout(refTimer.current);
    }
  }

  function nextPage() {
    if (listing.FromE === "0") {
      setPage(4);
    }else{
      setPage(3);
    }
  }

  async function save() {
    let isValid: boolean = true;

      if (valueR18 === "") {
        setInvalidR18("is-invalid");
        isValid = false;
      }

      if (valueR18 === "1" || valueR18 === "2") {
        if (
          valueR19 === "" ||
          valueR20 === "" ||
          valueR21 === "" ||
          valueR22 === "" ||
          valueR23 === "" ||
          valueR24 === "" ||
          valueR25 === ""
        ) {
          setInvalidR19R25("is-invalid");
          isValid = false;
        }

        if (
          valueR19 === "0" &&
          valueR20 === "0" &&
          valueR21 === "0" &&
          valueR22 === "0" &&
          valueR23 === "0" &&
          valueR24 === "0" &&
          valueR25 === "0"
        ) {
          setInvalidR19R25("is-invalid");
          isValid = false;
        }
      }

      if ((valueR18 === "2" || valueR18 === "3") && valueR28 === "") {
        setInvalidR28("is-invalid");
        isValid = false;
      }

      if (valueR26 === "1" && valueR27 === "") {
        setInvalidR27("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_A === "") {
        setInvalidR29_A("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_B === "") {
        setInvalidR29_B("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_C === "") {
        setInvalidR29_C("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_D === "") {
        setInvalidR29_D("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_E === "") {
        setInvalidR29_E("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_F === "") {
        setInvalidR29_F("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_G === "") {
        setInvalidR29_G("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_H === "") {
        setInvalidR29_H("is-invalid");
        isValid = false;
      }

      if (valueR28 === "2" && valueR29_I === "") {
        setInvalidR29_I("is-invalid");
        isValid = false;
      }

      if (isValid) {
        const body = {
          areA_CODE: listing.AREA_CODE,
          r01: listing.R01,
          tempKey: listing.TempKey,
          r18: valueR18,
          r19: valueR18 === "3" ? "" : valueR19,
          r20: valueR18 === "3" ? "" : valueR20,
          r21: valueR18 === "3" ? "" : valueR21,
          r22: valueR18 === "3" ? "" : valueR22,
          r23: valueR18 === "3" ? "" : valueR23,
          r24: valueR18 === "3" ? "" : valueR24,
          r25: valueR18 === "3" ? "" : valueR25,
          r26: valueR18 === "3" ? "" : valueR26,
          r27: valueR26 === "1" ? valueR27 : "",
          status2: status2,
          r28: valueR18 === "1" ? "" : valueR28,
          r29_A: valueR28 === "2" ? valueR29_A : "",
          r29_AT: valueR28 === "2" ? valueR29_AT : "",
          r29_B: valueR28 === "2" ? valueR29_B : "",
          r29_C: valueR28 === "2" ? valueR29_C : "",
          r29_D: valueR28 === "2" ? valueR29_D : "",
          r29_E: valueR28 === "2" ? valueR29_E : "",
          r29_F: valueR28 === "2" ? valueR29_F : "",
          r29_G: valueR28 === "2" ? valueR29_G : "",
          r29_H: valueR28 === "2" ? valueR29_H : "",
          r29_I: valueR28 === "2" ? valueR29_I : "",
          r30: listing.FromE === "1"? valueR30 : "",
          modifyBy: userInfo?.userId,
        };

        //ไปหน้า แสดงรายการข้อมูลสำคัญก่อน
        updateSection2(JSON.stringify(body));

        //ถ้าไม่ใช่ผู้ถือครองตามฐานไม่ต้องไปตอนที่ 3
        // if (listing.FromE === "0") {
        //   //update section 2 และ insert สก.2 หากเข้าข่าย
        //   insertEnumerateSection2(JSON.stringify(body));
        // } else {
        //   updateSection2(JSON.stringify(body));
        // }
      }
  }

  //modal popup redirect
  const [showCompleted, setShowModalCompleted] = useState(false);
  const [titleModalCompleted, setTitleModalCompleted] = useState("");
  const [msgModalCompleted, setMsgModalCompleted] = useState("");
  const handleCloseModalCompleted = () => setShowModalCompleted(false);
  const handleShowModalCompleted = () => setShowModalCompleted(true);

  async function updateSection2(jsonString: string) {

    setLoading(true);

    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing2/updateSection2";
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
        .post(url_enumerate_api, jsonString, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            //ดึงข้อมูลหลังจากบันทึกอีกคร้ง เพราะว่าต้องนำไปใช้ต่อใน component อื่น
            setLoading(false);
            getDetail();
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
            `/Listing2/getDetail/${listing.TempKey}`;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setListing(res.data[0]);

              if (listing.FromE === "0") {
                setPage(4);
              }else{
                setPage(3);
              }
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

  const backPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div>
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
                      ตอนที่ 2 นับจดผู้ถือครองทำการเกษตร
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
                          ค. ข้อมูลการทำการเกษตรของผู้ถือครองที่ได้นับจด
                          (สอบถาม)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={6}>
                        <label>
                          R18 : ท่านมีเนื้อที่ถือครองทำการเกษตรอยู่<u>ในเขต</u>
                          จังหวัดนี้หรือไม่
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {Inside.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className={`form-check-input ${invalidR18}`}
                                name="rdR18"
                                type="radio"
                                value={option.value}
                                id={`rdR18${index}`}
                                onChange={radioR18}
                                checked={option.value === valueR18}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR18${index}`}
                              >
                                {option.text}
                              </label>
                              {index === Inside.length - 1 ? (
                                <div className="invalid-feedback">
                                  กรุณาเลือก R18
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    {farming && (
                      <>
                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R19 : ปลูกพืช</label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {YesNo.map((option, index) => (
                                <div
                                  className="form-check form-check-inline"
                                  key={option.value}
                                >
                                  <input
                                    className={`form-check-input ${invalidR19R25}`}
                                    name="rdR19"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR19${index}`}
                                    onChange={radioR19}
                                    checked={option.value === valueR19}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR19${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R20 : เลี้ยงสัตว์</label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {YesNo.map((option, index) => (
                                <div
                                  className="form-check form-check-inline"
                                  key={option.value}
                                >
                                  <input
                                    className={`form-check-input ${invalidR19R25}`}
                                    name="rdR20"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR20${index}`}
                                    onChange={radioR20}
                                    checked={option.value === valueR20}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR20${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R21 : เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด</label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {YesNo.map((option, index) => (
                                <div
                                  className="form-check form-check-inline"
                                  key={option.value}
                                >
                                  <input
                                    className={`form-check-input ${invalidR19R25}`}
                                    name="rdR21"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR21${index}`}
                                    onChange={radioR21}
                                    checked={option.value === valueR21}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR21${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R22 : นาเกลือสมุทร</label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {YesNo.map((option, index) => (
                                <div
                                  className="form-check form-check-inline"
                                  key={option.value}
                                >
                                  <input
                                    className={`form-check-input ${invalidR19R25}`}
                                    name="rdR22"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR22${index}`}
                                    onChange={radioR22}
                                    checked={option.value === valueR22}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR22${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R23 : ประมงน้ำจืด</label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {YesNo.map((option, index) => (
                                <div
                                  className="form-check form-check-inline"
                                  key={option.value}
                                >
                                  <input
                                    className={`form-check-input ${invalidR19R25}`}
                                    name="rdR23"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR23${index}`}
                                    onChange={radioR23}
                                    checked={option.value === valueR23}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR23${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R24 : ประมงทะเล</label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {YesNo.map((option, index) => (
                                <div
                                  className="form-check form-check-inline"
                                  key={option.value}
                                >
                                  <input
                                    className={`form-check-input ${invalidR19R25}`}
                                    name="rdR24"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR24${index}`}
                                    onChange={radioR24}
                                    checked={option.value === valueR24}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR24${index}`}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R25 : เพาะเลี้ยงชายฝั่ง</label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {YesNo.map((option, index) => (
                                <div
                                  className={`form-check form-check-inline ${invalidR19R25}`}
                                  key={option.value}
                                >
                                  <input
                                    className={`form-check-input ${invalidR19R25}`}
                                    name="rdR25"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR25${index}`}
                                    onChange={radioR25}
                                    checked={option.value === valueR25}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR25${index}`}
                                  >
                                    {option.text}
                                  </label>

                                  {index === YesNo.length - 1 ? (
                                    <div className="invalid-feedback">
                                      กรุณาเลือก R19 ถึง R25 และอย่างน้อยมี 1
                                      รายการ ตอบ "มี"
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>

                        {valueR25 && (
                          <>
                            <Row className="mt-2">
                              <Col md={6}>
                                <label>R26 : สถานะการแจงนับ</label>
                              </Col>
                              <Col md={6}>
                                <div className="form-group">
                                  {R26.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className="form-check-input"
                                        name="rdR26"
                                        type="radio"
                                        value={option.value}
                                        id={`rdR26${index}`}
                                        checked={option.value === valueR26}
                                        disabled={true}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdR26${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Col>
                            </Row>
                          </>
                        )}

                        {valueR26 && valueR26 === "1" && (
                          <>
                            <Row className="mt-2">
                              <Col md={6}>
                                <label>
                                  R27 : ลำดับที่ของผู้ถือครองทำการเกษตร
                                  (ที่ต้องแจงนับ) ของเขตปฏิบัติงานนี้
                                </label>
                              </Col>
                              <Col md={6}>
                                <input
                                  type="text"
                                  className={`form-control ${invalidR27}`}
                                  value={valueR27}
                                  disabled={true}
                                />
                                <div className="invalid-feedback">
                                  กรุณาสร้างเลขที่ลำดับ R27
                                  <a style={{ cursor: "pointer" }}>
                                    <span
                                      className="ms-2"
                                      style={{
                                        color: "#000",
                                        display : waitR27
                                      }}
                                      onClick={() => refreshR27()}
                                    >
                                      <FontAwesomeIcon
                                        icon={faArrowsRotate}
                                        className="fa-xl"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </Col>
                            </Row>
                          </>
                        )}
                      </>
                    )}

                    {valueR18 && (valueR26 === "1" || valueR26 === "2") && (
                      <>
                        <Row className="mt-2">
                          <Col md={12}>
                            <label style={{ fontWeight: "bold" }}>
                              ง. ระบุรหัสสถานะผู้ถือครองฯ ที่นับจดได้
                            </label>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>status2</label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
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
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className="form-check-input"
                                        name="rdStatus2"
                                        type="radio"
                                        value={option.value}
                                        id={`rdStatus2${index}`}
                                        checked={option.value === status2}
                                        disabled={true}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdStatus2${index}`}
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
                      </>
                    )}

                    {(valueR18 === "2" || valueR18 === "3") && (
                      <>
                        <Row className="mt-2">
                          <Col md={12}>
                            <label style={{ fontWeight: "bold" }}>
                              จ. การนับจดเพิ่ม กรณีมีการทำการเกษตรนอกเขตจังหวัด
                            </label>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>
                              R28 :
                              ท่านสามารถตอบข้อมูลรายละเอียดการทำการเกษตรบนเนื้อที่ที่อยู่
                              <u>นอกเขต</u> จังหวัดนี้ได้หรือไม่
                            </label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              <div className="mt-2">
                                {_R28.map((option, index) => (
                                  <div
                                    className="form-check"
                                    key={option.value}
                                  >
                                    <input
                                      className={`form-check-input ${invalidR28}`}
                                      name="rdR28"
                                      type="radio"
                                      value={option.value}
                                      id={`rdR28${index}`}
                                      onChange={radioR28}
                                      checked={option.value === valueR28}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`rdR28${index}`}
                                    >
                                      {option.text}
                                    </label>
                                    {index === _R28.length - 1 ? (
                                      <div className="invalid-feedback">
                                        กรุณาเลือก R28
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Col>
                        </Row>

                        {valueR28 === "2" && (
                          <>
                            <Row className="mt-2">
                              <Col md={6}>
                                <label>
                                  R29 :
                                  ระบุชื่อและที่อยู่ของผู้ดูแลแทนในเนื้อที่ถือครองทำการเกษตรของท่าน
                                  ที่อยู่นอกเขตจังหวัดนี้
                                </label>
                                {invalidR29_A === "" &&
                                invalidR29_B === "" &&
                                invalidR29_C === "" &&
                                invalidR29_D === "" &&
                                invalidR29_E === "" &&
                                invalidR29_F === "" &&
                                invalidR29_G === "" ? (
                                  ""
                                ) : (
                                  <label
                                    className="ms-1"
                                    style={{
                                      color: "red",
                                      fontSize: "smaller",
                                    }}
                                  >
                                    กรุณาระบุชื่อและที่อยู่ของผู้ดูแลแทน
                                  </label>
                                )}
                              </Col>
                              <Col md={6}>
                                <div className="form-group">
                                  <div className="mt-2">
                                    <button
                                      className="btn btn-primary mt-1 ms-2"
                                      onClick={() => {
                                        modalTracking1();
                                      }}
                                    >
                                      <i className="bx bxs-map-pin text-white me-1"></i>
                                      ระบุเนื้อที่ถือครองนอกจังหวัด
                                    </button>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </>
                        )}
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
                    type="button"
                    className="btn btn-outline-secondary me-2"
                    onClick={backPage}
                  >
                    กลับ
                  </button>
                </div>
                <div className="float-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={saveCompleted}
                    // onClick={() => {
                    //   userInfo?.roleId === 9 ? save() : setPage(page + 1);
                    // }}
                    onClick={() =>
                      userInfo?.roleId !== 9
                        ? nextPage()
                        : process.env.REACT_APP_PROJECT === "open"
                        ? save()
                        : nextPage()
                    }
                    style={{
                      display: userInfo?.roleId === 7 || userInfo?.roleId === 9 ? "" : "none",
                    }}
                  >
                    ถัดไป
                    {loading && <LoadingSpinner />}
                  </button>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>

        <Modal
          show={show}
          size="lg"
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title>{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <label>ที่อยู่ของผู้ดูแลแทนของเนื้อที่ถือครองนอกจังหวัด</label>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <select
                    className={`form-select ${invalidR29_D}`}
                    onChange={onChangeDdlCwt}
                    value={valueR29_D}
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
                    className={`form-select mt-1 ${invalidR29_E}`}
                    onChange={onChangeDdlAmp}
                    value={valueR29_E}
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
                    className={`form-select mt-1 ${invalidR29_F}`}
                    onChange={onChangeDdlTam}
                    value={valueR29_F}
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
                    className={`form-select mt-1 ${invalidR29_H}`}
                    onChange={onChangeDdlType}
                    value={valueR29_H}
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
                    className={`form-select mt-1 ${invalidR29_I}`}
                    onChange={onChangeDdlMun}
                    value={valueR29_I}
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
                    className={`form-select mt-1 ${invalidR29_G}`}
                    onChange={onChangeDdlVil}
                    value={valueR29_G}
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
                </div>
              </Col>
            </Row>

            <Row className="mt-2 question-title">
              <Col md={12}>
                <div className="form-group">
                  <label>ชื่อผู้ดูแลแทน</label>
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col md={6}>
                <label>R29_A : คำนำหน้าชื่อ</label>
              </Col>
              <Col md={6}>
                {Prefix.map((option, index) => (
                  <div className="form-check" key={option.value}>
                    <input
                      className={`form-check-input ${invalidR29_A}`}
                      name="rdR29A"
                      type="radio"
                      value={option.value}
                      id={`rdR29A${index}`}
                      onChange={radioR29_A}
                      checked={option.value === valueR29_A}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`rdR29A${index}`}
                    >
                      {option.text}
                    </label>
                    {index === Prefix.length - 1 ? (
                      <div className="invalid-feedback">
                        กรุณาเลือกคำนำหน้าชื่อ
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </Col>
            </Row>

            <Row
              className="mt-2"
              style={{ display: isShowR29_AT ? "" : "none" }}
            >
              <Col md={6}>
                <label>R29_AT : คำนำหน้าชื่อ อื่นๆ</label>
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  className="form-control"
                  value={valueR29_AT}
                  onChange={inputR29_AT}
                />
              </Col>
            </Row>

            <Row className="mt-2">
              <Col md={6}>
                <label>R29_B : ชื่อ</label>
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  className={`form-control ${invalidR29_B}`}
                  value={valueR29_B}
                  onChange={inputR29_B}
                />
                <div className="invalid-feedback">กรุณาระบุชื่อ</div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col md={6}>
                <label>R29_C : นามสกุล</label>
              </Col>
              <Col md={6}>
                {listing && (
                  <>
                    <input
                      type="text"
                      className={`form-control ${invalidR29_C}`}
                      value={valueR29_C}
                      onChange={inputR29_C}
                    />
                    <div className="invalid-feedback">กรุณาระบุนามสกุล</div>
                  </>
                )}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              บันทึกข้อมูลเนื้อที่ถือครองนอกจังหวัด
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showCompleted}
          onHide={handleCloseModalCompleted}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title>{titleModalCompleted}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 style={{ lineHeight: "unset" }}>{msgModalCompleted}</h5>
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
              state={valueAH_CODE}
              className="btn btn-info"
            >
              สก.2
            </Link>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
