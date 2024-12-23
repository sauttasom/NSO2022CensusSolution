import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _G01, _H01, _I01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC10Model } from "../model/REC10Model";
import { REC10Info } from "../model/REC10Info";
import { LandCalculator } from "../service/LandCalculator";
import { REC01Info } from "../model/REC01Info";
import { REC02Info } from "../model/REC02Info";
import { REC09Model } from "../model/REC09Model";
import { REC11Model } from "../model/REC11Model";
import { REC09Info } from "../model/REC09Info";
import { REC11Info } from "../model/REC11Info";

export default function EHerb() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputI01, setInputI01] = useState("");

  //state : input for modal
  const [inputI02, setInputI02] = useState("");
  const [inputI03, setInputI03] = useState("");
  const [inputI04, setInputI04] = useState("");
  const [inputI05, setInputI05] = useState("");
  const [inputI05A, setInputI05A] = useState("");
  const [inputI05B, setInputI05B] = useState("");
  const [inputI05C, setInputI05C] = useState("");
  const [inputI06, setInputI06] = useState("");
  const [inputI06A, setInputI06A] = useState("");
  const [inputI06B, setInputI06B] = useState("");
  const [inputI06C, setInputI06C] = useState("");

  const [rec01list, setRec01list] = useState<REC01Info[]>([]);

  //state rec01
  const [valueA12, setValueA12] = useState<string>("");
  const [valueA07, setValueA07] = useState<string>("");

  //state rec11
  const [plantList_rec11, SetPlantList_rec11] = useState<REC11Model[]>([]);

  //state rec09
  const [plantList_rec09, SetPlantList_rec09] = useState<REC09Model[]>([]);

  //เก็บข้อมูลเป็นรายการ ที่แปลงมาจาก REC10
  const [plantList, SetPlantList] = useState<REC10Model[]>([]);

  const { handleSubmit } = useForm();

  useEffect(() => {
    console.log("load page EHerb");
    
    setInputI01("1")
    getREC10()

    getREC01()
    getREC09()
    getREC11()

  }, [page === 11]);

  async function getREC10() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC10/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                let pl: REC10Model[] = []
                let rec10: REC10Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                if (rec10.I03_01 != "") { pl.push({ I02: rec10.I02_01, I03: rec10.I03_01, I04: rec10.I04_01, I05: rec10.I05_01, I05A: rec10.I05A_01, I05B: rec10.I05B_01, I05C: rec10.I05C_01, I06: rec10.I06_01, I06A: rec10.I06A_01, I06B: rec10.I06B_01, I06C: rec10.I06C_01 }) }
                if (rec10.I03_02 != "") { pl.push({ I02: rec10.I02_02, I03: rec10.I03_02, I04: rec10.I04_02, I05: rec10.I05_02, I05A: rec10.I05A_02, I05B: rec10.I05B_02, I05C: rec10.I05C_02, I06: rec10.I06_02, I06A: rec10.I06A_02, I06B: rec10.I06B_02, I06C: rec10.I06C_02 }) }
                if (rec10.I03_03 != "") { pl.push({ I02: rec10.I02_03, I03: rec10.I03_03, I04: rec10.I04_03, I05: rec10.I05_03, I05A: rec10.I05A_03, I05B: rec10.I05B_03, I05C: rec10.I05C_03, I06: rec10.I06_03, I06A: rec10.I06A_03, I06B: rec10.I06B_03, I06C: rec10.I06C_03 }) }
                if (rec10.I03_04 != "") { pl.push({ I02: rec10.I02_04, I03: rec10.I03_04, I04: rec10.I04_04, I05: rec10.I05_04, I05A: rec10.I05A_04, I05B: rec10.I05B_04, I05C: rec10.I05C_04, I06: rec10.I06_04, I06A: rec10.I06A_04, I06B: rec10.I06B_04, I06C: rec10.I06C_04 }) }
                if (rec10.I03_05 != "") { pl.push({ I02: rec10.I02_05, I03: rec10.I03_05, I04: rec10.I04_05, I05: rec10.I05_05, I05A: rec10.I05A_05, I05B: rec10.I05B_05, I05C: rec10.I05C_05, I06: rec10.I06_05, I06A: rec10.I06A_05, I06B: rec10.I06B_05, I06C: rec10.I06C_05 }) }

                //console.log(pl);

                SetPlantList(pl)

              }

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC10): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC010): ", err);
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
                //เนื้อที่ปลูกพืชผัก สมุนไพร และไม้ดอกไม้ประดับ
                setValueA12(rec01?.A12!)
                setValueA07(rec01?.A07!)

              }                            

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List on EHerb): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC01List on EHerb): ", err);
      }
    }
  }

  async function getREC09() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC09/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                let pl: REC09Model[] = []
                let rec09: REC09Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                if (rec09.H03_01 != "") { pl.push({ H02: rec09.H02_01, H03: rec09.H03_01, H04: rec09.H04_01, H05: rec09.H05_01, H05A: rec09.H05A_01, H05B: rec09.H05B_01, H05C: rec09.H05C_01, H06: rec09.H06_01, H06A: rec09.H06A_01, H06B: rec09.H06B_01, H06C: rec09.H06C_01 }) }
                if (rec09.H03_02 != "") { pl.push({ H02: rec09.H02_02, H03: rec09.H03_02, H04: rec09.H04_02, H05: rec09.H05_02, H05A: rec09.H05A_02, H05B: rec09.H05B_02, H05C: rec09.H05C_02, H06: rec09.H06_02, H06A: rec09.H06A_02, H06B: rec09.H06B_02, H06C: rec09.H06C_02 }) }
                if (rec09.H03_03 != "") { pl.push({ H02: rec09.H02_03, H03: rec09.H03_03, H04: rec09.H04_03, H05: rec09.H05_03, H05A: rec09.H05A_03, H05B: rec09.H05B_03, H05C: rec09.H05C_03, H06: rec09.H06_03, H06A: rec09.H06A_03, H06B: rec09.H06B_03, H06C: rec09.H06C_03 }) }
                if (rec09.H03_04 != "") { pl.push({ H02: rec09.H02_04, H03: rec09.H03_04, H04: rec09.H04_04, H05: rec09.H05_04, H05A: rec09.H05A_04, H05B: rec09.H05B_04, H05C: rec09.H05C_04, H06: rec09.H06_04, H06A: rec09.H06A_04, H06B: rec09.H06B_04, H06C: rec09.H06C_04 }) }
                if (rec09.H03_05 != "") { pl.push({ H02: rec09.H02_05, H03: rec09.H03_05, H04: rec09.H04_05, H05: rec09.H05_05, H05A: rec09.H05A_05, H05B: rec09.H05B_05, H05C: rec09.H05C_05, H06: rec09.H06_05, H06A: rec09.H06A_05, H06B: rec09.H06B_05, H06C: rec09.H06C_05 }) }
                if (rec09.H03_06 != "") { pl.push({ H02: rec09.H02_06, H03: rec09.H03_06, H04: rec09.H04_06, H05: rec09.H05_06, H05A: rec09.H05A_06, H05B: rec09.H05B_06, H05C: rec09.H05C_06, H06: rec09.H06_06, H06A: rec09.H06A_06, H06B: rec09.H06B_06, H06C: rec09.H06C_06 }) }
                if (rec09.H03_07 != "") { pl.push({ H02: rec09.H02_07, H03: rec09.H03_07, H04: rec09.H04_07, H05: rec09.H05_07, H05A: rec09.H05A_07, H05B: rec09.H05B_07, H05C: rec09.H05C_07, H06: rec09.H06_07, H06A: rec09.H06A_07, H06B: rec09.H06B_07, H06C: rec09.H06C_07 }) }
                if (rec09.H03_08 != "") { pl.push({ H02: rec09.H02_08, H03: rec09.H03_08, H04: rec09.H04_08, H05: rec09.H05_08, H05A: rec09.H05A_08, H05B: rec09.H05B_08, H05C: rec09.H05C_08, H06: rec09.H06_08, H06A: rec09.H06A_08, H06B: rec09.H06B_08, H06C: rec09.H06C_08 }) }
                if (rec09.H03_09 != "") { pl.push({ H02: rec09.H02_09, H03: rec09.H03_09, H04: rec09.H04_09, H05: rec09.H05_09, H05A: rec09.H05A_09, H05B: rec09.H05B_09, H05C: rec09.H05C_09, H06: rec09.H06_09, H06A: rec09.H06A_09, H06B: rec09.H06B_09, H06C: rec09.H06C_09 }) }
                if (rec09.H03_10 != "") { pl.push({ H02: rec09.H02_10, H03: rec09.H03_10, H04: rec09.H04_10, H05: rec09.H05_10, H05A: rec09.H05A_10, H05B: rec09.H05B_10, H05C: rec09.H05C_10, H06: rec09.H06_10, H06A: rec09.H06A_10, H06B: rec09.H06B_10, H06C: rec09.H06C_10 }) }
                if (rec09.H03_11 != "") { pl.push({ H02: rec09.H02_11, H03: rec09.H03_11, H04: rec09.H04_11, H05: rec09.H05_11, H05A: rec09.H05A_11, H05B: rec09.H05B_11, H05C: rec09.H05C_11, H06: rec09.H06_11, H06A: rec09.H06A_11, H06B: rec09.H06B_11, H06C: rec09.H06C_11 }) }

                //console.log(pl);

                SetPlantList_rec09(pl)

              }

              

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC09): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC09): ", err);
      }
    }
  }

  async function getREC11() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC11/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                let pl: REC11Model[] = []
                let rec11: REC11Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                if (rec11.J03_01 != "") { pl.push({ J02: rec11.J02_01, J03: rec11.J03_01, J04: rec11.J04_01, J05: rec11.J05_01, J05A: rec11.J05A_01, J05B: rec11.J05B_01, J05C: rec11.J05C_01, J06: rec11.J06_01, J06A: rec11.J06A_01, J06B: rec11.J06B_01, J06C: rec11.J06C_01 }) }
                if (rec11.J03_02 != "") { pl.push({ J02: rec11.J02_02, J03: rec11.J03_02, J04: rec11.J04_02, J05: rec11.J05_02, J05A: rec11.J05A_02, J05B: rec11.J05B_02, J05C: rec11.J05C_02, J06: rec11.J06_02, J06A: rec11.J06A_02, J06B: rec11.J06B_02, J06C: rec11.J06C_02 }) }
                if (rec11.J03_03 != "") { pl.push({ J02: rec11.J02_03, J03: rec11.J03_03, J04: rec11.J04_03, J05: rec11.J05_03, J05A: rec11.J05A_03, J05B: rec11.J05B_03, J05C: rec11.J05C_03, J06: rec11.J06_03, J06A: rec11.J06A_03, J06B: rec11.J06B_03, J06C: rec11.J06C_03 }) }
                if (rec11.J03_04 != "") { pl.push({ J02: rec11.J02_04, J03: rec11.J03_04, J04: rec11.J04_04, J05: rec11.J05_04, J05A: rec11.J05A_04, J05B: rec11.J05B_04, J05C: rec11.J05C_04, J06: rec11.J06_04, J06A: rec11.J06A_04, J06B: rec11.J06B_04, J06C: rec11.J06C_04 }) }
                if (rec11.J03_05 != "") { pl.push({ J02: rec11.J02_05, J03: rec11.J03_05, J04: rec11.J04_05, J05: rec11.J05_05, J05A: rec11.J05A_05, J05B: rec11.J05B_05, J05C: rec11.J05C_05, J06: rec11.J06_05, J06A: rec11.J06A_05, J06B: rec11.J06B_05, J06C: rec11.J06C_05 }) }

                //console.log(pl);

                SetPlantList_rec11(pl)

              }

              
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC11): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC011): ", err);
      }
    }
  }



   //action : input for modal
   const I02OnChange = (event: any) => {
    setInputI02(event.currentTarget.value)
  }

  const I03OnChange = (event: any) => {
    setInputI03(event.currentTarget.value)
  }

  const I04OnChange = (event: any) => {
    setInputI04(event.currentTarget.value)
  }

  const I05OnChange = (event: any) => {
    setInputI05(event.currentTarget.value)
  }

  const I05AOnChange = (event: any) => {
    setInputI05A(event.currentTarget.value)
  }

  const I05BOnChange = (event: any) => {
    setInputI05B(event.currentTarget.value)
  }

  const I05COnChange = (event: any) => {
    setInputI05C(event.currentTarget.value)
  }

  const I06OnChange = (event: any) => {
    setInputI06(event.currentTarget.value)
  }

  const I06AOnChange = (event: any) => {
    setInputI06A(event.currentTarget.value)
  }

  const I06BOnChange = (event: any) => {
    setInputI06B(event.currentTarget.value)
  }

  const I06COnChange = (event: any) => {
    setInputI06C(event.currentTarget.value)
  }


  //state warning
  const [showWarningI04, setShowWarningI04] = useState<string>("none"); // ปิด
  const [showWarningI05, setShowWarningI05] = useState<string>("none"); // ปิด
  const [showWarningI06, setShowWarningI06] = useState<string>("none"); // ปิด
  const [showWarningI05_06, setShowWarningI05_06] = useState<string>("none"); // ปิด

  //บันทึกรายละเอียดของพืช จาก modal
  async function SavePlant() {

    //consistency check
    let isvalid = true;

    if(Number(inputI04) >= 1 && Number(inputI04) <= 9 && Number.isInteger(Number(inputI04)) ){     
      setShowWarningI04("none")
    }
    else{
      isvalid = false
      setShowWarningI04("")
    }

    //I05
    if(Number(inputI05A) > 0 || Number(inputI05B) > 0 || Number(inputI05C) > 0){     
      setShowWarningI05("none")
    }
    else{
      isvalid = false
      setShowWarningI05("")
    }

    if(Number(inputI05A) >= 0 && Number(inputI05A) <= 99999 ){
      //
    }
    else{
      isvalid = false
    }

    if(Number(inputI05B) >= 0 && Number(inputI05B) <= 3 ){
      //
    }
    else{
      isvalid = false
    }

    if(Number(inputI05C) >= 0 && Number(inputI05C) <= 99 ){
      //
    }
    else{
      isvalid = false
    }


    //I06
    /* if(inputI06A !== "" && inputI06B !== "" && inputI06C !== ""){     
      setShowWarningI06("none")
    }
    else{
      isvalid = false
      setShowWarningI06("")
    } */

    if(Number(inputI06A) >= 0 && Number(inputI06A) <= 99999 ){
      //
    }
    else{
      isvalid = false
    }

    if(Number(inputI06B) >= 0 && Number(inputI06B) <= 3 ){
      //
    }
    else{
      isvalid = false
    }

    if(Number(inputI06C) >= 0 && Number(inputI06C) <= 99 ){
      //
    }
    else{
      isvalid = false
    }

    //check ตัวเลข ไร่ งาน ตารางวา ต้องเป็น integer
    if (Number.isInteger(Number(inputI05A)) && Number.isInteger(Number(inputI05B)) && Number.isInteger(Number(inputI05C))) {
      //
    } else {
      isvalid = false;
    }

    if (Number.isInteger(Number(inputI06A)) && Number.isInteger(Number(inputI06B)) && Number.isInteger(Number(inputI06C))) {
      //
    } else {
      isvalid = false;
    }


    let SUM_I05 : number = LandCalculator.CalculateSummary(Number(inputI05A),Number(inputI05B),Number(inputI05C))
    let SUM_I06 : number = LandCalculator.CalculateSummary(Number(inputI06A),Number(inputI06B),Number(inputI06C))
    if(SUM_I05 >= SUM_I06){
      setShowWarningI05_06("none")
    }else{
      isvalid = false
      setShowWarningI05_06("")
    }



    //ผ่านการ consistency check
    if (isvalid) {
      //บันทึกลง state : plantList
      const plantList_updated = plantList.map((obj) => {
        if (obj.I03 === inputI03) {
          return {
            ...obj,
            I04: inputI04,
            I05: inputI05,
            I05A: inputI05A,
            I05B: inputI05B,
            I05C: inputI05C,
            I06: inputI06,
            I06A: inputI06A,
            I06B: inputI06B,
            I06C: inputI06C
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
  const [titleModal, setTitleModal] = useState("สมุนไพร");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModalItem = (I03:string) => {
    //ค้นหาใน รายการ
    const item : REC10Model | undefined = plantList.find(element => element.I03 === I03)
    //console.log(item);
        
    //set value to state of modal
    setInputI02(item?.I02!)
    setInputI03(item?.I03!)
    setInputI04(item?.I04!)
    setInputI05(item?.I05!)
    setInputI05A(item?.I05A! === "" ? "" : parseInt(item?.I05A!).toString())
    setInputI05B(item?.I05B! === "" ? "" : parseInt(item?.I05B!).toString())
    setInputI05C(item?.I05C! === "" ? "" : parseInt(item?.I05C!).toString())
    setInputI06(item?.I06!)
    setInputI06A(item?.I06A! === "" ? "" : parseInt(item?.I06A!).toString())
    setInputI06B(item?.I06B! === "" ? "" : parseInt(item?.I06B!).toString())
    setInputI06C(item?.I06C! === "" ? "" : parseInt(item?.I06C!).toString())

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
  const [showWarningI01, setShowWarningI01] = useState<string>("none"); // ปิด
  const [showWarningA12Blank, setShowWarningA12Blank] = useState<string>("none"); // ปิด
  const [showWarningA12, setShowWarningA12] = useState<string>("none"); // ปิด
  const [showWarningA07, setShowWarningA07] = useState<string>("none"); // ปิด
  const [showWarningA12_H_I_J, setShowWarningA12_H_I_J] = useState<string>("none"); // ปิด

  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 3.8 สมุนไพร
  const SaveOnClick = async () => {

    let SUM_DIV_I05_I04 : number = 0;

    //คำนวณผลรวมของ i05, i06 เป็นทศนิยม xxxxx.xxxx ที่อยู่ใน state : plantList
    const plantList_updated = plantList.map((obj) => {
      const _I05= LandCalculator.CalculateSummary(Number(obj.I05A),Number(obj.I05B),Number(obj.I05C)).toFixed(4).toString().padStart(10,'0')
      const _I06= LandCalculator.CalculateSummary(Number(obj.I06A),Number(obj.I06B),Number(obj.I06C)).toFixed(4).toString().padStart(10,'0')

      const I05_item = LandCalculator.CalculateSummary(Number(obj.I05A),Number(obj.I05B),Number(obj.I05C))
      SUM_DIV_I05_I04 += Number(obj.I04) !== 0 ? I05_item / Number(obj.I04) : 0

      return {
        ...obj,
        I05: _I05,
        I06: _I06
      };
    });

    let rec10 : REC10Info = ({
      AH_CODE: enumeratesk2?.AH_CODE!,
      I01: inputI01,
      I02_01: "",
      I03_01: "",
      I04_01: "",
      I05_01: "",
      I05A_01: "",
      I05B_01: "",
      I05C_01: "",
      I06_01: "",
      I06A_01: "",
      I06B_01: "",
      I06C_01: "",
      I02_02: "",
      I03_02: "",
      I04_02: "",
      I05_02: "",
      I05A_02: "",
      I05B_02: "",
      I05C_02: "",
      I06_02: "",
      I06A_02: "",
      I06B_02: "",
      I06C_02: "",
      I02_03: "",
      I03_03: "",
      I04_03: "",
      I05_03: "",
      I05A_03: "",
      I05B_03: "",
      I05C_03: "",
      I06_03: "",
      I06A_03: "",
      I06B_03: "",
      I06C_03: "",
      I02_04: "",
      I03_04: "",
      I04_04: "",
      I05_04: "",
      I05A_04: "",
      I05B_04: "",
      I05C_04: "",
      I06_04: "",
      I06A_04: "",
      I06B_04: "",
      I06C_04: "",
      I02_05: "",
      I03_05: "",
      I04_05: "",
      I05_05: "",
      I05A_05: "",
      I05B_05: "",
      I05C_05: "",
      I06_05: "",
      I06A_05: "",
      I06B_05: "",
      I06C_05: ""  
    })

    //set ตามโครงสร้าง REC10Info
    plantList_updated.forEach(function (item) {

      //กระชาย
      if(item.I03 === "31245"){
        rec10.I02_01 = item.I02;
        rec10.I03_01 = item.I03;
        rec10.I04_01 = item.I04;
        rec10.I05_01 = item.I05;
        rec10.I05A_01 = item.I05A !== "" ? item.I05A.padStart(5, '0') : "" ;
        rec10.I05B_01 = item.I05B !== "" ? item.I05B.padStart(1, '0') : "" ;
        rec10.I05C_01 = item.I05C !== "" ? item.I05C.padStart(2, '0') : "" ;
        rec10.I06_01 = item.I06;
        rec10.I06A_01 = item.I06A !== "" ? item.I06A.padStart(5, '0') : "" ;
        rec10.I06B_01 = item.I06B !== "" ? item.I06B.padStart(1, '0') : "" ;
        rec10.I06C_01 = item.I06C !== "" ? item.I06C.padStart(2, '0') : "" ;
      }

      //กะเพรา
      if(item.I03 === "31247"){
        rec10.I02_02 = item.I02;
        rec10.I03_02 = item.I03;
        rec10.I04_02 = item.I04;
        rec10.I05_02 = item.I05;
        rec10.I05A_02 = item.I05A !== "" ? item.I05A.padStart(5, '0') : "" ;
        rec10.I05B_02 = item.I05B !== "" ? item.I05B.padStart(1, '0') : "" ;
        rec10.I05C_02 = item.I05C !== "" ? item.I05C.padStart(2, '0') : "" ;
        rec10.I06_02 = item.I06;
        rec10.I06A_02 = item.I06A !== "" ? item.I06A.padStart(5, '0') : "" ;
        rec10.I06B_02 = item.I06B !== "" ? item.I06B.padStart(1, '0') : "" ;
        rec10.I06C_02 = item.I06C !== "" ? item.I06C.padStart(2, '0') : "" ;
      }

      //พริกไทย
      if(item.I03 === "31267"){
        rec10.I02_03 = item.I02;
        rec10.I03_03 = item.I03;
        rec10.I04_03 = item.I04;
        rec10.I05_03 = item.I05;
        rec10.I05A_03 = item.I05A !== "" ? item.I05A.padStart(5, '0') : "" ;
        rec10.I05B_03 = item.I05B !== "" ? item.I05B.padStart(1, '0') : "" ;
        rec10.I05C_03 = item.I05C !== "" ? item.I05C.padStart(2, '0') : "" ;
        rec10.I06_03 = item.I06;
        rec10.I06A_03 = item.I06A !== "" ? item.I06A.padStart(5, '0') : "" ;
        rec10.I06B_03 = item.I06B !== "" ? item.I06B.padStart(1, '0') : "" ;
        rec10.I06C_03 = item.I06C !== "" ? item.I06C.padStart(2, '0') : "" ;
      }

      //แมงลัก
      if(item.I03 === "31280"){
        rec10.I02_04 = item.I02;
        rec10.I03_04 = item.I03;
        rec10.I04_04 = item.I04;
        rec10.I05_04 = item.I05;
        rec10.I05A_04 = item.I05A !== "" ? item.I05A.padStart(5, '0') : "" ;
        rec10.I05B_04 = item.I05B !== "" ? item.I05B.padStart(1, '0') : "" ;
        rec10.I05C_04 = item.I05C !== "" ? item.I05C.padStart(2, '0') : "" ;
        rec10.I06_04 = item.I06;
        rec10.I06A_04 = item.I06A !== "" ? item.I06A.padStart(5, '0') : "" ;
        rec10.I06B_04 = item.I06B !== "" ? item.I06B.padStart(1, '0') : "" ;
        rec10.I06C_04 = item.I06C !== "" ? item.I06C.padStart(2, '0') : "" ;
      }

      //สะระแหน่
      if(item.I03 === "31289"){
        rec10.I02_05 = item.I02;
        rec10.I03_05 = item.I03;
        rec10.I04_05 = item.I04;
        rec10.I05_05 = item.I05;
        rec10.I05A_05 = item.I05A !== "" ? item.I05A.padStart(5, '0') : "" ;
        rec10.I05B_05 = item.I05B !== "" ? item.I05B.padStart(1, '0') : "" ;
        rec10.I05C_05 = item.I05C !== "" ? item.I05C.padStart(2, '0') : "" ;
        rec10.I06_05 = item.I06;
        rec10.I06A_05 = item.I06A !== "" ? item.I06A.padStart(5, '0') : "" ;
        rec10.I06B_05 = item.I06B !== "" ? item.I06B.padStart(1, '0') : "" ;
        rec10.I06C_05 = item.I06C !== "" ? item.I06C.padStart(2, '0') : "" ;
      }


    });
    
    const body = rec10
    //console.log(body);

    //consistency check
    let isvalid = true;


    //ทุกสมุนไพรต้องมีการระบุข้อมูลทุกตัว
    let implist: REC10Model[] = plantList_updated.filter((p) => {
      return (
        Number(p.I04) > 0
      );
    })
    if(plantList_updated.length !== implist.length){
      setShowWarningI01("")
      isvalid = false
    }
    else{
      setShowWarningI01("none")
    }

    //A12 ≠ blank
    /* if(Number(valueA12) > 0 ){
      setShowWarningA12Blank("none")
    }
    else{      
      setShowWarningA12Blank("")
      isvalid = false
    } */

    //ผลรวมของ (I05_01/I04_01) ของพืชสมุนไพรแต่ละชนิด ต้อง ≤ A12
    //ผลรวมของ (I05_01/I04_01) ของพืชสมุนไพรแต่ละชนิด ต้อง ≤ A07 ***ปรับตามไฟล์ Consistency Check  สก.2 V5 edit050466.pdf
    if (SUM_DIV_I05_I04 <= Number(valueA07)) {
      //setShowWarningA12("none") 
      setShowWarningA07("none") 
    }
    else {
      //setShowWarningA12("")
      setShowWarningA07("")
      isvalid = false     
    }

    //ผลรวมของ (H05_01/H04_01) ของพืชผักแต่ละชนิด รวมกับ ผลรวมของ (I05_01/I04_01) ของพืชสมุนไพรแต่ละชนิด รวมกับ (J05_01/J04_01) ของพืชไม้ดอก ไม้ประดับแต่ละชนิดต้อง ≤ A12

    //คำนวณผลรวมของ h05, h06 เป็นทศนิยม xxxxx.xxxx ที่อยู่ใน state : plantList_rec09
    let SUM_DIV_H05_H04 : number = 0;
    const plantList_updated_rec09 = plantList_rec09.map((obj) => {
      const _H05= LandCalculator.CalculateSummary(Number(obj.H05A),Number(obj.H05B),Number(obj.H05C)).toFixed(4).toString().padStart(10,'0')
      const _H06= LandCalculator.CalculateSummary(Number(obj.H06A),Number(obj.H06B),Number(obj.H06C)).toFixed(4).toString().padStart(10,'0')

      const H05_item = LandCalculator.CalculateSummary(Number(obj.H05A),Number(obj.H05B),Number(obj.H05C))
      SUM_DIV_H05_H04 += Number(obj.H04) !== 0 ? H05_item / Number(obj.H04) : 0

      return {
        ...obj,
        H05: _H05,
        H06: _H06
      };
    });

    

    //คำนวณผลรวมของ j05, j06 เป็นทศนิยม xxxxx.xxxx ที่อยู่ใน state : plantList_rec11
    let SUM_DIV_J05_J04 : number = 0;
    const plantList_updated_rec11 = plantList_rec11.map((obj) => {
      const _J05= LandCalculator.CalculateSummary(Number(obj.J05A),Number(obj.J05B),Number(obj.J05C)).toFixed(4).toString().padStart(10,'0')
      const _J06= LandCalculator.CalculateSummary(Number(obj.J06A),Number(obj.J06B),Number(obj.J06C)).toFixed(4).toString().padStart(10,'0')

      const J05_item = LandCalculator.CalculateSummary(Number(obj.J05A),Number(obj.J05B),Number(obj.J05C))
      SUM_DIV_J05_J04 += Number(obj.J04) !== 0 ? J05_item / Number(obj.J04) : 0

      return {
        ...obj,
        J05: _J05,
        J06: _J06
      };
    });


    /* if ( (SUM_DIV_J05_J04 + SUM_DIV_I05_I04 + SUM_DIV_H05_H04) <= Number(valueA12)) {
      setShowWarningA12_H_I_J("none") 
    }
    else {
      setShowWarningA12_H_I_J("")
      isvalid = false     
    } */


    //-------------------------------------------------------------------------------------------------------------------------------------------------------

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

          //url updateREC10
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC10";
          }

          //api updateREC10
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


          // หลังจาก updateREC10 แล้ว  
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
              .catch((err) => { console.log("AXIOS ERROR (getREC01List in EHerb): ", err); });


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
                  let floweringplantlist: PlantList[] = pl.filter((p) => {
                    return (
                      p.T01 === "40328" ||
                      p.T01 === "40342" ||
                      p.T01 === "40344" ||
                      p.T01 === "40355" ||
                      p.T01 === "41389"
                    );
                  })

                  if (floweringplantlist.length > 0) {
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
        console.error("SaveOnClick ERROR (ตอนที่ 3.8 สมุนไพร): ", error);
      }

    }
    else {
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

              if(vegetablelist.length > 0){
                setPage(10) //ไปตอนที่ 3.7 พืชผัก
              }
              else if(farmplantlist.length > 0){
                setPage(9) //ไปตอนที่ 3.6 พืชไร่
              }
              else if(forestlist.length > 0){
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
        console.error("OnClickBack ERROR (ตอนที่ 3.8 สมุนไพร): ", error);
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
            .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in EHerb): ", err); });


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
                let floweringplantlist: PlantList[] = pl.filter((p) => {
                  return (
                    p.T01 === "40328" ||
                    p.T01 === "40342" ||
                    p.T01 === "40344" ||
                    p.T01 === "40355" ||
                    p.T01 === "41389"
                  );
                })

                if (floweringplantlist.length > 0) {
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
      console.error("NextOnClick ERROR (ตอนที่ 3.8 สมุนไพร): ", error);
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
                        ตอนที่ 3.8 สมุนไพร
                      </h5>
                    </Col>

                    <Col md={8} className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl51010"
                        aria-expanded="false"
                        aria-controls="collapseControl51010"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl51010">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการปลูกสมุนไพร ชนิดสำคัญหรือไม่ (ระบบกำหนดให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>I01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_I01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_I01"
                                  type="radio"
                                  value={option.value}
                                  id={`rd_I01${index}`}
                                  checked={option.value === inputI01}
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_I01${index}`}
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
                                2. ให้สอบถามและบันทึกข้อมูลการปลูกสมุนไพรชนิดสำคัญ
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
                                    <a onClick={() => OpenModalItem(item.I03)} >
                                      <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                        <div className={`card-body ${(Number(item.I04) > 0  )?"box-list-success":"box-list-warning"} `}>
                                          <Row>
                                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                                              <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(Number(item.I04) > 0  ) && (<i className='bx bxs-check-square fs-4'></i>) } {index + 1}. {item.I02} ({item.I03}) </p>

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
                          <div className="mt-3" style={{ display: showWarningI01 }}><label className="text-danger">กรุณาบันทึกรายละเอียดการปลูกสมุนไพรชนิดสำคัญ</label></div>
                          <div className="mt-3" style={{ display: showWarningA12Blank}}><label className="text-danger">กรุณาระบุ เนื้อที่พืชผัก สมุนไพร และไม้ดอกไม้ประดับ A12 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
                          <div className="mt-3" style={{ display: showWarningA12}}><label className="text-danger">ผลรวมของ (I05/I04) ของพืชสมุนไพรแต่ละชนิด ต้อง น้อยกว่าหรือเท่ากับ A12  </label></div>
                          <div className="mt-3" style={{ display: showWarningA07}}><label className="text-danger">ผลรวมของ (I05/I04) ของพืชสมุนไพรแต่ละชนิด ต้อง น้อยกว่าหรือเท่ากับ A07  </label></div>
                          <div className="mt-3" style={{ display: showWarningA12_H_I_J}}><label className="text-danger">ผลรวมของ (H05/H04) ของพืชผักแต่ละชนิด รวมกับ ผลรวมของ (I05/I04) ของพืชสมุนไพรแต่ละชนิด รวมกับ (J05/J04) ของพืชไม้ดอก ไม้ประดับแต่ละชนิด ต้อง น้อยกว่าหรือเท่ากับ A12  </label></div>
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
                I02 {inputI02}
              </label>
              <br />
            </Col>
            <Col md={12}>

              <Row>
                <Col md={4} className="mt-3">
                  <label> I03 รหัส</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={inputI03}
                  />
                </Col>
                <Col md={4} className="mt-3">
                  <label> I04 จำนวนครั้งที่ปลูก</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x `}
                      /* className={`form-control form-control-mini-x  ${
                        Number(inputI04) >= 1 &&
                        Number(inputI04) <= 9
                          ? ""
                          : "is-invalid"
                      }`} */
                      min={1}
                      max={9}
                      onChange={I04OnChange}
                      value={inputI04}
                    />
                    <span className="input-group-text">
                      ครั้ง
                    </span>
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ 1 ถึง 9
                    </div>
                  </div>
                  <div className="mt-3" style={{ display: showWarningI04 }}><label className="text-danger">กรุณาระบุ I04 </label></div>
                </Col>

              </Row>

              <Row>
                <Col md={4} className="mt-3">
                  <label> I05 เนื้อที่เพาะปลูก (นับรวมทุกครั้งที่ปลูก)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputI05A) >= 0 &&
                        Number(inputI05A) <= 99999 && Number.isInteger(Number(inputI05A))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99999}
                      onChange={I05AOnChange}
                      value={inputI05A}
                    />
                    <span className="input-group-text">
                      ไร่
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputI05B) >= 0 &&
                        Number(inputI05B) <= 3 && Number.isInteger(Number(inputI05B))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={3}
                      onChange={I05BOnChange}
                      value={inputI05B}
                    />
                    <span className="input-group-text">
                      งาน
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputI05C) >= 0 &&
                        Number(inputI05C) <= 99 && Number.isInteger(Number(inputI05C))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99}
                      onChange={I05COnChange}
                      value={inputI05C}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>
                    
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                  <div className="mt-3" style={{ display: showWarningI05 }}><label className="text-danger">กรุณาระบุ I05 </label></div>
                </Col>
                
              </Row>

              <Row>
                <Col md={4} className="mt-3">
                  <label> I06 เนื้อที่เก็บเกี่ยว (นับรวมทุกครั้งที่เก็บเกี่ยว)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputI06A) >= 0 &&
                        Number(inputI06A) <= 99999 && Number.isInteger(Number(inputI06A))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99999}
                      onChange={I06AOnChange}
                      value={inputI06A}
                    />
                    <span className="input-group-text">
                      ไร่
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputI06B) >= 0 &&
                        Number(inputI06B) <= 3 && Number.isInteger(Number(inputI06B))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={3}
                      onChange={I06BOnChange}
                      value={inputI06B}
                    />
                    <span className="input-group-text">
                      งาน
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputI06C) >= 0 &&
                        Number(inputI06C) <= 99 && Number.isInteger(Number(inputI06C))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99}
                      onChange={I06COnChange}
                      value={inputI06C}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>
                    
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                  <div className="mt-3" style={{ display: showWarningI06 }}><label className="text-danger">กรุณาระบุ I06 </label></div>
                  <div className="mt-3" style={{ display: showWarningI05_06 }}><label className="text-danger">I05 ต้องมีค่ามากกว่าหรือเท่ากับ I06 </label></div>
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
