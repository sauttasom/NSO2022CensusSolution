import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _G01, _H01, _I01, _J01, _K01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC13Model } from "../model/REC13Model";
import { REC13Info } from "../model/REC13Info";
import { REC01Info } from "../model/REC01Info";

export default function EAnimal2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputK01, setInputK01] = useState("");

  //state : input for modal
  const [inputK02, setInputK02] = useState("");
  const [inputK03, setInputK03] = useState("");
  const [inputK04, setInputK04] = useState("");

  //เก็บข้อมูลเป็นรายการ ที่แปลงมาจาก REC13
  const [animalList, SetAnimalList] = useState<REC13Model[]>([]);

  const { handleSubmit } = useForm();

  useEffect(() => {
    console.log("load page EAnimal2");
    
    setInputK01("1")
    getREC13()

  }, [page === 14]);

  async function getREC13() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC13/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                let pl: REC13Model[] = []
                let rec13: REC13Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                if (rec13.K03_01 != "") { pl.push({ K02: rec13.K02_01, K03: rec13.K03_01, K04: rec13.K04_01 }) }
                if (rec13.K03_02 != "") { pl.push({ K02: rec13.K02_02, K03: rec13.K03_02, K04: rec13.K04_02 }) }
                if (rec13.K03_03 != "") { pl.push({ K02: rec13.K02_03, K03: rec13.K03_03, K04: rec13.K04_03 }) }
                if (rec13.K03_04 != "") { pl.push({ K02: rec13.K02_04, K03: rec13.K03_04, K04: rec13.K04_04 }) }
                if (rec13.K03_05 != "") { pl.push({ K02: rec13.K02_05, K03: rec13.K03_05, K04: rec13.K04_05 }) }
                if (rec13.K03_06 != "") { pl.push({ K02: rec13.K02_06, K03: rec13.K03_06, K04: rec13.K04_06 }) }
                if (rec13.K03_07 != "") { pl.push({ K02: rec13.K02_07, K03: rec13.K03_07, K04: rec13.K04_07 }) }
                if (rec13.K03_08 != "") { pl.push({ K02: rec13.K02_08, K03: rec13.K03_08, K04: rec13.K04_08 }) }
                if (rec13.K03_09 != "") { pl.push({ K02: rec13.K02_09, K03: rec13.K03_09, K04: rec13.K04_09 }) }
                if (rec13.K03_10 != "") { pl.push({ K02: rec13.K02_10, K03: rec13.K03_10, K04: rec13.K04_10 }) }
                if (rec13.K03_11 != "") { pl.push({ K02: rec13.K02_11, K03: rec13.K03_11, K04: rec13.K04_11 }) }
                if (rec13.K03_12 != "") { pl.push({ K02: rec13.K02_12, K03: rec13.K03_12, K04: rec13.K04_12 }) }
                if (rec13.K03_13 != "") { pl.push({ K02: rec13.K02_13, K03: rec13.K03_13, K04: rec13.K04_13 }) }
                if (rec13.K03_14 != "") { pl.push({ K02: rec13.K02_14, K03: rec13.K03_14, K04: rec13.K04_14 }) }
                if (rec13.K03_15 != "") { pl.push({ K02: rec13.K02_15, K03: rec13.K03_15, K04: rec13.K04_15 }) }
                if (rec13.K03_16 != "") { pl.push({ K02: rec13.K02_16, K03: rec13.K03_16, K04: rec13.K04_16 }) }
                if (rec13.K03_17 != "") { pl.push({ K02: rec13.K02_17, K03: rec13.K03_17, K04: rec13.K04_17 }) }
                if (rec13.K03_18 != "") { pl.push({ K02: rec13.K02_18, K03: rec13.K03_18, K04: rec13.K04_18 }) }
                if (rec13.K03_19 != "") { pl.push({ K02: rec13.K02_19, K03: rec13.K03_19, K04: rec13.K04_19 }) }
                if (rec13.K03_20 != "") { pl.push({ K02: rec13.K02_20, K03: rec13.K03_20, K04: rec13.K04_20 }) }
                if (rec13.K03_21 != "") { pl.push({ K02: rec13.K02_21, K03: rec13.K03_21, K04: rec13.K04_21 }) }
                if (rec13.K03_22 != "") { pl.push({ K02: rec13.K02_22, K03: rec13.K03_22, K04: rec13.K04_22 }) }

                SetAnimalList(pl)

                //console.log("rec13" , rec13);
                //console.log("animal important" , pl);

              }
                  

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC13): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC013): ", err);
      }
    }
  }

   //action : input for modal
   const K02OnChange = (event: any) => {
    setInputK02(event.currentTarget.value)
  }

  const K03OnChange = (event: any) => {
    setInputK03(event.currentTarget.value)
  }

  const K04OnChange = (event: any) => {
    setInputK04(event.currentTarget.value)
  }


  //state warning
  const [showWarningK04, setShowWarningK04] = useState<string>("none"); // ปิด



  //บันทึกรายละเอียดของสัตว์ จาก modal
  async function SaveAnimal() {

    //consistency check
    let isvalid = true;

    if(inputK04 === ""){
      isvalid = false
      setShowWarningK04("")
    }
    else{
      setShowWarningK04("none")
    }

    //possible code ของแต่ละพันธุ์สัตว์
    if(inputK03 === "50010" || inputK03 === "50011" || inputK03 === "50012"){
      if (Number(inputK04) >= 1 && Number(inputK04) <= 99999 && Number.isInteger(Number(inputK04))){
        setShowWarningK04("none")
      }
      else{
        isvalid = false
        setShowWarningK04("")
      }

    }else if(inputK03 === "50015" || inputK03 === "50016" || inputK03 === "50018"){
      if (Number(inputK04) >= 1 && Number(inputK04) <= 9999999 && Number.isInteger(Number(inputK04))){
        setShowWarningK04("none")
      }
      else{
        isvalid = false
        setShowWarningK04("")
      }

    }else if(inputK03 === "50019" || inputK03 === "50020" || inputK03 === "50021"){
      if (Number(inputK04) >= 1 && Number(inputK04) <= 999999 && Number.isInteger(Number(inputK04))){
        setShowWarningK04("none")
      }
      else{
        isvalid = false
        setShowWarningK04("")
      }

    }else{
      //default สัตว์พันธุ์อื่นๆเป็น 9999
      if (Number(inputK04) >= 1 && Number(inputK04) <= 9999 && Number.isInteger(Number(inputK04))){
        setShowWarningK04("none")
      }
      else{
        isvalid = false
        setShowWarningK04("")
      }

    }

    


    //ผ่านการ consistency check
    if (isvalid) {

      //บันทึกลง state : animalList
      const animalList_updated = animalList.map((obj) => {
        if (obj.K03 === inputK03) {
          return {
            ...obj,
            K04: inputK04
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
  const [titleModal, setTitleModal] = useState("การเลี้ยงสัตว์ชนิดสำคัญ");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModalItem = (K03:string) => {
    //ค้นหาใน รายการ
    const item : REC13Model | undefined = animalList.find(element => element.K03 === K03)
    //console.log(item);
        
    //set value to state of modal
    setInputK02(item?.K02!)
    setInputK03(item?.K03!)
    setInputK04(item?.K04! === "" ? "" : parseInt(item?.K04!).toString())

    setShowWarningK04("none")

    handleShow()
  };


  //state warning
  const [showWarningK01, setShowWarningK01] = useState<string>("none"); // ปิด

  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 4.1 การเลี้ยงสัตว์ชนิดสำคัญ
  const SaveOnClick = async () => {

    let rec13 : REC13Info = ({
      AH_CODE: enumeratesk2?.AH_CODE!,
      K01: inputK01,
      K02_01: "",
      K03_01: "",
      K04_01: "",
      K02_02: "",
      K03_02: "",
      K04_02: "",
      K02_03: "",
      K03_03: "",
      K04_03: "",
      K02_04: "",
      K03_04: "",
      K04_04: "",
      K02_05: "",
      K03_05: "",
      K04_05: "",
      K02_06: "",
      K03_06: "",
      K04_06: "",
      K02_07: "",
      K03_07: "",
      K04_07: "",
      K02_08: "",
      K03_08: "",
      K04_08: "",
      K02_09: "",
      K03_09: "",
      K04_09: "",
      K02_10: "",
      K03_10: "",
      K04_10: "",
      K02_11: "",
      K03_11: "",
      K04_11: "",
      K02_12: "",
      K03_12: "",
      K04_12: "",
      K02_13: "",
      K03_13: "",
      K04_13: "",
      K02_14: "",
      K03_14: "",
      K04_14: "",
      K02_15: "",
      K03_15: "",
      K04_15: "",
      K02_16: "",
      K03_16: "",
      K04_16: "",
      K02_17: "",
      K03_17: "",
      K04_17: "",
      K02_18: "",
      K03_18: "",
      K04_18: "",
      K02_19: "",
      K03_19: "",
      K04_19: "",
      K02_20: "",
      K03_20: "",
      K04_20: "",
      K02_21: "",
      K03_21: "",
      K04_21: "",
      K02_22: "",
      K03_22: "",
      K04_22: ""
    })

    //set ตามโครงสร้าง REC13Info
    animalList.forEach(function (item) {

      //วัวเนื้อ > วัวพันธุ์และวัวลูกผสม
      if(item.K03 === "50001"){
        rec13.K02_01 = item.K02;
        rec13.K03_01 = item.K03;
        rec13.K04_01 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //วัวเนื้อ > วัวขุน (รวมวัวมัน)
      if(item.K03 === "50002"){
        rec13.K02_02 = item.K02;
        rec13.K03_02 = item.K03;
        rec13.K04_02 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //วัวเนื้อ > วัวพื้นเมือง 
      if(item.K03 === "50003"){
        rec13.K02_03 = item.K02;
        rec13.K03_03 = item.K03;
        rec13.K04_03 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //วัวนม > ตัวเมีย วัวยังไม่ให้น้ำนม 
      if(item.K03 === "50004"){
        rec13.K02_04 = item.K02;
        rec13.K03_04 = item.K03;
        rec13.K04_04 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //วัวนม > ตัวเมีย วัวรีดนมและวัวแห้งนม 
      if(item.K03 === "50005"){
        rec13.K02_05 = item.K02;
        rec13.K03_05 = item.K03;
        rec13.K04_05 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //วัวนม > ตัวเมีย วัวอายุมาก หรือพร้อมคัดทิ้ง 
      if(item.K03 === "50006"){
        rec13.K02_06 = item.K02;
        rec13.K03_06 = item.K03;
        rec13.K04_06 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //วัวนม > ตัวผู้
      if(item.K03 === "50007"){
        rec13.K02_07 = item.K02;
        rec13.K03_07 = item.K03;
        rec13.K04_07 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //ควาย 
      if(item.K03 === "50044"){
        rec13.K02_08 = item.K02;
        rec13.K03_08 = item.K03;
        rec13.K04_08 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //หมู > หมูพันธุ์ (พ่อพันธุ์สุกร แม่พันธุ์สุกร) 
      if(item.K03 === "50010"){
        rec13.K02_09 = item.K02;
        rec13.K03_09 = item.K03;
        rec13.K04_09 = item.K04 !== "" ? item.K04.padStart(5, '0') : "" ;
      }

      //หมู > หมูขุน 
      if(item.K03 === "50011"){
        rec13.K02_10 = item.K02;
        rec13.K03_10 = item.K03;
        rec13.K04_10 = item.K04 !== "" ? item.K04.padStart(5, '0') : "" ;
      }

      //หมู > หมูพื้นเมือง (หมูป่า)
      if(item.K03 === "50012"){
        rec13.K02_11 = item.K02;
        rec13.K03_11 = item.K03;
        rec13.K04_11 = item.K04 !== "" ? item.K04.padStart(5, '0') : "" ;
      }

      //แพะ
      if(item.K03 === "50013"){
        rec13.K02_12 = item.K02;
        rec13.K03_12 = item.K03;
        rec13.K04_12 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //แกะ
      if(item.K03 === "50014"){
        rec13.K02_13 = item.K02;
        rec13.K03_13 = item.K03;
        rec13.K04_13 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //ไก่ > ไก่ไข่
      if(item.K03 === "50015"){
        rec13.K02_14 = item.K02;
        rec13.K03_14 = item.K03;
        rec13.K04_14 = item.K04 !== "" ? item.K04.padStart(7, '0') : "" ;
      }
      
      //ไก่ > ไก่เนื้อ
      if(item.K03 === "50016"){
        rec13.K02_15 = item.K02;
        rec13.K03_15 = item.K03;
        rec13.K04_15 = item.K04 !== "" ? item.K04.padStart(7, '0') : "" ;
      }

      //ไก่ > ไก่พื้นเมือง 
      if(item.K03 === "50017"){
        rec13.K02_16 = item.K02;
        rec13.K03_16 = item.K03;
        rec13.K04_16 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //เป็ด > เป็ดไข่
      if(item.K03 === "50018"){
        rec13.K02_17 = item.K02;
        rec13.K03_17 = item.K03;
        rec13.K04_17 = item.K04 !== "" ? item.K04.padStart(7, '0') : "" ;
      }

      //เป็ด > เป็ดเนื้อ
      if(item.K03 === "50019"){
        rec13.K02_18 = item.K02;
        rec13.K03_18 = item.K03;
        rec13.K04_18 = item.K04 !== "" ? item.K04.padStart(6, '0') : "" ;
      }

      //เป็ด > เป็ดเทศ
      if(item.K03 === "50020"){
        rec13.K02_19 = item.K02;
        rec13.K03_19 = item.K03;
        rec13.K04_19 = item.K04 !== "" ? item.K04.padStart(6, '0') : "" ;
      }

      //ห่าน
      if(item.K03 === "50021"){
        rec13.K02_20 = item.K02;
        rec13.K03_20 = item.K03;
        rec13.K04_20 = item.K04 !== "" ? item.K04.padStart(6, '0') : "" ;
      }

      //ไหมพันธุ์พื้นเมือง (หนอนไหม)
      if(item.K03 === "50022"){
        rec13.K02_21 = item.K02;
        rec13.K03_21 = item.K03;
        rec13.K04_21 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

      //ไหมพันธุ์ลูกผสมต่างประเทศ (หนอนไหม)
      if(item.K03 === "50023"){
        rec13.K02_22 = item.K02;
        rec13.K03_22 = item.K03;
        rec13.K04_22 = item.K04 !== "" ? item.K04.padStart(4, '0') : "" ;
      }

    });
    
    const body = rec13
    //console.log(body);


    //consistency check
    let isvalid = true;


    //ทุกสัตว์ต้องมีการระบุข้อมูลทุกตัว
    let implist: REC13Model[] = animalList.filter((a) => {
      return (
        Number(a.K04) > 0
      );
    })
    if(animalList.length !== implist.length){
      setShowWarningK01("")
      isvalid = false
    }
    else{
      setShowWarningK01("none")
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

          //url updateREC13
          let url_updateREC13_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_updateREC13_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC13";
          }

          //api updateREC13
          await axios
            .post(url_updateREC13_api, JSON.stringify(body), {
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
            .catch((err) => { console.log("AXIOS ERROR (getREC01List in EAnimal2): ", err); }); 

          //เช็คจาก A02_3 , A02_4
          if(rec01list[0].A02_3 === "1"){
            setPage(15); //ไปตอนที่ 5 การเลี้ยงสัตว์น้ำ
          }
          else if(rec01list[0].A02_4 === "1"){
            setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
          }
          else{
            setPage(18); //ไปตอนที่ 7 เครื่องจักร
          }


        }

      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 4.1 การเลี้ยงสัตว์ชนิดสำคัญ): ", error);
      }
    
    }
    else{
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
          .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in EAnimal2): ", err); }); 

        //เช็คจาก A02_3 , A02_4
        if(rec01list[0].A02_3 === "1"){
          setPage(15); //ไปตอนที่ 5 การเลี้ยงสัตว์น้ำ
        }
        else if(rec01list[0].A02_4 === "1"){
          setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
        }
        else{
          setPage(18); //ไปตอนที่ 7 เครื่องจักร
        }


      }

    } catch (error) {
      console.error("NextOnClick ERROR (ตอนที่ 4.1 การเลี้ยงสัตว์ชนิดสำคัญ): ", error);
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
                        ตอนที่ 4.1 การเลี้ยงสัตว์ชนิดสำคัญ
                      </h5>
                    </Col>

                    <Col md={8} className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl5553"
                        aria-expanded="false"
                        aria-controls="collapseControl5553"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl5553">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ณ วันที่ 1 พฤษภาคม 2566 ที่ถือครองนี้มีการเลี้ยงสัตว์ ชนิดสำคัญหรือไม่ (ระบบกำหนดให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>K01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_K01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_K01"
                                  type="radio"
                                  value={option.value}
                                  id={`rd_K01${index}`}
                                  checked={option.value === inputK01}
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_K01${index}`}
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
                                2. ให้สอบถามและบันทึกรายละเอียดการเลี้ยงสัตว์ชนิดสำคัญ
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 ">
                            <Col md={12}>
                              <label >
                                (ระบบกำหนดให้ตามที่บันทึกไว้ในตอนที่ 4)
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">

                            {animalList &&
                              animalList.map((item, index) => {
                                return (
                                  <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                                    <a onClick={() => OpenModalItem(item.K03)} >
                                      <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                        <div className={`card-body ${(Number(item.K04) > 0  )?"box-list-success":"box-list-warning"} `}>
                                          <Row>
                                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                                              <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(Number(item.K04) > 0  ) && (<i className='bx bxs-check-square fs-4'></i>) } {index + 1}. {item.K02} ({item.K03}) </p>

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
                              <div className="mt-3" style={{ display: showWarningK01 }}><label className="text-danger">กรุณาบันทึกรายละเอียดการเลี้ยงสัตว์ชนิดสำคัญ</label></div>
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
          <Modal.Title className="mb-2 ">{titleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="mt-2">

            <Col md={12}>
              <label style={{ fontWeight: "bold", fontSize:"1.5rem" }} >
                K02 {inputK02}
              </label>
              <br />
            </Col>
            <Col md={12}>

              <Row>
                <Col md={4} className="mt-3">
                  <label> K03 รหัส</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={inputK03}
                  />
                </Col>
                <Col md={4} className="mt-3">
                  <label> K04 จำนวน{inputK03 === "50022" || inputK03 === "50023" ? "ผลผลิต" : "ตัว"} (ณ 1 พ.ค. 66)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        
                        inputK03 === "50010" || inputK03 === "50011" || inputK03 === "50012" ?
                          Number(inputK04) >= 1 && Number(inputK04) <= 99999 ? "" : "is-invalid"
                        :
                        
                        inputK03 === "50015" || inputK03 === "50016" || inputK03 === "50018" ?
                          Number(inputK04) >= 1 && Number(inputK04) <= 9999999 ? "" : "is-invalid"
                        :

                        inputK03 === "50019" || inputK03 === "50020" || inputK03 === "50021" ?
                          Number(inputK04) >= 1 && Number(inputK04) <= 999999 ? "" : "is-invalid"
                        :

                        Number(inputK04) >= 1 && Number(inputK04) <= 9999 ? "" : "is-invalid"

                      }`}
                      min={1}
                      max={
                        inputK03 === "50010" || inputK03 === "50011" || inputK03 === "50012" ?
                          99999
                        :

                        inputK03 === "50015" || inputK03 === "50016" || inputK03 === "50018" ?
                          9999999
                        :

                        inputK03 === "50019" || inputK03 === "50020" || inputK03 === "50021" ?
                          999999
                        :

                          9999
                      }
                      onChange={K04OnChange}
                      value={inputK04}
                    />
                    <span className="input-group-text">
                      {/* ถ้าเป็นไหม ให้ปรับหน่วยเป็น กิโลกรัม , ถ้าเป็นสัตว์อื่นๆหน่วยเป็น ตัว */}
                      {inputK03 === "50022" || inputK03 === "50023" ? "กิโลกรัม" : "ตัว"}
                    </span>
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ 1 ถึง &nbsp;
                      {
                        inputK03 === "50010" || inputK03 === "50011" || inputK03 === "50012" ?
                          99999
                        :

                        inputK03 === "50015" || inputK03 === "50016" || inputK03 === "50018" ?
                          9999999
                        :

                        inputK03 === "50019" || inputK03 === "50020" || inputK03 === "50021" ?
                          999999
                        :

                          9999
                      }
                    </div>
                  </div>
                </Col>

              </Row>

              <Row>
                <Col md={12}>
                  <div className="mt-3" style={{ display: showWarningK04 }}><label className="text-danger">กรุณาระบุ K04 (1 ถึง {
                      inputK03 === "50010" || inputK03 === "50011" || inputK03 === "50012" ?
                      99999
                    :

                    inputK03 === "50015" || inputK03 === "50016" || inputK03 === "50018" ?
                      9999999
                    :

                    inputK03 === "50019" || inputK03 === "50020" || inputK03 === "50021" ?
                      999999
                    :

                      9999
                  })</label></div>
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
