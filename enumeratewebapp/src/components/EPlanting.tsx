import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { REC01Info } from "../model/REC01Info";
import { REC02Info } from "../model/REC02Info";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { useGlobalUserContext } from "./UserContext";

export default function EPlanting() {
  const { enumeratesk2, setEnumerateSK2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  const [plants, SetPlants] = useState<Plant[]>([]);
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const [groupName, setGroupName] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  interface Plant {
    ItemCode: string;
    ItemName: string;
    GroupCode: string;
    GroupName: string;
    Category: string;
  }

  interface PlantList {
    AH_CODE: string;
    T01: string;
    T01_N: string;
    GroupCode: string;
    GroupName: string;
    IsRemove: boolean;
  }


  //state input
  const [inputT01, setInputT01] = useState("");

  //เก็บพืชที่เลือกไว้บนหน้าจอ
  const [plantList, SetPlantList] = useState<PlantList[]>([]);

  //page load
  useEffect(() => {

    console.log("load page EPlanting");

    setInputT01("1");
    getREC02();

  }, [page === 3]);

  async function getREC02() {

    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
      ]);

      //Get REC02
      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC02/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //ต้องแปลงค่าจาก object เป็น array
              let pl: PlantList[] = [];

              if (res.data[0] !== undefined) {

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
                result = rec02.T01_30N !== "" ? pl.push({ AH_CODE: "", T01: rec02.T01_30, T01_N: rec02.T01_20N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

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

                //console.log(result);
                //console.log(pl);


                SetPlantList(pl);

                /* SetPlantDB(
                  JSON.parse(JSON.stringify(res.data), (key, value) =>
                    value === null ? "" : value
                  )
                ); */


              }

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC02): ", err);
          });
          
      } catch (err) {
        console.error("ERROR (getREC02): ", err);
      }
        

    }
  }

  const onSuggestHandler = (
    text: any,
    code: any,
    groupCode: any,
    groupName: any,
    category: any
  ) => {
    setText(text);
    setCode(code);
    setGroupCode(groupCode);
    setGroupName(groupName);
    setSuggestions([]);
  };

  const onChangeInputPlants = (text: any) => {
    let matches: any = [];
    if (text.length > 0) {
      matches = plants.filter((plant: any) => {
        const regex = new RegExp(`${text}`, "gi");
        return plant.ItemName.match(regex);
      });
    }
    //console.log(matches);
    setSuggestions(matches);
    setText(text);
    if (text == "") {
      setCode("");
    }
  };


  //state warning
  const [showWarningAddPlant, setShowWarningAddPlant] = useState<string>("none"); // ปิด
  const [showWarningAddPlantLimited, setShowWarningAddPlantLimited] = useState<string>("none"); // ปิด

  //state disabled
  const [disabledAddPlantLimited, setDisabledAddPlantLimited] = useState<boolean>(false);

  const AddPlant = () => {    

    if (text != "" && code != "") {

      //check ไม่ให้ซ้ำกับที่อยู่ใน plantList
      const item = plantList.find(e => e.T01_N === text)
      if(item === undefined){
        //ไม่มีซ้ำ ให้เพิ่มได้
        plantList.push({
          AH_CODE: "",
          T01: code,
          T01_N: text,
          GroupCode: groupCode,
          GroupName: groupName,
          IsRemove: false,
        });

        setShowWarningAddPlant("none")

        handleClose();

      }
      else{
        //ซ้ำ ขึ้นเตือน
        setShowWarningAddPlant("")
      }

      
    }

    
  };

  const handleRemovePlant = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    code: string
  ) => {
    event.preventDefault();

    SetPlantList((current) =>
      current.filter((p) => {
        return p.T01 !== code;
      })
    );

    /* SetPlantDB((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.T01 === code) {
          return { ...obj, IsRemove: true};
        }
        return obj;
      });
      return newState;
    }); */

  };

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("พืชอื่นๆ ที่ปลูกหรือที่มีอยู่ในที่ถือครองนี้");
  const [msgModal, setMsgModal] = useState("Coming Soon!");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModalPlant = () => {
    const getPlants = async () => {
      let url_enumerate_api_plants: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api_plants = process.env.REACT_APP_ENUMERATE_API + "/PlantAnimalStandard/getPlantList";

        const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
        let basic_auth_api: string = "";
        if (api.authToken) {
          basic_auth_api = api.authToken;
        }
        //console.log(basic_auth_api);

        await axios
          .get(url_enumerate_api_plants, {
            headers: { Authorization: "Basic " + basic_auth_api },
          })
          .then((result) => {
            const { data } = result;
            //console.log(data);
            SetPlants(data);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
      }
    };
    getPlants();

    //clear textbox on modal
    setText("");
    setCode("");
    setGroupCode("");
    setGroupName("");

    setShowWarningAddPlant("none")

    //ตรวจสอบรายการว่าเกินที่กำหนดไว้หรือไม่ 50 รายการ
    if(plantList.length >= 50){
      //รายการเกินกำหนดแล้ว
      setShowWarningAddPlantLimited("")
      setDisabledAddPlantLimited(true)
    }
    else{
      setShowWarningAddPlantLimited("none")
      setDisabledAddPlantLimited(false)
    }

    handleShow();
  };


  //state invalid input
  const [showInvalidT01_plantlist, setShowInvalidT01_plantlist] = useState<string>("none"); // ปิด
  const [showInvalidT01_plantlist_Code, setShowInvalidT01_plantlist_Code] = useState<string>("none"); // ปิด

  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 3 การปลูกพืช 
  async function SaveEnumerate() {
    
    //consistency check
    let isvalid = true;

    if(plantList.length === 0 ){
      //ถ้า T01 = 1 แล้ว ต้องระบุชื่อพืชอย่างน้อย 1 รายการ
      setShowInvalidT01_plantlist("") //เปิด
      isvalid = false;
    }

    //เช็คด้วยว่าถ้าพืชไหนไม่มีรหัส ไม่ให้ผ่าน
    let implist: PlantList[] = plantList.filter((p) => {
      return (
        p.T01 !== ""
      );
    })
    if(plantList.length !== implist.length){
      setShowInvalidT01_plantlist_Code("")
      isvalid = false
    }
    else{
      setShowInvalidT01_plantlist_Code("none")
    }

    //ผ่านการ consistency check
    if (isvalid) {
      let t01: REC02Info = ({
        AH_CODE: "",
        T01: "",
        T01_01N: "",
        T01_01: "",
        T01_02N: "",
        T01_02: "",
        T01_03N: "",
        T01_03: "",
        T01_04N: "",
        T01_04: "",
        T01_05N: "",
        T01_05: "",
        T01_06N: "",
        T01_06: "",
        T01_07N: "",
        T01_07: "",
        T01_08N: "",
        T01_08: "",
        T01_09N: "",
        T01_09: "",
        T01_10N: "",
        T01_10: "",
        T01_11N: "",
        T01_11: "",
        T01_12N: "",
        T01_12: "",
        T01_13N: "",
        T01_13: "",
        T01_14N: "",
        T01_14: "",
        T01_15N: "",
        T01_15: "",
        T01_16N: "",
        T01_16: "",
        T01_17N: "",
        T01_17: "",
        T01_18N: "",
        T01_18: "",
        T01_19N: "",
        T01_19: "",
        T01_20N: "",
        T01_20: "",
        T01_21N: "",
        T01_21: "",
        T01_22N: "",
        T01_22: "",
        T01_23N: "",
        T01_23: "",
        T01_24N: "",
        T01_24: "",
        T01_25N: "",
        T01_25: "",
        T01_26N: "",
        T01_26: "",
        T01_27N: "",
        T01_27: "",
        T01_28N: "",
        T01_28: "",
        T01_29N: "",
        T01_29: "",
        T01_30N: "",
        T01_30: "",
        T01_31N: "",
        T01_31: "",
        T01_32N: "",
        T01_32: "",
        T01_33N: "",
        T01_33: "",
        T01_34N: "",
        T01_34: "",
        T01_35N: "",
        T01_35: "",
        T01_36N: "",
        T01_36: "",
        T01_37N: "",
        T01_37: "",
        T01_38N: "",
        T01_38: "",
        T01_39N: "",
        T01_39: "",
        T01_40N: "",
        T01_40: "",
        T01_41N: "",
        T01_41: "",
        T01_42N: "",
        T01_42: "",
        T01_43N: "",
        T01_43: "",
        T01_44N: "",
        T01_44: "",
        T01_45N: "",
        T01_45: "",
        T01_46N: "",
        T01_46: "",
        T01_47N: "",
        T01_47: "",
        T01_48N: "",
        T01_48: "",
        T01_49N: "",
        T01_49: "",
        T01_50N: "",
        T01_50: ""
      })

      t01.AH_CODE = enumeratesk2?.AH_CODE!;
      t01.T01 = "1";

      t01.T01_01N = plantList.length >= 1 ? plantList[0].T01_N : "";
      t01.T01_01 = plantList.length >= 1 ? plantList[0].T01 : "";
      t01.T01_02N = plantList.length >= 2 ? plantList[1].T01_N : "";
      t01.T01_02 = plantList.length >= 2 ? plantList[1].T01 : "";
      t01.T01_03N = plantList.length >= 3 ? plantList[2].T01_N : "";
      t01.T01_03 = plantList.length >= 3 ? plantList[2].T01 : "";
      t01.T01_04N = plantList.length >= 4 ? plantList[3].T01_N : "";
      t01.T01_04 = plantList.length >= 4 ? plantList[3].T01 : "";
      t01.T01_05N = plantList.length >= 5 ? plantList[4].T01_N : "";
      t01.T01_05 = plantList.length >= 5 ? plantList[4].T01 : "";
      t01.T01_06N = plantList.length >= 6 ? plantList[5].T01_N : "";
      t01.T01_06 = plantList.length >= 6 ? plantList[5].T01 : "";
      t01.T01_07N = plantList.length >= 7 ? plantList[6].T01_N : "";
      t01.T01_07 = plantList.length >= 7 ? plantList[6].T01 : "";
      t01.T01_08N = plantList.length >= 8 ? plantList[7].T01_N : "";
      t01.T01_08 = plantList.length >= 8 ? plantList[7].T01 : "";
      t01.T01_09N = plantList.length >= 9 ? plantList[8].T01_N : "";
      t01.T01_09 = plantList.length >= 9 ? plantList[8].T01 : "";

      t01.T01_10N = plantList.length >= 10 ? plantList[9].T01_N : "";
      t01.T01_10 = plantList.length >= 10 ? plantList[9].T01 : "";
      t01.T01_11N = plantList.length >= 11 ? plantList[10].T01_N : "";
      t01.T01_11 = plantList.length >= 11 ? plantList[10].T01 : "";
      t01.T01_12N = plantList.length >= 12 ? plantList[11].T01_N : "";
      t01.T01_12 = plantList.length >= 12 ? plantList[11].T01 : "";
      t01.T01_13N = plantList.length >= 13 ? plantList[12].T01_N : "";
      t01.T01_13 = plantList.length >= 13 ? plantList[12].T01 : "";
      t01.T01_14N = plantList.length >= 14 ? plantList[13].T01_N : "";
      t01.T01_14 = plantList.length >= 14 ? plantList[13].T01 : "";
      t01.T01_15N = plantList.length >= 15 ? plantList[14].T01_N : "";
      t01.T01_15 = plantList.length >= 15 ? plantList[14].T01 : "";
      t01.T01_16N = plantList.length >= 16 ? plantList[15].T01_N : "";
      t01.T01_16 = plantList.length >= 16 ? plantList[15].T01 : "";
      t01.T01_17N = plantList.length >= 17 ? plantList[16].T01_N : "";
      t01.T01_17 = plantList.length >= 17 ? plantList[16].T01 : "";
      t01.T01_18N = plantList.length >= 18 ? plantList[17].T01_N : "";
      t01.T01_18 = plantList.length >= 18 ? plantList[17].T01 : "";
      t01.T01_19N = plantList.length >= 19 ? plantList[18].T01_N : "";
      t01.T01_19 = plantList.length >= 19 ? plantList[18].T01 : "";
      t01.T01_20N = plantList.length >= 20 ? plantList[19].T01_N : "";
      t01.T01_20 = plantList.length >= 20 ? plantList[19].T01 : "";

      t01.T01_21N = plantList.length >= 21 ? plantList[20].T01_N : "";
      t01.T01_21 = plantList.length >= 21 ? plantList[20].T01 : "";
      t01.T01_22N = plantList.length >= 22 ? plantList[21].T01_N : "";
      t01.T01_22 = plantList.length >= 22 ? plantList[21].T01 : "";
      t01.T01_23N = plantList.length >= 23 ? plantList[22].T01_N : "";
      t01.T01_23 = plantList.length >= 23 ? plantList[22].T01 : "";
      t01.T01_24N = plantList.length >= 24 ? plantList[23].T01_N : "";
      t01.T01_24 = plantList.length >= 24 ? plantList[23].T01 : "";
      t01.T01_25N = plantList.length >= 25 ? plantList[24].T01_N : "";
      t01.T01_25 = plantList.length >= 25 ? plantList[24].T01 : "";
      t01.T01_26N = plantList.length >= 26 ? plantList[25].T01_N : "";
      t01.T01_26 = plantList.length >= 26 ? plantList[25].T01 : "";
      t01.T01_27N = plantList.length >= 27 ? plantList[26].T01_N : "";
      t01.T01_27 = plantList.length >= 27 ? plantList[26].T01 : "";
      t01.T01_28N = plantList.length >= 28 ? plantList[27].T01_N : "";
      t01.T01_28 = plantList.length >= 28 ? plantList[27].T01 : "";
      t01.T01_29N = plantList.length >= 29 ? plantList[28].T01_N : "";
      t01.T01_29 = plantList.length >= 29 ? plantList[28].T01 : "";
      t01.T01_30N = plantList.length >= 30 ? plantList[29].T01_N : "";
      t01.T01_30 = plantList.length >= 30 ? plantList[29].T01 : "";

      t01.T01_31N = plantList.length >= 31 ? plantList[30].T01_N : "";
      t01.T01_31 = plantList.length >= 31 ? plantList[30].T01 : "";
      t01.T01_32N = plantList.length >= 32 ? plantList[31].T01_N : "";
      t01.T01_32 = plantList.length >= 32 ? plantList[31].T01 : "";
      t01.T01_33N = plantList.length >= 33 ? plantList[32].T01_N : "";
      t01.T01_33 = plantList.length >= 33 ? plantList[32].T01 : "";
      t01.T01_34N = plantList.length >= 34 ? plantList[33].T01_N : "";
      t01.T01_34 = plantList.length >= 34 ? plantList[33].T01 : "";
      t01.T01_35N = plantList.length >= 35 ? plantList[34].T01_N : "";
      t01.T01_35 = plantList.length >= 35 ? plantList[34].T01 : "";
      t01.T01_36N = plantList.length >= 36 ? plantList[35].T01_N : "";
      t01.T01_36 = plantList.length >= 36 ? plantList[35].T01 : "";
      t01.T01_37N = plantList.length >= 37 ? plantList[36].T01_N : "";
      t01.T01_37 = plantList.length >= 37 ? plantList[36].T01 : "";
      t01.T01_38N = plantList.length >= 38 ? plantList[37].T01_N : "";
      t01.T01_38 = plantList.length >= 38 ? plantList[37].T01 : "";
      t01.T01_39N = plantList.length >= 39 ? plantList[38].T01_N : "";
      t01.T01_39 = plantList.length >= 39 ? plantList[38].T01 : "";
      t01.T01_40N = plantList.length >= 40 ? plantList[39].T01_N : "";
      t01.T01_40 = plantList.length >= 40 ? plantList[39].T01 : "";

      t01.T01_41N = plantList.length >= 41 ? plantList[40].T01_N : "";
      t01.T01_41 = plantList.length >= 41 ? plantList[40].T01 : "";
      t01.T01_42N = plantList.length >= 42 ? plantList[41].T01_N : "";
      t01.T01_42 = plantList.length >= 42 ? plantList[41].T01 : "";
      t01.T01_43N = plantList.length >= 43 ? plantList[42].T01_N : "";
      t01.T01_43 = plantList.length >= 43 ? plantList[42].T01 : "";
      t01.T01_44N = plantList.length >= 44 ? plantList[43].T01_N : "";
      t01.T01_44 = plantList.length >= 44 ? plantList[43].T01 : "";
      t01.T01_45N = plantList.length >= 45 ? plantList[44].T01_N : "";
      t01.T01_45 = plantList.length >= 45 ? plantList[44].T01 : "";
      t01.T01_46N = plantList.length >= 46 ? plantList[45].T01_N : "";
      t01.T01_46 = plantList.length >= 46 ? plantList[45].T01 : "";
      t01.T01_47N = plantList.length >= 47 ? plantList[46].T01_N : "";
      t01.T01_47 = plantList.length >= 47 ? plantList[46].T01 : "";
      t01.T01_48N = plantList.length >= 48 ? plantList[47].T01_N : "";
      t01.T01_48 = plantList.length >= 48 ? plantList[47].T01 : "";
      t01.T01_49N = plantList.length >= 49 ? plantList[48].T01_N : "";
      t01.T01_49 = plantList.length >= 49 ? plantList[48].T01 : "";
      t01.T01_50N = plantList.length >= 50 ? plantList[49].T01_N : "";
      t01.T01_50 = plantList.length >= 50 ? plantList[49].T01 : "";


      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        try {

          let rec01list: REC01Info[] = [];
          // url getREC01List
          let url_getREC01List_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_getREC01List_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
          }

          // api getREC01List
          await axios
            .get(url_getREC01List_api, {headers: headers,})
            .then((res) => {
              if (res.status === 200) {
                rec01list= JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
              }
            })
            .catch((err) => {console.log("AXIOS ERROR (getREC01List in EPlanting): ", err);}); 

          //---------------------------------

          // url insertREC02
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC02";
          }

          // body insertREC02
          const body = t01;

          // api insertREC02
          const result = await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  setShowInvalidT01_plantlist("none") // ปิด
                  setShowInvalidT01_plantlist_Code("none") // ปิด

                  //setPage(page + 1);
                  return true;
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
            });

            
          //รอจนบันทึกเสร็จแล้ว
          if (result) {

            //consistency check
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทข้าว แล้ว B01 = 1 (ตอนที่ 3.1) [20502,20503,20504,20505,20506]
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทยางพารา แล้ว C01 = 1 (ตอนที่ 3.2) [10501]
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทปาล์มน้ำมัน แล้ว D01 = 1 (ตอนที่ 3.3) [10033,10123,10124,10125]
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทพืชยืนต้น ไม้ผลชนิดสำคัญ แล้ว E01 = 1 (ตอนที่ 3.4) groupcode = 10
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทพืชสวนป่าชนิดสำคัญ แล้ว F01 = 1 (ตอนที่ 3.5) groupcode = 12
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทพืชไร่ชนิดสำคัญ แล้ว G01 = 1 (ตอนที่ 3.6) groupcode = 20
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทพืชผักชนิดสำคัญ แล้ว H01 = 1 (ตอนที่ 3.7) groupcode = 30
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทสมุนไพรชนิดสำคัญ แล้ว I01 = 1 (ตอนที่ 3.8) groupcode = 31
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทไม้ดอก ไม้ประดับชนิดสำคัญ แล้ว J01 = 1 (ตอนที่ 3.9) groupcode = 40 , 41

            let ricelist: PlantList[] = plantList.filter((p) => { return p.T01 === "20502" || p.T01 === "20503" || p.T01 === "20504" || p.T01 === "20505" || p.T01 === "20506"; })
            let rubberlist : PlantList[] = plantList.filter((p) => {return p.T01 === "10501" ;})
            let oilpalmlist: PlantList[] = plantList.filter((p) => { return p.T01 === "10033" || p.T01 === "10123" || p.T01 === "10124" || p.T01 === "10125"; })
            let perennialplantlist: PlantList[] = plantList.filter((p) => {
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
            let forestlist: PlantList[] = plantList.filter((p) => {
              return (
                p.T01 === "12110" ||
                p.T01 === "12119" ||
                p.T01 === "12128" ||
                p.T01 === "12129" ||
                p.T01 === "12133"
              );
            })
            let farmplantlist: PlantList[] = plantList.filter((p) => {
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
            let vegetablelist: PlantList[] = plantList.filter((p) => {
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
            let herblist: PlantList[] = plantList.filter((p) => {
              return (
                p.T01 === "31245" ||
                p.T01 === "31247" ||
                p.T01 === "31267" ||
                p.T01 === "31280" ||
                p.T01 === "31289"
              );
            })
            let floweringplantlist: PlantList[] = plantList.filter((p) => {
              return (
                p.T01 === "40328" ||
                p.T01 === "40342" ||
                p.T01 === "40344" ||
                p.T01 === "40355" ||
                p.T01 === "41389"
              );
            })

            if (ricelist.length > 0) {
              setPage(4) //ไปตอนที่ 3.1 ข้าว                             
            }
            else if (rubberlist.length > 0) {
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

        } catch (err) {
          console.error("SaveEnumerate ERROR (ตอนที่ 3 การปลูกพืช): ", err);
        }

      }

    }
    else {
      //ไม่ต้องทำไร
    }

  }

  /*  async function getDetail() {
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
           url_enumerate_api =
             process.env.REACT_APP_ENUMERATE_API +
             "/Enumerate/getDetail/" +
             enumeratesk2?.AH_CODE;
         }
 
         await axios
           .get(url_enumerate_api, {
             headers: api.headers,
           })
           .then((res) => {
             if (res.status === 200) {
               setEnumerateSK2(res.data[0]);
               // setEnumerate(
               //   JSON.parse(JSON.stringify(res.data[0]), (key, value) =>
               //     value === null ? "" : value === "b" ? "" : value
               //   )
               // );
             }
           })
           .catch((err) => {
             console.log("AXIOS ERROR: ", err);
           });
       } catch (err) {
         console.error("ERROR (checkSubreocrd): ", err);
       }
     }
   } */

  async function changePage() {

    setPage(page + 1)

    /* if(enumerate?.A022 === "1"){
      //ทำการเกษตร เลี้ยงสัตว์
      setPage(10);
    }else if(enumerate?.A023 === "1"){
      //ทำการเกษตร เลี้ยงสัตว์ในพื้นทีน้ำจืด
      setPage(11);
    }else if(enumerate?.A024 === "1"){
      //ทำการเกษตร ทำนาเกลือสมุทร
      setPage(12);
    }else{
      setPage(13);
    } */

  }


  //สำหรับสิทธิ์ 3 , 7
  async function NextEnumerate(){
    
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        try {

          let rec01list: REC01Info[] = [];
          // url getREC01List
          let url_getREC01List_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_getREC01List_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01List/" + enumeratesk2?.AH_CODE;
          }

          // api getREC01List
          const result = await axios
            .get(url_getREC01List_api, {headers: headers,})
            .then((res) => {
              if (res.status === 200) {
                rec01list= JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
                return true;
              }
            })
            .catch((err) => {console.log("AXIOS ERROR (NextEnumerate.getREC01List in EPlanting): ", err);}); 

          //---------------------------------

            
          //รอจนบันทึกเสร็จแล้ว
          if (result) {

            //consistency check
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทข้าว แล้ว B01 = 1 (ตอนที่ 3.1) [20502,20503,20504,20505,20506]
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทยางพารา แล้ว C01 = 1 (ตอนที่ 3.2) [10501]
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทปาล์มน้ำมัน แล้ว D01 = 1 (ตอนที่ 3.3) [10033,10123,10124,10125]
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทพืชยืนต้น ไม้ผลชนิดสำคัญ แล้ว E01 = 1 (ตอนที่ 3.4) groupcode = 10
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทพืชสวนป่าชนิดสำคัญ แล้ว F01 = 1 (ตอนที่ 3.5) groupcode = 12
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทพืชไร่ชนิดสำคัญ แล้ว G01 = 1 (ตอนที่ 3.6) groupcode = 20
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทพืชผักชนิดสำคัญ แล้ว H01 = 1 (ตอนที่ 3.7) groupcode = 30
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทสมุนไพรชนิดสำคัญ แล้ว I01 = 1 (ตอนที่ 3.8) groupcode = 31
            //ถ้า พืชชนิดสำคัญอยู่ในประเภทไม้ดอก ไม้ประดับชนิดสำคัญ แล้ว J01 = 1 (ตอนที่ 3.9) groupcode = 40 , 41

            let ricelist: PlantList[] = plantList.filter((p) => { return p.T01 === "20502" || p.T01 === "20503" || p.T01 === "20504" || p.T01 === "20505" || p.T01 === "20506"; })
            let rubberlist : PlantList[] = plantList.filter((p) => {return p.T01 === "10501" ;})
            let oilpalmlist: PlantList[] = plantList.filter((p) => { return p.T01 === "10033" || p.T01 === "10123" || p.T01 === "10124" || p.T01 === "10125"; })
            let perennialplantlist: PlantList[] = plantList.filter((p) => {
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
            let forestlist: PlantList[] = plantList.filter((p) => {
              return (
                p.T01 === "12110" ||
                p.T01 === "12119" ||
                p.T01 === "12128" ||
                p.T01 === "12129" ||
                p.T01 === "12133"
              );
            })
            let farmplantlist: PlantList[] = plantList.filter((p) => {
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
            let vegetablelist: PlantList[] = plantList.filter((p) => {
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
            let herblist: PlantList[] = plantList.filter((p) => {
              return (
                p.T01 === "31245" ||
                p.T01 === "31247" ||
                p.T01 === "31267" ||
                p.T01 === "31280" ||
                p.T01 === "31289"
              );
            })
            let floweringplantlist: PlantList[] = plantList.filter((p) => {
              return (
                p.T01 === "40328" ||
                p.T01 === "40342" ||
                p.T01 === "40344" ||
                p.T01 === "40355" ||
                p.T01 === "41389"
              );
            })

            if (ricelist.length > 0) {
              setPage(4) //ไปตอนที่ 3.1 ข้าว                             
            }
            else if (rubberlist.length > 0) {
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

        } catch (err) {
          console.error("NextEnumerate ERROR (ตอนที่ 3 การปลูกพืช): ", err);
        }

      }

  }

  return (
    <div>
      <Container className="container-xxl flex-grow-1 container-p-y">
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
                      ตอนที่ 3 การปลูกพืช (เฉพาะผู้ถือครองทำการเกษตรที่ตอบ A02_1 = 1)
                    </h5>
                  </Col>

                  <Col md={8} className="col-2 ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseControls188"
                      aria-expanded="false"
                      aria-controls="collapseControls188"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row className="collapse show" id="collapseControls188">
                  <Col md={12}>

                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการปลูกพืชหรือไม่ (ระบบกำหนดให้)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={4}>
                        <label>T01</label>
                      </Col>
                      <Col md={8}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_2"
                              type="radio"
                              value="1"
                              id="SP2_2_1"
                              checked={"1" === inputT01}
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_2_1"
                            >
                              1. มี
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_2"
                              type="radio"
                              value="0"
                              id="SP2_2_2"
                              checked={"0" === inputT01}
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_2_2"
                            >
                              2. ไม่มี (ข้ามไป ตอนที่ 4)
                            </label>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          2. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการปลูกพืชชนิดใดบ้าง (รวม พืชที่มีอยู่ในที่ถือครอง ณ วันที่ 1 พฤษภาคม 2566) ให้บันทึกชื่อพืชทุกชนิดที่ปลูกหรือที่มีอยู่ในที่ถือครองนี้ (ระบบบันทึกรหัสให้)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col md={12}>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={OpenModalPlant}
                          style={{
                            display:
                              process.env.REACT_APP_PROJECT === "open"
                                ? userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                                  ? "none"
                                  : ""
                                : "none",
                          }}
                        >
                          เพิ่มพืช
                        </button>
                      </Col>
                    </Row>

                    <Row className="mt-4">

                      {plantList &&
                        plantList.map((item, index) => {
                          return (
                            <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                              <div className="card icon-card text-start mb-2 mt-2 ">
                                <div className="card-body box-list">
                                  <Row>
                                    <div className="col-lg-12 col-md-12 col-sm-12 ps-0 ">
                                      <p className="icon-name text-capitalize ml-0  mt-2 float-start" style={{ fontWeight: "bold" }}>{index + 1}. {item.T01_N} (รหัส : {item.T01}) </p>
                                      <button type="button" 
                                        className="btn btn-danger rounded-pill float-end" 
                                        onClick={(e) => handleRemovePlant(e, item.T01)}
                                        style={{
                                          display:
                                            process.env.REACT_APP_PROJECT === "open"
                                              ? userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                                                ? "none"
                                                : ""
                                              : "none",
                                        }} 
                                      >ลบ</button>
                                    </div>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                    </Row>

                    <Row>
                      <Col md={12}>
                        <div style={{ display: showInvalidT01_plantlist }}><label className="text-danger">ต้องระบุชื่อพืชอย่างน้อย 1 รายการ</label></div>
                        <div style={{ display: showInvalidT01_plantlist_Code }}><label className="text-danger">ต้องระบุรหัสพืช</label></div>
                      </Col>
                    </Row>

                    {/* <Row className="mt-4">
                      <Col md={12}>
                        <div className="table-responsive">
                          <p>รายการพืช</p>
                          <table className="table table-bordered mb-2">
                            <thead className="table-secondary text-nowrap">
                              <tr>
                                <th scope="col">#</th>
                                <th
                                  scope="col"
                                  style={{ textAlign: "center" }}
                                >
                                  ชื่อพืช / รหัสพืช
                                </th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {plantList &&
                                plantList.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>
                                        {item.PL} / {item.PL_A}
                                      </td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          onClick={(e) =>
                                            handleRemovePlant(e, item.PL_A)
                                          }
                                        >
                                          ลบ
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </Col>
                    </Row> */}


                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <Row className="mt-2 text-center">
                  <Col md={12}>
                    <label>
                      ** ถ้ามีการปลูกพืชสำคัญ ระบบจะกำหนดให้บันทึกรายละเอียดของพืชชนิดสำคัญ ตามประเภทพืช ในตอนที่ 3.1 - 3.9 (ถ้าไม่มีการปลูกพืชสำคัญให้ข้ามไป ตอนที่ 4)

                    </label>
                  </Col>
                </Row>
              </Card.Footer>
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
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                        ? NextEnumerate() //changePage()
                        : process.env.REACT_APP_PROJECT === "open"
                          ? SaveEnumerate()
                          : changePage()
                    }
                  >
                    ถัดไป
                  </button>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton className="header">
            <Modal.Title className="text-primary">{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <Row className="mt-2">
                  <Col md={6} className="mt-3">
                    <label>ชื่อพืช</label>
                    <input
                      type="text"
                      className="form-control"
                      value={text}
                      onChange={(e) => onChangeInputPlants(e.target.value)}
                      disabled={disabledAddPlantLimited}
                    />

                    {suggestions &&
                      suggestions.map((suggestion: any, i) => (
                        <div
                          key={i}
                          className="suggestion col-md-12 justify-content-md-center"
                          onClick={() =>
                            onSuggestHandler(
                              suggestion.ItemName,
                              suggestion.ItemCode,
                              suggestion.GroupCode,
                              suggestion.GroupName,
                              suggestion.Category
                            )
                          }
                        >
                          {suggestion.ItemCode + "-" + suggestion.ItemName}
                        </div>
                      ))}
                  </Col>
                  <Col md={6} className="mt-3">
                    <label>รหัสพืช</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled
                      value={code}
                    />
                  </Col>
                </Row>

                <Row className="">
                  <Col md={12}>
                    <div className="mt-3" style={{ display: showWarningAddPlant }}><label className="text-danger">ชื่อและรหัสพืชนี้มีอยู่ในรายการแล้ว</label></div>
                    <div className="mt-3" style={{ display: showWarningAddPlantLimited }}><label className="text-danger">รายการพืชครบกำหนดที่ 50 รายการแล้ว</label></div>
                  </Col>
                </Row>

                <Row className="mt-5">
                  <Col md={12}>
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
                      onClick={AddPlant}
                      disabled={disabledAddPlantLimited}
                    >
                      บันทึก
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>

      </Container>
    </div>
  );
}
