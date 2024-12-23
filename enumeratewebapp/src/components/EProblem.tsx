import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01, _Q03, _Q06, _Q07, _Q08, _Q22, _Q23, _R01_1, _R01_2 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { Day, Month, YearBirth } from "./DayMonthYear";
import { REC21Info } from "../model/REC21Info";
import { REC01Info } from "../model/REC01Info";

export default function EProblem() {
  const { enumeratesk2, page, setPage} = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  const [REC21, setREC21] = useState<REC21Info>();

  //state : input / input modal
  const [inputR01, setInputR01] = useState<string>("");
  const [inputR01_1, setInputR01_1] = useState<string>("");
  const [inputR01_2, setInputR01_2] = useState<string>("");
  const [inputR01_3, setInputR01_3] = useState<string>("");
  const [inputR01_4, setInputR01_4] = useState<string>("");
  const [inputR01_5, setInputR01_5] = useState<string>("");

  const [inputR02, setInputR02] = useState<string>("");
  const [inputR02_1, setInputR02_1] = useState<string>("");
  const [inputR02_2, setInputR02_2] = useState<string>("");
  const [inputR02_3, setInputR02_3] = useState<string>("");
  const [inputR02_4, setInputR02_4] = useState<string>("");
  const [inputR02_5, setInputR02_5] = useState<string>("");

  const [inputR03, setInputR03] = useState<string>("");
  const [inputR03_1, setInputR03_1] = useState<string>("");
  const [inputR03_2, setInputR03_2] = useState<string>("");
  const [inputR03_3, setInputR03_3] = useState<string>("");
  const [inputR03_4, setInputR03_4] = useState<string>("");
  const [inputR03_5, setInputR03_5] = useState<string>("");

  const [inputR04, setInputR04] = useState<string>("");
  const [inputR04_1, setInputR04_1] = useState<string>("");
  const [inputR04_2, setInputR04_2] = useState<string>("");
  const [inputR04_3, setInputR04_3] = useState<string>("");
  const [inputR04_4, setInputR04_4] = useState<string>("");
  const [inputR04_5, setInputR04_5] = useState<string>("");

  const [inputR05, setInputR05] = useState<string>("");
  const [inputR05_1, setInputR05_1] = useState<string>("");
  const [inputR05_2, setInputR05_2] = useState<string>("");
  const [inputR05_3, setInputR05_3] = useState<string>("");
  const [inputR05_4, setInputR05_4] = useState<string>("");
  const [inputR05_5, setInputR05_5] = useState<string>("");

  const [inputR06, setInputR06] = useState<string>("");
  const [inputR06_1, setInputR06_1] = useState<string>("");
  const [inputR06_2, setInputR06_2] = useState<string>("");
  const [inputR06_3, setInputR06_3] = useState<string>("");
  const [inputR06_4, setInputR06_4] = useState<string>("");
  const [inputR06_5, setInputR06_5] = useState<string>("");

  const [inputR07, setInputR07] = useState<string>("");
  const [inputR07_1, setInputR07_1] = useState<string>("");
  const [inputR07_2, setInputR07_2] = useState<string>("");
  const [inputR07_3, setInputR07_3] = useState<string>("");
  const [inputR07_4, setInputR07_4] = useState<string>("");
  const [inputR07_5, setInputR07_5] = useState<string>("");

  const [inputR08, setInputR08] = useState<string>("");
  const [inputR08_1, setInputR08_1] = useState<string>("");
  const [inputR08_2, setInputR08_2] = useState<string>("");
  const [inputR08_3, setInputR08_3] = useState<string>("");
  const [inputR08_4, setInputR08_4] = useState<string>("");
  const [inputR08_5, setInputR08_5] = useState<string>("");

  const [inputR09, setInputR09] = useState<string>("");
  const [inputR09_1, setInputR09_1] = useState<string>("");
  const [inputR09_2, setInputR09_2] = useState<string>("");
  const [inputR09_3, setInputR09_3] = useState<string>("");
  const [inputR09_4, setInputR09_4] = useState<string>("");
  const [inputR09_5, setInputR09_5] = useState<string>("");

  const [inputR10, setInputR10] = useState<string>("");
  const [inputR10_1, setInputR10_1] = useState<string>("");
  const [inputR10_2, setInputR10_2] = useState<string>("");
  const [inputR10_3, setInputR10_3] = useState<string>("");
  const [inputR10_4, setInputR10_4] = useState<string>("");
  const [inputR10_5, setInputR10_5] = useState<string>("");

  const [inputR11, setInputR11] = useState<string>("");
  const [inputR11_1, setInputR11_1] = useState<string>("");
  const [inputR11_2, setInputR11_2] = useState<string>("");
  const [inputR11_3, setInputR11_3] = useState<string>("");
  const [inputR11_4, setInputR11_4] = useState<string>("");
  const [inputR11_5, setInputR11_5] = useState<string>("");

  const [inputR12, setInputR12] = useState<string>("");
  const [inputR13, setInputR13] = useState<string>("");
  const [inputR14, setInputR14] = useState<string>("");
  const [inputR15, setInputR15] = useState<string>("");
  const [inputR16, setInputR16] = useState<string>("");
  const [inputR17, setInputR17] = useState<string>("");
  const [inputR18, setInputR18] = useState<string>("");
  const [inputR19, setInputR19] = useState<string>("");
  const [inputR20, setInputR20] = useState<string>("");
  const [inputR21, setInputR21] = useState<string>("");
  const [inputR22, setInputR22] = useState<string>("");
  const [inputR23, setInputR23] = useState<string>("");

  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {

    console.log("load page EProblem");

    getREC21()

  }, [page === 24]);

  async function getREC21() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC21/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                //set state
                let item: REC21Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                setREC21(item)

                setInputR01(item?.R01!)
                setInputR01_1(item?.R01_1!)
                setInputR01_2(item?.R01_2!)
                setInputR01_3(item?.R01_3!)
                setInputR01_4(item?.R01_4!)
                setInputR01_5(item?.R01_5!)
                setInputR02(item?.R02!)
                setInputR02_1(item?.R02_1!)
                setInputR02_2(item?.R02_2!)
                setInputR02_3(item?.R02_3!)
                setInputR02_4(item?.R02_4!)
                setInputR02_5(item?.R02_5!)
                setInputR03(item?.R03!)
                setInputR03_1(item?.R03_1!)
                setInputR03_2(item?.R03_2!)
                setInputR03_3(item?.R03_3!)
                setInputR03_4(item?.R03_4!)
                setInputR03_5(item?.R03_5!)
                setInputR04(item?.R04!)
                setInputR04_1(item?.R04_1!)
                setInputR04_2(item?.R04_2!)
                setInputR04_3(item?.R04_3!)
                setInputR04_4(item?.R04_4!)
                setInputR04_5(item?.R04_5!)
                setInputR05(item?.R05!)
                setInputR05_1(item?.R05_1!)
                setInputR05_2(item?.R05_2!)
                setInputR05_3(item?.R05_3!)
                setInputR05_4(item?.R05_4!)
                setInputR05_5(item?.R05_5!)
                setInputR06(item?.R06!)
                setInputR06_1(item?.R06_1!)
                setInputR06_2(item?.R06_2!)
                setInputR06_3(item?.R06_3!)
                setInputR06_4(item?.R06_4!)
                setInputR06_5(item?.R06_5!)
                setInputR07(item?.R07!)
                setInputR07_1(item?.R07_1!)
                setInputR07_2(item?.R07_2!)
                setInputR07_3(item?.R07_3!)
                setInputR07_4(item?.R07_4!)
                setInputR07_5(item?.R07_5!)
                setInputR08(item?.R08!)
                setInputR08_1(item?.R08_1!)
                setInputR08_2(item?.R08_2!)
                setInputR08_3(item?.R08_3!)
                setInputR08_4(item?.R08_4!)
                setInputR08_5(item?.R08_5!)
                setInputR09(item?.R09!)
                setInputR09_1(item?.R09_1!)
                setInputR09_2(item?.R09_2!)
                setInputR09_3(item?.R09_3!)
                setInputR09_4(item?.R09_4!)
                setInputR09_5(item?.R09_5!)
                setInputR10(item?.R10!)
                setInputR10_1(item?.R10_1!)
                setInputR10_2(item?.R10_2!)
                setInputR10_3(item?.R10_3!)
                setInputR10_4(item?.R10_4!)
                setInputR10_5(item?.R10_5!)
                setInputR11(item?.R11!)
                setInputR11_1(item?.R11_1!)
                setInputR11_2(item?.R11_2!)
                setInputR11_3(item?.R11_3!)
                setInputR11_4(item?.R11_4!)
                setInputR11_5(item?.R11_5!)
                setInputR12(item?.R12!)
                setInputR13(item?.R13!)
                setInputR14(item?.R14!)
                setInputR15(item?.R15!)
                setInputR16(item?.R16!)
                setInputR17(item?.R17!)
                setInputR18(item?.R18!)
                setInputR19(item?.R19!)
                setInputR20(item?.R20!)
                setInputR21(item?.R21!)
                setInputR22(item?.R22!)
                setInputR23(item?.R23!)

                //set validate ---------------------------------------------------
                if (item?.R01! === "1") {
                  setDisabledR01(false)
                  if (item?.R01_2! === "1") {
                    setDisabledR01_2(true)
                  } else {
                    setDisabledR01_2(false)
                  }
                } else {
                  setDisabledR01(true)
                  setDisabledR01_2(true)
                }

                if (item?.R02! === "1") {
                  setDisabledR02(false)
                  if (item?.R02_2! === "1") {
                    setDisabledR02_2(true)
                  } else {
                    setDisabledR02_2(false)
                  }
                } else {
                  setDisabledR02(true)
                  setDisabledR02_2(true)
                }

                if (item?.R03! === "1") {
                  setDisabledR03(false)
                  if (item?.R03_2! === "1") {
                    setDisabledR03_2(true)
                  } else {
                    setDisabledR03_2(false)
                  }
                } else {
                  setDisabledR03(true)
                  setDisabledR03_2(true)
                }

                if (item?.R04! === "1") {
                  setDisabledR04(false)
                  if (item?.R04_2! === "1") {
                    setDisabledR04_2(true)
                  } else {
                    setDisabledR04_2(false)
                  }
                } else {
                  setDisabledR04(true)
                  setDisabledR04_2(true)
                }

                if (item?.R05! === "1") {
                  setDisabledR05(false)
                  if (item?.R05_2! === "1") {
                    setDisabledR05_2(true)
                  } else {
                    setDisabledR05_2(false)
                  }
                } else {
                  setDisabledR05(true)
                  setDisabledR05_2(true)
                }

                if (item?.R06! === "1") {
                  setDisabledR06(false)
                  if (item?.R06_2! === "1") {
                    setDisabledR06_2(true)
                  } else {
                    setDisabledR06_2(false)
                  }
                } else {
                  setDisabledR06(true)
                  setDisabledR06_2(true)
                }

                if (item?.R07! === "1") {
                  setDisabledR07(false)
                  if (item?.R07_2! === "1") {
                    setDisabledR07_2(true)
                  } else {
                    setDisabledR07_2(false)
                  }
                } else {
                  setDisabledR07(true)
                  setDisabledR07_2(true)
                }

                if (item?.R08! === "1") {
                  setDisabledR08(false)
                  if (item?.R08_2! === "1") {
                    setDisabledR08_2(true)
                  } else {
                    setDisabledR08_2(false)
                  }
                } else {
                  setDisabledR08(true)
                  setDisabledR08_2(true)
                }

                if (item?.R09! === "1") {
                  setDisabledR09(false)
                  if (item?.R09_2! === "1") {
                    setDisabledR09_2(true)
                  } else {
                    setDisabledR09_2(false)
                  }
                } else {
                  setDisabledR09(true)
                  setDisabledR09_2(true)
                }

                if (item?.R10! === "1") {
                  setDisabledR10(false)
                  if (item?.R10_2! === "1") {
                    setDisabledR10_2(true)
                  } else {
                    setDisabledR10_2(false)
                  }
                } else {
                  setDisabledR10(true)
                  setDisabledR10_2(true)
                }

                if (item?.R11! === "1") {
                  setDisabledR11(false)
                  if (item?.R11_2! === "1") {
                    setDisabledR11_2(true)
                  } else {
                    setDisabledR11_2(false)
                  }
                } else {
                  setDisabledR11(true)
                  setDisabledR11_2(true)
                }

                //----------------------------------------------------------------


              }
 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC21): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC21): ", err);
      }
    }
  }


  //state warning
  const [showWarningR01, setShowWarningR01] = useState<string>("none"); // ปิด
  const [showWarningR01_2, setShowWarningR01_2] = useState<string>("none"); // ปิด
  const [showWarningR02, setShowWarningR02] = useState<string>("none"); // ปิด
  const [showWarningR02_2, setShowWarningR02_2] = useState<string>("none"); // ปิด
  const [showWarningR03, setShowWarningR03] = useState<string>("none"); // ปิด
  const [showWarningR03_2, setShowWarningR03_2] = useState<string>("none"); // ปิด
  const [showWarningR04, setShowWarningR04] = useState<string>("none"); // ปิด
  const [showWarningR04_2, setShowWarningR04_2] = useState<string>("none"); // ปิด
  const [showWarningR05, setShowWarningR05] = useState<string>("none"); // ปิด
  const [showWarningR05_2, setShowWarningR05_2] = useState<string>("none"); // ปิด
  const [showWarningR06, setShowWarningR06] = useState<string>("none"); // ปิด
  const [showWarningR06_2, setShowWarningR06_2] = useState<string>("none"); // ปิด
  const [showWarningR07, setShowWarningR07] = useState<string>("none"); // ปิด
  const [showWarningR07_2, setShowWarningR07_2] = useState<string>("none"); // ปิด
  const [showWarningR08, setShowWarningR08] = useState<string>("none"); // ปิด
  const [showWarningR08_2, setShowWarningR08_2] = useState<string>("none"); // ปิด
  const [showWarningR09, setShowWarningR09] = useState<string>("none"); // ปิด
  const [showWarningR09_2, setShowWarningR09_2] = useState<string>("none"); // ปิด
  const [showWarningR10, setShowWarningR10] = useState<string>("none"); // ปิด
  const [showWarningR10_2, setShowWarningR10_2] = useState<string>("none"); // ปิด
  const [showWarningR11, setShowWarningR11] = useState<string>("none"); // ปิด
  const [showWarningR11_2, setShowWarningR11_2] = useState<string>("none"); // ปิด

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("1. ฝนแล้ง/ขาดแหล่งน้ำ");
  const handleClose = () => {
    if(inputR01 === "1"){
      //ถ้า R01 = 1 แล้ว R01_1 - R01_5 ≠ blank
      if(inputR01_1 !== "" && inputR01_2 !== "" && inputR01_3 !== "" && inputR01_4 !== "" && inputR01_5 !== "" ){

        if(inputR01_2 === "0"){
          //ได้รับ --> ถ้า R01_2 = 0 แล้ว R01_3 - R01_5 อย่างน้อย 1 รายการ = 1
          if(inputR01_3 === "1" || inputR01_4 === "1" || inputR01_5 === "1"){         
            setShowWarningR01_2("none") //ปิด warning
            setShow(false);
          }
          else{
            setShowWarningR01_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR01("none") //ปิด warning
          setShow(false);
        }
        setShowWarningR01("none") //ปิด warning
        
      }
      else{
        setShowWarningR01("") //เปิด warning
      }
    }
    else{
      setShow(false);
    }  
  }
  const handleShow = () => setShow(true);
  const handleCancelAndClose = () => {
    //กลับมาใช้ค่าเดิม
    setInputR01(inputR01)
    setInputR01_1(inputR01_1)
    setInputR01_2(inputR01_2)
    setInputR01_3(inputR01_3)
    setInputR01_4(inputR01_4)
    setInputR01_5(inputR01_5)
    setShow(false);
  };

  //modal popup 2
  const [show2, setShow2] = useState(false);
  const [titleModal2, setTitleModal2] = useState("2. น้ำท่วม โคลนถล่ม พายุ");
  const handleClose2 = () => {
    if(inputR02 === "1"){
      //ถ้า R02 = 1 แล้ว R02_1 - R02_5 ≠ blank
      if(inputR02_1 !== "" && inputR02_2 !== "" && inputR02_3 !== "" && inputR02_4 !== "" && inputR02_5 !== "" ){

        if(inputR02_2 === "0"){
          //ได้รับ --> ถ้า R02_2 = 0 แล้ว R02_3 - R02_5 อย่างน้อย 1 รายการ = 1
          if(inputR02_3 === "1" || inputR02_4 === "1" || inputR02_5 === "1"){         
            setShowWarningR02_2("none") //ปิด warning
            setShow2(false);
          }
          else{
            setShowWarningR02_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR02("none") //ปิด warning
          setShow2(false);
        }
        setShowWarningR02("none") //ปิด warning
        
      }
      else{
        setShowWarningR02("") //เปิด warning
      }
    }
    else{
      setShow2(false);
    }  
  }
  const handleShow2 = () => setShow2(true);
  const handleCancelAndClose2 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR02(inputR02)
    setInputR02_1(inputR02_1)
    setInputR02_2(inputR02_2)
    setInputR02_3(inputR02_3)
    setInputR02_4(inputR02_4)
    setInputR02_5(inputR02_5)
    setShow2(false);
  };

  //modal popup 3
  const [show3, setShow3] = useState(false);
  const [titleModal3, setTitleModal3] = useState("3. โรคที่ทำให้พืช สัตว์ สัตว์น้ำ เสียหาย ล้มตาย");
  const handleClose3 = () => {
    if(inputR03 === "1"){
      //ถ้า R03 = 1 แล้ว R03_1 - R03_5 ≠ blank
      if(inputR03_1 !== "" && inputR03_2 !== "" && inputR03_3 !== "" && inputR03_4 !== "" && inputR03_5 !== "" ){

        if(inputR03_2 === "0"){
          //ได้รับ --> ถ้า R03_2 = 0 แล้ว R03_3 - R03_5 อย่างน้อย 1 รายการ = 1
          if(inputR03_3 === "1" || inputR03_4 === "1" || inputR03_5 === "1"){         
            setShowWarningR03_2("none") //ปิด warning
            setShow3(false);
          }
          else{
            setShowWarningR03_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR03("none") //ปิด warning
          setShow3(false);
        }
        setShowWarningR03("none") //ปิด warning
        
      }
      else{
        setShowWarningR03("") //เปิด warning
      }
    }
    else{
      setShow3(false);
    }  
  }
  const handleShow3 = () => setShow3(true);
  const handleCancelAndClose3 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR03(inputR03)
    setInputR03_1(inputR03_1)
    setInputR03_2(inputR03_2)
    setInputR03_3(inputR03_3)
    setInputR03_4(inputR03_4)
    setInputR03_5(inputR03_5)
    setShow3(false);
  };

  //modal popup 4
  const [show4, setShow4] = useState(false);
  const [titleModal4, setTitleModal4] = useState("4. ได้ผลผลิตน้อยเกินไป");
  const handleClose4 = () => {
    if(inputR04 === "1"){
      //ถ้า R04 = 1 แล้ว R04_1 - R04_5 ≠ blank
      if(inputR04_1 !== "" && inputR04_2 !== "" && inputR04_3 !== "" && inputR04_4 !== "" && inputR04_5 !== "" ){

        if(inputR04_2 === "0"){
          //ได้รับ --> ถ้า R04_2 = 0 แล้ว R04_3 - R04_5 อย่างน้อย 1 รายการ = 1
          if(inputR04_3 === "1" || inputR04_4 === "1" || inputR04_5 === "1"){         
            setShowWarningR04_2("none") //ปิด warning
            setShow4(false);
          }
          else{
            setShowWarningR04_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR04("none") //ปิด warning
          setShow4(false);
        }
        setShowWarningR04("none") //ปิด warning
        
      }
      else{
        setShowWarningR04("") //เปิด warning
      }
    }
    else{
      setShow4(false);
    }  
  }
  const handleShow4 = () => setShow4(true);
  const handleCancelAndClose4 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR04(inputR04)
    setInputR04_1(inputR04_1)
    setInputR04_2(inputR04_2)
    setInputR04_3(inputR04_3)
    setInputR04_4(inputR04_4)
    setInputR04_5(inputR04_5)
    setShow4(false);
  };

  //modal popup 5
  const [show5, setShow5] = useState(false);
  const [titleModal5, setTitleModal5] = useState("5. ราคาผลผลิตตกต่ำ ผลผลิตล้นตลาด");
  const handleClose5 = () => {
    if(inputR05 === "1"){
      //ถ้า R05 = 1 แล้ว R05_1 - R05_5 ≠ blank
      if(inputR05_1 !== "" && inputR05_2 !== "" && inputR05_3 !== "" && inputR05_4 !== "" && inputR05_5 !== "" ){

        if(inputR05_2 === "0"){
          //ได้รับ --> ถ้า R05_2 = 0 แล้ว R05_3 - R05_5 อย่างน้อย 1 รายการ = 1
          if(inputR05_3 === "1" || inputR05_4 === "1" || inputR05_5 === "1"){         
            setShowWarningR05_2("none") //ปิด warning
            setShow5(false);
          }
          else{
            setShowWarningR05_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR05("none") //ปิด warning
          setShow5(false);
        }
        setShowWarningR05("none") //ปิด warning
        
      }
      else{
        setShowWarningR05("") //เปิด warning
      }
    }
    else{
      setShow5(false);
    }  
  }
  const handleShow5 = () => setShow5(true);
  const handleCancelAndClose5 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR05(inputR05)
    setInputR05_1(inputR05_1)
    setInputR05_2(inputR05_2)
    setInputR05_3(inputR05_3)
    setInputR05_4(inputR05_4)
    setInputR05_5(inputR05_5)
    setShow5(false);
  };

  //modal popup 6
  const [show6, setShow6] = useState(false);
  const [titleModal6, setTitleModal6] = useState("6. พ่อค้าคนกลาง นายทุนเอารัดเอาเปรียบ");
  const handleClose6 = () => {
    if(inputR06 === "1"){
      //ถ้า R06 = 1 แล้ว R06_1 - R06_5 ≠ blank
      if(inputR06_1 !== "" && inputR06_2 !== "" && inputR06_3 !== "" && inputR06_4 !== "" && inputR06_5 !== "" ){

        if(inputR06_2 === "0"){
          //ได้รับ --> ถ้า R06_2 = 0 แล้ว R06_3 - R06_5 อย่างน้อย 1 รายการ = 1
          if(inputR06_3 === "1" || inputR06_4 === "1" || inputR06_5 === "1"){         
            setShowWarningR06_2("none") //ปิด warning
            setShow6(false);
          }
          else{
            setShowWarningR06_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR06("none") //ปิด warning
          setShow6(false);
        }
        setShowWarningR06("none") //ปิด warning
        
      }
      else{
        setShowWarningR06("") //เปิด warning
      }
    }
    else{
      setShow6(false);
    }  
  }
  const handleShow6 = () => setShow6(true);
  const handleCancelAndClose6 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR06(inputR06)
    setInputR06_1(inputR06_1)
    setInputR06_2(inputR06_2)
    setInputR06_3(inputR06_3)
    setInputR06_4(inputR06_4)
    setInputR06_5(inputR06_5)
    setShow6(false);
  };

  //modal popup 7
  const [show7, setShow7] = useState(false);
  const [titleModal7, setTitleModal7] = useState("7. ขาดแคลนแรงงาน");
  const handleClose7 = () => {
    if(inputR07 === "1"){
      //ถ้า R07 = 1 แล้ว R07_1 - R07_5 ≠ blank
      if(inputR07_1 !== "" && inputR07_2 !== "" && inputR07_3 !== "" && inputR07_4 !== "" && inputR07_5 !== "" ){

        if(inputR07_2 === "0"){
          //ได้รับ --> ถ้า R07_2 = 0 แล้ว R07_3 - R07_5 อย่างน้อย 1 รายการ = 1
          if(inputR07_3 === "1" || inputR07_4 === "1" || inputR07_5 === "1"){         
            setShowWarningR07_2("none") //ปิด warning
            setShow7(false);
          }
          else{
            setShowWarningR07_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR07("none") //ปิด warning
          setShow7(false);
        }
        setShowWarningR07("none") //ปิด warning
        
      }
      else{
        setShowWarningR07("") //เปิด warning
      }
    }
    else{
      setShow7(false);
    }  
  }
  const handleShow7 = () => setShow7(true);
  const handleCancelAndClose7 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR07(inputR07)
    setInputR07_1(inputR07_1)
    setInputR07_2(inputR07_2)
    setInputR07_3(inputR07_3)
    setInputR07_4(inputR07_4)
    setInputR07_5(inputR07_5)
    setShow7(false);
  };

  //modal popup 8
  const [show8, setShow8] = useState(false);
  const [titleModal8, setTitleModal8] = useState("8. ค่าแรงสูงขึ้นมาก");
  const handleClose8 = () => {
    if(inputR08 === "1"){
      //ถ้า R08 = 1 แล้ว R08_1 - R08_5 ≠ blank
      if(inputR08_1 !== "" && inputR08_2 !== "" && inputR08_3 !== "" && inputR08_4 !== "" && inputR08_5 !== "" ){

        if(inputR08_2 === "0"){
          //ได้รับ --> ถ้า R08_2 = 0 แล้ว R08_3 - R08_5 อย่างน้อย 1 รายการ = 1
          if(inputR08_3 === "1" || inputR08_4 === "1" || inputR08_5 === "1"){         
            setShowWarningR08_2("none") //ปิด warning
            setShow8(false);
          }
          else{
            setShowWarningR08_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR08("none") //ปิด warning
          setShow8(false);
        }
        setShowWarningR08("none") //ปิด warning
        
      }
      else{
        setShowWarningR08("") //เปิด warning
      }
    }
    else{
      setShow8(false);
    }  
  }
  const handleShow8 = () => setShow8(true);
  const handleCancelAndClose8 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR08(inputR08)
    setInputR08_1(inputR08_1)
    setInputR08_2(inputR08_2)
    setInputR08_3(inputR08_3)
    setInputR08_4(inputR08_4)
    setInputR08_5(inputR08_5)
    setShow8(false);
  };

  //modal popup 9
  const [show9, setShow9] = useState(false);
  const [titleModal9, setTitleModal9] = useState("9. ราคาปุ๋ย ยาฆ่าแมลง น้ำมันเชื้อเพลิง สูงขึ้นมาก");
  const handleClose9 = () => {
    if(inputR09 === "1"){
      //ถ้า R09 = 1 แล้ว R09_1 - R09_5 ≠ blank
      if(inputR09_1 !== "" && inputR09_2 !== "" && inputR09_3 !== "" && inputR09_4 !== "" && inputR09_5 !== "" ){

        if(inputR09_2 === "0"){
          //ได้รับ --> ถ้า R09_2 = 0 แล้ว R09_3 - R09_5 อย่างน้อย 1 รายการ = 1
          if(inputR09_3 === "1" || inputR09_4 === "1" || inputR09_5 === "1"){         
            setShowWarningR09_2("none") //ปิด warning
            setShow9(false);
          }
          else{
            setShowWarningR09_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR09("none") //ปิด warning
          setShow9(false);
        }
        setShowWarningR09("none") //ปิด warning
        
      }
      else{
        setShowWarningR09("") //เปิด warning
      }
    }
    else{
      setShow9(false);
    }  
  }
  const handleShow9 = () => setShow9(true);
  const handleCancelAndClose9 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR09(inputR09)
    setInputR09_1(inputR09_1)
    setInputR09_2(inputR09_2)
    setInputR09_3(inputR09_3)
    setInputR09_4(inputR09_4)
    setInputR09_5(inputR09_5)
    setShow9(false);
  };

  //modal popup 10
  const [show10, setShow10] = useState(false);
  const [titleModal10, setTitleModal10] = useState("10. ค่าเมล็ด ค่าพันธุ์พืช ค่าพันธุ์สัตว์ มีราคาสูง");
  const handleClose10 = () => {
    if(inputR10 === "1"){
      //ถ้า R10 = 1 แล้ว R10_1 - R10_5 ≠ blank
      if(inputR10_1 !== "" && inputR10_2 !== "" && inputR10_3 !== "" && inputR10_4 !== "" && inputR10_5 !== "" ){

        if(inputR10_2 === "0"){
          //ได้รับ --> ถ้า R10_2 = 0 แล้ว R10_3 - R10_5 อย่างน้อย 1 รายการ = 1
          if(inputR10_3 === "1" || inputR10_4 === "1" || inputR10_5 === "1"){         
            setShowWarningR10_2("none") //ปิด warning
            setShow10(false);
          }
          else{
            setShowWarningR10_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR10("none") //ปิด warning
          setShow10(false);
        }
        setShowWarningR10("none") //ปิด warning
        
      }
      else{
        setShowWarningR10("") //เปิด warning
      }
    }
    else{
      setShow10(false);
    }  
  }
  const handleShow10 = () => setShow10(true);
  const handleCancelAndClose10 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR10(inputR10)
    setInputR10_1(inputR10_1)
    setInputR10_2(inputR10_2)
    setInputR10_3(inputR10_3)
    setInputR10_4(inputR10_4)
    setInputR10_5(inputR10_5)
    setShow10(false);
  };

  //modal popup 11
  const [show11, setShow11] = useState(false);
  const [titleModal11, setTitleModal11] = useState("11. ค่าบริการเตรียมดิน การดูแลรักษา และการเก็บเกี่ยวสูงขึ้น");
  const handleClose11 = () => {
    if(inputR11 === "1"){
      //ถ้า R11 = 1 แล้ว R11_1 - R11_5 ≠ blank
      if(inputR11_1 !== "" && inputR11_2 !== "" && inputR11_3 !== "" && inputR11_4 !== "" && inputR11_5 !== "" ){

        if(inputR11_2 === "0"){
          //ได้รับ --> ถ้า R11_2 = 0 แล้ว R11_3 - R11_5 อย่างน้อย 1 รายการ = 1
          if(inputR11_3 === "1" || inputR11_4 === "1" || inputR11_5 === "1"){         
            setShowWarningR11_2("none") //ปิด warning
            setShow11(false);
          }
          else{
            setShowWarningR11_2("") //เปิด warning
          }
        }
        else{
          setShowWarningR11("none") //ปิด warning
          setShow11(false);
        }
        setShowWarningR11("none") //ปิด warning

      }
      else{
        setShowWarningR11("") //เปิด warning
      }
    }
    else{
      setShow11(false);
    }  
  }
  const handleShow11 = () => setShow11(true);
  const handleCancelAndClose11 = () => {
    //กลับมาใช้ค่าเดิม
    setInputR11(inputR11)
    setInputR11_1(inputR11_1)
    setInputR11_2(inputR11_2)
    setInputR11_3(inputR11_3)
    setInputR11_4(inputR11_4)
    setInputR11_5(inputR11_5)
    setShow11(false);
  };


  //state disabled
  const [disabledR01, setDisabledR01] = useState<boolean>(false); //สำหรับเปิด/ปิด ตัว input
  const [disabledR01_2, setDisabledR01_2] = useState<boolean>(false);
  const [disabledR02, setDisabledR02] = useState<boolean>(false); 
  const [disabledR02_2, setDisabledR02_2] = useState<boolean>(false);
  const [disabledR03, setDisabledR03] = useState<boolean>(false); 
  const [disabledR03_2, setDisabledR03_2] = useState<boolean>(false);
  const [disabledR04, setDisabledR04] = useState<boolean>(false); 
  const [disabledR04_2, setDisabledR04_2] = useState<boolean>(false);
  const [disabledR05, setDisabledR05] = useState<boolean>(false); 
  const [disabledR05_2, setDisabledR05_2] = useState<boolean>(false);
  const [disabledR06, setDisabledR06] = useState<boolean>(false); 
  const [disabledR06_2, setDisabledR06_2] = useState<boolean>(false);
  const [disabledR07, setDisabledR07] = useState<boolean>(false); 
  const [disabledR07_2, setDisabledR07_2] = useState<boolean>(false);
  const [disabledR08, setDisabledR08] = useState<boolean>(false); 
  const [disabledR08_2, setDisabledR08_2] = useState<boolean>(false);
  const [disabledR09, setDisabledR09] = useState<boolean>(false); 
  const [disabledR09_2, setDisabledR09_2] = useState<boolean>(false);
  const [disabledR10, setDisabledR10] = useState<boolean>(false); 
  const [disabledR10_2, setDisabledR10_2] = useState<boolean>(false);
  const [disabledR11, setDisabledR11] = useState<boolean>(false); 
  const [disabledR11_2, setDisabledR11_2] = useState<boolean>(false);


  const OpenModalItem = () => {
    //1. ฝนแล้ง/ขาดแหล่งน้ำ    
    setShowWarningR01("none") //ปิด warning
    setShowWarningR01_2("none") //ปิด warning
    handleShow()
  };

  const OpenModalItem2 = () => {
    //2. น้ำท่วม โคลนถล่ม พายุ
    setShowWarningR02("none") //ปิด warning
    setShowWarningR02_2("none") //ปิด warning
    handleShow2()
  };

  const OpenModalItem3 = () => {
    //3. โรคที่ทำให้พืช สัตว์ สัตว์น้ำ เสียหาย ล้มตาย
    setShowWarningR03("none") //ปิด warning
    setShowWarningR03_2("none") //ปิด warning
    handleShow3()
  };

  const OpenModalItem4 = () => {
    //4. ได้ผลผลิตน้อยเกินไป
    setShowWarningR04("none") //ปิด warning
    setShowWarningR04_2("none") //ปิด warning
    handleShow4()
  };

  const OpenModalItem5 = () => {
    //5. ราคาผลผลิตตกต่ำ ผลผลิตล้นตลาด
    setShowWarningR05("none") //ปิด warning
    setShowWarningR05_2("none") //ปิด warning
    handleShow5()
  };

  const OpenModalItem6 = () => {
    //6. พ่อค้าคนกลาง นายทุนเอารัดเอาเปรียบ
    setShowWarningR06("none") //ปิด warning
    setShowWarningR06_2("none") //ปิด warning
    handleShow6()
  };

  const OpenModalItem7 = () => {
    //7. ขาดแคลนแรงงาน
    setShowWarningR07("none") //ปิด warning
    setShowWarningR07_2("none") //ปิด warning
    handleShow7()
  };

  const OpenModalItem8 = () => {
    //8. ค่าแรงสูงขึ้นมาก
    setShowWarningR08("none") //ปิด warning
    setShowWarningR08_2("none") //ปิด warning
    handleShow8()
  };

  const OpenModalItem9 = () => {
    //9. ราคาปุ๋ย ยาฆ่าแมลง น้ำมันเชื้อเพลิง สูงขึ้นมาก
    setShowWarningR09("none") //ปิด warning
    setShowWarningR09_2("none") //ปิด warning
    handleShow9()
  };

  const OpenModalItem10 = () => {
    //10. ค่าเมล็ด ค่าพันธุ์พืช ค่าพันธุ์สัตว์ มีราคาสูง
    setShowWarningR10("none") //ปิด warning
    setShowWarningR10_2("none") //ปิด warning
    handleShow10()
  };

  const OpenModalItem11 = () => {
    //11. ค่าบริการเตรียมดิน การดูแลรักษา และการเก็บเกี่ยวสูงขึ้น
    setShowWarningR11("none") //ปิด warning
    setShowWarningR11_2("none") //ปิด warning
    handleShow11()
  };



  //action : input modal R01
  const R01OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR01(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR01(false)
      //setDisabledR01_2(false) 

      setInputR01_3("0")
      setInputR01_4("0")
      setInputR01_5("0")
       
    }else{
      //ถ้า R01 = 0 แล้ว R01_1 - R01_5 = blank
      setDisabledR01(true)
      setDisabledR01_2(true)

      setInputR01_1("")
      setInputR01_2("")
      setInputR01_3("")
      setInputR01_4("")
      setInputR01_5("")
    }

  }
  const R01_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR01_1(event.target.value)
  }
  const R01_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR01_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R01_2 = 1 แล้ว R01_3 - R01_5 = 0
      setDisabledR01_2(true)

      setInputR01_3("0")
      setInputR01_4("0")
      setInputR01_5("0")
    }
    else{
      //ได้รับ
      setDisabledR01_2(false)
    }

  }
  const R01_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR01_3(event.target.checked === true ? "1" : "0");
  }
  const R01_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR01_4(event.target.checked === true ? "1" : "0");
  }
  const R01_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR01_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R02
  const R02OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR02(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR02(false)

      setInputR02_3("0")
      setInputR02_4("0")
      setInputR02_5("0")
       
    }else{
      //ถ้า R02 = 0 แล้ว R02_1 - R02_5 = blank
      setDisabledR02(true)
      setDisabledR02_2(true)

      setInputR02_1("")
      setInputR02_2("")
      setInputR02_3("")
      setInputR02_4("")
      setInputR02_5("")
    }
  }
  const R02_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR02_1(event.target.value)
  }
  const R02_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR02_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R02_2 = 1 แล้ว R02_3 - R02_5 = 0
      setDisabledR02_2(true)

      setInputR02_3("0")
      setInputR02_4("0")
      setInputR02_5("0")
    }
    else{
      //ได้รับ
      setDisabledR02_2(false)
    }
  }
  const R02_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR02_3(event.target.checked === true ? "1" : "0");
  }
  const R02_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR02_4(event.target.checked === true ? "1" : "0");
  }
  const R02_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR02_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R03
  const R03OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR03(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR03(false)

      setInputR03_3("0")
      setInputR03_4("0")
      setInputR03_5("0")
       
    }else{
      //ถ้า R03 = 0 แล้ว R03_1 - R03_5 = blank
      setDisabledR03(true)
      setDisabledR03_2(true)

      setInputR03_1("")
      setInputR03_2("")
      setInputR03_3("")
      setInputR03_4("")
      setInputR03_5("")
    }
  }
  const R03_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR03_1(event.target.value)
  }
  const R03_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR03_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R03_2 = 1 แล้ว R03_3 - R03_5 = 0
      setDisabledR03_2(true)

      setInputR03_3("0")
      setInputR03_4("0")
      setInputR03_5("0")
    }
    else{
      //ได้รับ
      setDisabledR03_2(false)
    }
  }
  const R03_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR03_3(event.target.checked === true ? "1" : "0");
  }
  const R03_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR03_4(event.target.checked === true ? "1" : "0");
  }
  const R03_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR03_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R04
  const R04OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR04(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR04(false)

      setInputR04_3("0")
      setInputR04_4("0")
      setInputR04_5("0")
       
    }else{
      //ถ้า R04 = 0 แล้ว R04_1 - R04_5 = blank
      setDisabledR04(true)
      setDisabledR04_2(true)

      setInputR04_1("")
      setInputR04_2("")
      setInputR04_3("")
      setInputR04_4("")
      setInputR04_5("")
    }
  }
  const R04_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR04_1(event.target.value)
  }
  const R04_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR04_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R04_2 = 1 แล้ว R04_3 - R04_5 = 0
      setDisabledR04_2(true)

      setInputR04_3("0")
      setInputR04_4("0")
      setInputR04_5("0")
    }
    else{
      //ได้รับ
      setDisabledR04_2(false)
    }
  }
  const R04_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR04_3(event.target.checked === true ? "1" : "0");
  }
  const R04_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR04_4(event.target.checked === true ? "1" : "0");
  }
  const R04_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR04_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R05
  const R05OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR05(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR05(false)

      setInputR05_3("0")
      setInputR05_4("0")
      setInputR05_5("0")
       
    }else{
      //ถ้า R05 = 0 แล้ว R05_1 - R05_5 = blank
      setDisabledR05(true)
      setDisabledR05_2(true)

      setInputR05_1("")
      setInputR05_2("")
      setInputR05_3("")
      setInputR05_4("")
      setInputR05_5("")
    }
  }
  const R05_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR05_1(event.target.value)
  }
  const R05_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR05_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R05_2 = 1 แล้ว R05_3 - R05_5 = 0
      setDisabledR05_2(true)

      setInputR05_3("0")
      setInputR05_4("0")
      setInputR05_5("0")
    }
    else{
      //ได้รับ
      setDisabledR05_2(false)
    }
  }
  const R05_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR05_3(event.target.checked === true ? "1" : "0");
  }
  const R05_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR05_4(event.target.checked === true ? "1" : "0");
  }
  const R05_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR05_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R06
  const R06OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR06(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR06(false)

      setInputR06_3("0")
      setInputR06_4("0")
      setInputR06_5("0")
       
    }else{
      //ถ้า R06 = 0 แล้ว R06_1 - R06_5 = blank
      setDisabledR06(true)
      setDisabledR06_2(true)

      setInputR06_1("")
      setInputR06_2("")
      setInputR06_3("")
      setInputR06_4("")
      setInputR06_5("")
    }
  }
  const R06_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR06_1(event.target.value)
  }
  const R06_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR06_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R06_2 = 1 แล้ว R06_3 - R06_5 = 0
      setDisabledR06_2(true)

      setInputR06_3("0")
      setInputR06_4("0")
      setInputR06_5("0")
    }
    else{
      //ได้รับ
      setDisabledR06_2(false)
    }
  }
  const R06_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR06_3(event.target.checked === true ? "1" : "0");
  }
  const R06_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR06_4(event.target.checked === true ? "1" : "0");
  }
  const R06_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR06_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R07
  const R07OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR07(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR07(false)

      setInputR07_3("0")
      setInputR07_4("0")
      setInputR07_5("0")
       
    }else{
      //ถ้า R07 = 0 แล้ว R07_1 - R07_5 = blank
      setDisabledR07(true)
      setDisabledR07_2(true)

      setInputR07_1("")
      setInputR07_2("")
      setInputR07_3("")
      setInputR07_4("")
      setInputR07_5("")
    }
  }
  const R07_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR07_1(event.target.value)
  }
  const R07_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR07_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R07_2 = 1 แล้ว R07_3 - R07_5 = 0
      setDisabledR07_2(true)

      setInputR07_3("0")
      setInputR07_4("0")
      setInputR07_5("0")
    }
    else{
      //ได้รับ
      setDisabledR07_2(false)
    }
  }
  const R07_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR07_3(event.target.checked === true ? "1" : "0");
  }
  const R07_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR07_4(event.target.checked === true ? "1" : "0");
  }
  const R07_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR07_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R08
  const R08OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR08(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR08(false)

      setInputR08_3("0")
      setInputR08_4("0")
      setInputR08_5("0")
       
    }else{
      //ถ้า R08 = 0 แล้ว R08_1 - R08_5 = blank
      setDisabledR08(true)
      setDisabledR08_2(true)

      setInputR08_1("")
      setInputR08_2("")
      setInputR08_3("")
      setInputR08_4("")
      setInputR08_5("")
    }
  }
  const R08_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR08_1(event.target.value)
  }
  const R08_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR08_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R08_2 = 1 แล้ว R08_3 - R08_5 = 0
      setDisabledR08_2(true)

      setInputR08_3("0")
      setInputR08_4("0")
      setInputR08_5("0")
    }
    else{
      //ได้รับ
      setDisabledR08_2(false)
    }
  }
  const R08_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR08_3(event.target.checked === true ? "1" : "0");
  }
  const R08_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR08_4(event.target.checked === true ? "1" : "0");
  }
  const R08_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR08_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R09
  const R09OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR09(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR09(false)

      setInputR09_3("0")
      setInputR09_4("0")
      setInputR09_5("0")
       
    }else{
      //ถ้า R09 = 0 แล้ว R09_1 - R09_5 = blank
      setDisabledR09(true)
      setDisabledR09_2(true)

      setInputR09_1("")
      setInputR09_2("")
      setInputR09_3("")
      setInputR09_4("")
      setInputR09_5("")
    }
  }
  const R09_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR09_1(event.target.value)
  }
  const R09_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR09_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R09_2 = 1 แล้ว R09_3 - R09_5 = 0
      setDisabledR09_2(true)

      setInputR09_3("0")
      setInputR09_4("0")
      setInputR09_5("0")
    }
    else{
      //ได้รับ
      setDisabledR09_2(false)
    }
  }
  const R09_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR09_3(event.target.checked === true ? "1" : "0");
  }
  const R09_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR09_4(event.target.checked === true ? "1" : "0");
  }
  const R09_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR09_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R10
  const R10OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR10(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR10(false)

      setInputR10_3("0")
      setInputR10_4("0")
      setInputR10_5("0")
       
    }else{
      //ถ้า R10 = 0 แล้ว R10_1 - R10_5 = blank
      setDisabledR10(true)
      setDisabledR10_2(true)

      setInputR10_1("")
      setInputR10_2("")
      setInputR10_3("")
      setInputR10_4("")
      setInputR10_5("")
    }
  }
  const R10_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR10_1(event.target.value)
  }
  const R10_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR10_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R10_2 = 1 แล้ว R10_3 - R10_5 = 0
      setDisabledR10_2(true)

      setInputR10_3("0")
      setInputR10_4("0")
      setInputR10_5("0")
    }
    else{
      //ได้รับ
      setDisabledR10_2(false)
    }
  }
  const R10_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR10_3(event.target.checked === true ? "1" : "0");
  }
  const R10_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR10_4(event.target.checked === true ? "1" : "0");
  }
  const R10_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR10_5(event.target.checked === true ? "1" : "0");
  }

  //action : input modal R11
  const R11OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR11(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledR11(false)

      setInputR11_3("0")
      setInputR11_4("0")
      setInputR11_5("0")
       
    }else{
      //ถ้า R11 = 0 แล้ว R11_1 - R11_5 = blank
      setDisabledR11(true)
      setDisabledR11_2(true)

      setInputR11_1("")
      setInputR11_2("")
      setInputR11_3("")
      setInputR11_4("")
      setInputR11_5("")
    }
  }
  const R11_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR11_1(event.target.value)
  }
  const R11_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputR11_2(event.target.value)
    if(event.target.value === "1"){
      //ไม่ได้รับ --ถ้า R11_2 = 1 แล้ว R11_3 - R11_5 = 0
      setDisabledR11_2(true)

      setInputR11_3("0")
      setInputR11_4("0")
      setInputR11_5("0")
    }
    else{
      //ได้รับ
      setDisabledR11_2(false)
    }
  }
  const R11_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR11_3(event.target.checked === true ? "1" : "0");
  }
  const R11_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR11_4(event.target.checked === true ? "1" : "0");
  }
  const R11_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR11_5(event.target.checked === true ? "1" : "0");
  }

  //action : input
  const R12OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR12(event.target.checked === true ? "1" : "0");
  }
  const R13OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR13(event.target.checked === true ? "1" : "0");
  }
  const R14OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR14(event.target.checked === true ? "1" : "0");
  }
  const R15OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR15(event.target.checked === true ? "1" : "0");
  }
  const R16OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR16(event.target.checked === true ? "1" : "0");
  }
  const R17OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR17(event.target.checked === true ? "1" : "0");
  }
  const R18OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR18(event.target.checked === true ? "1" : "0");
  }
  const R19OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR19(event.target.checked === true ? "1" : "0");
  }
  const R20OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR20(event.target.checked === true ? "1" : "0");
  }
  const R21OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR21(event.target.checked === true ? "1" : "0");
  }
  const R22OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR22(event.target.checked === true ? "1" : "0");
  }
  const R23OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputR23(event.target.checked === true ? "1" : "0");
  }

  //save REC21
  const SaveOnClick = async () => {

    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      r01: inputR01,
      r01_1: inputR01_1,
      r01_2: inputR01_2,
      r01_3: inputR01_3,
      r01_4: inputR01_4,
      r01_5: inputR01_5,
      r02: inputR02,
      r02_1: inputR02_1,
      r02_2: inputR02_2,
      r02_3: inputR02_3,
      r02_4: inputR02_4,
      r02_5: inputR02_5,
      r03: inputR03,
      r03_1: inputR03_1,
      r03_2: inputR03_2,
      r03_3: inputR03_3,
      r03_4: inputR03_4,
      r03_5: inputR03_5,
      r04: inputR04,
      r04_1: inputR04_1,
      r04_2: inputR04_2,
      r04_3: inputR04_3,
      r04_4: inputR04_4,
      r04_5: inputR04_5,
      r05: inputR05,
      r05_1: inputR05_1,
      r05_2: inputR05_2,
      r05_3: inputR05_3,
      r05_4: inputR05_4,
      r05_5: inputR05_5,
      r06: inputR06,
      r06_1: inputR06_1,
      r06_2: inputR06_2,
      r06_3: inputR06_3,
      r06_4: inputR06_4,
      r06_5: inputR06_5,
      r07: inputR07,
      r07_1: inputR07_1,
      r07_2: inputR07_2,
      r07_3: inputR07_3,
      r07_4: inputR07_4,
      r07_5: inputR07_5,
      r08: inputR08,
      r08_1: inputR08_1,
      r08_2: inputR08_2,
      r08_3: inputR08_3,
      r08_4: inputR08_4,
      r08_5: inputR08_5,
      r09: inputR09,
      r09_1: inputR09_1,
      r09_2: inputR09_2,
      r09_3: inputR09_3,
      r09_4: inputR09_4,
      r09_5: inputR09_5,
      r10: inputR10,
      r10_1: inputR10_1,
      r10_2: inputR10_2,
      r10_3: inputR10_3,
      r10_4: inputR10_4,
      r10_5: inputR10_5,
      r11: inputR11,
      r11_1: inputR11_1,
      r11_2: inputR11_2,
      r11_3: inputR11_3,
      r11_4: inputR11_4,
      r11_5: inputR11_5,
      r12: inputR12,
      r13: inputR13,
      r14: inputR14,
      r15: inputR15,
      r16: inputR16,
      r17: inputR17,
      r18: inputR18,
      r19: inputR19,
      r20: inputR20,
      r21: inputR21,
      r22: inputR22,
      r23: inputR23
    };

    //console.log(body);

    //consistency check
    let isvalid = true;

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

          //url insertREC21
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC21";
          }

          //api insertREC21
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  setPage(page + 1);

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });
        }

      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 11 การประสบปัญหา/ภัยพิบัติ และการเข้าร่วมโครงการของรัฐ): ", error);
      }

    }
    else{
      //ไม่ต้องทำอะไร
    }
    
  };



  async function OnClickBack() {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;

      //header api
      const headers = {
        Authorization: "Basic " + auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      try {

        // url getREC01List
        let url_getREC01List_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_getREC01List_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
        }

        // api getREC01List
        await axios
          .get(url_getREC01List_api, {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {

              let rec01list: REC01Info[] = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)

              //consistency check 
              if (rec01list[0].A04 === "1" || rec01list[0].A04 === "2") {
                setPage(23); //ไปตอนที่ 10 สมาชิก
              }
              else {
                setPage(21); //ไปตอนที่ 8 การใช้ปุ๋ย
              }


            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List in EProblem ): ", err);
          });

      } catch (error) {
        console.error("OnClickBack ERROR (ตอนที่ 11 การประสบปัญหา/ภัยพิบัติ): ", error);
      }

    }
  }

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
                        ตอนที่ 11 การประสบปัญหา/ภัยพิบัติ และการเข้าร่วมโครงการของรัฐ
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl52211"
                        aria-expanded="false"
                        aria-controls="collapseControl52211"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl52211">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้ประสบปัญหา/ภัยพิบัติส่งผลต่อการทำการเกษตร ดังต่อไปนี้หรือไม่
                          </label>
                        </Col>
                      </Row>

                      <Row >
                        <Col md={12}>

                          <Row className="mt-2">

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR01 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR01 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 1. ฝนแล้ง/ขาดแหล่งน้ำ</p>
                                        {/* <p></p>
                                      <ul>
                                        <li>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ : ปานกลาง</li>
                                        <li>การได้รับ ความช่วยเหลือ/แก้ปัญหา :
                                          <ul>
                                            <li>ได้รับจาก คนในชุมชน</li>
                                            <li>ได้รับจาก รัฐบาล</li>
                                            <li>ได้รับจาก อื่นๆ (เช่นNGO)</li>
                                          </ul>
                                        </li>
                                      </ul> */}
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem2} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR02 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR02 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 2. น้ำท่วม โคลนถล่ม พายุ</p>
                                        {/* <p></p>
                                      <ul>
                                        <li>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ : น้อย</li>
                                        <li>การได้รับ ความช่วยเหลือ/แก้ปัญหา :
                                          <ul>
                                            <li>ไม่ได้รับ</li>
                                          </ul>
                                        </li>
                                      </ul> */}
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem3} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR03 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR03 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 3. โรคที่ทำให้พืช สัตว์ สัตว์น้ำ เสียหาย ล้มตาย</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem4} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR04 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR04 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 4. ได้ผลผลิตน้อยเกินไป</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem5} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR05 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR05 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 5. ราคาผลผลิตตกต่ำ ผลผลิตล้นตลาด</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem6} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR06 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR06 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 6. พ่อค้าคนกลาง นายทุนเอารัดเอาเปรียบ</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem7} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR07 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR07 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 7. ขาดแคลนแรงงาน</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem8} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR08 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR08 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 8. ค่าแรงสูงขึ้นมาก</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem9} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR09 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR09 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 9. ราคาปุ๋ย ยาฆ่าแมลง น้ำมันเชื้อเพลิง สูงขึ้นมาก</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem10} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR10 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR10 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 10. ค่าเมล็ด ค่าพันธุ์พืช ค่าพันธุ์สัตว์ มีราคาสูง</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem11} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputR11 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="ccol-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputR11 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 11. ค่าบริการเตรียมดิน การดูแลรักษา และการเก็บเกี่ยวสูงขึ้น</p>
                                        <p></p>
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                          </Row>

                        </Col>
                      </Row>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            2. ท่านได้เข้าร่วมโครงการใดหรือได้รับความช่วยเหลือใดบ้างจากภาครัฐ (ตอบได้มากกว่า 1 ข้อ)
                          </label>
                        </Col>
                      </Row>

                      <Row className="">

                        <Col md={6} className="mt-3">
                          <label> R12 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R12"
                                onChange={R12OnChange}
                                checked={inputR12 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R12">
                                {" "}
                                1. ประกันรายได้ของเกษตรกร
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R13 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R13"
                                onChange={R13OnChange}
                                checked={inputR13 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R13">
                                {" "}
                                2. พักชำระหนี้
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R14 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R14"
                                onChange={R14OnChange}
                                checked={inputR14 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R14">
                                {" "}
                                3. สนับสนุนค่าบริหารจัดการและพัฒนาคุณภาพผลผลิตเกษตรกรผู้ปลูกข้าว
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R15 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R15"
                                onChange={R15OnChange}
                                checked={inputR15 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R15">
                                {" "}
                                4. นาแปลงใหญ่
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R16 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R16"
                                onChange={R16OnChange}
                                checked={inputR16 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R16">
                                {" "}
                                5. เยียวยาภัยพิบัติ
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R17 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R17"
                                onChange={R17OnChange}
                                checked={inputR17 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R17">
                                {" "}
                                6. ศูนย์เรียนรู้การเพิ่มประสิทธิภาพการผลิตสินค้าเกษตร (ศพก.)
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R18 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R18"
                                onChange={R18OnChange}
                                checked={inputR18 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R18">
                                {" "}
                                7. การบริหารจัดการพื้นที่เกษตรกรรม (Zoning by Agri-Map)
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R19 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R19"
                                onChange={R19OnChange}
                                checked={inputR19 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R19">
                                {" "}
                                8. โครงการส่งเสริมเกษตรทฤษฎีใหม่
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R20 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R20"
                                onChange={R20OnChange}
                                checked={inputR20 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R20">
                                {" "}
                                9. มาตรฐานสินค้าการเกษตร GAP/เกษตรอินทรีย์
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R21 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R21"
                                onChange={R21OnChange}
                                checked={inputR21 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R21">
                                {" "}
                                10. แหล่งน้ำในไร่นา (บ่อจิ๋ว)
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R22 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R22"
                                onChange={R22OnChange}
                                checked={inputR22 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R22">
                                {" "}
                                11. ศูนย์เทคโนโลยีเกษตรและนวัตกรรม (AIC)
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mt-3">
                          <label> R23 </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="R23"
                                onChange={R23OnChange}
                                checked={inputR23 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="R23">
                                {" "}
                                12. พืชหลังนา
                              </label>
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

          <Card className="mt-2 sticky-bottom">
            <Card.Body>
              <Row>
                <div className="col-lg-12 col-sm-auto pr-0">
                  <div className="float-end">
                    <button
                      onClick={() => OnClickBack()}
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

              <Row>
                <Col md={2} className="">
                  <label> R01  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R01"
                        onChange={R01OnChange}
                        checked={inputR01 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R01">
                        {" "}
                        1. ฝนแล้ง/ขาดแหล่งน้ำ
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R01_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R01_1"
                          type="radio"
                          id={`rd_R01_1${index}`}
                          checked={option.value === inputR01_1}
                          onChange={R01_1OnChange}
                          value={option.value}
                          disabled ={disabledR01} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R01_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R01_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R01_2"
                          type="radio"
                          id={`rd_R01_2${index}`}
                          checked={option.value === inputR01_2}
                          onChange={R01_2OnChange}
                          value={option.value}
                          disabled ={disabledR01} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R01_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R01_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R01_3"
                        onChange={R01_3OnChange}
                        checked={inputR01_3 === "1" ? true : false}
                        disabled ={disabledR01_2} 
                      />
                      <label className="form-check-label" htmlFor="R01_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R01_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R01_4"
                        onChange={R01_4OnChange}
                        checked={inputR01_4 === "1" ? true : false}
                        disabled ={disabledR01_2} 
                      />
                      <label className="form-check-label" htmlFor="R01_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R01_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R01_5"
                        onChange={R01_5OnChange}
                        checked={inputR01_5 === "1" ? true : false}
                        disabled ={disabledR01_2} 
                      />
                      <label className="form-check-label" htmlFor="R01_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR01 }}><label className="text-danger">ต้องระบุ R01_1 , R01_2</label></div>
              <div className="mt-3" style={{ display: showWarningR01_2 }}><label className="text-danger">ต้องระบุ R01_3 - R01_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal2}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R02  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R02"
                        onChange={R02OnChange}
                        checked={inputR02 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R02">
                        {" "}
                        2. น้ำท่วม โคลนถล่ม พายุ
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R02_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R02_1"
                          type="radio"
                          id={`rd_R02_1${index}`}
                          checked={option.value === inputR02_1}
                          onChange={R02_1OnChange}
                          value={option.value}
                          disabled ={disabledR02} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R02_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R02_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R02_2"
                          type="radio"
                          id={`rd_R02_2${index}`}
                          checked={option.value === inputR02_2}
                          onChange={R02_2OnChange}
                          value={option.value}
                          disabled ={disabledR02} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R02_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R02_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R02_3"
                        onChange={R02_3OnChange}
                        checked={inputR02_3 === "1" ? true : false}
                        disabled ={disabledR02_2} 
                      />
                      <label className="form-check-label" htmlFor="R02_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R02_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R02_4"
                        onChange={R02_4OnChange}
                        checked={inputR02_4 === "1" ? true : false}
                        disabled ={disabledR02_2} 
                      />
                      <label className="form-check-label" htmlFor="R02_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R02_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R02_5"
                        onChange={R02_5OnChange}
                        checked={inputR02_5 === "1" ? true : false}
                        disabled ={disabledR02_2}
                      />
                      <label className="form-check-label" htmlFor="R02_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR02 }}><label className="text-danger">ต้องระบุ R02_1 , R02_2</label></div>
              <div className="mt-3" style={{ display: showWarningR02_2 }}><label className="text-danger">ต้องระบุ R02_3 - R02_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose2}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose2}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal3}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R03  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R03"
                        onChange={R03OnChange}
                        checked={inputR03 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R03">
                        {" "}
                        3. โรคที่ทำให้พืช สัตว์ สัตว์น้ำ เสียหาย ล้มตาย
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R03_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R03_1"
                          type="radio"
                          id={`rd_R03_1${index}`}
                          checked={option.value === inputR03_1}
                          onChange={R03_1OnChange}
                          value={option.value}
                          disabled ={disabledR03} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R03_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R03_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R03_2"
                          type="radio"
                          id={`rd_R03_2${index}`}
                          checked={option.value === inputR03_2}
                          onChange={R03_2OnChange}
                          value={option.value}
                          disabled ={disabledR03} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R03_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R03_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R03_3"
                        onChange={R03_3OnChange}
                        checked={inputR03_3 === "1" ? true : false}
                        disabled ={disabledR03_2} 
                      />
                      <label className="form-check-label" htmlFor="R03_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R03_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R03_4"
                        onChange={R03_4OnChange}
                        checked={inputR03_4 === "1" ? true : false}
                        disabled ={disabledR03_2} 
                      />
                      <label className="form-check-label" htmlFor="R03_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R03_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R03_5"
                        onChange={R03_5OnChange}
                        checked={inputR03_5 === "1" ? true : false}
                        disabled ={disabledR03_2} 
                      />
                      <label className="form-check-label" htmlFor="R03_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR03 }}><label className="text-danger">ต้องระบุ R03_1 , R03_2</label></div>
              <div className="mt-3" style={{ display: showWarningR03_2 }}><label className="text-danger">ต้องระบุ R03_3 - R03_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose3}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose3}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show4}
        onHide={handleClose4}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal4}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R04  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R04"
                        onChange={R04OnChange}
                        checked={inputR04 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R04">
                        {" "}
                        4. ได้ผลผลิตน้อยเกินไป
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R04_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R04_1"
                          type="radio"
                          id={`rd_R04_1${index}`}
                          checked={option.value === inputR04_1}
                          onChange={R04_1OnChange}
                          value={option.value}
                          disabled ={disabledR04} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R04_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R04_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R04_2"
                          type="radio"
                          id={`rd_R04_2${index}`}
                          checked={option.value === inputR04_2}
                          onChange={R04_2OnChange}
                          value={option.value}
                          disabled ={disabledR04} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R04_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R04_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R04_3"
                        onChange={R04_3OnChange}
                        checked={inputR04_3 === "1" ? true : false}
                        disabled ={disabledR04_2} 
                      />
                      <label className="form-check-label" htmlFor="R04_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R04_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R04_4"
                        onChange={R04_4OnChange}
                        checked={inputR04_4 === "1" ? true : false}
                        disabled ={disabledR04_2} 
                      />
                      <label className="form-check-label" htmlFor="R04_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R04_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R04_5"
                        onChange={R04_5OnChange}
                        checked={inputR04_5 === "1" ? true : false}
                        disabled ={disabledR04_2} 
                      />
                      <label className="form-check-label" htmlFor="R04_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR04 }}><label className="text-danger">ต้องระบุ R04_1 , R04_2</label></div>
              <div className="mt-3" style={{ display: showWarningR04_2 }}><label className="text-danger">ต้องระบุ R04_3 - R04_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose4}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose4}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show5}
        onHide={handleClose5}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal5}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R05  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R05"
                        onChange={R05OnChange}
                        checked={inputR05 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R05">
                        {" "}
                        5. ราคาผลผลิตตกต่ำ ผลผลิตล้นตลาด
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R05_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R05_1"
                          type="radio"
                          id={`rd_R05_1${index}`}
                          checked={option.value === inputR05_1}
                          onChange={R05_1OnChange}
                          value={option.value}
                          disabled ={disabledR05} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R05_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R05_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R05_2"
                          type="radio"
                          id={`rd_R05_2${index}`}
                          checked={option.value === inputR05_2}
                          onChange={R05_2OnChange}
                          value={option.value}
                          disabled ={disabledR05} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R05_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R05_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R05_3"
                        onChange={R05_3OnChange}
                        checked={inputR05_3 === "1" ? true : false}
                        disabled ={disabledR05_2} 
                      />
                      <label className="form-check-label" htmlFor="R05_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R05_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R05_4"
                        onChange={R05_4OnChange}
                        checked={inputR05_4 === "1" ? true : false}
                        disabled ={disabledR05_2} 
                      />
                      <label className="form-check-label" htmlFor="R05_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R05_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R05_5"
                        onChange={R05_5OnChange}
                        checked={inputR05_5 === "1" ? true : false}
                        disabled ={disabledR05_2} 
                      />
                      <label className="form-check-label" htmlFor="R05_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR05 }}><label className="text-danger">ต้องระบุ R05_1 , R05_2</label></div>
              <div className="mt-3" style={{ display: showWarningR05_2 }}><label className="text-danger">ต้องระบุ R05_3 - R05_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose5}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose5}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show6}
        onHide={handleClose6}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal6}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R06  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R06"
                        onChange={R06OnChange}
                        checked={inputR06 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R06">
                        {" "}
                        6. พ่อค้าคนกลาง นายทุนเอารัดเอาเปรียบ
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R06_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R06_1"
                          type="radio"
                          id={`rd_R06_1${index}`}
                          checked={option.value === inputR06_1}
                          onChange={R06_1OnChange}
                          value={option.value}
                          disabled ={disabledR06} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R06_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R06_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R06_2"
                          type="radio"
                          id={`rd_R06_2${index}`}
                          checked={option.value === inputR06_2}
                          onChange={R06_2OnChange}
                          value={option.value}
                          disabled ={disabledR06} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R06_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R06_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R06_3"
                        onChange={R06_3OnChange}
                        checked={inputR06_3 === "1" ? true : false}
                        disabled ={disabledR06_2} 
                      />
                      <label className="form-check-label" htmlFor="R06_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R06_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R06_4"
                        onChange={R06_4OnChange}
                        checked={inputR06_4 === "1" ? true : false}
                        disabled ={disabledR06_2} 
                      />
                      <label className="form-check-label" htmlFor="R06_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R06_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R06_5"
                        onChange={R06_5OnChange}
                        checked={inputR06_5 === "1" ? true : false}
                        disabled ={disabledR06_2} 
                      />
                      <label className="form-check-label" htmlFor="R06_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR06 }}><label className="text-danger">ต้องระบุ R06_1 , R06_2</label></div>
              <div className="mt-3" style={{ display: showWarningR06_2 }}><label className="text-danger">ต้องระบุ R06_3 - R06_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose6}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose6}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show7}
        onHide={handleClose7}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal7}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R07  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R07"
                        onChange={R07OnChange}
                        checked={inputR07 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R07">
                        {" "}
                        7. ขาดแคลนแรงงาน
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R07_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R07_1"
                          type="radio"
                          id={`rd_R07_1${index}`}
                          checked={option.value === inputR07_1}
                          onChange={R07_1OnChange}
                          value={option.value}
                          disabled ={disabledR07} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R07_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R07_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R07_2"
                          type="radio"
                          id={`rd_R07_2${index}`}
                          checked={option.value === inputR07_2}
                          onChange={R07_2OnChange}
                          value={option.value}
                          disabled ={disabledR07} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R07_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R07_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R07_3"
                        onChange={R07_3OnChange}
                        checked={inputR07_3 === "1" ? true : false}
                        disabled ={disabledR07_2} 
                      />
                      <label className="form-check-label" htmlFor="R07_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R07_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R07_4"
                        onChange={R07_4OnChange}
                        checked={inputR07_4 === "1" ? true : false}
                        disabled ={disabledR07_2} 
                      />
                      <label className="form-check-label" htmlFor="R07_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R07_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R07_5"
                        onChange={R07_5OnChange}
                        checked={inputR07_5 === "1" ? true : false}
                        disabled ={disabledR07_2} 
                      />
                      <label className="form-check-label" htmlFor="R07_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR07 }}><label className="text-danger">ต้องระบุ R07_1 , R07_2</label></div>
              <div className="mt-3" style={{ display: showWarningR07_2 }}><label className="text-danger">ต้องระบุ R07_3 - R07_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose7}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose7}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show8}
        onHide={handleClose8}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal8}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R08  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R08"
                        onChange={R08OnChange}
                        checked={inputR08 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R08">
                        {" "}
                        8. ค่าแรงสูงขึ้นมาก
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R08_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R08_1"
                          type="radio"
                          id={`rd_R08_1${index}`}
                          checked={option.value === inputR08_1}
                          onChange={R08_1OnChange}
                          value={option.value}
                          disabled ={disabledR08} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R08_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R08_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R08_2"
                          type="radio"
                          id={`rd_R08_2${index}`}
                          checked={option.value === inputR08_2}
                          onChange={R08_2OnChange}
                          value={option.value}
                          disabled ={disabledR08} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R08_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R08_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R08_3"
                        onChange={R08_3OnChange}
                        checked={inputR08_3 === "1" ? true : false}
                        disabled ={disabledR08_2} 
                      />
                      <label className="form-check-label" htmlFor="R08_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R08_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R08_4"
                        onChange={R08_4OnChange}
                        checked={inputR08_4 === "1" ? true : false}
                        disabled ={disabledR08_2} 
                      />
                      <label className="form-check-label" htmlFor="R08_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R08_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R08_5"
                        onChange={R08_5OnChange}
                        checked={inputR08_5 === "1" ? true : false}
                        disabled ={disabledR08_2} 
                      />
                      <label className="form-check-label" htmlFor="R08_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR08 }}><label className="text-danger">ต้องระบุ R08_1 , R08_2</label></div>
              <div className="mt-3" style={{ display: showWarningR08_2 }}><label className="text-danger">ต้องระบุ R08_3 - R08_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose8}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose8}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show9}
        onHide={handleClose9}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal9}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R09  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R09"
                        onChange={R09OnChange}
                        checked={inputR09 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R09">
                        {" "}
                        9. ราคาปุ๋ย ยาฆ่าแมลง น้ำมันเชื้อเพลิง สูงขึ้นมาก
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R09_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R09_1"
                          type="radio"
                          id={`rd_R09_1${index}`}
                          checked={option.value === inputR09_1}
                          onChange={R09_1OnChange}
                          value={option.value}
                          disabled ={disabledR09} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R09_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R09_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R09_2"
                          type="radio"
                          id={`rd_R09_2${index}`}
                          checked={option.value === inputR09_2}
                          onChange={R09_2OnChange}
                          value={option.value}
                          disabled ={disabledR09} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R09_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R09_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R09_3"
                        onChange={R09_3OnChange}
                        checked={inputR09_3 === "1" ? true : false}
                        disabled ={disabledR09_2} 
                      />
                      <label className="form-check-label" htmlFor="R09_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R09_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R09_4"
                        onChange={R09_4OnChange}
                        checked={inputR09_4 === "1" ? true : false}
                        disabled ={disabledR09_2} 
                      />
                      <label className="form-check-label" htmlFor="R09_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R09_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R09_5"
                        onChange={R09_5OnChange}
                        checked={inputR09_5 === "1" ? true : false}
                        disabled ={disabledR09_2} 
                      />
                      <label className="form-check-label" htmlFor="R09_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR09 }}><label className="text-danger">ต้องระบุ R09_1 , R09_2</label></div>
              <div className="mt-3" style={{ display: showWarningR09_2 }}><label className="text-danger">ต้องระบุ R09_3 - R09_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose9}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose9}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show10}
        onHide={handleClose10}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal10}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R10  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R10"
                        onChange={R10OnChange}
                        checked={inputR10 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R10">
                        {" "}
                        10. ค่าเมล็ด ค่าพันธุ์พืช ค่าพันธุ์สัตว์ มีราคาสูง
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R10_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R10_1"
                          type="radio"
                          id={`rd_R10_1${index}`}
                          checked={option.value === inputR10_1}
                          onChange={R10_1OnChange}
                          value={option.value}
                          disabled ={disabledR10} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R10_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R10_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R10_2"
                          type="radio"
                          id={`rd_R10_2${index}`}
                          checked={option.value === inputR10_2}
                          onChange={R10_2OnChange}
                          value={option.value}
                          disabled ={disabledR10} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R10_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R10_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R10_3"
                        onChange={R10_3OnChange}
                        checked={inputR10_3 === "1" ? true : false}
                        disabled ={disabledR10_2} 
                      />
                      <label className="form-check-label" htmlFor="R10_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R10_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R10_4"
                        onChange={R10_4OnChange}
                        checked={inputR10_4 === "1" ? true : false}
                        disabled ={disabledR10_2} 
                      />
                      <label className="form-check-label" htmlFor="R10_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R10_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R10_5"
                        onChange={R10_5OnChange}
                        checked={inputR10_5 === "1" ? true : false}
                        disabled ={disabledR10_2} 
                      />
                      <label className="form-check-label" htmlFor="R10_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR10 }}><label className="text-danger">ต้องระบุ R10_1 , R10_2</label></div>
              <div className="mt-3" style={{ display: showWarningR10_2 }}><label className="text-danger">ต้องระบุ R10_3 - R10_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose10}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose10}
              >
                บันทึก
              </button>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={show11}
        onHide={handleClose11}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal11}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>

              <Row>
                <Col md={12} className="">
                  <label> R11  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R11"
                        onChange={R11OnChange}
                        checked={inputR11 === "1" ? true : false}
                      />
                      <label className="form-check-label" htmlFor="R11">
                        {" "}
                        11. ค่าบริการเตรียมดิน การดูแลรักษา และการเก็บเกี่ยวสูงขึ้น
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ระดับความรุนแรงของปัญหา/ภัยพิบัติที่ประสบ</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R11_1 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_1.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R11_1"
                          type="radio"
                          id={`rd_R11_1${index}`}
                          checked={option.value === inputR11_1}
                          onChange={R11_1OnChange}
                          value={option.value}
                          disabled ={disabledR11} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R11_1${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>การได้รับ ความช่วยเหลือ/แก้ปัญหา</label>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={2}>
                  <label>R11_2 </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    {_R01_2.map((option, index) => (
                      <div className="form-check" key={option.value}>
                        <input
                          className="form-check-input"
                          name="rd_R11_2"
                          type="radio"
                          id={`rd_R11_2${index}`}
                          checked={option.value === inputR11_2}
                          onChange={R11_2OnChange}
                          value={option.value}
                          disabled ={disabledR11} 
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rd_R11_2${index}`}
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3 question-title">
                <Col md={12}>
                  <label>ได้รับจาก</label>
                </Col>
              </Row>

              <Row className="">

                <Col md={4} className="mt-3">
                  <label> R11_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R11_3"
                        onChange={R11_3OnChange}
                        checked={inputR11_3 === "1" ? true : false}
                        disabled ={disabledR11_2} 
                      />
                      <label className="form-check-label" htmlFor="R11_3">
                        {" "}
                        ได้รับจากคนในชุมชน
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R11_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R11_4"
                        onChange={R11_4OnChange}
                        checked={inputR11_4 === "1" ? true : false}
                        disabled ={disabledR11_2} 
                      />
                      <label className="form-check-label" htmlFor="R11_4">
                        {" "}
                        ได้รับจากรัฐบาล
                      </label>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="mt-3">
                  <label> R11_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="R11_5"
                        onChange={R11_5OnChange}
                        checked={inputR11_5 === "1" ? true : false}
                        disabled ={disabledR11_2} 
                      />
                      <label className="form-check-label" htmlFor="R11_5">
                        {" "}
                        ได้รับจากอื่นๆ (เช่น NGO)
                      </label>
                    </div>
                  </div>
                </Col>


              </Row>


            </Col>
            
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningR11 }}><label className="text-danger">ต้องระบุ R11_1 , R11_2</label></div>
              <div className="mt-3" style={{ display: showWarningR11_2 }}><label className="text-danger">ต้องระบุ R11_3 - R11_5 อย่างน้อย 1 รายการ</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleCancelAndClose11}
              >
                ยกเลิก
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose11}
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
