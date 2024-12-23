import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01, _Q03, _Q06, _Q07, _Q08, _Q22, _Q23 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { Day, Month, YearBirth } from "./DayMonthYear";
import { REC20Info } from "../model/REC20Info";
import { REC20Model } from "../model/REC20Model";

export default function EMembers2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : list of rec20
  const [rec20list, setRec20list] = useState<REC20Info[]>([]);

  //state : input
  const [inputQ01, setInputQ01] = useState<string>("");

  //state : input modal
  const [inputQ01_SUB, setInputQ01_SUB] = useState<string>("");
  const [inputQ02, setInputQ02] = useState<string>("");
  const [inputQ03, setInputQ03] = useState<string>("");
  const [inputQ04A, setInputQ04A] = useState<string>("");
  const [inputQ04B, setInputQ04B] = useState<string>("");
  const [inputQ04C, setInputQ04C] = useState<string>("");
  const [inputQ05, setInputQ05] = useState<string>("");
  const [inputQ06, setInputQ06] = useState<string>("");
  const [inputQ07, setInputQ07] = useState<string>("");
  const [inputQ08, setInputQ08] = useState<string>("");
  const [inputQ08T, setInputQ08T] = useState<string>("");
  const [inputQ09, setInputQ09] = useState<string>("0");
  const [inputQ10, setInputQ10] = useState<string>("0");
  const [inputQ11, setInputQ11] = useState<string>("0");
  const [inputQ12, setInputQ12] = useState<string>("0");
  const [inputQ13, setInputQ13] = useState<string>("0");
  const [inputQ14, setInputQ14] = useState<string>("0");
  const [inputQ15, setInputQ15] = useState<string>("0");
  const [inputQ16, setInputQ16] = useState<string>("0");
  const [inputQ17, setInputQ17] = useState<string>("0");
  const [inputQ18, setInputQ18] = useState<string>("0");
  const [inputQ19, setInputQ19] = useState<string>("0");
  const [inputQ20, setInputQ20] = useState<string>("0");
  const [inputQ21, setInputQ21] = useState<string>("0");
  const [inputQ21T, setInputQ21T] = useState<string>("");
  const [inputQ22, setInputQ22] = useState<string>("");
  const [inputQ23, setInputQ23] = useState<string>("");

  //state disabled ui
  const [disabledQ02, setDisabledQ02] = useState<boolean>(false);
  const [disabledQ04A, setDisabledQ04A] = useState<boolean>(false);
  const [disabledQ04B, setDisabledQ04B] = useState<boolean>(false);
  const [disabledQ04C, setDisabledQ04C] = useState<boolean>(false);
  const [disabledQ05, setDisabledQ05] = useState<boolean>(false);
  const [disabledQ06, setDisabledQ06] = useState<boolean>(false);
  const [disabledQ22, setDisabledQ22] = useState<boolean>(false);
  const [disabledQ23, setDisabledQ23] = useState<boolean>(false);

  const [disabledQ07, setDisabledQ07] = useState<boolean>(false);
  const [disabledQ08, setDisabledQ08] = useState<boolean>(false);
  const [disabledQ09, setDisabledQ09] = useState<boolean>(false);
  const [disabledQ10, setDisabledQ10] = useState<boolean>(false);
  const [disabledQ11, setDisabledQ11] = useState<boolean>(false);
  const [disabledQ12, setDisabledQ12] = useState<boolean>(false);
  const [disabledQ13, setDisabledQ13] = useState<boolean>(false);
  const [disabledQ14, setDisabledQ14] = useState<boolean>(false);
  const [disabledQ15, setDisabledQ15] = useState<boolean>(false);
  const [disabledQ16, setDisabledQ16] = useState<boolean>(false);
  const [disabledQ17, setDisabledQ17] = useState<boolean>(false);
  const [disabledQ18, setDisabledQ18] = useState<boolean>(false);
  const [disabledQ19, setDisabledQ19] = useState<boolean>(false);
  const [disabledQ20, setDisabledQ20] = useState<boolean>(false);
  const [disabledQ21, setDisabledQ21] = useState<boolean>(false);

  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {

    console.log("load page EMembers2");

    getREC20()

  }, [page === 23]);

  async function getREC20() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC20List/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data !== undefined) {
                //set state
                setRec20list(JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value))

                let rec20: REC20Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                setInputQ01(Number(rec20?.Q01!).toString())
              }

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC20List): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC20List): ", err);
      }
    }
  }


  //state show / hide : input
  const [showQ08T, setShowQ08T] = useState<string>("none"); // ปิด
  const [showQ21T, setShowQ21T] = useState<string>("none"); // ปิด


  //action : input modal
  const Q02OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ02(event.target.value)
  }

  const Q03OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ03(event.target.value)
    if(event.target.value !== ""){
      setInvalidQ03(false)
    }
    else{
      setInvalidQ03(true)
    }
  }

  const Q04AOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputQ04A(event.target.value)
  }
  const Q04BOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputQ04B(event.target.value)
  }
  const Q04COnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputQ04C(event.target.value)
  }

  const Q05OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ05(event.target.value)

    if(Number(event.target.value) < 10){
      setDisabledQ22(true)
      setDisabledQ23(true)

      setInputQ22("")
      setInputQ23("")
    }
    else{
      setDisabledQ22(false)
      setDisabledQ23(false)
    }

  }

  const Q06OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ06(event.target.value)
    if(event.target.value !== ""){
      setInvalidQ06(false)
    }
    else{
      setInvalidQ06(true)
    }
  }

  const Q07OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ07(event.target.value)
    if(event.target.value !== ""){
      setInvalidQ07(false)
    }
    else{
      setInvalidQ07(true)
    }
  }

  const Q08OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ08(event.target.value)
    if(event.target.value !== ""){
      setInvalidQ08(false)
    }
    else{
      setInvalidQ08(true)
    }


    if(event.target.value === "9"){
      setShowQ08T("") //เปิด
    }
    else{
      setShowQ08T("none") //ปิด
      setInputQ08T("") //เคลียร์เป็นค่าว่าง
      setInvalidQ08T(false)
    }

  }

  const Q08TOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ08T(event.target.value)    
  }

  const Q09OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ09(event.target.checked === true ? "1" : "0");
  };

  const Q10OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ10(event.target.checked === true ? "1" : "0");
  };

  const Q11OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ11(event.target.checked === true ? "1" : "0");
  };

  const Q12OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ12(event.target.checked === true ? "1" : "0");
  };

  const Q13OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ13(event.target.checked === true ? "1" : "0");
  };

  const Q14OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ14(event.target.checked === true ? "1" : "0");
  };

  const Q15OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ15(event.target.checked === true ? "1" : "0");
  };

  const Q16OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ16(event.target.checked === true ? "1" : "0");
  };

  const Q17OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ17(event.target.checked === true ? "1" : "0");
  };

  const Q18OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ18(event.target.checked === true ? "1" : "0");
  };

  const Q19OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ19(event.target.checked === true ? "1" : "0");
  };

  const Q20OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ20(event.target.checked === true ? "1" : "0");
  };

  const Q21OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ21(event.target.checked === true ? "1" : "0");

    if(event.target.checked === true){
      setShowQ21T("") //เปิด
    }
    else{
      setShowQ21T("none") //ปิด
      setInputQ21T("") //เคลียร์เป็นค่าว่าง
      setInvalidQ21T(false)
    }


  };

  const Q21TOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ21T(event.target.value)
    if(event.target.value !== ""){
      setInvalidQ21T(false)
    }
  }

  const Q22OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ22(event.target.value)
    if(event.target.value !== ""){
      setInvalidQ22(false)
      setShowWarningQ22("none")

      //option ----------------------------------------
      if (inputQ23 === "1") {
        //ถ้า Q22_** = 1 แล้ว Q23 ≠ 1
        if (event.target.value === "1") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ23 === "2") {
        //ถ้า Q22_** = 2 แล้ว Q23 ≠ 2
        if (event.target.value === "2") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ23 === "3") {
        //ถ้า Q22_** = 3 แล้ว Q23 ≠ 3
        if (event.target.value === "3") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ23 === "4") {
        //ถ้า Q22_** = 4 แล้ว Q23 ≠ 4
        if (event.target.value === "4") {
          setInvalidQ22(true)
          setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ23 === "5") {
        //ถ้า Q22_** = 5 แล้ว Q23 ≠ 5
        if (event.target.value === "5") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ23 === "6") {
        //ถ้า Q22_** = 6 แล้ว Q23 ≠ 6
        if (event.target.value === "6") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      //-----------------------------------------------

      if(event.target.value === "7"){
        //ถ้า Q22_** = 7 แล้ว Q23 = blank
        setDisabledQ23(true)
        setInputQ23("")
        setShowWarningQ23_1("none")
        setShowWarningQ23_2("none")
        setShowWarningQ23_3("none")
        setShowWarningQ23_4("none")
        setShowWarningQ23_5("none")
        setShowWarningQ23_6("none")
      }
      else{
        setDisabledQ23(false)
      }

    }
    else{
      //setInvalidQ22(true)
      
    }

  }

  const Q23OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQ23(event.target.value)
    if(event.target.value !== ""){
      
      //option ----------------------------------------
      if (inputQ22 === "1") {
        //ถ้า Q22_** = 1 แล้ว Q23 ≠ 1
        if (event.target.value === "1") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ22 === "2") {
        //ถ้า Q22_** = 2 แล้ว Q23 ≠ 2
        if (event.target.value === "2") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ22 === "3") {
        //ถ้า Q22_** = 3 แล้ว Q23 ≠ 3
        if (event.target.value === "3") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ22 === "4") {
        //ถ้า Q22_** = 4 แล้ว Q23 ≠ 4
        if (event.target.value === "4") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ22 === "5") {
        //ถ้า Q22_** = 5 แล้ว Q23 ≠ 5
        if (event.target.value === "5") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
      else if (inputQ22 === "6") {
        //ถ้า Q22_** = 6 แล้ว Q23 ≠ 6
        if (event.target.value === "6") {
          //setInvalidQ22(true)
          //setInvalidQ23(true)
        }
        else {
          setInvalidQ22(false)
          setInvalidQ23(false)
        }
      }
    //-----------------------------------------------

    }
    else{
      //setInvalidQ23(true)
    }

  }


  //state show/hide ui
  const [showQ04, setShowQ04] = useState<string>("none"); // ปิด
  const [showQ07, setShowQ07] = useState<string>("none"); // ปิด
  const [showQ08, setShowQ08] = useState<string>("none"); // ปิด
  const [showQ09_Q21, setShowQ09_Q21,] = useState<string>("none"); // ปิด


  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("คนที่ 01 (ผู้ถือครองทำการเกษตร)");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalMode, setModalMode] = useState("add");

  //modal สำหรับเพิ่มข้อมูลสมาชิกใหม่
  const OpenModalAddItem = () => {
    
    let no : number = Number(inputQ01) + 1 ;
    setInputQ01_SUB(no.toString())

    //clear input
    setInputQ02("")
    setInputQ03("")
    setInputQ04A("")
    setInputQ04B("")
    setInputQ04C("")
    setInputQ05("")
    setInputQ06("")
    setInputQ07("")
    setInputQ08("")
    setInputQ09("")
    setInputQ10("")
    setInputQ11("")
    setInputQ12("")
    setInputQ13("")
    setInputQ14("")
    setInputQ15("")
    setInputQ16("")
    setInputQ17("")
    setInputQ18("")
    setInputQ19("")
    setInputQ20("")
    setInputQ21("")
    setInputQ21T("")
    setInputQ22("")
    setInputQ23("")

    if(no !== 1){
      //ถ้าไม่ใช่คนแรก ก็ให้เปิด enable input
      setDisabledQ02(false)
      setDisabledQ05(false)
      setDisabledQ06(false)

      //disabled : Q04 , Q07 , Q08 , Q09 to Q21
      setDisabledQ04A(true)
      setDisabledQ04B(true)
      setDisabledQ04C(true)
      setDisabledQ07(true)
      setDisabledQ08(true)
      setDisabledQ09(true)
      setDisabledQ10(true)
      setDisabledQ11(true)
      setDisabledQ12(true)
      setDisabledQ13(true)
      setDisabledQ14(true)
      setDisabledQ15(true)
      setDisabledQ16(true)
      setDisabledQ17(true)
      setDisabledQ18(true)
      setDisabledQ19(true)
      setDisabledQ20(true)
      setDisabledQ21(true)
      setDisabledQ22(true)
      setDisabledQ23(true)
    }
    else{
      //คนที่ 1
      //enabled : Q07 , Q08 , Q09 to Q21 ด้วย
      setDisabledQ07(false)
      setDisabledQ08(false)
      setDisabledQ09(false)
      setDisabledQ10(false)
      setDisabledQ11(false)
      setDisabledQ12(false)
      setDisabledQ13(false)
      setDisabledQ14(false)
      setDisabledQ15(false)
      setDisabledQ16(false)
      setDisabledQ17(false)
      setDisabledQ18(false)
      setDisabledQ19(false)
      setDisabledQ20(false)
      setDisabledQ21(false)
    }

    setModalMode("add")
    setTitleModal("คนที่ "+no.toString().padStart(2, '0'))

    setShowConfirmDeleteButton("none")
    setShowDeleteButton("none")

    //clear warning
    setShowWarningQ03("none")
    setShowWarningQ05("none")
    setShowWarningQ07("none")
    setShowWarningQ08("none")
    setShowWarningQ08_01T("none")
    setShowWarningQ21_01T("none")
    setShowWarningQ22("none")

    handleShow()
  };

  const OpenModalEditItem = (q01_sub:string) => {
    //modal สำหรับแก้ไขข้อมูลสมาชิก
    //ค้นหาใน รายการ
    const item : REC20Model | undefined = rec20list.find(element => element.Q01_SUB === q01_sub)
    //console.log(item);
        
    //set value to state of modal
    setInputQ01_SUB(item?.Q01_SUB!)
    setInputQ02(item?.Q02!)
    setInputQ03(item?.Q03!)
    setInputQ04A(item?.Q04A!)
    setInputQ04B(item?.Q04B!)
    setInputQ04C(item?.Q04C!)
    setInputQ05(Number(item?.Q05!).toString())
    setInputQ06(item?.Q06!)
    setInputQ07(item?.Q07!)
    setInputQ08(item?.Q08!)
    setInputQ08T(item?.Q08T!)
    setInputQ09(item?.Q09!)
    setInputQ10(item?.Q10!)
    setInputQ11(item?.Q11!)
    setInputQ12(item?.Q12!)
    setInputQ13(item?.Q13!)
    setInputQ14(item?.Q14!)
    setInputQ15(item?.Q15!)
    setInputQ16(item?.Q16!)
    setInputQ17(item?.Q17!)
    setInputQ18(item?.Q18!)
    setInputQ19(item?.Q19!)
    setInputQ20(item?.Q20!)
    setInputQ21(item?.Q21!)
    setInputQ21T(item?.Q21T!)
    setInputQ22(item?.Q22!)
    setInputQ23(item?.Q23!)

    if(q01_sub === "01"){
      setDisabledQ02(false)
      setDisabledQ04A(false)
      setDisabledQ04B(false)
      setDisabledQ04C(false)
      setDisabledQ05(false)
      setDisabledQ06(false)

      //enabled : Q07 , Q08 , Q09 to Q21 ด้วย
      setDisabledQ07(false)
      setDisabledQ08(false)
      setDisabledQ09(false)
      setDisabledQ10(false)
      setDisabledQ11(false)
      setDisabledQ12(false)
      setDisabledQ13(false)
      setDisabledQ14(false)
      setDisabledQ15(false)
      setDisabledQ16(false)
      setDisabledQ17(false)
      setDisabledQ18(false)
      setDisabledQ19(false)
      setDisabledQ20(false)
      setDisabledQ21(false)

      setShowConfirmDeleteButton("none")
      setShowDeleteButton("none")

      setInputQ09(item?.Q09! === "" ? "0" : item?.Q09!)
      setInputQ10(item?.Q10! === "" ? "0" : item?.Q10!)
      setInputQ11(item?.Q11! === "" ? "0" : item?.Q11!)
      setInputQ12(item?.Q12! === "" ? "0" : item?.Q12!)
      setInputQ13(item?.Q13! === "" ? "0" : item?.Q13!)
      setInputQ14(item?.Q14! === "" ? "0" : item?.Q14!)
      setInputQ15(item?.Q15! === "" ? "0" : item?.Q15!)
      setInputQ16(item?.Q16! === "" ? "0" : item?.Q16!)
      setInputQ17(item?.Q17! === "" ? "0" : item?.Q17!)
      setInputQ18(item?.Q18! === "" ? "0" : item?.Q18!)
      setInputQ19(item?.Q19! === "" ? "0" : item?.Q19!)
      setInputQ20(item?.Q20! === "" ? "0" : item?.Q20!)
      setInputQ21(item?.Q21! === "" ? "0" : item?.Q21!)

    }
    else{
      setDisabledQ02(false)
      setDisabledQ05(false)
      setDisabledQ06(false)

      //disabled : Q04 , Q07 , Q08 , Q09 to Q21
      setDisabledQ04A(true)
      setDisabledQ04B(true)
      setDisabledQ04C(true)
      setDisabledQ07(true)
      setDisabledQ08(true)
      setDisabledQ09(true)
      setDisabledQ10(true)
      setDisabledQ11(true)
      setDisabledQ12(true)
      setDisabledQ13(true)
      setDisabledQ14(true)
      setDisabledQ15(true)
      setDisabledQ16(true)
      setDisabledQ17(true)
      setDisabledQ18(true)
      setDisabledQ19(true)
      setDisabledQ20(true)
      setDisabledQ21(true)

      setShowConfirmDeleteButton("none")
      setShowDeleteButton("")

      setInputQ09("")
      setInputQ10("")
      setInputQ11("")
      setInputQ12("")
      setInputQ13("")
      setInputQ14("")
      setInputQ15("")
      setInputQ16("")
      setInputQ17("")
      setInputQ18("")
      setInputQ19("")
      setInputQ20("")
      setInputQ21("")
      setInputQ21T("")


    }

    if(Number(item?.Q05!) < 10){
      setDisabledQ22(true)
      setDisabledQ23(true)

      setInputQ22("")
      setInputQ23("")
    }
    else{

      setDisabledQ22(false)
      if(item?.Q22! === "7"){
        setDisabledQ23(true)
      }
      else{
        setDisabledQ23(false)
      }

    }

    if(item?.Q08! === "9"){
      setShowQ08T("") //เปิด
    }
    else{
      setShowQ08T("none") //ปิด
    }

    if(item?.Q21! === "1"){
      setShowQ21T("") //เปิด
    }
    else{
      setShowQ21T("none") //ปิด
    }

    

    


    setModalMode("edit")
    setTitleModal("คนที่ "+ q01_sub)

    handleShow()
  };


  //state for delete
  const [showDeleteButton, setShowDeleteButton] = useState<string>(""); //เปิด
  const [showConfirmDeleteButton, setShowConfirmDeleteButton] = useState<string>("none"); // ปิด

  //ลบสมาชิก
  async function DeleteMember() {
    setShowConfirmDeleteButton("")
    setShowDeleteButton("none")
  }

  //ยืนยันการลบสมาชิก
  async function ConfirmDeleteMember() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/deleteREC20SubRecord";
        }

        const body = {
          aH_CODE: enumeratesk2?.AH_CODE!,
          q01_SUB: inputQ01_SUB
        };

        //console.log("deleteREC20SubRecord - body ",body);
        
        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              if (res.data) {

                getREC20();
                handleClose()

              }
            }
          })
          .catch((err) => {
            console.error("AXIOS ERROR: ", err);
          });

      } catch (err) {
        console.error("Delete Member ERROR: ", err);
      }

    }
  }


  //state invalid input
  const [invalidQ03, setInvalidQ03] = useState<boolean>(false); 
  const [invalidQ04, setInvalidQ04] = useState<boolean>(false);
  const [invalidQ05, setInvalidQ05] = useState<boolean>(false);  
  const [invalidQ06, setInvalidQ06] = useState<boolean>(false);
  const [invalidQ07, setInvalidQ07] = useState<boolean>(false);
  const [invalidQ08, setInvalidQ08] = useState<boolean>(false);
  const [invalidQ08T, setInvalidQ08T] = useState<boolean>(false);
  const [invalidQ21, setInvalidQ21] = useState<boolean>(false);
  const [invalidQ21T, setInvalidQ21T] = useState<boolean>(false);
  const [invalidQ22, setInvalidQ22] = useState<boolean>(false);
  const [invalidQ23, setInvalidQ23] = useState<boolean>(false);

  

  //state warning
  const [showWarningQ02, setShowWarningQ02] = useState<string>("none"); // ปิด
  const [showWarningQ03, setShowWarningQ03] = useState<string>("none"); // ปิด
  const [showWarningQ05, setShowWarningQ05] = useState<string>("none"); // ปิด
  const [showWarningQ06, setShowWarningQ06] = useState<string>("none"); // ปิด
  const [showWarningQ07, setShowWarningQ07] = useState<string>("none"); // ปิด
  const [showWarningQ08_01T, setShowWarningQ08_01T] = useState<string>("none"); // ปิด
  const [showWarningQ08, setShowWarningQ08] = useState<string>("none"); // ปิด
  const [showWarningQ21_01T, setShowWarningQ21_01T] = useState<string>("none"); // ปิด
  const [showWarningQ22, setShowWarningQ22] = useState<string>("none"); // ปิด
  const [showWarningQ23_1, setShowWarningQ23_1] = useState<string>("none"); // ปิด
  const [showWarningQ23_2, setShowWarningQ23_2] = useState<string>("none"); // ปิด
  const [showWarningQ23_3, setShowWarningQ23_3] = useState<string>("none"); // ปิด
  const [showWarningQ23_4, setShowWarningQ23_4] = useState<string>("none"); // ปิด
  const [showWarningQ23_5, setShowWarningQ23_5] = useState<string>("none"); // ปิด
  const [showWarningQ23_6, setShowWarningQ23_6] = useState<string>("none"); // ปิด

  const scollToWarningQ02  = useRef<null | HTMLDivElement>(null);
  const scollToWarningQ03  = useRef<null | HTMLDivElement>(null);
  const scollToWarningQ05  = useRef<null | HTMLDivElement>(null);
  const scollToWarningQ06  = useRef<null | HTMLDivElement>(null);
  const scollToWarningQ07  = useRef<null | HTMLDivElement>(null);
  const scollToWarningQ08  = useRef<null | HTMLDivElement>(null);
  const scollToWarningQ22  = useRef<null | HTMLDivElement>(null);

  //save บันทึกสมาชิก ในแต่ละรายการ ลง DB
  async function SaveMember() {

    //consistency check
    let isvalid = true;

    //ถ้า Q01 ≠ blank แล้ว Q03_** - Q22_** ≠ blank --------------------------------------------------

    if(inputQ02 === "" ){   
      setShowWarningQ02("")
      isvalid = false;
      scollToWarningQ02.current?.scrollIntoView({behavior: 'smooth'})
    }
    else{
      setShowWarningQ02("none")
    }

    if(inputQ03 === "" ){      
      //setInvalidQ03(true)
      setShowWarningQ03("")
      isvalid = false;
      scollToWarningQ03.current?.scrollIntoView({behavior: 'smooth'})
    }
    else{
      setShowWarningQ03("none")
    }

    //00 = ไม่ทราบวันที่เกิด , 01 - 31 = วันเกิดของสมาชิกในครัวเรือน
    //00 = ไม่ทราบเดือนที่เกิด , 01 - 12 = เดือนเกิดของสมาชิกในครัวเรือน
    //2450 - 2566 = ปีเกิดของสมาชิกในครัวเรือน (พ.ศ.)

    //001 - 115 = อายุของสมาชิกในครัวเรือน
    if(Number(inputQ05) < 1 || Number(inputQ05) > 115 || !Number.isInteger(Number(inputQ05))){
      //setInvalidQ05(true)
      setShowWarningQ05("")
      isvalid = false;
      scollToWarningQ05.current?.scrollIntoView({behavior: 'smooth'})
    }
    else{
      setShowWarningQ05("none")
    }

    if(inputQ06 === "" ){      
      //setInvalidQ06(true)
      setShowWarningQ06("")
      isvalid = false;
      scollToWarningQ06.current?.scrollIntoView({behavior: 'smooth'})
    }
    else{
      setShowWarningQ06("none")
    }

    //เช็คเฉพาะคนที่ 01
    if (inputQ01_SUB === "01") {
      //
      if (inputQ07 === "") {
        //setInvalidQ07(true)
        setShowWarningQ07("")
        isvalid = false;
        scollToWarningQ07.current?.scrollIntoView({behavior: 'smooth'})
      }
      else {
        setShowWarningQ07("none")
      }

      //
      if (inputQ08 === "") {
        //setInvalidQ08(true)
        setShowWarningQ08("")
        isvalid = false;
        scollToWarningQ08.current?.scrollIntoView({behavior: 'smooth'})
      } else {
        setShowWarningQ08("none")
      }
      
    }else{
      //คนที่ 02 เป็นต้นไป ไม่ต้องเช็ค
      setShowWarningQ07("none")
      setShowWarningQ08("none")
    }

    
    
    //ถ้า Q08_01 = 9 แล้ว Q08_01T ≠ blank
    if(inputQ08 === "9" ){
      if(inputQ08T === ""){
        //setInvalidQ08T(true)
        setShowWarningQ08_01T("")
        isvalid = false;
      }else{
        setShowWarningQ08_01T("none")
      }
    }

    /* if(inputQ22 === "" ){      
      //setInvalidQ22(true)
      setShowWarningQ22("")
      isvalid = false;
      scollToWarningQ22.current?.scrollIntoView({behavior: 'smooth'})
    }
    else{
      setShowWarningQ22("none")
    } */

    /* if(inputQ23 === "" ){      
      setInvalidQ23(true)
      isvalid = false;
    } */

    //------------------------------------------------------------------------------------------

    if(Number(inputQ05) >= 10 ){
      //ถ้า Q05_** ≥ 10 แล้ว Q22_** ≠ blank
      if(inputQ22 === "" ){      
        //setInvalidQ22(true)
        setShowWarningQ22("")
        isvalid = false;
        scollToWarningQ22.current?.scrollIntoView({behavior: 'smooth'})
      }
      else{
        setShowWarningQ22("none")
      }
    }
    else{
      //ถ้า Q05_** ‹ 10 แล้ว Q22_** - Q23_** = blank
      setShowWarningQ22("none")

    }

     //------------------------------------------------------------------------------------------

    //ถ้า Q21_01 = 1 แล้ว Q21_01T ≠ blank
    if(inputQ21 === "1"){
      if(inputQ21T === ""){
        //setInvalidQ21T(true)
        setShowWarningQ21_01T("")
        isvalid = false;
      }
      else{
        setShowWarningQ21_01T("none")
      }
    }

     //------------------------------------------------------------------------------------------

    //ถ้า Q22_01 = 1 แล้ว Q23_01 ≠ 1
    if(inputQ22 === "1"){
      if(inputQ23 === "1"){
        setShowWarningQ23_1("")
        isvalid = false;
      }
      else{
        setShowWarningQ23_1("none")
      }
    }

    //ถ้า Q22_01 = 2 แล้ว Q23_01 ≠ 2
    if(inputQ22 === "2"){
      if(inputQ23 === "2"){
        setShowWarningQ23_2("")
        isvalid = false;
      }
      else{
        setShowWarningQ23_2("none")
      }
    }

    //ถ้า Q22_01 = 3 แล้ว Q23_01 ≠ 3
    if(inputQ22 === "3"){
      if(inputQ23 === "3"){
        setShowWarningQ23_3("")
        isvalid = false;
      }
      else{
        setShowWarningQ23_3("none")
      }
    }

    //ถ้า Q22_01 = 4 แล้ว Q23_01 ≠ 4
    if(inputQ22 === "4"){
      if(inputQ23 === "4"){
        setShowWarningQ23_4("")
        isvalid = false;
      }
      else{
        setShowWarningQ23_4("none")
      }
    }

    //ถ้า Q22_01 = 5 แล้ว Q23_01 ≠ 5
    if(inputQ22 === "5"){
      if(inputQ23 === "5"){
        setShowWarningQ23_5("")
        isvalid = false;
      }
      else{
        setShowWarningQ23_5("none")
      }
    }

    //ถ้า Q22_01 = 6 แล้ว Q23_01 ≠ 6
    if(inputQ22 === "6"){
      if(inputQ23 === "6"){
        setShowWarningQ23_6("")
        isvalid = false;
      }
      else{
        setShowWarningQ23_6("none")
      }
    }


    //Q23
    /* if(invalidQ23 === true){
      isvalid = false;
    } */







    //ผ่านการ consistency check
    if (isvalid) {

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
            //console.log("modalMode", modalMode);

            //url update / insert
            if (modalMode === "edit") {
              url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC20SubRecord";
            } else if (modalMode === "add") {
              url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC20SubRecord";
            }
          }

          //ใส่ค่าก่อนส่งไป update / insert
          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            q01_SUB: inputQ01_SUB.padStart(2, '0'),
            q02: inputQ02,
            q03: inputQ03,
            q04A: inputQ04A,
            q04B: inputQ04B,
            q04C: inputQ04C,
            q05: inputQ05.padStart(3, '0'),
            q06: inputQ06,
            q07: inputQ07,
            q08: inputQ08,
            q08T: inputQ08T,
            q09: inputQ09,
            q10: inputQ10,
            q11: inputQ11,
            q12: inputQ12,
            q13: inputQ13,
            q14: inputQ14,
            q15: inputQ15,
            q16: inputQ16,
            q17: inputQ17,
            q18: inputQ18,
            q19: inputQ19,
            q20: inputQ20,
            q21: inputQ21,
            q21T: inputQ21T,
            q22: inputQ22,
            q23: inputQ23
          };

          //console.log("q-body",body);

          //api updateREC20SubRecord / insertREC20SubRecord
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  getREC20();
                  handleClose()

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR (updateREC20SubRecord / insertREC20SubRecord): ", err);
            });

        } catch (err) {
          console.error("SaveMember ERROR: ", err);
        }

      }
    }
    else {
      //ไม่ต้องทำอะไร
    }

  }


  //state warning
  const [showWarningQ, setShowWarningQ] = useState<string>("none"); // ปิด

  //save ตอนที่ 10 สมาชิกในครัวเรือนผู้ถือครองทำการเกษตร
  const SaveOnClick = async () => {

    //consistency check
    let isvalid = true;

    //ถ้า Q01 ≠ blank แล้ว Q02_01 – Q22_01 ≠ blank (คนที่ 1)    
    let rec20_01: REC20Model[] = rec20list.filter((q) => {
      return (
        q.Q01_SUB === "01"
      );
    })
    //console.log("rec20_01",rec20_01);
    
    if(rec20_01[0].Q02 === "" || rec20_01[0].Q03 === "" || rec20_01[0].Q04A === ""  || rec20_01[0].Q04B === ""  || rec20_01[0].Q04C === "" 
      || rec20_01[0].Q05 === "" || rec20_01[0].Q06 === ""  || rec20_01[0].Q07 === ""  || rec20_01[0].Q08 === ""  || rec20_01[0].Q22 === ""  ){
        setShowWarningQ("")
        isvalid = false
    }
    else{
      setShowWarningQ("none")
    }


    //ผ่านการ consistency check
    if (isvalid) {

      //ไปหน้าถัดไปได้เลย เพราะทุก modal บันทึกลงดาต้าเบสไว้แล้ว
      setPage(page + 1);

    }
    else{
      //ไม่ต้องทำอะไร
    }

    
  };


  async function NextOnClick(){

    setPage(page + 1);

  }

  return (
    <div>
      <Container className="container-xxl flex-grow-1 container-p-y">

        <form
          onSubmit={handleSubmit(() =>
            userInfo?.roleId !== 9 && userInfo?.roleId !== 10
              ? NextOnClick() //setPage(page + 1)
              : process.env.REACT_APP_PROJECT === "open"
                ? SaveOnClick()
                : setPage(page + 1)
          )}
        >

          <Row>
            <Col md={12}>
              <Card>
                <Card.Header className="header">
                  <Row className="flex-between-center">
                    <Col
                      className="col-10 d-flex align-items-center pr-0"
                    >
                      <h5 className="mb-0 py-2 text-white ">
                        ตอนที่ 10 สมาชิกในครัวเรือนผู้ถือครองทำการเกษตร (เฉพาะผู้ถือครองทำการเกษตรที่ตอบ A04 = 1 หรือ A04 = 2)
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl52210"
                        aria-expanded="false"
                        aria-controls="collapseControl52210"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl52210">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. จำนวนสมาชิกในครัวเรือนทั้งสิ้น (รวมผู้ถือครองทำการเกษตร) ณ วันที่ 1 พฤษภาคม 2566
                          </label>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} lg={6} className="mt-2">
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control `}
                              min={1}
                              max={30}
                              value={inputQ01}
                              disabled
                            />
                            <span className="input-group-text">ราย</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 1 ถึง 30
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => OpenModalAddItem()}
                            style={{
                              display:
                                process.env.REACT_APP_PROJECT === "open"
                                  ? userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                                    ? "none"
                                    : ""
                                  : "none",
                            }}
                          >
                            <i className='bx bxs-user-plus fs-2 text-white'></i> เพิ่มสมาชิกในครัวเรือน
                          </button>
                        </Col>
                      </Row>

                      <Row >
                        <Col md={12}>

                          <Row className="mt-2 question-title">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                2. ข้อมูลของสมาชิกในครัวเรือน
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">

                            {rec20list &&
                              rec20list.map((item, index) => {

                                if(index === 0){
                                  //คนที่ 01
                                  return (
                                    <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                                      <a onClick={() => OpenModalEditItem(item.Q01_SUB)} >
                                        <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                          <div className={`card-body ${(item.Q02 !== "" && item.Q03 !== "" && item.Q04A !== "" && item.Q04B !== "" && item.Q04A !== ""
                                            && item.Q05 !== "" && item.Q06 !== "" && item.Q07 !== "" && item.Q08 !== "" && item.Q22 !== "" ) ? "box-list-success" : "box-list-warning"} `}>
                                            <Row>
                                              <div className="col-lg-12 col-md-12 col-sm-12 ">
                                                <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}>คนที่ {item.Q01_SUB} {item.Q02} </p>
  
                                              </div>
                                            </Row>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  );

                                }
                                else{
                                  //คนที่ 02 เป็นต้นไป
                                  return (
                                    <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                                      <a onClick={() => OpenModalEditItem(item.Q01_SUB)} >
                                        <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                        <div className={`card-body ${(item.Q02 !== "" && item.Q03 !== "" 
                                            && item.Q05 !== "" && item.Q06 !== "" && (item.Q22 !== "" || Number(item.Q05) < 10) ) ? "box-list-success" : "box-list-warning"} `}>
                                            <Row>
                                              <div className="col-lg-12 col-md-12 col-sm-12 ">
                                                <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}>คนที่ {item.Q01_SUB} {item.Q02} </p>
  
                                              </div>
                                            </Row>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  );

                                }
                                
                              })}


                          </Row>


                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="mt-3" style={{ display: showWarningQ }}><label className="text-danger">กรุณาบันทึกรายละเอียดข้อมูลของสมาชิกในครัวเรือน</label></div>
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
                      onClick={() => setPage(page - 1)}
                      type="button"
                      className="btn btn-outline-secondary me-2"
                    >
                      กลับ
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      ถัดไป
                    </button>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>

        </form>

      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>
              <label style={{ fontWeight: "bold" }} >
                Q02 {titleModal}
              </label>
              <br />

              <Row className="mt-2">
                <Col md={4} className="">
                  <label> ชื่อสมาชิกในครัวเรือน </label>

                  <input
                    type="text"
                    className={`form-control `}
                    maxLength={50}
                    onChange={Q02OnChange}
                    value={inputQ02}
                    disabled={disabledQ02}
                  />
                  <div className="invalid-feedback">
                    ...
                  </div>
                  <div ref={scollToWarningQ02}></div>
                  <div className="mt-3" style={{ display: showWarningQ02 }}><label className="text-danger">กรุณาระบุ Q02 ชื่อสมาชิกในครัวเรือน</label></div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ความสัมพันธ์กับหัวหน้าครัวเรือน</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>Q03 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_Q03.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className={`form-check-input ${invalidQ03?"is-invalid":""}`}
                          name="rd_Q03"
                          type="radio"
                          id={`rd_Q03${index}`}
                          checked={option.value === inputQ03}
                          onChange={Q03OnChange}
                          value={option.value}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_Q03${index}`}
                        >
                          {option.text}
                        </label>
                      </div>                      
                    ))}
                    <div className="invalid-feedback">กรุณาเลือก Q03 ความสัมพันธ์กับหัวหน้าครัวเรือน</div>
                  </div>
                  <div ref={scollToWarningQ03}></div>
                  <div className="mt-3" style={{ display: showWarningQ03 }}><label className="text-danger">กรุณาเลือก Q03 ความสัมพันธ์กับหัวหน้าครัวเรือน</label></div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>วัน เดือน ปีเกิด (พ.ศ.) (ถามเฉพาะผู้ถือครองทำการเกษตร)</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={12}>
                  <label>Q04</label>
                </Col>
                <Col md={6}>
                  <div className="input-group mb-3">

                    <select
                      className="form-select form-select-mini-x"
                      onChange={Q04AOnChange}
                      value={inputQ04A}
                      disabled={disabledQ04A}
                    >
                      <option value="00">ไม่ทราบวัน</option>
                      {Day.map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.text}
                        </option>
                      ))}
                    </select>
                    
                    <select
                      className="form-select form-select-mini-x"
                      onChange={Q04BOnChange}
                      value={inputQ04B}
                      disabled={disabledQ04B}
                    >
                      <option value="00">ไม่ทราบเดือน</option>
                      {Month.map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.text}
                        </option>
                      ))}
                    </select>
                    
                    <select
                      className="form-select form-select-mini-x"
                      onChange={Q04COnChange}
                      value={inputQ04C}
                      disabled={disabledQ04C}
                    >
                      {YearBirth.map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.text}
                        </option>
                      ))}
                    </select>

                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>อายุ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={4} className="">
                  <label> Q05 </label>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      /* className={`form-control ${Number(inputQ05) >= 1 && Number(inputQ05) <= 115
                        ? ""
                        : "is-invalid"
                      }`} */
                      className={`form-control`}
                      min={1}
                      max={115}
                      onChange={Q05OnChange}
                      value={inputQ05}
                      disabled={disabledQ05}
                    />
                    <span className="input-group-text">ปี</span>
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ 1 ถึง 115
                    </div>
                  </div>
                  <div ref={scollToWarningQ05}></div>
                  <div className="mt-3" style={{ display: showWarningQ05 }}><label className="text-danger">กรุณาระบุ Q05 อายุ</label></div>
                </Col>
              </Row>



              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>เพศ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>Q06</label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_Q06.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className={`form-check-input ${invalidQ06?"is-invalid":""}`}
                          name="rd_Q06"
                          type="radio"
                          id={`rd_Q06${index}`}
                          checked={option.value === inputQ06}
                          onChange={Q06OnChange}
                          value={option.value}
                          disabled={disabledQ06}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_Q06${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                    <div className="invalid-feedback">กรุณาเลือก Q06 เพศ</div>
                  </div>
                  <div ref={scollToWarningQ06}></div>
                  <div className="mt-3" style={{ display: showWarningQ06 }}><label className="text-danger">กรุณาระบุ Q06 เพศ</label></div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>สถานภาพสมรส (ถามเฉพาะผู้ถือครองทำการเกษตร)</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>Q07</label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_Q07.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className={`form-check-input ${invalidQ07?"is-invalid":""}`}
                          name="rd_Q07"
                          type="radio"
                          id={`rd_Q07${index}`}
                          checked={option.value === inputQ07}
                          onChange={Q07OnChange}
                          value={option.value}
                          disabled={disabledQ07}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_Q07${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div ref={scollToWarningQ07}></div>
                  <div className="mt-3" style={{ display: showWarningQ07 }}><label className="text-danger">กรุณาเลือก Q07 สถานภาพสมรส</label></div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับการศึกษา (ถามเฉพาะผู้ถือครองทำการเกษตร)</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>Q08</label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_Q08.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className={`form-check-input ${invalidQ08?"is-invalid":""}`}
                          name="rd_Q08"
                          type="radio"
                          id={`rd_Q08${index}`}
                          checked={option.value === inputQ08}
                          onChange={Q08OnChange}
                          value={option.value}
                          disabled={disabledQ08}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_Q08${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div ref={scollToWarningQ08}></div>
                  <div className="mt-3" style={{ display: showWarningQ08 }}><label className="text-danger">กรุณาเลือก Q08 ระดับการศึกษา</label></div>
                </Col>

                <Col md={12} className="">
                  <label> </label>
                  <input
                    type="text"
                    className={`form-control ${invalidQ08T?"is-invalid":""}`}
                    onChange={Q08TOnChange}
                    value={inputQ08T}
                    style={{ display: showQ08T }}
                  />
                  <div className="invalid-feedback">กรุณาระบุ การศึกษาอื่น ๆ</div>
                  <div className="mt-3" style={{ display: showWarningQ08_01T }}><label className="text-danger">กรุณาระบุ การศึกษาอื่น ๆ</label></div>
                </Col>

              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การเป็นสมาชิกองค์กร ด้านการเกษตร (ถามเฉพาะผู้ถือครองทำการเกษตร)</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> Q09 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q09"
                        onChange={Q09OnChange}
                        checked={inputQ09 === "1" ? true : false}
                        disabled={disabledQ09}
                      />
                      <label className="form-check-label" htmlFor="Q09">
                        {" "}
                        สหกรณ์ภาคการเกษตร
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q10 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q10"
                        onChange={Q10OnChange}
                        checked={inputQ10 === "1" ? true : false}
                        disabled={disabledQ10}
                      />
                      <label className="form-check-label" htmlFor="Q10">
                        {" "}
                        สหกรณ์นอกภาคการเกษตร
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q11 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q11"
                        onChange={Q11OnChange}
                        checked={inputQ11 === "1" ? true : false}
                        disabled={disabledQ11}
                      />
                      <label className="form-check-label" htmlFor="Q11">
                        {" "}
                        กลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q12 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q12"
                        onChange={Q12OnChange}
                        checked={inputQ12 === "1" ? true : false}
                        disabled={disabledQ12}
                      />
                      <label className="form-check-label" htmlFor="Q12">
                        {" "}
                        กลุ่มส่งเสริมอาชีพการเกษตร
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q13 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q13"
                        onChange={Q13OnChange}
                        checked={inputQ13 === "1" ? true : false}
                        disabled={disabledQ13}
                      />
                      <label className="form-check-label" htmlFor="Q13">
                        {" "}
                        กลุ่มแม่บ้านเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q14 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q14"
                        onChange={Q14OnChange}
                        checked={inputQ14 === "1" ? true : false}
                        disabled={disabledQ14}
                      />
                      <label className="form-check-label" htmlFor="Q14">
                        {" "}
                        กลุ่มยุวเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q15 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q15"
                        onChange={Q15OnChange}
                        checked={inputQ15 === "1" ? true : false}
                        disabled={disabledQ15}
                      />
                      <label className="form-check-label" htmlFor="Q15">
                        {" "}
                        วิสาหกิจชุมชน/เครือข่ายวิสาหกิจชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q16 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q16"
                        onChange={Q16OnChange}
                        checked={inputQ16 === "1" ? true : false}
                        disabled={disabledQ16}
                      />
                      <label className="form-check-label" htmlFor="Q16">
                        {" "}
                        สมาคม/สหพันธ์
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q17 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q17"
                        onChange={Q17OnChange}
                        checked={inputQ17 === "1" ? true : false}
                        disabled={disabledQ17}
                      />
                      <label className="form-check-label" htmlFor="Q17">
                        {" "}
                        อาสาสมัครเกษตร
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q18 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q18"
                        onChange={Q18OnChange}
                        checked={inputQ18 === "1" ? true : false}
                        disabled={disabledQ18}
                      />
                      <label className="form-check-label" htmlFor="Q18">
                        {" "}
                        กลุ่มผู้ใช้น้ำชลประทาน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q19 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q19"
                        onChange={Q19OnChange}
                        checked={inputQ19 === "1" ? true : false}
                        disabled={disabledQ19}
                      />
                      <label className="form-check-label" htmlFor="Q19">
                        {" "}
                        สมาชิกของ ธกส.
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q20 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q20"
                        onChange={Q20OnChange}
                        checked={inputQ20 === "1" ? true : false}
                        disabled={disabledQ20}
                      />
                      <label className="form-check-label" htmlFor="Q20">
                        {" "}
                        เครือข่ายเกษตรกรรุ่นใหม่
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> Q21 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Q21"
                        onChange={Q21OnChange}
                        checked={inputQ21 === "1" ? true : false}
                        disabled={disabledQ21}
                      />
                      <label className="form-check-label" htmlFor="Q21">
                        {" "}
                        อื่น ๆ
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={12} className="">
                  <label> </label>
                  <input
                    type="text"
                    className={`form-control ${invalidQ21T?"is-invalid":""}`}
                    onChange={Q21TOnChange}
                    value={inputQ21T}
                    style={{ display: showQ21T }}
                  />
                  <div className="invalid-feedback">กรุณาระบุ อื่น ๆ</div>
                  <div className="mt-3" style={{ display: showWarningQ21_01T }}><label className="text-danger">กรุณาระบุ อื่น ๆ</label></div>
                </Col>

              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>อาชีพหลัก การทำงานในรอบ 12 เดือนที่แล้ว (ถามเฉพาะผู้ที่มีอายุ 10 ปีขึ้นไป)</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>Q22</label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_Q22.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className={`form-check-input ${invalidQ22?"is-invalid":""}`}
                          name="rd_Q22"
                          type="radio"
                          id={`rd_Q22${index}`}
                          checked={option.value === inputQ22}
                          onChange={Q22OnChange}
                          value={option.value}
                          disabled={disabledQ22}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_Q22${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div ref={scollToWarningQ22}></div>
                  <div className="mt-3" style={{ display: showWarningQ22 }}><label className="text-danger">กรุณาเลือก Q22 อาชีพหลัก</label></div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>อาชีพรอง การทำงานในรอบ 12 เดือนที่แล้ว (ถามเฉพาะผู้ที่มีอายุ 10 ปีขึ้นไป)</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>Q23</label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_Q23.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className={`form-check-input ${invalidQ23?"is-invalid":""}`}
                          name="rd_Q23"
                          type="radio"
                          id={`rd_Q23${index}`}
                          checked={option.value === inputQ23}
                          onChange={Q23OnChange}
                          value={option.value}
                          disabled={disabledQ23}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_Q23${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3" style={{ display: showWarningQ23_1 }}><label className="text-danger">กรุณาเลือก Q23 ที่ไม่เท่ากับ ประกอบอาชีพเกษตร </label></div>
                  <div className="mt-3" style={{ display: showWarningQ23_2 }}><label className="text-danger">กรุณาเลือก Q23 ที่ไม่เท่ากับ รับเงินเดือนประจำ </label></div>
                  <div className="mt-3" style={{ display: showWarningQ23_3 }}><label className="text-danger">กรุณาเลือก Q23 ที่ไม่เท่ากับ รับจ้างทำการเกษตร </label></div>
                  <div className="mt-3" style={{ display: showWarningQ23_4 }}><label className="text-danger">กรุณาเลือก Q23 ที่ไม่เท่ากับ ประกอบธุรกิจการค้า </label></div>
                  <div className="mt-3" style={{ display: showWarningQ23_5 }}><label className="text-danger">กรุณาเลือก Q23 ที่ไม่เท่ากับ รับจ้างทั่วไป </label></div>
                  <div className="mt-3" style={{ display: showWarningQ23_6 }}><label className="text-danger">กรุณาเลือก Q23 ที่ไม่เท่ากับ ทำงานอื่นๆ </label></div>
                </Col>
              </Row>


            </Col>
            
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <label className="text-danger me-3" style={{display:showConfirmDeleteButton}}>ยืนยันการสมาชิก คนที่ {inputQ01_SUB} </label>
              <button
                type="button"
                className="btn btn-danger me-2"
                style={{display:showConfirmDeleteButton}}
                onClick={()=>ConfirmDeleteMember()}
              >
                ยืนยันการลบสมาชิก
              </button>

              <button
                type="button"
                className="btn btn-outline-danger me-2"
                style={{display:showDeleteButton}}
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? DeleteMember()
                      : handleClose()
                }
              >
                ลบสมาชิก
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose}
              >
                ยกเลิก
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveMember()
                      : handleClose()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>


    </div>
  );
}
