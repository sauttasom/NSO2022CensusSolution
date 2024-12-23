import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { OutsideInfo } from "../model/OutsideInfo";
import { APIService } from "../service/APIService";
import LoadingSpinner from "./LoadingSpinner";
import NavbarMenu from "./NavbarMenu";
import { Prefix, R26, YesNo } from "./Option";

export default function OutsideDetail() {
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

  const location = useLocation();
  const TempKey = location.state;

  const [valueFN_A, setValueFN_A] = useState<string>("");
  const [valueFN_B, setValueFN_B] = useState<string>("");
  const [valueFN_C, setValueFN_C] = useState<string>("");

  const [valueAREA_CODE, setAREA_CODE] = useState<string>("");
  const [valueAH_CODE, setAH_CODE] = useState<string>("");
  const [valueR01, setValueR01] = useState<string>("");
  const [valueST_A, setValueST_A] = useState<string>("");
  const [valueST_B, setValueST_B] = useState<string>("");
  const [valueST_C, setValueST_C] = useState<string>("");
  const [valueOCWT, setValueOCWT] = useState<string>("");
  const [valueOAMP, setValueOAMP] = useState<string>("");
  const [valueOTAM, setValueOTAM] = useState<string>("");
  const [valueOTYPE, setValueOTYPE] = useState<string>("");
  const [valueOMUN, setValueOMUN] = useState<string>("");
  const [valueOVIL, setValueOVIL] = useState<string>("");
  const [valueOADD, setValueOADD] = useState<string>("");
  const [valueKP, setValueKP] = useState<string>("");
  const [valueTemp_AREA_CODE, setValueTemp_AREA_CODE] = useState<string>("");

  const [invalidOCWT, setInvalidOCWT] = useState<string>("");
  const [invalidOAMP, setInvalidOAMP] = useState<string>("");
  const [invalidOTAM, setInvalidOTAM] = useState<string>("");
  const [invalidOTYPE, setInvalidOTYPE] = useState<string>("");
  const [invalidOMUN, setInvalidOMUN] = useState<string>("");
  const [invalidOVIL, setInvalidOVIL] = useState<string>("");
  const [invalidKP, setInvalidKP] = useState<string>("");

  const inputOADD = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueOADD(event.target.value);
  };

  const radioKP = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueKP(event.target.value);
    setInvalidKP("");
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
    setValueOCWT(event.target.value);
    setInvalidOCWT("");

    if (event.target.value !== "") {
      let cwtCode: string = event.target.value;
      bindingAMP(cwtCode);
    }
    setValueR27("");
    setAH_CODE("");

    setValueOAMP("");
    setValueOTAM("");
    setValueOTYPE("");
    setValueOMUN("");
    setValueOVIL("");

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
    setValueOAMP(event.target.value);
    setInvalidOAMP("");

    if (event.target.value !== "") {
      let ampOrder: string = event.target.value;
      bindingTAM(valueOCWT,ampOrder);
    }

    setValueR27("");
    setAH_CODE("");

    setValueOTAM("");
    setValueOTYPE("");
    setValueOMUN("");
    setValueOVIL("");

    setDdlTam([]);
    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingTAM = async (cwtOrder: string,ampOrder: string) => {
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
    setValueOTAM(event.target.value);
    setInvalidOTAM("");

    if (event.target.value !== "") {
      let tamOrder: string = event.target.value;
      bindingTYPE(valueOCWT, valueOAMP, tamOrder);
    }

    setValueR27("");
    setAH_CODE("");

    setValueOTYPE("");
    setValueOMUN("");
    setValueOVIL("");

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
    setValueOTYPE(event.target.value);
    setInvalidOTYPE("");
    if (event.target.value !== "") {
      bindingMUN(valueOCWT, valueOAMP, valueOTAM, event.target.value);
    }

    setValueR27("");
    setAH_CODE("");

    setValueOMUN("");
    setValueOVIL("");

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
    setValueOMUN(event.target.value);
    setInvalidOMUN("");
    if (event.target.value !== "") {
      let munOrder: string =  event.target.value;
      bindingVIL(valueOCWT, valueOAMP, valueOTAM, munOrder);
    } 

    setValueR27("");
    setAH_CODE("");

    setValueOVIL("");
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
    setValueR27("");
    setAH_CODE("");
    
    setValueOVIL(event.target.value);
    setInvalidOVIL("");
  };
  const [valueR13_A, setValueR13_A] = useState<string>("");
  const [valueR13_AT, setValueR13_AT] = useState<string>("");
  const [valueR13_B, setValueR13_B] = useState<string>("");
  const [valueR13_C, setValueR13_C] = useState<string>("");
  const [isShowR13_AT, setIsShowR13_AT] = useState<boolean>(true);

  const [invalidR13_A, setInvalidR13_A] = useState<string>("");
  const [invalidR13_B, setInvalidR13_B] = useState<string>("");
  const [invalidR13_C, setInvalidR13_C] = useState<string>("");

  const radioR13_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR13_A(event.target.value);
    setInvalidR13_A("");

    if (event.target.value === "4") {
      setIsShowR13_AT(true);
    } else {
      setIsShowR13_AT(false);
    }
  };

  const inputR13_AT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR13_AT(event.target.value);
  };

  const inputR13_B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR13_B(event.target.value);
    setInvalidR13_B("");
  };

  const inputR13_C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR13_C(event.target.value);
    setInvalidR13_C("");
  };

  const [valueR17, setValueR17] = useState<string>("");

  const [valueR19, setValueR19] = useState<string>("");
  const [valueR20, setValueR20] = useState<string>("");
  const [valueR21, setValueR21] = useState<string>("");
  const [valueR22, setValueR22] = useState<string>("");
  const [valueR23, setValueR23] = useState<string>("");
  const [valueR24, setValueR24] = useState<string>("");
  const [valueR25, setValueR25] = useState<string>("");
  const [valueR26, setValueR26] = useState<string>("");
  const [valueR27, setValueR27] = useState<string>("");

  const [invalidR19R25, setInvalidR19R25] = useState<string>("");
  const [invalidR27, setInvalidR27] = useState<string>("");
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

  async function getDetail() {
    let url_enumerate_api: string = "";

    let base64 = require("base-64");
    let basic_auth: string = "";

    if (process.env.REACT_APP_BASIC_AUTH_API) {
      basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
    }

    if (process.env.REACT_APP_ENUMERATE_API) {
      url_enumerate_api =
        process.env.REACT_APP_ENUMERATE_API +
        `/Listing2/getOutsideDetail/${TempKey}`;
    }

    const headers = {
      Authorization: "Basic " + basic_auth,
      "Content-Type": "application/json;charset=UTF-8",
    };

    await axios
      .get(url_enumerate_api, {
        headers: headers,
      })
      .then((res) => {
        if (res.status === 200) {
          let item: OutsideInfo;
          item = res.data[0];

          setValueFN_A(item.FN_A);
          setValueFN_B(item.FN_B);
          setValueFN_C(item.FN_C);

          bindingCWT();
          if (item.OCWT !== "") {     
            bindingAMP(item.OCWT);
            bindingTAM(item.OCWT,item.OAMP);
            bindingTYPE(item.OCWT, item.OAMP, item.OTAM);
            bindingMUN(item.OCWT, item.OAMP, item.OTAM, item.OTYPE);
            bindingVIL(item.OCWT,item.OAMP, item.OTAM, item.OMUN);
          }

          setAREA_CODE(item.AREA_CODE);
          setAH_CODE(item.AH_CODE);
          setValueR01(item.R01);
          setValueST_A(item.ST_A);
          setValueST_B(item.ST_B);
          setValueST_C(item.ST_C);
          setValueOCWT(item.OCWT);
          setValueOAMP(item.OAMP);
          setValueOTAM(item.OTAM);
          setValueOTYPE(item.OTYPE);
          setValueOMUN(item.OMUN);
          setValueOVIL(item.OVIL);
          setValueOADD(item.OADD);
          setValueKP(item.KP);
          setValueTemp_AREA_CODE(item.Temp_AREA_CODE);

          setValueR13_A(item.R13_A);
          setValueR13_AT(item.R13_AT);
          setValueR13_B(item.R13_B);
          setValueR13_C(item.R13_C);
          setIsShowR13_AT(item.R13_A === "4" ? true : false);

          setValueR17(item.R17);

          setValueR19(item.R19);
          setValueR20(item.R20);
          setValueR21(item.R21);
          setValueR22(item.R22);
          setValueR23(item.R23);
          setValueR24(item.R24);
          setValueR25(item.R25);
          setValueR26(item.R26);

          setValueR27(item.R27);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  //pageload
  useEffect(() => {
    getDetail();
  }, [TempKey]);

  useEffect(() => {
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
  }, [valueR19, valueR20, valueR21, valueR22, valueR23, valueR24, valueR25]);

  useEffect(() => {
    if (
      valueR27 === "" &&
      valueOCWT !== "" &&
      valueOAMP !== "" &&
      valueOTAM !== "" &&
      valueOTYPE !== "" &&
      valueOMUN !== "" &&
      valueOVIL !== ""
    ) { 
      genR27(valueR26);
    }
  }, [
    valueR26,
    valueOCWT,
    valueOAMP,
    valueOTAM,
    valueOTYPE,
    valueOMUN,
    valueOVIL,
  ]);

  useEffect(() => {
    if(valueR26 === "1"){
      console.log(valueAREA_CODE + valueR27);
      setAH_CODE(valueAREA_CODE + valueR27)
    }
  }, [valueR26,valueR27]);

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
            process.env.REACT_APP_ENUMERATE_API + `/Listing2/updateR27_sk12`;
        }

        const body = {
          TempKey: TempKey,
          OCWT: valueOCWT,
          OAMP: valueOAMP,
          OTAM: valueOTAM,
          OTYPE: valueOTYPE,
          OMUN: valueOMUN,
          OVIL: valueOVIL,
          R26: r26,
        };

        console.log(url_enumerate_api);     
        console.log(JSON.stringify(body));
        
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
              process.env.REACT_APP_ENUMERATE_API + `/Listing2/updateR27_sk12`;
          }

          const body = {
            TempKey: TempKey,
            OCWT: valueOCWT,
            OAMP: valueOAMP,
            OTAM: valueOTAM,
            OTYPE: valueOTYPE,
            OMUN: valueOMUN,
            OVIL: valueOVIL,
            R26: valueR26,
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              console.log(res.data.r27);
              
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

  const [loadingProcess ,setLoadingProcess] = useState(false);
  const [loadingCompleted ,setLoadingCompleted] = useState(false);
  const [jobStatus, setJobStatus] = useState<string>("");
  async function saveOutside(status : string) {
    //validate
    setJobStatus(status);
    let isValid: boolean = true;

    if (valueOCWT === "") {
      setInvalidOCWT("is-invalid");
      isValid = false;
    }

    if (valueOAMP === "") {
      setInvalidOAMP("is-invalid");
      isValid = false;
    }

    if (valueOTAM === "") {
      setInvalidOTAM("is-invalid");
      isValid = false;
    }
    
    if (valueOTYPE === "") {
      setInvalidOTYPE("is-invalid");
      isValid = false;
    }

    if (valueOMUN === "") {
      setInvalidOMUN("is-invalid");
      isValid = false;
    }

    if (valueOVIL === "") {
      setInvalidOVIL("is-invalid");
      isValid = false;
    }

    if (valueKP === "") {
      setInvalidKP("is-invalid");
      isValid = false;
    }

    if (valueKP === "1") {
      if (valueR13_A === "") {
        setInvalidR13_A("is-invalid");
        isValid = false;
      }
      if (valueR13_B === "") {
        setInvalidR13_B("is-invalid");
        isValid = false;
      }
      if (valueR13_C === "") {
        setInvalidR13_C("is-invalid");
        isValid = false;
      }
    }

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

    if(valueR26 === "1" && valueR27 === ""){
      setInvalidR27("is-invalid");
      setWaitR27("");
      isValid = false;
    }


    if(isValid){

      if(status === "P"){
        setLoadingProcess(true);
      }else{
        setLoadingCompleted(true);
      }

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {

          if(status === "P"){
            url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Listing2/updateOutside";
          }else{
            url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Listing2/updateOutsideComplted";
          }
          
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
          areA_CODE: valueAREA_CODE,
          tempKey: TempKey,
          ocwt: valueOCWT,
          oamp: valueOAMP,
          otam: valueOTAM,
          otype: valueOTYPE,
          omun: valueOMUN,
          ovil: valueOVIL,
          oadd: valueOADD,
          sT_A: valueST_A === "" ? "" : valueST_A,
          sT_B: valueST_B === "" ? "" : valueST_B,
          sT_C: valueST_C === "" ? "" : valueST_C,
          kp: valueKP,
          r13_A: valueKP === "0" ? "" : valueR13_A,
          r13_AT: valueKP === "0" ? "" : valueR13_AT,
          r13_B: valueKP === "0" ? "" : valueR13_B,
          r13_C: valueKP === "0" ? "" : valueR13_C,
          r19: valueR19,
          r20: valueR20,
          r21: valueR21,
          r22: valueR22,
          r23: valueR23,
          r24: valueR24,
          r25: valueR25,
          r26: valueR26,
          r27: valueR26 === "2"? "" : valueR27,
        };  

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              let AH_CODE:string = res.data.aH_CODE;
              if(AH_CODE.length === 22){
                if(status === "P"){
                  setLoadingProcess(false);
  
                  setTitleModal(
                    `บันทึกแบบนับจด (สก.12) เรียบร้อยแล้ว`
                  );
                  setMsgModal(
                    `กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก หรือกดปุ่มกากบาทมุมบนขวาเพื่ออยู่หน้าเดิม สามารถกลับมาแก้ไขได้ตลอด จนกว่าจะกดปุ่ม "บันทึกผลนับจด สก.12 (นับจดเสร็จ)"`
                  );
                  handleShow();
  
                }else{
                  setLoadingCompleted(false);
                  setTitleModal(
                    "บันทึกแบบนับจด (สก.12) เรียบร้อยแล้ว"
                  );
                  if (valueR26 === "1") {
                    setAH_CODE(res.data.aH_CODE)
                    setMsgModal(
                      `ท่านต้องบันทึกแบบแจงนับ (สก.2) หรือไม่? กดที่ปุ่ม "สก.2" เพื่อบันทึกแบบแจงนับ (สก.2) ต่อไป`
                    );
                  } else {
                    setMsgModal(
                      `กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก`
                    );
                  }
            
                  handleShow();
                }
              }else{
                setLoadingProcess(false);
                setLoadingCompleted(false);

                setTitleModal(
                  `บันทึกแบบนับจด (สก.12) เรียบร้อยแล้ว`
                );
                setMsgModal(
                  `AH_CODE ไม่ถูกต้อง กรุณาเลือกจังหวัด,อำเภอ,ตำบล,หมู่บ้านเดิมอีกครั้ง เพื่อสร้าง AH_CODE ใหม่`
                );
                handleShow();
              }             
            }
          })
          .catch((err) => {
            setLoadingProcess(false);
            setLoadingCompleted(false);
            console.log("AXIOS ERROR: ", err);
          });
  
      } catch (err) {
        setLoadingProcess(false);
        setLoadingCompleted(false);
        console.error("Save outside ERROR: ", err);
      }

    }
  }


    //modal popup
    const [show, setShow] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [msgModal, setMsgModal] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    md={8}
                    className="col-sm-auto d-flex align-items-center pr-0"
                  >
                    <h5 className="mb-0 py-2 py-xl-0 text-white ">
                      ข้อมูลการทำเกษตรในเนื้อที่ถือครองนอกจังหวัด
                      ของผู้ถือครองที่นับจดได้
                    </h5>
                  </Col>
                </Row>
              </Card.Header>

              <Card.Body>
                <Row className="collapse show">
                  <Col md={12}>
                    <Row>
                      <Col md={6} className="mt-2">
                        <label>R01 : ลำดับที่</label>
                      </Col>
                      <Col md={6} className="mt-2">
                        <input
                          type="text"
                          className="form-control"
                          value={valueR01}
                          disabled={true}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mt-2">
                        <label>
                          ที่อยู่ของผู้ดูแลแทนของเนื้อที่ถือครองนอกจังหวัด
                        </label>
                      </Col>
                      <Col md={6} className="mt-2">
                        <div className="form-group">
                          <select
                            className={`form-select ${invalidOCWT}`}
                            onChange={onChangeDdlCwt}
                            value={valueOCWT}
                            disabled={
                              valueAREA_CODE === valueTemp_AREA_CODE
                                ? false
                                : true
                            }
                          >
                            <option value="">จังหวัด</option>
                            {ddlCwt &&
                              ddlCwt.map((d) => (
                                <option key={d.cwtCode} value={d.cwtCode}>
                                  {`${d.cwtCode}-${d.cwtName}`}
                                </option>
                              ))}
                          </select>
                          <div className="invalid-feedback">
                            กรุณาเลือกจังหวัด
                          </div>

                          <select
                            className={`form-select mt-1 ${invalidOAMP}`}
                            onChange={onChangeDdlAmp}
                            value={valueOAMP}
                            disabled={
                              valueAREA_CODE === valueTemp_AREA_CODE
                                ? false
                                : true
                            }
                          >
                            <option value="">อำเภอ</option>
                            {ddlAMP &&
                              ddlAMP.map((d, index) => (
                                <option key={index} value={d.ampOrder!}>
                                  {`${d.ampOrder!}-${d.ampName!}`}
                                </option>
                              ))}
                          </select>
                          <div className="invalid-feedback">
                            กรุณาเลือกอำเภอ
                          </div>

                          <select
                            className={`form-select mt-1 ${invalidOTAM}`}
                            onChange={onChangeDdlTam}
                            value={valueOTAM}
                            disabled={
                              valueAREA_CODE === valueTemp_AREA_CODE
                                ? false
                                : true
                            }
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
                            className={`form-select mt-1 ${invalidOTYPE}`}
                            onChange={onChangeDdlType}
                            value={valueOTYPE}
                            disabled={
                              valueAREA_CODE === valueTemp_AREA_CODE
                                ? false
                                : true
                            }
                          >
                            <option value="">ประเภทเทศบาล</option>
                            {ddlTYPE &&
                              ddlTYPE.map((d, index) => (
                                <option key={index} value={d.typeOrder!}>
                                  {`${d.typeOrder!}-${d.typeName!}`}
                                </option>
                              ))}
                          </select>
                          <div className="invalid-feedback">
                            กรุณาเลือกประเภทเทศบาล
                          </div>

                          <select
                            className={`form-select mt-1 ${invalidOMUN}`}
                            onChange={onChangeDdlMun}
                            value={valueOMUN}
                            disabled={
                              valueAREA_CODE === valueTemp_AREA_CODE
                                ? false
                                : true
                            }
                          >
                            <option value="">เทศบาล</option>
                            {ddlMUN &&
                              ddlMUN.map((d, index) => (
                                <option key={index} value={d.munOrder!}>
                                  {`${d.munOrder!}-${d.munName!}`}
                                </option>
                              ))}
                          </select>
                          <div className="invalid-feedback">
                            กรุณาเลือกเทศบาล
                          </div>

                          <select
                            className={`form-select mt-1 ${invalidOVIL}`}
                            onChange={onChangeDdlVil}
                            value={valueOVIL}
                            disabled={
                              valueAREA_CODE === valueTemp_AREA_CODE
                                ? false
                                : true
                            }
                          >
                            <option value="">หมู่ที่</option>
                            {ddlVIL &&
                              ddlVIL.map((d, index) => (
                                <option key={index} value={d.vilOrder!}>
                                  {`${d.vilOrder!}-${d.vilName!}`}
                                </option>
                              ))}
                          </select>
                          <div className="invalid-feedback">
                            กรุณาเลือกหมู่ที่
                          </div>

                          <input
                            type="text"
                            className={`form-control mt-1`}
                            value={valueOADD}
                            onChange={inputOADD}
                            placeholder="บ้านเลขที่"
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mt-2">
                        <label>เนื้อที่ถือครองนี้มีผู้ดูแลแทนหรือไม่ ?</label>
                      </Col>
                      <Col md={6} className="mt-2">
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className={`form-check-input ${invalidKP}`}
                                name="rdKP"
                                type="radio"
                                value={option.value}
                                id={`rdKP${index}`}
                                onChange={radioKP}
                                checked={option.value === valueKP}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdKP${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    {valueKP === "1" && (
                      <>
                        <Row className="mt-2">
                          <Col md={6}>
                            <label>คำนำหน้าชื่อ</label>
                          </Col>
                          <Col md={6}>
                            {Prefix.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className={`form-check-input ${invalidR13_A}`}
                                  name="rdR13"
                                  type="radio"
                                  value={option.value}
                                  id={`rdR13${index}`}
                                  onChange={radioR13_A}
                                  checked={option.value === valueR13_A}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rdR13${index}`}
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
                          style={{ display: isShowR13_AT ? "" : "none" }}
                        >
                          <Col md={6}>
                            <label>คำนำหน้าชื่อ อื่นๆ</label>
                          </Col>
                          <Col md={6}>
                            <input
                              type="text"
                              className="form-control"
                              onChange={inputR13_AT}
                              value={valueR13_AT}
                            />
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>ชื่อ</label>
                          </Col>
                          <Col md={6}>
                            <input
                              type="text"
                              className={`form-control ${invalidR13_B}`}
                              value={valueR13_B}
                              onChange={inputR13_B}
                            />
                            <div className="invalid-feedback">
                              กรุณาระบุชื่อ
                            </div>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>นามสกุล</label>
                          </Col>
                          <Col md={6}>
                            <input
                              type="text"
                              className={`form-control ${invalidR13_C}`}
                              value={valueR13_C}
                              onChange={inputR13_C}
                            />
                            <div className="invalid-feedback">
                              กรุณาระบุนามสกุล
                            </div>
                          </Col>
                        </Row>
                      </>
                    )}

                    <Row>
                      <Col md={6} className="mt-2">
                        <label>
                          R17 :
                          ลำดับที่ของผู้ถือครองทำการเกษตรที่นับจดได้ทั้งสิ้น
                        </label>
                      </Col>
                      <Col md={6} className="mt-2">
                        <input
                          type="text"
                          className="form-control"
                          value={valueR17}
                          disabled={true}
                        />
                      </Col>
                    </Row>

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
                            <>
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
                              </div>

                              {index === YesNo.length - 1 ? (
                                <div className="invalid-feedback">
                                  กรุณาเลือก R19 ถึง R25 และอย่างน้อยมี 1 รายการ
                                  ตอบ "มี"
                                </div>
                              ) : (
                                ""
                              )}
                            </>
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
                                <div className="form-check" key={option.value}>
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
                                    display: waitR27,
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
                      (window.location.href =
                        process.env.PUBLIC_URL + "/ownerlist")
                    }
                    type="button"
                    className="btn btn-outline-secondary mt-2 me-2"
                  >
                    หน้ารายการ
                  </button>
                </div>
                <div className="float-end">
                  <button
                    onClick={() => saveOutside("P")}
                    style={{
                      display:
                        valueFN_A === "" && valueFN_B === "" && valueFN_C === ""
                          ? ""
                          : "none",
                    }}
                    type="button"
                    className="btn btn-outline-secondary mt-2 me-2"
                  >
                    บันทึกแบบร่าง {loadingProcess && <LoadingSpinner />}
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => saveOutside("C")}
                  >
                    บันทึกผลนับจด สก.12 (นับจดเสร็จ){" "}
                    {loadingCompleted && <LoadingSpinner />}
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
              state={valueAH_CODE}
              className="btn btn-info"
              style={{
                display:
                  valueR26 === "1"
                    ? jobStatus === "C"
                      ? ""
                      : "none"
                    : "none",
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
