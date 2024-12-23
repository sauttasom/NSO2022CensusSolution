import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { C01, C02, _B01, _B02 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { LandCalculator } from "../service/LandCalculator";
import { REC03Info } from "../model/REC03Info";
import { REC02Info } from "../model/REC02Info";
import { REC01Info } from "../model/REC01Info";

export default function ERice2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //const [validate3, setValidate3] = useState(true);

  const [rec03, setRec03] = useState<REC03Info>();

  //state : input
  const [inputB01, setInputB01] = useState("");
  const [inputB02, setInputB02] = useState("");

  const [inputB03_1, setInputB03_1] = useState("ข้าวนาปี ข้าวเจ้า");
  const [inputB03_2, setInputB03_2] = useState("20503"); 
  const [inputB03_3, setInputB03_3] = useState("");
  const [inputB03_4, setInputB03_4] = useState("");
  const [inputB03_4A, setInputB03_4A] = useState("");
  const [inputB03_4B, setInputB03_4B] = useState("");
  const [inputB03_4C, setInputB03_4C] = useState("");
  const [inputB03_5, setInputB03_5] = useState("");
  const [inputB03_5A, setInputB03_5A] = useState("");
  const [inputB03_5B, setInputB03_5B] = useState("");
  const [inputB03_5C, setInputB03_5C] = useState("");
  const [inputB03_6, setInputB03_6] = useState("");

  const [inputB04_1, setInputB04_1] = useState("ข้าวนาปี ข้าวเหนียว");
  const [inputB04_2, setInputB04_2] = useState("20504"); 
  const [inputB04_3, setInputB04_3] = useState("");
  const [inputB04_4, setInputB04_4] = useState("");
  const [inputB04_4A, setInputB04_4A] = useState("");
  const [inputB04_4B, setInputB04_4B] = useState("");
  const [inputB04_4C, setInputB04_4C] = useState("");
  const [inputB04_5, setInputB04_5] = useState("");
  const [inputB04_5A, setInputB04_5A] = useState("");
  const [inputB04_5B, setInputB04_5B] = useState("");
  const [inputB04_5C, setInputB04_5C] = useState("");
  const [inputB04_6, setInputB04_6] = useState("");

  const [inputB05_1, setInputB05_1] = useState("ข้าวนาปรัง ข้าวเจ้า");
  const [inputB05_2, setInputB05_2] = useState("20505"); 
  const [inputB05_3, setInputB05_3] = useState("");
  const [inputB05_4, setInputB05_4] = useState("");
  const [inputB05_4A, setInputB05_4A] = useState("");
  const [inputB05_4B, setInputB05_4B] = useState("");
  const [inputB05_4C, setInputB05_4C] = useState("");
  const [inputB05_5, setInputB05_5] = useState("");
  const [inputB05_5A, setInputB05_5A] = useState("");
  const [inputB05_5B, setInputB05_5B] = useState("");
  const [inputB05_5C, setInputB05_5C] = useState("");
  const [inputB05_6, setInputB05_6] = useState("");

  const [inputB06_1, setInputB06_1] = useState("ข้าวนาปรัง ข้าวเหนียว");
  const [inputB06_2, setInputB06_2] = useState("20506"); 
  const [inputB06_3, setInputB06_3] = useState("");
  const [inputB06_4, setInputB06_4] = useState("");
  const [inputB06_4A, setInputB06_4A] = useState("");
  const [inputB06_4B, setInputB06_4B] = useState("");
  const [inputB06_4C, setInputB06_4C] = useState("");
  const [inputB06_5, setInputB06_5] = useState("");
  const [inputB06_5A, setInputB06_5A] = useState("");
  const [inputB06_5B, setInputB06_5B] = useState("");
  const [inputB06_5C, setInputB06_5C] = useState("");
  const [inputB06_6, setInputB06_6] = useState("");

  //state rec01
  const [valueA08, setValueA08] = useState<string>("");
  const [valueA07, setValueA07] = useState<string>("");
  
  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {
    console.log("load page ERice2");

    setInputB01("1")
    getREC03()

    //clear warning
    setShowWarningB03_4("none")
    setShowWarningB03_5("none")
    setShowWarningB03_4_5("none")
    setShowWarningB03_6("none")

    setShowWarningB04_4("none")
    setShowWarningB04_5("none")
    setShowWarningB04_4_5("none")
    setShowWarningB04_6("none")

    setShowWarningB05_4("none")
    setShowWarningB05_5("none")
    setShowWarningB05_4_5("none")
    setShowWarningB05_6("none")

    setShowWarningB06_4("none")
    setShowWarningB06_5("none")
    setShowWarningB06_4_5("none")
    setShowWarningB06_6("none")


  }, [page === 4]);

  async function getREC03() {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
      ]);


      //Get REC03
      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC03/" + enumeratesk2?.AH_CODE;
        }

        const result = await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //console.log("res.data : rec03",res.data);

              if (res.data[0] !== undefined) {

                //set state
                let rec03: REC03Info | undefined  = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                //setInputB01(rec03.B01)
                setInputB02(rec03?.B02!)

                //setInputB03_1(rec03.B03_1)
                //setInputB03_2(rec03.B03_2)
                setInputB03_3(rec03?.B03_3 === "" ? "" : parseInt(rec03?.B03_3!).toString())
                setInputB03_4(rec03?.B03_4!)
                setInputB03_4A(rec03?.B03_4A === "" ? "" : parseInt(rec03?.B03_4A!).toString())
                setInputB03_4B(rec03?.B03_4B === "" ? "" : parseInt(rec03?.B03_4B!).toString())
                setInputB03_4C(rec03?.B03_4C === "" ? "" : parseInt(rec03?.B03_4C!).toString())
                setInputB03_5(rec03?.B03_5!)
                setInputB03_5A(rec03?.B03_5A === "" ? "" : parseInt(rec03?.B03_5A!).toString())
                setInputB03_5B(rec03?.B03_5B === "" ? "" : parseInt(rec03?.B03_5B!).toString())
                setInputB03_5C(rec03?.B03_5C === "" ? "" : parseInt(rec03?.B03_5C!).toString())
                setInputB03_6(rec03?.B03_6 === "" ? "" : parseInt(rec03?.B03_6!).toString())

                //setInputB04_1(rec03.B04_1)
                //setInputB04_2(rec03.B04_2)
                setInputB04_3(rec03?.B04_3 === "" ? "" : parseInt(rec03?.B04_3!).toString())
                setInputB04_4(rec03?.B04_4!)
                setInputB04_4A(rec03?.B04_4A === "" ? "" : parseInt(rec03?.B04_4A!).toString())
                setInputB04_4B(rec03?.B04_4B === "" ? "" : parseInt(rec03?.B04_4B!).toString())
                setInputB04_4C(rec03?.B04_4C === "" ? "" : parseInt(rec03?.B04_4C!).toString())
                setInputB04_5(rec03?.B04_5!)
                setInputB04_5A(rec03?.B04_5A === "" ? "" : parseInt(rec03?.B04_5A!).toString())
                setInputB04_5B(rec03?.B04_5B === "" ? "" : parseInt(rec03?.B04_5B!).toString())
                setInputB04_5C(rec03?.B04_5C === "" ? "" : parseInt(rec03?.B04_5C!).toString())
                setInputB04_6(rec03?.B04_6 === "" ? "" : parseInt(rec03?.B04_6!).toString())

                //setInputB05_1(rec03.B05_1)
                //setInputB05_2(rec03.B05_2)
                setInputB05_3(rec03?.B05_3 === "" ? "" : parseInt(rec03?.B05_3!).toString())
                setInputB05_4(rec03?.B05_4!)
                setInputB05_4A(rec03?.B05_4A === "" ? "" : parseInt(rec03?.B05_4A!).toString())
                setInputB05_4B(rec03?.B05_4B === "" ? "" : parseInt(rec03?.B05_4B!).toString())
                setInputB05_4C(rec03?.B05_4C === "" ? "" : parseInt(rec03?.B05_4C!).toString())
                setInputB05_5(rec03?.B05_5!)
                setInputB05_5A(rec03?.B05_5A === "" ? "" : parseInt(rec03?.B05_5A!).toString())
                setInputB05_5B(rec03?.B05_5B === "" ? "" : parseInt(rec03?.B05_5B!).toString())
                setInputB05_5C(rec03?.B05_5C === "" ? "" : parseInt(rec03?.B05_5C!).toString())
                setInputB05_6(rec03?.B05_6 === "" ? "" : parseInt(rec03?.B05_6!).toString())

                //setInputB06_1(rec03.B06_1)
                //setInputB06_2(rec03.B06_2)
                setInputB06_3(rec03?.B06_3 === "" ? "" : parseInt(rec03?.B06_3!).toString())
                setInputB06_4(rec03?.B06_4!)
                setInputB06_4A(rec03?.B06_4A === "" ? "" : parseInt(rec03?.B06_4A!).toString())
                setInputB06_4B(rec03?.B06_4B === "" ? "" : parseInt(rec03?.B06_4B!).toString())
                setInputB06_4C(rec03?.B06_4C === "" ? "" : parseInt(rec03?.B06_4C!).toString())
                setInputB06_5(rec03?.B06_5!)
                setInputB06_5A(rec03?.B06_5A === "" ? "" : parseInt(rec03?.B06_5A!).toString())
                setInputB06_5B(rec03?.B06_5B === "" ? "" : parseInt(rec03?.B06_5B!).toString())
                setInputB06_5C(rec03?.B06_5C === "" ? "" : parseInt(rec03?.B06_5C!).toString())
                setInputB06_6(rec03?.B06_6 === "" ? "" : parseInt(rec03?.B06_6!).toString())

                //disabled
                if(Number(rec03?.B03_3) > 0){
                  setDisabled20503(false)
                }
                else{
                  setDisabled20503(true)
                }

                if(Number(rec03?.B04_3) > 0){
                  setDisabled20504(false)
                }
                else{
                  setDisabled20504(true)
                }

                if(Number(rec03?.B05_3) > 0){
                  setDisabled20505(false)
                }
                else{
                  setDisabled20505(true)
                }

                if(Number(rec03?.B06_3) > 0){
                  setDisabled20506(false)
                }
                else{
                  setDisabled20506(true)
                }


                

              }
              
              return true;              
              
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC03): ", err);
          });

        //หลังจากเรียกข้อมูล ข้าว REC03 เสร็จแล้ว
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

                  //เนื้อที่ปลูกข้าว
                  setValueA08(rec01?.A08!)
                  //console.log(rec01?.A08!);

                  //เนื้อที่รวมทั้งหมด
                  setValueA07(rec01?.A07!)

                }

              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01 on ERice2): ", err);
            });

        }



      } catch (err) {
        console.error("ERROR (getREC03): ", err);
      }

    }
  }

  const B01OnChange = (event: any) => {
    setInputB01(event.currentTarget.value);
  }

  const B02OnChange = (event: any) => {
    setInputB02(event.currentTarget.value);
    setShowWarningB02("none")
  }

  const B03_3OnChange = (event: any) => {
    setInputB03_3(event.currentTarget.value);
    if(Number(event.currentTarget.value) > 0){
      setDisabled20503(false)
    }
    else{
      setDisabled20503(true)
      setInputB03_4A("")
      setInputB03_4B("")
      setInputB03_4C("")
      setInputB03_5A("")
      setInputB03_5B("")
      setInputB03_5C("")
      setInputB03_6("")

      setShowWarningB03_4("none")
      setShowWarningB03_5("none")
      setShowWarningB03_6("none")

    }
  }

  const B03_4AOnChange = (event: any) => {
    setInputB03_4A(event.currentTarget.value);
  }

  const B03_4BOnChange = (event: any) => {
    setInputB03_4B(event.currentTarget.value);
  }

  const B03_4COnChange = (event: any) => {
    setInputB03_4C(event.currentTarget.value);
  }

  const B03_5AOnChange = (event: any) => {
    setInputB03_5A(event.currentTarget.value);
  }

  const B03_5BOnChange = (event: any) => {
    setInputB03_5B(event.currentTarget.value);
  }

  const B03_5COnChange = (event: any) => {
    setInputB03_5C(event.currentTarget.value);
  }

  const B03_6OnChange = (event: any) => {
    setInputB03_6(event.currentTarget.value);
  }

  const B04_3OnChange = (event: any) => {
    setInputB04_3(event.currentTarget.value);
    if(Number(event.currentTarget.value) > 0){
      setDisabled20504(false)
    }
    else{
      setDisabled20504(true)
      setInputB04_4A("")
      setInputB04_4B("")
      setInputB04_4C("")
      setInputB04_5A("")
      setInputB04_5B("")
      setInputB04_5C("")
      setInputB04_6("")

      setShowWarningB04_4("none")
      setShowWarningB04_5("none")
      setShowWarningB04_6("none")

    }
  }

  const B04_4AOnChange = (event: any) => {
    setInputB04_4A(event.currentTarget.value);
  }

  const B04_4BOnChange = (event: any) => {
    setInputB04_4B(event.currentTarget.value);
  }

  const B04_4COnChange = (event: any) => {
    setInputB04_4C(event.currentTarget.value);
  }

  const B04_5AOnChange = (event: any) => {
    setInputB04_5A(event.currentTarget.value);
  }

  const B04_5BOnChange = (event: any) => {
    setInputB04_5B(event.currentTarget.value);
  }

  const B04_5COnChange = (event: any) => {
    setInputB04_5C(event.currentTarget.value);
  }

  const B04_6OnChange = (event: any) => {
    setInputB04_6(event.currentTarget.value);
  }

  const B05_3OnChange = (event: any) => {
    setInputB05_3(event.currentTarget.value);
    if(Number(event.currentTarget.value) > 0){
      setDisabled20505(false)
    }
    else{
      setDisabled20505(true)
      setInputB05_4A("")
      setInputB05_4B("")
      setInputB05_4C("")
      setInputB05_5A("")
      setInputB05_5B("")
      setInputB05_5C("")
      setInputB05_6("")

      setShowWarningB05_4("none")
      setShowWarningB05_5("none")
      setShowWarningB05_6("none")

    }
  }

  const B05_4AOnChange = (event: any) => {
    setInputB05_4A(event.currentTarget.value);
  }

  const B05_4BOnChange = (event: any) => {
    setInputB05_4B(event.currentTarget.value);
  }

  const B05_4COnChange = (event: any) => {
    setInputB05_4C(event.currentTarget.value);
  }

  const B05_5AOnChange = (event: any) => {
    setInputB05_5A(event.currentTarget.value);
  }

  const B05_5BOnChange = (event: any) => {
    setInputB05_5B(event.currentTarget.value);
  }

  const B05_5COnChange = (event: any) => {
    setInputB05_5C(event.currentTarget.value);
  }

  const B05_6OnChange = (event: any) => {
    setInputB05_6(event.currentTarget.value);
  }

  const B06_3OnChange = (event: any) => {
    setInputB06_3(event.currentTarget.value);
    if(Number(event.currentTarget.value) > 0){
      setDisabled20506(false)
    }
    else{
      setDisabled20506(true)
      setInputB06_4A("")
      setInputB06_4B("")
      setInputB06_4C("")
      setInputB06_5A("")
      setInputB06_5B("")
      setInputB06_5C("")
      setInputB06_6("")

      setShowWarningB06_4("none")
      setShowWarningB06_5("none")
      setShowWarningB06_6("none")

    }
  }

  const B06_4AOnChange = (event: any) => {
    setInputB06_4A(event.currentTarget.value);
  }

  const B06_4BOnChange = (event: any) => {
    setInputB06_4B(event.currentTarget.value);
  }

  const B06_4COnChange = (event: any) => {
    setInputB06_4C(event.currentTarget.value);
  }

  const B06_5AOnChange = (event: any) => {
    setInputB06_5A(event.currentTarget.value);
  }

  const B06_5BOnChange = (event: any) => {
    setInputB06_5B(event.currentTarget.value);
  }

  const B06_5COnChange = (event: any) => {
    setInputB06_5C(event.currentTarget.value);
  }

  const B06_6OnChange = (event: any) => {
    setInputB06_6(event.currentTarget.value);
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
  const [showWarningB02, setShowWarningB02] = useState<string>("none"); // ปิด
  const [showWarningB, setShowWarningB] = useState<string>("none"); // ปิด
  const [showWarningA08, setShowWarningA08] = useState<string>("none"); // ปิด
  const [showWarningA08Blank, setShowWarningA08Blank] = useState<string>("none"); // ปิด

  const [showWarningB03_4, setShowWarningB03_4] = useState<string>("none"); // ปิด
  const [showWarningB03_5, setShowWarningB03_5] = useState<string>("none"); // ปิด
  const [showWarningB03_4_5, setShowWarningB03_4_5] = useState<string>("none"); // ปิด
  const [showWarningB03_6, setShowWarningB03_6] = useState<string>("none"); // ปิด
  const [showWarningDIV_B03_4_B03_3_A08, setShowWarningDIV_B03_4_B03_3_A08] = useState<string>("none"); // ปิด

  const [showWarningB04_4, setShowWarningB04_4] = useState<string>("none"); // ปิด
  const [showWarningB04_5, setShowWarningB04_5] = useState<string>("none"); // ปิด
  const [showWarningB04_4_5, setShowWarningB04_4_5] = useState<string>("none"); // ปิด
  const [showWarningB04_6, setShowWarningB04_6] = useState<string>("none"); // ปิด
  const [showWarningDIV_B04_4_B04_3_A08, setShowWarningDIV_B04_4_B04_3_A08] = useState<string>("none"); // ปิด

  const [showWarningB05_4, setShowWarningB05_4] = useState<string>("none"); // ปิด
  const [showWarningB05_5, setShowWarningB05_5] = useState<string>("none"); // ปิด
  const [showWarningB05_4_5, setShowWarningB05_4_5] = useState<string>("none"); // ปิด
  const [showWarningB05_6, setShowWarningB05_6] = useState<string>("none"); // ปิด
  const [showWarningDIV_B05_4_B05_3_A08, setShowWarningDIV_B05_4_B05_3_A08] = useState<string>("none"); // ปิด

  const [showWarningB06_4, setShowWarningB06_4] = useState<string>("none"); // ปิด
  const [showWarningB06_5, setShowWarningB06_5] = useState<string>("none"); // ปิด
  const [showWarningB06_4_5, setShowWarningB06_4_5] = useState<string>("none"); // ปิด
  const [showWarningB06_6, setShowWarningB06_6] = useState<string>("none"); // ปิด
  const [showWarningDIV_B06_4_B06_3_A08, setShowWarningDIV_B06_4_B06_3_A08] = useState<string>("none"); // ปิด

  //state disabled
  const [disabled20503, setDisabled20503] = useState<boolean>(false);
  const [disabled20504, setDisabled20504] = useState<boolean>(false);
  const [disabled20505, setDisabled20505] = useState<boolean>(false);
  const [disabled20506, setDisabled20506] = useState<boolean>(false);


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 3.1 ข้าว
  const SaveOnClick = async () => {

    //คำนวณผลรวมของ B03_4, B03_5, B04_4, B04_5, B05_4, B05_5, B06_4, B03_6, เป็นทศนิยม xxxxx.xxxx
    const _B03_4 = LandCalculator.CalculateSummary(Number(inputB03_4A),Number(inputB03_4B),Number(inputB03_4C)).toFixed(4).toString().padStart(10,'0')
    const _B03_5 = LandCalculator.CalculateSummary(Number(inputB03_5A),Number(inputB03_5B),Number(inputB03_5C)).toFixed(4).toString().padStart(10,'0')
    const _B04_4 = LandCalculator.CalculateSummary(Number(inputB04_4A),Number(inputB04_4B),Number(inputB04_4C)).toFixed(4).toString().padStart(10,'0')
    const _B04_5 = LandCalculator.CalculateSummary(Number(inputB04_5A),Number(inputB04_5B),Number(inputB04_5C)).toFixed(4).toString().padStart(10,'0')
    const _B05_4 = LandCalculator.CalculateSummary(Number(inputB05_4A),Number(inputB05_4B),Number(inputB05_4C)).toFixed(4).toString().padStart(10,'0')
    const _B05_5 = LandCalculator.CalculateSummary(Number(inputB05_5A),Number(inputB05_5B),Number(inputB05_5C)).toFixed(4).toString().padStart(10,'0')
    const _B06_4 = LandCalculator.CalculateSummary(Number(inputB06_4A),Number(inputB06_4B),Number(inputB06_4C)).toFixed(4).toString().padStart(10,'0')
    const _B06_5 = LandCalculator.CalculateSummary(Number(inputB06_5A),Number(inputB06_5B),Number(inputB06_5C)).toFixed(4).toString().padStart(10,'0')

    // body insertREC03
    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      b01: inputB01,
      b02: inputB02,
      b03_1: inputB03_1,
      b03_2: inputB03_2,
      b03_3: inputB03_3,
      b03_4: _B03_4,
      b03_4A: inputB03_4A.padStart(5, '0'),
      b03_4B: inputB03_4B.padStart(1, '0'),
      b03_4C: inputB03_4C.padStart(2, '0'),
      b03_5: _B03_5,
      b03_5A: inputB03_5A.padStart(5, '0'),
      b03_5B: inputB03_5B.padStart(1, '0'),
      b03_5C: inputB03_5C.padStart(2, '0'),
      b03_6: inputB03_6,
      b04_1: inputB04_1,
      b04_2: inputB04_2,
      b04_3: inputB04_3,
      b04_4: _B04_4,
      b04_4A: inputB04_4A.padStart(5, '0'),
      b04_4B: inputB04_4B.padStart(1, '0'),
      b04_4C: inputB04_4C.padStart(2, '0'),
      b04_5: _B04_5,
      b04_5A: inputB04_5A.padStart(5, '0'),
      b04_5B: inputB04_5B.padStart(1, '0'),
      b04_5C: inputB04_5C.padStart(2, '0'),
      b04_6: inputB04_6,
      b05_1: inputB05_1,
      b05_2: inputB05_2,
      b05_3: inputB05_3,
      b05_4: _B05_4,
      b05_4A: inputB05_4A.padStart(5, '0'),
      b05_4B: inputB05_4B.padStart(1, '0'),
      b05_4C: inputB05_4C.padStart(2, '0'),
      b05_5: _B05_5,
      b05_5A: inputB05_5A.padStart(5, '0'),
      b05_5B: inputB05_5B.padStart(1, '0'),
      b05_5C: inputB05_5C.padStart(2, '0'),
      b05_6: inputB05_6,
      b06_1: inputB06_1,
      b06_2: inputB06_2,
      b06_3: inputB06_3,
      b06_4: _B06_4,
      b06_4A: inputB06_4A.padStart(5, '0'),
      b06_4B: inputB06_4B.padStart(1, '0'),
      b06_4C: inputB06_4C.padStart(2, '0'),
      b06_5: _B06_5,
      b06_5A: inputB06_5A.padStart(5, '0'),
      b06_5B: inputB06_5B.padStart(1, '0'),
      b06_5C: inputB06_5C.padStart(2, '0'),
      b06_6: inputB06_6
    }
    //console.log(JSON.stringify(body));


    //consistency check
    let isvalid = true;

    if(inputB02 === ""){
      isvalid = false
      setShowWarningB02("")
    }
    else{
      setShowWarningB02("none")
    }

    //ระบุข้อมูลข้าวอย่างน้อย 1 รายการ (ใช้จำนวนครั้งที่ปลูกเป็นตัวเช็ค)
    if(Number(inputB03_3) > 0 || Number(inputB04_3) > 0 || Number(inputB05_3) > 0 || Number(inputB06_3) > 0){
      setShowWarningB("none")
    }
    else{
      setShowWarningB("")
      isvalid = false
    }

    //A08 ≠ blank
    if(Number(valueA08) <= 0){
      setShowWarningA08Blank("")
      isvalid = false
    }
    else{
      setShowWarningA08Blank("none")
    }

    //(B03_4/ B03_3) + (B04_4/ B04_3) + (B05_4/ B05_3) + (B06_4/ B06_3) ≤ A08
    const SUM_B03_4 = LandCalculator.CalculateSummary(Number(inputB03_4A),Number(inputB03_4B),Number(inputB03_4C))
    const SUM_B04_4 = LandCalculator.CalculateSummary(Number(inputB04_4A),Number(inputB04_4B),Number(inputB04_4C))
    const SUM_B05_4 = LandCalculator.CalculateSummary(Number(inputB05_4A),Number(inputB05_4B),Number(inputB05_4C))
    const SUM_B06_4 = LandCalculator.CalculateSummary(Number(inputB06_4A),Number(inputB06_4B),Number(inputB06_4C))

    const DIV_B03_4_B03_3 = Number(inputB03_3) !== 0 ? SUM_B03_4 / Number(inputB03_3) : 0
    const DIV_B04_4_B04_3 = Number(inputB04_3) !== 0 ? SUM_B04_4 / Number(inputB04_3) : 0
    const DIV_B05_4_B05_3 = Number(inputB05_3) !== 0 ? SUM_B05_4 / Number(inputB05_3) : 0
    const DIV_B06_4_B06_3 = Number(inputB06_3) !== 0 ? SUM_B06_4 / Number(inputB06_3) : 0
    
    //2023-04-28 16.35 แต๋มบอกว่าให้เอาออกเลย
    /* if(DIV_B03_4_B03_3 + DIV_B04_4_B04_3 + DIV_B05_4_B05_3 + DIV_B06_4_B06_3 > Number(valueA08) ){

      //(B03_4/ B03_3) + (B04_4/ B04_3) + (B05_4/ B05_3) + (B06_4/ B06_3) ≤ A07
      if(DIV_B03_4_B03_3 + DIV_B04_4_B04_3 + DIV_B05_4_B05_3 + DIV_B06_4_B06_3 > Number(valueA07) ){
        setShowWarningA08("")
        isvalid = false
      }
      else{
        setShowWarningA08("none")
      }      
    }
    else{
      setShowWarningA08("none")
    } */


    //ข้าวนาปี -ข้าวเจ้า ----------------------------------------------
    if(Number(inputB03_3) > 0){
      if(Number(inputB03_4A) > 0 || Number(inputB03_4B) > 0 || Number(inputB03_4C) > 0){
        setShowWarningB03_4("none")
      }
      else{
        isvalid = false
        setShowWarningB03_4("")
      }

      if(Number(inputB03_5A) >= 0 || Number(inputB03_5B) >= 0 || Number(inputB03_5C) >= 0){
        setShowWarningB03_5("none")
      }
      else{
        isvalid = false
        setShowWarningB03_5("")
      }

      //
      //const SUM_B03_4 = LandCalculator.CalculateSummary(Number(inputB03_4A),Number(inputB03_4B),Number(inputB03_4C))
      const SUM_B03_5 = LandCalculator.CalculateSummary(Number(inputB03_5A),Number(inputB03_5B),Number(inputB03_5C))
      if(SUM_B03_4 >= SUM_B03_5){
        setShowWarningB03_4_5("none")
      }
      else{
        isvalid = false
        setShowWarningB03_4_5("")
      }

      //(B03_4 / B03_3) <= A08
      if(DIV_B03_4_B03_3 <= Number(valueA08)){
        setShowWarningDIV_B03_4_B03_3_A08("none")
      }else{
        isvalid = false
        setShowWarningDIV_B03_4_B03_3_A08("")
      }

      //
      if(inputB03_6 === ""){
        isvalid = false
        setShowWarningB03_6("")
      }
      else{
        setShowWarningB03_6("none")
      }

      //possible code
      /* if (Number(inputB03_3) >= 1 && Number(inputB03_3) <= 5) {
        //nothing
      }
      else {
        isvalid = false
      } */

    }


    //ข้าวนาปี -ข้าวเหนียว ----------------------------------------------
    if(Number(inputB04_3) > 0){
      if(Number(inputB04_4A) > 0 || Number(inputB04_4B) > 0 || Number(inputB04_4C) > 0){
        setShowWarningB04_4("none")
      }
      else{
        isvalid = false
        setShowWarningB04_4("")
      }

      if(Number(inputB04_5A) >= 0 || Number(inputB04_5B) >= 0 || Number(inputB04_5C) >= 0){
        setShowWarningB04_5("none")
      }
      else{
        isvalid = false
        setShowWarningB04_5("")
      }

      //
      //const SUM_B04_4 = LandCalculator.CalculateSummary(Number(inputB04_4A),Number(inputB04_4B),Number(inputB04_4C))
      const SUM_B04_5 = LandCalculator.CalculateSummary(Number(inputB04_5A),Number(inputB04_5B),Number(inputB04_5C))
      if(SUM_B04_4 >= SUM_B04_5){
        setShowWarningB04_4_5("none")
      }
      else{
        isvalid = false
        setShowWarningB04_4_5("")
      }

      //(B04_4 / B04_3) <= A08
      if(DIV_B04_4_B04_3 <= Number(valueA08)){
        setShowWarningDIV_B04_4_B04_3_A08("none")
      }else{
        isvalid = false
        setShowWarningDIV_B04_4_B04_3_A08("")
      }

      //
      if(inputB04_6 === ""){
        isvalid = false
        setShowWarningB04_6("")
      }
      else{
        setShowWarningB04_6("none")
      }
    }


    //ข้าวนาปรัง -ข้าวเจ้า ----------------------------------------------
    if(Number(inputB05_3) > 0){
      if(Number(inputB05_4A) > 0 || Number(inputB05_4B) > 0 || Number(inputB05_4C) > 0){
        setShowWarningB05_4("none")
      }
      else{
        isvalid = false
        setShowWarningB05_4("")
      }

      if(Number(inputB05_5A) >= 0 || Number(inputB05_5B) >= 0 || Number(inputB05_5C) >= 0){
        setShowWarningB05_5("none")
      }
      else{
        isvalid = false
        setShowWarningB05_5("")
      }

      //
      //const SUM_B05_4 = LandCalculator.CalculateSummary(Number(inputB05_4A),Number(inputB05_4B),Number(inputB05_4C))
      const SUM_B05_5 = LandCalculator.CalculateSummary(Number(inputB05_5A),Number(inputB05_5B),Number(inputB05_5C))
      if(SUM_B05_4 >= SUM_B05_5){
        setShowWarningB05_4_5("none")
      }
      else{
        isvalid = false
        setShowWarningB05_4_5("")
      }

      //(B05_4 / B05_3) <= A08
      if(DIV_B05_4_B05_3 <= Number(valueA08)){
        setShowWarningDIV_B05_4_B05_3_A08("none")
      }else{
        isvalid = false
        setShowWarningDIV_B05_4_B05_3_A08("")
      }

      //
      if(inputB05_6 === ""){
        isvalid = false
        setShowWarningB05_6("")
      }
      else{
        setShowWarningB05_6("none")
      }
    }


    //ข้าวนาปรัง -ข้าวเหนียว ----------------------------------------------
    if(Number(inputB06_3) > 0){
      if(Number(inputB06_4A) > 0 || Number(inputB06_4B) > 0 || Number(inputB06_4C) > 0){
        setShowWarningB06_4("none")
      }
      else{
        isvalid = false
        setShowWarningB06_4("")
      }

      if(Number(inputB06_5A) >= 0 || Number(inputB06_5B) >= 0 || Number(inputB06_5C) >= 0){
        setShowWarningB06_5("none")
      }
      else{
        isvalid = false
        setShowWarningB06_5("")
      }

      //
      //const SUM_B06_4 = LandCalculator.CalculateSummary(Number(inputB06_4A),Number(inputB06_4B),Number(inputB06_4C))
      const SUM_B06_5 = LandCalculator.CalculateSummary(Number(inputB06_5A),Number(inputB06_5B),Number(inputB06_5C))
      if(SUM_B06_4 >= SUM_B06_5){
        setShowWarningB06_4_5("none")
      }
      else{
        isvalid = false
        setShowWarningB06_4_5("")
      }

      //(B06_4 / B06_3) <= A08
      if(DIV_B06_4_B06_3 <= Number(valueA08)){
        setShowWarningDIV_B06_4_B06_3_A08("none")
      }else{
        isvalid = false
        setShowWarningDIV_B06_4_B06_3_A08("")
      }

      //
      if(inputB06_6 === ""){
        isvalid = false
        setShowWarningB06_6("")
      }
      else{
        setShowWarningB06_6("none")
      }
    }


    //ผ่านการ consistency check
    if (isvalid) {

      try {

        const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
        if (api.authToken) {
          let auth: string = api.authToken;

          // header
          const headers = {
            Authorization: "Basic " + auth,
            "Content-Type": "application/json;charset=UTF-8",
          };

          // url insertREC03
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC03";
          }

          // api insertREC03
          const result = await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  //setPage(page + 1);
                  return true
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });


          // รอจนบันทึกข้อมูลเสร็จ
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
              .catch((err) => { console.log("AXIOS ERROR (getREC01List in EPlanting): ", err); });


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
                  let rubberlist: PlantList[] = pl.filter((p) => { return p.T01 === "10501"; })
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

                  if (rubberlist.length > 0) {
                    setPage(5) //ไปตอนที่ 3.2 ยางพารา
                  }
                  else if (oilpalmlist.length > 0) {
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
        console.error("SaveOnClick ERROR (ตอนที่ 3.1 ข้าว): ", error);
      }

    }
    else {
      //ไม่ต้องทำอะไร
    }

  };


  async function OnClickBack(){

    setPage(3) //ไปตอนที่ 3 การปลูกพืช

  }

  //สำหรับสิทธิ์ 3 , 7
  async function NextOnClick(){
    try {

      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        // header
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
            .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in ERice2): ", err); });


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
                let rubberlist: PlantList[] = pl.filter((p) => { return p.T01 === "10501"; })
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

                if (rubberlist.length > 0) {
                  setPage(5) //ไปตอนที่ 3.2 ยางพารา
                }
                else if (oilpalmlist.length > 0) {
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
      console.error("NextOnClick ERROR (ตอนที่ 3.1 ข้าว): ", error);
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
                        ตอนที่ 3.1 ข้าว
                      </h5>
                    </Col>

                    <Col md={8} className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl388"
                        aria-expanded="false"
                        aria-controls="collapseControl388"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl388">
                    <Col md={12}>
                      <Row>
                        <Col md={12}>
                          <Row className="mt-2 question-title">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการปลูกข้าวหรือไม่ (ระบบกำหนดให้)
                              </label>
                            </Col>
                          </Row>
                          <Row className="mt-2">
                            <Col md={2}>
                              <label>B01</label>
                            </Col>
                            <Col md={10}>
                              <div className="form-group">
                                {_B01.map((option, index) => (
                                  <div
                                    className="form-check"
                                    key={option.value}
                                  >
                                    <input
                                      className="form-check-input"
                                      name="rd_B01"
                                      type="radio"
                                      value={option.value}
                                      id={`rd_B01${index}`}
                                      onChange={B01OnChange}
                                      checked={option.value === inputB01}
                                      disabled
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`rd_B01${index}`}
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
                                2. วัตถุประสงค์หลักในการปลูกข้าว (ตอบเพียงข้อเดียว)
                              </label>
                            </Col>
                          </Row>
                          <Row className="mt-2">
                            <Col md={2}>
                              <label>B02</label>
                            </Col>
                            <Col md={10}>
                              <div className="form-group">
                                {_B02.map((option, index) => (
                                  <div
                                    className="form-check"
                                    key={option.value}
                                  >
                                    <input
                                      className="form-check-input"
                                      name="rd_B02"
                                      type="radio"
                                      value={option.value}
                                      id={`rd_B02${index}`}
                                      onChange={B02OnChange}
                                      checked={option.value === inputB02}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`rd_B02${index}`}
                                    >
                                      {option.text}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-3" style={{ display: showWarningB02 }}><label className="text-danger">กรุณาระบุ B02</label></div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>

                          <Row className="mt-2 question-title">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                3. ให้สอบถามและบันทึกรายละเอียดการปลูกข้าว 
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 question-subTitle">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                1) ข้าวนาปี
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 question-subTitle1">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                              ข้าวเจ้า
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">                            
                            <Col md={12}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> B03_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    value={inputB03_2}
                                  />
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> B03_3 จำนวนครั้งที่ปลูก</label>
                                  <input
                                    type="number"
                                    className={`form-control ${
                                      Number(inputB03_3) >= 0
                                        ? ""
                                        : "is-invalid"
                                    }`}
                                    min={1}
                                    max={5}
                                    onChange={B03_3OnChange}
                                    value={inputB03_3 }
                                  />
                                  <div className="invalid-feedback">
                                    ต้องระบุอยู่ในระหว่าง 1 ถึง 5
                                  </div>
                                </Col>
                                <Col md={4} className="mt-3">

                                </Col>
                              </Row>
                              <Row>
                                <Col md={10} className="mt-3">
                                  <label>B03_4 เนื้อที่เพาะปลูก(นับรวมทุกครั้งที่ปลูก)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB03_4A) >= 0 &&
                                        Number(inputB03_4A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={B03_4AOnChange}
                                      value={inputB03_4A}
                                      disabled={disabled20503}
                                    />
                                    <span className="input-group-text">ไร่</span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB03_4B) >= 0 &&
                                        Number(inputB03_4B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={B03_4BOnChange}
                                      value={inputB03_4B}
                                      disabled={disabled20503}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB03_4C) >= 0 &&
                                        Number(inputB03_4C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={B03_4COnChange}
                                      value={inputB03_4C}
                                      disabled={disabled20503}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>

                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB03_4 }}><label className="text-danger">กรุณาระบุ B03_4</label></div>
                                  <div className="mt-3" style={{ display: showWarningDIV_B03_4_B03_3_A08 }}><label className="text-danger">B03_4 / B03_3 ต้องน้อยกว่าหรือเท่ากับ A08</label></div>
                                </Col>
                                
                              </Row>

                              <Row>
                                <Col md={10} className="mt-3">
                                  <label>
                                    {" "}
                                    B03_5 เนื้อที่เก็บเกี่ยว(นับรวมทุกครั้งที่เก็บเกี่ยว)
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB03_5A) >= 0 &&
                                        Number(inputB03_5A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={B03_5AOnChange}
                                      value={inputB03_5A}
                                      disabled={disabled20503}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB03_5B) >= 0 &&
                                        Number(inputB03_5B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={B03_5BOnChange}
                                      value={inputB03_5B}
                                      disabled={disabled20503}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB03_5C) >= 0 &&
                                        Number(inputB03_5C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={B03_5COnChange}
                                      value={inputB03_5C}
                                      disabled={disabled20503}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>

                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB03_5 }}><label className="text-danger">กรุณาระบุ B03_5</label></div>
                                  <div className="mt-3" style={{ display: showWarningB03_4_5 }}><label className="text-danger">B03_4 ต้องมากกว่าหรือเท่ากับ B03_5</label></div>
                                </Col>
                                
                              </Row>

                              <Row>
                                <Col md={6} className="mt-3">
                                  <label>
                                    {" "}
                                    B03_6 ผลผลิต(นับรวมทุกครั้งที่ปลูก){" "}
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={9999999}
                                      onChange={B03_6OnChange}
                                      value={inputB03_6}
                                      disabled={disabled20503}
                                    />
                                    <span className="input-group-text">
                                      กิโลกรัม
                                    </span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB03_6 }}><label className="text-danger">กรุณาระบุ B03_6</label></div>
                                </Col>
                              </Row>
                              <Row></Row>
                            </Col>
                          </Row>

                          <Row className="mt-4 question-subTitle1">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                              ข้าวเหนียว
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">
                            
                            <Col md={12}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> B04_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    value={inputB04_2}
                                  />
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> B04_3 จำนวนครั้งที่ปลูก</label>
                                  <input
                                    type="number"
                                    className={`form-control ${
                                      Number(inputB04_3) >= 0
                                        ? ""
                                        : "is-invalid"
                                    }`}
                                    min={1}
                                    max={5}
                                    onChange={B04_3OnChange}
                                    value={inputB04_3}
                                  />
                                  <div className="invalid-feedback">
                                    ต้องระบุอยู่ในระหว่าง 1 ถึง 5
                                  </div>
                                </Col>
                                <Col md={4} className="mt-3">

                                </Col>
                              </Row>
                              <Row>
                                <Col md={10} className="mt-3">
                                  <label>B04_4 เนื้อที่เพาะปลูก(นับรวมทุกครั้งที่ปลูก)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB04_4A) >= 0 &&
                                        Number(inputB04_4A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={B04_4AOnChange}
                                      value={inputB04_4A}
                                      disabled={disabled20504}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB04_4B) >= 0 &&
                                        Number(inputB04_4B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={B04_4BOnChange}
                                      value={inputB04_4B}
                                      disabled={disabled20504}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB04_4C) >= 0 &&
                                        Number(inputB04_4C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={B04_4COnChange}
                                      value={inputB04_4C}
                                      disabled={disabled20504}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB04_4 }}><label className="text-danger">กรุณาระบุ B04_4</label></div>
                                  <div className="mt-3" style={{ display: showWarningDIV_B04_4_B04_3_A08 }}><label className="text-danger">B04_4 / B04_3 ต้องน้อยกว่าหรือเท่ากับ A08</label></div>
                                </Col>
                                
                              </Row>
                              <Row>
                                <Col md={10} className="mt-3">
                                  <label>
                                    {" "}
                                    B04_5 เนื้อที่เก็บเกี่ยว(นับรวมทุกครั้งที่เก็บเกี่ยว)
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB04_5A) >= 0 &&
                                        Number(inputB04_5A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={B04_5AOnChange}
                                      value={inputB04_5A}
                                      disabled={disabled20504}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB04_5B) >= 0 &&
                                        Number(inputB04_5B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={B04_5BOnChange}
                                      value={inputB04_5B}
                                      disabled={disabled20504}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB04_5C) >= 0 &&
                                        Number(inputB04_5C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={B04_5COnChange}
                                      value={inputB04_5C}
                                      disabled={disabled20504}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB04_5 }}><label className="text-danger">กรุณาระบุ B04_5</label></div>
                                  <div className="mt-3" style={{ display: showWarningB04_4_5 }}><label className="text-danger">B04_4 ต้องมากกว่าหรือเท่ากับ B04_5</label></div>
                                </Col>
                                
                              </Row>
                              <Row>
                                <Col md={6} className="mt-3">
                                  <label>
                                    {" "}
                                    B04_6 ผลผลิต(นับรวมทุกครั้งที่ปลูก){" "}
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={9999999}
                                      onChange={B04_6OnChange}
                                      value={inputB04_6}
                                      disabled={disabled20504}
                                    />
                                    <span className="input-group-text">
                                      กิโลกรัม
                                    </span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB04_6 }}><label className="text-danger">กรุณาระบุ B04_6</label></div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>

                          <Row className="mt-5 question-subTitle">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                              2) ข้าวนาปรัง
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 question-subTitle1">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                              ข้าวเจ้า
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">
                            
                            <Col md={12}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> B05_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    value={inputB05_2}
                                  />
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> B05_3 จำนวนครั้งที่ปลูก</label>
                                  <input
                                    type="number"
                                    className={`form-control ${
                                      Number(inputB05_3) >= 0
                                        ? ""
                                        : "is-invalid"
                                    }`}
                                    min={1}
                                    max={5}
                                    onChange={B05_3OnChange}
                                    value={inputB05_3}
                                  />

                                  <div className="invalid-feedback">
                                    ต้องระบุอยู่ในระหว่าง 1 ถึง 5
                                  </div>
                                </Col>
                                <Col md={4} className="mt-3">

                                </Col>
                              </Row>

                              <Row>
                                <Col md={10} className="mt-3">
                                  <label>
                                    {" "}
                                    B05_4 เนื้อที่เพาะปลูก(นับรวมทุกครั้งที่ปลูก)
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB05_4A) >= 0 &&
                                        Number(inputB05_4A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={B05_4AOnChange}
                                      value={inputB05_4A}
                                      disabled={disabled20505}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB05_4B) >= 0 &&
                                        Number(inputB05_4B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={B05_4BOnChange}
                                      value={inputB05_4B}
                                      disabled={disabled20505}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB05_4C) >= 0 &&
                                        Number(inputB05_4C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={B05_4COnChange}
                                      value={inputB05_4C}
                                      disabled={disabled20505}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB05_4 }}><label className="text-danger">กรุณาระบุ B05_4</label></div>
                                  <div className="mt-3" style={{ display: showWarningDIV_B05_4_B05_3_A08 }}><label className="text-danger">B05_4 / B05_3 ต้องน้อยกว่าหรือเท่ากับ A08</label></div>
                                </Col>
                                
                              </Row>

                              <Row>
                                <Col md={10} className="mt-3">
                                  <label>B05_5 เนื้อที่เก็บเกี่ยว(นับรวมทุกครั้งที่เก็บเกี่ยว)</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB05_5A) >= 0 &&
                                        Number(inputB05_5A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={B05_5AOnChange}
                                      value={inputB05_5A}
                                      disabled={disabled20505}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB05_5B) >= 0 &&
                                        Number(inputB05_5B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={B05_5BOnChange}
                                      value={inputB05_5B}
                                      disabled={disabled20505}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB05_5C) >= 0 &&
                                        Number(inputB05_5C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={B05_5COnChange}
                                      value={inputB05_5C}
                                      disabled={disabled20505}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB05_5 }}><label className="text-danger">กรุณาระบุ B05_5</label></div>
                                  <div className="mt-3" style={{ display: showWarningB05_4_5 }}><label className="text-danger">B05_4 ต้องมากกว่าหรือเท่ากับ B05_5</label></div>
                                </Col>
                                
                              </Row>
                              <Row>
                                <Col md={6} className="mt-3">
                                  <label>
                                    {" "}
                                    B05_6 ผลผลิต(นับรวมทุกครั้งที่ปลูก){" "}
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={9999999}
                                      onChange={B05_6OnChange}
                                      value={inputB05_6}
                                      disabled={disabled20505}
                                    />
                                    <span className="input-group-text">
                                      กิโลกรัม
                                    </span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB05_6 }}><label className="text-danger">กรุณาระบุ B05_6</label></div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>

                          <Row className="mt-4 question-subTitle1">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                              ข้าวเหนียว
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">
                            
                            <Col md={12}>
                              <Row>
                                <Col md={4} className="mt-3">
                                  <label> B06_2 รหัส</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    disabled
                                    value={inputB06_2}
                                  />
                                </Col>
                                <Col md={4} className="mt-3">
                                  <label> B06_3 จำนวนครั้งที่ปลูก</label>
                                  <input
                                    type="number"
                                    className={`form-control ${
                                      Number(inputB06_3) >= 0
                                        ? ""
                                        : "is-invalid"
                                    }`}
                                    min={1}
                                    max={5}
                                    onChange={B06_3OnChange}
                                    value={inputB06_3}
                                  />

                                  <div className="invalid-feedback">
                                    ต้องระบุอยู่ในระหว่าง 1 ถึง 5
                                  </div>
                                </Col>
                                <Col md={4} className="mt-3">

                                </Col>
                              </Row>
                              <Row>
                                <Col md={10} className="mt-3">
                                  <label>
                                    {" "}
                                    B06_4 เนื้อที่เพาะปลูก(นับรวมทุกครั้งที่ปลูก)
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB06_4A) >= 0 &&
                                        Number(inputB06_4A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={B06_4AOnChange}
                                      value={inputB06_4A}
                                      disabled={disabled20506}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB06_4B) >= 0 &&
                                        Number(inputB06_4B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={B06_4BOnChange}
                                      value={inputB06_4B}
                                      disabled={disabled20506}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB06_4C) >= 0 &&
                                        Number(inputB06_4C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={B06_4COnChange}
                                      value={inputB06_4C}
                                      disabled={disabled20506}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB06_4 }}><label className="text-danger">กรุณาระบุ B06_4</label></div>
                                  <div className="mt-3" style={{ display: showWarningDIV_B06_4_B06_3_A08 }}><label className="text-danger">B06_4 / B06_3 ต้องน้อยกว่าหรือเท่ากับ A08</label></div>
                                </Col>
                                
                              </Row>
                              <Row>
                                <Col md={10} className="mt-3">
                                  <label>
                                    {" "}
                                    B06_5 เนื้อที่เก็บเกี่ยว(นับรวมทุกครั้งที่เก็บเกี่ยว)
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB06_5A) >= 0 &&
                                        Number(inputB06_5A) <= 99999
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99999}
                                      onChange={B06_5AOnChange}
                                      value={inputB06_5A}
                                      disabled={disabled20506}
                                    />
                                    <span className="input-group-text">
                                      ไร่
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB06_5B) >= 0 &&
                                        Number(inputB06_5B) <= 3
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={3}
                                      onChange={B06_5BOnChange}
                                      value={inputB06_5B}
                                      disabled={disabled20506}
                                    />
                                    <span className="input-group-text">
                                      งาน
                                    </span>

                                    <input
                                      type="number"
                                      className={`form-control form-control-mini-x ${
                                        Number(inputB06_5C) >= 0 &&
                                        Number(inputB06_5C) <= 99
                                          ? ""
                                          : "is-invalid"
                                      }`}
                                      min={0}
                                      max={99}
                                      onChange={B06_5COnChange}
                                      value={inputB06_5C}
                                      disabled={disabled20506}
                                    />
                                    <span className="input-group-text">
                                      ตารางวา
                                    </span>
                                    
                                    <div className="invalid-feedback">
                                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                    </div>

                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB06_5 }}><label className="text-danger">กรุณาระบุ B06_5</label></div>
                                  <div className="mt-3" style={{ display: showWarningB06_4_5 }}><label className="text-danger">B06_4 ต้องมากกว่าหรือเท่ากับ B06_5</label></div>
                                </Col>
                                
                              </Row>
                              <Row>
                                <Col md={6} className="mt-3">
                                  <label>
                                    {" "}
                                    B06_6 ผลผลิต(นับรวมทุกครั้งที่ปลูก){" "}
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      className="form-control"
                                      min={0}
                                      max={9999999}
                                      onChange={B06_6OnChange}
                                      value={inputB06_6}
                                      disabled={disabled20506}
                                    />
                                    <span className="input-group-text">
                                      กิโลกรัม
                                    </span>
                                  </div>
                                  <div className="mt-3" style={{ display: showWarningB06_6 }}><label className="text-danger">กรุณาระบุ B06_6</label></div>
                                </Col>
                              </Row>


                            </Col>

                          </Row>


                          <Row className="">
                            <Col md={12}>
                              <div className="mt-3" style={{ display: showWarningB }}><label className="text-danger">กรุณาระบุ ข้อมูลข้าว อย่างน้อย 1 รายการ</label></div>
                              <div className="mt-3" style={{ display: showWarningA08 }}><label className="text-danger">เนื้อที่เพาะปลูก ต้องน้อยกว่าหรือเท่ากับ ที่นา(ปลูกข้าว) A08 ถ้าไม่ใช่ต้องน้อยกว่าหรือเท่ากับ เนื้อที่ถือครองทั้งสิ้น A07</label></div>
                              <div className="mt-3" style={{ display: showWarningA08Blank }}><label className="text-danger">กรุณาระบุ เนื้อที่ที่นา(ปลูกข้าว) A08 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
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
                      //disabled={validate3}
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
