import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _G01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC08Model } from "../model/REC08Model";
import { REC08Info } from "../model/REC08Info";
import { LandCalculator } from "../service/LandCalculator";
import { REC01Info } from "../model/REC01Info";
import { REC02Info } from "../model/REC02Info";

export default function EFarmPlants2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputG01, setInputG01] = useState("");

  //state : input for modal
  const [inputG02, setInputG02] = useState("");
  const [inputG03, setInputG03] = useState("");
  const [inputG04, setInputG04] = useState("");
  const [inputG05, setInputG05] = useState("");
  const [inputG05A, setInputG05A] = useState("");
  const [inputG05B, setInputG05B] = useState("");
  const [inputG05C, setInputG05C] = useState("");
  const [inputG06, setInputG06] = useState("");
  const [inputG06A, setInputG06A] = useState("");
  const [inputG06B, setInputG06B] = useState("");
  const [inputG06C, setInputG06C] = useState("");

  const [rec01list, setRec01list] = useState<REC01Info[]>([]);

  //state rec01
  const [valueA11, setValueA11] = useState<string>("");
  const [valueA14, setValueA14] = useState<string>("");
  const [valueA07, setValueA07] = useState<string>("");

  //เก็บข้อมูลเป็นรายการ ที่แปลงมาจาก REC08
  const [plantList, SetPlantList] = useState<REC08Model[]>([]);

  const { handleSubmit } = useForm();

  useEffect(() => {
    console.log("load page EFarmPlants2");
    
    setInputG01("1")
    getREC08()
    getREC01()

  }, [page === 9]);

  async function getREC08() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC08/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {
                
                let pl: REC08Model[] = []
                let rec08: REC08Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                if (rec08.G03_01 != "") { pl.push({ G02: rec08.G02_01, G03: rec08.G03_01, G04: rec08.G04_01, G05: rec08.G05_01, G05A: rec08.G05A_01, G05B: rec08.G05B_01, G05C: rec08.G05C_01, G06: rec08.G06_01, G06A: rec08.G06A_01, G06B: rec08.G06B_01, G06C: rec08.G06C_01 }) }
                if (rec08.G03_02 != "") { pl.push({ G02: rec08.G02_02, G03: rec08.G03_02, G04: rec08.G04_02, G05: rec08.G05_02, G05A: rec08.G05A_02, G05B: rec08.G05B_02, G05C: rec08.G05C_02, G06: rec08.G06_02, G06A: rec08.G06A_02, G06B: rec08.G06B_02, G06C: rec08.G06C_02 }) }
                if (rec08.G03_03 != "") { pl.push({ G02: rec08.G02_03, G03: rec08.G03_03, G04: rec08.G04_03, G05: rec08.G05_03, G05A: rec08.G05A_03, G05B: rec08.G05B_03, G05C: rec08.G05C_03, G06: rec08.G06_03, G06A: rec08.G06A_03, G06B: rec08.G06B_03, G06C: rec08.G06C_03 }) }
                if (rec08.G03_04 != "") { pl.push({ G02: rec08.G02_04, G03: rec08.G03_04, G04: rec08.G04_04, G05: rec08.G05_04, G05A: rec08.G05A_04, G05B: rec08.G05B_04, G05C: rec08.G05C_04, G06: rec08.G06_04, G06A: rec08.G06A_04, G06B: rec08.G06B_04, G06C: rec08.G06C_04 }) }
                if (rec08.G03_05 != "") { pl.push({ G02: rec08.G02_05, G03: rec08.G03_05, G04: rec08.G04_05, G05: rec08.G05_05, G05A: rec08.G05A_05, G05B: rec08.G05B_05, G05C: rec08.G05C_05, G06: rec08.G06_05, G06A: rec08.G06A_05, G06B: rec08.G06B_05, G06C: rec08.G06C_05 }) }
                if (rec08.G03_06 != "") { pl.push({ G02: rec08.G02_06, G03: rec08.G03_06, G04: rec08.G04_06, G05: rec08.G05_06, G05A: rec08.G05A_06, G05B: rec08.G05B_06, G05C: rec08.G05C_06, G06: rec08.G06_06, G06A: rec08.G06A_06, G06B: rec08.G06B_06, G06C: rec08.G06C_06 }) }
                if (rec08.G03_07 != "") { pl.push({ G02: rec08.G02_07, G03: rec08.G03_07, G04: rec08.G04_07, G05: rec08.G05_07, G05A: rec08.G05A_07, G05B: rec08.G05B_07, G05C: rec08.G05C_07, G06: rec08.G06_07, G06A: rec08.G06A_07, G06B: rec08.G06B_07, G06C: rec08.G06C_07 }) }
                if (rec08.G03_08 != "") { pl.push({ G02: rec08.G02_08, G03: rec08.G03_08, G04: rec08.G04_08, G05: rec08.G05_08, G05A: rec08.G05A_08, G05B: rec08.G05B_08, G05C: rec08.G05C_08, G06: rec08.G06_08, G06A: rec08.G06A_08, G06B: rec08.G06B_08, G06C: rec08.G06C_08 }) }

                //console.log(pl);

                SetPlantList(pl)

              }

              

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC08): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC08): ", err);
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
                //เนื้อที่ปลูกพืชไร่
                setValueA11(rec01?.A11!)
                setValueA14(rec01?.A14!)

                setValueA07(rec01?.A07!)

                //console.log("rec01",rec01);
                

              }                            

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List on EFarmPlants2): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC01List on EFarmPlants2): ", err);
      }
    }
  }

  //action : input for modal
  const G02OnChange = (event: any) => {
    setInputG02(event.currentTarget.value)
  }

  const G03OnChange = (event: any) => {
    setInputG03(event.currentTarget.value)
  }

  const G04OnChange = (event: any) => {
    setInputG04(event.currentTarget.value)
  }

  const G05OnChange = (event: any) => {
    setInputG05(event.currentTarget.value)
  }

  const G05AOnChange = (event: any) => {
    setInputG05A(event.currentTarget.value)
  }

  const G05BOnChange = (event: any) => {
    setInputG05B(event.currentTarget.value)
  }

  const G05COnChange = (event: any) => {
    setInputG05C(event.currentTarget.value)
  }

  const G06OnChange = (event: any) => {
    setInputG06(event.currentTarget.value)
  }

  const G06AOnChange = (event: any) => {
    setInputG06A(event.currentTarget.value)
  }

  const G06BOnChange = (event: any) => {
    setInputG06B(event.currentTarget.value)
  }

  const G06COnChange = (event: any) => {
    setInputG06C(event.currentTarget.value)
  }

  //state warning
  const [showWarningG04, setShowWarningG04] = useState<string>("none"); // ปิด
  const [showWarningG05, setShowWarningG05] = useState<string>("none"); // ปิด
  const [showWarningG06, setShowWarningG06] = useState<string>("none"); // ปิด
  const [showWarningG05_06, setShowWarningG05_06] = useState<string>("none"); // ปิด

  //บันทึกรายละเอียดของพืช จาก modal
  async function SavePlant() {

    //consistency check
    let isvalid = true;

    if(Number(inputG04) >= 1 && Number(inputG04) <= 9 && Number.isInteger(Number(inputG04)) ){     
      setShowWarningG04("none")
    }
    else{
      isvalid = false
      setShowWarningG04("")
    }

    //G05
    if(Number(inputG05A) > 0 || Number(inputG05B) > 0 || Number(inputG05C) > 0){     
      setShowWarningG05("none")
    }
    else{
      isvalid = false
      setShowWarningG05("")
    }

    if(Number(inputG05A) >= 0 && Number(inputG05A) <= 99999 ){
      //setShowWarningG05("none")
    }
    else{
      isvalid = false
      //setShowWarningG05("")
    }

    if(Number(inputG05B) >= 0 && Number(inputG05B) <= 3 ){
      //setShowWarningG05("none")
    }
    else{
      isvalid = false
      //setShowWarningG05("")
    }

    if(Number(inputG05C) >= 0 && Number(inputG05C) <= 99 ){
      //setShowWarningG05("none")
    }
    else{
      isvalid = false
      //setShowWarningG05("")
    }


    //G06
    /* if(inputG06A !== "" && inputG06B !== "" && inputG06C !== ""){     
      setShowWarningG06("none")
    }
    else{
      isvalid = false
      setShowWarningG06("")
    } */

    if(Number(inputG06A) >= 0 && Number(inputG06A) <= 99999 ){
      //
    }
    else{
      isvalid = false
    }

    if(Number(inputG06B) >= 0 && Number(inputG06B) <= 3 ){
      //
    }
    else{
      isvalid = false
    }

    if(Number(inputG06C) >= 0 && Number(inputG06C) <= 99 ){
      //
    }
    else{
      isvalid = false
    }

    //check ตัวเลข ไร่ งาน ตารางวา ต้องเป็น integer
    if (Number.isInteger(Number(inputG05A)) && Number.isInteger(Number(inputG05B)) && Number.isInteger(Number(inputG05C))) {
      //
    } else {
      isvalid = false;
    }

    if (Number.isInteger(Number(inputG06A)) && Number.isInteger(Number(inputG06B)) && Number.isInteger(Number(inputG06C))) {
      //
    } else {
      isvalid = false;
    }

    let SUM_G05 : number = LandCalculator.CalculateSummary(Number(inputG05A),Number(inputG05B),Number(inputG05C))
    let SUM_G06 : number = LandCalculator.CalculateSummary(Number(inputG06A),Number(inputG06B),Number(inputG06C))
    if(SUM_G05 >= SUM_G06){
      setShowWarningG05_06("none")
    }else{
      isvalid = false
      setShowWarningG05_06("")
    }



    //ผ่านการ consistency check
    if (isvalid) {
      //บันทึกลง state : plantList
      const plantList_updated = plantList.map((obj) => {
        if (obj.G03 === inputG03) {
          return {
            ...obj,
            G04: inputG04,
            G05: inputG05,
            G05A: inputG05A,
            G05B: inputG05B,
            G05C: inputG05C,
            G06: inputG06,
            G06A: inputG06A,
            G06B: inputG06B,
            G06C: inputG06C
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
  const [titleModal, setTitleModal] = useState("พืชไร่");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModalItem = (G03:string) => {
    //ค้นหาใน รายการ
    const item : REC08Model | undefined = plantList.find(element => element.G03 === G03)
    console.log(item);
        
    //set value to state of modal
    setInputG02(item?.G02!)
    setInputG03(item?.G03!)
    setInputG04(item?.G04!)
    setInputG05(item?.G05!)
    setInputG05A(item?.G05A! === "" ? "" : parseInt(item?.G05A!).toString())
    setInputG05B(item?.G05B! === "" ? "" : parseInt(item?.G05B!).toString())
    setInputG05C(item?.G05C! === "" ? "" : parseInt(item?.G05C!).toString())
    setInputG06(item?.G06!)
    setInputG06A(item?.G06A! === "" ? "" : parseInt(item?.G06A!).toString())
    setInputG06B(item?.G06B! === "" ? "" : parseInt(item?.G06B!).toString())
    setInputG06C(item?.G06C! === "" ? "" : parseInt(item?.G06C!).toString())

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
  const [showWarningG01, setShowWarningG01] = useState<string>("none"); // ปิด
  const [showWarningA11Blank, setShowWarningA11Blank] = useState<string>("none"); // ปิด
  const [showWarningA11, setShowWarningA11] = useState<string>("none"); // ปิด


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 3.6 พืชไร่
  const SaveOnClick = async () => {

    //summation G05
    let SUM_G05 : number = 0;
    let SUM_DIV_G05_G04 : number = 0;

    //คำนวณผลรวมของ g05, g06 เป็นทศนิยม xxxxx.xxxx ที่อยู่ใน state : plantList
    const plantList_updated = plantList.map((obj) => {
      const _G05= LandCalculator.CalculateSummary(Number(obj.G05A),Number(obj.G05B),Number(obj.G05C)).toFixed(4).toString().padStart(10,'0')
      const _G06= LandCalculator.CalculateSummary(Number(obj.G06A),Number(obj.G06B),Number(obj.G06C)).toFixed(4).toString().padStart(10,'0')

      const G05_item = LandCalculator.CalculateSummary(Number(obj.G05A),Number(obj.G05B),Number(obj.G05C))
      SUM_G05 += G05_item;
      SUM_DIV_G05_G04 += Number(obj.G04) !== 0 ? G05_item / Number(obj.G04) : 0

      return {
        ...obj,
        G05: _G05,
        G06: _G06
      };
    });

    let rec08 : REC08Info = ({
      AH_CODE: enumeratesk2?.AH_CODE!,
      G01: inputG01,
      G02_01: "",
      G03_01: "",
      G04_01: "",
      G05_01: "",
      G05A_01: "",
      G05B_01: "",
      G05C_01: "",
      G06_01: "",
      G06A_01: "",
      G06B_01: "",
      G06C_01: "",
      G02_02: "",
      G03_02: "",
      G04_02: "",
      G05_02: "",
      G05A_02: "",
      G05B_02: "",
      G05C_02: "",
      G06_02: "",
      G06A_02: "",
      G06B_02: "",
      G06C_02: "",
      G02_03: "",
      G03_03: "",
      G04_03: "",
      G05_03: "",
      G05A_03: "",
      G05B_03: "",
      G05C_03: "",
      G06_03: "",
      G06A_03: "",
      G06B_03: "",
      G06C_03: "",
      G02_04: "",
      G03_04: "",
      G04_04: "",
      G05_04: "",
      G05A_04: "",
      G05B_04: "",
      G05C_04: "",
      G06_04: "",
      G06A_04: "",
      G06B_04: "",
      G06C_04: "",
      G02_05: "",
      G03_05: "",
      G04_05: "",
      G05_05: "",
      G05A_05: "",
      G05B_05: "",
      G05C_05: "",
      G06_05: "",
      G06A_05: "",
      G06B_05: "",
      G06C_05: "",
      G02_06: "",
      G03_06: "",
      G04_06: "",
      G05_06: "",
      G05A_06: "",
      G05B_06: "",
      G05C_06: "",
      G06_06: "",
      G06A_06: "",
      G06B_06: "",
      G06C_06: "",
      G02_07: "",
      G03_07: "",
      G04_07: "",
      G05_07: "",
      G05A_07: "",
      G05B_07: "",
      G05C_07: "",
      G06_07: "",
      G06A_07: "",
      G06B_07: "",
      G06C_07: "",
      G02_08: "",
      G03_08: "",
      G04_08: "",
      G05_08: "",
      G05A_08: "",
      G05B_08: "",
      G05C_08: "",
      G06_08: "",
      G06A_08: "",
      G06B_08: "",
      G06C_08: "",    
    })

    //set ตามโครงสร้าง REC08Info
    plantList_updated.forEach(function (item) {

      //สับปะรด
      if(item.G03 === "20094"){
        rec08.G02_01 = item.G02;
        rec08.G03_01 = item.G03;
        rec08.G04_01 = item.G04;
        rec08.G05_01 = item.G05;
        rec08.G05A_01 = item.G05A !== "" ? item.G05A.padStart(5, '0') : "" ;
        rec08.G05B_01 = item.G05B !== "" ? item.G05B.padStart(1, '0') : "" ;
        rec08.G05C_01 = item.G05C !== "" ? item.G05C.padStart(2, '0') : "" ;
        rec08.G06_01 = item.G06;
        rec08.G06A_01 = item.G06A !== "" ? item.G06A.padStart(5, '0') : "" ;
        rec08.G06B_01 = item.G06B !== "" ? item.G06B.padStart(1, '0') : "" ;
        rec08.G06C_01 = item.G06C !== "" ? item.G06C.padStart(2, '0') : "" ;
      }

      //ข้าวโพดเลี้ยงสัตว์
      if(item.G03 === "20394"){
        rec08.G02_02 = item.G02;
        rec08.G03_02 = item.G03;
        rec08.G04_02 = item.G04;
        rec08.G05_02 = item.G05;
        rec08.G05A_02 = item.G05A !== "" ? item.G05A.padStart(5, '0') : "" ;
        rec08.G05B_02 = item.G05B !== "" ? item.G05B.padStart(1, '0') : "" ;
        rec08.G05C_02 = item.G05C !== "" ? item.G05C.padStart(2, '0') : "" ;
        rec08.G06_02 = item.G06;
        rec08.G06A_02 = item.G06A !== "" ? item.G06A.padStart(5, '0') : "" ;
        rec08.G06B_02 = item.G06B !== "" ? item.G06B.padStart(1, '0') : "" ;
        rec08.G06C_02 = item.G06C !== "" ? item.G06C.padStart(2, '0') : "" ;
      }

      //ถั่วเขียวผิวมัน
      if(item.G03 === "20405"){
        rec08.G02_03 = item.G02;
        rec08.G03_03 = item.G03;
        rec08.G04_03 = item.G04;
        rec08.G05_03 = item.G05;
        rec08.G05A_03 = item.G05A !== "" ? item.G05A.padStart(5, '0') : "" ;
        rec08.G05B_03 = item.G05B !== "" ? item.G05B.padStart(1, '0') : "" ;
        rec08.G05C_03 = item.G05C !== "" ? item.G05C.padStart(2, '0') : "" ;
        rec08.G06_03 = item.G06;
        rec08.G06A_03 = item.G06A !== "" ? item.G06A.padStart(5, '0') : "" ;
        rec08.G06B_03 = item.G06B !== "" ? item.G06B.padStart(1, '0') : "" ;
        rec08.G06C_03 = item.G06C !== "" ? item.G06C.padStart(2, '0') : "" ;
      }

      //ถั่วลิสง
      if(item.G03 === "20416"){
        rec08.G02_04 = item.G02;
        rec08.G03_04 = item.G03;
        rec08.G04_04 = item.G04;
        rec08.G05_04 = item.G05;
        rec08.G05A_04 = item.G05A !== "" ? item.G05A.padStart(5, '0') : "" ;
        rec08.G05B_04 = item.G05B !== "" ? item.G05B.padStart(1, '0') : "" ;
        rec08.G05C_04 = item.G05C !== "" ? item.G05C.padStart(2, '0') : "" ;
        rec08.G06_04 = item.G06;
        rec08.G06A_04 = item.G06A !== "" ? item.G06A.padStart(5, '0') : "" ;
        rec08.G06B_04 = item.G06B !== "" ? item.G06B.padStart(1, '0') : "" ;
        rec08.G06C_04 = item.G06C !== "" ? item.G06C.padStart(2, '0') : "" ;
      }

      //ถั่วเหลือง
      if(item.G03 === "20419"){
        rec08.G02_05 = item.G02;
        rec08.G03_05 = item.G03;
        rec08.G04_05 = item.G04;
        rec08.G05_05 = item.G05;
        rec08.G05A_05 = item.G05A !== "" ? item.G05A.padStart(5, '0') : "" ;
        rec08.G05B_05 = item.G05B !== "" ? item.G05B.padStart(1, '0') : "" ;
        rec08.G05C_05 = item.G05C !== "" ? item.G05C.padStart(2, '0') : "" ;
        rec08.G06_05 = item.G06;
        rec08.G06A_05 = item.G06A !== "" ? item.G06A.padStart(5, '0') : "" ;
        rec08.G06B_05 = item.G06B !== "" ? item.G06B.padStart(1, '0') : "" ;
        rec08.G06C_05 = item.G06C !== "" ? item.G06C.padStart(2, '0') : "" ;
      }

      //มันสำปะหลัง
      if(item.G03 === "20431"){
        rec08.G02_06 = item.G02;
        rec08.G03_06 = item.G03;
        rec08.G04_06 = item.G04;
        rec08.G05_06 = item.G05;
        rec08.G05A_06 = item.G05A !== "" ? item.G05A.padStart(5, '0') : "" ;
        rec08.G05B_06 = item.G05B !== "" ? item.G05B.padStart(1, '0') : "" ;
        rec08.G05C_06 = item.G05C !== "" ? item.G05C.padStart(2, '0') : "" ;
        rec08.G06_06 = item.G06;
        rec08.G06A_06 = item.G06A !== "" ? item.G06A.padStart(5, '0') : "" ;
        rec08.G06B_06 = item.G06B !== "" ? item.G06B.padStart(1, '0') : "" ;
        rec08.G06C_06 = item.G06C !== "" ? item.G06C.padStart(2, '0') : "" ;
      }

       //ยาสูบ
       if(item.G03 === "20432"){
        rec08.G02_07 = item.G02;
        rec08.G03_07 = item.G03;
        rec08.G04_07 = item.G04;
        rec08.G05_07 = item.G05;
        rec08.G05A_07 = item.G05A !== "" ? item.G05A.padStart(5, '0') : "" ;
        rec08.G05B_07 = item.G05B !== "" ? item.G05B.padStart(1, '0') : "" ;
        rec08.G05C_07 = item.G05C !== "" ? item.G05C.padStart(2, '0') : "" ;
        rec08.G06_07 = item.G06;
        rec08.G06A_07 = item.G06A !== "" ? item.G06A.padStart(5, '0') : "" ;
        rec08.G06B_07 = item.G06B !== "" ? item.G06B.padStart(1, '0') : "" ;
        rec08.G06C_07 = item.G06C !== "" ? item.G06C.padStart(2, '0') : "" ;
      }

      //อ้อยโรงงาน
      if(item.G03 === "20438"){
        rec08.G02_08 = item.G02;
        rec08.G03_08 = item.G03;
        rec08.G04_08 = item.G04;
        rec08.G05_08 = item.G05;
        rec08.G05A_08 = item.G05A !== "" ? item.G05A.padStart(5, '0') : "" ;
        rec08.G05B_08 = item.G05B !== "" ? item.G05B.padStart(1, '0') : "" ;
        rec08.G05C_08 = item.G05C !== "" ? item.G05C.padStart(2, '0') : "" ;
        rec08.G06_08 = item.G06;
        rec08.G06A_08 = item.G06A !== "" ? item.G06A.padStart(5, '0') : "" ;
        rec08.G06B_08 = item.G06B !== "" ? item.G06B.padStart(1, '0') : "" ;
        rec08.G06C_08 = item.G06C !== "" ? item.G06C.padStart(2, '0') : "" ;
      }

    });
    
    const body = rec08
    //console.log(body);

    //consistency check
    let isvalid = true;

    //ทุกพืชไร่ ต้องมีการระบุข้อมูลทุกตัว
    let implist: REC08Model[] = plantList_updated.filter((p) => {
      return (
        Number(p.G04) > 0
      );
    })
    if(plantList_updated.length !== implist.length){
      setShowWarningG01("")
      isvalid = false
    }
    else{
      setShowWarningG01("none")
    }

    //A11, A14 อย่างน้อย 1 รายการ ≠ blank
    /* if(Number(valueA11) > 0 || Number(valueA14) > 0 ){
      setShowWarningA11Blank("none")
    }
    else{      
      setShowWarningA11Blank("")
      isvalid = false
    } */

    //ผลรวมของ (G05_01/G04_01) ของพืชแต่ละชนิด รวมกัน ต้อง ≤ A11 หรือ ถ้าไม่ใช่ ให้ตรวจว่า ต้อง ≤ A07
    //console.log("SUM_DIV_G05_G04",SUM_DIV_G05_G04);
    //console.log("Number(valueA07)",Number(valueA07));  
    //2023-05-23 14.31 แต๋มให้ปลดออกไม่ต้องเช็ค  
    /* if (SUM_DIV_G05_G04 <= Number(valueA11) || SUM_DIV_G05_G04 <= Number(valueA07)) {
      setShowWarningA11("none") 
    }
    else {
      setShowWarningA11("")
      isvalid = false     
    } */


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

          //url updateREC08
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC08";
          }

          //api updateREC08
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

          // หลังจาก updateREC08 แล้ว  
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
              .catch((err) => { console.log("AXIOS ERROR (getREC01List in EFarmPlants2): ", err); });


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

                  if (vegetablelist.length > 0) {
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
        console.error("SaveOnClick ERROR (ตอนที่ 3.6 พืชไร่): ", error);
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
              let forestlist: PlantList[] = pl.filter((p) => {
                return (
                  p.T01 === "12110" ||
                  p.T01 === "12119" ||
                  p.T01 === "12128" ||
                  p.T01 === "12129" ||
                  p.T01 === "12133"
                );
              })

              if(forestlist.length > 0){
                setPage(8) //ไปตอนที่ 3.5 สวนป่า
              }
              else if(perennialplantlist.length > 0){
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
        console.error("OnClickBack ERROR (ตอนที่ 3.6 พืชไร่): ", error);
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
            .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in EFarmPlants2): ", err); });


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

                if (vegetablelist.length > 0) {
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
      console.error("NextOnClick ERROR (ตอนที่ 3.6 พืชไร่): ", error);
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
                        ตอนที่ 3.6 พืชไร่
                      </h5>
                    </Col>

                    <Col md={8} className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl566"
                        aria-expanded="false"
                        aria-controls="collapseControl566"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl566">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการปลูกพืชไร่ ชนิดสำคัญหรือไม่ (ระบบกำหนดให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>G01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_G01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_G01"
                                  type="radio"
                                  value={option.value}
                                  id={`rd_G01${index}`}
                                  checked={option.value === inputG01}
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_G01${index}`}
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
                                2. ให้สอบถามและบันทึกข้อมูลการปลูกพืชไร่ชนิดสำคัญ
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
                                    <a onClick={() => OpenModalItem(item.G03)} >
                                      <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                        <div className={`card-body ${(Number(item.G04) > 0  )?"box-list-success":"box-list-warning"} `}>
                                          <Row>
                                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                                              <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(Number(item.G04) > 0  ) && (<i className='bx bxs-check-square fs-4'></i>) } {index + 1}. {item.G02} ({item.G03}) </p>

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
                          <div className="mt-3" style={{ display: showWarningG01 }}><label className="text-danger">กรุณาบันทึกรายละเอียดการปลูกพืชไร่ชนิดสำคัญ</label></div>
                          <div className="mt-3" style={{ display: showWarningA11Blank}}><label className="text-danger">กรุณาระบุ เนื้อที่พืชไร่ A11 หรือเนื้อที่ทุ่งหญ้าเลี้ยงสัตว์ A14 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
                          <div className="mt-3" style={{ display: showWarningA11}}><label className="text-danger">ผลรวมของ (G05/G04) ของพืชแต่ละชนิดรวมกัน ต้อง น้อยกว่าหรือเท่ากับ A11 หรือ ถ้าไม่ใช่ให้ตรวจว่า ต้องน้อยกว่าหรือเท่ากับ A07 </label></div>
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
          <Modal.Title className="mb-2 ">{titleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>
              <label style={{ fontWeight: "bold", fontSize:"1.5rem" }} >
                G02 {inputG02}
              </label>
              <br />
            </Col>
            <Col md={12}>

              <Row>
                <Col md={6} className="mt-3">
                  <label> G03 รหัส</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={inputG03}
                  />
                </Col>
                <Col md={6} className="mt-3">
                  <label> G04 จำนวนครั้งที่ปลูก</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x`}
                      /* className={`form-control form-control-mini-x  ${
                        Number(inputG04) >= 1 &&
                        Number(inputG04) <= 9
                          ? ""
                          : "is-invalid"
                      }`} */
                      min={1}
                      max={9}
                      onChange={G04OnChange}
                      value={inputG04}
                    />
                    <span className="input-group-text">
                      ครั้ง
                    </span>
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ 1 ถึง 9
                    </div>
                  </div>
                  <div className="mt-3" style={{ display: showWarningG04 }}><label className="text-danger">กรุณาระบุ G04 (1 ถึง 9) </label></div>
                </Col>

              </Row>

              <Row>
                <Col md={6} className="mt-3">
                  <label> G05 เนื้อที่เพาะปลูก (นับรวมทุกครั้งที่ปลูก)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputG05A) >= 0 &&
                        Number(inputG05A) <= 99999 && Number.isInteger(Number(inputG05A))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99999}
                      onChange={G05AOnChange}
                      value={inputG05A}
                    />
                    <span className="input-group-text">
                      ไร่
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputG05B) >= 0 &&
                        Number(inputG05B) <= 3 && Number.isInteger(Number(inputG05B))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={3}
                      onChange={G05BOnChange}
                      value={inputG05B}
                    />
                    <span className="input-group-text">
                      งาน
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputG05C) >= 0 &&
                        Number(inputG05C) <= 99 && Number.isInteger(Number(inputG05C))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99}
                      onChange={G05COnChange}
                      value={inputG05C}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>
                    
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                  <div className="mt-3" style={{ display: showWarningG05 }}><label className="text-danger">กรุณาระบุ G05 </label></div>
                </Col>
                
              </Row>

              <Row>
                <Col md={6} className="mt-3">
                  <label> G06 เนื้อที่เก็บเกี่ยว (นับรวมทุกครั้งที่เก็บเกี่ยว)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputG06A) >= 0 &&
                        Number(inputG06A) <= 99999 && Number.isInteger(Number(inputG06A))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99999}
                      onChange={G06AOnChange}
                      value={inputG06A}
                    />
                    <span className="input-group-text">
                      ไร่
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputG06B) >= 0 &&
                        Number(inputG06B) <= 3 && Number.isInteger(Number(inputG06B))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={3}
                      onChange={G06BOnChange}
                      value={inputG06B}
                    />
                    <span className="input-group-text">
                      งาน
                    </span>

                    <input
                      type="number"                      
                      className={`form-control form-control-mini-x  ${
                        Number(inputG06C) >= 0 &&
                        Number(inputG06C) <= 99 && Number.isInteger(Number(inputG06C))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99}
                      onChange={G06COnChange}
                      value={inputG06C}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>
                    
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                  <div className="mt-3" style={{ display: showWarningG06 }}><label className="text-danger">G06 ต้องไม่เท่ากับค่าว่าง  </label></div>
                  <div className="mt-3" style={{ display: showWarningG05_06 }}><label className="text-danger">G05 ต้องมีค่ามากกว่าหรือเท่ากับ G06 </label></div>
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
