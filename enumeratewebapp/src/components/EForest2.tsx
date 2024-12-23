import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC07Model } from "../model/REC07Model";
import { REC07Info } from "../model/REC07Info";
import { LandCalculator } from "../service/LandCalculator";
import { REC01Info } from "../model/REC01Info";
import { REC02Info } from "../model/REC02Info";

export default function EForest2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputF01, setInputF01] = useState("");

  //state : input for modal
  const [inputF02, setInputF02] = useState("");
  const [inputF03, setInputF03] = useState("");
  const [inputF04, setInputF04] = useState("");
  const [inputF05, setInputF05] = useState("");
  const [inputF06, setInputF06] = useState("");
  const [inputF06A, setInputF06A] = useState("");
  const [inputF06B, setInputF06B] = useState("");
  const [inputF06C, setInputF06C] = useState("");
  const [inputF07, setInputF07] = useState("");
  const [inputF08, setInputF08] = useState("");

  const [rec01list, setRec01list] = useState<REC01Info[]>([]);

  //state rec01
  const [valueA13, setValueA13] = useState<string>("");

  //เก็บข้อมูลเป็นรายการ ที่แปลงมาจาก REC06
  const [plantList, SetPlantList] = useState<REC07Model[]>([]);

  const { handleSubmit } = useForm();

  useEffect(() => {
   
    console.log("load page EForest2");
    
    setInputF01("1")
    getREC07()

    setShowWarningF01("none")
    setShowWarningA13("none")
    setShowWarningA13Blank("none")

    //สำหรับดึงข้อมูล ผืนที่ดิน มาใช้ตรวจสอบ
    getREC01()

  }, [page === 8]);

  async function getREC07() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC07/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                let pl: REC07Model[] = []
                let rec07: REC07Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                if (rec07.F03_01 != "") { pl.push({ F02: rec07.F02_01, F03: rec07.F03_01, F04: rec07.F04_01, F05: rec07.F05_01, F06: rec07.F06_01, F06A: rec07.F06A_01, F06B: rec07.F06B_01, F06C: rec07.F06C_01, F07: rec07.F07_01, F08: rec07.F08_01 }) }
                if (rec07.F03_02 != "") { pl.push({ F02: rec07.F02_02, F03: rec07.F03_02, F04: rec07.F04_02, F05: rec07.F05_02, F06: rec07.F06_02, F06A: rec07.F06A_02, F06B: rec07.F06B_02, F06C: rec07.F06C_02, F07: rec07.F07_02, F08: rec07.F08_02 }) }
                if (rec07.F03_03 != "") { pl.push({ F02: rec07.F02_03, F03: rec07.F03_03, F04: rec07.F04_03, F05: rec07.F05_03, F06: rec07.F06_03, F06A: rec07.F06A_03, F06B: rec07.F06B_03, F06C: rec07.F06C_03, F07: rec07.F07_03, F08: rec07.F08_03 }) }
                if (rec07.F03_04 != "") { pl.push({ F02: rec07.F02_04, F03: rec07.F03_04, F04: rec07.F04_04, F05: rec07.F05_04, F06: rec07.F06_04, F06A: rec07.F06A_04, F06B: rec07.F06B_04, F06C: rec07.F06C_04, F07: rec07.F07_04, F08: rec07.F08_04 }) }
                if (rec07.F03_05 != "") { pl.push({ F02: rec07.F02_05, F03: rec07.F03_05, F04: rec07.F04_05, F05: rec07.F05_05, F06: rec07.F06_05, F06A: rec07.F06A_05, F06B: rec07.F06B_05, F06C: rec07.F06C_05, F07: rec07.F07_05, F08: rec07.F08_05 }) }

                //console.log(pl);

                SetPlantList(pl)

              }

              
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC07): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC07): ", err);
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
                //เนื้อที่ปลูกสวนป่า
                setValueA13(rec01?.A13!)

              }                            

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List on EForest2): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC01List on EForest2): ", err);
      }
    }
  }


  //action : input for modal
  const F02OnChange = (event: any) => {
    setInputF02(event.currentTarget.value)
  }

  const F03OnChange = (event: any) => {
    setInputF03(event.currentTarget.value)
  }

  const F04OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputF04(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledF04(false)
    }
    else{
      setDisabledF04(true)
      setInputF06A("")
      setInputF06B("")
      setInputF06C("")
      setInputF07("")
   
    }
  };

  const F05OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputF05(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledF05(false)
    }
    else{
      setDisabledF05(true)
      setInputF08("")
    }
  };
  
  const F06OnChange = (event: any) => {
    setInputF06(event.currentTarget.value)
  }

  const F06AOnChange = (event: any) => {
    setInputF06A(event.currentTarget.value)
  }

  const F06BOnChange = (event: any) => {
    setInputF06B(event.currentTarget.value)
  }

  const F06COnChange = (event: any) => {
    setInputF06C(event.currentTarget.value)
  }

  const F07OnChange = (event: any) => {
    setInputF07(event.currentTarget.value)
  }

  const F08OnChange = (event: any) => {
    setInputF08(event.currentTarget.value)
  }

  //state warning
  const [showWarningF04, setShowWarningF04] = useState<string>("none"); // ปิด
  const [showWarningF06, setShowWarningF06] = useState<string>("none"); // ปิด
  const [showWarningF06_A13, setShowWarningF06_A13] = useState<string>("none"); // ปิด
  const [showWarningF07, setShowWarningF07] = useState<string>("none"); // ปิด
  const [showWarningF08, setShowWarningF08] = useState<string>("none"); // ปิด

  //บันทึกรายละเอียดของพืช จาก modal
  async function SavePlant() {

    //consistency check
    let isvalid = true;

    if(inputF04 === "1" || inputF05 === "1"){     
      setShowWarningF04("none")
    }
    else{
      isvalid = false
      setShowWarningF04("")
    }

    //F04 = 1
    if(inputF04 === "1"){

      //F06 > 0
      if(Number(inputF06A) > 0 || Number(inputF06B) > 0 || Number(inputF06C) > 0){
        setShowWarningF06("none")
      }
      else{
        isvalid = false
        setShowWarningF06("")
      }

      //F07 > 0
      if(Number(inputF07) >= 1 && Number(inputF07) <= 999999 && Number.isInteger(Number(inputF07)) ){
        setShowWarningF07("none")
      }
      else{
        isvalid = false
        setShowWarningF07("")
      }

      //check ตัวเลข ไร่ งาน ตารางวา ต้องเป็น integer
      if (Number.isInteger(Number(inputF06A)) && Number.isInteger(Number(inputF06B)) && Number.isInteger(Number(inputF06C))) {
        //
      } else {
        isvalid = false;
      }

      //F06 <= A13 (อยู่ที่ REC02) *** ทำ consis หน้าผืนที่ก่อน กลับมาทำอีกที
      /* let A13 : number = Number(rec01list[0].A13)
      let F06 : number = LandCalculator.CalculateSummary(Number(inputF06A),Number(inputF06B),Number(inputF06C))
      if(F06 <= A13){
        setShowWarningF06_A13("none")
      }
      else{
        isvalid = false
        setShowWarningF06_A13("")
      } */

    }


    //F05 = 1
    if(inputF05 === "1"){

      //F08 > 0
      if (Number(inputF08) >= 1 && Number(inputF08) <= 999999 && Number.isInteger(Number(inputF08))) {
        setShowWarningF08("none")
      }
      else {
        isvalid = false
        setShowWarningF08("")
      }

    }




    //ผ่านการ consistency check
    if (isvalid) {

      //บันทึกลง state : plantList
      const plantList_updated = plantList.map((obj) => {
        if (obj.F03 === inputF03) {
          return {
            ...obj,
            F04: inputF04,
            F05: inputF05,
            F06: inputF06,
            F06A: inputF06A,
            F06B: inputF06B,
            F06C: inputF06C,
            F07: inputF07,
            F08: inputF08
          };
        }
        return obj;
      });

      SetPlantList(plantList_updated)

      handleClose()

    }
    else {
      //ไม่ต้องทำอะไร
    }

    
  }

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("สวนป่า");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //state : disabled
  const [disabledF04, setDisabledF04] = useState<boolean>(false);
  const [disabledF05, setDisabledF05] = useState<boolean>(false);

  const OpenModalItem = (F03:string) => {
    //ค้นหาใน รายการ
    const item : REC07Model | undefined = plantList.find(element => element.F03 === F03)
    console.log(item);
        
    //set value to state of modal
    setInputF02(item?.F02!)
    setInputF03(item?.F03!)
    setInputF04(item?.F04!)
    setInputF05(item?.F05!)
    setInputF06(item?.F06!)
    setInputF06A(item?.F06A! === "" ? "" : parseInt(item?.F06A!).toString())
    setInputF06B(item?.F06B! === "" ? "" : parseInt(item?.F06B!).toString())
    setInputF06C(item?.F06C! === "" ? "" : parseInt(item?.F06C!).toString())
    setInputF07(item?.F07! === "" ? "" : parseInt(item?.F07!).toString())
    setInputF08(item?.F08! === "" ? "" : parseInt(item?.F08!).toString())

    //disabled
    if(item?.F04! === "1"){
      setDisabledF04(false)
    }
    else{
      setDisabledF04(true)
    }

    if(item?.F05! === "1"){
      setDisabledF05(false)
    }
    else{
      setDisabledF05(true)
    }


    setShowWarningF04("none")
    setShowWarningF07("none")
    setShowWarningF08("none")

    handleShow()
  };


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
  const [showWarningF01, setShowWarningF01] = useState<string>("none"); // ปิด
  const [showWarningA13Blank, setShowWarningA13Blank] = useState<string>("none"); // ปิด
  const [showWarningA13, setShowWarningA13] = useState<string>("none"); // ปิด


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 3.5 สวนป่า
  const SaveOnClick = async () => {

    //summation F06
    let SUM_F06 : number = 0;

    //คำนวณผลรวมของ f06 เป็นทศนิยม xxxxx.xxxx ที่อยู่ใน state : plantList
    const plantList_updated = plantList.map((obj) => {
      const _F06= LandCalculator.CalculateSummary(Number(obj.F06A),Number(obj.F06B),Number(obj.F06C)).toFixed(4).toString().padStart(10,'0')

      SUM_F06 += LandCalculator.CalculateSummary(Number(obj.F06A),Number(obj.F06B),Number(obj.F06C));

      return {
        ...obj,
        F06: _F06
      };
    });

    let rec07 : REC07Info = ({
      AH_CODE: enumeratesk2?.AH_CODE!,
      F01: inputF01,
      F02_01: "",
      F03_01: "",
      F04_01: "",
      F05_01: "",
      F06_01: "",
      F06A_01: "",
      F06B_01: "",
      F06C_01: "",
      F07_01: "",
      F08_01: "",
      F02_02: "",
      F03_02: "",
      F04_02: "",
      F05_02: "",
      F06_02: "",
      F06A_02: "",
      F06B_02: "",
      F06C_02: "",
      F07_02: "",
      F08_02: "",
      F02_03: "",
      F03_03: "",
      F04_03: "",
      F05_03: "",
      F06_03: "",
      F06A_03: "",
      F06B_03: "",
      F06C_03: "",
      F07_03: "",
      F08_03: "",
      F02_04: "",
      F03_04: "",
      F04_04: "",
      F05_04: "",
      F06_04: "",
      F06A_04: "",
      F06B_04: "",
      F06C_04: "",
      F07_04: "",
      F08_04: "",
      F02_05: "",
      F03_05: "",
      F04_05: "",
      F05_05: "",
      F06_05: "",
      F06A_05: "",
      F06B_05: "",
      F06C_05: "",
      F07_05: "",
      F08_05: ""     
    })

    //set ตามโครงสร้าง REC07Info
    plantList_updated.forEach(function (item) {

      //จามจุรี
      if(item.F03 === "12110"){
        rec07.F02_01 = item.F02;
        rec07.F03_01 = item.F03;
        rec07.F04_01 = item.F04;
        rec07.F05_01 = item.F05;
        rec07.F06_01 = item.F06;
        rec07.F06A_01 = item.F06A !== "" ? item.F06A.padStart(5, '0') : "" ;
        rec07.F06B_01 = item.F06B !== "" ? item.F06B.padStart(1, '0') : "" ;
        rec07.F06C_01 = item.F06C !== "" ? item.F06C.padStart(2, '0') : "" ;
        rec07.F07_01 = (item.F07 !== "" && item.F07 !== "0") ? item.F07.padStart(6, '0') : ""  ;
        rec07.F08_01 = item.F08 !== "" ? item.F08.padStart(6, '0') : "" ;
      }

      //ไผ่ทุกชนิด (ยกเว้นไผ่ตง) 
      if(item.F03 === "12119"){
        rec07.F02_02 = item.F02;
        rec07.F03_02 = item.F03;
        rec07.F04_02 = item.F04;
        rec07.F05_02 = item.F05;
        rec07.F06_02 = item.F06;
        rec07.F06A_02 = item.F06A !== "" ? item.F06A.padStart(5, '0') : "" ;
        rec07.F06B_02 = item.F06B !== "" ? item.F06B.padStart(1, '0') : "" ;
        rec07.F06C_02 = item.F06C !== "" ? item.F06C.padStart(2, '0') : "" ;
        rec07.F07_02 = (item.F07 !== "" && item.F07 !== "0") ? item.F07.padStart(6, '0') : ""  ;
        rec07.F08_02 = item.F08 !== "" ? item.F08.padStart(6, '0') : "" ;
      }

      //ยางนา
      if(item.F03 === "12128"){
        rec07.F02_03 = item.F02;
        rec07.F03_03 = item.F03;
        rec07.F04_03 = item.F04;
        rec07.F05_03 = item.F05;
        rec07.F06_03 = item.F06;
        rec07.F06A_03 = item.F06A !== "" ? item.F06A.padStart(5, '0') : "" ;
        rec07.F06B_03 = item.F06B !== "" ? item.F06B.padStart(1, '0') : "" ;
        rec07.F06C_03 = item.F06C !== "" ? item.F06C.padStart(2, '0') : "" ;
        rec07.F07_03 = (item.F07 !== "" && item.F07 !== "0") ? item.F07.padStart(6, '0') : ""  ;
        rec07.F08_03 = item.F08 !== "" ? item.F08.padStart(6, '0') : "" ;
      }

      //ยูคาลิปตัส
      if(item.F03 === "12129"){
        rec07.F02_04 = item.F02;
        rec07.F03_04 = item.F03;
        rec07.F04_04 = item.F04;
        rec07.F05_04 = item.F05;
        rec07.F06_04 = item.F06;
        rec07.F06A_04 = item.F06A !== "" ? item.F06A.padStart(5, '0') : "" ;
        rec07.F06B_04 = item.F06B !== "" ? item.F06B.padStart(1, '0') : "" ;
        rec07.F06C_04 = item.F06C !== "" ? item.F06C.padStart(2, '0') : "" ;
        rec07.F07_04 = (item.F07 !== "" && item.F07 !== "0") ? item.F07.padStart(6, '0') : ""  ;
        rec07.F08_04 = item.F08 !== "" ? item.F08.padStart(6, '0') : "" ;
      }

      //สัก
      if(item.F03 === "12133"){
        rec07.F02_05 = item.F02;
        rec07.F03_05 = item.F03;
        rec07.F04_05 = item.F04;
        rec07.F05_05 = item.F05;
        rec07.F06_05 = item.F06;
        rec07.F06A_05 = item.F06A !== "" ? item.F06A.padStart(5, '0') : "" ;
        rec07.F06B_05 = item.F06B !== "" ? item.F06B.padStart(1, '0') : "" ;
        rec07.F06C_05 = item.F06C !== "" ? item.F06C.padStart(2, '0') : "" ;
        rec07.F07_05 = (item.F07 !== "" && item.F07 !== "0") ? item.F07.padStart(6, '0') : ""  ;
        rec07.F08_05 = item.F08 !== "" ? item.F08.padStart(6, '0') : "" ;
      }

    });
    
    const body = rec07
    //console.log(body);

    //consistency check
    let isvalid = true;

    //ทุกพืชสวนป่า ต้องมีการระบุข้อมูลทุกตัว
    let implist: REC07Model[] = plantList_updated.filter((p) => {
      return (
        p.F04 === "1" || p.F05 === "1"
      );
    })
    if(plantList_updated.length !== implist.length){
      setShowWarningF01("")
      isvalid = false
    }
    else{
      setShowWarningF01("none")
    }

    //ถ้า F04 = 1 แล้ว (เฉพาะรายการที่เลือก ปลูกเป็นกลุ่ม)
    let implist_F04_1: REC07Model[] = plantList_updated.filter((p) => {
      return (
        p.F04 === "1"
      );
    })
    if (implist_F04_1.length > 0) {

      //A13 ≠ blank
      if (Number(valueA13) <= 0) {
        setShowWarningA13Blank("")
        isvalid = false
      }
      else {
        setShowWarningA13Blank("none")
      }

      //ผลรวมของเนื้อที่เพาะปลูกพืชสวนป่าแต่ละชนิด ต้อง ≤ A13
      if (SUM_F06 > Number(valueA13)) {
        setShowWarningA13("")
        isvalid = false
      }
      else {
        setShowWarningA13("none")
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

          //url updateREC07
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC07";
          }

          //api updateREC07
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


          // หลังจาก updateREC07 แล้ว
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
              .catch((err) => { console.log("AXIOS ERROR (getREC01List in EForest2): ", err); });


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

                  if (farmplantlist.length > 0) {
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
        console.error("SaveOnClick ERROR (ตอนที่ 3.5 สวนป่า): ", error);
      }

    }
    else{
      //ไม่ต้องทำอะไร
    }

  }


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
              let oilpalmlist : PlantList[] = pl.filter((p) => {return p.T01 === "10033" || p.T01 === "10123"  || p.T01 === "10124"  || p.T01 === "10125"  ;})
              let perennialplantlist: PlantList[] = pl.filter((p) => { return (
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
                ); })

              if(perennialplantlist.length > 0){
                setPage(7) //ไปตอนที่ 3.4 พืชยืนต้น
              }
              else if(oilpalmlist.length > 0){
                setPage(6) //ไปตอนที่ 3.3 ปาล์มน้ำมัน
              }
              else if(rubberlist.length > 0){
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
        console.error("OnClickBack ERROR (ตอนที่ 3.5 สวนป่า): ", error);
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
            .catch((err) => { console.log("AXIOS ERROR (getREC01List in EForest2): ", err); });


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

                if (farmplantlist.length > 0) {
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
      console.error("NextOnClick ERROR (ตอนที่ 3.5 สวนป่า): ", error);
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
                        ตอนที่ 3.5 สวนป่า
                      </h5>
                    </Col>

                    <Col md={8} className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl544"
                        aria-expanded="false"
                        aria-controls="collapseControl544"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl544">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ณ วันที่ 1 พฤษภาคม 2566 ที่ถือครองนี้มีการปลูกพืชประเภทสวนป่า ชนิดสำคัญหรือไม่ (ระบบกำหนดให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>F01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_F01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_F01"
                                  type="radio"
                                  value={option.value}
                                  id={`rd_F01${index}`}
                                  checked={option.value === inputF01}
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_F01${index}`}
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
                                2. ให้สอบถามและบันทึกรายละเอียดการปลูกพืชสวนป่าชนิดสำคัญ
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 ">
                            <Col md={12}>
                              <label >
                                (ระบบกำหนดให้ตามที่บันทึกไว้ในตอนที่ 3)
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">

                            {plantList &&
                              plantList.map((item, index) => {
                                return (
                                  <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                                    <a onClick={() => OpenModalItem(item.F03)} >
                                      <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                        <div className={`card-body ${(item.F04 === "1" || item.F05 === "1" )?"box-list-success":"box-list-warning"} `}>
                                          <Row>
                                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                                              <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(item.F04 === "1" || item.F05 === "1"  ) && (<i className='bx bxs-check-square fs-4'></i>) } {index + 1}. {item.F02} ({item.F03}) </p>

                                            </div>
                                          </Row>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                );
                              })}

                          </Row>


                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="mt-3" style={{ display: showWarningF01 }}><label className="text-danger">กรุณาบันทึกรายละเอียดการปลูกพืชสวนป่าชนิดสำคัญ</label></div>
                          <div className="mt-3" style={{ display: showWarningA13Blank}}><label className="text-danger">กรุณาระบุ เนื้อที่สวนป่า A13 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
                          <div className="mt-3" style={{ display: showWarningA13}}><label className="text-danger">ผลรวมเนื้อที่เพาะปลูกสวนป่า ต้อง น้อยกว่าหรือเท่ากับ A13</label></div>
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
            <label style={{ fontWeight: "bold", fontSize:"1.5rem" }} >
                F02 {inputF02}
              </label>
              <br />
            </Col>
            <Col md={12}>

              <Row>
                <Col md={4} className="mt-3">
                  <label> F03 รหัส</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={inputF03}
                  />
                </Col>
                <Col md={4} className="mt-3">
                  <label> F04 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="F04"
                        onChange={F04OnChange}
                        checked={inputF04 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="F04">
                        {" "}
                        ปลูกเป็นกลุ่ม
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="mt-3">
                  <label> F05 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="F05"
                        onChange={F05OnChange}
                        checked={inputF05 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="F05">
                        {" "}
                        ปลูกปะปนกัน
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={4} className="mt-3">
                  <label> F06 เนื้อที่เพาะปลูก (ปลูกเป็นกลุ่ม)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputF06A) >= 0 &&
                        Number(inputF06A) <= 99999 && Number.isInteger(Number(inputF06A))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99999}
                      onChange={F06AOnChange}
                      value={inputF06A}
                      disabled={disabledF04}
                    />
                    <span className="input-group-text">
                      ไร่
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputF06B) >= 0 &&
                        Number(inputF06B) <= 3 && Number.isInteger(Number(inputF06B))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={3}
                      onChange={F06BOnChange}
                      value={inputF06B}
                      disabled={disabledF04}
                    />
                    <span className="input-group-text">
                      งาน
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputF06C) >= 0 &&
                        Number(inputF06C) <= 99 && Number.isInteger(Number(inputF06C))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99}
                      onChange={F06COnChange}
                      value={inputF06C}
                      disabled={disabledF04}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>
                    
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                  <div className="mt-3" style={{ display: showWarningF06 }}><label className="text-danger">กรุณาระบุ F06 มากกว่า 0</label></div>
                  <div className="mt-3" style={{ display: showWarningF06_A13 }}><label className="text-danger">F06 ต้องมีค่าน้อยกว่าหรือเท่ากับ A13 </label></div>
                </Col>
                
              </Row>

              <Row>
                <Col md={4} className="mt-3">
                  <label> F07 จำนวนต้นทั้งสิ้น (ปลูกเป็นกลุ่ม)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      max={999999}
                      onChange={F07OnChange}
                      value={inputF07}
                      disabled={disabledF04}
                    />
                    <span className="input-group-text">ต้น</span>
                  </div>
                  <div className="mt-3" style={{ display: showWarningF07 }}><label className="text-danger">กรุณาระบุ F07 มากกว่า 0</label></div>
                </Col>
                <Col md={4} className="mt-3">
                  <label> F08 จำนวนต้นทั้งสิ้น (ปลูกปะปนกัน)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      max={999999}
                      onChange={F08OnChange}
                      value={inputF08}
                      disabled={disabledF05}
                    />
                    <span className="input-group-text">ต้น</span>
                  </div>
                  <div className="mt-3" style={{ display: showWarningF08 }}><label className="text-danger">กรุณาระบุ F08 มากกว่า 0</label></div>
                </Col>
              </Row>


            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningF04 }}><label className="text-danger">กรุณาระบุ F04 หรือ F05 อย่างน้อย 1 รายการ </label></div>
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
                onClick={()=>SavePlant()}
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
