import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { REC01Info } from "../model/REC01Info";
import { REC12Info } from "../model/REC12Info";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { useGlobalUserContext } from "./UserContext";

export default function EAnimalHusbandry() {
  const { enumeratesk2, setEnumerateSK2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  const [animals, SetAnimals] = useState<Animal[]>([]);
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const [groupName, setGroupName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  
  interface Animal {
    ItemCode: string;
    ItemName: string;
    GroupCode: string;
    GroupName: string;
    Category: string;
  }

  interface AnimalList {
    AH_CODE: string;
    T02: string;
    T02_N: string;
    GroupCode: string;
    GroupName: string;
    IsRemove: boolean;
  }

  const [animalList, SetAnimalList] = useState<AnimalList[]>([]);

  useEffect(() => {
    console.log("load page EAnimalHusbandry");

    getREC12();
  }, [page === 13]);

  async function getREC12() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC12/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                //ต้องแปลงค่าจาก object เป็น array
                let pl: AnimalList[] = [];

                let rec12: REC12Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                let result: number = 0;
                result = rec12.T02_01N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_01, T02_N: rec12.T02_01N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_02N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_02, T02_N: rec12.T02_02N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_03N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_03, T02_N: rec12.T02_03N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_04N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_04, T02_N: rec12.T02_04N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_05N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_05, T02_N: rec12.T02_05N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_06N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_06, T02_N: rec12.T02_06N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_07N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_07, T02_N: rec12.T02_07N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_08N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_08, T02_N: rec12.T02_08N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_09N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_09, T02_N: rec12.T02_09N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_10N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_10, T02_N: rec12.T02_10N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                result = rec12.T02_11N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_11, T02_N: rec12.T02_11N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_12N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_12, T02_N: rec12.T02_12N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_13N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_13, T02_N: rec12.T02_13N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_14N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_14, T02_N: rec12.T02_14N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_15N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_15, T02_N: rec12.T02_15N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_16N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_16, T02_N: rec12.T02_16N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_17N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_17, T02_N: rec12.T02_17N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_18N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_18, T02_N: rec12.T02_18N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_19N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_19, T02_N: rec12.T02_19N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_20N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_20, T02_N: rec12.T02_20N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                result = rec12.T02_21N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_21, T02_N: rec12.T02_21N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_22N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_22, T02_N: rec12.T02_22N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_23N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_23, T02_N: rec12.T02_23N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_24N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_24, T02_N: rec12.T02_24N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec12.T02_25N !== "" ? pl.push({ AH_CODE: "", T02: rec12.T02_25, T02_N: rec12.T02_25N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                //console.log(result);
                //console.log(pl);


                SetAnimalList(pl);

                /* SetPlantDB(
                  JSON.parse(JSON.stringify(res.data), (key, value) =>
                    value === null ? "" : value
                  )
                ); */

              }

              
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC12): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC12): ", err);
      }
    }
  }

  const onSuggestHandler = (
    text: any,
    code: any,
    groupCode: any,
    groupName: any,
    category:any
  ) => {
    setText(text);
    setCode(code);
    setGroupCode(groupCode);
    setGroupName(groupName);
    setSuggestions([]);
  };

  const onChangeInputAnimals = (text: any) => {
    let matches: any = [];
    if (text.length > 0) {
      matches = animals.filter((animal: any) => {
        const regex = new RegExp(`${text}`, "gi");
        return animal.ItemName.match(regex);
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
  const [showWarningAddAnimal, setShowWarningAddAnimal] = useState<string>("none"); // ปิด
  const [showWarningAddAnimalLimited, setShowWarningAddAnimalLimited] = useState<string>("none"); // ปิด

  //state disabled
  const [disabledAddAnimalLimited, setDisabledAddAnimalLimited] = useState<boolean>(false);

  const AddAnimal = () => {
    if (text != "" && code != "") {

      //check ไม่ให้ซ้ำกับที่อยู่ใน plantList
      const item = animalList.find(e => e.T02_N === text)
      if(item === undefined){
        //ไม่มีซ้ำ ให้เพิ่มได้
        animalList.push({
          AH_CODE: "",
          T02: code,
          T02_N: text,
          GroupCode: groupCode,
          GroupName: groupName,
          IsRemove: false,
        });

        setShowWarningAddAnimal("none")

        handleClose();

      }
      else{
        //ซ้ำ ขึ้นเตือน
        setShowWarningAddAnimal("")
      }

      
    }

    
  };

  const handleRemoveAnimal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,code: string) => {
    event.preventDefault();

    SetAnimalList((current) =>
      current.filter((a) => {
        return a.T02 !== code;
      })
    );

  };


  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("สัตว์");
  const [msgModal, setMsgModal] = useState("Coming Soon!");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModalAnimal = () => {
    const getAnimals = async () => {
      let url_enumerate_api_animals: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api_animals= process.env.REACT_APP_ENUMERATE_API + "/PlantAnimalStandard/getAnimalList";

        const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
        let basic_auth_api: string = "";
        if (api.authToken) {
          basic_auth_api = api.authToken;
        }
        //console.log(basic_auth_api);

        await axios
          .get(url_enumerate_api_animals, {
            headers: { Authorization: "Basic " + basic_auth_api },
          })
          .then((result) => {
            const { data } = result;
            //console.log(data);
            SetAnimals(data);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
      }
    };
    getAnimals();

    //clear textbox on modal
    setText("");
    setCode("");
    setGroupCode("");
    setGroupName("");

    setShowWarningAddAnimal("none")

    //ตรวจสอบรายการว่าเกินที่กำหนดไว้หรือไม่ 25 รายการ
    if(animalList.length >= 25){
      //รายการเกินกำหนดแล้ว
      setShowWarningAddAnimalLimited("")
      setDisabledAddAnimalLimited(true)
    }
    else{
      setShowWarningAddAnimalLimited("none")
      setDisabledAddAnimalLimited(false)
    }

    handleShow();
  };


  //state invalid input
  const [showInvalidT02_animalList, setShowInvalidT02_animalList] = useState<string>("none"); // ปิด
  const [showInvalidT02_animalList_Code, setShowInvalidT02_animalList_Code] = useState<string>("none"); // ปิด

  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 4 การเลี้ยงสัตว์
  async function SaveEnumerate() {

    //consistency check
    let isvalid = true;

    if(animalList.length === 0 ){
      //ถ้า T02 = 1 แล้ว ต้องระบุชื่อสัตว์อย่างน้อย 1 รายการ
      setShowInvalidT02_animalList("") //เปิด
      isvalid = false;
    }

    //เช็คด้วยว่าถ้าสัตว์ไหนไม่มีรหัส ไม่ให้ผ่าน
    let implist: AnimalList[] = animalList.filter((a) => {
      return (
        a.T02 !== ""
      );
    })
    if(animalList.length !== implist.length){
      setShowInvalidT02_animalList_Code("")
      isvalid = false
    }
    else{
      setShowInvalidT02_animalList_Code("none")
    }


    //ผ่านการ consistency check
    if (isvalid) {

      let t02: REC12Info = ({
        AH_CODE: "",
        T02: "",
        T02_01N: "",
        T02_01: "",
        T02_02N: "",
        T02_02: "",
        T02_03N: "",
        T02_03: "",
        T02_04N: "",
        T02_04: "",
        T02_05N: "",
        T02_05: "",
        T02_06N: "",
        T02_06: "",
        T02_07N: "",
        T02_07: "",
        T02_08N: "",
        T02_08: "",
        T02_09N: "",
        T02_09: "",
        T02_10N: "",
        T02_10: "",
        T02_11N: "",
        T02_11: "",
        T02_12N: "",
        T02_12: "",
        T02_13N: "",
        T02_13: "",
        T02_14N: "",
        T02_14: "",
        T02_15N: "",
        T02_15: "",
        T02_16N: "",
        T02_16: "",
        T02_17N: "",
        T02_17: "",
        T02_18N: "",
        T02_18: "",
        T02_19N: "",
        T02_19: "",
        T02_20N: "",
        T02_20: "",
        T02_21N: "",
        T02_21: "",
        T02_22N: "",
        T02_22: "",
        T02_23N: "",
        T02_23: "",
        T02_24N: "",
        T02_24: "",
        T02_25N: "",
        T02_25: ""
      })

      t02.AH_CODE = enumeratesk2?.AH_CODE!;
      t02.T02 = "1";

      t02.T02_01N = animalList.length >= 1 ? animalList[0].T02_N : "";
      t02.T02_01 = animalList.length >= 1 ? animalList[0].T02 : "";
      t02.T02_02N = animalList.length >= 2 ? animalList[1].T02_N : "";
      t02.T02_02 = animalList.length >= 2 ? animalList[1].T02 : "";
      t02.T02_03N = animalList.length >= 3 ? animalList[2].T02_N : "";
      t02.T02_03 = animalList.length >= 3 ? animalList[2].T02 : "";
      t02.T02_04N = animalList.length >= 4 ? animalList[3].T02_N : "";
      t02.T02_04 = animalList.length >= 4 ? animalList[3].T02 : "";
      t02.T02_05N = animalList.length >= 5 ? animalList[4].T02_N : "";
      t02.T02_05 = animalList.length >= 5 ? animalList[4].T02 : "";
      t02.T02_06N = animalList.length >= 6 ? animalList[5].T02_N : "";
      t02.T02_06 = animalList.length >= 6 ? animalList[5].T02 : "";
      t02.T02_07N = animalList.length >= 7 ? animalList[6].T02_N : "";
      t02.T02_07 = animalList.length >= 7 ? animalList[6].T02 : "";
      t02.T02_08N = animalList.length >= 8 ? animalList[7].T02_N : "";
      t02.T02_08 = animalList.length >= 8 ? animalList[7].T02 : "";
      t02.T02_09N = animalList.length >= 9 ? animalList[8].T02_N : "";
      t02.T02_09 = animalList.length >= 9 ? animalList[8].T02 : "";

      t02.T02_10N = animalList.length >= 10 ? animalList[9].T02_N : "";
      t02.T02_10 = animalList.length >= 10 ? animalList[9].T02 : "";
      t02.T02_11N = animalList.length >= 11 ? animalList[10].T02_N : "";
      t02.T02_11 = animalList.length >= 11 ? animalList[10].T02 : "";
      t02.T02_12N = animalList.length >= 12 ? animalList[11].T02_N : "";
      t02.T02_12 = animalList.length >= 12 ? animalList[11].T02 : "";
      t02.T02_13N = animalList.length >= 13 ? animalList[12].T02_N : "";
      t02.T02_13 = animalList.length >= 13 ? animalList[12].T02 : "";
      t02.T02_14N = animalList.length >= 14 ? animalList[13].T02_N : "";
      t02.T02_14 = animalList.length >= 14 ? animalList[13].T02 : "";
      t02.T02_15N = animalList.length >= 15 ? animalList[14].T02_N : "";
      t02.T02_15 = animalList.length >= 15 ? animalList[14].T02 : "";
      t02.T02_16N = animalList.length >= 16 ? animalList[15].T02_N : "";
      t02.T02_16 = animalList.length >= 16 ? animalList[15].T02 : "";
      t02.T02_17N = animalList.length >= 17 ? animalList[16].T02_N : "";
      t02.T02_17 = animalList.length >= 17 ? animalList[16].T02 : "";
      t02.T02_18N = animalList.length >= 18 ? animalList[17].T02_N : "";
      t02.T02_18 = animalList.length >= 18 ? animalList[17].T02 : "";
      t02.T02_19N = animalList.length >= 19 ? animalList[18].T02_N : "";
      t02.T02_19 = animalList.length >= 19 ? animalList[18].T02 : "";
      t02.T02_20N = animalList.length >= 20 ? animalList[19].T02_N : "";
      t02.T02_20 = animalList.length >= 20 ? animalList[19].T02 : "";

      t02.T02_21N = animalList.length >= 21 ? animalList[20].T02_N : "";
      t02.T02_21 = animalList.length >= 21 ? animalList[20].T02 : "";
      t02.T02_22N = animalList.length >= 22 ? animalList[21].T02_N : "";
      t02.T02_22 = animalList.length >= 22 ? animalList[21].T02 : "";
      t02.T02_23N = animalList.length >= 23 ? animalList[22].T02_N : "";
      t02.T02_23 = animalList.length >= 23 ? animalList[22].T02 : "";
      t02.T02_24N = animalList.length >= 24 ? animalList[23].T02_N : "";
      t02.T02_24 = animalList.length >= 24 ? animalList[23].T02 : "";
      t02.T02_25N = animalList.length >= 25 ? animalList[24].T02_N : "";
      t02.T02_25 = animalList.length >= 25 ? animalList[24].T02 : "";

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
          const result_rec01 = await axios
            .get(url_getREC01List_api, {headers: headers,})
            .then((res) => {
              if (res.status === 200) {
                rec01list= JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
                return true;
              }
            })
            .catch((err) => {console.log("AXIOS ERROR (getREC01List in EAnimalHusbandry): ", err);}); 

          //---------------------------------

          //เรียกข้อมูล rec01 เสร็จแล้ว
          if (result_rec01) {

            // url insertREC12
            let url_insertREC12_api: string = "";
            if (process.env.REACT_APP_ENUMERATE_API) {
              url_insertREC12_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC12";
            }
            // body insertREC12
            const body = t02;
            // api insertREC12
            const result = await axios
              .post(url_insertREC12_api, JSON.stringify(body), { headers: headers, })
              .then((res) => {
                if (res.status === 200) {
                  if (res.data) {

                    setShowInvalidT02_animalList("none") // ปิด
                    setShowInvalidT02_animalList_Code("none") // ปิด

                    //setPage(page + 1);
                    return true;
                  }
                }
              })
              .catch((err) => {
                console.error("AXIOS ERROR (insertREC12) : ", err);
              });


            //รอจนบันทึกเสร็จแล้ว
            if (result) {
              //consistency check
              //ถ้า ระบุชื่อสัตว์ แล้วเป็นสัตว์ชนิดสำคัญ K01 = 1 --> ให้ไปตอนที่ 4.1 การเลี้ยงสัตว์ชนิดสำคัญ page = 14
              let implist: AnimalList[] = animalList.filter((a) => {
                return (
                  a.T02 === "50001" ||
                  a.T02 === "50002" ||
                  a.T02 === "50003" ||
                  a.T02 === "50004" ||
                  a.T02 === "50005" ||
                  a.T02 === "50006" ||
                  a.T02 === "50007" ||
                  a.T02 === "50008" ||
                  a.T02 === "50009" ||
                  a.T02 === "50010" ||
                  a.T02 === "50011" ||
                  a.T02 === "50012" ||
                  a.T02 === "50013" ||
                  a.T02 === "50014" ||
                  a.T02 === "50015" ||
                  a.T02 === "50016" ||
                  a.T02 === "50017" ||
                  a.T02 === "50018" ||
                  a.T02 === "50019" ||
                  a.T02 === "50020" ||
                  a.T02 === "50021" ||
                  a.T02 === "50022" ||
                  a.T02 === "50023"
                );
              })

              if (implist.length > 0) {
                setPage(14) //ไปตอนที่ 4.1 การเลี้ยงสัตว์ชนิดสำคัญ
              }
              else {

                //เช็คจาก A02_3 , A02_4
                if (rec01list[0].A02_3 === "1") {
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

          }
        

        } catch (err) {
          console.error("SaveEnumerate ERROR (EAnimalHusbandry) : ", err);
        }

      }

    }
    else {
      //ไม่ต้องทำอะไร
    }

  }

  async function changePage(){
    setPage(page + 1)
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
              if (rec01list[0].A02_1 === "1") {
                setPage(3); //ไปตอนที่ 3 การปลูกพืช
              }
              else {
                setPage(2); //ไปตอนที่ 2 เนื้อที่
              }

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List in EAnimalHusbandry ): ", err);
          });

      } catch (error) {
        console.error("OnClickBack ERROR (ตอนที่ 4 การเลี้ยงสัตว์): ", error);
      }

    }

  }


  //สำหรับสิทธิ์ 3 , 7
  async function NextEnumerate() {

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
          const result_rec01 = await axios
            .get(url_getREC01List_api, {headers: headers,})
            .then((res) => {
              if (res.status === 200) {
                rec01list= JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
                return true;
              }
            })
            .catch((err) => {console.log("AXIOS ERROR (NextEnumerate.getREC01List in EAnimalHusbandry): ", err);}); 

          //---------------------------------

          //เรียกข้อมูล rec01 เสร็จแล้ว
          if (result_rec01) {

            //
            if (true) {
              //consistency check
              //ถ้า ระบุชื่อสัตว์ แล้วเป็นสัตว์ชนิดสำคัญ K01 = 1 --> ให้ไปตอนที่ 4.1 การเลี้ยงสัตว์ชนิดสำคัญ page = 14
              let implist: AnimalList[] = animalList.filter((a) => {
                return (
                  a.T02 === "50001" ||
                  a.T02 === "50002" ||
                  a.T02 === "50003" ||
                  a.T02 === "50004" ||
                  a.T02 === "50005" ||
                  a.T02 === "50006" ||
                  a.T02 === "50007" ||
                  a.T02 === "50008" ||
                  a.T02 === "50009" ||
                  a.T02 === "50010" ||
                  a.T02 === "50011" ||
                  a.T02 === "50012" ||
                  a.T02 === "50013" ||
                  a.T02 === "50014" ||
                  a.T02 === "50015" ||
                  a.T02 === "50016" ||
                  a.T02 === "50017" ||
                  a.T02 === "50018" ||
                  a.T02 === "50019" ||
                  a.T02 === "50020" ||
                  a.T02 === "50021" ||
                  a.T02 === "50022" ||
                  a.T02 === "50023"
                );
              })

              if (implist.length > 0) {
                setPage(14) //ไปตอนที่ 4.1 การเลี้ยงสัตว์ชนิดสำคัญ
              }
              else {

                //เช็คจาก A02_3 , A02_4
                if (rec01list[0].A02_3 === "1") {
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

          }
        

        } catch (err) {
          console.error("NextEnumerate ERROR (EAnimalHusbandry) : ", err);
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
                    ตอนที่ 4 การเลี้ยงสัตว์ (เฉพาะผู้ถือครองทำการเกษตรที่ตอบ A02_2 = 1)
                    </h5>
                  </Col>

                  <Col md={8} className="col-2 ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseControls111"
                      aria-expanded="false"
                      aria-controls="collapseControls111"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row className="collapse show" id="collapseControls111">
                  <Col md={12}>

                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          1. ณ วันที่ 1 พฤษภาคม 2566 ที่ถือครองนี้มีการเลี้ยงสัตว์หรือไม่ (ระบบกำหนดให้)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={4}>
                        <label>T02</label>
                      </Col>
                      <Col md={8}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="T02"
                              type="radio"
                              value="1"
                              id="T02_1"
                              checked
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="T02_1"
                            >
                              1. มี
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="T02"
                              type="radio"
                              value="2"
                              id="T02_2"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="T02_2"
                            >
                              2. ไม่มี (ข้ามไป ตอนที่ 5)
                            </label>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          2. ณ วันที่ 1 พฤษภาคม 2566 ที่ถือครองนี้มีการเลี้ยงสัตว์ เพื่อขาย ชนิดใดบ้าง (รวมการเลี้ยงโค กระบือเพื่อใช้งาน และการเลี้ยงไหม) 
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={12}>
                        <label>
                        ให้ระบุชื่อสัตว์ทุกชนิดที่เลี้ยง (ระบบบันทึกรหัสให้)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col md={12}>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={OpenModalAnimal}
                          style={{
                            display:
                              process.env.REACT_APP_PROJECT === "open"
                                ? userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                                  ? "none"
                                  : ""
                                : "none",
                          }} 
                        >
                          เพิ่มสัตว์
                        </button>
                      </Col>
                    </Row>

                    <Row className="mt-4">

                      {animalList &&
                        animalList.map((item, index) => {
                          return (
                            <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                              <div className="card icon-card text-start mb-2 mt-2 ">
                                <div className="card-body box-list">
                                  <Row>
                                    <div className="col-lg-12 col-md-12 col-sm-12 ps-0 ">
                                      <p className="icon-name text-capitalize ml-0  mt-2 float-start" style={{ fontWeight: "bold" }}>{index + 1}. {item.T02_N} (รหัส : {item.T02}) </p>
                                      <button type="button" 
                                        className="btn btn-danger rounded-pill float-end" 
                                        onClick={(e) => handleRemoveAnimal(e, item.T02)} 
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
                        <div style={{ display: showInvalidT02_animalList }}><label className="text-danger">ต้องระบุชื่อสัตว์อย่างน้อย 1 รายการ</label></div>
                        <div style={{ display: showInvalidT02_animalList_Code }}><label className="text-danger">ต้องระบุรหัสสัตว์</label></div>
                      </Col>
                    </Row>
        
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                  <Row className="mt-2 text-center">
                    <Col md={12}>
                      <label>
                      ** ถ้ามีการเลี้ยงสัตว์ชนิดสำคัญ ระบบจะกำหนดให้บันทึกรายละเอียดของสัตว์ชนิดสำคัญ ในตอนที่ 4.1 (ถ้าไม่มีการเลี้ยงสัตว์ชนิดสำคัญให้ข้ามไป ตอนที่ 5)
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
                    onClick={() => OnClickBack()}
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
          <Modal.Header closeButton className="header" >
            <Modal.Title className="text-primary">{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={12} className="mt-0">
                    <label>ชื่อชนิดและพันธุ์สัตว์</label>
                    <input
                      type="text"
                      className="form-control"
                      value={text}
                      onChange={(e) => onChangeInputAnimals(e.target.value)}
                      disabled={disabledAddAnimalLimited}
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
                  <Col md={12} className="mt-3">
                    <label>รหัสสัตว์</label>
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
                    <div className="mt-3" style={{ display: showWarningAddAnimal }}><label className="text-danger">ชื่อชนิดและพันธุ์สัตว์นี้มีอยู่ในรายการแล้ว</label></div>
                    <div className="mt-3" style={{ display: showWarningAddAnimalLimited }}><label className="text-danger">รายการชื่อชนิดและพันธุ์สัตว์ครบกำหนดที่ 25 รายการแล้ว</label></div>
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
                      onClick={AddAnimal}
                      disabled={disabledAddAnimalLimited}
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
