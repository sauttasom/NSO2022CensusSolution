import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { LandCalculator } from "../service/LandCalculator";
import { REC05Info } from "../model/REC05Info";
import { REC01Info } from "../model/REC01Info";
import { REC02Info } from "../model/REC02Info";

export default function EOilPalm() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputD01, setInputD01] = useState("");

  const [inputD02_1, setInputD02_1] = useState("ปาล์มน้ำมันยังไม่ให้ผลผลิต");
  const [inputD02_2, setInputD02_2] = useState("10123");
  const [inputD02_3, setInputD02_3] = useState("");
  const [inputD02_4, setInputD02_4] = useState("");
  const [inputD02_5, setInputD02_5] = useState("");
  const [inputD02_5A, setInputD02_5A] = useState("");
  const [inputD02_5B, setInputD02_5B] = useState("");
  const [inputD02_5C, setInputD02_5C] = useState("");
  const [inputD02_6, setInputD02_6] = useState("");
  const [inputD02_7, setInputD02_7] = useState("");

  const [inputD03_1, setInputD03_1] = useState("ปาล์มน้ำมันกำลังให้ผลผลิต");
  const [inputD03_2, setInputD03_2] = useState("10124");
  const [inputD03_3, setInputD03_3] = useState("");
  const [inputD03_4, setInputD03_4] = useState("");
  const [inputD03_5, setInputD03_5] = useState("");
  const [inputD03_5A, setInputD03_5A] = useState("");
  const [inputD03_5B, setInputD03_5B] = useState("");
  const [inputD03_5C, setInputD03_5C] = useState("");
  const [inputD03_6, setInputD03_6] = useState("");
  const [inputD03_7, setInputD03_7] = useState("");

  const [inputD04_1, setInputD04_1] = useState("ปาล์มน้ำมันแก่ไม่ให้ผลผลิตแล้ว");
  const [inputD04_2, setInputD04_2] = useState("10125");
  const [inputD04_3, setInputD04_3] = useState("");
  const [inputD04_4, setInputD04_4] = useState("");
  const [inputD04_5, setInputD04_5] = useState("");
  const [inputD04_5A, setInputD04_5A] = useState("");
  const [inputD04_5B, setInputD04_5B] = useState("");
  const [inputD04_5C, setInputD04_5C] = useState("");
  const [inputD04_6, setInputD04_6] = useState("");
  const [inputD04_7, setInputD04_7] = useState("");

  //state rec01
  const [valueA10, setValueA10] = useState<string>("");


  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {
    console.log("load page EOilPalm");
    
    setInputD01("1")

    getREC05()

    setShowWarningD("none")
    setShowWarningD02_5("none")
    setShowWarningD02_6("none")
    setShowWarningD02_7("none")
    setShowWarningD03_5("none")
    setShowWarningD03_6("none")
    setShowWarningD03_7("none")
    setShowWarningD04_5("none")
    setShowWarningD04_6("none")
    setShowWarningD04_7("none")


  }, [page === 6]);

  async function getREC05() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC05/" + enumeratesk2?.AH_CODE;
        }

        const result = await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //console.log(res.data);

              if (res.data[0] !== undefined) {

                //set state
                let item: REC05Info | undefined  = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                //setInputD01(item.D01)

                //setInputD02_1(item.D02_1)
                //setInputD02_2(item.D02_2)
                setInputD02_3(item?.D02_3!)
                setInputD02_4(item?.D02_4!)
                setInputD02_5(item?.D02_5!)
                setInputD02_5A(item?.D02_5A === "" ? "" : parseInt(item?.D02_5A!).toString())
                setInputD02_5B(item?.D02_5B === "" ? "" : parseInt(item?.D02_5B!).toString())
                setInputD02_5C(item?.D02_5C === "" ? "" : parseInt(item?.D02_5C!).toString())
                setInputD02_6(item?.D02_6 === "" ? "" : parseInt(item?.D02_6!).toString())
                setInputD02_7(item?.D02_7 === "" ? "" : parseInt(item?.D02_7!).toString())

                //setInputD03_1(item.D03_1)
                //setInputD03_2(item.D03_2)
                setInputD03_3(item?.D03_3!)
                setInputD03_4(item?.D03_4!)
                setInputD03_5(item?.D03_5!)
                setInputD03_5A(item?.D03_5A === "" ? "" : parseInt(item?.D03_5A!).toString())
                setInputD03_5B(item?.D03_5B === "" ? "" : parseInt(item?.D03_5B!).toString())
                setInputD03_5C(item?.D03_5C === "" ? "" : parseInt(item?.D03_5C!).toString())
                setInputD03_6(item?.D03_6 === "" ? "" : parseInt(item?.D03_6!).toString())
                setInputD03_7(item?.D03_7 === "" ? "" : parseInt(item?.D03_7!).toString())

                //setInputD04_1(item.D04_1)
                //setInputD04_2(item.D04_2)
                setInputD04_3(item?.D04_3!)
                setInputD04_4(item?.D04_4!)
                setInputD04_5(item?.D04_5!)
                setInputD04_5A(item?.D04_5A === "" ? "" : parseInt(item?.D04_5A!).toString())
                setInputD04_5B(item?.D04_5B === "" ? "" : parseInt(item?.D04_5B!).toString())
                setInputD04_5C(item?.D04_5C === "" ? "" : parseInt(item?.D04_5C!).toString())
                setInputD04_6(item?.D04_6 === "" ? "" : parseInt(item?.D04_6!).toString())
                setInputD04_7(item?.D04_7 === "" ? "" : parseInt(item?.D04_7!).toString())

                //disabled D02
                if(item?.D02_3! === "1"){
                  setDisabledD02_3(false)
                }
                else{
                  setDisabledD02_3(true)
                }
                if(item?.D02_4! === "1"){
                  setDisabledD02_4(false)
                }
                else{
                  setDisabledD02_4(true)
                }

                //disabled D03
                if(item?.D03_3! === "1"){
                  setDisabledD03_3(false)
                }
                else{
                  setDisabledD03_3(true)
                }
                if(item?.D03_4! === "1"){
                  setDisabledD03_4(false)
                }
                else{
                  setDisabledD03_4(true)
                }

                //disabled D04
                if(item?.D04_3! === "1"){
                  setDisabledD04_3(false)
                }
                else{
                  setDisabledD04_3(true)
                }
                if(item?.D04_4! === "1"){
                  setDisabledD04_4(false)
                }
                else{
                  setDisabledD04_4(true)
                }


              }

              return true;
                                      
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC05): ", err);
          });


        //หลังจากเรียกข้อมูล ปาล์มน้ำมัน REC05 เสร็จแล้ว
        if (result) {

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

                  let rec01: REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                  //เนื้อที่ปลูกพืชยืนต้น ไม้ผล
                  setValueA10(rec01?.A10!)


                }

              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01 on EOilPalm): ", err);
            });

        }


      } catch (err) {
        console.error("ERROR (getREC05): ", err);
      }
    }
  }


  //action : input
  const D02_1OnChange = (event: any) => {
    setInputD02_1(event.currentTarget.value)
  }

  const D02_2OnChange = (event: any) => {
    setInputD02_2(event.currentTarget.value)
  }

  const D02_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputD02_3(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledD02_3(false)
    }
    else{
      setDisabledD02_3(true)
      setInputD02_5A("")
      setInputD02_5B("")
      setInputD02_5C("")
      setInputD02_6("")
    }
  };

  const D02_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputD02_4(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledD02_4(false)
    }
    else{
      setDisabledD02_4(true)
      setInputD02_7("")
    }
  };

  const D02_5OnChange = (event: any) => {
    setInputD02_5(event.currentTarget.value)
  }

  const D02_5AOnChange = (event: any) => {
    setInputD02_5A(event.currentTarget.value)
  }

  const D02_5BOnChange = (event: any) => {
    setInputD02_5B(event.currentTarget.value)
  }

  const D02_5COnChange = (event: any) => {
    setInputD02_5C(event.currentTarget.value)
  }

  const D02_6OnChange = (event: any) => {
    setInputD02_6(event.currentTarget.value)
  }

  const D02_7OnChange = (event: any) => {
    setInputD02_7(event.currentTarget.value)
  }

  const D03_1OnChange = (event: any) => {
    setInputD03_1(event.currentTarget.value)
  }

  const D03_2OnChange = (event: any) => {
    setInputD03_2(event.currentTarget.value)
  }

  const D03_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputD03_3(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledD03_3(false)
    }
    else{
      setDisabledD03_3(true)
      setInputD03_5A("")
      setInputD03_5B("")
      setInputD03_5C("")
      setInputD03_6("")
    }
  };

  const D03_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputD03_4(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledD03_4(false)
    }
    else{
      setDisabledD03_4(true)
      setInputD03_7("")
    }
  };

  const D03_5OnChange = (event: any) => {
    setInputD03_5(event.currentTarget.value)
  }

  const D03_5AOnChange = (event: any) => {
    setInputD03_5A(event.currentTarget.value)
  }

  const D03_5BOnChange = (event: any) => {
    setInputD03_5B(event.currentTarget.value)
  }

  const D03_5COnChange = (event: any) => {
    setInputD03_5C(event.currentTarget.value)
  }

  const D03_6OnChange = (event: any) => {
    setInputD03_6(event.currentTarget.value)
  }

  const D03_7OnChange = (event: any) => {
    setInputD03_7(event.currentTarget.value)
  }

  const D04_1OnChange = (event: any) => {
    setInputD04_1(event.currentTarget.value)
  }

  const D04_2OnChange = (event: any) => {
    setInputD04_2(event.currentTarget.value)
  }

  const D04_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputD04_3(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledD04_3(false)
    }
    else{
      setDisabledD04_3(true)
      setInputD04_5A("")
      setInputD04_5B("")
      setInputD04_5C("")
      setInputD04_6("")
    }
  };

  const D04_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputD04_4(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledD04_4(false)
    }
    else{
      setDisabledD04_4(true)
      setInputD04_7("")
    }
  };

  const D04_5OnChange = (event: any) => {
    setInputD04_5(event.currentTarget.value)
  }

  const D04_5AOnChange = (event: any) => {
    setInputD04_5A(event.currentTarget.value)
  }

  const D04_5BOnChange = (event: any) => {
    setInputD04_5B(event.currentTarget.value)
  }

  const D04_5COnChange = (event: any) => {
    setInputD04_5C(event.currentTarget.value)
  }

  const D04_6OnChange = (event: any) => {
    setInputD04_6(event.currentTarget.value)
  }

  const D04_7OnChange = (event: any) => {
    setInputD04_7(event.currentTarget.value)
  }

  //interface
  interface PlantList {
    AH_CODE: string;
    T01: string;
    T01_N: string;
    GroupCode: string;
    GroupName: string;
    IsRemove: boolean;
  }


  //state warning
  const [showWarningD, setShowWarningD] = useState<string>("none"); // ปิด
  const [showWarningD02_5, setShowWarningD02_5,] = useState<string>("none"); // ปิด
  const [showWarningD02_6, setShowWarningD02_6,] = useState<string>("none"); // ปิด
  const [showWarningD02_7, setShowWarningD02_7,] = useState<string>("none"); // ปิด
  const [showWarningD03_5, setShowWarningD03_5,] = useState<string>("none"); // ปิด
  const [showWarningD03_6, setShowWarningD03_6,] = useState<string>("none"); // ปิด
  const [showWarningD03_7, setShowWarningD03_7,] = useState<string>("none"); // ปิด
  const [showWarningD04_5, setShowWarningD04_5,] = useState<string>("none"); // ปิด
  const [showWarningD04_6, setShowWarningD04_6,] = useState<string>("none"); // ปิด
  const [showWarningD04_7, setShowWarningD04_7,] = useState<string>("none"); // ปิด

  const [showWarningA10Blank, setShowWarningA10Blank] = useState<string>("none"); // ปิด
  const [showWarningA10_SUM_D, setShowWarningA10_SUM_D] = useState<string>("none"); // ปิด

  //state disabled
  const [disabledD02_3, setDisabledD02_3] = useState<boolean>(false);
  const [disabledD03_3, setDisabledD03_3] = useState<boolean>(false);
  const [disabledD04_3, setDisabledD04_3] = useState<boolean>(false);

  const [disabledD02_4, setDisabledD02_4] = useState<boolean>(false);
  const [disabledD03_4, setDisabledD03_4] = useState<boolean>(false);
  const [disabledD04_4, setDisabledD04_4] = useState<boolean>(false);


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 3.3 ปาล์มน้ำมัน
  const SaveOnClick = async () => {

    //คำนวณผลรวมของ d02_5, d03_5, d04_5 เป็นทศนิยม xxxxx.xxxx
    const _D02_5= LandCalculator.CalculateSummary(Number(inputD02_5A),Number(inputD02_5B),Number(inputD02_5C)).toFixed(4).toString().padStart(10,'0')
    const _D03_5= LandCalculator.CalculateSummary(Number(inputD03_5A),Number(inputD03_5B),Number(inputD03_5C)).toFixed(4).toString().padStart(10,'0')
    const _D04_5= LandCalculator.CalculateSummary(Number(inputD04_5A),Number(inputD04_5B),Number(inputD04_5C)).toFixed(4).toString().padStart(10,'0')
    
    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      d01: inputD01,
      d02_1: inputD02_1,
      d02_2: inputD02_2,
      d02_3: inputD02_3,
      d02_4: inputD02_4,
      d02_5: _D02_5,
      d02_5A: inputD02_5A.padStart(5, '0'),
      d02_5B: inputD02_5B.padStart(1, '0'),
      d02_5C: inputD02_5C.padStart(2, '0'),
      d02_6: inputD02_6 !== "" ? inputD02_6.padStart(6, '0') : "",
      d02_7: inputD02_7 !== "" ? inputD02_7.padStart(6, '0') : "",
      d03_1: inputD03_1,
      d03_2: inputD03_2,
      d03_3: inputD03_3,
      d03_4: inputD03_4,
      d03_5: _D03_5,
      d03_5A: inputD03_5A.padStart(5, '0'),
      d03_5B: inputD03_5B.padStart(1, '0'),
      d03_5C: inputD03_5C.padStart(2, '0'),
      d03_6: inputD03_6 !== "" ? inputD03_6.padStart(6, '0') : "",
      d03_7: inputD03_7 !== "" ? inputD03_7.padStart(6, '0') : "",
      d04_1: inputD04_1,
      d04_2: inputD04_2,
      d04_3: inputD04_3,
      d04_4: inputD04_4,
      d04_5: _D04_5,
      d04_5A: inputD04_5A.padStart(5, '0'),
      d04_5B: inputD04_5B.padStart(1, '0'),
      d04_5C: inputD04_5C.padStart(2, '0'),
      d04_6: inputD04_6 !== "" ? inputD04_6.padStart(6, '0') : "",
      d04_7: inputD04_7 !== "" ? inputD04_7.padStart(6, '0') : ""
    };

    //console.log(body);

    //consistency check
    let isvalid = true;

    //D02, D03, D04 อย่างน้อย 1 รายการ ≠ blank
    if(inputD02_3 === "1" || inputD02_4 === "1"
      || inputD03_3 === "1" || inputD03_4 === "1"
      || inputD04_3 === "1" || inputD04_4 === "1"){
      setShowWarningD("none")
    }
    else{
      isvalid= false
      setShowWarningD("")
    }

    //A10 ≠ blank
    if(Number(valueA10) <= 0){
      setShowWarningA10Blank("")
      isvalid = false
    }
    else{
      setShowWarningA10Blank("none")
    }

    //D02_3 = 1
    if(inputD02_3 === "1"){
      //D02_5 > 0
      if(Number(inputD02_5A) > 0 || Number(inputD02_5B) > 0 || Number(inputD02_5C) > 0){
        setShowWarningD02_5("none")
      }
      else{
        isvalid= false
        setShowWarningD02_5("")
      }

      //D02_6 > 0
      if(Number(inputD02_6) > 0){
        setShowWarningD02_6("none")
      }
      else{
        isvalid= false
        setShowWarningD02_6("")
      }

    }

    //D02_4 = 1
    if (inputD02_4 === "1") {
      //D02_7 > 0
      if (Number(inputD02_7) > 0) {
        setShowWarningD02_7("none")
      }
      else {
        isvalid = false
        setShowWarningD02_7("")
      }
    }


    //D03_3 = 1
    if(inputD03_3 === "1"){
      //D03_5 > 0
      if(Number(inputD03_5A) > 0 || Number(inputD03_5B) > 0 || Number(inputD03_5C) > 0){
        setShowWarningD03_5("none")
      }
      else{
        isvalid= false
        setShowWarningD03_5("")
      }

      //D03_6 > 0
      if(Number(inputD03_6) > 0){
        setShowWarningD03_6("none")
      }
      else{
        isvalid= false
        setShowWarningD03_6("")
      }

    }


    //D03_4 = 1
    if (inputD03_4 === "1") {
      //D03_7 > 0
      if (Number(inputD03_7) > 0) {
        setShowWarningD03_7("none")
      }
      else {
        isvalid = false
        setShowWarningD03_7("")
      }
    }

    //D04_3 = 1
    if(inputD04_3 === "1"){
      //D04_5 > 0
      if(Number(inputD04_5A) > 0 || Number(inputD04_5B) > 0 || Number(inputD04_5C) > 0){
        setShowWarningD04_5("none")
      }
      else{
        isvalid= false
        setShowWarningD04_5("")
      }

      //D04_6 > 0
      if(Number(inputD04_6) > 0){
        setShowWarningD04_6("none")
      }
      else{
        isvalid= false
        setShowWarningD04_6("")
      }

    }


    //D04_4 = 1
    if (inputD04_4 === "1") {
      //D04_7 > 0
      if (Number(inputD04_7) > 0) {
        setShowWarningD04_7("none")
      }
      else {
        isvalid = false
        setShowWarningD04_7("")
      }
    }


    //ผลรวมเนื้อที่เพาะปลูกปาล์มน้ำมัน ต้อง ≤ A10
    const SUM_D02_5 = LandCalculator.CalculateSummary(Number(inputD02_5A),Number(inputD02_5B),Number(inputD02_5C))
    const SUM_D03_5 = LandCalculator.CalculateSummary(Number(inputD03_5A),Number(inputD03_5B),Number(inputD03_5C))
    const SUM_D04_5 = LandCalculator.CalculateSummary(Number(inputD04_5A),Number(inputD04_5B),Number(inputD04_5C))
    if(SUM_D02_5 + SUM_D03_5 + SUM_D04_5 <= Number(valueA10)){
      setShowWarningA10_SUM_D("none")
    }
    else{
      isvalid = false
      setShowWarningA10_SUM_D("")
    }

    //console.log("valueA10",valueA10);
    


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

          //url insertREC05
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC05";
          }

          //api insertREC05
          const result = await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  //setPage(page + 1);
                  return true;
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });

          //รอจนบันทึกเสร็จ
          if (result) {

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
              .catch((err) => { console.log("AXIOS ERROR (getREC01List in EOilPalm): ", err); });


            // url getREC02
            let url_getREC02_api: string = "";
            if (process.env.REACT_APP_ENUMERATE_API) {
              url_getREC02_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC02/" + enumeratesk2?.AH_CODE;
            }

            // api getREC02
            await axios
              .get(url_getREC02_api, { headers: headers, })
              .then((res) => {
                if (res.status === 200) {

                  //ต้องแปลงค่าจาก object เป็น array
                  let pl: PlantList[] = [];

                  let rec02: REC02Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                  let result: number = 0;
                  result = rec02.T01_01N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_01, T01_N: rec02.T01_01N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_02N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_02, T01_N: rec02.T01_02N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_03N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_03, T01_N: rec02.T01_03N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_04N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_04, T01_N: rec02.T01_04N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_05N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_05, T01_N: rec02.T01_05N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_06N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_06, T01_N: rec02.T01_06N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_07N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_07, T01_N: rec02.T01_07N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_08N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_08, T01_N: rec02.T01_08N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_09N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_09, T01_N: rec02.T01_09N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_10N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_10, T01_N: rec02.T01_10N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                  result = rec02.T01_11N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_11, T01_N: rec02.T01_11N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_12N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_12, T01_N: rec02.T01_12N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_13N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_13, T01_N: rec02.T01_13N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_14N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_14, T01_N: rec02.T01_14N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_15N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_15, T01_N: rec02.T01_15N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_16N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_16, T01_N: rec02.T01_16N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_17N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_17, T01_N: rec02.T01_17N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_18N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_18, T01_N: rec02.T01_18N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_19N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_19, T01_N: rec02.T01_19N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_20N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_20, T01_N: rec02.T01_20N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                  result = rec02.T01_21N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_21, T01_N: rec02.T01_21N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_22N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_22, T01_N: rec02.T01_22N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_23N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_23, T01_N: rec02.T01_23N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_24N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_24, T01_N: rec02.T01_24N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_25N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_25, T01_N: rec02.T01_25N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_26N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_26, T01_N: rec02.T01_26N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_27N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_27, T01_N: rec02.T01_27N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_28N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_28, T01_N: rec02.T01_28N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_29N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_29, T01_N: rec02.T01_29N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_30N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_30, T01_N: rec02.T01_30N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                  result = rec02.T01_31N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_31, T01_N: rec02.T01_31N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_32N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_32, T01_N: rec02.T01_32N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_33N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_33, T01_N: rec02.T01_33N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_34N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_34, T01_N: rec02.T01_34N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_35N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_35, T01_N: rec02.T01_35N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_36N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_36, T01_N: rec02.T01_36N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_37N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_37, T01_N: rec02.T01_37N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_38N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_38, T01_N: rec02.T01_38N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_39N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_39, T01_N: rec02.T01_39N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_40N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_40, T01_N: rec02.T01_40N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                  result = rec02.T01_41N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_41, T01_N: rec02.T01_41N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_42N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_42, T01_N: rec02.T01_42N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_43N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_43, T01_N: rec02.T01_43N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_44N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_44, T01_N: rec02.T01_44N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_45N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_45, T01_N: rec02.T01_45N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_46N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_46, T01_N: rec02.T01_46N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_47N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_47, T01_N: rec02.T01_47N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_48N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_48, T01_N: rec02.T01_48N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_49N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_49, T01_N: rec02.T01_49N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                  result = rec02.T01_50N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_50, T01_N: rec02.T01_50N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                  //ตรวจสอบรายการพืชเพื่อไปหน้าถัดไป
                  let perennialplantlist: PlantList[] = pl.filter((p) => {
                    return (
                      p.T01 === "10003" ||
                      p.T01 === "10004" ||
                      p.T01 === "10006" ||
                      p.T01 === "10013" ||
                      p.T01 === "10018" ||
                      p.T01 === "10027" ||
                      p.T01 === "10046" ||
                      p.T01 === "10052" ||
                      p.T01 === "10054" ||
                      p.T01 === "10055" ||
                      p.T01 === "10060" ||
                      p.T01 === "10061" ||
                      p.T01 === "10068" ||
                      p.T01 === "10071" ||
                      p.T01 === "10075" ||
                      p.T01 === "10076" ||
                      p.T01 === "10084"
                    );
                  })
                  let forestlist: PlantList[] = pl.filter((p) => {
                    return (
                      p.T01 === "12110" ||
                      p.T01 === "12119" ||
                      p.T01 === "12128" ||
                      p.T01 === "12129" ||
                      p.T01 === "12133"
                    );
                  })
                  let farmplantlist: PlantList[] = pl.filter((p) => {
                    return (
                      p.T01 === "20094" ||
                      p.T01 === "20394" ||
                      p.T01 === "20405" ||
                      p.T01 === "20416" ||
                      p.T01 === "20419" ||
                      p.T01 === "20431" ||
                      p.T01 === "20432" ||
                      p.T01 === "20438"
                    );
                  })
                  let vegetablelist: PlantList[] = pl.filter((p) => {
                    return (
                      p.T01 === "30144" ||
                      p.T01 === "30153" ||
                      p.T01 === "30154" ||
                      p.T01 === "30173" ||
                      p.T01 === "30208" ||
                      p.T01 === "30209" ||
                      p.T01 === "30215" ||
                      p.T01 === "30216" ||
                      p.T01 === "30227" ||
                      p.T01 === "30233" ||
                      p.T01 === "30235"
                    );
                  })
                  let herblist: PlantList[] = pl.filter((p) => {
                    return (
                      p.T01 === "31245" ||
                      p.T01 === "31247" ||
                      p.T01 === "31267" ||
                      p.T01 === "31280" ||
                      p.T01 === "31289"
                    );
                  })
                  let floweringplantlist: PlantList[] = pl.filter((p) => {
                    return (
                      p.T01 === "40328" ||
                      p.T01 === "40342" ||
                      p.T01 === "40344" ||
                      p.T01 === "40355" ||
                      p.T01 === "41389"
                    );
                  })

                  if (perennialplantlist.length > 0) {
                    setPage(7) //ไปตอนที่ 3.4 พืชยืนต้น
                  }
                  else if (forestlist.length > 0) {
                    setPage(8) //ไปตอนที่ 3.5 สวนป่า
                  }
                  else if (farmplantlist.length > 0) {
                    setPage(9) //ไปตอนที่ 3.6 พืชไร่
                  }
                  else if (vegetablelist.length > 0) {
                    setPage(10) //ไปตอนที่ 3.7 พืชผัก
                  }
                  else if (herblist.length > 0) {
                    setPage(11) //ไปตอนที่ 3.8 สมุนไพร
                  }
                  else if (floweringplantlist.length > 0) {
                    setPage(12) //ไปตอนที่ 3.9 ไม้ดอก ไม้ประดับ
                  }
                  else {

                    //เช็คจาก A02_2 , A02_3 , A02_4
                    if (rec01list[0].A02_2 === "1") {
                      setPage(13); //ไปตอนที่ 4 การเลี้ยงสัตว์
                    }
                    else if (rec01list[0].A02_3 === "1") {
                      setPage(15); //ไปตอนที่ 5 การเลี้ยงสัตว์น้ำ
                    }
                    else if (rec01list[0].A02_4 === "1") {
                      setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
                    }
                    else {
                      setPage(18); //ไปตอนที่ 7 เครื่องจักร
                    }

                  }

                }
              })
              .catch((err) => {
                console.log("AXIOS ERROR (getREC02): ", err);
              });

          }
          
        }
        
      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 3.3 ปาล์มน้ำมัน): ", error);
      }

    }
    else{
      //ไม่ต้องทำอะไร
    }
    
  };

  async function OnClickBack(){

    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;

      //header api
      const headers = {
        Authorization: "Basic " + auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      try {

        // url getREC02
        let url_getREC02_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_getREC02_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC02/" + enumeratesk2?.AH_CODE;
        }

        // api getREC02
        await axios
          .get(url_getREC02_api, {headers: headers,})
          .then((res) => {
            if (res.status === 200) {

              //ต้องแปลงค่าจาก object เป็น array
              let pl: PlantList[] = [];

              let rec02: REC02Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
              let result: number = 0;
              result = rec02.T01_01N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_01, T01_N: rec02.T01_01N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_02N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_02, T01_N: rec02.T01_02N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_03N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_03, T01_N: rec02.T01_03N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_04N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_04, T01_N: rec02.T01_04N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_05N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_05, T01_N: rec02.T01_05N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_06N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_06, T01_N: rec02.T01_06N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_07N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_07, T01_N: rec02.T01_07N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_08N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_08, T01_N: rec02.T01_08N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_09N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_09, T01_N: rec02.T01_09N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_10N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_10, T01_N: rec02.T01_10N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

              result = rec02.T01_11N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_11, T01_N: rec02.T01_11N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_12N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_12, T01_N: rec02.T01_12N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_13N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_13, T01_N: rec02.T01_13N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_14N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_14, T01_N: rec02.T01_14N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_15N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_15, T01_N: rec02.T01_15N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_16N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_16, T01_N: rec02.T01_16N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_17N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_17, T01_N: rec02.T01_17N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_18N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_18, T01_N: rec02.T01_18N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_19N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_19, T01_N: rec02.T01_19N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_20N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_20, T01_N: rec02.T01_20N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

              result = rec02.T01_21N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_21, T01_N: rec02.T01_21N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_22N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_22, T01_N: rec02.T01_22N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_23N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_23, T01_N: rec02.T01_23N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_24N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_24, T01_N: rec02.T01_24N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_25N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_25, T01_N: rec02.T01_25N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_26N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_26, T01_N: rec02.T01_26N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_27N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_27, T01_N: rec02.T01_27N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_28N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_28, T01_N: rec02.T01_28N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_29N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_29, T01_N: rec02.T01_29N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_30N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_30, T01_N: rec02.T01_30N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

              result = rec02.T01_31N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_31, T01_N: rec02.T01_31N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_32N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_32, T01_N: rec02.T01_32N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_33N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_33, T01_N: rec02.T01_33N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_34N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_34, T01_N: rec02.T01_34N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_35N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_35, T01_N: rec02.T01_35N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_36N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_36, T01_N: rec02.T01_36N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_37N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_37, T01_N: rec02.T01_37N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_38N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_38, T01_N: rec02.T01_38N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_39N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_39, T01_N: rec02.T01_39N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_40N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_40, T01_N: rec02.T01_40N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

              result = rec02.T01_41N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_41, T01_N: rec02.T01_41N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_42N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_42, T01_N: rec02.T01_42N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_43N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_43, T01_N: rec02.T01_43N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_44N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_44, T01_N: rec02.T01_44N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_45N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_45, T01_N: rec02.T01_45N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_46N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_46, T01_N: rec02.T01_46N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_47N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_47, T01_N: rec02.T01_47N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_48N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_48, T01_N: rec02.T01_48N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_49N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_49, T01_N: rec02.T01_49N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
              result = rec02.T01_50N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_50, T01_N: rec02.T01_50N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

              //ตรวจสอบรายการพืชเพื่อกลับไปหน้าก่อนหน้า
              let ricelist : PlantList[] = pl.filter((p) => {return p.T01 === "20502" || p.T01 === "20503" || p.T01 === "20504" || p.T01 === "20505" || p.T01 === "20506" ;})
              let rubberlist : PlantList[] = pl.filter((p) => {return p.T01 === "10501" ;})

              if(rubberlist.length > 0){
                setPage(5) //ไปตอนที่ 3.2 ยางพารา
              }
              else if(ricelist.length > 0){
                setPage(4) //ไปตอนที่ 3.1 ข้าว
              }
              else{
                setPage(3) //ไปตอนที่ 3 การปลูกพืช
              }
    

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC02): ", err);
          });


      } catch (error) {
        console.error("OnClickBack ERROR (ตอนที่ 3.3 ปาล์มน้ำมัน): ", error);
      }

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

        //
        if (true) {

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
            .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in EOilPalm): ", err); });


          // url getREC02
          let url_getREC02_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_getREC02_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC02/" + enumeratesk2?.AH_CODE;
          }

          // api getREC02
          await axios
            .get(url_getREC02_api, { headers: headers, })
            .then((res) => {
              if (res.status === 200) {

                //ต้องแปลงค่าจาก object เป็น array
                let pl: PlantList[] = [];

                let rec02: REC02Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                let result: number = 0;
                result = rec02.T01_01N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_01, T01_N: rec02.T01_01N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_02N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_02, T01_N: rec02.T01_02N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_03N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_03, T01_N: rec02.T01_03N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_04N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_04, T01_N: rec02.T01_04N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_05N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_05, T01_N: rec02.T01_05N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_06N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_06, T01_N: rec02.T01_06N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_07N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_07, T01_N: rec02.T01_07N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_08N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_08, T01_N: rec02.T01_08N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_09N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_09, T01_N: rec02.T01_09N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_10N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_10, T01_N: rec02.T01_10N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                result = rec02.T01_11N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_11, T01_N: rec02.T01_11N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_12N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_12, T01_N: rec02.T01_12N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_13N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_13, T01_N: rec02.T01_13N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_14N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_14, T01_N: rec02.T01_14N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_15N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_15, T01_N: rec02.T01_15N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_16N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_16, T01_N: rec02.T01_16N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_17N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_17, T01_N: rec02.T01_17N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_18N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_18, T01_N: rec02.T01_18N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_19N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_19, T01_N: rec02.T01_19N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_20N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_20, T01_N: rec02.T01_20N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                result = rec02.T01_21N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_21, T01_N: rec02.T01_21N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_22N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_22, T01_N: rec02.T01_22N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_23N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_23, T01_N: rec02.T01_23N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_24N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_24, T01_N: rec02.T01_24N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_25N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_25, T01_N: rec02.T01_25N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_26N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_26, T01_N: rec02.T01_26N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_27N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_27, T01_N: rec02.T01_27N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_28N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_28, T01_N: rec02.T01_28N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_29N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_29, T01_N: rec02.T01_29N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_30N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_30, T01_N: rec02.T01_30N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                result = rec02.T01_31N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_31, T01_N: rec02.T01_31N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_32N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_32, T01_N: rec02.T01_32N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_33N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_33, T01_N: rec02.T01_33N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_34N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_34, T01_N: rec02.T01_34N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_35N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_35, T01_N: rec02.T01_35N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_36N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_36, T01_N: rec02.T01_36N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_37N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_37, T01_N: rec02.T01_37N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_38N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_38, T01_N: rec02.T01_38N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_39N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_39, T01_N: rec02.T01_39N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_40N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_40, T01_N: rec02.T01_40N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                result = rec02.T01_41N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_41, T01_N: rec02.T01_41N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_42N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_42, T01_N: rec02.T01_42N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_43N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_43, T01_N: rec02.T01_43N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_44N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_44, T01_N: rec02.T01_44N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_45N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_45, T01_N: rec02.T01_45N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_46N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_46, T01_N: rec02.T01_46N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_47N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_47, T01_N: rec02.T01_47N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_48N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_48, T01_N: rec02.T01_48N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_49N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_49, T01_N: rec02.T01_49N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec02.T01_50N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_50, T01_N: rec02.T01_50N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                //ตรวจสอบรายการพืชเพื่อไปหน้าถัดไป
                let perennialplantlist: PlantList[] = pl.filter((p) => {
                  return (
                    p.T01 === "10003" ||
                    p.T01 === "10004" ||
                    p.T01 === "10006" ||
                    p.T01 === "10013" ||
                    p.T01 === "10018" ||
                    p.T01 === "10027" ||
                    p.T01 === "10046" ||
                    p.T01 === "10052" ||
                    p.T01 === "10054" ||
                    p.T01 === "10055" ||
                    p.T01 === "10060" ||
                    p.T01 === "10061" ||
                    p.T01 === "10068" ||
                    p.T01 === "10071" ||
                    p.T01 === "10075" ||
                    p.T01 === "10076" ||
                    p.T01 === "10084"
                  );
                })
                let forestlist: PlantList[] = pl.filter((p) => {
                  return (
                    p.T01 === "12110" ||
                    p.T01 === "12119" ||
                    p.T01 === "12128" ||
                    p.T01 === "12129" ||
                    p.T01 === "12133"
                  );
                })
                let farmplantlist: PlantList[] = pl.filter((p) => {
                  return (
                    p.T01 === "20094" ||
                    p.T01 === "20394" ||
                    p.T01 === "20405" ||
                    p.T01 === "20416" ||
                    p.T01 === "20419" ||
                    p.T01 === "20431" ||
                    p.T01 === "20432" ||
                    p.T01 === "20438"
                  );
                })
                let vegetablelist: PlantList[] = pl.filter((p) => {
                  return (
                    p.T01 === "30144" ||
                    p.T01 === "30153" ||
                    p.T01 === "30154" ||
                    p.T01 === "30173" ||
                    p.T01 === "30208" ||
                    p.T01 === "30209" ||
                    p.T01 === "30215" ||
                    p.T01 === "30216" ||
                    p.T01 === "30227" ||
                    p.T01 === "30233" ||
                    p.T01 === "30235"
                  );
                })
                let herblist: PlantList[] = pl.filter((p) => {
                  return (
                    p.T01 === "31245" ||
                    p.T01 === "31247" ||
                    p.T01 === "31267" ||
                    p.T01 === "31280" ||
                    p.T01 === "31289"
                  );
                })
                let floweringplantlist: PlantList[] = pl.filter((p) => {
                  return (
                    p.T01 === "40328" ||
                    p.T01 === "40342" ||
                    p.T01 === "40344" ||
                    p.T01 === "40355" ||
                    p.T01 === "41389"
                  );
                })

                if (perennialplantlist.length > 0) {
                  setPage(7) //ไปตอนที่ 3.4 พืชยืนต้น
                }
                else if (forestlist.length > 0) {
                  setPage(8) //ไปตอนที่ 3.5 สวนป่า
                }
                else if (farmplantlist.length > 0) {
                  setPage(9) //ไปตอนที่ 3.6 พืชไร่
                }
                else if (vegetablelist.length > 0) {
                  setPage(10) //ไปตอนที่ 3.7 พืชผัก
                }
                else if (herblist.length > 0) {
                  setPage(11) //ไปตอนที่ 3.8 สมุนไพร
                }
                else if (floweringplantlist.length > 0) {
                  setPage(12) //ไปตอนที่ 3.9 ไม้ดอก ไม้ประดับ
                }
                else {

                  //เช็คจาก A02_2 , A02_3 , A02_4
                  if (rec01list[0].A02_2 === "1") {
                    setPage(13); //ไปตอนที่ 4 การเลี้ยงสัตว์
                  }
                  else if (rec01list[0].A02_3 === "1") {
                    setPage(15); //ไปตอนที่ 5 การเลี้ยงสัตว์น้ำ
                  }
                  else if (rec01list[0].A02_4 === "1") {
                    setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
                  }
                  else {
                    setPage(18); //ไปตอนที่ 7 เครื่องจักร
                  }

                }

              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (NextOnClick.getREC02): ", err);
            });

        }
        
      }
      
    } catch (error) {
      console.error("NextOnClick ERROR (ตอนที่ 3.3 ปาล์มน้ำมัน): ", error);
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
                      md={4}
                      className="col-10 d-flex align-items-center pr-0"
                    >
                      <h5 className="mb-0 py-2 py-xl-0 text-white ">
                      ตอนที่ 3.3 ปาล์มน้ำมัน 
                      </h5>
                    </Col>

                    <Col md={8} className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl588"
                        aria-expanded="false"
                        aria-controls="collapseControl588"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl588">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ณ วันที่ 1 พฤษภาคม 2566 ที่ถือครองนี้มีการปลูกปาล์มน้ำมันหรือไม่ (ระบบกำหนดให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>D01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_D01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_D01"
                                  type="radio"
                                  value={option.value}
                                  id={`rd_D01${index}`}
                                  checked={option.value === inputD01}
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_D01${index}`}
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
                                2. ให้สอบถามและบันทึกรายละเอียดการปลูกปาล์มน้ำมัน
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }} >
                                1) ปาล์มน้ำมันยังไม่ให้ผลผลิต
                              </label>
                              <br />
                            </Col>
                            <Col md={12}>

                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D02_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={inputD02_2}
                                    disabled
                                  />
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D02_3 </label>
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="D02_3"
                                        onChange={D02_3OnChange}
                                        checked={inputD02_3 === "1" ? true : false }
                                      />
                                      <label className="form-check-label" htmlFor="D02_3">
                                        {" "}
                                        ปลูกเป็นกลุ่ม
                                      </label>
                                    </div>
                                  </div>
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D02_4 </label>
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="D02_4"
                                        onChange={D02_4OnChange}
                                        checked={inputD02_4 === "1" ? true : false }
                                      />
                                      <label className="form-check-label" htmlFor="D02_4">
                                        {" "}
                                        ปลูกปะปนกัน
                                      </label>
                                    </div>
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D02_5 เนื้อที่เพาะปลูก (ปลูกเป็นกลุ่ม)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD02_5A) >= 0 &&
                                        Number(inputD02_5A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={D02_5AOnChange}
                                      value={inputD02_5A}
                                      disabled={disabledD02_3}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD02_5B) >= 0 &&
                                        Number(inputD02_5B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={D02_5BOnChange}
                                      value={inputD02_5B}
                                      disabled={disabledD02_3}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD02_5C) >= 0 &&
                                        Number(inputD02_5C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={D02_5COnChange}
                                      value={inputD02_5C}
                                      disabled={disabledD02_3}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD02_5 }}><label className="text-danger">กรุณาระบุ D02_5</label></div>
                                </Col>
                                
                              </Row>

                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D02_6 จำนวนต้นทั้งสิ้น (ปลูกเป็นกลุ่ม)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={999999}
                                      onChange={D02_6OnChange}
                                      value={inputD02_6}
                                      disabled={disabledD02_3}
                                    />
                                    <span className="input-group-text">ต้น</span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD02_6 }}><label className="text-danger">กรุณาระบุ D02_5</label></div>
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D02_7 จำนวนต้นทั้งสิ้น (ปลูกปะปนกัน)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={999999}
                                      onChange={D02_7OnChange}
                                      value={inputD02_7}
                                      disabled={disabledD02_4}
                                    />
                                    <span className="input-group-text">ต้น</span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD02_7 }}><label className="text-danger">กรุณาระบุ D02_7</label></div>
                                </Col>
                              </Row>


                            </Col>
                          </Row>

                          <Row className="mt-5">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                2) ปาล์มน้ำมันกำลังให้ผลผลิต
                              </label>
                              <br />
                            </Col>
                            <Col md={12}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D03_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={inputD03_2}
                                    disabled
                                  />
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D03_3 </label>
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="D03_3"
                                        onChange={D03_3OnChange}
                                        checked={inputD03_3 === "1" ? true : false }
                                      />
                                      <label className="form-check-label" htmlFor="D03_3">
                                        {" "}
                                        ปลูกเป็นกลุ่ม
                                      </label>
                                    </div>
                                  </div>
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D03_4 </label>
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="D03_4"
                                        onChange={D03_4OnChange}
                                        checked={inputD03_4 === "1" ? true : false }
                                      />
                                      <label className="form-check-label" htmlFor="D03_4">
                                        {" "}
                                        ปลูกปะปนกัน
                                      </label>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D03_5 เนื้อที่เพาะปลูก</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD03_5A) >= 0 &&
                                        Number(inputD03_5A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={D03_5AOnChange}
                                      value={inputD03_5A}
                                      disabled={disabledD03_3}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD03_5B) >= 0 &&
                                        Number(inputD03_5B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={D03_5BOnChange}
                                      value={inputD03_5B}
                                      disabled={disabledD03_3}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD03_5C) >= 0 &&
                                        Number(inputD03_5C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={D03_5COnChange}
                                      value={inputD03_5C}
                                      disabled={disabledD03_3}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD03_5 }}><label className="text-danger">กรุณาระบุ D03_5</label></div>
                                </Col>
                                
                              </Row>

                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D03_6 จำนวนต้นทั้งสิ้น (ปลูกเป็นกลุ่ม)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={999999}
                                      onChange={D03_6OnChange}
                                      value={inputD03_6}
                                      disabled={disabledD03_3}
                                    />
                                    <span className="input-group-text">ต้น</span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD03_6 }}><label className="text-danger">กรุณาระบุ D03_6</label></div>
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D03_7 จำนวนต้นทั้งสิ้น (ปลูกปะปนกัน)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={999999}
                                      onChange={D03_7OnChange}
                                      value={inputD03_7}
                                      disabled={disabledD03_4}
                                    />
                                    <span className="input-group-text">ต้น</span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD03_7 }}><label className="text-danger">กรุณาระบุ D03_7</label></div>
                                </Col>
                              </Row>

                            </Col>
                          </Row>

                          <Row className="mt-5">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                3) ปาล์มน้ำมันแก่ไม่ให้ผลผลิตแล้ว
                              </label>
                              <br />
                            </Col>
                            <Col md={12}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D04_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={inputD04_2}
                                    disabled
                                  />
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D04_3 </label>
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="D04_3"
                                        onChange={D04_3OnChange}
                                        checked={inputD04_3 === "1" ? true : false }
                                      />
                                      <label className="form-check-label" htmlFor="D04_3">
                                        {" "}
                                        ปลูกเป็นกลุ่ม
                                      </label>
                                    </div>
                                  </div>
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D04_4 </label>
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="D04_4"
                                        onChange={D04_4OnChange}
                                        checked={inputD04_4 === "1" ? true : false }
                                      />
                                      <label className="form-check-label" htmlFor="D04_4">
                                        {" "}
                                        ปลูกปะปนกัน
                                      </label>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D04_5 เนื้อที่เพาะปลูก</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD04_5A) >= 0 &&
                                        Number(inputD04_5A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={D04_5AOnChange}
                                      value={inputD04_5A}
                                      disabled={disabledD04_3}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD04_5B) >= 0 &&
                                        Number(inputD04_5B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={D04_5BOnChange}
                                      value={inputD04_5B}
                                      disabled={disabledD04_3}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputD04_5C) >= 0 &&
                                        Number(inputD04_5C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={D04_5COnChange}
                                      value={inputD04_5C}
                                      disabled={disabledD04_3}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD04_5 }}><label className="text-danger">กรุณาระบุ D04_5</label></div>
                                </Col>
                                
                              </Row>

                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> D04_6 จำนวนต้นทั้งสิ้น (ปลูกเป็นกลุ่ม)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={999999}
                                      onChange={D04_6OnChange}
                                      value={inputD04_6}
                                      disabled={disabledD04_3}
                                    />
                                    <span className="input-group-text">ต้น</span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD04_6 }}><label className="text-danger">กรุณาระบุ D04_6</label></div>
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> D04_7 จำนวนต้นทั้งสิ้น (ปลูกปะปนกัน)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={999999}
                                      onChange={D04_7OnChange}
                                      value={inputD04_7}
                                      disabled={disabledD04_4}
                                    />
                                    <span className="input-group-text">ต้น</span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningD04_7 }}><label className="text-danger">กรุณาระบุ D04_7</label></div>
                                </Col>
                              </Row>

                            </Col>
                          </Row>

                          <Row className="">
                            <Col md={12}>
                              <div className="mt-3" style={{ display: showWarningD }}><label className="text-danger">กรุณาระบุ รายละเอียดการปลูกปาล์มน้ำมัน อย่างน้อย 1 รายการ</label></div>
                              <div className="mt-3" style={{ display: showWarningA10Blank}}><label className="text-danger">กรุณาระบุ เนื้อที่พืชยืนต้นและไม้ผล A10 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
                              <div className="mt-3" style={{ display: showWarningA10_SUM_D}}><label className="text-danger">ผลรวมเนื้อที่เพาะปลูกปาล์มน้ำมัน ต้องน้อยกว่าหรือเท่ากับ เนื้อที่พืชยืนต้นและไม้ผล A10 </label></div>
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
    </div>
  );
}
