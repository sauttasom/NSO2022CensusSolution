import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC15Model } from "../model/REC15Model";
import { REC15Info } from "../model/REC15Info";
import { LandCalculator } from "../service/LandCalculator";
import { REC01Info } from "../model/REC01Info";

export default function EAquaculture2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputL01, setInputL01] = useState("");

  //state : input for modal
  const [inputL02, setInputL02] = useState("");
  const [inputL03, setInputL03] = useState("");
  const [inputL04, setInputL04] = useState("");
  const [inputL05, setInputL05] = useState("");
  const [inputL06, setInputL06] = useState("");
  const [inputL07, setInputL07] = useState("");
  const [inputL08, setInputL08] = useState("");
  const [inputL09, setInputL09] = useState("");
  const [inputL09A, setInputL09A] = useState("");
  const [inputL09B, setInputL09B] = useState("");
  const [inputL09C, setInputL09C] = useState("");

  const [rec01list, setRec01list] = useState<REC01Info[]>([]);

  //state rec01
  const [valueA16, setValueA16] = useState<string>("");

  //เก็บข้อมูลเป็นรายการ ที่แปลงมาจาก REC15
  const [animalList, SetAnimalList] = useState<REC15Model[]>([]);

  const { handleSubmit } = useForm();

  //page load
  useEffect(() => {
    console.log("load page EAquaculture2");
    
    setInputL01("1")
    getREC15()  
    getREC01()

  }, [page === 16]);

  async function getREC15() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC15/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                let pl: REC15Model[] = []
                let rec15: REC15Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                if (rec15.L03_01 != "") { pl.push({ L02: rec15.L02_01, L03: rec15.L03_01, L04: rec15.L04_01, L05: rec15.L05_01, L06: rec15.L06_01, L07: rec15.L07_01, L08: rec15.L08_01, L09: rec15.L09_01, L09A: rec15.L09A_01, L09B: rec15.L09B_01, L09C: rec15.L09C_01 }) }
                if (rec15.L03_02 != "") { pl.push({ L02: rec15.L02_02, L03: rec15.L03_02, L04: rec15.L04_02, L05: rec15.L05_02, L06: rec15.L06_02, L07: rec15.L07_02, L08: rec15.L08_02, L09: rec15.L09_02, L09A: rec15.L09A_02, L09B: rec15.L09B_02, L09C: rec15.L09C_02 }) }
                if (rec15.L03_03 != "") { pl.push({ L02: rec15.L02_03, L03: rec15.L03_03, L04: rec15.L04_03, L05: rec15.L05_03, L06: rec15.L06_03, L07: rec15.L07_03, L08: rec15.L08_03, L09: rec15.L09_03, L09A: rec15.L09A_03, L09B: rec15.L09B_03, L09C: rec15.L09C_03 }) }
                if (rec15.L03_04 != "") { pl.push({ L02: rec15.L02_04, L03: rec15.L03_04, L04: rec15.L04_04, L05: rec15.L05_04, L06: rec15.L06_04, L07: rec15.L07_04, L08: rec15.L08_04, L09: rec15.L09_04, L09A: rec15.L09A_04, L09B: rec15.L09B_04, L09C: rec15.L09C_04 }) }
                if (rec15.L03_05 != "") { pl.push({ L02: rec15.L02_05, L03: rec15.L03_05, L04: rec15.L04_05, L05: rec15.L05_05, L06: rec15.L06_05, L07: rec15.L07_05, L08: rec15.L08_05, L09: rec15.L09_05, L09A: rec15.L09A_05, L09B: rec15.L09B_05, L09C: rec15.L09C_05 }) }
                if (rec15.L03_06 != "") { pl.push({ L02: rec15.L02_06, L03: rec15.L03_06, L04: rec15.L04_06, L05: rec15.L05_06, L06: rec15.L06_06, L07: rec15.L07_06, L08: rec15.L08_06, L09: rec15.L09_06, L09A: rec15.L09A_06, L09B: rec15.L09B_06, L09C: rec15.L09C_06 }) }
                if (rec15.L03_07 != "") { pl.push({ L02: rec15.L02_07, L03: rec15.L03_07, L04: rec15.L04_07, L05: rec15.L05_07, L06: rec15.L06_07, L07: rec15.L07_07, L08: rec15.L08_07, L09: rec15.L09_07, L09A: rec15.L09A_07, L09B: rec15.L09B_07, L09C: rec15.L09C_07 }) }
                if (rec15.L03_08 != "") { pl.push({ L02: rec15.L02_08, L03: rec15.L03_08, L04: rec15.L04_08, L05: rec15.L05_08, L06: rec15.L06_08, L07: rec15.L07_08, L08: rec15.L08_08, L09: rec15.L09_08, L09A: rec15.L09A_08, L09B: rec15.L09B_08, L09C: rec15.L09C_08 }) }
                if (rec15.L03_09 != "") { pl.push({ L02: rec15.L02_09, L03: rec15.L03_09, L04: rec15.L04_09, L05: rec15.L05_09, L06: rec15.L06_09, L07: rec15.L07_09, L08: rec15.L08_09, L09: rec15.L09_09, L09A: rec15.L09A_09, L09B: rec15.L09B_09, L09C: rec15.L09C_09 }) }
                if (rec15.L03_10 != "") { pl.push({ L02: rec15.L02_10, L03: rec15.L03_10, L04: rec15.L04_10, L05: rec15.L05_10, L06: rec15.L06_10, L07: rec15.L07_10, L08: rec15.L08_10, L09: rec15.L09_10, L09A: rec15.L09A_10, L09B: rec15.L09B_10, L09C: rec15.L09C_10 }) }
                if (rec15.L03_11 != "") { pl.push({ L02: rec15.L02_11, L03: rec15.L03_11, L04: rec15.L04_11, L05: rec15.L05_11, L06: rec15.L06_11, L07: rec15.L07_11, L08: rec15.L08_11, L09: rec15.L09_11, L09A: rec15.L09A_11, L09B: rec15.L09B_11, L09C: rec15.L09C_11 }) }
                if (rec15.L03_12 != "") { pl.push({ L02: rec15.L02_12, L03: rec15.L03_12, L04: rec15.L04_12, L05: rec15.L05_12, L06: rec15.L06_12, L07: rec15.L07_12, L08: rec15.L08_12, L09: rec15.L09_12, L09A: rec15.L09A_12, L09B: rec15.L09B_12, L09C: rec15.L09C_12 }) }
                if (rec15.L03_13 != "") { pl.push({ L02: rec15.L02_13, L03: rec15.L03_13, L04: rec15.L04_13, L05: rec15.L05_13, L06: rec15.L06_13, L07: rec15.L07_13, L08: rec15.L08_13, L09: rec15.L09_13, L09A: rec15.L09A_13, L09B: rec15.L09B_13, L09C: rec15.L09C_13 }) }
                if (rec15.L03_14 != "") { pl.push({ L02: rec15.L02_14, L03: rec15.L03_14, L04: rec15.L04_14, L05: rec15.L05_14, L06: rec15.L06_14, L07: rec15.L07_14, L08: rec15.L08_14, L09: rec15.L09_14, L09A: rec15.L09A_14, L09B: rec15.L09B_14, L09C: rec15.L09C_14 }) }
                if (rec15.L03_15 != "") { pl.push({ L02: rec15.L02_15, L03: rec15.L03_15, L04: rec15.L04_15, L05: rec15.L05_15, L06: rec15.L06_15, L07: rec15.L07_15, L08: rec15.L08_15, L09: rec15.L09_15, L09A: rec15.L09A_15, L09B: rec15.L09B_15, L09C: rec15.L09C_15 }) }
                if (rec15.L03_16 != "") { pl.push({ L02: rec15.L02_16, L03: rec15.L03_16, L04: rec15.L04_16, L05: rec15.L05_16, L06: rec15.L06_16, L07: rec15.L07_16, L08: rec15.L08_16, L09: rec15.L09_16, L09A: rec15.L09A_16, L09B: rec15.L09B_16, L09C: rec15.L09C_16 }) }
                if (rec15.L03_17 != "") { pl.push({ L02: rec15.L02_17, L03: rec15.L03_17, L04: rec15.L04_17, L05: rec15.L05_17, L06: rec15.L06_17, L07: rec15.L07_17, L08: rec15.L08_17, L09: rec15.L09_17, L09A: rec15.L09A_17, L09B: rec15.L09B_17, L09C: rec15.L09C_17 }) }
                if (rec15.L03_18 != "") { pl.push({ L02: rec15.L02_18, L03: rec15.L03_18, L04: rec15.L04_18, L05: rec15.L05_18, L06: rec15.L06_18, L07: rec15.L07_18, L08: rec15.L08_18, L09: rec15.L09_18, L09A: rec15.L09A_18, L09B: rec15.L09B_18, L09C: rec15.L09C_18 }) }
                if (rec15.L03_19 != "") { pl.push({ L02: rec15.L02_19, L03: rec15.L03_19, L04: rec15.L04_19, L05: rec15.L05_19, L06: rec15.L06_19, L07: rec15.L07_19, L08: rec15.L08_19, L09: rec15.L09_19, L09A: rec15.L09A_19, L09B: rec15.L09B_19, L09C: rec15.L09C_19 }) }
                if (rec15.L03_20 != "") { pl.push({ L02: rec15.L02_20, L03: rec15.L03_20, L04: rec15.L04_20, L05: rec15.L05_20, L06: rec15.L06_20, L07: rec15.L07_20, L08: rec15.L08_20, L09: rec15.L09_20, L09A: rec15.L09A_20, L09B: rec15.L09B_20, L09C: rec15.L09C_20 }) }
                if (rec15.L03_21 != "") { pl.push({ L02: rec15.L02_21, L03: rec15.L03_21, L04: rec15.L04_21, L05: rec15.L05_21, L06: rec15.L06_21, L07: rec15.L07_21, L08: rec15.L08_21, L09: rec15.L09_21, L09A: rec15.L09A_21, L09B: rec15.L09B_21, L09C: rec15.L09C_21 }) }
                if (rec15.L03_22 != "") { pl.push({ L02: rec15.L02_22, L03: rec15.L03_22, L04: rec15.L04_22, L05: rec15.L05_22, L06: rec15.L06_22, L07: rec15.L07_22, L08: rec15.L08_22, L09: rec15.L09_22, L09A: rec15.L09A_22, L09B: rec15.L09B_22, L09C: rec15.L09C_22 }) }
                if (rec15.L03_23 != "") { pl.push({ L02: rec15.L02_23, L03: rec15.L03_23, L04: rec15.L04_23, L05: rec15.L05_23, L06: rec15.L06_23, L07: rec15.L07_23, L08: rec15.L08_23, L09: rec15.L09_23, L09A: rec15.L09A_23, L09B: rec15.L09B_23, L09C: rec15.L09C_23 }) }
                if (rec15.L03_24 != "") { pl.push({ L02: rec15.L02_24, L03: rec15.L03_24, L04: rec15.L04_24, L05: rec15.L05_24, L06: rec15.L06_24, L07: rec15.L07_24, L08: rec15.L08_24, L09: rec15.L09_24, L09A: rec15.L09A_24, L09B: rec15.L09B_24, L09C: rec15.L09C_24 }) }
                if (rec15.L03_25 != "") { pl.push({ L02: rec15.L02_25, L03: rec15.L03_25, L04: rec15.L04_25, L05: rec15.L05_25, L06: rec15.L06_25, L07: rec15.L07_25, L08: rec15.L08_25, L09: rec15.L09_25, L09A: rec15.L09A_25, L09B: rec15.L09B_25, L09C: rec15.L09C_25 }) }
                if (rec15.L03_26 != "") { pl.push({ L02: rec15.L02_26, L03: rec15.L03_26, L04: rec15.L04_26, L05: rec15.L05_26, L06: rec15.L06_26, L07: rec15.L07_26, L08: rec15.L08_26, L09: rec15.L09_26, L09A: rec15.L09A_26, L09B: rec15.L09B_26, L09C: rec15.L09C_26 }) }
                if (rec15.L03_27 != "") { pl.push({ L02: rec15.L02_27, L03: rec15.L03_27, L04: rec15.L04_27, L05: rec15.L05_27, L06: rec15.L06_27, L07: rec15.L07_27, L08: rec15.L08_27, L09: rec15.L09_27, L09A: rec15.L09A_27, L09B: rec15.L09B_27, L09C: rec15.L09C_27 }) }
                if (rec15.L03_28 != "") { pl.push({ L02: rec15.L02_28, L03: rec15.L03_28, L04: rec15.L04_28, L05: rec15.L05_28, L06: rec15.L06_28, L07: rec15.L07_28, L08: rec15.L08_28, L09: rec15.L09_28, L09A: rec15.L09A_28, L09B: rec15.L09B_28, L09C: rec15.L09C_28 }) }
                if (rec15.L03_29 != "") { pl.push({ L02: rec15.L02_29, L03: rec15.L03_29, L04: rec15.L04_29, L05: rec15.L05_29, L06: rec15.L06_29, L07: rec15.L07_29, L08: rec15.L08_29, L09: rec15.L09_29, L09A: rec15.L09A_29, L09B: rec15.L09B_29, L09C: rec15.L09C_29 }) }
                if (rec15.L03_30 != "") { pl.push({ L02: rec15.L02_30, L03: rec15.L03_30, L04: rec15.L04_30, L05: rec15.L05_30, L06: rec15.L06_30, L07: rec15.L07_30, L08: rec15.L08_30, L09: rec15.L09_30, L09A: rec15.L09A_30, L09B: rec15.L09B_30, L09C: rec15.L09C_30 }) }

                //console.log(pl);

                SetAnimalList(pl)

              }              

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC15): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC015): ", err);
      }
    }
  }


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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data !== undefined) {

                //set state
                setRec01list(JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value));

                let rec01: REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                //เนื้อที่ที่เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด
                setValueA16(rec01?.A16!)
                

              }                            

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List on EAquaculture2): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC01List on EAquaculture2): ", err);
      }
    }
  }


  //state : disabled
  const [disabledL09, setDisabledL09] = useState<boolean>(false);


  //action : input for modal
  const L02OnChange = (event: any) => {
    setInputL02(event.currentTarget.value)
  }

  const L03OnChange = (event: any) => {
    setInputL03(event.currentTarget.value)
  }

  const L04OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputL04(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true ){
      setDisabledL09(false)
    }
    else{
      //disabled L09
      setDisabledL09(true)

      setInputL09A("")
      setInputL09B("")
      setInputL09C("")
    }
  }

  const L05OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputL05(event.target.checked === true ? "1" : "0");
  }

  const L06OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputL06(event.target.checked === true ? "1" : "0");
  }

  const L07OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputL07(event.target.checked === true ? "1" : "0");
  }

  const L08OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputL08(event.target.checked === true ? "1" : "0");
  }

  const L09OnChange = (event: any) => {
    setInputL09(event.currentTarget.value)
  }

  const L09AOnChange = (event: any) => {
    setInputL09A(event.currentTarget.value)
  }

  const L09BOnChange = (event: any) => {
    setInputL09B(event.currentTarget.value)
  }

  const L09COnChange = (event: any) => {
    setInputL09C(event.currentTarget.value)
  }


   //state warning
   const [showWarningL04_08, setShowWarningL04_08] = useState<string>("none"); // ปิด
   const [showWarningL09, setShowWarningL09] = useState<string>("none"); // ปิด
   const [showWarningL01, setShowWarningL01] = useState<string>("none"); // ปิด


  //บันทึกรายละเอียดของสัตว์น้ำ จาก modal
  async function SaveAnimal() {

    //consistency check
    let isvalid = true;

    if (inputL04 === "1" || inputL05 === "1" || inputL06 === "1" || inputL07 === "1" || inputL08 === "1") {
      setShowWarningL04_08("none")
    }
    else {
      isvalid = false
      setShowWarningL04_08("")
    }

    //L04
    if (inputL04 === "1"){      

      /* if (Number(inputL09A) >= 0 || Number(inputL09B) >= 0 || Number(inputL09C) >= 0) {
        setShowWarningL09("none")
      }
      else {
        isvalid = false
        setShowWarningL09("")
      } */

      if (inputL09A === "" && inputL09B === "" && inputL09C === "") {      
        isvalid = false
        setShowWarningL09("")
      }
      else {
        setShowWarningL09("none")
      }

      //possible code
      if (Number(inputL09A) >= 0 && Number(inputL09A) <= 99999){
        //nothing
      }
      else{
        isvalid = false
      }

      if (Number(inputL09B) >= 0 && Number(inputL09B) <= 3){
        //nothing
      }
      else{
        isvalid = false
      }

      if (Number(inputL09C) >= 0 && Number(inputL09C) <= 99){
        //nothing
      }
      else{
        isvalid = false
      }

      //check ตัวเลข ไร่ งาน ตารางวา ต้องเป็น integer
      if (Number.isInteger(Number(inputL09A)) && Number.isInteger(Number(inputL09B)) && Number.isInteger(Number(inputL09C))) {
        //
      } else {
        isvalid = false;
      }

    }
    


    //ผ่านการ consistency check
    if (isvalid) {

      //บันทึกลง state : animalList
      const animalList_updated = animalList.map((obj) => {
        if (obj.L03 === inputL03) {
          return {
            ...obj,
            L04: inputL04,
            L05: inputL05,
            L06: inputL06,
            L07: inputL07,
            L08: inputL08,
            L09: inputL09,
            L09A: inputL09A,
            L09B: inputL09B,
            L09C: inputL09C,
          };
        }
        return obj;
      });

      SetAnimalList(animalList_updated)

      handleClose()

    }
    else {
      //ไม่ต้องทำอะไร
    }
    
  }

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("การเลี้ยงสัตว์น้ำชนิดสำคัญ");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModalItem = (L03:string) => {
    //ค้นหาใน รายการ
    const item : REC15Model | undefined = animalList.find(element => element.L03 === L03)
    //console.log(item);
        
    //set value to state of modal
    setInputL02(item?.L02!)
    setInputL03(item?.L03!)
    setInputL04(item?.L04!)
    setInputL05(item?.L05!)
    setInputL06(item?.L06!)
    setInputL07(item?.L07!)
    setInputL08(item?.L08!)
    setInputL09(item?.L09!)
    setInputL09A(item?.L09A! === "" ? "" : parseInt(item?.L09A!).toString())
    setInputL09B(item?.L09B! === "" ? "" : parseInt(item?.L09B!).toString())
    setInputL09C(item?.L09C! === "" ? "" : parseInt(item?.L09C!).toString())

    if(item?.L04! === "1" ){
      setDisabledL09(false)
    }
    else{
      //disabled L09
      setDisabledL09(true)

      setInputL09A("")
      setInputL09B("")
      setInputL09C("")
    }

    setShowWarningL04_08("none")
    setShowWarningL09("none")

    handleShow()
  };

  //state warning
  const [showWarningA16Blank, setShowWarningA16Blank] = useState<string>("none"); // ปิด
  const [showWarningA16, setShowWarningA16] = useState<string>("none"); // ปิด


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 5.1 การเลี้ยงสัตว์น้ำชนิดสำคัญ
  const SaveOnClick = async () => {

    //summation L09
    let SUM_L09 : number = 0;

    //คำนวณผลรวมของ l09 เป็นทศนิยม xxxxx.xxxx ที่อยู่ใน state : animalList
    const animalList_updated = animalList.map((obj) => {
      const _L09= LandCalculator.CalculateSummary(Number(obj.L09A),Number(obj.L09B),Number(obj.L09C)).toFixed(4).toString().padStart(10,'0')

      SUM_L09 += LandCalculator.CalculateSummary(Number(obj.L09A),Number(obj.L09B),Number(obj.L09C));
      
     return {
        ...obj,
        L09: _L09
      };
    });

    let rec15 : REC15Info = ({
      AH_CODE: enumeratesk2?.AH_CODE!,
      L01: inputL01,
      L02_01: "",
      L03_01: "",
      L04_01: "",
      L05_01: "",
      L06_01: "",
      L07_01: "",
      L08_01: "",
      L09_01: "",
      L09A_01: "",
      L09B_01: "",
      L09C_01: "",
      L02_02: "",
      L03_02: "",
      L04_02: "",
      L05_02: "",
      L06_02: "",
      L07_02: "",
      L08_02: "",
      L09_02: "",
      L09A_02: "",
      L09B_02: "",
      L09C_02: "",
      L02_03: "",
      L03_03: "",
      L04_03: "",
      L05_03: "",
      L06_03: "",
      L07_03: "",
      L08_03: "",
      L09_03: "",
      L09A_03: "",
      L09B_03: "",
      L09C_03: "",
      L02_04: "",
      L03_04: "",
      L04_04: "",
      L05_04: "",
      L06_04: "",
      L07_04: "",
      L08_04: "",
      L09_04: "",
      L09A_04: "",
      L09B_04: "",
      L09C_04: "",
      L02_05: "",
      L03_05: "",
      L04_05: "",
      L05_05: "",
      L06_05: "",
      L07_05: "",
      L08_05: "",
      L09_05: "",
      L09A_05: "",
      L09B_05: "",
      L09C_05: "",
      L02_06: "",
      L03_06: "",
      L04_06: "",
      L05_06: "",
      L06_06: "",
      L07_06: "",
      L08_06: "",
      L09_06: "",
      L09A_06: "",
      L09B_06: "",
      L09C_06: "",
      L02_07: "",
      L03_07: "",
      L04_07: "",
      L05_07: "",
      L06_07: "",
      L07_07: "",
      L08_07: "",
      L09_07: "",
      L09A_07: "",
      L09B_07: "",
      L09C_07: "",
      L02_08: "",
      L03_08: "",
      L04_08: "",
      L05_08: "",
      L06_08: "",
      L07_08: "",
      L08_08: "",
      L09_08: "",
      L09A_08: "",
      L09B_08: "",
      L09C_08: "",
      L02_09: "",
      L03_09: "",
      L04_09: "",
      L05_09: "",
      L06_09: "",
      L07_09: "",
      L08_09: "",
      L09_09: "",
      L09A_09: "",
      L09B_09: "",
      L09C_09: "",
      L02_10: "",
      L03_10: "",
      L04_10: "",
      L05_10: "",
      L06_10: "",
      L07_10: "",
      L08_10: "",
      L09_10: "",
      L09A_10: "",
      L09B_10: "",
      L09C_10: "",
      L02_11: "",
      L03_11: "",
      L04_11: "",
      L05_11: "",
      L06_11: "",
      L07_11: "",
      L08_11: "",
      L09_11: "",
      L09A_11: "",
      L09B_11: "",
      L09C_11: "",
      L02_12: "",
      L03_12: "",
      L04_12: "",
      L05_12: "",
      L06_12: "",
      L07_12: "",
      L08_12: "",
      L09_12: "",
      L09A_12: "",
      L09B_12: "",
      L09C_12: "",
      L02_13: "",
      L03_13: "",
      L04_13: "",
      L05_13: "",
      L06_13: "",
      L07_13: "",
      L08_13: "",
      L09_13: "",
      L09A_13: "",
      L09B_13: "",
      L09C_13: "",
      L02_14: "",
      L03_14: "",
      L04_14: "",
      L05_14: "",
      L06_14: "",
      L07_14: "",
      L08_14: "",
      L09_14: "",
      L09A_14: "",
      L09B_14: "",
      L09C_14: "",
      L02_15: "",
      L03_15: "",
      L04_15: "",
      L05_15: "",
      L06_15: "",
      L07_15: "",
      L08_15: "",
      L09_15: "",
      L09A_15: "",
      L09B_15: "",
      L09C_15: "",
      L02_16: "",
      L03_16: "",
      L04_16: "",
      L05_16: "",
      L06_16: "",
      L07_16: "",
      L08_16: "",
      L09_16: "",
      L09A_16: "",
      L09B_16: "",
      L09C_16: "",
      L02_17: "",
      L03_17: "",
      L04_17: "",
      L05_17: "",
      L06_17: "",
      L07_17: "",
      L08_17: "",
      L09_17: "",
      L09A_17: "",
      L09B_17: "",
      L09C_17: "",
      L02_18: "",
      L03_18: "",
      L04_18: "",
      L05_18: "",
      L06_18: "",
      L07_18: "",
      L08_18: "",
      L09_18: "",
      L09A_18: "",
      L09B_18: "",
      L09C_18: "",
      L02_19: "",
      L03_19: "",
      L04_19: "",
      L05_19: "",
      L06_19: "",
      L07_19: "",
      L08_19: "",
      L09_19: "",
      L09A_19: "",
      L09B_19: "",
      L09C_19: "",
      L02_20: "",
      L03_20: "",
      L04_20: "",
      L05_20: "",
      L06_20: "",
      L07_20: "",
      L08_20: "",
      L09_20: "",
      L09A_20: "",
      L09B_20: "",
      L09C_20: "",
      L02_21: "",
      L03_21: "",
      L04_21: "",
      L05_21: "",
      L06_21: "",
      L07_21: "",
      L08_21: "",
      L09_21: "",
      L09A_21: "",
      L09B_21: "",
      L09C_21: "",
      L02_22: "",
      L03_22: "",
      L04_22: "",
      L05_22: "",
      L06_22: "",
      L07_22: "",
      L08_22: "",
      L09_22: "",
      L09A_22: "",
      L09B_22: "",
      L09C_22: "",
      L02_23: "",
      L03_23: "",
      L04_23: "",
      L05_23: "",
      L06_23: "",
      L07_23: "",
      L08_23: "",
      L09_23: "",
      L09A_23: "",
      L09B_23: "",
      L09C_23: "",
      L02_24: "",
      L03_24: "",
      L04_24: "",
      L05_24: "",
      L06_24: "",
      L07_24: "",
      L08_24: "",
      L09_24: "",
      L09A_24: "",
      L09B_24: "",
      L09C_24: "",
      L02_25: "",
      L03_25: "",
      L04_25: "",
      L05_25: "",
      L06_25: "",
      L07_25: "",
      L08_25: "",
      L09_25: "",
      L09A_25: "",
      L09B_25: "",
      L09C_25: "",
      L02_26: "",
      L03_26: "",
      L04_26: "",
      L05_26: "",
      L06_26: "",
      L07_26: "",
      L08_26: "",
      L09_26: "",
      L09A_26: "",
      L09B_26: "",
      L09C_26: "",
      L02_27: "",
      L03_27: "",
      L04_27: "",
      L05_27: "",
      L06_27: "",
      L07_27: "",
      L08_27: "",
      L09_27: "",
      L09A_27: "",
      L09B_27: "",
      L09C_27: "",
      L02_28: "",
      L03_28: "",
      L04_28: "",
      L05_28: "",
      L06_28: "",
      L07_28: "",
      L08_28: "",
      L09_28: "",
      L09A_28: "",
      L09B_28: "",
      L09C_28: "",
      L02_29: "",
      L03_29: "",
      L04_29: "",
      L05_29: "",
      L06_29: "",
      L07_29: "",
      L08_29: "",
      L09_29: "",
      L09A_29: "",
      L09B_29: "",
      L09C_29: "",
      L02_30: "",
      L03_30: "",
      L04_30: "",
      L05_30: "",
      L06_30: "",
      L07_30: "",
      L08_30: "",
      L09_30: "",
      L09A_30: "",
      L09B_30: "",
      L09C_30: ""
    })

    //set ตามโครงสร้าง REC15Info
    animalList_updated.forEach(function (item) {

      //ปลากด
      if(item.L03 === "60001"){
        rec15.L02_01 = item.L02;
        rec15.L03_01 = item.L03;
        rec15.L04_01 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_01 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_01 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_01 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_01 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_01 = item.L09;
        rec15.L09A_01 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_01 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_01 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลากราย
      if(item.L03 === "60006"){
        rec15.L02_02 = item.L02;
        rec15.L03_02 = item.L03;
        rec15.L04_02 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_02 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_02 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_02 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_02 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_02 = item.L09;
        rec15.L09A_02 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_02 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_02 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลากะพงขาว
      if(item.L03 === "60007"){
        rec15.L02_03 = item.L02;
        rec15.L03_03 = item.L03;
        rec15.L04_03 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_03 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_03 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_03 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_03 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_03 = item.L09;
        rec15.L09A_03 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_03 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_03 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาจาระเม็ด(น้ำจืด)
      if(item.L03 === "60008"){
        rec15.L02_04 = item.L02;
        rec15.L03_04 = item.L03;
        rec15.L04_04 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_04 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_04 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_04 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_04 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_04 = item.L09;
        rec15.L09A_04 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_04 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_04 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาจีน
      if(item.L03 === "60009"){
        rec15.L02_05 = item.L02;
        rec15.L03_05 = item.L03;
        rec15.L04_05 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_05 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_05 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_05 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_05 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_05 = item.L09;
        rec15.L09A_05 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_05 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_05 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาช่อน
      if(item.L03 === "60010"){
        rec15.L02_06 = item.L02;
        rec15.L03_06 = item.L03;
        rec15.L04_06 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_06 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_06 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_06 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_06 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_06 = item.L09;
        rec15.L09A_06 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_06 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_06 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาชะโด
      if(item.L03 === "60011"){
        rec15.L02_07 = item.L02;
        rec15.L03_07 = item.L03;
        rec15.L04_07 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_07 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_07 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_07 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_07 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_07 = item.L09;
        rec15.L09A_07 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_07 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_07 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาดุก
      if(item.L03 === "60012"){
        rec15.L02_08 = item.L02;
        rec15.L03_08 = item.L03;
        rec15.L04_08 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_08 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_08 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_08 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_08 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_08 = item.L09;
        rec15.L09A_08 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_08 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_08 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาดุกบิ๊กอุย
      if(item.L03 === "60013"){
        rec15.L02_09 = item.L02;
        rec15.L03_09 = item.L03;
        rec15.L04_09 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_09 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_09 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_09 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_09 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_09 = item.L09;
        rec15.L09A_09 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_09 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_09 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาตะเพียน
      if(item.L03 === "60014"){
        rec15.L02_10 = item.L02;
        rec15.L03_10 = item.L03;
        rec15.L04_10 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_10 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_10 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_10 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_10 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_10 = item.L09;
        rec15.L09A_10 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_10 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_10 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาทับทิม/นิลแดง
      if(item.L03 === "60015"){
        rec15.L02_11 = item.L02;
        rec15.L03_11 = item.L03;
        rec15.L04_11 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_11 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_11 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_11 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_11 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_11 = item.L09;
        rec15.L09A_11 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_11 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_11 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลานวลจันทร์เทศ
      if(item.L03 === "60017"){
        rec15.L02_12 = item.L02;
        rec15.L03_12 = item.L03;
        rec15.L04_12 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_12 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_12 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_12 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_12 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_12 = item.L09;
        rec15.L09A_12 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_12 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_12 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลานิล
      if(item.L03 === "60018"){
        rec15.L02_13 = item.L02;
        rec15.L03_13 = item.L03;
        rec15.L04_13 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_13 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_13 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_13 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_13 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_13 = item.L09;
        rec15.L09A_13 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_13 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_13 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาไนสำหรับบริโภค
      if(item.L03 === "60019"){
        rec15.L02_14 = item.L02;
        rec15.L03_14 = item.L03;
        rec15.L04_14 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_14 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_14 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_14 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_14 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_14 = item.L09;
        rec15.L09A_14 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_14 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_14 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลายี่สก
      if(item.L03 === "60023"){
        rec15.L02_15 = item.L02;
        rec15.L03_15 = item.L03;
        rec15.L04_15 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_15 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_15 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_15 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_15 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_15 = item.L09;
        rec15.L09A_15 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_15 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_15 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาแรด
      if(item.L03 === "60025"){
        rec15.L02_16 = item.L02;
        rec15.L03_16 = item.L03;
        rec15.L04_16 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_16 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_16 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_16 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_16 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_16 = item.L09;
        rec15.L09A_16 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_16 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_16 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาสลิด
      if(item.L03 === "60026"){
        rec15.L02_17 = item.L02;
        rec15.L03_17 = item.L03;
        rec15.L04_17 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_17 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_17 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_17 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_17 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_17 = item.L09;
        rec15.L09A_17 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_17 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_17 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาสวาย
      if(item.L03 === "60028"){
        rec15.L02_18 = item.L02;
        rec15.L03_18 = item.L03;
        rec15.L04_18 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_18 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_18 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_18 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_18 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_18 = item.L09;
        rec15.L09A_18 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_18 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_18 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาหมอเทศ
      if(item.L03 === "60029"){
        rec15.L02_19 = item.L02;
        rec15.L03_19 = item.L03;
        rec15.L04_19 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_19 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_19 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_19 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_19 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_19 = item.L09;
        rec15.L09A_19 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_19 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_19 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาหมอไทย
      if(item.L03 === "60030"){
        rec15.L02_20 = item.L02;
        rec15.L03_20 = item.L03;
        rec15.L04_20 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_20 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_20 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_20 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_20 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_20 = item.L09;
        rec15.L09A_20 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_20 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_20 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาสวยงามต่าง ๆ 
      if(item.L03 === "60035"){
        rec15.L02_21 = item.L02;
        rec15.L03_21 = item.L03;
        rec15.L04_21 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_21 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_21 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_21 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_21 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_21 = item.L09;
        rec15.L09A_21 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_21 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_21 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลากัด
      if(item.L03 === "60041"){
        rec15.L02_22 = item.L02;
        rec15.L03_22 = item.L03;
        rec15.L04_22 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_22 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_22 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_22 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_22 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_22 = item.L09;
        rec15.L09A_22 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_22 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_22 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //กบ
      if(item.L03 === "69036"){
        rec15.L02_23 = item.L02;
        rec15.L03_23 = item.L03;
        rec15.L04_23 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_23 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_23 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_23 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_23 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_23 = item.L09;
        rec15.L09A_23 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_23 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_23 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //กุ้งก้ามกราม
      if(item.L03 === "69037"){
        rec15.L02_24 = item.L02;
        rec15.L03_24 = item.L03;
        rec15.L04_24 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_24 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_24 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_24 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_24 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_24 = item.L09;
        rec15.L09A_24 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_24 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_24 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //กุ้งกุลาดำ (เฉพาะที่เลี้ยงในพื้นที่น้ำจืด)
      if(item.L03 === "69038"){
        rec15.L02_25 = item.L02;
        rec15.L03_25 = item.L03;
        rec15.L04_25 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_25 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_25 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_25 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_25 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_25 = item.L09;
        rec15.L09A_25 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_25 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_25 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //กุ้งขาว (แวนนาไม) 
      if(item.L03 === "69039"){
        rec15.L02_26 = item.L02;
        rec15.L03_26 = item.L03;
        rec15.L04_26 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_26 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_26 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_26 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_26 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_26 = item.L09;
        rec15.L09A_26 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_26 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_26 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //กุ้งน้ำจืดอื่นๆ
      if(item.L03 === "69040"){
        rec15.L02_27 = item.L02;
        rec15.L03_27 = item.L03;
        rec15.L04_27 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_27 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_27 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_27 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_27 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_27 = item.L09;
        rec15.L09A_27 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_27 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_27 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //จระเข้ (น้ำจืด)
      if(item.L03 === "69041"){
        rec15.L02_28 = item.L02;
        rec15.L03_28 = item.L03;
        rec15.L04_28 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_28 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_28 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_28 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_28 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_28 = item.L09;
        rec15.L09A_28 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_28 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_28 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ปลาบึก
      if(item.L03 === "60020"){
        rec15.L02_29 = item.L02;
        rec15.L03_29 = item.L03;
        rec15.L04_29 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_29 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_29 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_29 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_29 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_29 = item.L09;
        rec15.L09A_29 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_29 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_29 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

      //ตะพาบน้ำ
      if(item.L03 === "69042"){
        rec15.L02_30 = item.L02;
        rec15.L03_30 = item.L03;
        rec15.L04_30 = item.L04 !== "" ? item.L04 : "0";
        rec15.L05_30 = item.L05 !== "" ? item.L05 : "0";
        rec15.L06_30 = item.L06 !== "" ? item.L06 : "0";
        rec15.L07_30 = item.L07 !== "" ? item.L07 : "0";
        rec15.L08_30 = item.L08 !== "" ? item.L08 : "0";
        rec15.L09_30 = item.L09;
        rec15.L09A_30 = item.L09A !== "" ? item.L09A.padStart(5, '0') : "";
        rec15.L09B_30 = item.L09B !== "" ? item.L09B.padStart(1, '0') : "";
        rec15.L09C_30 = item.L09C !== "" ? item.L09C.padStart(2, '0') : "";
      }

    });
    
    const body = rec15
    //console.log(body);

    //consistency check
    let isvalid = true;

    //ทุกสัตว์น้ำต้องมีการระบุข้อมูลทุกตัว
    let implist: REC15Model[] = animalList_updated.filter((a) => {
      return (
        a.L04 === "1" ||
        a.L05 === "1" ||
        a.L06 === "1" ||
        a.L07 === "1" ||
        a.L08 === "1"
      );
    })
    if(animalList_updated.length !== implist.length){
      setShowWarningL01("")
      isvalid = false
    }
    else{
      setShowWarningL01("none")
    }

    //ถ้า L04_01 = 1 แล้ว --> ในรายการมีอย่างน้อย 1 รายการที่เลือกบ่อ 
    let implist_L04: REC15Model[] = animalList_updated.filter((a) => {
      return (
        a.L04 === "1"
      );
    })
    if (implist_L04.length > 0) {

      //A16 ≠ blank
      if (Number(valueA16) > 0) {
        setShowWarningA16Blank("none")
      }
      else {
        setShowWarningA16Blank("")
        isvalid = false
      }

      //ผลรวมเนื้อที่ของที่เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด > 0 และ ≤ A16
      if (SUM_L09 > 0 && SUM_L09 <= Number(valueA16)) {
        setShowWarningA16("none")
      }
      else {
        setShowWarningA16("")
        isvalid = false
      }

    }
    

    //ผ่านการ consistency check
    if (isvalid) {

      try {

        const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
        if (api.authToken) {
          let auth: string = api.authToken;

          const headers = {
            Authorization: "Basic " + auth,
            "Content-Type": "application/json;charset=UTF-8",
          };

          //url updateREC15
          let url_updateREC15_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_updateREC15_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC15";
          }

          //api updateREC15
          await axios
            .post(url_updateREC15_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  //setPage(page + 1);
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });

          //consistency check ===============================================================
          let rec01list: REC01Info[] = [];
          // url getREC01List
          let url_getREC01List_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_getREC01List_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
          }

          // api getREC01List
          await axios
            .get(url_getREC01List_api, { headers: headers, })
            .then((res) => {
              if (res.status === 200) {
                rec01list = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
              }
            })
            .catch((err) => { console.log("AXIOS ERROR (getREC01List in EAquaculture2): ", err); }); 


          //เช็คจาก A02_4
          if(rec01list[0].A02_4 === "1"){
            setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
          }
          else{
            setPage(18); //ไปตอนที่ 7 เครื่องจักร
          }


        }

      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 5.1 การเลี้ยงสัตว์น้ำชนิดสำคัญ): ", error);
      }

    }
    else {
      //ไม่ต้องทำอะไร
    }

  }

  //สำหรับสิทธิ์ 3 , 7
  async function NextOnClick(){

    try {

      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        //consistency check ===============================================================
        let rec01list: REC01Info[] = [];
        // url getREC01List
        let url_getREC01List_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_getREC01List_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
        }

        // api getREC01List
        await axios
          .get(url_getREC01List_api, { headers: headers, })
          .then((res) => {
            if (res.status === 200) {
              rec01list = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
            }
          })
          .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in EAquaculture2): ", err); }); 


        //เช็คจาก A02_4
        if(rec01list[0].A02_4 === "1"){
          setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
        }
        else{
          setPage(18); //ไปตอนที่ 7 เครื่องจักร
        }


      }

    } catch (error) {
      console.error("NextOnClick ERROR (ตอนที่ 5.1 การเลี้ยงสัตว์น้ำชนิดสำคัญ): ", error);
    }

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
                        ตอนที่ 5.1 การเลี้ยงสัตว์น้ำชนิดสำคัญ
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl522"
                        aria-expanded="false"
                        aria-controls="collapseControl522"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl522">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการเลี้ยงสัตว์น้ำ ชนิดสำคัญหรือไม่ (ระบบกำหนดให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>L01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_L01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_L01"
                                  type="radio"
                                  value={option.value}
                                  id={`rd_L01${index}`}
                                  checked={option.value === inputL01}
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_L01${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Col>
                      </Row>

                      <Row >
                        <Col md={12}>

                          <Row className="mt-2 question-title">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                2. ให้บันทึกรายละเอียดการเลี้ยงสัตว์น้ำชนิดสำคัญ
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 ">
                            <Col md={12}>
                              <label >
                                (ระบบกำหนดให้ตามที่บันทึกไว้ในตอนที่ 5)
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">

                            {animalList &&
                              animalList.map((item, index) => {
                                return (
                                  <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                                    <a onClick={() => OpenModalItem(item.L03)} >
                                      <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                        <div className={`card-body ${(item.L04 === "1" || item.L05 === "1" || item.L06 === "1" || item.L07 === "1" || item.L08 === "1") ? "box-list-success" : "box-list-warning"} `}>
                                          <Row>
                                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                                              <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}>  {(item.L04 === "1" || item.L05 === "1" || item.L06 === "1" || item.L07 === "1" || item.L08 === "1") && (<i className='bx bxs-check-square fs-4'></i>)}  {index + 1}. {item.L02} ({item.L03}) </p>

                                            </div>
                                          </Row>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                );
                              })}

                          </Row>

                          <Row>
                            <Col md={12}>
                              <div className="mt-3" style={{ display: showWarningL01 }}><label className="text-danger">กรุณาบันทึกรายละเอียดการเลี้ยงสัตว์น้ำชนิดสำคัญ</label></div>
                              <div className="mt-3" style={{ display: showWarningA16Blank}}><label className="text-danger">กรุณาระบุ เนื้อที่ของที่เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด A16 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
                              <div className="mt-3" style={{ display: showWarningA16}}><label className="text-danger">ผลรวมเนื้อที่ของที่เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด ต้อง มากกว่า 0 และ น้อยกว่าหรือเท่ากับ A16  </label></div>
                            </Col>
                          </Row>


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
                L02 {inputL02}
              </label>
              <br />
            </Col>
            <Col md={12}>

              <Row>
                <Col md={12} className="mt-3">
                  <label> L03 รหัส</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={inputL03}
                  />
                </Col>

                <Col md={12} className="mt-3">
                  <label> ลักษณะหน่วยเลี้ยง (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={2} className="mt-3">
                  <label> L04 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="L04"
                        onChange={L04OnChange}
                        checked={inputL04 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="L04">
                        {" "}
                        บ่อ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={2} className="mt-3">
                  <label> L05 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="L05"
                        onChange={L05OnChange}
                        checked={inputL05 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="L05">
                        {" "}
                        นา
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={2} className="mt-3">
                  <label> L06 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="L06"
                        onChange={L06OnChange}
                        checked={inputL06 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="L06">
                        {" "}
                        ร่องสวน
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={2} className="mt-3">
                  <label> L07 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="L07"
                        onChange={L07OnChange}
                        checked={inputL07 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="L07">
                        {" "}
                        กระชัง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={2} className="mt-3">
                  <label> L08 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="L08"
                        onChange={L08OnChange}
                        checked={inputL08 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="L08">
                        {" "}
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </Col>

              </Row>

              <Row>
                <Col md={12}>
                  <div className="mt-3" style={{ display: showWarningL04_08 }}><label className="text-danger">กรุณาเลือก L04 ถึง L08 อย่างน้อย 1 รายการ</label></div>
                </Col>
              </Row>
                
              <Row>

                <Col md={12} className="mt-5">
                  <label>ถ้าเลี้ยงเป็น “บ่อ” ให้บันทึกเนื้อที่ผิวน้ำทุกบ่อรวมกัน</label>
                </Col>

                <Col md={4} className="mt-3">
                  <label> L09</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputL09A) >= 0 &&
                        Number(inputL09A) <= 99999 && Number.isInteger(Number(inputL09A))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99999}
                      onChange={L09AOnChange}
                      value={inputL09A}
                      disabled={disabledL09}
                    />
                    <span className="input-group-text">
                      ไร่
                    </span>
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputL09B) >= 0 &&
                        Number(inputL09B) <= 3 && Number.isInteger(Number(inputL09B))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={3}
                      onChange={L09BOnChange}
                      value={inputL09B}
                      disabled={disabledL09}
                    />
                    <span className="input-group-text">
                      งาน
                    </span>
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputL09C) >= 0 &&
                        Number(inputL09C) <= 99 && Number.isInteger(Number(inputL09C))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99}
                      onChange={L09COnChange}
                      value={inputL09C}
                      disabled={disabledL09}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                  
                  <div className="mt-3" style={{ display: showWarningL09 }}><label className="text-danger">กรุณาระบุ L09</label></div>
                
                </Col>
                
              </Row>

            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
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
                onClick={()=>SaveAnimal()}
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
