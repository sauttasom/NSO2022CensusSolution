import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { REC01Info } from "../model/REC01Info";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import EWork from "./EWork";
import { _A02, _A04, _A05, IsNot, Prefix, _A01, _A03 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { TempListingInfo } from "../model/TempListingInfo";

export default function EOperation2() {
  const { enumeratesk2, page, setEnumerateSK2, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  const [REC01, setREC01] = useState<REC01Info>();
  const [TempListing, setTempListing] = useState<TempListingInfo>();

  const [HTIT, setHTIT] = useState<string>("");
  const [TEL, setTEL] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [HOL, setHOL] = useState<string>(""); //ผู้ให้ข้อมูลเป็นผู้ถือครองทำการเกษตร

  const [HTIT_A, setHTIT_A] = useState<string>("");
  const [isHTIT_TA, setIsHTIT_TA] = useState<string>("none");
  const [HTIT_TA, setHTIT_TA] = useState<string>("");
  const [HNAMEF_A, setHNAMEF_A] = useState<string>("");
  const [HNAMES_A, setHNAMES_A] = useState<string>("");
  const [TEL_A, setTEL_A] = useState<string>("");
  const [email_A, setEmail_A] = useState<string>("");

  const [disabledHTIT_A, setDisabledHTIT_A] = useState<boolean>(false); //สำหรับเปิด/ปิด ตัว input
  const [disabledHNAMEF_A, setDisabledHNAMEF_A] = useState<boolean>(false); //สำหรับเปิด/ปิด ตัว input
  const [disabledHNAMES_A, setDisabledHNAMES_A] = useState<boolean>(false); //สำหรับเปิด/ปิด ตัว input
  const [disabledTEL_A, setDisabledTEL_A] = useState<boolean>(false); //สำหรับเปิด/ปิด ตัว input
  const [disabledemail_A, setDisabledemail_A] = useState<boolean>(false); //สำหรับเปิด/ปิด ตัว input


  const [A01, setA01] = useState<string>("");
  const [A02_1, setA02_1] = useState<string>("");
  const [A02_2, setA02_2] = useState<string>("");
  const [A02_3, setA02_3] = useState<string>("");
  const [A02_4, setA02_4] = useState<string>("");
  const [A03, setA03] = useState<string>("");
  const [A04, setA04] = useState<string>("");
  const [A04T, setA04T] = useState<string>("");
  const [isA04T, setIsA04T] = useState<string>("");
  const [A05, setA05] = useState<string>("");
  const [A05_1, setA05_1] = useState<string>("");
  const [A05_2, setA05_2] = useState<string>("");
  const [A05_3, setA05_3] = useState<string>("");
  const [A05_4, setA05_4] = useState<string>("");
  const [A05_5, setA05_5] = useState<string>("");
  const [panelA05, setPanelA05] = useState<string>("");


  //state invalid input
  const [invalidHOL, setInvalidHOL] = useState<boolean>(false); 
  const [invalidA01, setInvalidA01] = useState<boolean>(false); 
  const [invalidA03, setInvalidA03] = useState<boolean>(false); 
  const [invalidA04, setInvalidA04] = useState<boolean>(false); 
  const [invalidA04T, setInvalidA04T] = useState<boolean>(false);
  const [invalidA05, setInvalidA05] = useState<boolean>(false);
  const [invalidA05_12345, setInvalidA05_12345] = useState<boolean>(false);  

  const [invalidInfo_A, setInvalidInfo_A] = useState<boolean>(false); 


  //pageLoad
  useEffect(() => {

    //console.log("load page EOperation2");
    console.log("load page EOperation2 --> roleName",userInfo?.roleName + " --> AH_CODE = " + enumeratesk2?.AH_CODE);

    //check role of user ถ้าไม่ใช่ roleid = 9 or 10 or 3 or 7 ไม่ให้ทำงานที่หน้านี้
    if(userInfo?.roleId === 9 || userInfo?.roleId === 10 || userInfo?.roleId === 3 || userInfo?.roleId === 7){

    }
    else{
      window.location.href = process.env.REACT_APP_PORTAL + "/logout";
    }

    //get REC01
    async function getREC01() {
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
              process.env.REACT_APP_ENUMERATE_API +"/Enumerate2/getREC01/" + enumeratesk2?.AH_CODE!;
          }

          await axios
            .get(url_enumerate_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {

                if (res.data[0] !== undefined) {

                  let rec01:REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) =>value === null ? "" : value)

                  //set REC01
                  setA01(rec01?.A01!);
                  setA02_1(rec01?.A02_1!);
                  setA02_2(rec01?.A02_2!);
                  setA02_3(rec01?.A02_3!);
                  setA02_4(rec01?.A02_4!);
                  setA03(rec01?.A03!);
                  setA04(rec01?.A04!);
  
                  if (rec01?.A04! === "5") {
                    setA04T(rec01?.A04T!);
                    setIsA04T("");
                  } else {
                    setA04T("");
                    setIsA04T("none");
                  } 
  
                  setA05(rec01?.A05!);
                  setA05_1(rec01?.A05_1!);
                  setA05_2(rec01?.A05_2!);
                  setA05_3(rec01?.A05_3!);
                  setA05_4(rec01?.A05_4!);
                  setA05_5(rec01?.A05_5!);
  
                  setREC01(JSON.parse(JSON.stringify(res.data[0]), (key, value) =>value === null ? "" : value));
  
                  //
                  setHOL(enumeratesk2?.HOL!);
  
                  //condition
                  if (enumeratesk2?.HOL! === "1") {
                    //ถ้า HOL = 1 แล้ว HTIT_A, HTIT_TA, HNAMEF_A, HNAMES_A, TEL_A, email_A = blank
                    setHTIT_A("");
                    setIsHTIT_TA("none");
                    setHTIT_TA("");
                    setHNAMEF_A("");
                    setHNAMES_A("");
                    setTEL_A("");
                    setEmail_A("");
  
                    //ปิดไม่ให้กรอกด้วย
                    setDisabledHTIT_A(true);
                    setDisabledHNAMEF_A(true);
                    setDisabledHNAMES_A(true);
                    setDisabledTEL_A(true);
                    setDisabledemail_A(true);
    
                  }
                  else{

                    setHTIT_A(enumeratesk2?.HTIT_A!);
                    setIsHTIT_TA(enumeratesk2?.HTIT_A! === "4" ? "" : "none");
                    setHTIT_TA(enumeratesk2?.HTIT_TA!);
                    setHNAMEF_A(enumeratesk2?.HNAMEF_A!);
                    setHNAMES_A(enumeratesk2?.HNAMES_A!);
                    setTEL_A(enumeratesk2?.TEL_A!);
                    setEmail_A(enumeratesk2?.email_A!);

                    //เปิดกรอกด้วย
                    setDisabledHTIT_A(false);
                    setDisabledHNAMEF_A(false);
                    setDisabledHNAMES_A(false);
                    setDisabledTEL_A(false);
                    setDisabledemail_A(false);
                  }
  
                  if(rec01?.A05! === "1") {
                    setPanelA05("");
                  } else {
                    setPanelA05("none");
              
                    //ถ้า A05 = 0 แล้ว A05_1 - A05_5 = blank
                    setA05_1("");
                    setA05_2("");
                    setA05_3("");
                    setA05_4("");
                    setA05_5("");
                  }

                  
                }
          
              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01): ", err);
            });

            
          } catch (err) {
            console.error("ERROR (getREC01): ", err);
          }

      }
    }
    getREC01();

    //get getTempListing
    async function getTempListing() {
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API +"/Enumerate2/getTempListing/" + enumeratesk2?.AH_CODE!;
          }

          await axios
            .get(url_enumerate_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {

                if (res.data[0] !== undefined) {

                  let temp:TempListingInfo | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) =>value === null ? "" : value)
                  setTempListing(temp)
                  
                }
          
              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getTempListing): ", err);
            });

            
          } catch (err) {
            console.error("ERROR (getTempListing): ", err);
          }

      }
    }
    getTempListing();    

    //set EnumerateSK2
    setTEL(enumeratesk2?.TEL!);
    setEmail(enumeratesk2?.email!);
    //setHOL(enumeratesk2?.HOL!);

    /* setHTIT_A(enumeratesk2?.HTIT_A!);

    if (enumeratesk2?.HTIT_A! === "4") {
      setIsHTIT_TA("");
      setHTIT_TA(enumeratesk2?.HTIT_TA!);
    } else {
      setIsHTIT_TA("none");
      setHTIT_TA("");
    }

    setHNAMEF_A(enumeratesk2?.HNAMEF_A!);
    setHNAMES_A(enumeratesk2?.HNAMES_A!);
    setTEL_A(enumeratesk2?.TEL_A!);
    setEmail_A(enumeratesk2?.email_A!); */

    setShowWarningA02_1("none")
    setShowWarningA02_2("none")
    setShowWarningA02_3("none")
    setShowWarningA02_4("none")
 
    switch (enumeratesk2?.HTIT) {
      case "1":
        return setHTIT("นาย");
      case "2":
        return setHTIT("นาง");
      case "3":
        return setHTIT("นางสาว");
      case "4":
        return setHTIT(enumeratesk2.HTIT_T);
      default:
        return setHTIT("");
    } 
  

  }, [enumeratesk2,page === 1]);


  const inputTEL = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTEL(event.target.value);
  };

  const inputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const radioHOL = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHOL(event.target.value);

    //ผู้ให้ข้อมูลเป็นผู้ถือครองทำการเกษตร HOL    
    if (event.target.value === "1") {
      //ถ้า HOL = 1 แล้ว HTIT_A, HTIT_TA, HNAMEF_A, HNAMES_A, TEL_A, email_A = blank
      setHTIT_A("");
      setIsHTIT_TA("none");
      setHTIT_TA("");
      setHNAMEF_A("");
      setHNAMES_A("");
      setTEL_A("");
      setEmail_A("");

      //ปิดไม่ให้กรอกด้วย
      setDisabledHTIT_A(true);
      setDisabledHNAMEF_A(true)
      setDisabledHNAMES_A(true);
      setDisabledTEL_A(true);
      setDisabledemail_A(true);
      

    } else {
      //ถ้า HOL = 0 แล้ว HTIT_A, HNAMEF_A, HNAMES_A, TEL_A, email_A ≠ blank

      //เปิดกรอกด้วย
      setDisabledHTIT_A(false);
      setDisabledHNAMEF_A(false);
      setDisabledHNAMES_A(false);
      setDisabledTEL_A(false);
      setDisabledemail_A(false);

      /* setHTIT_A(enumeratesk2?.HTIT!);
      if (enumeratesk2?.HTIT! === "4") {
        setIsHTIT_TA("");
        setHTIT_TA(enumeratesk2?.HTIT_T!);
      } else {
        setIsHTIT_TA("none");
        setHTIT_TA("");
      }
      setHNAMEF_A(enumeratesk2?.HNAMEF!);
      setHNAMES_A(enumeratesk2?.HNAMES!);
      setTEL_A("");
      setEmail_A(""); */

    }

    setInvalidHOL(false)

  };

  const radioHTIT_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHTIT_A(event.target.value);
    if (event.target.value === "4") {
      setIsHTIT_TA("");
    } else {
      setIsHTIT_TA("none");
      setHTIT_TA("");
    }

    setInvalidInfo_A(false)
    setShowWarningInfo_A("none")
  };

  const inputHTIT_TA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHTIT_TA(event.target.value);
  };

  const inputHNAMEF_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHNAMEF_A(event.target.value);
    setInvalidInfo_A(false)
    setShowWarningInfo_A("none")
  };

  const inputHNAMES_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHNAMES_A(event.target.value);
    setInvalidInfo_A(false)
    setShowWarningInfo_A("none")
  };

  const inputTEL_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTEL_A(event.target.value);
    setInvalidInfo_A(false)
    setShowWarningInfo_A("none")
  };

  const inputEmail_A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail_A(event.target.value);
    setInvalidInfo_A(false)
    setShowWarningInfo_A("none")
  };

  const radioA01 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA01(event.target.value);
    setInvalidA01(false)
  };

  const radioA021 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA02_1(event.target.value);
    //ถ้ากิจกรรมการเกษตรไม่ตรงกับ สก.1 ให้ขึ้นเตือน
    if(event.target.value !== TempListing?.R19){
      setShowWarningA02_1("")
    }
    else{
      setShowWarningA02_1("none")
    }
  };

  const radioA022 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA02_2(event.target.value);
    //ถ้ากิจกรรมการเกษตรไม่ตรงกับ สก.1 ให้ขึ้นเตือน
    if(event.target.value !== TempListing?.R20){
      setShowWarningA02_2("")
    }
    else{
      setShowWarningA02_2("none")
    }
  };

  const radioA023 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA02_3(event.target.value);
    //ถ้ากิจกรรมการเกษตรไม่ตรงกับ สก.1 ให้ขึ้นเตือน
    if(event.target.value !== TempListing?.R21){
      setShowWarningA02_3("")
    }
    else{
      setShowWarningA02_3("none")
    }
  };

  const radioA024 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA02_4(event.target.value);
    //ถ้ากิจกรรมการเกษตรไม่ตรงกับ สก.1 ให้ขึ้นเตือน
    if(event.target.value !== TempListing?.R22){
      setShowWarningA02_4("")
    }
    else{
      setShowWarningA02_4("none")
    }
  };

  const radioA03 = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setA03(event.target.value);
    setInvalidA03(false)
  };

  const radioA04 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA04(event.target.value);
    setInvalidA04(false)

    if (event.target.value === "5") {
      setIsA04T("");

      //ถ้า A04 = 5 แล้ว A04T ≠ blank
      setInvalidA04T(true)

    } else {
      setIsA04T("none");
      setA04T("");
      setInvalidA04T(false)
    }
  };

  const inputA04T = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA04T(event.target.value);
    if(A04T === ""){
      setInvalidA04T(true)
    }
    else{
      setInvalidA04T(false)
    }
  };

  const radioA05 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA05(event.target.value);
    setInvalidA05(false)

    if (event.target.value === "1") {
      setPanelA05("");
    } else {
      setPanelA05("none");

      //ถ้า A05 = 0 แล้ว A05_1 - A05_5 = blank
      setA05_1("");
      setA05_2("");
      setA05_3("");
      setA05_4("");
      setA05_5("");
    }
  };

  const checkA05_1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA05_1(event.target.checked === true ? "1" : "0");
    setInvalidA05_12345(false)
  };

  const checkA05_2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA05_2(event.target.checked === true ? "1" : "0");
    setInvalidA05_12345(false)
  };

  const checkA05_3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA05_3(event.target.checked === true ? "1" : "0");
    setInvalidA05_12345(false)
  };

  const checkA05_4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA05_4(event.target.checked === true ? "1" : "0");
    setInvalidA05_12345(false)
  };

  const checkA05_5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA05_5(event.target.checked === true ? "1" : "0");
    setInvalidA05_12345(false)
  };


  //state warning
  const [showWarningInfo_A, setShowWarningInfo_A] = useState<string>("none"); // ปิด
  const [showWarningA02, setShowWarningA02] = useState<string>("none"); // ปิด
  const [showWarningA02_1, setShowWarningA02_1] = useState<string>("none"); // ปิด
  const [showWarningA02_2, setShowWarningA02_2] = useState<string>("none"); // ปิด
  const [showWarningA02_3, setShowWarningA02_3] = useState<string>("none"); // ปิด
  const [showWarningA02_4, setShowWarningA02_4] = useState<string>("none"); // ปิด

  const scollToWarningInfo_A  = useRef<null | HTMLDivElement>(null);
  const scollToWarningA02  = useRef<null | HTMLDivElement>(null);


  // กด ถัดไป เพื่อ บันทึกข้อมูล ===================================================================
  async function Save() {
    //console.log("Save (EOperation2)");
    //console.log("roleName",userInfo?.roleName);
    

    //consistency check
    let isvalid = true;

    if(HOL === ""){
      //HOL ต้อง ≠ blank
      setInvalidHOL(true)
      isvalid = false;
    }

    if(HOL === "0"){
      //ถ้า HOL = 0 แล้ว HTIT_A, HNAMEF_A, HNAMES_A, TEL_A, email_A ≠ blank
      if(HTIT_A === "" || HNAMEF_A === "" || HNAMES_A === "" || TEL_A === "" || email_A === ""){
        setInvalidInfo_A(true)
        setShowWarningInfo_A("") //เปิด
        isvalid = false;
        scollToWarningInfo_A.current?.scrollIntoView({behavior: 'smooth'})
      } 
      
      if(HTIT_A === "4"){
        if(HTIT_TA === ""){
          setShowWarningInfo_A("") //เปิด
          isvalid = false;
          scollToWarningInfo_A.current?.scrollIntoView({behavior: 'smooth'})
        }
      }

    }

    
    if(A01 === ""){
      //A01 ต้อง ≠ blank
      setInvalidA01(true)
      isvalid = false;
    }

    if(A03 === ""){
      //A03, A04, A05 ≠ blank
      setInvalidA03(true)
      isvalid = false;
    }
    if(A04 === ""){
      //A03, A04, A05 ≠ blank
      setInvalidA04(true)
      isvalid = false;
    }
    if(A05 === ""){
      //A03, A04, A05 ≠ blank
      setInvalidA05(true)
      isvalid = false;
    }

    if(A04 === "5" && A04T === ""){
      //ถ้า A04 = 5 แล้ว A04T ≠ blank
      setInvalidA04T(true)
      isvalid = false;
    }

    if(A05 === "1"){
      //ถ้า A05 = 1 แล้ว A05_1 - A05_5 อย่างน้อย 1 รายการ = 1
      let isvalid_A05 = false;
      if(A05_1 === "1"){isvalid_A05 = true;}
      if(A05_2 === "1"){isvalid_A05 = true;}
      if(A05_3 === "1"){isvalid_A05 = true;}
      if(A05_4 === "1"){isvalid_A05 = true;}
      if(A05_5 === "1"){isvalid_A05 = true;}

      if(isvalid_A05 === false){
        setInvalidA05_12345(true)
        isvalid = false;
      }
    }

    if(A02_1 === "1" || A02_2 === "1" || A02_3 === "1" || A02_4 === "1"){
      setShowWarningA02("none")
    }
    else{
      isvalid = false;
      setShowWarningA02("")
      scollToWarningA02.current?.scrollIntoView({behavior: 'smooth'})
    }
    
    console.log("isvalid = ",isvalid);
    

    //consistency check ผ่าน
    if(isvalid){
      
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;
  
        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };
  
        try {

          //url updateEnumerateSK2_REC01
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api =
              process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateEnumerateSK2_REC01";
          }
  
          /* const pad: string = "00";
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
  
          let year: string = currentYear.toString(); */

          
          //ถ้าเกษตรกรเป็นผู้ตอบเอง ให้บันทึก username , name ไว้ด้วย
          let username_Farmer : string = "";
          let name_Farmer : string = "";
          if(userInfo?.roleId === 10){
            username_Farmer = userInfo?.userName
            name_Farmer = userInfo?.name
          }
  
          const body = {
            aH_CODE: enumeratesk2?.AH_CODE,
            tel: TEL.trim(),
            email: email.trim(),
            hol: HOL,
            htiT_A: HTIT_A,
            htiT_TA: HTIT_TA.trim(),
            hnameF_A: HNAMEF_A.trim(),
            hnameS_A: HNAMES_A.trim(),
            teL_A: TEL_A.trim(),
            email_A: email_A.trim(),
            a01: A01,
            a02_1: A02_1,
            a02_2: A02_2,
            a02_3: A02_3,
            a02_4: A02_4,
            a03: A03,
            a04: A04 ,
            a04T: A04T.trim(),
            a05: A05,
            a05_1: A05_1,
            a05_2: A05_2,
            a05_3: A05_3,
            a05_4: A05_4,
            a05_5: A05_5,
            username_Farmer: username_Farmer,
            name_Farmer: name_Farmer
          };

          //console.log("body",body);
          
  
          const result = await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  getDetail();

                  return true;

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR (updateEnumerateSK2_REC01) : ", err);
            });

          // บันทึกข้อมูล และเรียกข้อมูลใหม่สำเร็จแล้ว
          if (result) {

            setShowWarningInfo_A("none") //ปิด
            setPage(page + 1);

          }


        } catch (err) {
          console.error("SaveEnumerate ERROR: ", err);
        }
      }
    }
    else{
      //consistency check ไม่ผ่าน

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
            "/Enumerate2/getEnumerateSK2/" +
            enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              //setEnumerate(res.data[0]);
              setEnumerateSK2(
                JSON.parse(JSON.stringify(res.data[0]), (key, value) =>
                  value === null ? "" : value === "b" ? "" : value
                )
              );
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
      {enumeratesk2 && <EWork />}
      <Container className="container-xxl flex-grow-1">
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="header">
                <Row className="flex-between-center">
                  <Col md={6} className="col-10 d-flex align-items-center pr-0">
                    <h5 className="mb-0 py-2 py-xl-0 text-white ">
                      ตอนที่ 1 ลักษณะการดำเนินงาน
                    </h5>
                  </Col>

                  <Col md={6} className="col-2 ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsEOperation2"
                      aria-expanded="false"
                      aria-controls="collapsEOperation2"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>

              <Card.Body>
                <Row className="collapse show" id="collapsEOperation2">
                  <Col md={12}>
                    <Row className="mt-2">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          ข้อมูลผู้ถือครองทำการเกษตร
                        </label>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <table className="table table-sm mb-2">
                          <tbody>
                            <tr className="border-top ">
                              <td className="bg-100">
                                ลำดับที่ผู้ถือครองทำการเกษตร
                              </td>
                              <td>{enumeratesk2?.AH_NO}</td>
                            </tr>
                            <tr>
                              <td className="bg-100">บ้านเลขที่ </td>
                              <td>{enumeratesk2?.ADD}</td>
                            </tr>
                            <tr>
                              <td className="bg-100">
                                ชื่อผู้ถือครองทำการเกษตร{" "}
                              </td>
                              <td>
                                {HTIT + enumeratesk2?.HNAMEF! + " " + enumeratesk2?.HNAMES!}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">
                                รหัสผู้ถือครองทำการเกษตร ที่นับจดได้
                              </td>
                              <td>
                                <label style={{ fontWeight: "bold" }}>{enumeratesk2?.AH_CODE}</label>
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">หมายเลขโทรศัพท์</td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={inputTEL}
                                  value={TEL}
                                  maxLength={10}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">อีเมล </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={inputEmail}
                                  value={email}
                                  maxLength={50}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-100">
                                ผู้ให้ข้อมูลเป็นผู้ถือครองทำการเกษตร(ระบุข้อมูล)
                              </td>
                              <td>
                                <div className="form-group">
                                  {IsNot.map((option, index) => (
                                    
                                    <div
                                      className="form-check "
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidHOL?"is-invalid":""}`}
                                        name="rdHOL"
                                        type="radio"
                                        value={option.value}
                                        id={`rdHOL${index}`}
                                        onChange={radioHOL}
                                        checked={option.value === HOL} 
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdHOL${index}`}
                                      >
                                        {option.text}
                                      </label>
                                      {index === IsNot.length-1 ? <div className="invalid-feedback ">กรุณาเลือก ผู้ให้ข้อมูล</div> :""}
                                    </div>
                                    
                                    
                                  ))}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>

                      <Col md={6}>
                        <div className="mb-2" >

                          <div ref={scollToWarningInfo_A}></div>
                          <div className="mb-3" style={{ display: showWarningInfo_A}}><label className="text-danger" >กรุณาระบุ ผู้ให้ข้อมูล ให้ครบถ้วน</label></div>

                          <label>คำนำหน้าชื่อ</label>
                        </div>
                        <div className="form-group mb-2">
                          {Prefix.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className={`form-check-input `}
                                /* className={`form-check-input ${invalidInfo_A?"is-invalid":""}`} */
                                name="rdHTIT_A"
                                type="radio"
                                value={option.value}
                                id={`rdHTIT_A${index}`}
                                onChange={radioHTIT_A}
                                checked={option.value === HTIT_A}
                                disabled ={disabledHTIT_A} 
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdHTIT_A${index}`}
                              >
                                {option.text}
                              </label>
                              {/* {index === IsNot.length-1 ? <div className="invalid-feedback ">กรุณาระบุ ผู้ให้ข้อมูล</div> :""} */}
                            </div>
                          ))}
                          <input
                            type="text"
                            className="form-control"
                            style={{ display: isHTIT_TA }}
                            onChange={inputHTIT_TA}
                            value={HTIT_TA}
                            maxLength={50}
                          />
                        </div>
                        <div className="mb-2">
                          <label>ชื่อ ผู้ให้ข้อมูล</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={inputHNAMEF_A}
                            value={HNAMEF_A}
                            maxLength={100}
                            disabled ={disabledHNAMEF_A} 
                          />
                        </div>
                        <div className="mb-2">
                          <label>นามสกุล ผู้ให้ข้อมูล</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={inputHNAMES_A}
                            value={HNAMES_A}
                            maxLength={100}
                            disabled ={disabledHNAMES_A} 
                          />
                        </div>
                        <div className="mb-2">
                          <label>หมายเลขโทรศัพท์</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={inputTEL_A}
                            value={TEL_A}
                            maxLength={10}
                            disabled ={disabledTEL_A} 
                          />
                        </div>
                        <div className="mb-2">
                          <label>อีเมล</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={inputEmail_A}
                            value={email_A}
                            maxLength={50}
                            disabled ={disabledemail_A} 
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} className="mt-2 question-title">
                        <label style={{ fontWeight: "bold" }}>
                          1. การขึ้นทะเบียนเกษตรกร
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={6}>
                        <label>A01</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {_A01.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className={`form-check-input ${invalidA01?"is-invalid":""}`}
                                name="rdA01"
                                type="radio"
                                value={option.value}
                                id={`rdA01${index}`}
                                onChange={radioA01}
                                checked={option.value === A01}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdA01${index}`}
                              >
                                {option.text}
                              </label>
                              {index === _A01.length-1 ? <div className="invalid-feedback">กรุณาเลือก A01</div> :""}
                            </div>
                            
                          ))}
                          
                        </div>
                        
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} className="mt-4 question-title">
                        <label style={{ fontWeight: "bold" }}>
                          2. กิจกรรมการเกษตรที่ดำเนินการ
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={6}>
                        <label>A02_1 1. ปลูกพืช</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {_A02.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdA021"
                                type="radio"
                                value={option.value}
                                id={`rdA021${index}`}
                                onChange={radioA021}
                                checked={option.value === A02_1}
                                disabled={false}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdA021${index}`}
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
                        <label>A02_2 2. เลี้ยงสัตว์</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {_A02.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdA022"
                                type="radio"
                                value={option.value}
                                id={`rdA022${index}`}
                                onChange={radioA022}
                                checked={option.value === A02_2}
                                disabled={false}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdA022${index}`}
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
                        <label>A02_3 3. เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {_A02.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdA023"
                                type="radio"
                                value={option.value}
                                id={`rdA023${index}`}
                                onChange={radioA023}
                                checked={option.value === A02_3}
                                disabled={false}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdA023${index}`}
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
                        <label>A02_4 4. ทำนาเกลือสมุทร</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {_A02.map((option, index) => (
                            <div
                              className="form-check form-check-inline"
                              key={option.value}
                            >
                              <input
                                className="form-check-input"
                                name="rdA024"
                                type="radio"
                                value={option.value}
                                id={`rdA024${index}`}
                                onChange={radioA024}
                                checked={option.value === A02_4}
                                disabled={false}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdA024${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <div ref={scollToWarningA02}></div>
                        <div className="mb-3" style={{ display: showWarningA02}}><label className="text-danger" >กรุณาเลือก A02_1, A02_2, A02_3, A02_4 อย่างน้อย 1 รายการ</label></div>
                        <div className="mb-1" style={{ display: showWarningA02_1}}><label className="text-warning" >กิจกรรมการเกษตรที่ดำเนินการ ปลูกพืช ไม่ตรงกับ สก.1 </label></div>
                        <div className="mb-1" style={{ display: showWarningA02_2}}><label className="text-warning" >กิจกรรมการเกษตรที่ดำเนินการ เลี้ยงสัตว์ ไม่ตรงกับ สก.1 </label></div>
                        <div className="mb-1" style={{ display: showWarningA02_3}}><label className="text-warning" >กิจกรรมการเกษตรที่ดำเนินการ เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด ไม่ตรงกับ สก.1 </label></div>
                        <div className="mb-1" style={{ display: showWarningA02_4}}><label className="text-warning" >กิจกรรมการเกษตรที่ดำเนินการ ทำนาเกลือสมุทร ไม่ตรงกับ สก.1 </label></div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} className="mt-4 question-title">
                        <label style={{ fontWeight: "bold" }}>
                          3. วัตถุประสงค์หลักของการทำการเกษตร
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={6}>
                        <label>A03</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {_A03.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className={`form-check-input ${invalidA03?"is-invalid":""}`}
                                name="rdA03"
                                type="radio"
                                value={option.value}
                                id={`rdA03${index}`}
                                onChange={radioA03}
                                checked={option.value === A03}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdA03${index}`}
                              >
                                {option.text}
                              </label>
                              {index === _A03.length-1 ? <div className="invalid-feedback">กรุณาเลือก A03</div> :""}
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} className="mt-4 question-title">
                        <label style={{ fontWeight: "bold" }}>
                          4. สถานภาพของผู้ถือครองทำการเกษตร
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={6}>
                        <label>A04</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {_A04.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className={`form-check-input ${invalidA04?"is-invalid":""}`}
                                name="rdA04"
                                type="radio"
                                value={option.value}
                                id={`rdA04${index}`}
                                onChange={radioA04}
                                checked={option.value === A04}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdA04${index}`}
                              >
                                {option.text}
                              </label>
                              {index === _A04.length-1 ? <div className="invalid-feedback">กรุณาเลือก A04</div> :""}
                            </div>
                          ))}
                          <input
                            type="text"
                            className={`form-control mt-2 ${invalidA04T?"is-invalid":""}`}
                            style={{ display: isA04T }}
                            onChange={inputA04T}
                            value={A04T}
                            maxLength={50}
                          />
                          <div className="invalid-feedback">กรุณาระบุข้อมูล</div>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} className="mt-4 question-title">
                        <label style={{ fontWeight: "bold" }}>
                          5. มีการทำเกษตรกรรมยั่งยืนในที่ถือครองนี้
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={6}>
                        <label>A05</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          {_A05.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className={`form-check-input ${invalidA05?"is-invalid":""}`}
                                name="rdA05"
                                type="radio"
                                value={option.value}
                                id={`rdA05${index}`}
                                onChange={radioA05}
                                checked={option.value === A05}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rdA05${index}`}
                              >
                                {option.text}
                              </label>
                              {index === _A05.length-1 ? <div className="invalid-feedback">กรุณาเลือก A05</div> :""}
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    <Row style={{ display: panelA05 }}>
                      <Col md={12} className="mt-4 question-subTitle">
                        <label>
                          5.1 ลักษณะการทำเกษตรกรรมยั่งยืน (ตอบได้มากกว่า 1 ข้อ)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2" style={{ display: panelA05 }}>
                      <Col md={6}>
                        <label>A05_1</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className={`form-check-input ${invalidA05_12345?"is-invalid":""}`}
                              id="A05_1"
                              onChange={checkA05_1}
                              checked={A05_1 === "1" ? true : false}
                            />
                            <label className="form-check-label" htmlFor="A05_1">
                              {" "}
                              1. เกษตรผสมผสาน
                            </label>
                          </div>
                        </div>
                      </Col>

                      <Col md={6}>
                        <label>A05_2</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className={`form-check-input ${invalidA05_12345?"is-invalid":""}`}
                              id="A05_2"
                              onChange={checkA05_2}
                              checked={A05_2 === "1" ? true : false}
                            />
                            <label className="form-check-label" htmlFor="A05_2">
                              {" "}
                              2. เกษตรอินทรีย์
                            </label>
                          </div>
                        </div>
                      </Col>

                      <Col md={6}>
                        <label>A05_3</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className={`form-check-input ${invalidA05_12345?"is-invalid":""}`}
                              id="A05_3"
                              onChange={checkA05_3}
                              checked={A05_3 === "1" ? true : false}
                            />
                            <label className="form-check-label" htmlFor="A05_3">
                              {" "}
                              3. เกษตรธรรมชาติ
                            </label>
                          </div>
                        </div>
                      </Col>

                      <Col md={6}>
                        <label>A05_4</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className={`form-check-input ${invalidA05_12345?"is-invalid":""}`}
                              id="A05_4"
                              onChange={checkA05_4}
                              checked={A05_4 === "1" ? true : false}
                            />
                            <label className="form-check-label" htmlFor="A05_4">
                              {" "}
                              4. เกษตรทฤษฎีใหม่
                            </label>
                          </div>
                        </div>
                      </Col>

                      <Col md={6}>
                        <label>A05_5</label>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className={`form-check-input ${invalidA05_12345?"is-invalid":""}`}
                              id="A05_5"
                              onChange={checkA05_5}
                              checked={A05_5 === "1" ? true : false}
                            />
                            <label className="form-check-label" htmlFor="A05_5">
                              {" "}
                              5. วนเกษตร
                            </label>
                            <div className="invalid-feedback">กรุณาเลือกอย่างน้อย 1 รายการ</div>
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

        <Card className="mt-4 sticky-bottom">
          <Card.Body>
            <Row>
              <div className="col-lg-12 col-sm-auto pr-0">
                <div className="float-end">
                  <button
                    onClick={() =>
                      userInfo?.roleId === 9 ? (window.location.href = process.env.PUBLIC_URL + "/ownerList")
                        : userInfo?.roleId === 10 ? (window.location.href = process.env.REACT_APP_PORTAL + "/main")
                        : (window.location.href = process.env.PUBLIC_URL + "/list")
                    }
                    type="button"
                    className="btn btn-outline-secondary me-2"
                  >
                    หน้ารายการ
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                        ? setPage(page + 1)
                        : process.env.REACT_APP_PROJECT === "open"
                        ? Save()
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
