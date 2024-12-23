import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AMP, CWT, TAM, VIL } from "../model/Address";
import { APIService } from "../service/APIService";
import { useGlobalListingContext } from "./ListingContext";
import { DoNot, Inside, Prefix, R29_LIST, YesNo } from "./Option";
import { useGlobalUserContext } from "./UserContext";

export default function CFarming() {
  const { listing, noFarmer, page, setListing, setPage } =
    useGlobalListingContext();
  const { userInfo } = useGlobalUserContext();

  const [ddlCwt, setDllcwt] = useState<CWT[]>();
  const [ddlAMP, setDllamp] = useState<AMP[]>();
  const [ddlTam, setDlltam] = useState<TAM[]>();
  const [ddlVil, setDllVil] = useState<VIL[]>();

  const [txtR17, setTxtR17] = useState<string>("");
  const [selectedR18, setSelectedR18] = useState<string>("");
  const [selectedR19, setSelectedR19] = useState<string>("");
  const [selectedR20, setSelectedR20] = useState<string>("");
  const [selectedR21, setSelectedR21] = useState<string>("");
  const [selectedR22, setSelectedR22] = useState<string>("");
  const [selectedR23, setSelectedR23] = useState<string>("");
  const [selectedR24, setSelectedR24] = useState<string>("");
  const [selectedR25, setSelectedR25] = useState<string>("");
  const [txtR26, setTxtR26] = useState<string>("");
  const [selectedR27, setSelectedR27] = useState<string>("");
  const [selectedR28_A, setSelectedR28_A] = useState<string>("");
  const [txtR28_AT, setTxtR28_AT] = useState<string>("");
  const [isShowR28_A, setIsShowR28_A] = useState<boolean>(true);
  const [txtR28_B, setTxtR28_B] = useState<string>("");
  const [txtR28_C, setTxtR28_C] = useState<string>("");
  const [selectedR28_D, setSelectedR28_D] = useState<string>("");
  const [selectedR28_E, setSelectedR28_E] = useState<string>("");
  const [selectedR28_F, setSelectedR28_F] = useState<string>("");
  const [selectedR28_J, setSelectedR28_J] = useState<string>("");
  const [txtR28_I, setTxtR28_I] = useState<string>("");
  const [selectedR29, setSelectedR29] = useState<string>("");
  const [txtR30, setTxtR30] = useState<string>("");

  const [hideR17, setHideR17] = useState<boolean>(true);
  const [hideR25, setHideR25] = useState<boolean>(true);
  const [hideR26, setHideR26] = useState<boolean>(true);
  const [hideR27, setHideR27] = useState<boolean>(true);
  const [hideR28, setHideR28] = useState<boolean>(true);
  const [hideR30, setHideR30] = useState<boolean>(true);

  const [requiredR18R24, setRequiredR18R24] = useState<boolean>(false);
  const [selectedR18R24, setSelectedR18R24] = useState<boolean>(false);
  const [requiredR25, setRequiredR25] = useState<boolean>(false);
  const [genR26, setGenR26] = useState<boolean>(false);
  const [requiredR27, setWaringR27] = useState<boolean>(false);
  const [requiredR28, setRequiredR28] = useState<boolean>(false);
  const [genR30, setGenR30] = useState<boolean>(false);

  const [disableNext, setDisable] = useState<boolean>(false);

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
      if (listing?.r07 === "1") {
        //ถ้า R11=1 หรือ R12=1  ระบบ Gen ลำดับ R17
        if (listing?.r11 === "1" || listing?.r12 === "1") {
          if (listing!.r17 === "" || listing.r17 === "b") {
            GenR17();
            setHideR17(false);
          } else {
            setTxtR17(
              listing!.r17 === "" || listing.r17 === "b" ? "" : listing.r17!
            );
            setHideR17(false);
          }

          bindData();
        } else {
          setHideR17(true);
          no_Farmer();
          setSelectedR29("2");
        }
      } else {
        no_Farmer();
      }

      const isFarmer = checkFarmer();
      isFarmer.then((farmer: boolean) => {
        if (listing?.status === "C") {
          if (farmer) {
            setDisable(false);
          } else {
            setDisable(true);
          }
        } else {
          setDisable(false);
        }
      });
    }

    async function GenR17() {
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        const body = {
          createBy: userInfo?.userId ?? 0,
          r11: listing?.r11 ?? "",
          r12: listing?.r12 ?? "",
        };

        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api =
              process.env.REACT_APP_ENUMERATE_API + "/Listing/genRunningR17";
          }

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setTxtR17(res.data);
              }
            })
            .catch((err) => {
              console.log("AXIOS (GEN R17) ERROR: ", err);
            });
        } catch (err) {
          console.error("ERROR (GEN R17): ", err);
        }
      }
    }

    async function bindData() {
      setSelectedR18(
        listing?.r18 === "" || listing?.r18 === "b" ? "" : listing?.r18!
      );
      setSelectedR19(
        listing?.r19 === "" || listing?.r19 === "b" ? "" : listing?.r19!
      );
      setSelectedR20(
        listing?.r20 === "" || listing?.r20 === "b" ? "" : listing?.r20!
      );
      setSelectedR21(
        listing?.r21 === "" || listing?.r21 === "b" ? "" : listing?.r21!
      );
      setSelectedR22(
        listing?.r22 === "" || listing?.r22 === "b" ? "" : listing?.r22!
      );
      setSelectedR23(
        listing?.r23 === "" || listing?.r23 === "b" ? "" : listing?.r23!
      );
      setSelectedR24(
        listing?.r24 === "" || listing?.r24 === "b" ? "" : listing?.r24!
      );
      setSelectedR25(
        listing?.r25 === "" || listing?.r25 === "b" ? "" : listing?.r25!
      );
      setTxtR26(
        listing?.r26 === "" || listing?.r26 === "b" ? "" : listing?.r26!
      );
      setSelectedR27(
        listing?.r27 === "" || listing?.r27 === "b" ? "" : listing?.r27!
      );
      setSelectedR28_A(
        listing?.r28_A === "" || listing?.r28_A === "b" ? "" : listing?.r28_A!
      );
      setTxtR28_AT(
        listing?.r28_AT === "" || listing?.r28_AT === "b"
          ? ""
          : listing?.r28_AT!
      );
      setTxtR28_B(
        listing?.r28_B === "" || listing?.r28_B === "b" ? "" : listing?.r28_B!
      );
      setTxtR28_C(
        listing?.r28_C === "" || listing?.r28_C === "b" ? "" : listing?.r28_C!
      );
      setSelectedR28_D(
        listing?.r28_D === "" || listing?.r28_D === "b" ? "" : listing?.r28_D!
      );
      setTxtR28_I(
        listing?.r28_I === "" || listing?.r28_I === "b" ? "" : listing?.r28_I!
      );
      setSelectedR29(
        listing?.r29 === "" || listing?.r29 === "b" ? "" : listing?.r29!
      );
      setTxtR30(
        listing?.r30 === "" || listing?.r30 === "b" ? "" : listing?.r30!
      );

      if (listing?.r25 === "1" || listing?.r25 === "2") {
        if (listing?.r26 === "" || listing?.r26 === "b") {
          setGenR26(true);
        } else {
          //ไม่ต้อง gen ใหม่ เพราะว่าระบบ gen ไปแล้ว
          setGenR26(false);
        }
      } else {
        setGenR26(true);
      }

      if (listing?.r29 === "1") {
        if (listing?.r30 === "" || listing?.r30 === "b") {
          setGenR30(true);
        } else {
          //ไม่ต้อง gen ใหม่ เพราะว่าระบบ gen ไปแล้ว
          setGenR30(false);
        }
      } else {
        setGenR30(false);
      }

      if (listing?.r28_D === "b" || listing?.r28_D === "") {
      } else {
        bindindCWT("/Address/cwt");
        bindingAMP(listing?.r28_D!);
      }

      if (listing?.r28_E === "b" || listing?.r28_E === "") {
      } else {
        let ampCode: string = listing?.r28_D! + listing?.r28_E!;
        bindingTAM(ampCode);
        setSelectedR28_E(listing?.r28_E!);
      }

      if (listing?.r28_F === "b" || listing?.r28_F === "") {
      } else {
        let tamCode: string =
          listing?.r28_D! + listing?.r28_E! + listing?.r28_F!;
        bindingVIL(tamCode);
        setSelectedR28_F(listing?.r28_F!);
      }

      setSelectedR28_J(listing?.r28_J!);
    }

    pageLoad();
  }, [listing, userInfo?.userId]);

  const bindindCWT = async (url: string) => {
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

  const no_Farmer = async () => {
    setTxtR17("");
    setSelectedR18("");
    setSelectedR19("");
    setSelectedR20("");
    setSelectedR21("");
    setSelectedR22("");
    setSelectedR23("");
    setSelectedR24("");
    setSelectedR25("");
    setTxtR26("");
    setSelectedR27("");
    setSelectedR28_A("");
    setTxtR28_AT("");
    setTxtR28_B("");
    setTxtR28_C("");
    setSelectedR28_D("");
    setTxtR28_I("");
    setSelectedR29("");
    setTxtR30("");
  };

  //handle radio R18-R24 เพื่อ required R25
  useEffect(() => {
    //R18,R19,R20,R21 หรือ R24 อย่างน้อย 1 รายการ ตอบ 1
    if (
      selectedR18 === "1" ||
      selectedR19 === "1" ||
      selectedR20 === "1" ||
      selectedR21 === "1" ||
      selectedR24 === "1"
    ) {
      setHideR25(false);
    } else {
      setHideR25(true);
      setHideR26(true);
      setHideR27(true);
      setHideR28(true);
      setHideR30(true);

      setSelectedR25("");
      setTxtR26("");
      setSelectedR27("");
      setSelectedR28_A("");
      setTxtR28_AT("");
      setTxtR28_B("");
      setTxtR28_C("");
      setSelectedR28_D("");
      setTxtR30("");
    }

    if (selectedR25 !== "") {
      if (selectedR25 === "1" || selectedR25 === "2") {
        //R26 # blank
        setHideR26(false);

        if (selectedR25 === "1") {
          setSelectedR28_A("");
          setTxtR28_AT("");
          setTxtR28_B("");
          setTxtR28_C("");
          setSelectedR28_D("");
          setSelectedR28_E("");
          setSelectedR28_F("");
          setSelectedR28_J("");
          setTxtR28_I("");
          setHideR28(true);
        }
      } else {
        setHideR26(true);
      }

      if (selectedR25 === "2" || selectedR25 === "3") {
        //R27 # blank
        setHideR27(false);
        setHideR28(true);
      } else {
        setSelectedR27("");
        setHideR27(true);
      }

      if (hideR27) {
      } else {
        if (selectedR27 === "") {
          setHideR28(true);
        } else {
          if (selectedR27 === "1") {
            //R28_A – R28_J ต้อง = blank
            setSelectedR28_A("");
            setTxtR28_AT("");
            setTxtR28_B("");
            setTxtR28_C("");
            setSelectedR28_D("");
            setSelectedR28_E("");
            setSelectedR28_F("");
            setSelectedR28_J("");
            setTxtR28_I("");
            setHideR28(true);
          } else if (selectedR27 === "0") {
            setHideR28(false);
          }
        }
      }
    }
  }, [
    selectedR18,
    selectedR19,
    selectedR20,
    selectedR21,
    selectedR24,
    selectedR25,
    txtR26,
    selectedR27,
    txtR28_AT,
    selectedR28_A,
    txtR28_B,
    txtR28_C,
    selectedR28_D,
    selectedR28_E,
    selectedR28_F,
    selectedR28_J,
    txtR28_I,
    hideR25,
    hideR26,
    hideR27,
    hideR28,
  ]);

  //handle radio changed for assign value R29
  useEffect(() => {
    if (listing?.r11 === "1" || listing?.r12 === "1") {
      if (
        (selectedR18 === "1" ||
          selectedR19 === "1" ||
          selectedR20 === "1" ||
          selectedR21 === "1" ||
          selectedR24 === "1") &&
        (selectedR25 === "1" || selectedR25 === "2")
      ) {
        setSelectedR29("1");
        setGenR30(true);
        setHideR30(false);
      }

      if (selectedR27 === "" || selectedR27 === "b") {
        //ถ้า R27 ยังไม่มีค่า จะยังไม่ set R29
      } else {
        if (
          (selectedR18 === "0" &&
            selectedR19 === "0" &&
            selectedR20 === "0" &&
            selectedR21 === "0") ||
          selectedR27 === "1"
        ) {
          setSelectedR29("2");
          setTxtR30("");
          setHideR30(true);
        }

        if (
          (selectedR18 === "1" ||
            selectedR19 === "1" ||
            selectedR20 === "1" ||
            selectedR21 === "1" ||
            selectedR24 === "1") &&
          selectedR27 === "1"
        ) {
          setSelectedR29("3");
          setTxtR30("");
          setHideR30(true);
        }

        if (selectedR27 === "0") {
          setSelectedR29("4");
          setTxtR30("");
          setHideR30(true);
        }
      }
    }
  }, [
    selectedR18,
    selectedR19,
    selectedR20,
    selectedR21,
    selectedR25,
    selectedR27,
    listing,
    userInfo,
  ]);

  //R29 = 1 จะต้อง gen R30
  useEffect(() => {
    if (genR30 && (listing?.r30 === "" || listing?.r30 === "b")) {
      genRunNoR30();
    } else {
      setTxtR30(listing?.r30!);
    }

    async function genRunNoR30() {
      if (selectedR29 === "1") {
        const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
        if (api.authToken) {
          let auth: string = api.authToken;

          const headers = {
            Authorization: "Basic " + auth,
            "Content-Type": "application/json;charset=UTF-8",
          };

          const body = {
            createBy: userInfo?.userId ?? 0,
            r29: selectedR29,
          };

          try {
            let url_enumerate_api: string = "";
            if (process.env.REACT_APP_ENUMERATE_API) {
              url_enumerate_api =
                process.env.REACT_APP_ENUMERATE_API + "/Listing/genRunningR30";
            }

            await axios
              .post(url_enumerate_api, JSON.stringify(body), {
                headers: headers,
              })
              .then((res) => {
                if (res.status === 200) {
                  setTxtR30(res.data);
                }
              })
              .catch((err) => {
                console.log("AXIOS (GEN R30) ERROR: ", err);
              });
          } catch (err) {
            console.error("ERROR (GEN R30): ", err);
          }
        }
      } else {
        setTxtR30("");
      }
    }
  }, [listing, selectedR29, txtR30, genR30, userInfo?.userId]);

  const inputR17 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR17(event.target.value);
  };

  const radioR18 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR18(event.target.value);

    if (selectedR18R24) {
      //ไม่เป็นค่าว่าง
      if (event.target.value === "1") {
        //และ R18 เลือก รายการ = 1
        setSelectedR18R24(false);
      }
    }
  };

  const radioR19 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR19(event.target.value);

    if (selectedR18R24) {
      //ไม่เป็นค่าว่าง
      if (event.target.value === "1") {
        //และ R18 เลือก รายการ = 1
        setSelectedR18R24(false);
      }
    }
  };

  const radioR20 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR20(event.target.value);

    if (selectedR18R24) {
      //ไม่เป็นค่าว่าง
      if (event.target.value === "1") {
        //และ R18 เลือก รายการ = 1
        setSelectedR18R24(false);
      }
    }
  };

  const radioR21 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR21(event.target.value);

    if (selectedR18R24) {
      //ไม่เป็นค่าว่าง
      if (event.target.value === "1") {
        //และ R18 เลือก รายการ = 1
        setSelectedR18R24(false);
      }
    }
  };

  const radioR22 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR22(event.target.value);

    if (selectedR18R24) {
      //ไม่เป็นค่าว่าง
      if (event.target.value === "1") {
        //และ R18 เลือก รายการ = 1
        setSelectedR18R24(false);
      }
    }
  };

  const radioR23 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR23(event.target.value);

    if (selectedR18R24) {
      //ไม่เป็นค่าว่าง
      if (event.target.value === "1") {
        //และ R18 เลือก รายการ = 1
        setSelectedR18R24(false);
      }
    }
  };

  const radioR24 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR24(event.target.value);

    if (selectedR18R24) {
      //ไม่เป็นค่าว่าง
      if (event.target.value === "1") {
        //และ R18 เลือก รายการ = 1
        setSelectedR18R24(false);
      }
    }
  };

  const radioR25 = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR25(event.target.value);
    setRequiredR25(false);

    let isGenR26: boolean = false;
    if (genR26 && selectedR25 === "") {
      isGenR26 = true;
    } else if (genR26) {
      isGenR26 = true;
    }

    if (event.target.value === "1" || event.target.value === "2") {
      if (isGenR26) {
        setHideR26(false);
        const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
        if (api.authToken) {
          let auth: string = api.authToken;

          const headers = {
            Authorization: "Basic " + auth,
            "Content-Type": "application/json;charset=UTF-8",
          };

          const body = {
            createBy: userInfo?.userId ?? 0,
            r25: event.target.value,
          };

          try {
            let url_enumerate_api: string = "";
            if (process.env.REACT_APP_ENUMERATE_API) {
              url_enumerate_api =
                process.env.REACT_APP_ENUMERATE_API + "/Listing/genRunningR26";
            }

            await axios
              .post(url_enumerate_api, JSON.stringify(body), {
                headers: headers,
              })
              .then((res) => {
                if (res.status === 200) {
                  setTxtR26(res.data);
                }
              })
              .catch((err) => {
                console.log("AXIOS (GEN R26) ERROR: ", err);
              });
          } catch (err) {
            console.error("ERROR (GEN R26): ", err);
          }
        }
      } else {
        setTxtR26(listing?.r26!);
      }
    } else {
      setHideR26(true);
      setTxtR26("");
    }
  };

  const radioR27 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR27(event.target.value);

    if (event.target.value === "0") {
      setHideR28(false);
      setRequiredR28(true);
      setSelectedR29("4");
      bindindCWT("/Address/cwt");
    } else {
      setHideR28(true);
      setRequiredR28(false);
      setSelectedR29("");
    }
  };

  const radioR28_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedR28_A(event.target.value);

    if (event.target.value === "4") {
      setIsShowR28_A(false);
    } else {
      setIsShowR28_A(true);
    }
  };

  const inputR28_AT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR28_AT(event.target.value);
  };

  const inputR28_B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR28_B(event.target.value);
  };

  const inputR28_C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR28_C(event.target.value);
  };

  const ddlR28_D = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR28_D(event.target.value);
    setDlltam(undefined);
    setDllVil(undefined);

    if (event.target.value !== "") {
      bindingAMP(event.target.value);
      setSelectedR28_E("");
    } else {
      setDllamp(undefined);
    }
  };

  const ddlR28_E = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR28_E(event.target.value);

    if (event.target.value !== "") {
      let ampCode: string = selectedR28_D + event.target.value;
      bindingTAM(ampCode);
    }
  };

  const ddlR28_F = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR28_F(event.target.value);

    if (event.target.value !== "") {
      let tamCode: string =
        selectedR28_D! + selectedR28_E! + event.target.value;
      bindingVIL(tamCode);
    }
  };

  const ddlR28_J = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedR28_J(event.target.value);
  };

  const inputR28_I = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtR28_I(event.target.value);
  };

  async function valiateCheck() {
    let inValidate: boolean = false;
    let blankR18R24: boolean = false;
    let setR25: boolean = false;
    let blankR28AJ: boolean = false;

    if (txtR17 !== "") {
      if (selectedR18 === "") {
        blankR18R24 = true;
      } else {
        blankR18R24 = false;
      }

      if (selectedR19 === "") {
        blankR18R24 = true;
      } else {
        blankR18R24 = false;
      }

      if (selectedR20 === "") {
        blankR18R24 = true;
      } else {
        blankR18R24 = false;
      }

      if (selectedR21 === "") {
        blankR18R24 = true;
      } else {
        blankR18R24 = false;
      }

      if (selectedR22 === "") {
        blankR18R24 = true;
      } else {
        blankR18R24 = false;
      }

      if (selectedR23 === "") {
        blankR18R24 = true;
      } else {
        blankR18R24 = false;
      }

      if (selectedR24 === "") {
        blankR18R24 = true;
      } else {
        blankR18R24 = false;
      }

      //R18-R24 is blank
      if (blankR18R24) {
        inValidate = true;
        setRequiredR18R24(true);
      } else {
        setRequiredR18R24(false);
        inValidate = false;
      }

      //R18-R24 ไม่มีเลือกรายการ = 1
      if (blankR18R24 !== true) {
        if (
          selectedR18 === "1" ||
          selectedR19 === "1" ||
          selectedR20 === "1" ||
          selectedR21 === "1" ||
          selectedR22 === "1" ||
          selectedR23 === "1" ||
          selectedR24 === "1"
        ) {
          inValidate = false;
          setSelectedR18R24(false);
        } else {
          inValidate = true;
          setSelectedR18R24(true);
        }
      }

      //=====================
    }

    //R25 ต้อง # blank
    //ถ้า R18 หรือ R19 หรือ R20 หรือ R21 หรือ R24=1 แล้ว
    if (selectedR18R24 !== true) {
      if (
        selectedR18 === "1" ||
        selectedR19 === "1" ||
        selectedR20 === "1" ||
        selectedR21 === "1" ||
        selectedR24 === "1"
      ) {
        setR25 = true;
      } else {
        setR25 = false;
      }
    }

    if (setR25 && selectedR18R24 !== true) {
      if (selectedR25 === undefined) {
        inValidate = true;
        setRequiredR25(true);
      } else {
        if (selectedR25 === "" || selectedR25 === "b") {
          inValidate = true;
          setRequiredR25(true);
        } else {
          inValidate = false;
          setRequiredR25(false);
        }
      }
    }

    //R27 ต้อง # blank
    //ถ้า R25=2 หรือ 3

    if (requiredR25 !== true) {
      if (selectedR25 === "2" || selectedR25 === "3") {
        if (selectedR27 === "") {
          inValidate = true;
          setWaringR27(true);
        } else {
          setWaringR27(false);

          //R28_A – R28_J ต้อง # blank
          //ถ้า R27=1

          if (selectedR27 === "0" || selectedR29 === "4") {
            if (selectedR28_A === "") {
              blankR28AJ = true;
            } else {
              blankR28AJ = false;
            }

            if (txtR28_B === "") {
              blankR28AJ = true;
            } else {
              blankR28AJ = false;
            }

            if (txtR28_C === "") {
              blankR28AJ = true;
            } else {
              blankR28AJ = false;
            }

            if (selectedR28_D === "") {
              blankR28AJ = true;
            } else {
              blankR28AJ = false;
            }

            if (selectedR28_E === "") {
              blankR28AJ = true;
            } else {
              blankR28AJ = false;
            }

            if (selectedR28_F === "") {
              blankR28AJ = true;
            } else {
              blankR28AJ = false;
            }

            if (selectedR28_J === "") {
              blankR28AJ = true;
            } else {
              blankR28AJ = false;
            }
          } else {
            blankR28AJ = false;
          }

          if (blankR28AJ) {
            inValidate = true;
            setRequiredR28(true);
          } else {
            inValidate = false;
            setRequiredR28(false);
          }
        }
      }
    }

    if (inValidate) {
    } else {
      const isFarmer = checkFarmer();
      isFarmer.then((farmer: boolean) => {
        SaveListing(farmer);
      });
    }
  }

  async function SaveListing(isFarmer: boolean) {
    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing/updateFarming";
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

      let ahCode: string =
        listing!.reg +
        listing!.cwt +
        listing!.amp +
        listing!.tam +
        listing!.area +
        listing!.mun +
        listing!.tao +
        listing!.vil +
        listing!.aea +
        txtR17;

      const body = {
        listingKey: listing?.listingKey ?? 0,
        r17: txtR17 === "" ? "b" : txtR17,
        r18: selectedR18 === "" ? "b" : selectedR18,
        r19: selectedR19 === "" ? "b" : selectedR19,
        r20: selectedR20 === "" ? "b" : selectedR20,
        r21: selectedR21 === "" ? "b" : selectedR21,
        r22: selectedR22 === "" ? "b" : selectedR22,
        r23: selectedR23 === "" ? "b" : selectedR23,
        r24: selectedR24 === "" ? "b" : selectedR24,
        r25: selectedR25 === "" ? "b" : selectedR25,
        r26: txtR26 === "" ? "b" : txtR26,
        r27: selectedR27 === "" ? "b" : selectedR27,
        r28_A: selectedR28_A === "" ? "b" : selectedR28_A,
        r28_AT: txtR28_AT === "" ? "b" : txtR28_AT,
        r28_B: txtR28_B === "" ? "b" : txtR28_B,
        r28_C: txtR28_C === "" ? "b" : txtR28_C,
        r28_D: selectedR28_D === "" ? "b" : selectedR28_D,
        r28_E: selectedR28_E === "" ? "b" : selectedR28_E,
        r28_F: selectedR28_F === "" ? "b" : selectedR28_F,
        r28_J: selectedR28_J === "" ? "b" : selectedR28_J,
        r28_I: txtR28_I === "" ? "b" : txtR28_I,
        r29: selectedR29 === "" ? "b" : selectedR29,
        r30: txtR30 === "" ? "b" : txtR30,
        aH_CODE: txtR17 === "" || txtR17 === "b" ? "" : ahCode,
        status: isFarmer ? listing?.status : "C",
      };

      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data) {
              if (isFarmer) {
                getDetail();
                setPage(page + 1);
              } else {
                //ไม่ใช่ข้อมูลผู้ถือครองตามฐาน จบตอนที่ 2
                setTitleModal("บันทึกแบบคุมยอดและนับจด (สก.1) เรียบร้อยแล้ว");
                if (selectedR29 === "1" || selectedR29 === "3") {
                  setMsgModal(
                    `ท่านต้องบันทึกแบบแจงนับ (สก.2) หรือไม่? กดที่ปุ่ม "สก.2" เพื่อบันทึกแบบแจงนับ (สก.2) ต่อไป`
                  );
                } else {
                  setMsgModal(`กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก`);
                }
                handleShow();
              }
            }
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    } catch (err) {
      console.error("CheckDigit ERROR: ", err);
    }
  }

  const checkFarmer = async () => {
    let isFarmer: boolean = false;
    let checkR14: boolean = false;
    let checkR13: boolean = false;
    let checkR16: boolean = false;

    if (listing?.r14 !== "" && listing?.r14 !== 'b') {
      checkR14 = true;
    }

    if (checkR14) {
      let r14: string = listing?.r14!;
      let pid: string = listing?.pid!;

      if (r14 === pid) {
        isFarmer = true;
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
        isFarmer = true;
      } else {
        checkR16 = true;
      }
    }

    if (checkR16) {
      //ถ้า match R13_B และ R13_C กับ R03_B และ R03_C ไม่ตรง
      //ให้ match R16_A - R16_C กับ BD
      let birthDay: string = listing?.bd!;
      let bd_Year: string = birthDay.substring(0, 4);
      let bd_Month: string = birthDay.slice(-4).substring(0, 2);
      let bd_Day: string = birthDay.slice(-2);

      if (
        listing?.r16_A === bd_Day &&
        listing?.r16_B === bd_Month &&
        listing?.r16_C === bd_Year
      ) {
        isFarmer = true;
      }
    }

    return isFarmer;
  };

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
            listing!.listingKey;
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

                    <Row
                      className="mt-2"
                      style={{ display: hideR17 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>
                          R17 : ลำดับที่ของผู้ถือครองทำการเกษตรทั้งสิ้น
                        </label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            value={txtR17}
                            onChange={inputR17}
                            disabled={true}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{ display: hideR17 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R18 : ปลูกพืช</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdR18"
                                type="radio"
                                value={option.value}
                                id={`rdR18${index}`}
                                onChange={radioR18}
                                checked={option.value === selectedR18}
                                disabled={noFarmer}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR18${index}`}
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
                      style={{ display: hideR17 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R19 : เลี้ยงสัตว์</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdR19"
                                type="radio"
                                value={option.value}
                                id={`rdR19${index}`}
                                onChange={radioR19}
                                checked={option.value === selectedR19}
                                disabled={noFarmer}
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

                    <Row
                      className="mt-2"
                      style={{ display: hideR17 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R20 : เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdR20"
                                type="radio"
                                value={option.value}
                                id={`rdR20${index}`}
                                onChange={radioR20}
                                checked={option.value === selectedR20}
                                disabled={noFarmer}
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

                    <Row
                      className="mt-2"
                      style={{ display: hideR17 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R21 : นาเกลือสมุทร</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdR21"
                                type="radio"
                                value={option.value}
                                id={`rdR21${index}`}
                                onChange={radioR21}
                                checked={option.value === selectedR21}
                                disabled={noFarmer}
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

                    <Row
                      className="mt-2"
                      style={{ display: hideR17 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R22 : ประมงน้ำจืด</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdR22"
                                type="radio"
                                value={option.value}
                                id={`rdR22${index}`}
                                onChange={radioR22}
                                checked={option.value === selectedR22}
                                disabled={noFarmer}
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

                    <Row
                      className="mt-2"
                      style={{ display: hideR17 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R23 : ประมงทะเล</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdR23"
                                type="radio"
                                value={option.value}
                                id={`rdR23${index}`}
                                onChange={radioR23}
                                checked={option.value === selectedR23}
                                disabled={noFarmer}
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

                    <Row
                      className="mt-2"
                      style={{ display: hideR17 ? "none" : "" }}
                    >
                      <Col md={6}>
                        <label>R24 : เพาะเลี้ยงชายฝั่ง</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {YesNo.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdR24"
                                type="radio"
                                value={option.value}
                                id={`rdR24${index}`}
                                onChange={radioR24}
                                checked={option.value === selectedR24}
                                disabled={noFarmer}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR24${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}

                          <label
                            className="ms-1"
                            style={{
                              display: requiredR18R24 === true ? "" : "none",
                              color: "red",
                              fontSize: "smaller",
                            }}
                          >
                            ต้องเลือก R18 ถึง R24
                          </label>

                          <label
                            className="ms-1"
                            style={{
                              display: selectedR18R24 === true ? "" : "none",
                              color: "red",
                              fontSize: "smaller",
                            }}
                          >
                            ต้องเลือก "มี" อย่างน้อย 1 รายการ R18 ถึง R24
                          </label>
                        </div>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR25 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R25 : ท่านมีเนื้อที่ถือครองทำการเกษตรอยู่<u>ในเขต</u>
                          จังหวัดนี้หรือไม่
                        </label>
                        <label
                          className="ms-1"
                          style={{
                            display: requiredR25 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องเลือก R25
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {Inside.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR25"
                                type="radio"
                                value={option.value}
                                id={`rdR25${index}`}
                                onChange={radioR25}
                                checked={option.value === selectedR25}
                                disabled={noFarmer}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR25${index}`}
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
                        display: hideR17 ? "none" : hideR26 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R26 :
                          ลำดับที่ของผู้ถือครองทำการเกษตรที่นับจดได้ของเขตปฏิบัตินี้
                        </label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            value={txtR26}
                            disabled={true}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR27 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R27 :
                          ท่านสามารถตอบข้อมูลรายละเอียดการทำการเกษตรบนเนื้อที่ที่อยู่
                          <u>นอกเขต</u> จังหวัดนี้ได้หรือไม่
                          <label
                            className="ms-1"
                            style={{
                              display: requiredR27 === true ? "" : "none",
                              color: "red",
                              fontSize: "smaller",
                            }}
                          >
                            ต้องเลือก R27
                          </label>
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {DoNot.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR27"
                                type="radio"
                                value={option.value}
                                id={`rdR27${index}`}
                                onChange={radioR27}
                                checked={option.value === selectedR27}
                                disabled={
                                  noFarmer === false ? hideR27 : noFarmer
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR27${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2 question-title"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={12}>
                        <label>
                          บันทึกที่อยู่ของผู้ดูแลแทนของเนื้อที่ถือครองนอกจังหวัด
                        </label>
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_A : คำนำหน้าชื่อ</label>
                      </Col>
                      <Col md={6}>
                        {listing &&
                          Prefix.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR28_A"
                                type="radio"
                                value={option.value}
                                id={`rdR28_A${index}`}
                                onChange={radioR28_A}
                                checked={option.value === selectedR28_A}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR28_A${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_AT : คำนำหน้าชื่อ อื่นๆ</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            onChange={inputR28_AT}
                            disabled={isShowR28_A}
                            value={txtR28_AT}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_B : ชื่อ</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            value={txtR28_B}
                            onChange={inputR28_B}
                            disabled={noFarmer === false ? hideR28 : noFarmer}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_C : นามสกุล</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            value={txtR28_C}
                            onChange={inputR28_C}
                            disabled={noFarmer === false ? hideR28 : noFarmer}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_D : จังหวัด</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <select
                            className="form-select"
                            value={selectedR28_D}
                            onChange={ddlR28_D}
                            disabled={noFarmer === false ? hideR28 : noFarmer}
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
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_E : อำเภอ</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <select
                            className="form-select"
                            value={selectedR28_E}
                            onChange={ddlR28_E}
                            disabled={noFarmer === false ? hideR28 : noFarmer}
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
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_F : ตำบล</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <select
                            className="form-select"
                            value={selectedR28_F}
                            onChange={ddlR28_F}
                            disabled={noFarmer === false ? hideR28 : noFarmer}
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
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_J : หมู่ที่</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <select
                            className="form-select"
                            value={selectedR28_J}
                            onChange={ddlR28_J}
                            disabled={noFarmer === false ? hideR28 : noFarmer}
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
                      </Col>
                    </Row>

                    <Row
                      className="mt-2"
                      style={{
                        display: hideR17 ? "none" : hideR28 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>R28_I : บ้านเลขที่</label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={txtR28_I}
                            onChange={inputR28_I}
                          />
                        )}

                        <label
                          className="ms-1"
                          style={{
                            display: requiredR28 === true ? "" : "none",
                            color: "red",
                            fontSize: "smaller",
                          }}
                        >
                          ต้องระบุข้อมูลลงใน R28_A ถึง R28_I (ยกเว้น R28_AT)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={6}>
                        <label>R29 : สถานะการแจงนับ</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {R29_LIST.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rdR29"
                                type="radio"
                                value={option.value}
                                id={`rdR29${index}`}
                                checked={option.value === selectedR29}
                                disabled={true}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR29${index}`}
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
                        display: hideR17 ? "none" : hideR30 ? "none" : "",
                      }}
                    >
                      <Col md={6}>
                        <label>
                          R30 : ลำดับที่ของผู้ถือครองทำการเกษตร (ที่ต้องแจงนับ)
                          ของเขตปฏิบัติงานนี้
                        </label>
                      </Col>
                      <Col md={6}>
                        {listing && (
                          <input
                            type="text"
                            className="form-control"
                            value={txtR30}
                            disabled={true}
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
                    disabled={disableNext}
                  >
                    ถัดไป
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
                  selectedR29 === "1" || selectedR29 === "3" ? "" : "none",
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
