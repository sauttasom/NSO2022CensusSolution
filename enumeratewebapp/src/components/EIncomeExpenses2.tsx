import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01, _N01, _N26, _N31, _O01, _O03, _O05, _O06, _P01, _P10 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC19Info } from "../model/REC19Info";
import { REC01Info } from "../model/REC01Info";

export default function EIncomeExpenses2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputP01, setInputP01] = useState<string>("");
  const [inputP02, setInputP02] = useState<string>("");
  const [inputP03, setInputP03] = useState<string>("");
  const [inputP04, setInputP04] = useState<string>("");
  const [inputP05, setInputP05] = useState<string>("");
  const [inputP06, setInputP06] = useState<string>("");
  const [inputP07, setInputP07] = useState<string>("");
  const [inputP08, setInputP08] = useState<string>("");
  const [inputP09, setInputP09] = useState<string>("");
  const [inputP10, setInputP10] = useState<string>("");
  const [inputP11, setInputP11] = useState<string>("");
  const [inputP12, setInputP12] = useState<string>("");
  const [inputP13_1, setInputP13_1] = useState<string>("");
  const [inputP13_2, setInputP13_2] = useState<string>("");
  const [inputP13_3, setInputP13_3] = useState<string>("");
  const [inputP13_4, setInputP13_4] = useState<string>("");
  const [inputP13_5, setInputP13_5] = useState<string>("");
  const [inputP13_6, setInputP13_6] = useState<string>("");
  const [inputP13_7, setInputP13_7] = useState<string>("");
  const [inputP13_8, setInputP13_8] = useState<string>("");
  const [inputP13_9, setInputP13_9] = useState<string>("");
  const [inputP13_10, setInputP13_10] = useState<string>("");
  const [inputP13_10T, setInputP13_10T] = useState<string>("");

  //state rec01
  const [valueA02_1, setValueA02_1] = useState<string>("");
  const [valueA02_2, setValueA02_2] = useState<string>("");
  const [valueA02_3, setValueA02_3] = useState<string>("");
  const [valueA02_4, setValueA02_4] = useState<string>("");


  //state disabled
  const [disabledA02_1, setDisabledA02_1] = useState<boolean>(false);
  const [disabledA02_2, setDisabledA02_2] = useState<boolean>(false);
  const [disabledA02_3, setDisabledA02_3] = useState<boolean>(false);
  const [disabledA02_4, setDisabledA02_4] = useState<boolean>(false);

  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {

    console.log("load page EIncomeExpenses2");

    getREC19()

  }, [page === 22]);

  async function getREC19() {
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

        //url getREC19
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC19/" + enumeratesk2?.AH_CODE;
        }

        //api getREC19
        const result = await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {
                
                //set state
                let item: REC19Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                setInputP01(item?.P01!)

                setInputP02(item?.P02! !== "" ? Number(item?.P02!).toString() : "")
                setInputP03(item?.P03! !== "" ? Number(item?.P03!).toString() : "")
                setInputP04(item?.P04! !== "" ? Number(item?.P04!).toString() : "")
                setInputP05(item?.P05! !== "" ? Number(item?.P05!).toString() : "")

                setInputP06(item?.P06! !== "" ? Number(item?.P06!).toString() : "")
                setInputP07(item?.P07! !== "" ? Number(item?.P07!).toString() : "")
                setInputP08(item?.P08! !== "" ? Number(item?.P08!).toString() : "")
                setInputP09(item?.P09! !== "" ? Number(item?.P09!).toString() : "")

                setInputP10(item?.P10!)
                setInputP11(item?.P11! !== "" ? Number(item?.P11!).toString() : "")
                setInputP12(item?.P12! !== "" ? Number(item?.P12!).toString() : "")
                setInputP13_1(item?.P13_1!)
                setInputP13_2(item?.P13_2!)
                setInputP13_3(item?.P13_3!)
                setInputP13_4(item?.P13_4!)
                setInputP13_5(item?.P13_5!)
                setInputP13_6(item?.P13_6!)
                setInputP13_7(item?.P13_7!)
                setInputP13_8(item?.P13_8!)
                setInputP13_9(item?.P13_9!)
                setInputP13_10(item?.P13_10!)
                setInputP13_10T(item?.P13_10T!)

                if(item?.P13_10! === "1"){
                  setShowP13_10T("") //เปิด
                }
                else{
                  setShowP13_10T("none") //ปิด
                }

                if(item?.P10! === "4"){
                  setShowPanel4("none") 
                  setShowPanel5("none") 
                }
                else{
                  setShowPanel4("") 
                  setShowPanel5("") 
                }

              }

              return true;
              
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC19): ", err);
          });

          //หลังจากเรียกข้อมูล แหล่งที่มาของรายได้ REC19 เสร็จแล้ว
          if(result){

            //เรียกข้อมูล ผืนที่ดิน REC01 มาใช้ตรวจสอบ

            //url getREC01
            let url_rec01_api: string = "";
            if (process.env.REACT_APP_ENUMERATE_API) {
              url_rec01_api =
                process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01/" + enumeratesk2?.AH_CODE!;
            }

            //api getREC01
            await axios
            .get(url_rec01_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {

                if (res.data[0] !== undefined) {

                  let rec01:REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) =>value === null ? "" : value)
                  //ถ้า A02_1 = 0 ให้ disabled P02 , P06 และให้ค่าว่างไว้
                  setValueA02_1(rec01?.A02_1!)
                  if(rec01?.A02_1! === "0"){
                    setDisabledA02_1(true)

                    setInputP02("")
                    setInputP06("")
                  }
                  else{
                    setDisabledA02_1(false)
                  }

                  //ถ้า A02_2 = 0 ให้ disabled P03 , P07 และให้ค่าว่างไว้
                  setValueA02_2(rec01?.A02_2!)
                  if(rec01?.A02_2! === "0"){
                    setDisabledA02_2(true)

                    setInputP03("")
                    setInputP07("")
                  }
                  else{
                    setDisabledA02_2(false)
                  }

                  //ถ้า A02_3 = 0 ให้ disabled P04 , P08 และให้ค่าว่างไว้
                  setValueA02_3(rec01?.A02_3!)
                  if(rec01?.A02_3! === "0"){
                    setDisabledA02_3(true)

                    setInputP04("")
                    setInputP08("")
                  }
                  else{
                    setDisabledA02_3(false)
                  }

                  //ถ้า A02_4 = 0 ให้ disabled P05 , P09 และให้ค่าว่างไว้
                  setValueA02_4(rec01?.A02_4!)
                  if(rec01?.A02_4! === "0"){
                    setDisabledA02_4(true)

                    setInputP05("")
                    setInputP09("")
                  }
                  else{
                    setDisabledA02_4(false)
                  }
                  
                }
          
              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01 on EIncomeExpenses2): ", err);
            });

          }



      } catch (err) {
        console.error("ERROR (getREC19): ", err);
      }
    }
  }

  //action : input
  const P01OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP01(event.target.value)
  }

  const P02OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP02(event.target.value)
  }

  const P03OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP03(event.target.value)
  }

  const P04OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP04(event.target.value)
  }

  const P05OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP05(event.target.value)
  }

  const P06OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP06(event.target.value)
  }

  const P07OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP07(event.target.value)
  }

  const P08OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP08(event.target.value)
  }

  const P09OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP09(event.target.value)
  }

  const P10OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP10(event.target.value)
    if(event.target.value === "1" || event.target.value === "3"){

    }
    else{
      setShowWarningP11("none")
      setShowWarningP12("none")
    }

    if (event.target.value === "2") {
      setInputP12("0")
      setDisabledP12(true)
    }
    else{
      setInputP12("")
      setDisabledP12(false)
    }

    if (event.target.value === "4") {
      setInputP11("")
      setInputP12("")
      setInputP13_1("")
      setInputP13_2("")
      setInputP13_3("")
      setInputP13_4("")
      setInputP13_5("")
      setInputP13_6("")
      setInputP13_7("")
      setInputP13_8("")
      setInputP13_9("")
      setInputP13_10("")
      setInputP13_10T("")
      
      setShowPanel4("none")
      setShowPanel5("none")
      setShowWarningP13("none")
    }
    else{
      //ทำต่อด้วย
      setShowPanel4("")
      setShowPanel5("")

      
    }

  }

  const P11OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP11(event.target.value)
  }

  const P12OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP12(event.target.value)
  }

  const P13_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_1(event.target.checked === true ? "1" : "0");
  }
  const P13_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_2(event.target.checked === true ? "1" : "0");
  }
  const P13_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_3(event.target.checked === true ? "1" : "0");
  }
  const P13_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_4(event.target.checked === true ? "1" : "0");
  }
  const P13_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_5(event.target.checked === true ? "1" : "0");
  }
  const P13_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_6(event.target.checked === true ? "1" : "0");
  }
  const P13_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_7(event.target.checked === true ? "1" : "0");
  }
  const P13_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_8(event.target.checked === true ? "1" : "0");
  }
  const P13_9OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_9(event.target.checked === true ? "1" : "0");
  }
  const P13_10OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_10(event.target.checked === true ? "1" : "0");

    if(event.target.checked === true){
      setShowP13_10T("")      
    }
    else{
      setShowP13_10T("none")
      setInputP13_10T("")
    }

    setShowWarningP13_10T("none")

  }
  const P13_10TOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputP13_10T(event.target.value);
  }

  //state show / hide : input
  const [showP13_10T, setShowP13_10T] = useState<string>("none"); // ปิด
  const [showPanel4, setShowPanel4] = useState<string>(""); // เปิด
  const [showPanel5, setShowPanel5] = useState<string>(""); // เปิด


  //state warning
  const [showWarningP01, setShowWarningP01] = useState<string>("none"); // ปิด
  const [showWarningP10, setShowWarningP10] = useState<string>("none"); // ปิด

  const [showWarningP02, setShowWarningP02] = useState<string>("none"); // ปิด
  const [showWarningP03, setShowWarningP03] = useState<string>("none"); // ปิด
  const [showWarningP04, setShowWarningP04] = useState<string>("none"); // ปิด
  const [showWarningP05, setShowWarningP05] = useState<string>("none"); // ปิด
  const [showWarningP06, setShowWarningP06] = useState<string>("none"); // ปิด
  const [showWarningP07, setShowWarningP07] = useState<string>("none"); // ปิด
  const [showWarningP08, setShowWarningP08] = useState<string>("none"); // ปิด
  const [showWarningP09, setShowWarningP09] = useState<string>("none"); // ปิด
  const [showWarningP02_P05, setShowWarningP02_P05] = useState<string>("none"); // ปิด
  const [showWarningP06_P09, setShowWarningP06_P09] = useState<string>("none"); // ปิด
  const [showWarningP11, setShowWarningP11] = useState<string>("none"); // ปิด
  const [showWarningP12, setShowWarningP12] = useState<string>("none"); // ปิด
  const [showWarningP13, setShowWarningP13] = useState<string>("none"); // ปิด
  const [showWarningP13_10T, setShowWarningP13_10T] = useState<string>("none"); // ปิด

  const [showWarningP11_P12, setShowWarningP11_P12] = useState<string>("none"); // ปิด

  //state disabled
  const [disabledP12, setDisabledP12] = useState<boolean>(false);

  //state invalid input
  /* const [invalidP11, setInvalidP11] = useState<boolean>(false);
  const [invalidP12, setInvalidP12] = useState<boolean>(false); */


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 9 แหล่งที่มาของรายได้ มูลค่าผลผลิต และหนี้สินทางการเกษตร
  const SaveOnClick = async () => {


    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      p01:inputP01,
      p02:inputP02 !== "" && inputP02 !== undefined ? Number(inputP02).toString().padStart(9, '0') : "",
      p03:inputP03 !== "" && inputP03 !== undefined ? Number(inputP03).toString().padStart(9, '0') : "",
      p04:inputP04 !== "" && inputP04 !== undefined ? Number(inputP04).toString().padStart(9, '0') : "",
      p05:inputP05 !== "" && inputP05 !== undefined ? Number(inputP05).toString().padStart(9, '0') : "",
      p06:inputP06 !== "" && inputP06 !== undefined ? Number(inputP06).toString().padStart(9, '0') : "",
      p07:inputP07 !== "" && inputP07 !== undefined ? Number(inputP07).toString().padStart(9, '0') : "",
      p08:inputP08 !== "" && inputP08 !== undefined ? Number(inputP08).toString().padStart(9, '0') : "",
      p09:inputP09 !== "" && inputP09 !== undefined ? Number(inputP09).toString().padStart(9, '0') : "",
      p10:inputP10,
      p11:inputP11 !== "" && inputP11 !== undefined ? Number(inputP11).toString().padStart(9, '0') : "",
      p12:inputP12 !== "" && inputP12 !== undefined ? Number(inputP12).toString().padStart(9, '0') : "",
      p13_1:inputP13_1,
      p13_2:inputP13_2,
      p13_3:inputP13_3,
      p13_4:inputP13_4,
      p13_5:inputP13_5,
      p13_6:inputP13_6,
      p13_7:inputP13_7,
      p13_8:inputP13_8,
      p13_9:inputP13_9,
      p13_10:inputP13_10,
      p13_10T:inputP13_10T
    };

    //console.log(body);

    //consistency check
    let isvalid = true;
    
    if(inputP01 === ""){
      isvalid = false
      setShowWarningP01("")
    }
    else{
      setShowWarningP01("none")

      //ถ้า A02_1 = 1 --> P02 , P06 ไม่เท่ากับค่าว่าง
      if(valueA02_1 === "1"){
        if(inputP02 === "" ){
          isvalid = false
          setShowWarningP02("") //เปิด
        }
        else{
          setShowWarningP02("none") 
        }

        if(inputP06 === "" ){
          isvalid = false
          setShowWarningP06("") //เปิด
        }
        else{
          setShowWarningP06("none") 
        }
      }

      //ถ้า A02_2 = 1 --> P03 , P07 ไม่เท่ากับค่าว่าง
      if(valueA02_2 === "1"){
        if(inputP03 === "" ){
          isvalid = false
          setShowWarningP03("") //เปิด
        }
        else{
          setShowWarningP03("none") 
        }

        if(inputP07 === "" ){
          isvalid = false
          setShowWarningP07("") //เปิด
        }
        else{
          setShowWarningP07("none") 
        }
      }


      //ถ้า A02_3 = 1 --> P04 , P08 ไม่เท่ากับค่าว่าง
      if(valueA02_3 === "1"){
        if(inputP04 === "" ){
          isvalid = false
          setShowWarningP04("") //เปิด
        }
        else{
          setShowWarningP04("none") 
        }

        if(inputP08 === "" ){
          isvalid = false
          setShowWarningP08("") //เปิด
        }
        else{
          setShowWarningP08("none") 
        }
      }


      //ถ้า A02_4 = 1 --> P05 , P09 ไม่เท่ากับค่าว่าง
      if(valueA02_4 === "1"){
        if(inputP05 === "" ){
          isvalid = false
          setShowWarningP05("") //เปิด
        }
        else{
          setShowWarningP05("none") 
        }

        if(inputP09 === "" ){
          isvalid = false
          setShowWarningP09("") //เปิด
        }
        else{
          setShowWarningP09("none") 
        }
      }


      //ถ้า P01 ≠ blank แล้ว - P02 - P05 อย่างน้อย 1 รายการ ≠ blank
      /* if(inputP02 === "" && inputP03 === "" && inputP04 === "" && inputP05 === "" ){
        isvalid = false
        setShowWarningP02_P05("") //เปิด
      } */

      //ถ้า P01 ≠ blank แล้ว  - P06 - P09 อย่างน้อย 1 รายการ ≠ blank
      /* if(inputP06 === "" && inputP07 === "" && inputP08 === "" && inputP09 === "" ){
        isvalid = false
        setShowWarningP06_P09("") //เปิด
      } */
    }

    if(inputP10 === ""){
      isvalid = false
      setShowWarningP10("")
    }
    else{
      setShowWarningP10("none")
    }

    if(inputP10 === "1" || inputP10 === "3"){
      //ถ้า P10 = 1 หรือ P10 = 3 แล้ว --> - P11 - P12 ≠ blank
      if(inputP11 === "" ){
        isvalid = false
        setShowWarningP11("")
      }
      else{
        setShowWarningP11("none")
      }

      if(inputP12 === "" ){
        isvalid = false
        setShowWarningP12("")
      }else{
        setShowWarningP12("none")
      }

      if(inputP13_1 === "1" || inputP13_2 === "1" || inputP13_3 === "1" || inputP13_4 === "1" || inputP13_5 === "1" 
        || inputP13_6 === "1" || inputP13_7 === "1" || inputP13_8 === "1" || inputP13_9 === "1" || inputP13_10 === "1"){
        setShowWarningP13("none")
      }
      else{
        isvalid = false
        setShowWarningP13("")
      }

      // P11 ≥ P12
      if(Number(inputP11) < Number(inputP12) ){
        isvalid = false
        setShowWarningP11_P12("")
      }
      else{
        setShowWarningP11_P12("none")
      }

    }

    if(inputP10 === "2" ){
      if(inputP11 === "" ){
        isvalid = false
        setShowWarningP11("")
      }
      else{
        setShowWarningP11("none")
      }

      if(inputP13_1 === "1" || inputP13_2 === "1" || inputP13_3 === "1" || inputP13_4 === "1" || inputP13_5 === "1" 
        || inputP13_6 === "1" || inputP13_7 === "1" || inputP13_8 === "1" || inputP13_9 === "1" || inputP13_10 === "1"){
        setShowWarningP13("none")
      }
      else{
        isvalid = false
        setShowWarningP13("")
       
      }

    }

    if(inputP13_10 === "1"){
      if(inputP13_10T === "" ){
        isvalid = false
        setShowWarningP13_10T("")
      }
      else{
        setShowWarningP13_10T("none")
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

          //url insertREC19
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC19";
          }

          //api insertREC19
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  setShowWarningP02_P05("none") //ปิด
                  setShowWarningP06_P09("none") //ปิด

                  setShowWarningP11("none") //ปิด
                  setShowWarningP12("none") //ปิด

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
        console.error("SaveOnClick ERROR (ตอนที่ 9 แหล่งที่มาของรายได้ มูลค่าผลผลิต และหนี้สินทางการเกษตร): ", error);
      }

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
                        ตอนที่ 9 แหล่งที่มาของรายได้ มูลค่าผลผลิต และหนี้สินทางการเกษตร (เฉพาะผู้ถือครองทำการเกษตรที่ตอบ A04 = 1 หรือ A04 = 2)
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl522339"
                        aria-expanded="false"
                        aria-controls="collapseControl522339"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl522339">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. แหล่งที่มาของรายได้ของครัวเรือน ในรอบ 12 เดือนที่แล้ว (ตอบเพียงข้อเดียว)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>P01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_P01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_P01"
                                  type="radio"
                                  id={`rd_P01${index}`}
                                  checked={option.value === inputP01}
                                  onChange={P01OnChange}
                                  value={option.value}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_P01${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="mb-3" style={{ display: showWarningP01 }}><label className="text-danger">กรุณาเลือก P01</label></div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            2. รายได้ทางการเกษตรทั้งสิ้น ในรอบ 12 เดือนที่แล้ว
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            2.1 มูลค่าผลผลิตทางการเกษตร (รวมทั้งขายและไม่ได้ขาย) (รายการใดไม่ได้ทำ “ให้ปล่อยว่างไว้” รายการใดทำแต่ยังไม่มีผลผลิต “ให้บันทึก 0”)
                          </label>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mt-2">
                          <label> P02 1. จากการเพาะปลูกพืช</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP02) >= 0 && Number(inputP02) <= 999999999 && Number.isInteger(Number(inputP02))  ) || inputP02 === "" || inputP02 === undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P02OnChange}
                              value={inputP02}
                              disabled={disabledA02_1}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                          </div>
                          <div className="mb-3" style={{ display: showWarningP02 }}><label className="text-danger">กรุณาระบุ P02 </label></div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mt-2">
                          <label> P03 2. จากการเลี้ยงสัตว์</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP03) >= 0 && Number(inputP03) <= 999999999 && Number.isInteger(Number(inputP03)) ) || inputP03 === "" || inputP03 === undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P03OnChange}
                              value={inputP03}
                              disabled={disabledA02_2}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                          </div>
                          <div className="mb-3" style={{ display: showWarningP03 }}><label className="text-danger">กรุณาระบุ P03 </label></div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mt-2">
                          <label> P04 3. จากการเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP04) >= 0 && Number(inputP04) <= 999999999 && Number.isInteger(Number(inputP04)) ) || inputP04 === "" || inputP04 === undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P04OnChange}
                              value={inputP04}
                              disabled={disabledA02_3}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                          </div>
                          <div className="mb-3" style={{ display: showWarningP04 }}><label className="text-danger">กรุณาระบุ P04 </label></div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mt-2">
                          <label> P05 4. จากนาเกลือสมุทร</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP05) >= 0 && Number(inputP05) <= 999999999 && Number.isInteger(Number(inputP05)) ) || inputP05 === "" || inputP05 === undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P05OnChange}
                              value={inputP05}
                              disabled={disabledA02_4}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                          </div>
                          <div className="mb-3" style={{ display: showWarningP05 }}><label className="text-danger">กรุณาระบุ P05 </label></div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>                          
                          <div className="mb-3" style={{ display: showWarningP02_P05 }}><label className="text-danger">กรุณาระบุ P02 - P05 อย่างน้อย 1 รายการ</label></div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            2.2 ผลพลอยได้จากการผลิตทางการเกษตร (เฉพาะที่ขายได้) (รายการใดไม่ได้ทำ “ให้ปล่อยว่างไว้” รายการใดทำแต่ไม่มีผลพลอยได้ “ให้บันทึก 0”)
                          </label>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mt-2">
                          <label> P06 1. จากการเพาะปลูกพืช</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP06) >= 0 && Number(inputP06) <= 999999999 && Number.isInteger(Number(inputP06)) ) || inputP06 === "" || inputP06 === undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P06OnChange}
                              value={inputP06}
                              disabled={disabledA02_1}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                          </div>
                          <div className="mb-3" style={{ display: showWarningP06 }}><label className="text-danger">กรุณาระบุ P06 </label></div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mt-2">
                          <label> P07 2. จากการเลี้ยงสัตว์</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP07) >= 0 && Number(inputP07) <= 999999999 && Number.isInteger(Number(inputP07)) ) || inputP07 === "" || inputP07 === undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P07OnChange}
                              value={inputP07}
                              disabled={disabledA02_2}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                          </div>
                          <div className="mb-3" style={{ display: showWarningP07 }}><label className="text-danger">กรุณาระบุ P07 </label></div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mt-2">
                          <label> P08 3. จากการเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP08) >= 0 && Number(inputP08) <= 999999999 && Number.isInteger(Number(inputP08)) ) || inputP08 === "" || inputP08 === undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P08OnChange}
                              value={inputP08}
                              disabled={disabledA02_3}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                          </div>
                          <div className="mb-3" style={{ display: showWarningP08 }}><label className="text-danger">กรุณาระบุ P08 </label></div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mt-2">
                          <label> P09 4. จากนาเกลือสมุทร</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP09) >= 0 && Number(inputP09) <= 999999999 && Number.isInteger(Number(inputP09)) ) || inputP09 === "" || inputP09 === undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P09OnChange}
                              value={inputP09}
                              disabled={disabledA02_4}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                          </div>
                          <div className="mb-3" style={{ display: showWarningP09 }}><label className="text-danger">กรุณาระบุ P09 </label></div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="mb-3" style={{ display: showWarningP06_P09 }}><label className="text-danger">กรุณาระบุ P06 - P09 อย่างน้อย 1 รายการ</label></div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            3. ณ วันที่ 1 พฤษภาคม 2566 ครัวเรือนนี้มีหนี้สินหรือไม่ (ตอบเพียงข้อเดียว)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>P10</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_P10.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_P10"
                                  type="radio"
                                  id={`rd_P10${index}`}
                                  checked={option.value === inputP10}
                                  onChange={P10OnChange}
                                  value={option.value}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_P10${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="mb-3" style={{ display: showWarningP10 }}><label className="text-danger">กรุณาเลือก P10</label></div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title" style={{ display: showPanel4 }}>
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            4. จำนวนหนี้ ค้างชำระ ณ วันที่ 1 พฤษภาคม 2566
                          </label>
                        </Col>
                      </Row>

                      <Row style={{ display: showPanel4 }}>
                        <Col md={6} className="mt-2">
                          <label> P11 1. จำนวนหนี้ทั้งสิ้นที่ค้างชำระ</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP11) >= 1 && Number(inputP11) <= 999999999 && Number.isInteger(Number(inputP11)) ) || inputP11 === "" || inputP11=== undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={1}
                              max={999999999}
                              onChange={P11OnChange}
                              value={inputP11}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 1 ถึง 999999999
                            </div>
                            
                          </div>
                          <div className="mb-3" style={{ display: showWarningP11 }}><label className="text-danger">ถ้า P10 = 1 หรือ P10 = 3 แล้ว กรุณาระบุ P11</label></div>
                        </Col>
                      </Row>

                      <Row style={{ display: showPanel4 }}>
                        <Col md={6} className="mt-2">
                          <label> P12 2. จำนวนหนี้ทางการเกษตรที่ค้างชำระ (ไม่มี ให้บันทึก “0”)</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className={`form-control form-control-mini-x  ${(Number(inputP12) >= 0 && Number(inputP12) <= 999999999 && Number.isInteger(Number(inputP12)) ) || inputP12 === "" || inputP12=== undefined
                                  ? ""
                                  : "is-invalid"
                                }`}
                              min={0}
                              max={999999999}
                              onChange={P12OnChange}
                              value={inputP12}
                              disabled={disabledP12}
                            />
                            <span className="input-group-text">บาท</span>
                            <div className="invalid-feedback">
                              ค่าที่ระบุได้คือ 0 ถึง 999999999
                            </div>
                            
                          </div>
                          <div className="mb-3" style={{ display: showWarningP12 }}><label className="text-danger">ถ้า P10 = 1 หรือ P10 = 3 แล้ว กรุณาระบุ P12</label></div>
                          <div className="mb-3" style={{ display: showWarningP11_P12 }}><label className="text-danger">ถ้า P10 = 1 หรือ P10 = 3 แล้ว P11 ต้องมากกว่าหรือเท่ากับ P12</label></div>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-title" style={{ display: showPanel5 }}>
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            5. แหล่งเงินกู้ (เจ้าหนี้) (ตอบได้มากกว่า 1 ข้อ)
                          </label>
                        </Col>
                      </Row>

                      <Row style={{ display: showPanel5 }}>

                        <Col md={12} className="mt-3">
                          <label> P13_1  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_1"
                                onChange={P13_1OnChange}
                                checked={inputP13_1 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_1">
                                {" "}
                                1. ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธกส. )
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_2  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_2"
                                onChange={P13_2OnChange}
                                checked={inputP13_2 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_2">
                                {" "}
                                2. ธนาคารอื่น ๆ/สถาบันการเงิน
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_3  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_3"
                                onChange={P13_3OnChange}
                                checked={inputP13_3 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_3">
                                {" "}
                                3. สหกรณ์/กลุ่มเกษตรกร
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_4  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_4"
                                onChange={P13_4OnChange}
                                checked={inputP13_4 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_4">
                                {" "}
                                4. กองทุนหมู่บ้านและชุมชนเมืองแห่งชาติ
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_5  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_5"
                                onChange={P13_5OnChange}
                                checked={inputP13_5 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_5">
                                {" "}
                                5. หน่วยราชการอื่น ๆ เช่น กชก. คชก.
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_6  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_6"
                                onChange={P13_6OnChange}
                                checked={inputP13_6 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_6">
                                {" "}
                                6. พ่อค้าคนกลาง
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_7  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_7"
                                onChange={P13_7OnChange}
                                checked={inputP13_7 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_7">
                                {" "}
                                7. นายทุนเงินกู้
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_8  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_8"
                                onChange={P13_8OnChange}
                                checked={inputP13_8 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_8">
                                {" "}
                                8. ญาติ/เพื่อนบ้าน/บุคคลอื่น
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_9  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_9"
                                onChange={P13_9OnChange}
                                checked={inputP13_9 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_9">
                                {" "}
                                9. ร้านค้าเอกชน
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="mt-3">
                          <label> P13_10  </label>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="P13_10"
                                onChange={P13_10OnChange}
                                checked={inputP13_10 === "1" ? true : false}
                              />
                              <label className="form-check-label" htmlFor="P13_10">
                                {" "}
                                10. อื่น ๆ (ระบุ)
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={12} className="">
                          <label> </label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={50}
                            onChange={P13_10TOnChange}
                            value={inputP13_10T}
                            style={{ display: showP13_10T }}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="mb-3" style={{ display: showWarningP13_10T }}><label className="text-danger">กรุณาระบุ อื่นๆ (P13_10T)</label></div>
                          <div className="mb-3" style={{ display: showWarningP13 }}><label className="text-danger">กรุณาเลือก P13_1 ถึง P13_10 อย่างน้อย 1 รายการ</label></div>
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


    </div>
  );
}
