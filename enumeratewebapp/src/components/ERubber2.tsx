import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { D01, _C01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { LandCalculator } from "../service/LandCalculator";
import { REC04Info } from "../model/REC04Info";
import { REC01Info } from "../model/REC01Info";
import { REC02Info } from "../model/REC02Info";
import { log } from "console";

export default function ERubber2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputC01, setInputC01] = useState("");
  const [inputC02, setInputC02] = useState("");
  const [inputC02_A, setInputC02_A] = useState("");
  const [inputC02_B, setInputC02_B] = useState("");
  const [inputC02_C, setInputC02_C] = useState("");
  const [inputC03_1, setInputC03_1] = useState("ยางอ่อนไม่ให้ผลผลิต");
  const [inputC03_2, setInputC03_2] = useState("10502");
  const [inputC03_3, setInputC03_3] = useState("");
  const [inputC03_3A, setInputC03_3A] = useState("");
  const [inputC03_3B, setInputC03_3B] = useState("");
  const [inputC03_3C, setInputC03_3C] = useState("");
  const [inputC04_1, setInputC04_1] = useState("ยางกำลังให้ผลผลิต");
  const [inputC04_2, setInputC04_2] = useState("10503");
  const [inputC04_3, setInputC04_3] = useState("");
  const [inputC04_3A, setInputC04_3A] = useState("");
  const [inputC04_3B, setInputC04_3B] = useState("");
  const [inputC04_3C, setInputC04_3C] = useState("");
  const [inputC05_1, setInputC05_1] = useState("ยางแก่ไม่ให้ผลผลิต");
  const [inputC05_2, setInputC05_2] = useState("10504");
  const [inputC05_3, setInputC05_3] = useState("");
  const [inputC05_3A, setInputC05_3A] = useState("");
  const [inputC05_3B, setInputC05_3B] = useState("");
  const [inputC05_3C, setInputC05_3C] = useState("");

  //state rec01
  const [valueA09, setValueA09] = useState<string>("");


  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {
    console.log("load page ERubber2");

    setInputC01("1")

    getREC04()


    //clear warning
    setShowWarningC02("none")
    setShowWarningC_SUM("none")
    setShowWarningC("none")

    //setPanel2("");
    /* setInputD01(enumerate?.D01! === null ? "" : enumerate?.D01!);

    setInputD031(
      enumerate?.D031! === null || enumerate?.D031! === "b"
        ? ""
        : enumerate?.D031!
    );
    setInputD032(
      enumerate?.D032! === null || enumerate?.D032! === "b"
        ? ""
        : enumerate?.D032!
    );
    setInputD033(
      enumerate?.D033! === null || enumerate?.D033! === "b"
        ? ""
        : enumerate?.D033!
    );

    setInputD02_1(
      enumerate?.D02_1! === null || enumerate?.D02_1! === "b"
        ? "10501"
        : enumerate?.D02_1!
    );
    setInputD031_1(
      enumerate?.D031_1! === null || enumerate?.D031_1! === "b"
        ? ""
        : enumerate?.D031_1!
    );
    setInputD032_1(
      enumerate?.D032_1! === null || enumerate?.D032_1! === "b"
        ? ""
        : enumerate?.D032_1!
    );
    setInputD033_1(
      enumerate?.D033_1! === null || enumerate?.D033_1! === "b"
        ? ""
        : enumerate?.D033_1!
    );

    setInputD02_2(
      enumerate?.D02_2! === null || enumerate?.D02_2! === "b"
        ? "10501"
        : enumerate?.D02_2!
    );
    setInputD031_2(
      enumerate?.D031_2! === null || enumerate?.D031_2! === "b"
        ? ""
        : enumerate?.D031_2!
    );
    setInputD032_2(
      enumerate?.D032_2! === null || enumerate?.D032_2! === "b"
        ? ""
        : enumerate?.D032_2!
    );
    setInputD033_2(
      enumerate?.D033_2! === null || enumerate?.D033_2! === "b"
        ? ""
        : enumerate?.D033_2!
    );

    setInputD02_3(
      enumerate?.D02_3! === null || enumerate?.D02_3! === "b"
        ? "10501"
        : enumerate?.D02_3!
    );
    setInputD031_3(
      enumerate?.D031_3! === null || enumerate?.D031_3! === "b"
        ? ""
        : enumerate?.D031_3!
    );
    setInputD032_3(
      enumerate?.D032_3! === null || enumerate?.D032_3! === "b"
        ? ""
        : enumerate?.D032_3!
    );
    setInputD033_3(
      enumerate?.D033_3! === null || enumerate?.D033_3! === "b"
        ? ""
        : enumerate?.D033_3!
    ); */

    /* if (enumerate?.D01! === null || enumerate?.D01! === "") {
      setValidate4(true);
    } else {
      if (enumerate?.D01! == "1") {
        setPanel2("");
        setValidate4(false);
      } else {
        //ไม่มี (ข้ามไปถาม ตอนพิเศษ 1)
        setPanel2("none");
        setValidate4(false);
      }
    } */

  }, [page === 5]);

  async function getREC04() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC04/" + enumeratesk2?.AH_CODE;
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
                let item: REC04Info | undefined  = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                //setInputC01(item.C01)
                setInputC02(item?.C02!)

                setInputC02_A(item?.C02_A === "" ? "" : parseInt(item?.C02_A!).toString())
                setInputC02_B(item?.C02_B === "" ? "" : parseInt(item?.C02_B!).toString())
                setInputC02_C(item?.C02_C === "" ? "" : parseInt(item?.C02_C!).toString())

                setInputC03_1(item?.C03_1!)
                setInputC03_2(item?.C03_2!)
                setInputC03_3(item?.C03_3!)
                setInputC03_3A(item?.C03_3A === "" ? "" : parseInt(item?.C03_3A!).toString())
                setInputC03_3B(item?.C03_3B === "" ? "" : parseInt(item?.C03_3B!).toString())
                setInputC03_3C(item?.C03_3C === "" ? "" : parseInt(item?.C03_3C!).toString())

                setInputC04_1(item?.C04_1!)
                setInputC04_2(item?.C04_2!)
                setInputC04_3(item?.C04_3!)
                setInputC04_3A(item?.C04_3A === "" ? "" : parseInt(item?.C04_3A!).toString())
                setInputC04_3B(item?.C04_3B === "" ? "" : parseInt(item?.C04_3B!).toString())
                setInputC04_3C(item?.C04_3C === "" ? "" : parseInt(item?.C04_3C!).toString())

                setInputC05_1(item?.C05_1!)
                setInputC05_2(item?.C05_2!)
                setInputC05_3(item?.C05_3!)
                setInputC05_3A(item?.C05_3A === "" ? "" : parseInt(item?.C05_3A!).toString())
                setInputC05_3B(item?.C05_3B === "" ? "" : parseInt(item?.C05_3B!).toString())
                setInputC05_3C(item?.C05_3C === "" ? "" : parseInt(item?.C05_3C!).toString())

              }

              return true;
                                      
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC04): ", err);
          });


        //หลังจากเรียกข้อมูล ยางพารา REC04 เสร็จแล้ว
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

                  //เนื้อที่ปลูกยางพารา
                  setValueA09(rec01?.A09!)


                }

              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01 on ERice2): ", err);
            });

        }


      } catch (err) {
        console.error("ERROR (getREC04): ", err);
      }
    }
  }


  //action : input
  const C01OnChange = (event: any) => {
    setInputC01(event.currentTarget.value)
  }

  const C02OnChange = (event: any) => {
    setInputC02(event.currentTarget.value)
  }

  const C02_AOnChange = (event: any) => {
    setInputC02_A(event.currentTarget.value)
    if(event.currentTarget.value !== ""){
      setShowWarningC02("none")
    }
  }

  const C02_BOnChange = (event: any) => {
    setInputC02_B(event.currentTarget.value)
    if(event.currentTarget.value !== ""){
      setShowWarningC02("none")
    }
  }

  const C02_COnChange = (event: any) => {
    setInputC02_C(event.currentTarget.value)
    if(event.currentTarget.value !== ""){
      setShowWarningC02("none")
    }
  }

  const C03_1OnChange = (event: any) => {
    setInputC03_1(event.currentTarget.value)
  }

  const C03_2OnChange = (event: any) => {
    setInputC03_2(event.currentTarget.value)
  }

  const C03_3OnChange = (event: any) => {
    setInputC03_3(event.currentTarget.value)
  }

  const C03_3AOnChange = (event: any) => {
    setInputC03_3A(event.currentTarget.value)
  }

  const C03_3BOnChange = (event: any) => {
    setInputC03_3B(event.currentTarget.value)
  }

  const C03_3COnChange = (event: any) => {
    setInputC03_3C(event.currentTarget.value)
  }

  const C04_1OnChange = (event: any) => {
    setInputC04_1(event.currentTarget.value)
  }

  const C04_2OnChange = (event: any) => {
    setInputC04_2(event.currentTarget.value)
  }

  const C04_3OnChange = (event: any) => {
    setInputC04_3(event.currentTarget.value)
  }

  const C04_3AOnChange = (event: any) => {
    setInputC04_3A(event.currentTarget.value)
  }

  const C04_3BOnChange = (event: any) => {
    setInputC04_3B(event.currentTarget.value)
  }

  const C04_3COnChange = (event: any) => {
    setInputC04_3C(event.currentTarget.value)
  }

  const C05_1OnChange = (event: any) => {
    setInputC05_1(event.currentTarget.value)
  }

  const C05_2OnChange = (event: any) => {
    setInputC05_2(event.currentTarget.value)
  }

  const C05_3OnChange = (event: any) => {
    setInputC05_3(event.currentTarget.value)
  }

  const C05_3AOnChange = (event: any) => {
    setInputC05_3A(event.currentTarget.value)
  }

  const C05_3BOnChange = (event: any) => {
    setInputC05_3B(event.currentTarget.value)
  }

  const C05_3COnChange = (event: any) => {
    setInputC05_3C(event.currentTarget.value)
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
  const [showWarningC02, setShowWarningC02] = useState<string>("none"); // ปิด
  const [showWarningC, setShowWarningC] = useState<string>("none"); // ปิด
  const [showWarningC_SUM, setShowWarningC_SUM] = useState<string>("none"); // ปิด
  const [showWarningA09, setShowWarningA09] = useState<string>("none"); // ปิด
  const [showWarningA09Blank, setShowWarningA09Blank] = useState<string>("none"); // ปิด


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 3.2 ยางพารา
  const SaveOnClick = async () => {

    //คำนวณผลรวมของ c03_3, c04_3, c05_3 เป็นทศนิยม xxxxx.xxxx
    const _C02= LandCalculator.CalculateSummary(Number(inputC02_A),Number(inputC02_B),Number(inputC02_C)).toFixed(4).toString().padStart(10,'0')
    const _C03_3= LandCalculator.CalculateSummary(Number(inputC03_3A),Number(inputC03_3B),Number(inputC03_3C)).toFixed(4).toString().padStart(10,'0')
    const _C04_3= LandCalculator.CalculateSummary(Number(inputC04_3A),Number(inputC04_3B),Number(inputC04_3C)).toFixed(4).toString().padStart(10,'0')
    const _C05_3= LandCalculator.CalculateSummary(Number(inputC05_3A),Number(inputC05_3B),Number(inputC05_3C)).toFixed(4).toString().padStart(10,'0')

    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      c01: inputC01,
      c02: _C02,
      c02_A: inputC02_A.padStart(5, '0'),
      c02_B: inputC02_B.padStart(1, '0'),
      c02_C: inputC02_C.padStart(2, '0'),
      c03_1: inputC03_1,
      c03_2: inputC03_2,
      c03_3: _C03_3,
      c03_3A: inputC03_3A.padStart(5, '0'),
      c03_3B: inputC03_3B.padStart(1, '0'),
      c03_3C: inputC03_3C.padStart(2, '0'),
      c04_1: inputC04_1,
      c04_2: inputC04_2,
      c04_3: _C04_3,
      c04_3A: inputC04_3A.padStart(5, '0'),
      c04_3B: inputC04_3B.padStart(1, '0'),
      c04_3C: inputC04_3C.padStart(2, '0'),
      c05_1: inputC05_1,
      c05_2: inputC05_2,
      c05_3: _C05_3,
      c05_3A: inputC05_3A.padStart(5, '0'),
      c05_3B: inputC05_3B.padStart(1, '0'),
      c05_3C: inputC05_3C.padStart(2, '0')
    };

    //consistency check
    let isvalid = true;

    //C02
    if(Number(inputC02_A) > 0 || Number(inputC02_B) || Number(inputC02_C) ){
      setShowWarningC02("none")
    }
    else{
      isvalid = false
      setShowWarningC02("")
    }


    //C03, C04, C05 อย่างน้อย 1 รายการ ≠ blank
    if(Number(inputC03_3A) > 0 || Number(inputC03_3B) > 0 || Number(inputC03_3C) > 0 
      || Number(inputC04_3A) > 0 || Number(inputC04_3B) > 0 || Number(inputC04_3C) > 0 
      || Number(inputC05_3A) > 0 || Number(inputC05_3B) > 0 || Number(inputC05_3C) > 0 ){
        setShowWarningC("none")
    }
    else{
      isvalid = false
      setShowWarningC("")
    }

    //A09 ≠ blank
    if(Number(valueA09) <= 0){
      setShowWarningA09Blank("")
      isvalid = false
    }
    else{
      setShowWarningA09Blank("none")
    }

    //C03_3 + C04_3 + C05_3 ≤ A09
    const SUM_C03_3= LandCalculator.CalculateSummary(Number(inputC03_3A),Number(inputC03_3B),Number(inputC03_3C))
    const SUM_C04_3= LandCalculator.CalculateSummary(Number(inputC04_3A),Number(inputC04_3B),Number(inputC04_3C))
    const SUM_C05_3= LandCalculator.CalculateSummary(Number(inputC05_3A),Number(inputC05_3B),Number(inputC05_3C))
    console.log("(SUM_C03_3 + SUM_C04_3 + SUM_C05_3) = ",(SUM_C03_3 + SUM_C04_3 + SUM_C05_3).toFixed(4))
    console.log("valueA09" , Number(valueA09).toFixed(4));    
    if((SUM_C03_3 + SUM_C04_3 + SUM_C05_3).toFixed(4) > Number(valueA09).toFixed(4)){
      setShowWarningA09("")
      isvalid = false
    }
    else{
      setShowWarningA09("none")
    }


    //C03_3 + C04_3 + C05_3 = C02
    const SUM_C02= LandCalculator.CalculateSummary(Number(inputC02_A),Number(inputC02_B),Number(inputC02_C)) 
    console.log("SUM_C02 = ",SUM_C02);
    console.log("SUM_C03_3 + SUM_C04_3 + SUM_C05_3 = ",SUM_C03_3 + SUM_C04_3 + SUM_C05_3);
       
    if(SUM_C02.toFixed(4) === (SUM_C03_3 + SUM_C04_3 + SUM_C05_3).toFixed(4) ){
      setShowWarningC_SUM("none")
    }
    else{
      isvalid = false
      setShowWarningC_SUM("")
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

          //url insertREC04
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC04";
          }

          //api insertREC04
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

          //รอจนบันทึกเสร็จแล้ว
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
              .catch((err) => { console.log("AXIOS ERROR (getREC01List in ERubber2): ", err); });


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
                  let oilpalmlist: PlantList[] = pl.filter((p) => { return p.T01 === "10033" || p.T01 === "10123" || p.T01 === "10124" || p.T01 === "10125"; })
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

                  if (oilpalmlist.length > 0) {
                    setPage(6) //ไปตอนที่ 3.3 ปาล์มน้ำมัน
                  }
                  else if (perennialplantlist.length > 0) {
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
        console.error("SaveOnClick ERROR (ตอนที่ 3.2 ยางพารา): ", error);
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

              if(ricelist.length > 0){
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
        console.error("OnClickBack ERROR (ตอนที่ 3.2 ยางพารา): ", error);
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
            .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in ERubber2): ", err); });


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
                let oilpalmlist: PlantList[] = pl.filter((p) => { return p.T01 === "10033" || p.T01 === "10123" || p.T01 === "10124" || p.T01 === "10125"; })
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

                if (oilpalmlist.length > 0) {
                  setPage(6) //ไปตอนที่ 3.3 ปาล์มน้ำมัน
                }
                else if (perennialplantlist.length > 0) {
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
      console.error("NextOnClick ERROR (ตอนที่ 3.2 ยางพารา): ", error);
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
                      ตอนที่ 3.2 ยางพารา 
                      </h5>
                    </Col>

                    <Col md={8} className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl488"
                        aria-expanded="false"
                        aria-controls="collapseControl488"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl488">
                    <Col md={12}>
                      <Row>
                        <Col md={12}>
                          <Row className="mt-2 question-title">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                              1. ณ วันที่ 1 พฤษภาคม 2566 ที่ถือครองนี้มีการปลูกยางพาราหรือไม่ (ระบบกำหนดให้)
                              </label>
                            </Col>
                          </Row>
                          <Row className="mt-2">
                            <Col md={2}>
                              <label>C01</label>
                            </Col>
                            <Col md={10}>
                              <div className="form-group">
                                {_C01.map((option, index) => (
                                  <div
                                    className="form-check"
                                    key={option.value}
                                  >
                                    <input
                                      className="form-check-input"
                                      name="rd_C01"
                                      type="radio"
                                      value={option.value}
                                      id={`rd_C01${index}`}
                                      onChange={C01OnChange}
                                      checked={option.value === inputC01}
                                      disabled
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`rd_C01${index}`}
                                    >
                                      {option.text}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>

                          <Row className="mt-2 question-title">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                2. ให้สอบถามและบันทึกรายละเอียดการปลูกยางพารา 
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 question-subTitle">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                              2.1 เนื้อที่สวนยางทั้งสิ้น 
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">
                            
                            <Col md={10}>
                              <Row>
                                <Col md={6} className="mt-3">
                                  <label> C02 เนื้อที่สวนยาง</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputC02_A) >= 0 &&
                                        Number(inputC02_A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={C02_AOnChange}
                                      value={inputC02_A}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputC02_B) >= 0 &&
                                        Number(inputC02_B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={C02_BOnChange}
                                      value={inputC02_B}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x  ${
                                        Number(inputC02_C) >= 0 &&
                                        Number(inputC02_C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={C02_COnChange}
                                      value={inputC02_C}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningC02 }}><label className="text-danger">กรุณาระบุ C02</label></div>
                                  <div className="mt-3" style={{ display: showWarningC_SUM }}><label className="text-danger">เนื้อที่สวนยางแต่ละประเภทต้องรวมกันแล้วเท่ากับเนื้อที่สวนยางทั้งหมด</label></div>
                                </Col>
                                
                              </Row>
                            </Col>
                          </Row>

                          <Row className="mt-5 question-subTitle">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                              2.2 รายละเอียดการปลูกยางพารา 
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }} >
                              1) ยางอ่อนยังไม่ให้ผลผลิต
                              </label>
                              <br />
                            </Col>
                            <Col md={10}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> C03_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    onChange={C03_2OnChange}
                                    value={"10502"}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6} className="mt-3">
                                  <label> C03_3 เนื้อที่สวนยาง</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control  form-control-mini-x ${
                                        Number(inputC03_3A) >= 0 &&
                                        Number(inputC03_3A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={C03_3AOnChange}
                                      value={inputC03_3A}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputC03_3B) >= 0 &&
                                        Number(inputC03_3B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={C03_3BOnChange}
                                      value={inputC03_3B}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputC03_3C) >= 0 &&
                                        Number(inputC03_3C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={C03_3COnChange}
                                      value={inputC03_3C}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                </Col>
                                
                              </Row>
                            </Col>
                          </Row>

                          <Row className="mt-5">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                2) ยางกำลังให้ผลผลิต
                              </label>
                              <br />
                            </Col>
                            <Col md={10}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> C04_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    onChange={C04_2OnChange}
                                    value={"10503"}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6} className="mt-3">
                                  <label> C04_3 เนื้อที่สวนยาง</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputC04_3A) >= 0 &&
                                        Number(inputC04_3A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={C04_3AOnChange}
                                      value={inputC04_3A}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputC04_3B) >= 0 &&
                                        Number(inputC04_3B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={C04_3BOnChange}
                                      value={inputC04_3B}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputC04_3C) >= 0 &&
                                        Number(inputC04_3C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={C04_3COnChange}
                                      value={inputC04_3C}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                </Col>
                                
                              </Row>
                            </Col>
                          </Row>

                          <Row className="mt-5">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                3) ยางแก่ไม่ให้ผลผลิตแล้ว
                              </label>
                              <br />
                            </Col>
                            <Col md={10}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> C05_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    onChange={C05_2OnChange}
                                    value={"10504"}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6} className="mt-3">
                                  <label> C05_3 เนื้อที่สวนยาง</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputC05_3A) >= 0 &&
                                        Number(inputC05_3A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={C05_3AOnChange}
                                      value={inputC05_3A}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputC05_3B) >= 0 &&
                                        Number(inputC05_3B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={C05_3BOnChange}
                                      value={inputC05_3B}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputC05_3C) >= 0 &&
                                        Number(inputC05_3C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={C05_3COnChange}
                                      value={inputC05_3C}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                </Col>
                                
                              </Row>
                            </Col>
                          </Row>

                          <Row className="">
                            <Col md={12}>
                              <div className="mt-3" style={{ display: showWarningC }}><label className="text-danger">กรุณาระบุ รายละเอียดการปลูกยางพารา อย่างน้อย 1 รายการ</label></div>
                              <div className="mt-3" style={{ display: showWarningA09 }}><label className="text-danger">เนื้อที่สวนยาง ต้องน้อยกว่าหรือเท่ากับ สวนยางพารา A09</label></div>
                              <div className="mt-3" style={{ display: showWarningA09Blank }}><label className="text-danger">กรุณาระบุ เนื้อที่สวนยางพารา A09 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
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
                      /* disabled={
                        userInfo?.roleId !== 9
                          ? false
                          : process.env.REACT_APP_PROJECT === "open"
                          ? validate4
                          : false
                      } */
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
