import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Enumerate } from "../model/Enumerate";
import { EnumerateSK2ImportantInformationInfo } from "../model/EnumerateSK2ImportantInformationInfo";
import { Listing2 } from "../model/Listing2";
import { REC01Info } from "../model/REC01Info";
import { REC02Info } from "../model/REC02Info";
import { REC12Info } from "../model/REC12Info";
import { REC14Info } from "../model/REC14Info";
import { REC19Info } from "../model/REC19Info";
import { REC20Info } from "../model/REC20Info";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { useGlobalUserContext } from "./UserContext";
import { EnumerateSK2 } from "../model/EnumerateSK2";

export default function ESpecialX() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputStatus_Name, setInputStatus_Name] = useState("");
  const [inputStatus_Activity, setInputStatus_Activity] = useState("");
  const [inputStatus_LandAmount, setInputStatus_LandAmount] = useState("");
  const [inputStatus_LandArea, setInputStatus_LandArea] = useState("");
  const [inputStatus_Income, setInputStatus_Income] = useState("");
  const [inputStatus_Debt, setInputStatus_Debt] = useState("");
  const [inputStatus_Member, setInputStatus_Member] = useState("");
  const [inputApprove, setInputApprove] = useState("");

  //state : info
  const [inputName, setInputName] = useState("XXXXXX");
  const [inputActivity_Plant, setInputActivity_Plant] = useState("XXXXXX");
  const [inputActivity_Animal, setInputActivity_Animal] = useState("XXXXXX");
  const [inputActivity_Aquaculture, setInputActivity_Aquaculture] = useState("XXXXXX");
  const [inputLandAmount, setInputLandAmount] = useState("XXXXXX");
  const [inputLandArea, setInputLandArea] = useState("XXXXXX");
  const [inputIncome, setInputIncome] = useState("XXXXXX");
  const [inputDebt, setInputDebt] = useState("XXXXXX");
  const [inputMemberAmount, setInputMemberAmount] = useState("XXXXXX");
  const [inputMemberMale, setInputMemberMale] = useState("XXXXXX");
  const [inputMemberFemale, setInputMemberFemale] = useState("XXXXXX");

  const [rec01, setRec01] = useState<REC01Info>();

  const navigate = useNavigate();

  const [panel2, setPanel2] = useState("none"); //ปิด
  const [disable2, setDisable2] = useState(false);
  const [disable_5, setDisable_5] = useState(false);
  const [disable_6, setDisable_6] = useState(false);
  const [disable_7, setDisable_7] = useState(false);

  //first load
  useEffect(() => {

    console.log("load page ESpecialX" );

    //load info
    getOwner()
    getActivity_Plant()
    getActivity_Animal()
    getActivity_Aquaculture()
    getLand()
    getIncomeDebt()
    getMember() 

    getEnumerateSK2ImportantInformation()

    getREC01()

   
  }, [page === 25]);

  //get api
  async function getOwner() {
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
          //url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getTempListing/" + enumeratesk2?.AH_CODE;
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getEnumerateSK2/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //set state
              /* let item: Listing2 | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
              let R13_A : string = item?.R13_A!;
              let R13_AT : string = item?.R13_AT!;
              let firstname : string = item?.R13_B!;
              let lastname : string = item?.R13_C!;
              let prefix : string = "";
              let fullname : string = "";

              if(R13_A === "1"){
                prefix = "นาย"
              }
              else if(R13_A === "2"){
                prefix = "นาง"
              }
              else if(R13_A === "3"){
                prefix = "นางสาว"
              }
              else if(R13_A === "4"){
                prefix = R13_AT
              }

              fullname = prefix + firstname + " " + lastname;
              setInputName(fullname) */

              let item:EnumerateSK2 | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) =>value === null ? "" : value)
              let HTIT : string = item?.HTIT!;
              let HTIT_T : string = item?.HTIT_T!;
              let firstname : string = item?.HNAMEF!;
              let lastname : string = item?.HNAMES!;
              let prefix : string = "";
              let fullname : string = "";

              if(HTIT === "1"){
                prefix = "นาย"
              }
              else if(HTIT === "2"){
                prefix = "นาง"
              }
              else if(HTIT === "3"){
                prefix = "นางสาว"
              }
              else if(HTIT === "4"){
                prefix = HTIT_T
              }

              fullname = prefix + firstname + " " + lastname;
              setInputName(fullname)

 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getOwner TempListing): ", err);
          });
      } catch (err) {
        console.error("ERROR (getOwner): ", err);
      }
    }
  }

  async function getActivity_Plant() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC02/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //set state
              let item: REC02Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

              let sp = "";
              let activity_plant = "";

              if (item?.T01_01N! !== "") { activity_plant += sp + item?.T01_01N!; sp = ", " }
              if (item?.T01_02N! !== "") { activity_plant += sp + item?.T01_02N!; sp = ", " }
              if (item?.T01_03N! !== "") { activity_plant += sp + item?.T01_03N!; sp = ", " }
              if (item?.T01_04N! !== "") { activity_plant += sp + item?.T01_04N!; sp = ", " }
              if (item?.T01_05N! !== "") { activity_plant += sp + item?.T01_05N!; sp = ", " }
              if (item?.T01_06N! !== "") { activity_plant += sp + item?.T01_06N!; sp = ", " }
              if (item?.T01_07N! !== "") { activity_plant += sp + item?.T01_07N!; sp = ", " }
              if (item?.T01_08N! !== "") { activity_plant += sp + item?.T01_08N!; sp = ", " }
              if (item?.T01_09N! !== "") { activity_plant += sp + item?.T01_09N!; sp = ", " }
              if (item?.T01_10N! !== "") { activity_plant += sp + item?.T01_10N!; sp = ", " }
              if (item?.T01_11N! !== "") { activity_plant += sp + item?.T01_11N!; sp = ", " }
              if (item?.T01_12N! !== "") { activity_plant += sp + item?.T01_12N!; sp = ", " }
              if (item?.T01_13N! !== "") { activity_plant += sp + item?.T01_13N!; sp = ", " }
              if (item?.T01_14N! !== "") { activity_plant += sp + item?.T01_14N!; sp = ", " }
              if (item?.T01_15N! !== "") { activity_plant += sp + item?.T01_15N!; sp = ", " }
              if (item?.T01_16N! !== "") { activity_plant += sp + item?.T01_16N!; sp = ", " }
              if (item?.T01_17N! !== "") { activity_plant += sp + item?.T01_17N!; sp = ", " }
              if (item?.T01_18N! !== "") { activity_plant += sp + item?.T01_18N!; sp = ", " }
              if (item?.T01_19N! !== "") { activity_plant += sp + item?.T01_19N!; sp = ", " }
              if (item?.T01_20N! !== "") { activity_plant += sp + item?.T01_20N!; sp = ", " }
              if (item?.T01_21N! !== "") { activity_plant += sp + item?.T01_21N!; sp = ", " }
              if (item?.T01_22N! !== "") { activity_plant += sp + item?.T01_22N!; sp = ", " }
              if (item?.T01_23N! !== "") { activity_plant += sp + item?.T01_23N!; sp = ", " }
              if (item?.T01_24N! !== "") { activity_plant += sp + item?.T01_24N!; sp = ", " }
              if (item?.T01_25N! !== "") { activity_plant += sp + item?.T01_25N!; sp = ", " }
              if (item?.T01_26N! !== "") { activity_plant += sp + item?.T01_26N!; sp = ", " }
              if (item?.T01_27N! !== "") { activity_plant += sp + item?.T01_27N!; sp = ", " }
              if (item?.T01_28N! !== "") { activity_plant += sp + item?.T01_28N!; sp = ", " }
              if (item?.T01_29N! !== "") { activity_plant += sp + item?.T01_29N!; sp = ", " }
              if (item?.T01_30N! !== "") { activity_plant += sp + item?.T01_30N!; sp = ", " }
              if (item?.T01_31N! !== "") { activity_plant += sp + item?.T01_31N!; sp = ", " }
              if (item?.T01_32N! !== "") { activity_plant += sp + item?.T01_32N!; sp = ", " }
              if (item?.T01_33N! !== "") { activity_plant += sp + item?.T01_33N!; sp = ", " }
              if (item?.T01_34N! !== "") { activity_plant += sp + item?.T01_34N!; sp = ", " }
              if (item?.T01_35N! !== "") { activity_plant += sp + item?.T01_35N!; sp = ", " }
              if (item?.T01_36N! !== "") { activity_plant += sp + item?.T01_36N!; sp = ", " }
              if (item?.T01_37N! !== "") { activity_plant += sp + item?.T01_37N!; sp = ", " }
              if (item?.T01_38N! !== "") { activity_plant += sp + item?.T01_38N!; sp = ", " }
              if (item?.T01_39N! !== "") { activity_plant += sp + item?.T01_39N!; sp = ", " }
              if (item?.T01_40N! !== "") { activity_plant += sp + item?.T01_40N!; sp = ", " }
              if (item?.T01_41N! !== "") { activity_plant += sp + item?.T01_41N!; sp = ", " }
              if (item?.T01_42N! !== "") { activity_plant += sp + item?.T01_42N!; sp = ", " }
              if (item?.T01_43N! !== "") { activity_plant += sp + item?.T01_43N!; sp = ", " }
              if (item?.T01_44N! !== "") { activity_plant += sp + item?.T01_44N!; sp = ", " }
              if (item?.T01_45N! !== "") { activity_plant += sp + item?.T01_45N!; sp = ", " }
              if (item?.T01_46N! !== "") { activity_plant += sp + item?.T01_46N!; sp = ", " }
              if (item?.T01_47N! !== "") { activity_plant += sp + item?.T01_47N!; sp = ", " }
              if (item?.T01_48N! !== "") { activity_plant += sp + item?.T01_48N!; sp = ", " }
              if (item?.T01_49N! !== "") { activity_plant += sp + item?.T01_49N!; sp = ", " }
              if (item?.T01_50N! !== "") { activity_plant += sp + item?.T01_50N!; sp = ", " }

              setInputActivity_Plant(activity_plant)
 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC02): ", err);
          });
      } catch (err) {
        console.error("ERROR (getActivity_Plant): ", err);
      }
    }
  }

  async function getActivity_Animal() {
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

              //set state
              let item: REC12Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

              let sp = "";
              let activity_animal = "";

              if (item?.T02_01N! !== "") { activity_animal += sp + item?.T02_01N!; sp = ", " }
              if (item?.T02_02N! !== "") { activity_animal += sp + item?.T02_02N!; sp = ", " }
              if (item?.T02_03N! !== "") { activity_animal += sp + item?.T02_03N!; sp = ", " }
              if (item?.T02_04N! !== "") { activity_animal += sp + item?.T02_04N!; sp = ", " }
              if (item?.T02_05N! !== "") { activity_animal += sp + item?.T02_05N!; sp = ", " }
              if (item?.T02_06N! !== "") { activity_animal += sp + item?.T02_06N!; sp = ", " }
              if (item?.T02_07N! !== "") { activity_animal += sp + item?.T02_07N!; sp = ", " }
              if (item?.T02_08N! !== "") { activity_animal += sp + item?.T02_08N!; sp = ", " }
              if (item?.T02_09N! !== "") { activity_animal += sp + item?.T02_09N!; sp = ", " }
              if (item?.T02_10N! !== "") { activity_animal += sp + item?.T02_10N!; sp = ", " }
              if (item?.T02_11N! !== "") { activity_animal += sp + item?.T02_11N!; sp = ", " }
              if (item?.T02_12N! !== "") { activity_animal += sp + item?.T02_12N!; sp = ", " }
              if (item?.T02_13N! !== "") { activity_animal += sp + item?.T02_13N!; sp = ", " }
              if (item?.T02_14N! !== "") { activity_animal += sp + item?.T02_14N!; sp = ", " }
              if (item?.T02_15N! !== "") { activity_animal += sp + item?.T02_15N!; sp = ", " }
              if (item?.T02_16N! !== "") { activity_animal += sp + item?.T02_16N!; sp = ", " }
              if (item?.T02_17N! !== "") { activity_animal += sp + item?.T02_17N!; sp = ", " }
              if (item?.T02_18N! !== "") { activity_animal += sp + item?.T02_18N!; sp = ", " }
              if (item?.T02_19N! !== "") { activity_animal += sp + item?.T02_19N!; sp = ", " }
              if (item?.T02_20N! !== "") { activity_animal += sp + item?.T02_20N!; sp = ", " }
              if (item?.T02_21N! !== "") { activity_animal += sp + item?.T02_21N!; sp = ", " }
              if (item?.T02_22N! !== "") { activity_animal += sp + item?.T02_22N!; sp = ", " }
              if (item?.T02_23N! !== "") { activity_animal += sp + item?.T02_23N!; sp = ", " }
              if (item?.T02_24N! !== "") { activity_animal += sp + item?.T02_24N!; sp = ", " }
              if (item?.T02_25N! !== "") { activity_animal += sp + item?.T02_25N!; sp = ", " }              

              setInputActivity_Animal(activity_animal)
 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC12): ", err);
          });
      } catch (err) {
        console.error("ERROR (getActivity_Animal): ", err);
      }
    }
  }

  async function getActivity_Aquaculture() {
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

              //set state
              let item: REC14Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

              let sp = "";
              let activity_animal = "";

              if (item?.T03_01N! !== "") { activity_animal += sp + item?.T03_01N!; sp = ", " }
              if (item?.T03_02N! !== "") { activity_animal += sp + item?.T03_02N!; sp = ", " }
              if (item?.T03_03N! !== "") { activity_animal += sp + item?.T03_03N!; sp = ", " }
              if (item?.T03_04N! !== "") { activity_animal += sp + item?.T03_04N!; sp = ", " }
              if (item?.T03_05N! !== "") { activity_animal += sp + item?.T03_05N!; sp = ", " }
              if (item?.T03_06N! !== "") { activity_animal += sp + item?.T03_06N!; sp = ", " }
              if (item?.T03_07N! !== "") { activity_animal += sp + item?.T03_07N!; sp = ", " }
              if (item?.T03_08N! !== "") { activity_animal += sp + item?.T03_08N!; sp = ", " }
              if (item?.T03_09N! !== "") { activity_animal += sp + item?.T03_09N!; sp = ", " }
              if (item?.T03_10N! !== "") { activity_animal += sp + item?.T03_10N!; sp = ", " }
              if (item?.T03_11N! !== "") { activity_animal += sp + item?.T03_11N!; sp = ", " }
              if (item?.T03_12N! !== "") { activity_animal += sp + item?.T03_12N!; sp = ", " }
              if (item?.T03_13N! !== "") { activity_animal += sp + item?.T03_13N!; sp = ", " }
              if (item?.T03_14N! !== "") { activity_animal += sp + item?.T03_14N!; sp = ", " }
              if (item?.T03_15N! !== "") { activity_animal += sp + item?.T03_15N!; sp = ", " }
              if (item?.T03_16N! !== "") { activity_animal += sp + item?.T03_16N!; sp = ", " }
              if (item?.T03_17N! !== "") { activity_animal += sp + item?.T03_17N!; sp = ", " }
              if (item?.T03_18N! !== "") { activity_animal += sp + item?.T03_18N!; sp = ", " }
              if (item?.T03_19N! !== "") { activity_animal += sp + item?.T03_19N!; sp = ", " }
              if (item?.T03_20N! !== "") { activity_animal += sp + item?.T03_20N!; sp = ", " }
          

              setInputActivity_Aquaculture(activity_animal)
 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC14): ", err);
          });
      } catch (err) {
        console.error("ERROR (getActivity_Aquaculture): ", err);
      }
    }
  }

  async function getLand() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //set state
              let item: REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

              let land_amount = Number(item?.A06!).toString();
              let land_area = "";
              let A07A = Number(item?.A07A!).toString();
              let A07B = Number(item?.A07B!).toString();
              let A07C = Number(item?.A07C!).toString();

              if(A07A !== "0"){
                land_area += A07A + " ไร่  ";
              }
              if(A07B !== "0"){
                land_area += A07B + " งาน  ";
              }
              if(A07C !== "0"){
                land_area += A07C + " ตารางวา ";
              }

              setInputLandAmount(land_amount)
              setInputLandArea(land_area)
 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01): ", err);
          });
      } catch (err) {
        console.error("ERROR (getLand): ", err);
      }
    }
  }

  async function getIncomeDebt() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC19/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //set state
              let item: REC19Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
          
              let income : number = 0;
              income += Number(item?.P02!) ;
              income += Number(item?.P03!) ;
              income += Number(item?.P04!) ;
              income += Number(item?.P05!) ;
              income += Number(item?.P06!) ;
              income += Number(item?.P07!) ;
              income += Number(item?.P08!) ;
              income += Number(item?.P09!) ;

              let debt : number = 0;
              debt += Number(item?.P11!) ;
              
              const options = { };
              const income_formattedNumber = income.toLocaleString('th-TH', options);
              const debt_formattedNumber = debt.toLocaleString('th-TH', options);
   
              setInputIncome(income_formattedNumber.toString())
              setInputDebt(debt_formattedNumber.toString())
 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC19): ", err);
          });
      } catch (err) {
        console.error("ERROR (getIncomeDebt): ", err);
      }
    }
  }

  async function getMember() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC20List/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //set state
              let items: REC20Info[] | undefined = JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value)
              let item: REC20Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
          
              let total : number = 0;
              let male : number = 0;
              let female : number = 0;

              total = Number(item?.Q01!);

              let malelist : REC20Info[] | undefined = items?.filter((p) => {return p.Q06 === "1" ;})
              male = malelist?.length!

              let femalelist : REC20Info[] | undefined = items?.filter((p) => {return p.Q06 === "2" ;})
              female = femalelist?.length!
     
              setInputMemberAmount(total.toString())
              setInputMemberMale(male.toString())
              setInputMemberFemale(female.toString())
 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC20List): ", err);
          });
      } catch (err) {
        console.error("ERROR (getMember): ", err);
      }
    }
  }

  async function getEnumerateSK2ImportantInformation() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getEnumerateSK2ImportantInformation/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                //set state
                let item: EnumerateSK2ImportantInformationInfo | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                setInputStatus_Name(item?.Status_Name!)
                setInputStatus_Activity(item?.Status_Activity!)
                setInputStatus_LandAmount(item?.Status_LandAmount!)
                setInputStatus_LandArea(item?.Status_LandArea!)
                setInputStatus_Income(item?.Status_Income!)
                setInputStatus_Debt(item?.Status_Debt!)
                setInputStatus_Member(item?.Status_Member!)
                setInputApprove(item?.Approve!)

                if (item?.Status_Name! === "1"
                  && item?.Status_Activity! === "1"
                  && item?.Status_LandAmount! === "1"
                  && item?.Status_LandArea! === "1"
                  && item?.Status_Income! === "1"
                  && item?.Status_Debt! === "1"
                  && item?.Status_Member! === "1"
                ) {
                  setPanel2("") //เปิด
                }
                else {
                  setPanel2("none") //ปิด
                }  
                
                //set back button
                (item?.Status_Name! === "0")? setShowBtnStatus_Name("") : setShowBtnStatus_Name("none");
                (item?.Status_Activity! === "0")? setShowBtnStatus_Activity("") : setShowBtnStatus_Activity("none");
                (item?.Status_LandAmount! === "0")? setShowBtnStatus_LandAmount("") : setShowBtnStatus_LandAmount("none");
                (item?.Status_LandArea! === "0")? setShowBtnStatus_LandArea("") : setShowBtnStatus_LandArea("none");
                (item?.Status_Income! === "0")? setShowBtnStatus_Income("") : setShowBtnStatus_Income("none");
                (item?.Status_Debt! === "0")? setShowBtnStatus_Debt("") : setShowBtnStatus_Debt("none");
                (item?.Status_Member! === "0")? setShowBtnStatus_Member("") : setShowBtnStatus_Member("none");

              }

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getEnumerateSK2ImportantInformation): ", err);
          });
      } catch (err) {
        console.error("ERROR (getEnumerateSK2ImportantInformation): ", err);
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

                let rec01: REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                setRec01(rec01)

                //การตรวจสอบข้อมูลตอนพิเศษ ถ้า A04 = 3 หรือ 4 หรือ 5 ข้ามตอนที่ 9 และ 10 การตรวจสอบข้อ 5-7 ไม่จำเป็นต้องตรวจสอบ
                if(rec01?.A04! === "3" || rec01?.A04! === "4" || rec01?.A04! === "5"){
                  setDisable_5(true)
                  setDisable_6(true)
                  setDisable_7(true)

                  setInputStatus_Income("")
                  setInputStatus_Debt("")
                  setInputStatus_Member("")
                }
                else{
                  setDisable_5(false)
                  setDisable_6(false)
                  setDisable_7(false)
                }

              }                            

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List on ESpecialX): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC01List on ESpecialX): ", err);
      }
    }
  }


  //state show / hide
  const [showBtnStatus_Name, setShowBtnStatus_Name] = useState<string>("none"); // ปิด
  const [showBtnStatus_Activity, setShowBtnStatus_Activity] = useState<string>("none"); // ปิด
  const [showBtnStatus_LandAmount, setShowBtnStatus_LandAmount] = useState<string>("none"); // ปิด
  const [showBtnStatus_LandArea, setShowBtnStatus_LandArea] = useState<string>("none"); // ปิด
  const [showBtnStatus_Income, setShowBtnStatus_Income] = useState<string>("none"); // ปิด
  const [showBtnStatus_Debt, setShowBtnStatus_Debt] = useState<string>("none"); // ปิด
  const [showBtnStatus_Member, setShowBtnStatus_Member] = useState<string>("none"); // ปิด

  const Status_NameOnchange = (event: any) => {
    setInputStatus_Name(event.currentTarget.value);

    if(event.currentTarget.value === "0"){
      setShowBtnStatus_Name("") //เปิด 
    }else{      
      setShowBtnStatus_Name("none") //ปิด 
    }

    if (rec01?.A04 === "3" || rec01?.A04 === "4" || rec01?.A04 === "5") {
      //แบบที่ไม่ใช่ครัวเรือน
      if (
        event.currentTarget.value === "1" &&
        inputStatus_Activity === "1" &&
        inputStatus_LandAmount === "1" &&
        inputStatus_LandArea === "1" 
      ) {
        setPanel2("");
      } else {
        setPanel2("none");
      }
    }else{
      //แบบครัวเรือน
      if (
        event.currentTarget.value === "1" &&
        inputStatus_Activity === "1" &&
        inputStatus_LandAmount === "1" &&
        inputStatus_LandArea === "1" &&
        inputStatus_Income === "1" &&
        inputStatus_Debt === "1" &&
        inputStatus_Member === "1"
      ) {
        setPanel2("");
      } else {
        setPanel2("none");
      }
    }

    
  };

  const Status_ActivityOnchange = (event: any) => {
    setInputStatus_Activity(event.currentTarget.value);

    if(event.currentTarget.value === "0"){
      setShowBtnStatus_Activity("") //เปิด 
    }else{      
      setShowBtnStatus_Activity("none") //ปิด 
    }

    if (rec01?.A04 === "3" || rec01?.A04 === "4" || rec01?.A04 === "5") {
      //แบบที่ไม่ใช่ครัวเรือน
      if (
        inputStatus_Name === "1" &&
        event.currentTarget.value === "1" &&
        inputStatus_LandAmount === "1" &&
        inputStatus_LandArea === "1"
      ) {
        setPanel2("");
      } else {
        setPanel2("none");
      }
    }else{
      //แบบครัวเรือน
      if (
        inputStatus_Name === "1" &&
        event.currentTarget.value === "1" &&
        inputStatus_LandAmount === "1" &&
        inputStatus_LandArea === "1" &&
        inputStatus_Income === "1" &&
        inputStatus_Debt === "1" &&
        inputStatus_Member === "1"
      ) {
        setPanel2("");
      } else {
        setPanel2("none");
      }
    }

    
  };

  const Status_LandAmountOnchange = (event: any) => {
    setInputStatus_LandAmount(event.currentTarget.value);

    if(event.currentTarget.value === "0"){
      setShowBtnStatus_LandAmount("") //เปิด 
    }else{      
      setShowBtnStatus_LandAmount("none") //ปิด 
    }

    if (rec01?.A04 === "3" || rec01?.A04 === "4" || rec01?.A04 === "5") {
      //แบบที่ไม่ใช่ครัวเรือน
      if (
        inputStatus_Name === "1" &&
        inputStatus_Activity === "1" &&
        event.currentTarget.value === "1" &&
        inputStatus_LandArea === "1"
      ) {
        setPanel2("");
      } else {
        setPanel2("none");
      }
    }else{
      //แบบครัวเรือน
      if (
        inputStatus_Name === "1" &&
        inputStatus_Activity === "1" &&
        event.currentTarget.value === "1" &&
        inputStatus_LandArea === "1" &&
        inputStatus_Income === "1" &&
        inputStatus_Debt === "1" &&
        inputStatus_Member === "1"
      ) {
        setPanel2("");
      } else {
        setPanel2("none");
      }
    }

    
  };

  const Status_LandAreaOnchange = (event: any) => {
    setInputStatus_LandArea(event.currentTarget.value);

    if(event.currentTarget.value === "0"){
      setShowBtnStatus_LandArea("") //เปิด 
    }else{      
      setShowBtnStatus_LandArea("none") //ปิด 
    }

    if (rec01?.A04 === "3" || rec01?.A04 === "4" || rec01?.A04 === "5") {
      //แบบที่ไม่ใช่ครัวเรือน
      if (
        inputStatus_Name === "1" &&
        inputStatus_Activity === "1" &&
        inputStatus_LandAmount === "1" &&
        event.currentTarget.value === "1" 
      ) {
        setPanel2("");
      } else {
        setPanel2("none");
      }
    }else{
      //แบบครัวเรือน
      if (
        inputStatus_Name === "1" &&
        inputStatus_Activity === "1" &&
        inputStatus_LandAmount === "1" &&
        event.currentTarget.value === "1" &&
        inputStatus_Income === "1" &&
        inputStatus_Debt === "1" &&
        inputStatus_Member === "1"
      ) {
        setPanel2("");
      } else {
        setPanel2("none");
      }
    }

    
  };

  const Status_IncomeOnchange = (event: any) => {
    setInputStatus_Income(event.currentTarget.value);

    if(event.currentTarget.value === "0"){
      setShowBtnStatus_Income("") //เปิด 
    }else{      
      setShowBtnStatus_Income("none") //ปิด 
    }

    if (
      inputStatus_Name === "1" &&
      inputStatus_Activity === "1" &&
      inputStatus_LandAmount === "1" &&
      inputStatus_LandArea === "1" &&
      event.currentTarget.value === "1" &&
      inputStatus_Debt === "1" &&
      inputStatus_Member === "1"
    ) {
      setPanel2("");
    } else {
      setPanel2("none");
    }
  };

  const Status_DebtOnchange = (event: any) => {
    setInputStatus_Debt(event.currentTarget.value);

    if(event.currentTarget.value === "0"){
      setShowBtnStatus_Debt("") //เปิด 
    }else{      
      setShowBtnStatus_Debt("none") //ปิด 
    }

    if (
      inputStatus_Name === "1" &&
      inputStatus_Activity === "1" &&
      inputStatus_LandAmount === "1" &&
      inputStatus_LandArea === "1" &&
      inputStatus_Income === "1" &&
      event.currentTarget.value === "1" &&
      inputStatus_Member === "1"
    ) {
      setPanel2("");
    } else {
      setPanel2("none");
    }
  };

  const Status_MemberOnchange = (event: any) => {
    setInputStatus_Member(event.currentTarget.value);

    if(event.currentTarget.value === "0"){
      setShowBtnStatus_Member("") //เปิด 
    }else{      
      setShowBtnStatus_Member("none") //ปิด 
    }

    if (
      inputStatus_Name === "1" &&
      inputStatus_Activity === "1" &&
      inputStatus_LandAmount === "1" &&
      inputStatus_LandArea === "1" &&
      inputStatus_Income === "1" &&
      inputStatus_Debt === "1" &&
      event.currentTarget.value === "1"
    ) {
      setPanel2("");
    } else {
      setPanel2("none");
    }
  };

  const ApproveOnChange = (event: any) => {
    setInputApprove(event.target.checked === true ? "1" : "0");
  };




  const ConfirmSave = async () => {
    let validate: boolean = false;
    console.log("rec01?.A04",rec01?.A04);
    

    if (rec01?.A04 === "3" || rec01?.A04 === "4" || rec01?.A04 === "5") {
      //แบบที่ไม่ใช่ครัวเรือน
      if (inputApprove === "1"
        && inputStatus_Name! === "1"
        && inputStatus_Activity! === "1"
        && inputStatus_LandAmount! === "1"
        && inputStatus_LandArea! === "1"
      ) {
        validate = true;
      }

      if (validate) {
        setTitleModal("แบบแจงนับ สก.2");
        setMsgModal(
          `ท่านได้ตรวจสอบและยืนยันข้อมูลแล้ว ถูกต้องตรงตามความเป็นจริงใช่หรือไม่? กดปุ่ม "ยืนยัน" เพื่อทำรายการเสร็จสมบูรณ์ หรือกดปุ่ม "ยกเลิก" เพื่อกลับไปแก้ไขข้อมูล`
        );
        handleShow();
      }
      else {
        //แจ้งเตือนว่ายังไม่ถูกต้องทั้งหมด
      }
    }
    else {
      //แบบครัวเรือน
      if (inputApprove === "1"
        && inputStatus_Name! === "1"
        && inputStatus_Activity! === "1"
        && inputStatus_LandAmount! === "1"
        && inputStatus_LandArea! === "1"
        && inputStatus_Income! === "1"
        && inputStatus_Debt! === "1"
        && inputStatus_Member! === "1"
      ) {
        validate = true;
      }

      if (validate) {
        setTitleModal("แบบแจงนับ สก.2");
        setMsgModal(
          `ท่านได้ตรวจสอบและยืนยันข้อมูลแล้ว ถูกต้องตรงตามความเป็นจริงใช่หรือไม่? กดปุ่ม "ยืนยัน" เพื่อทำรายการเสร็จสมบูรณ์ หรือกดปุ่ม "ยกเลิก" เพื่อกลับไปแก้ไขข้อมูล`
        );
        handleShow();
      }
      else {
        //แจ้งเตือนว่ายังไม่ถูกต้องทั้งหมด
      }

    }

    
  };

  const SaveOnClick = async () => {
    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      name: inputName,
      activity_Plant: inputActivity_Plant,
      activity_Animal: inputActivity_Animal,
      activity_Aquaculture: inputActivity_Aquaculture,
      landAmount: inputLandAmount,
      landArea: inputLandArea,
      income: inputIncome,
      debt: inputDebt,
      memberAmount: inputMemberAmount,
      memberMale: inputMemberMale,
      memberFemale: inputMemberFemale,
      status_Name: inputStatus_Name,
      status_Activity: inputStatus_Activity,
      status_LandAmount: inputStatus_LandAmount,
      status_LandArea: inputStatus_LandArea,
      status_Income: inputStatus_Income,
      status_Debt: inputStatus_Debt,
      status_Member: inputStatus_Member,
      approve: "1"
    };

    let url_enumerate_api: string = "";
    if (process.env.REACT_APP_ENUMERATE_API) {
      url_enumerate_api =
        process.env.REACT_APP_ENUMERATE_API +
        "/Enumerate2/insertEnumerateSK2ImportantInformation";
    }

    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;

      const headers = {
        Authorization: "Basic " + auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      await axios
        .post(url_enumerate_api, JSON.stringify(body), {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data) {
              //popup success

              GotoMain()

            }
          }
        })
        .catch((err) => {
          console.error("AXIOS ERROR: ", err);
          //setPage(page + 1);
        });
    }
  };

  //action : link
  function GotoMain() {

    if(userInfo?.roleId === 9){
      //สำหรับพนักงานแจงนับ
      navigate("/ownerList");
    }
    else if(userInfo?.roleId === 10){
      //สำหรับผู้ตอบข้อมูลเอง
      window.location.href = process.env.REACT_APP_PORTAL + "/main";
    }
    else{
      //สำหรับสิทธิ์อื่นๆ
      navigate("/ownerList");
    }

    
  }

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [msgModal, setMsgModal] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    ตอนพิเศษ แสดงรายการข้อมูลสำคัญ
                    </h5>
                  </Col>

                  <Col md={8} className="col-2 ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseControls2x"
                      aria-expanded="false"
                      aria-controls="collapseControls2x"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row className="collapse show" id="collapseControls2x">
                  <Col md={12}>
                    <Row className="mt-2 question-title">
                      <Col md={12}>
                        <label style={{ fontWeight: "bold" }}>
                        ระบบแสดงรายการข้อมูลสำคัญของที่ถือครองนี้ เพื่อตรวจสอบข้อมูล
                        </label>
                      </Col>
                    </Row>
  
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          1. ชื่อผู้ถือครองทำการเกษตร{" "}
                          <span className="text-primary fw-bold">{inputName}</span>
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_1"
                              type="radio"
                              value="1"
                              id="SP2_1_1"
                              onChange={Status_NameOnchange}
                              checked={"1" === inputStatus_Name}
                              disabled={disable2}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_1_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_1"
                              type="radio"
                              value="0"
                              id="SP2_1_2"
                              onChange={Status_NameOnchange}
                              checked={"0" === inputStatus_Name}
                              disabled={disable2}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_1_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(1)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Name }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>2. กิจกรรมการเกษตรที่ทำ</label>
                        <div>
                          <p style={{ textIndent: "30px" }}>
                            พืชที่ปลูกได้แก่{" "}
                            <span className="text-primary fw-bold">
                              {inputActivity_Plant}
                            </span>
                          </p>
                          <br />
                          <p style={{ textIndent: "30px" }}>
                            สัตว์ที่เลี้ยงได้แก่{" "}
                            <span className="text-primary fw-bold">
                              {inputActivity_Animal}
                            </span>
                          </p>
                          <br />
                          <p style={{ textIndent: "30px" }}>
                            สัตว์น้ำที่เพาะเลี้ยง ได้แก่{" "}
                            <span className="text-primary fw-bold">
                              {inputActivity_Aquaculture}
                            </span>
                          </p>
                        </div>
                        <label></label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_5"
                              type="radio"
                              value="1"
                              id="SP2_5_1"
                              onChange={Status_ActivityOnchange}
                              checked={"1" === inputStatus_Activity}
                              disabled={disable2}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_5_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_5"
                              type="radio"
                              value="0"
                              id="SP2_5_2"
                              onChange={Status_ActivityOnchange}
                              checked={"0" === inputStatus_Activity}
                              disabled={disable2}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_5_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(1)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Activity }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          3. จำนวนผืนที่{" "}
                          <span className="text-primary fw-bold">
                            {inputLandAmount}
                          </span>{" ผืน "}
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SPLandAmount"
                              type="radio"
                              value="1"
                              id="SPLandAmount_1"
                              onChange={Status_LandAmountOnchange}
                              checked={"1" === inputStatus_LandAmount}
                              disabled={disable2}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SPLandAmount_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SPLandAmount"
                              type="radio"
                              value="0"
                              id="SPLandAmount_2"
                              onChange={Status_LandAmountOnchange}
                              checked={"0" === inputStatus_LandAmount}
                              disabled={disable2}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SPLandAmount_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(2)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_LandAmount }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          4. เนื้อที่ถือครองทั้งสิ้น{" "}
                          <span className="text-primary fw-bold">{inputLandArea}</span>{" "}
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_3"
                              type="radio"
                              value="1"
                              id="SP2_3_1"
                              onChange={Status_LandAreaOnchange}
                              checked={"1" === inputStatus_LandArea}
                              disabled={disable2}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_3_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_3"
                              type="radio"
                              value="0"
                              id="SP2_3_2"
                              onChange={Status_LandAreaOnchange}
                              checked={"0" === inputStatus_LandArea}
                              disabled={disable2}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_3_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(2)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_LandArea }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                        5. รายได้ทางการเกษตรทั้งสิ้น{" "}
                          <span className="text-primary fw-bold">{inputIncome}</span>  บาท
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_4"
                              type="radio"
                              value="1"
                              id="SP2_4_1"
                              onChange={Status_IncomeOnchange}
                              checked={"1" === inputStatus_Income}
                              disabled={disable2 || disable_5}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_4_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_4"
                              type="radio"
                              value="0"
                              id="SP2_4_2"
                              onChange={Status_IncomeOnchange}
                              checked={"0" === inputStatus_Income}
                              disabled={disable2 || disable_5}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_4_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(22)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Income }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    

                    <hr />
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          6. การมีหนี้สิน{" "}
                          <span className="text-primary fw-bold">{inputDebt}</span>  บาท
                        </label>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_7"
                              type="radio"
                              value="1"
                              id="SP2_7_1"
                              onChange={Status_DebtOnchange}
                              checked={"1" === inputStatus_Debt}
                              disabled={disable2 || disable_6}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_7_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_7"
                              type="radio"
                              value="0"
                              id="SP2_7_2"
                              onChange={Status_DebtOnchange}
                              checked={"0" === inputStatus_Debt}
                              disabled={disable2 || disable_6}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_7_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(22)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Debt }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>

                    <hr />                    
                    <Row className="mt-4">
                      <Col md={5}>
                        <label>
                          7. จำนวนสมาชิกในครัวเรือนทั้งสิ้น{" "}
                          <span className="text-primary fw-bold">
                            {inputMemberAmount}
                          </span>{" "}
                          คน
                        </label>
                        <div>
                          <p style={{ textIndent: "30px" }}>
                            เพศชาย{" "}
                            <span className="text-primary fw-bold">
                              {inputMemberMale}
                            </span>{" "}
                            คน
                          </p>
                          <p style={{ textIndent: "30px" }}>
                            เพศหญิง{" "}
                            <span className="text-primary fw-bold">
                              {inputMemberFemale}
                            </span>{" "}
                            คน
                          </p>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_6"
                              type="radio"
                              value="1"
                              id="SP2_6_1"
                              onChange={Status_MemberOnchange}
                              checked={"1" === inputStatus_Member}
                              disabled={disable2 || disable_7}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_6_1"
                            >
                              ถูกต้อง
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="SP2_6"
                              type="radio"
                              value="0"
                              id="SP2_6_2"
                              onChange={Status_MemberOnchange}
                              checked={"0" === inputStatus_Member}
                              disabled={disable2 || disable_7}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SP2_6_2"
                            >
                              ไม่ถูกต้อง (กลับไปแก้ไขข้อมูล)
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <button
                          onClick={() => setPage(23)}
                          type="button"
                          className="btn btn-secondary me-2"
                          style={{ display: showBtnStatus_Member }}
                        >
                          กลับไปแก้ไขข้อมูล
                        </button>
                      </Col>
                    </Row>
                    

                    <Row style={{ display: panel2 }}>
                      <Col md={12}>
                        <Row className="mt-2 question-title">
                          <Col md={12}>
                            <label style={{ fontWeight: "bold" }}>
                              แสดงหลักฐานการตรวจสอบข้อมูลของผู้ถือครองทำการเกษตร
                            </label>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col md={10}>
                            <div className="form-group">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="SP2_8"
                                  onChange={ApproveOnChange}
                                  checked={inputApprove === "1" ? true : false}
                                  disabled={disable2}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="SP2_8"
                                >
                                  {" "}
                                  ผู้ถือครองทำการเกษตรได้ตรวจสอบและยืนยันข้อมูลแล้ว ถูกต้องตรงตามความเป็นจริง
                                </label>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    {/* <Row
                      style={{
                        display:
                          process.env.REACT_APP_PROJECT === "open"
                            ? userInfo?.roleId === 9
                              ? "none"
                              : ""
                            : "none",
                      }}
                    >
                      <Col md={12}>
                        <Row className="mt-2 question-title">
                          <Col md={12}>
                            <label style={{ fontWeight: "bold" }}>
                              การตรวจสอบข้อมูลของผู้ถือครองทำการเกษตร
                            </label>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col md={10}>
                            <div className="form-group">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="SP2_8"
                                  onChange={ApproveOnChange}
                                  checked={inputApprove === "1" ? true : false}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="SP2_8"
                                >
                                  {" "}
                                  เจ้าหน้าที่วิชาการได้ตรวจสอบและยืนยันข้อมูลแล้ว
                                  ถูกต้องตรงตามความเป็นจริง
                                </label>
                              </div>

                              <button
                                type="button"
                                className="btn btn-primary mt-2"
                              >
                                บันทึกผลการตรวจสอบ
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row> */}

                    {/* <Row
                      style={{
                        display:
                          process.env.REACT_APP_PROJECT === "open"
                            ? userInfo?.roleId === 9
                              ? "none"
                              : ""
                            : "none",
                      }}
                    >
                      <Col md={12}>
                        <Row className="mt-2 question-title">
                          <Col md={12}>
                            <label style={{ fontWeight: "bold" }}>
                              การตรวจสอบข้อมูลของผู้ถือครองทำการเกษตร
                            </label>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col md={10}>
                            <div className="form-group">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="SP2_8"
                                  onChange={ApproveOnChange}
                                  checked={inputApprove === "1" ? true : false}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="SP2_8"
                                >
                                  {" "}
                                  ผู้ประสานงานในพื้นที่ได้ตรวจสอบและยืนยันข้อมูลแล้ว
                                  ถูกต้องตรงตามความเป็นจริง
                                </label>
                              </div>

                              <button
                                type="button"
                                className="btn btn-primary mt-2"
                              >
                                บันทึกผลการตรวจสอบ
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row> */}

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
                  <a
                    href={
                      userInfo?.roleId === 9 ? process.env.PUBLIC_URL + "/ownerList" : 
                      userInfo?.roleId === 10 ? process.env.REACT_APP_PORTAL + "/main" : 
                      process.env.PUBLIC_URL + "/list"
                    }
                    type="button"
                    className="btn btn-outline-secondary me-2"
                    style={{
                      display:
                        process.env.REACT_APP_PROJECT === "open"
                          ? userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                            ? ""
                            : "none"
                          : "",
                    }}
                  >
                    หน้ารายการ
                  </a>

                  <button
                    onClick={() => setPage(page - 1)}
                    type="button"
                    className="btn btn-outline-secondary me-2"
                  >
                    กลับ
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-primary"                    
                  >
                    บันทึกผลแจงนับ
                  </button> */}

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => ConfirmSave()}
                    style={{
                      display:
                        process.env.REACT_APP_PROJECT === "open"
                          ? userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                            ? "none"
                            : ""
                          : "none",
                    }}
                  >
                    บันทึกผลแจงนับ
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
                <h5 style={{ lineHeight: "unset" }}>{msgModal}</h5>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              ยกเลิก
            </Button>
            <Button variant="primary" onClick={() => SaveOnClick()}>
              ยืนยัน
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
