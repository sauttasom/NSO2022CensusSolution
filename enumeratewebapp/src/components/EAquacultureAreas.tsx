import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { REC01Info } from "../model/REC01Info";
import { REC14Info } from "../model/REC14Info";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { _T03_1, _T03_2 } from "./Option";
import { useGlobalUserContext } from "./UserContext";

export default function EAquacultureAreas() {
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
    T03: string;
    T03_N: string;
    GroupCode: string;
    GroupName: string;
    IsRemove: boolean;
  }

  const [animalList, SetAnimalList] = useState<AnimalList[]>([]);

  useEffect(() => {
    console.log("load page EAquacultureAreas");

    getREC14();

    setShowInvalidT03_animalList("none")
    setShowWarningT03_1("none")
    setShowWarningT03_2("none")

  }, [page === 15]);

  async function getREC14() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC14/" + enumeratesk2?.AH_CODE;
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

                let rec14: REC14Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                let result: number = 0;
                result = rec14.T03_01N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_01, T03_N: rec14.T03_01N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_02N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_02, T03_N: rec14.T03_02N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_03N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_03, T03_N: rec14.T03_03N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_04N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_04, T03_N: rec14.T03_04N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_05N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_05, T03_N: rec14.T03_05N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_06N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_06, T03_N: rec14.T03_06N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_07N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_07, T03_N: rec14.T03_07N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_08N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_08, T03_N: rec14.T03_08N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_09N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_09, T03_N: rec14.T03_09N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_10N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_10, T03_N: rec14.T03_10N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;

                result = rec14.T03_11N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_11, T03_N: rec14.T03_11N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_12N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_12, T03_N: rec14.T03_12N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_13N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_13, T03_N: rec14.T03_13N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_14N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_14, T03_N: rec14.T03_14N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_15N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_15, T03_N: rec14.T03_15N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_16N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_16, T03_N: rec14.T03_16N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_17N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_17, T03_N: rec14.T03_17N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_18N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_18, T03_N: rec14.T03_18N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_19N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_19, T03_N: rec14.T03_19N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;
                result = rec14.T03_20N !== "" ? pl.push({ AH_CODE: "", T03: rec14.T03_20, T03_N: rec14.T03_20N, GroupCode: "", GroupName: "", IsRemove: false, }) : 0;


                //console.log(result);
                //console.log(pl);

                SetAnimalList(pl);

                setT03_1(rec14.T03_1);
                setT03_2(rec14.T03_2)

                /* SetPlantDB(
                  JSON.parse(JSON.stringify(res.data), (key, value) =>
                    value === null ? "" : value
                  )
                ); */


              }
              
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC14): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC14): ", err);
      }
    }
  }

  //state : input
  const [T03_1, setT03_1] = useState<string>("");
  const [T03_2, setT03_2] = useState<string>("");

  //action : input
  const T03_1OnChange = (event: any) => {
    setT03_1(event.target.value);
  };

  const T03_2OnChange = (event: any) => {
    setT03_2(event.target.value);
  };


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
      const item = animalList.find(e => e.T03_N === text)
      if(item === undefined){
        //ไม่มีซ้ำ ให้เพิ่มได้
        animalList.push({
          AH_CODE: "",
          T03: code,
          T03_N: text,
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

  const handleRemoveAnimal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    code: string
  ) => {
    event.preventDefault();

    SetAnimalList((current) =>
      current.filter((a) => {
        return a.T03 !== code;
      })
    );

  };

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("สัตว์น้ำ");
  const [msgModal, setMsgModal] = useState("Coming Soon!");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModalAnimal = () => {
    const getAnimals = async () => {
      let url_enumerate_api_animals: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api_animals = process.env.REACT_APP_ENUMERATE_API + "/PlantAnimalStandard/getAquaticAnimalList";

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

    //ตรวจสอบรายการว่าเกินที่กำหนดไว้หรือไม่ 20 รายการ
    if(animalList.length >= 20){
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
  const [showInvalidT03_animalList, setShowInvalidT03_animalList] = useState<string>("none"); // ปิด
  const [showInvalidT03_animalList_Code, setShowInvalidT03_animalList_Code] = useState<string>("none"); // ปิด


  //state warning
  const [showWarningT03_1, setShowWarningT03_1] = useState<string>("none"); // ปิด
  const [showWarningT03_2, setShowWarningT03_2] = useState<string>("none"); // ปิด




  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 5 การเลี้ยงสัตว์น้ำ
  async function SaveEnumerate() {

    //consistency check
    let isvalid = true;

    if(animalList.length === 0 ){
      //ถ้า T03 = 1 แล้ว ต้องระบุชื่อสัตว์อย่างน้อย 1 รายการ
      setShowInvalidT03_animalList("") //เปิด
      isvalid = false;
    }
    else{
      setShowInvalidT03_animalList("none")
    }

    //เช็คด้วยว่าถ้าสัตว์ไหนไม่มีรหัส ไม่ให้ผ่าน
    let implist: AnimalList[] = animalList.filter((a) => {
      return (
        a.T03 !== ""
      );
    })
    if(animalList.length !== implist.length){
      setShowInvalidT03_animalList_Code("")
      isvalid = false
    }
    else{
      setShowInvalidT03_animalList_Code("none")
    }


    if(T03_1 === "" ){
      isvalid = false
      setShowWarningT03_1("")
    }
    else{
      setShowWarningT03_1("none")
    }

    if(T03_2 === "" ){
      isvalid = false
      setShowWarningT03_2("")
    }
    else{
      setShowWarningT03_2("none")
    }



    //ผ่านการ consistency check
    if (isvalid) {

      let t03: REC14Info = ({
        AH_CODE: "",
        T03: "",
        T03_1: "",
        T03_2: "",
        T03_01N: "",
        T03_01: "",
        T03_02N: "",
        T03_02: "",
        T03_03N: "",
        T03_03: "",
        T03_04N: "",
        T03_04: "",
        T03_05N: "",
        T03_05: "",
        T03_06N: "",
        T03_06: "",
        T03_07N: "",
        T03_07: "",
        T03_08N: "",
        T03_08: "",
        T03_09N: "",
        T03_09: "",
        T03_10N: "",
        T03_10: "",
        T03_11N: "",
        T03_11: "",
        T03_12N: "",
        T03_12: "",
        T03_13N: "",
        T03_13: "",
        T03_14N: "",
        T03_14: "",
        T03_15N: "",
        T03_15: "",
        T03_16N: "",
        T03_16: "",
        T03_17N: "",
        T03_17: "",
        T03_18N: "",
        T03_18: "",
        T03_19N: "",
        T03_19: "",
        T03_20N: "",
        T03_20: ""
      })

      t03.AH_CODE = enumeratesk2?.AH_CODE!;
      t03.T03 = "1";
      t03.T03_1 = T03_1;
      t03.T03_2 = T03_2;

      t03.T03_01N = animalList.length >= 1 ? animalList[0].T03_N : "";
      t03.T03_01 = animalList.length >= 1 ? animalList[0].T03 : "";
      t03.T03_02N = animalList.length >= 2 ? animalList[1].T03_N : "";
      t03.T03_02 = animalList.length >= 2 ? animalList[1].T03 : "";
      t03.T03_03N = animalList.length >= 3 ? animalList[2].T03_N : "";
      t03.T03_03 = animalList.length >= 3 ? animalList[2].T03 : "";
      t03.T03_04N = animalList.length >= 4 ? animalList[3].T03_N : "";
      t03.T03_04 = animalList.length >= 4 ? animalList[3].T03 : "";
      t03.T03_05N = animalList.length >= 5 ? animalList[4].T03_N : "";
      t03.T03_05 = animalList.length >= 5 ? animalList[4].T03 : "";
      t03.T03_06N = animalList.length >= 6 ? animalList[5].T03_N : "";
      t03.T03_06 = animalList.length >= 6 ? animalList[5].T03 : "";
      t03.T03_07N = animalList.length >= 7 ? animalList[6].T03_N : "";
      t03.T03_07 = animalList.length >= 7 ? animalList[6].T03 : "";
      t03.T03_08N = animalList.length >= 8 ? animalList[7].T03_N : "";
      t03.T03_08 = animalList.length >= 8 ? animalList[7].T03 : "";
      t03.T03_09N = animalList.length >= 9 ? animalList[8].T03_N : "";
      t03.T03_09 = animalList.length >= 9 ? animalList[8].T03 : "";

      t03.T03_10N = animalList.length >= 10 ? animalList[9].T03_N : "";
      t03.T03_10 = animalList.length >= 10 ? animalList[9].T03 : "";
      t03.T03_11N = animalList.length >= 11 ? animalList[10].T03_N : "";
      t03.T03_11 = animalList.length >= 11 ? animalList[10].T03 : "";
      t03.T03_12N = animalList.length >= 12 ? animalList[11].T03_N : "";
      t03.T03_12 = animalList.length >= 12 ? animalList[11].T03 : "";
      t03.T03_13N = animalList.length >= 13 ? animalList[12].T03_N : "";
      t03.T03_13 = animalList.length >= 13 ? animalList[12].T03 : "";
      t03.T03_14N = animalList.length >= 14 ? animalList[13].T03_N : "";
      t03.T03_14 = animalList.length >= 14 ? animalList[13].T03 : "";
      t03.T03_15N = animalList.length >= 15 ? animalList[14].T03_N : "";
      t03.T03_15 = animalList.length >= 15 ? animalList[14].T03 : "";
      t03.T03_16N = animalList.length >= 16 ? animalList[15].T03_N : "";
      t03.T03_16 = animalList.length >= 16 ? animalList[15].T03 : "";
      t03.T03_17N = animalList.length >= 17 ? animalList[16].T03_N : "";
      t03.T03_17 = animalList.length >= 17 ? animalList[16].T03 : "";
      t03.T03_18N = animalList.length >= 18 ? animalList[17].T03_N : "";
      t03.T03_18 = animalList.length >= 18 ? animalList[17].T03 : "";
      t03.T03_19N = animalList.length >= 19 ? animalList[18].T03_N : "";
      t03.T03_19 = animalList.length >= 19 ? animalList[18].T03 : "";
      t03.T03_20N = animalList.length >= 20 ? animalList[19].T03_N : "";
      t03.T03_20 = animalList.length >= 20 ? animalList[19].T03 : "";

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
            .get(url_getREC01List_api, { headers: headers, })
            .then((res) => {
              if (res.status === 200) {
                rec01list = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
              }
            })
            .catch((err) => { console.log("AXIOS ERROR (getREC01List in EAquacultureAreas): ", err); });

          //---------------------------------


          // url insertREC14
          let url_insertREC14_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_insertREC14_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC14";
          }

          const body = t03;

          const result = await axios
            .post(url_insertREC14_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  setShowInvalidT03_animalList("none") // ปิด
                  setShowInvalidT03_animalList_Code("none") // ปิด

                  //setPage(page + 1);  
                  return true;
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR (insertREC14)  : ", err);
            });

          //รอจนบันทึกเสร็จแล้ว
          if (result) {

            //consistency check
            //ถ้า ระบุชื่อสัตว์ แล้วเป็นสัตว์น้ำชนิดสำคัญ L01 = 1 --> ให้ไปตอนที่ 5.1 การเลี้ยงสัตว์น้ำชนิดสำคัญ page = 16
            let implist: AnimalList[] = animalList.filter((a) => {
              return (
                a.T03 === "60001" ||
                a.T03 === "60006" ||
                a.T03 === "60007" ||
                a.T03 === "60008" ||
                a.T03 === "60009" ||
                a.T03 === "60010" ||
                a.T03 === "60011" ||
                a.T03 === "60012" ||
                a.T03 === "60013" ||
                a.T03 === "60014" ||
                a.T03 === "60015" ||
                a.T03 === "60017" ||
                a.T03 === "60018" ||
                a.T03 === "60019" ||
                a.T03 === "60023" ||
                a.T03 === "60025" ||
                a.T03 === "60026" ||
                a.T03 === "60028" ||
                a.T03 === "60029" ||
                a.T03 === "60030" ||
                a.T03 === "60035" ||
                a.T03 === "60041" ||
                a.T03 === "69036" ||
                a.T03 === "69037" ||
                a.T03 === "69038" ||
                a.T03 === "69039" ||
                a.T03 === "69040" ||
                a.T03 === "69041" ||
                a.T03 === "60020" ||
                a.T03 === "69042"
              );
            })

            if (implist.length > 0) {
              setPage(16) //ไปตอนที่ 5.1 การเลี้ยงสัตว์น้ำชนิดสำคัญ 
            }
            else {

              //เช็คจาก A02_4
              if (rec01list[0].A02_4 === "1") {
                setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
              }
              else {
                setPage(18); //ไปตอนที่ 7 เครื่องจักร
              }

            }

          }


        } catch (err) {
          console.error("SaveEnumerate ERROR (EAquacultureAreas) : ", err);
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
                if (rec01list[0].A02_2 === "1"){
                  setPage(13); //ไปตอนที่ 4 การเลี้ยงสัตว์
                }   
                else if (rec01list[0].A02_1 === "1"){
                  setPage(3); //ไปตอนที่ 3 การปลูกพืช
                }                 
                else{
                  setPage(2); //ไปตอนที่ 2 เนื้อที่
                }
                                

              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01List in EAquacultureAreas ): ", err);
            });
          
        } catch (error) {
          console.error("OnClickBack ERROR (ตอนที่ 5 การเลี้ยงสัตว์น้ำ): ", error);
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
          await axios
            .get(url_getREC01List_api, { headers: headers, })
            .then((res) => {
              if (res.status === 200) {
                rec01list = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
              }
            })
            .catch((err) => { console.log("AXIOS ERROR (NextEnumerate.getREC01List in EAquacultureAreas): ", err); });

          //---------------------------------

          //
          if (true) {

            //consistency check
            //ถ้า ระบุชื่อสัตว์ แล้วเป็นสัตว์น้ำชนิดสำคัญ L01 = 1 --> ให้ไปตอนที่ 5.1 การเลี้ยงสัตว์น้ำชนิดสำคัญ page = 16
            let implist: AnimalList[] = animalList.filter((a) => {
              return (
                a.T03 === "60001" ||
                a.T03 === "60006" ||
                a.T03 === "60007" ||
                a.T03 === "60008" ||
                a.T03 === "60009" ||
                a.T03 === "60010" ||
                a.T03 === "60011" ||
                a.T03 === "60012" ||
                a.T03 === "60013" ||
                a.T03 === "60014" ||
                a.T03 === "60015" ||
                a.T03 === "60017" ||
                a.T03 === "60018" ||
                a.T03 === "60019" ||
                a.T03 === "60023" ||
                a.T03 === "60025" ||
                a.T03 === "60026" ||
                a.T03 === "60028" ||
                a.T03 === "60029" ||
                a.T03 === "60030" ||
                a.T03 === "60035" ||
                a.T03 === "60041" ||
                a.T03 === "69036" ||
                a.T03 === "69037" ||
                a.T03 === "69038" ||
                a.T03 === "69039" ||
                a.T03 === "69040" ||
                a.T03 === "69041" ||
                a.T03 === "60020" ||
                a.T03 === "69042"
              );
            })

            if (implist.length > 0) {
              setPage(16) //ไปตอนที่ 5.1 การเลี้ยงสัตว์น้ำชนิดสำคัญ 
            }
            else {

              //เช็คจาก A02_4
              if (rec01list[0].A02_4 === "1") {
                setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
              }
              else {
                setPage(18); //ไปตอนที่ 7 เครื่องจักร
              }

            }

          }


        } catch (err) {
          console.error("NextEnumerate ERROR (EAquacultureAreas) : ", err);
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
                    md={10}
                    className="col-10 d-flex align-items-center pr-0"
                  >
                    <h5 className="mb-0 py-2 py-xl-0 text-white ">
                    ตอนที่ 5 การเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด (เฉพาะผู้ถือครองทำการเกษตรที่ตอบ A02_3 = 1)
                    </h5>
                  </Col>

                  <Col md={2} className="col-2 ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseControls1112"
                      aria-expanded="false"
                      aria-controls="collapseControls1112"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row className="collapse show" id="collapseControls1112">
                  <Col md={12}>

                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          1. ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการเลี้ยงสัตว์น้ำในพื้นที่น้ำจืดหรือไม่ (ระบบกำหนดให้)
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={4}>
                        <label>T03</label>
                      </Col>
                      <Col md={8}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="T03"
                              type="radio"
                              value="1"
                              id="T03_1"
                              checked
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="T03_1"
                            >
                              1. มี
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="T03"
                              type="radio"
                              value="2"
                              id="T03_2"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="T03_2"
                            >
                              2. ไม่มี (ข้ามไป ตอนที่ 6)
                            </label>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          2. ลักษณะการเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด 
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={4}>
                        <label>T03_1</label>
                      </Col>
                      <Col md={8}>
                        <div className="form-group">
                          {_T03_1.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rd_T03_1"
                                type="radio"
                                value={option.value}
                                id={`rd_T03_1${index}`}
                                onChange={T03_1OnChange}
                                checked={option.value === T03_1}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rd_T03_1${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                        </div>
                        <div className="" style={{ display: showWarningT03_1 }}><label className="text-danger">กรุณาเลือก T03_1</label></div>
                      </Col>
                    </Row>

                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          3. วัตถุประสงค์ในการเลี้ยงฯ  
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={4}>
                        <label>T03_2</label>
                      </Col>
                      <Col md={8}>
                        <div className="form-group">
                          {_T03_2.map((option, index) => (
                            <div className="form-check" key={option.value}>
                              <input
                                className="form-check-input"
                                name="rd_T03_2"
                                type="radio"
                                value={option.value}
                                id={`rd_T03_2${index}`}
                                onChange={T03_2OnChange}
                                checked={option.value === T03_2}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`rd_T03_2${index}`}
                              >
                                {option.text}
                              </label>
                            </div>
                          ))}
                        </div>
                        <div className="" style={{ display: showWarningT03_2 }}><label className="text-danger">กรุณาเลือก T03_2</label></div>
                      </Col>
                    </Row>

                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                          4. ที่ถือครองนี้มีการเลี้ยงสัตว์น้ำ ชนิดใดบ้าง 
                        </label>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col md={12}>
                        <label>
                        ให้ระบุชื่อสัตว์น้ำทุกชนิดที่เลี้ยง (ระบบบันทึกรหัสให้)
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
                                      <p className="icon-name text-capitalize ml-0  mt-2 float-start" style={{ fontWeight: "bold" }}>{index + 1}. {item.T03_N} (รหัส : {item.T03}) </p>
                                      <button type="button" 
                                        className="btn btn-danger rounded-pill float-end" 
                                        onClick={(e) => handleRemoveAnimal(e, item.T03)} 
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
                        <div className="" style={{ display: showInvalidT03_animalList }}><label className="text-danger">ต้องระบุชื่อสัตว์น้ำอย่างน้อย 1 รายการ</label></div>
                        <div className="" style={{ display: showInvalidT03_animalList_Code }}><label className="text-danger">ต้องระบุรหัสสัตว์น้ำ</label></div>
                      </Col>
                    </Row>
                    
           
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                  <Row className="mt-2 text-center">
                    <Col md={12}>
                      <label>
                      ** ถ้ามีการเลี้ยงสัตว์น้ำชนิดสำคัญ ระบบจะกำหนดให้บันทึกรายละเอียดของการเลี้ยงสัตว์น้ำชนิดสำคัญ ในตอนที่ 5.1 (ถ้าไม่มีการเลี้ยงสัตว์น้ำชนิดสำคัญให้ข้ามไป ตอนที่ 6)
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
          <Modal.Header closeButton className="header">
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
                    <div className="mt-3" style={{ display: showWarningAddAnimalLimited }}><label className="text-danger">รายการชื่อชนิดและพันธุ์สัตว์ครบกำหนดที่ 20 รายการแล้ว</label></div>
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
