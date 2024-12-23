import { faArrowsRotate, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { Day, Month, YearBirthSK1 } from "./DayMonthYear";
import { useGlobalListingContext } from "./Listing2Context";
import Operation from "./Operation";
import { Gender, Prefix, TypeMember, TypeResident, YesNo } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import LoadingSpinner from "./LoadingSpinner";

export default function CAgricultural2() {
  const { listing, page, setListing, setPage } = useGlobalListingContext();
  const { userInfo } = useGlobalUserContext();

  const [validate, setValidate] = useState<string[]>([]);

  const [valueR02, setValueR02] = useState<string>("");
  const [valueR03_A, setValueR03_A] = useState<string>("");
  const [valueR03_B, setValueR03_B] = useState<string>("");
  const [valueR03_C, setValueR03_C] = useState<string>("");
  const [invalidR02, setInvalidR02] = useState<string>("");

  const inputR02 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR02(event.target.value);
    setInvalidR02("");
  };

  const inputR03_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR03_A(event.target.value);
  };

  const inputR03_B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR03_B(event.target.value);
  };

  const inputR03_C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR03_C(event.target.value);
  };

  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  async function getGeolocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
        },
        (error) => {
          //handle กรณีไม่เปิด Location ขึ้น pop-up
          let validate: string[] = [];
          validate.push(
            "ไม่สามารถเข้าถึงตำแหน่งของคุณได้ กรุณาเปิดตำแหน่งที่ตั้งเพื่อระบุค่าพิกัดและกดปุ่ม `ตำแหน่ง`"
          );
          setValidate(validate);
          setTitleModal("แจ้งเตือน");
          setMsgModal("");
          handleShow();
          contentShow();
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      console.warn("geolocation not available");
    }
  }

  const [valueR07, setValueR07] = useState<string>("");
  const [invalidR07, setInvalidR07] = useState<string>("");
  const radioR07 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR07(event.target.value);
    setInvalidR07("");
    if (event.target.value === "1") {
      setValueR08("1");
    } else {
      no_Farmer();
    }

    genR09(event.target.value);
  };

  function no_Farmer() {
    setValueR08("");
    setValueR09("");
    setValueR10("");
    setValueR11("");
    setValueR12("");
    setValueR12_sub("");
    setValueR13_A("");
    setValueR13_AT("");
    setValueR13_B("");
    setValueR13_C("");
    setValueR14("");
    setValueR15("");
    setValueR16_A("");
    setValueR16_B("");
    setValueR16_C("");
    setValueR17("");

    setHideR11(true);
    setHideR12(true);
  }

  const [valueR08, setValueR08] = useState<string>("");
  const [valueR08_sub, setValueR08_sub] = useState<string>("");
  const [valueR09, setValueR09] = useState<string>("");
  const [valueR10, setValueR10] = useState<string>("");
  const [valueR11, setValueR11] = useState<string>("");
  const [valueR12, setValueR12] = useState<string>("");
  const [valueR12_sub, setValueR12_sub] = useState<string>("");

  const [holder, setHolder] = useState<boolean>(true); //if R11 = 1 or R12 >= 1

  const [hideR11, setHideR11] = useState<boolean>(true);
  const [hideR12, setHideR12] = useState<boolean>(true);

  const [invalidR08, setInvalidR08] = useState<string>("");
  const [invalidR09, setInvalidR09] = useState<string>("");
  const [textInvalidR08, setTextInvalidR08] = useState<string>("");
  const [invalidR10, setInvalidR10] = useState<string>("");
  const [invalidR11, setInvalidR11] = useState<string>("");
  const [invalidR12, setInvalidR12] = useState<string>("");
  const [textInvalidR12, setTextInvalidR12] = useState<string>("");

  const inputR08 = (event: React.ChangeEvent<HTMLInputElement>) => {
    let re = /^\d+$/;

    if (!re.test(event.target.value)) {
      setValueR08("");
    }else{
      setValueR08(event.target.value);
      setInvalidR08("");
    }
  };

  const inputR09 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR09(event.target.value);
  };

  const radioR10 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR10(event.target.value);
    setValueR11("");
    setInvalidR10("");
    setHideR12(true);

    if (event.target.value === "1") {
      setHideR11(false);
    } else {
      setHolder(false);
      setHideR11(true);
    }
  };

  const radioR11 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR11(event.target.value);
    setInvalidR11("");
    if (event.target.value === "1") {
      setHolder(true);
      setHideR12(false);
      setValueR12("0");

    } else {
      setHolder(false);
      setHideR12(true);
      setValueR12("");
    }

    genR17(event.target.value);
  };

  const inputR12 = (event: React.ChangeEvent<HTMLInputElement>) => {
    let re = /^\d+$/;

    console.log(!re.test(event.target.value));

    if (!re.test(event.target.value)) {
      setValueR12("");
    }else{
      setValueR12(event.target.value);
      setInvalidR12("");
    }
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

    if (event.target.value === "1") {
      setValueR15("1");
    }else if (event.target.value === "4") {
      setValueR15("");
    }else{
      setValueR15("2");
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

  const [valueR14, setValueR14] = useState<string>("");
  const [checkDigit, setCheckDigit] = useState<boolean>(true);
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [invalidR14, setInvalidR14] = useState<string>("");

  const inputR14 = (event: React.ChangeEvent<HTMLInputElement>) => {
    let re = /^\d+$/;
    let idCard: string = event.target.value;

    if(idCard.length === 0)
    {
      setValueR14("");
      setCheckDigit(true);
      setDisableBtn(false);
    }else{
      if (!re.test(event.target.value)) {
        setValueR14("");
      } else {   
        setValueR14(event.target.value);
        setInvalidR14("");
  
        if (idCard.length === 13) {
          setValueR14(idCard);
          checkDigitID(idCard);
        }
      }
    }
    
  };

  async function checkDigitID(idCard: string) {
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
      setDisableBtn(true);
    }
  }

  const [valueR15, setValueR15] = useState<string>("");
  const [valueR16_A, setValueR16_A] = useState<string>("");
  const [valueR16_B, setValueR16_B] = useState<string>("");
  const [valueR16_C, setValueR16_C] = useState<string>("");
  const [valueR17, setValueR17] = useState<string>("");
  const [valueStatus, setValueStatus] = useState<string>("");

  const [invalidR15, setInvalidR15] = useState<string>("");
  const [invalidR16_A, setInvalidR16_A] = useState<string>("");
  const [invalidR16_B, setInvalidR16_B] = useState<string>("");
  const [invalidR16_C, setInvalidR16_C] = useState<string>("");
   const [invalidR17, setInvalidR17] = useState<string>("");

  const radioR15 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR15(event.target.value);
    setInvalidR15("");
  };

  const selectR16_A = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueR16_A(event.target.value);
    setInvalidR16_A("");
  };

  const selectR16_B = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueR16_B(event.target.value);
    setInvalidR16_B("");
  };

  const selectR16_C = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueR16_C(event.target.value);
      setInvalidR16_C("");
  };

  useEffect(() => {
    console.log("load section1");
    
    async function pageLoad() {
      setValueR02(listing?.R02);
      setValueR03_A(listing?.R03_A);
      setValueR03_B(listing?.R03_B);
      setValueR03_C(listing?.R03_C);

      if (listing?.lat === "" && listing?.long === "") {
        getGeolocation();
      } else {
        setLatitude(listing?.lat);
        setLongitude(listing?.long);
      }

      setValueR07(listing?.R07);
      setValueR08(listing?.R08);
      setValueR08_sub(listing.R08_sub);
      setValueR09(listing?.R09);
      setValueR10(listing?.R10);
      setValueR11(listing?.R11);
      setValueR12(listing?.R12);
      setValueR12_sub(listing?.R12_sub);

      setValueR13_A(listing?.R13_A);
      setValueR13_AT(listing?.R13_AT);
      setValueR13_B(listing?.R13_B);
      setValueR13_C(listing?.R13_C);
      setIsShowR13_AT(listing?.R13_A === "4" ? true : false);

      setValueR14(listing?.R14);
      setValueR15(listing?.R15);
      setValueR16_A(listing?.R16_A);
      setValueR16_B(listing?.R16_B);
      setValueR16_C(listing?.R16_C);
      setValueR17(listing?.R17);
      setValueStatus(listing?.Status);

      if (listing.FromE === "0") {
        setValueR07("1");
        setValueR10("1");
        setHideR11(true);
      }
    }

    async function consistencyCheck() {
      if (listing?.R10 === "1") {
        setHideR11(false);
        setHideR12(false);
      } else {
        setHideR11(true);
        setHideR12(true);
      }

      if (listing?.R11 === "1") {
        setHideR12(false);
      } else {
        setHideR12(true);
      }

      if (listing?.R11 === "1" || Number(listing?.R12) > 0) {
        setHolder(true);
      } else {
        setHolder(false);
      }
    }

    pageLoad();
    consistencyCheck();
  }, []);

  useEffect(() => {

    if(listing.FromE === "0" && listing?.R09 === ""){
      if(valueR09 === ""){
        genR09(valueR07);
      }
    }

    if(listing.FromE === "1" && listing?.R07 === "1" && listing?.R09 === ""){
      if(valueR09 === ""){
        genR09(valueR07);
      }
    }

    if(listing.FromE === "1" && listing?.R11 === "1" && listing?.R17 === ""){
      genR17(valueR11);
    }
  }, [listing, valueR07, valueR11, valueR12, holder]);

  async function genR09(r07:string) {
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
            process.env.REACT_APP_ENUMERATE_API + `/Listing2/updateR09`;
        }

        const body = {
          TempKey: listing.TempKey,
          AREA_CODE: listing.AREA_CODE,
          R07: r07,        
        }

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setValueR09(res.data.r09);
            }
          })
          .catch((err) => {
            console.log("AXIOS (GEN R09) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (GEN R09): ", err);
      }
    }
  }

  const [waitR09, setWaitR09] = useState<string>("");
  async function refreshR09() {
    setWaitR09("none");
    if (valueR07 === "1") {
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
              process.env.REACT_APP_ENUMERATE_API + `/Listing2/updateR09`;
          }

          const body = {
            TempKey: listing.TempKey,
            AREA_CODE: listing.AREA_CODE,
            R07: valueR07,
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setInvalidR09("");
                setWaitR09("none");
                setValueR09(res.data.r09);
              }
            })
            .catch((err) => {
              setWaitR09("");
              console.log("AXIOS (REFRESH R09) ERROR: ", err);
            });
        } catch (err) {
          setWaitR09("");
          console.error("ERROR (REFRESH R09): ", err);
        }
      }
    }
  }

  async function genR17(r11:string) {
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
            process.env.REACT_APP_ENUMERATE_API + `/Listing2/updateR17`;
        }

        const body = {
          TempKey: listing.TempKey,
          AREA_CODE: listing.AREA_CODE,
          R11: r11,
        };

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setValueR17(res.data.r17);
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

  const [waitR17, setWaitR17] = useState<string>("");
  async function refreshR17() {
    setWaitR17("none");
    if (valueR11 === "1") {
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
              process.env.REACT_APP_ENUMERATE_API + `/Listing2/updateR17`;
          }

          const body = {
            TempKey: listing.TempKey,
            AREA_CODE: listing.AREA_CODE,
            R11: valueR11,
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setInvalidR17("");
                setWaitR17("none");
                setValueR17(res.data.r17);
              }
            })
            .catch((err) => {
              setWaitR17("");
              console.log("AXIOS (REFRESH R17) ERROR: ", err);
            });
        } catch (err) {
          setWaitR17("");
          console.error("ERROR (REFRESH R17): ", err);
        }
      }
    }
  }

  const [loading, setLoading] = useState(false);
  async function save() {
    setLoading(true);
    let popup: string[] = [];

    if (latitude === "" && longitude === "") {
      popup.push(
        "ไม่สามารถเข้าถึงตำแหน่งของคุณได้ กรุณาเปิดตำแหน่งที่ตั้งเพื่อระบุค่าพิกัดและกดปุ่ม `ตำแหน่ง`"
      );
      setValidate(popup);
      setTitleModal("แจ้งเตือน");
      setMsgModal("");
      handleShow();
      contentShow();
    } else {
      //validate
      let isValid: boolean = true;

      if (valueR02 === "" && listing.FromE === "0") {
        setInvalidR02("is-invalid");
        isValid = false;
      }

      if (valueR07 === "") {
        setInvalidR07("is-invalid");
        isValid = false;
      }

      if (valueR07 === "1" && valueR09 === "") {
        setInvalidR09("is-invalid");
        isValid = false;
      }

      if (valueR07 === "1" && Number(valueR08) === 0) {
        setInvalidR08("is-invalid");
        isValid = false;
      }

      if (valueR07 === "1" && valueR10 === "") {
        setInvalidR10("is-invalid");
        isValid = false;
      }

      if (listing.FromE === "0" && (valueR07 !== "1" || valueR10 === "0")) {
        let popup: string[] = [];
        popup.push(
          "ผู้ถือครองรายใหม่ค่า R07 ต้องเลือก `มีผู้อยู่อาศัย` และ R10 ต้องเลือก `มี`"
        );
        setValidate(popup);
        setTitleModal("แจ้งเตือน");
        setMsgModal("");
        handleShow();
        contentClose();

        isValid = false;
      }

      if (valueR10 === "1" && valueR11 === "") {
        setInvalidR11("is-invalid");
        isValid = false;
      }

      if (valueR07 === "1") {
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

      if (valueR07 === "1") {
        if (valueR15 === "") {
          setInvalidR15("is-invalid");
          isValid = false;
        }
        if (valueR16_A === "") {
          setInvalidR16_A("is-invalid");
          isValid = false;
        }
        if (valueR16_B === "") {
          setInvalidR16_B("is-invalid");
          isValid = false;
        }
        if (valueR16_C === "") {
          setInvalidR16_C("is-invalid");
          isValid = false;
        }
      }

      if (valueR11 === "1" && valueR17 === "") {
        setInvalidR17("is-invalid");
        isValid = false;
      }

      //save
      if (isValid) {
        updateSection1();
      }else{
        setLoading(false);
      }
    }
  }

  function nextPage() {

    if (valueR07 === "1") {
      //R10 = 0 && R11 = 0 ข้ามไป R36 แล้วซ่อนตัวเลือกที่ไม่เกี่ยวข้อง
      if (listing.FromE === "1" && (valueR10 === "0" || valueR11 === "0")) {
        setPage(3);
      } else if (listing.FromE === "0" && (valueR10 === "0" || valueR11 === "0")) {
        setPage(4);
      }else{
        setPage(page + 1);
      }
    } else {
      setPage(3);
    }
  }

  async function updateSection1() {
    try {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + "/Listing2/updateSection1";
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
        areA_CODE: listing.AREA_CODE,
        tempKey: listing.TempKey,
        sT_A: listing?.ST_A === "" ? day : listing?.ST_A,
        sT_B: listing?.ST_B === "" ? month : listing?.ST_B,
        sT_C: listing?.ST_C === "" ? year : listing?.ST_C,
        r01: listing?.R01,
        r02: valueR02,
        r03_A: valueR03_A,
        r03_B: valueR03_B,
        r03_C: valueR03_C,
        latitude: latitude,
        longitude: longitude,
        r07: valueR07,
        r08: valueR07 === "1" ? valueR08 : "",
        r08_sub: valueR08_sub,
        r09: valueR07 === "1" ? valueR09 : "",
        r10: valueR10,
        r11: valueR10 === "0" ? "" : valueR11,
        r12: valueR10 === "0" ? "" : valueR12,
        r12_sub: valueR12_sub,
        r13_A: valueR13_A,
        r13_AT: valueR13_AT,
        r13_B: valueR13_B.trim(),
        r13_C: valueR13_C.trim(),
        r14: valueR11 === "0" ? "" : valueR14,
        r15: valueR15,
        r16_A: valueR16_A,
        r16_B: valueR16_B,
        r16_C: valueR16_C,
        r17: holder? valueR17 : "",
        fromE: listing.FromE,
        status: valueStatus === ""? "P" :valueStatus,
        modifyBy: userInfo?.userId,
      };

      //console.log(JSON.stringify(body));

      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            //บ้านใหม่ ซ้ำ
            if (res.data.add_duplicate) {
              let popup: string[] = [];
              popup.push("บ้านเลขที่ของของผู้ถือครองรายใหม่ซ้ำกับข้อมูลในฐาน");
              setValidate(popup);
              setTitleModal("แจ้งเตือน");
              setMsgModal("");
              handleShow();
              contentClose();
              setLoading(false);
            } else {
              //ดึงข้อมูลหลังจากบันทึกอีกคร้ง เพราะว่าต้องนำไปใช้ต่อใน component อื่น
              setLoading(false);
              getDetail();
            }
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

              if (valueR07 === "1") {
                //R10 = 0 && R11 = 0 ข้ามไป R36 แล้วซ่อนตัวเลือกที่ไม่เกี่ยวข้อง
                if (listing.FromE === "1" && (valueR10 === "0" || valueR11 === "0")) {
                  setPage(3);
                } else if (listing.FromE === "0" && (valueR10 === "0" || valueR11 === "0")) {
                  setPage(4);
                }else{
                  setPage(page + 1);
                }

              } else {
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

  //modal popup
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [msgModal, setMsgModal] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const contentClose = () => setContent(false);
  const contentShow = () => setContent(true);

  return (
    <div>
      {listing && userInfo?.roleId !== 3 && <Operation></Operation>}

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
                          ก. ที่อยู่อาศัยของผู้ถือครองทำการเกษตรตามฐานข้อมูล
                          และรายใหม่
                        </label>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <table className="table table-sm">
                          <tbody>
                            {/* <tr className="border-top ">
                              <td className="bg-100">
                                R01 : ลำดับที่ของที่อยู่อาศัย{" "}
                              </td>
                              <td>{listing && listing.R01}</td>
                            </tr> */}
                            <tr className="border-top ">
                              <td className="bg-100">R02 : บ้านเลขที่ </td>
                              <td>
                                {listing && (
                                  <label
                                    style={{
                                      display:
                                        listing?.FromE === "1" ||
                                        valueR08_sub !== ""
                                          ? ""
                                          : "none",
                                    }}
                                  >
                                    {listing.R02}
                                  </label>
                                )}

                                <input
                                  type="text"
                                  className={`form-control ${invalidR02}`}
                                  style={{
                                    display:
                                      listing?.FromE === "0" &&
                                      valueR08_sub === ""
                                        ? ""
                                        : "none",
                                  }}
                                  onChange={inputR02}
                                  value={valueR02}
                                  maxLength={10}
                                />
                                <div className="invalid-feedback">
                                  กรุณาระบุบ้านเลขที่
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">R03 : ถนน/ตรอก/ซอย </td>
                              <td>
                                {listing && (
                                  <label
                                    style={{
                                      display:
                                        listing?.FromE === "1" ||
                                        valueR08_sub !== ""
                                          ? ""
                                          : "none",
                                    }}
                                  >
                                    {`${listing.R03_A} ${listing.R03_B} ${listing.R03_C}`}
                                  </label>
                                )}

                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="ถนน"
                                  style={{
                                    display:
                                      listing?.FromE === "0" &&
                                      valueR08_sub === ""
                                        ? ""
                                        : "none",
                                  }}
                                  onChange={inputR03_A}
                                  value={valueR03_A}
                                />
                                <input
                                  type="text"
                                  className="form-control mt-1"
                                  placeholder="ตรอก"
                                  style={{
                                    display:
                                      listing?.FromE === "0" &&
                                      valueR08_sub === ""
                                        ? ""
                                        : "none",
                                  }}
                                  onChange={inputR03_B}
                                  value={valueR03_B}
                                />
                                <input
                                  type="text"
                                  className="form-control mt-1"
                                  placeholder="ซอย"
                                  style={{
                                    display:
                                      listing?.FromE === "0" &&
                                      valueR08_sub === ""
                                        ? ""
                                        : "none",
                                  }}
                                  onChange={inputR03_C}
                                  value={valueR03_C}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>

                      <Col md={6}>
                        <table className="table table-sm">
                          <tbody>
                            <tr className="border-top ">
                              <td className="bg-100">lat : latitude </td>
                              <td>{latitude}</td>
                            </tr>
                            <tr>
                              <td className="bg-100">long : longitude </td>
                              <td>{longitude}</td>
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
                          ข. การติดตามผู้ถือครองทำการเกษตรตามฐานข้อมูล
                          และรายใหม่ (สอบถาม)
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
                                className={`form-check-input ${invalidR07}`}
                                name="rdR07"
                                type="radio"
                                value={option.value}
                                id={`rdR07${index}`}
                                onChange={radioR07}
                                checked={option.value === valueR07}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdR07${index}`}
                              >
                                {option.text}
                              </label>
                              {index === TypeResident.length - 1 ? (
                                <div className="invalid-feedback">
                                  กรุณาเลือก R07
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    {valueR07 === "1" && (
                      <>
                        <Row className="mt-2">
                          <Col md={6}>
                            <label>R08 : จำนวนครัวเรือนที่อาศัยในบ้านนี้</label>
                          </Col>
                          <Col md={6}>
                            {listing && (
                              <>
                                <input
                                  type="text"
                                  className={`form-control ${invalidR08}`}
                                  value={valueR08}
                                  onChange={inputR08}
                                  placeholder="ระบุเป็นตัวเลข"
                                  min={1}
                                  pattern="\d*"
                                  maxLength={1}
                                  disabled={listing.R08_sub === ""? false : true}
                                />
                                <div className="invalid-feedback">
                                  {textInvalidR08}
                                </div>
                              </>
                            )}
                          </Col>
                        </Row>

                        {valueR08_sub !== "" && (
                          <Row className="mt-2">
                            <Col md={6}>
                              <label>
                                R08_sub : ลำดับครัวเรือนที่อาศัยในบ้านนี้
                              </label>
                            </Col>
                            <Col md={6}>
                              {listing && (
                                <input
                                  type="text"
                                  className="form-control"
                                  value={valueR08_sub}
                                  disabled={true}
                                />
                              )}
                            </Col>
                          </Row>
                        )}

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>
                              R09 : ลำดับที่ของครัวเรือน/บริษัท/ฟาร์ม/สถาบัน/ฯลฯ
                            </label>
                          </Col>
                          <Col md={6}>
                            {listing && (
                              <>
                                <input
                                  type="text"
                                  className={`form-control ${invalidR09}`}
                                  value={valueR09}
                                  onChange={inputR09}
                                  disabled={true}
                                />
                                <div className="invalid-feedback">
                                  กรุณาสร้างเลขที่ลำดับ R09
                                  <a style={{ cursor: "pointer" }}>
                                    <span
                                      className="ms-2"
                                      style={{
                                        color: "#000",
                                        display: waitR09,
                                      }}
                                      onClick={() => refreshR09()}
                                    >
                                      <FontAwesomeIcon
                                        icon={faArrowsRotate}
                                        className="fa-xl"
                                      />
                                    </span>
                                  </a>
                                </div>
                              </>
                            )}
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={6}>
                            <label>
                              R10 : มีสมาชิกอย่างน้อย 1 คน ทำการเกษตรหรือไม่{" "}
                            </label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {YesNo.map((option, index) => (
                                <div className="form-check" key={option.value}>
                                  <input
                                    className={`form-check-input ${invalidR10}`}
                                    name="rdR10"
                                    type="radio"
                                    value={option.value}
                                    id={`rdR10${index}`}
                                    onChange={radioR10}
                                    checked={option.value === valueR10}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`rdR10${index}`}
                                  >
                                    {option.text}
                                  </label>
                                  {index === YesNo.length - 1 ? (
                                    <div className="invalid-feedback">
                                      กรุณาเลือก R10
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>

                        {valueR10 === "1" && (
                          <Row className="mt-2">
                            <Col md={6}>
                              <label>
                                R11 : มีสมาชิกอย่างน้อย 1 คน
                                ทำการเกษตรของตนเองหรือไม่{" "}
                              </label>
                            </Col>
                            <Col md={6}>
                              <div className="form-group">
                                {TypeMember.map((option, index) => (
                                  <div
                                    className="form-check"
                                    key={option.value}
                                  >
                                    <input
                                      className={`form-check-input ${invalidR11}`}
                                      name="rdR11"
                                      type="radio"
                                      value={option.value}
                                      id={`rdR11${index}`}
                                      onChange={radioR11}
                                      checked={option.value === valueR11}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`rdR11${index}`}
                                    >
                                      {option.text}
                                    </label>
                                    {index === TypeMember.length - 1 ? (
                                      <div className="invalid-feedback">
                                        กรุณาเลือก R11
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ))}
                              </div>
                            </Col>
                          </Row>
                        )}

                        <Row
                          className="mt-2"
                          style={{
                            display:
                              valueR07 === "1" && hideR12
                                ? "none"
                                : valueR07 === "1"
                                ? ""
                                : "none",
                          }}
                        >
                          <Col md={6}>
                            <label>
                              R12 : มีสมาชิกอย่างน้อย 1 คน
                              ทำการเกษตรของตนเองแยกต่างหาก
                              หรือเป็นผู้ดูแลการทำการเกษตรแทน
                              ผู้ถือครองที่อาศัยอยู่ที่อื่นหรือไม่{" "}
                            </label>
                          </Col>
                          <Col md={6}>
                            <div className="form-group">
                              {listing && (
                                <>
                                  <input
                                    type="text"
                                    className={`form-control ${invalidR12}`}
                                    value={valueR12}
                                    onChange={inputR12}
                                    placeholder="กรณีไม่มีระบุ 0, ระบุเป็นตัวเลขเท่านั้น"
                                    min={0}
                                    pattern="\d*"
                                    maxLength={1}
                                    disabled={listing.R12_sub === ""? false : true}
                                  />
                                  <div className="invalid-feedback">
                                    {textInvalidR12}
                                  </div>
                                </>
                              )}
                            </div>
                          </Col>
                        </Row>

                        {valueR12_sub !== "" && (
                          <Row className="mt-2">
                            <Col md={6}>
                              <label>
                                R12_sub :
                                ลำดับสมาชิกที่ทำการเกษตรของตนเองแยกต่างหาก
                              </label>
                            </Col>
                            <Col md={6}>
                              {listing && (
                                <input
                                  type="text"
                                  className="form-control"
                                  value={valueR12_sub}
                                  disabled={true}
                                />
                              )}
                            </Col>
                          </Row>
                        )}

                        {(valueR10 === "0" ||
                          valueR11 !== "" ||
                          Number(valueR12) > 0) && (
                          <>
                            <Row
                              className="mt-2 question-title"
                              style={{
                                display: valueR07 === "1" ? "" : "none",
                              }}
                            >
                              <Col md={12}>
                                <div className="form-group">
                                  <label>
                                    {holder
                                      ? "บันทึกข้อมูลผู้ถือครองทำการเกษตร"
                                      : "บันทึกข้อมูลหัวหน้าครัวเรือน"}
                                  </label>
                                </div>
                              </Col>
                            </Row>

                            <Row className="mt-2">
                              <Col md={6}>
                                <label>R13_A : คำนำหน้าชื่อ</label>
                              </Col>
                              <Col md={6}>
                                {listing &&
                                  Prefix.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
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
                                <label>R13_AT : คำนำหน้าชื่อ อื่นๆ</label>
                              </Col>
                              <Col md={6}>
                                {listing && (
                                  <input
                                    type="text"
                                    className="form-control"
                                    onChange={inputR13_AT}
                                    value={valueR13_AT}
                                  />
                                )}
                              </Col>
                            </Row>

                            <Row className="mt-2">
                              <Col md={6}>
                                <label>R13_B : ชื่อ</label>
                              </Col>
                              <Col md={6}>
                                {listing && (
                                  <input
                                    type="text"
                                    className={`form-control ${invalidR13_B}`}
                                    value={valueR13_B}
                                    onChange={inputR13_B}
                                    maxLength={50}
                                  />
                                )}
                                <div className="invalid-feedback">
                                  กรุณาระบุชื่อ
                                </div>
                              </Col>
                            </Row>

                            <Row className="mt-2">
                              <Col md={6}>
                                <label>R13_C : นามสกุล</label>
                              </Col>
                              <Col md={6}>
                                {listing && (
                                  <input
                                    type="text"
                                    className={`form-control ${invalidR13_C}`}
                                    value={valueR13_C}
                                    onChange={inputR13_C}
                                    maxLength={50}
                                  />
                                )}
                                <div className="invalid-feedback">
                                  กรุณาระบุนามสกุล
                                </div>
                              </Col>
                            </Row>

                            <Row
                              className="mt-2"
                              style={{ display: holder ? "" : "none" }}
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
                                    className={`form-control ${invalidR14}`}
                                    value={valueR14}
                                    onChange={inputR14}
                                    placeholder="ระบุเป็นตัวเลข"
                                    pattern="\d*"
                                    maxLength={13}
                                  />
                                )}
                                <div className="invalid-feedback">
                                  กรุณาระบุเลขบัตรประจำตัวประชาชน
                                </div>
                              </Col>
                            </Row>

                            <Row className="mt-2">
                              <Col md={6}>
                                <label>R15 : เพศ</label>
                              </Col>
                              <Col md={6}>
                                {listing && (
                                  <div className="form-group">
                                    {Gender.map((option, index) => (
                                      <div
                                        className="form-check"
                                        key={option.value}
                                      >
                                        <input
                                          className={`form-check-input ${invalidR15}`}
                                          name="rdR15"
                                          type="radio"
                                          value={option.value}
                                          id={`rdR15${index}`}
                                          onChange={radioR15}
                                          checked={option.value === valueR15}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor={`rdR15${index}`}
                                        >
                                          {option.text}
                                        </label>
                                        {index === Gender.length - 1 ? (
                                          <div className="invalid-feedback">
                                            กรุณาเลือกเพศ
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </Col>
                            </Row>

                            <Row className="mt-2">
                              <Col md={6}>
                                <label>R16 : วัน/เดือน/ปี เกิด</label>
                              </Col>
                              <Col md={2}>
                                {
                                  <select
                                    className={`form-select ${invalidR16_A}`}
                                    onChange={selectR16_A}
                                    value={valueR16_A}
                                  >
                                    <option value="">วัน</option>
                                    <option value="00">00</option>
                                    {Day.map((d) => (
                                      <option key={d.value} value={d.value}>
                                        {d.text}
                                      </option>
                                    ))}
                                  </select>
                                }
                                <div className="invalid-feedback">
                                  กรุณาเลือกวันที่เกิด
                                </div>
                              </Col>

                              <Col md={2}>
                                {
                                  <select
                                    className={`form-select ${invalidR16_B}`}
                                    onChange={selectR16_B}
                                    value={valueR16_B}
                                  >
                                    <option value="">เดือน</option>
                                    <option value="00">00</option>
                                    {Month.map((d) => (
                                      <option key={d.value} value={d.value}>
                                        {d.text}
                                      </option>
                                    ))}
                                  </select>
                                }
                                <div className="invalid-feedback">
                                  กรุณาเลือกเดือนที่เกิด
                                </div>
                              </Col>

                              <Col md={2}>
                                {listing && (
                                  <select
                                    className={`form-select ${invalidR16_C}`}
                                    onChange={selectR16_C}
                                    value={valueR16_C}
                                  >
                                    <option value="">ปี</option>
                                    {YearBirthSK1.map((d) => (
                                      <option key={d.value} value={d.value}>
                                        {d.text}
                                      </option>
                                    ))}
                                  </select>
                                )}
                                <div className="invalid-feedback">
                                  กรุณาระบุปี พ.ศ. ที่เกิด (4 หลัก)
                                </div>
                              </Col>
                            </Row>

                            <Row
                              className="mt-2"
                              style={{ display: holder ? "" : "none" }}
                            >
                              <Col md={6}>
                                <label>
                                  R17 :
                                  ลำดับที่ของผู้ถือครองทำการเกษตรที่นับจดได้
                                </label>
                              </Col>
                              <Col md={6}>
                                <input
                                  type="text"
                                  className={`form-control ${invalidR17}`}
                                  value={valueR17}
                                  disabled={true}
                                />
                                <div className="invalid-feedback">
                                  กรุณาสร้างเลขที่ลำดับ R17
                                  <a style={{ cursor: "pointer" }}>
                                    <span
                                      className="ms-2"
                                      style={{
                                        color: "#000",
                                        display: waitR17,
                                      }}
                                      onClick={() => refreshR17()}
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
                    className="btn btn-outline-secondary me-2"
                  >
                    หน้ารายการ
                  </button>
                </div>
                <div className="float-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={disableBtn}
                    // onClick={() => {
                    //   userInfo?.roleId === 9 ? save() : nextPage();
                    // }}
                    onClick={() =>
                      userInfo?.roleId !== 9
                        ? nextPage()
                        : process.env.REACT_APP_PROJECT === "open"
                        ? save()
                        : nextPage()
                    }
                  >
                    ถัดไป {loading && <LoadingSpinner />}
                  </button>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Container>

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
          <h5>{msgModal}</h5>
          {validate.length > 0 &&
            validate.map((item, index) => {
              return (
                <div key={index}>
                  <h5 style={{ lineHeight: "none" }}>{`${item}`}</h5>
                  {content && (
                    <div>
                      <Row>
                        <Col md={12}>
                          <ul>
                            <li>
                              <a
                                style={{ textDecorationLine: "underline" }}
                                href="https://support.apple.com/th-th/HT207092"
                                target="_blank"
                              >
                                เปิดหรือปิดบริการหาตำแหน่งที่ตั้งและ GPS บน
                                iPhone, iPad
                              </a>
                            </li>
                            <li>
                              <a
                                style={{ textDecorationLine: "underline" }}
                                href="https://www.samsung.com/th/support/mobile-devices/how-to-activate-my-location-and-change-settings-for-location-permissions/"
                                target="_blank"
                              >
                                เปิดใช้งานบริการระบุตำแหน่งบนโทรศัพท์ของคุณ
                                Samsung
                              </a>
                            </li>
                            <li>
                              <a
                                style={{ textDecorationLine: "underline" }}
                                href="https://support.google.com/accounts/answer/3467281?hl=th#zippy="
                                target="_blank"
                              >
                                เปิดใช้งานตำแหน่งของอุปกรณ์ Android
                              </a>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  )}
                </div>
              );
            })}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
