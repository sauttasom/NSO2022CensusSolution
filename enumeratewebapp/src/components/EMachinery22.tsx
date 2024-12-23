import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01, _N01, _N26 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC17Info } from "../model/REC17Info";

export default function EMachinery22() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : REC17
  const [REC17, setREC17] = useState<REC17Info>();

  //state : input
  const [inputN26, setInputN26] = useState<string>("");

  const [inputN27_1, setInputN27_1] = useState<string>("");
  const [inputN27_2, setInputN27_2] = useState<string>("");
  const [inputN27_3, setInputN27_3] = useState<string>("");
  const [inputN27_4, setInputN27_4] = useState<string>("");
  const [inputN27_5, setInputN27_5] = useState<string>("");
  const [inputN27_6, setInputN27_6] = useState<string>("");
  const [inputN27_7, setInputN27_7] = useState<string>("");
  const [inputN27_8, setInputN27_8] = useState<string>("");
  const [inputN27_9, setInputN27_9] = useState<string>("");

  const [inputN28_1, setInputN28_1] = useState<string>("");
  const [inputN28_2, setInputN28_2] = useState<string>("");
  const [inputN28_3, setInputN28_3] = useState<string>("");
  const [inputN28_4, setInputN28_4] = useState<string>("");
  const [inputN28_5, setInputN28_5] = useState<string>("");
  const [inputN28_6, setInputN28_6] = useState<string>("");
  const [inputN28_7, setInputN28_7] = useState<string>("");
  const [inputN28_8, setInputN28_8] = useState<string>("");
  const [inputN28_9, setInputN28_9] = useState<string>("");

  const [inputN29_1, setInputN29_1] = useState<string>("");
  const [inputN29_2, setInputN29_2] = useState<string>("");
  const [inputN29_3, setInputN29_3] = useState<string>("");
  const [inputN29_4, setInputN29_4] = useState<string>("");
  const [inputN29_5, setInputN29_5] = useState<string>("");
  const [inputN29_6, setInputN29_6] = useState<string>("");
  const [inputN29_7, setInputN29_7] = useState<string>("");
  const [inputN29_8, setInputN29_8] = useState<string>("");
  const [inputN29_9, setInputN29_9] = useState<string>("");

  const [inputN30_1, setInputN30_1] = useState<string>("");
  const [inputN30_2, setInputN30_2] = useState<string>("");
  const [inputN30_3, setInputN30_3] = useState<string>("");
  const [inputN30_4, setInputN30_4] = useState<string>("");
  const [inputN30_5, setInputN30_5] = useState<string>("");
  const [inputN30_6, setInputN30_6] = useState<string>("");
  const [inputN30_7, setInputN30_7] = useState<string>("");
  const [inputN30_8, setInputN30_8] = useState<string>("");
  const [inputN30_9, setInputN30_9] = useState<string>("");

  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {

    console.log("load page EMachinery22");

    getREC17()

    setShowWarningN26Blank("none")
    setShowWarningN26("none")

  }, [page === 19]);

  async function getREC17() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC17/" + enumeratesk2?.AH_CODE;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                //set state
                let item: REC17Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)
                setREC17(item)

                setInputN26(item?.N26!)

                //เซตให้ครบทุกฟิลดิ์ด้วยนะ ในตอนที่ 7-2 นี้เซต N27 ถึง N30 พอ
                setInputN27_1(item?.N27_1!)
                setInputN27_2(item?.N27_2!)
                setInputN27_3(item?.N27_3!)
                setInputN27_4(item?.N27_4!)
                setInputN27_5(item?.N27_5!)
                setInputN27_6(item?.N27_6!)
                setInputN27_7(item?.N27_7!)
                setInputN27_8(item?.N27_8!)
                setInputN27_9(item?.N27_9! !== "" ? Number(item?.N27_9!).toString() : "")

                setInputN28_1(item?.N28_1!)
                setInputN28_2(item?.N28_2!)
                setInputN28_3(item?.N28_3!)
                setInputN28_4(item?.N28_4!)
                setInputN28_5(item?.N28_5!)
                setInputN28_6(item?.N28_6!)
                setInputN28_7(item?.N28_7!)
                setInputN28_8(item?.N28_8!)
                setInputN28_9(item?.N28_9! !== "" ? Number(item?.N28_9!).toString() : "")

                setInputN29_1(item?.N29_1!)
                setInputN29_2(item?.N29_2!)
                setInputN29_3(item?.N29_3!)
                setInputN29_4(item?.N29_4!)
                setInputN29_5(item?.N29_5!)
                setInputN29_6(item?.N29_6!)
                setInputN29_7(item?.N29_7!)
                setInputN29_8(item?.N29_8!)
                setInputN29_9(item?.N29_9! !== "" ? Number(item?.N29_9!).toString() : "")

                setInputN30_1(item?.N30_1!)
                setInputN30_2(item?.N30_2!)
                setInputN30_3(item?.N30_3!)
                setInputN30_4(item?.N30_4!)
                setInputN30_5(item?.N30_5!)
                setInputN30_6(item?.N30_6!)
                setInputN30_7(item?.N30_7!)
                setInputN30_8(item?.N30_8!)
                setInputN30_9(item?.N30_9! !== "" ? Number(item?.N30_9!).toString() : "")

                //panel
                if (item?.N26! === "0" || item?.N26! === "") {
                  setIsPanel2_2("none") //ปิด
                }
                else {
                  setIsPanel2_2("") //เปิด
                }

              }

              

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC17 7-2): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC17 7-2): ", err);
      }
    }
  }



  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("ชนิดของอุปกรณ์การขนส่งเพื่อการเกษตร");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  //modal popup 27
  const [show27, setShow27] = useState(false);
  const [titleModal27, setTitleModal27] = useState("1. รถบรรทุก 4 ล้อ");
  const handleClose27 = () => {
    //reset value
    setInputN27_1(REC17?.N27_1!)
    setInputN27_2(REC17?.N27_2!)
    setInputN27_3(REC17?.N27_3!)
    setInputN27_4(REC17?.N27_4!)
    setInputN27_5(REC17?.N27_5!)
    setInputN27_6(REC17?.N27_6!)
    setInputN27_7(REC17?.N27_7!)
    setInputN27_8(REC17?.N27_8!)
    setInputN27_9(REC17?.N27_9! !== "" ? Number(REC17?.N27_9!).toString() : "")
    setShow27(false)
  }
  const handleShow27 = () => setShow27(true);

  //modal popup 28
  const [show28, setShow28] = useState(false);
  const [titleModal28, setTitleModal28] = useState("2. รถบรรทุก 6 ล้อขึ้นไป");
  const handleClose28 = () => {
    //reset value
    setInputN28_1(REC17?.N28_1!)
    setInputN28_2(REC17?.N28_2!)
    setInputN28_3(REC17?.N28_3!)
    setInputN28_4(REC17?.N28_4!)
    setInputN28_5(REC17?.N28_5!)
    setInputN28_6(REC17?.N28_6!)
    setInputN28_7(REC17?.N28_7!)
    setInputN28_8(REC17?.N28_8!)
    setInputN28_9(REC17?.N28_9! !== "" ? Number(REC17?.N28_9!).toString() : "")
    setShow28(false)
  }
  const handleShow28 = () => setShow28(true);

  //modal popup 29
  const [show29, setShow29] = useState(false);
  const [titleModal29, setTitleModal29] = useState("3. เรือ");
  const handleClose29 = () => {
    //reset value
    setInputN29_1(REC17?.N29_1!)
    setInputN29_2(REC17?.N29_2!)
    setInputN29_3(REC17?.N29_3!)
    setInputN29_4(REC17?.N29_4!)
    setInputN29_5(REC17?.N29_5!)
    setInputN29_6(REC17?.N29_6!)
    setInputN29_7(REC17?.N29_7!)
    setInputN29_8(REC17?.N29_8!)
    setInputN29_9(REC17?.N29_9! !== "" ? Number(REC17?.N29_9!).toString() : "")
    setShow29(false)
  }
  const handleShow29 = () => setShow29(true);

  //modal popup 30
  const [show30, setShow30] = useState(false);
  const [titleModal30, setTitleModal30] = useState("4. รถเกษตรกร");
  const handleClose30 = () => {
    //reset value
    setInputN30_1(REC17?.N30_1!)
    setInputN30_2(REC17?.N30_2!)
    setInputN30_3(REC17?.N30_3!)
    setInputN30_4(REC17?.N30_4!)
    setInputN30_5(REC17?.N30_5!)
    setInputN30_6(REC17?.N30_6!)
    setInputN30_7(REC17?.N30_7!)
    setInputN30_8(REC17?.N30_8!)
    setInputN30_9(REC17?.N30_9! !== "" ? Number(REC17?.N30_9!).toString() : "")
    setShow30(false)
  }
  const handleShow30 = () => setShow30(true);


  //state : disabled
  const [disabledN27, setDisabledN27] = useState<boolean>(false);
  const [disabledN28, setDisabledN28] = useState<boolean>(false);
  const [disabledN29, setDisabledN29] = useState<boolean>(false);
  const [disabledN30, setDisabledN30] = useState<boolean>(false);

  //state : disabled
  const [disabledN27_7, setDisabledN27_7] = useState<boolean>(false);
  const [disabledN27_8, setDisabledN27_8] = useState<boolean>(false);
  const [disabledN27_9, setDisabledN27_9] = useState<boolean>(false);

  const [disabledN28_7, setDisabledN28_7] = useState<boolean>(false);
  const [disabledN28_8, setDisabledN28_8] = useState<boolean>(false);
  const [disabledN28_9, setDisabledN28_9] = useState<boolean>(false);

  const [disabledN29_7, setDisabledN29_7] = useState<boolean>(false);
  const [disabledN29_8, setDisabledN29_8] = useState<boolean>(false);
  const [disabledN29_9, setDisabledN29_9] = useState<boolean>(false);

  const [disabledN30_7, setDisabledN30_7] = useState<boolean>(false);
  const [disabledN30_8, setDisabledN30_8] = useState<boolean>(false);
  const [disabledN30_9, setDisabledN30_9] = useState<boolean>(false);

  //state warning
  const [showWarningN27_2_6, setShowWarningN27_2_6] = useState<string>("none"); // ปิด
  const [showWarningN27_7_8, setShowWarningN27_7_8] = useState<string>("none"); // ปิด
  const [showWarningN27_9, setShowWarningN27_9] = useState<string>("none"); // ปิด
  const [showWarningN28_2_6, setShowWarningN28_2_6] = useState<string>("none"); // ปิด
  const [showWarningN28_7_8, setShowWarningN28_7_8] = useState<string>("none"); // ปิด
  const [showWarningN28_9, setShowWarningN28_9] = useState<string>("none"); // ปิด
  const [showWarningN29_2_6, setShowWarningN29_2_6] = useState<string>("none"); // ปิด
  const [showWarningN29_7_8, setShowWarningN29_7_8] = useState<string>("none"); // ปิด
  const [showWarningN29_9, setShowWarningN29_9] = useState<string>("none"); // ปิด
  const [showWarningN30_2_6, setShowWarningN30_2_6] = useState<string>("none"); // ปิด
  const [showWarningN30_7_8, setShowWarningN30_7_8] = useState<string>("none"); // ปิด
  const [showWarningN30_9, setShowWarningN30_9] = useState<string>("none"); // ปิด
  

  const OpenModalItem27 = () => {
    if(inputN27_1 === "1"){
      setDisabledN27(false)
      if(inputN27_2 === "1"){
        setDisabledN27_7(false)
        setDisabledN27_8(false)
        setDisabledN27_9(false)
      }
      else{
        setDisabledN27_7(true)
        setDisabledN27_8(true)
        setDisabledN27_9(true)
      }
    }
    else{
      setDisabledN27(true)
    }

    setShowWarningN27_2_6("none")
    setShowWarningN27_7_8("none")
    setShowWarningN27_9("none")
    handleShow27()
  };

  const OpenModalItem28 = () => {
    if(inputN28_1 === "1"){
      setDisabledN28(false)
      if(inputN28_2 === "1"){
        setDisabledN28_7(false)
        setDisabledN28_8(false)
        setDisabledN28_9(false)
      }
      else{
        setDisabledN28_7(true)
        setDisabledN28_8(true)
        setDisabledN28_9(true)
      }
    }
    else{
      setDisabledN28(true)
    }

    setShowWarningN28_2_6("none")
    setShowWarningN28_7_8("none")
    setShowWarningN28_9("none")
    handleShow28()
  };

  const OpenModalItem29 = () => {
    if(inputN29_1 === "1"){
      setDisabledN29(false)
      if(inputN29_2 === "1"){
        setDisabledN29_7(false)
        setDisabledN29_8(false)
        setDisabledN29_9(false)
      }
      else{
        setDisabledN29_7(true)
        setDisabledN29_8(true)
        setDisabledN29_9(true)
      }
    }
    else{
      setDisabledN29(true)
    }

    setShowWarningN29_2_6("none")
    setShowWarningN29_7_8("none")
    setShowWarningN29_9("none")
    handleShow29()
  };

  const OpenModalItem30 = () => {
    if(inputN30_1 === "1"){
      setDisabledN30(false)
      if(inputN30_2 === "1"){
        setDisabledN30_7(false)
        setDisabledN30_8(false)
        setDisabledN30_9(false)
      }
      else{
        setDisabledN30_7(true)
        setDisabledN30_8(true)
        setDisabledN30_9(true)
      }
    }
    else{
      setDisabledN30(true)
    }

    setShowWarningN30_2_6("none")
    setShowWarningN30_7_8("none")
    setShowWarningN30_9("none")
    handleShow30()
  };



  //state : panel
  const [isPanel2_2, setIsPanel2_2] = useState<string>("none"); //ปิด

  //action : input
  const N26OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN26(event.target.value)

    //ถ้า N26 = 0 แล้ว N27 - N30 = blank --> ข้ามไปถาม ข้อที่ 3 , page = 20
    if (event.target.value === "0") {
      setIsPanel2_2("none") //ปิด

      setInputN27_1("");
      setInputN27_2("");
      setInputN27_3("");
      setInputN27_4("");
      setInputN27_5("");
      setInputN27_6("");
      setInputN27_7("");
      setInputN27_8("");
      setInputN27_9("");

      setInputN28_1("");
      setInputN28_2("");
      setInputN28_3("");
      setInputN28_4("");
      setInputN28_5("");
      setInputN28_6("");
      setInputN28_7("");
      setInputN28_8("");
      setInputN28_9("");

      setInputN29_1("");
      setInputN29_2("");
      setInputN29_3("");
      setInputN29_4("");
      setInputN29_5("");
      setInputN29_6("");
      setInputN29_7("");
      setInputN29_8("");
      setInputN29_9("");

      setInputN30_1("");
      setInputN30_2("");
      setInputN30_3("");
      setInputN30_4("");
      setInputN30_5("");
      setInputN30_6("");
      setInputN30_7("");
      setInputN30_8("");
      setInputN30_9("");

    }
    else {
      setIsPanel2_2("") //เปิด

      setInputN27_1("0");
      setInputN27_2("0");
      setInputN27_3("0");
      setInputN27_4("0");
      setInputN27_5("0");
      setInputN27_6("0");
      setInputN27_7("0");
      setInputN27_8("0");
      setInputN27_9("");

      setInputN28_1("0");
      setInputN28_2("0");
      setInputN28_3("0");
      setInputN28_4("0");
      setInputN28_5("0");
      setInputN28_6("0");
      setInputN28_7("0");
      setInputN28_8("0");
      setInputN28_9("");

      setInputN29_1("0");
      setInputN29_2("0");
      setInputN29_3("0");
      setInputN29_4("0");
      setInputN29_5("0");
      setInputN29_6("0");
      setInputN29_7("0");
      setInputN29_8("0");
      setInputN29_9("");

      setInputN30_1("0");
      setInputN30_2("0");
      setInputN30_3("0");
      setInputN30_4("0");
      setInputN30_5("0");
      setInputN30_6("0");
      setInputN30_7("0");
      setInputN30_8("0");
      setInputN30_9("");

    }

  }

  //action : input N27
  const N27_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN27_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN27(false)

      setDisabledN27_7(true)
      setDisabledN27_8(true)
      setDisabledN27_9(true)

    }else{
      setDisabledN27(true)

      setInputN27_2("")
      setInputN27_3("")
      setInputN27_4("")
      setInputN27_5("")
      setInputN27_6("")
      setInputN27_7("")
      setInputN27_8("")
      setInputN27_9("")

    }
  };

  const N27_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN27_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN27_7(false)
      setDisabledN27_8(false)
      setDisabledN27_9(false)
    }
    else{
      setDisabledN27_7(true)
      setDisabledN27_8(true)
      setDisabledN27_9(true)

      setInputN27_7("")
      setInputN27_8("")
      setInputN27_9("")
    }
  };

  const N27_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN27_3(event.target.checked === true ? "1" : "0");
  };

  const N27_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN27_4(event.target.checked === true ? "1" : "0");
  };

  const N27_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN27_5(event.target.checked === true ? "1" : "0");
  };

  const N27_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN27_6(event.target.checked === true ? "1" : "0");
  };

  const N27_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN27_7(event.target.checked === true ? "1" : "0");
  };

  const N27_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN27_8(event.target.checked === true ? "1" : "0");
  };

  const N27_9OnChange = (event: any) => {
    setInputN27_9(event.currentTarget.value)
  }

  //action : input N28
  const N28_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN28_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN28(false)

      setDisabledN28_7(true)
      setDisabledN28_8(true)
      setDisabledN28_9(true)

    }else{
      setDisabledN28(true)

      setInputN28_2("")
      setInputN28_3("")
      setInputN28_4("")
      setInputN28_5("")
      setInputN28_6("")
      setInputN28_7("")
      setInputN28_8("")
      setInputN28_9("")

    }
  };

  const N28_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN28_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN28_7(false)
      setDisabledN28_8(false)
      setDisabledN28_9(false)
    }
    else{
      setDisabledN28_7(true)
      setDisabledN28_8(true)
      setDisabledN28_9(true)

      setInputN28_7("")
      setInputN28_8("")
      setInputN28_9("")
    }
  };

  const N28_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN28_3(event.target.checked === true ? "1" : "0");
  };

  const N28_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN28_4(event.target.checked === true ? "1" : "0");
  };

  const N28_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN28_5(event.target.checked === true ? "1" : "0");
  };

  const N28_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN28_6(event.target.checked === true ? "1" : "0");
  };

  const N28_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN28_7(event.target.checked === true ? "1" : "0");
  };

  const N28_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN28_8(event.target.checked === true ? "1" : "0");
  };

  const N28_9OnChange = (event: any) => {
    setInputN28_9(event.currentTarget.value)
  }

  //action : input N29
  const N29_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN29_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN29(false)

      setDisabledN29_7(true)
      setDisabledN29_8(true)
      setDisabledN29_9(true)

    }else{
      setDisabledN29(true)

      setInputN29_2("")
      setInputN29_3("")
      setInputN29_4("")
      setInputN29_5("")
      setInputN29_6("")
      setInputN29_7("")
      setInputN29_8("")
      setInputN29_9("")

    }
  };

  const N29_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN29_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN29_7(false)
      setDisabledN29_8(false)
      setDisabledN29_9(false)
    }
    else{
      setDisabledN29_7(true)
      setDisabledN29_8(true)
      setDisabledN29_9(true)

      setInputN29_7("")
      setInputN29_8("")
      setInputN29_9("")
    }
  };

  const N29_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN29_3(event.target.checked === true ? "1" : "0");
  };

  const N29_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN29_4(event.target.checked === true ? "1" : "0");
  };

  const N29_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN29_5(event.target.checked === true ? "1" : "0");
  };

  const N29_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN29_6(event.target.checked === true ? "1" : "0");
  };

  const N29_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN29_7(event.target.checked === true ? "1" : "0");
  };

  const N29_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN29_8(event.target.checked === true ? "1" : "0");
  };

  const N29_9OnChange = (event: any) => {
    setInputN29_9(event.currentTarget.value)
  }

  //action : input N30
  const N30_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN30_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN30(false)

      setDisabledN30_7(true)
      setDisabledN30_8(true)
      setDisabledN30_9(true)

    }else{
      setDisabledN30(true)

      setInputN30_2("")
      setInputN30_3("")
      setInputN30_4("")
      setInputN30_5("")
      setInputN30_6("")
      setInputN30_7("")
      setInputN30_8("")
      setInputN30_9("")

    }
  };

  const N30_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN30_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN30_7(false)
      setDisabledN30_8(false)
      setDisabledN30_9(false)
    }
    else{
      setDisabledN30_7(true)
      setDisabledN30_8(true)
      setDisabledN30_9(true)

      setInputN30_7("")
      setInputN30_8("")
      setInputN30_9("")
    }
  };

  const N30_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN30_3(event.target.checked === true ? "1" : "0");
  };

  const N30_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN30_4(event.target.checked === true ? "1" : "0");
  };

  const N30_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN30_5(event.target.checked === true ? "1" : "0");
  };

  const N30_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN30_6(event.target.checked === true ? "1" : "0");
  };

  const N30_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN30_7(event.target.checked === true ? "1" : "0");
  };

  const N30_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN30_8(event.target.checked === true ? "1" : "0");
  };

  const N30_9OnChange = (event: any) => {
    setInputN30_9(event.currentTarget.value)
  }

  //save modal
  const SaveModal27 = async () =>{

    //consistency check
    let isvalid = true;

    if(inputN27_1 === "1"){

      if(inputN27_2 === "1" || inputN27_3 === "1" || inputN27_4 === "1" || inputN27_5 === "1" || inputN27_6 === "1"){
        setShowWarningN27_2_6("none")
      }
      else{
        isvalid = false
        setShowWarningN27_2_6("")
      }

      //ถ้า N27_2 = 1 แล้ว 
      if (inputN27_2 === "1") {
        if(inputN27_7 === "1" || inputN27_8 === "1" ){
          setShowWarningN27_7_8("none")
        }
        else{
          isvalid = false
          setShowWarningN27_7_8("")
        }
  
        if(inputN27_9 === ""){
          isvalid = false
          setShowWarningN27_9("")
        }
        else{
          setShowWarningN27_9("none")
        }

        //possible code
        if(Number(inputN27_9) < 1 || Number(inputN27_9) > 50 || !Number.isInteger(Number(inputN27_9)) ){
          isvalid = false
          setShowWarningN27_9("")
        }
        else{
          setShowWarningN27_9("none")
        }
      }

    }

    //ผ่านการ consistency check
    if (isvalid) {
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;
        const headers = {Authorization: "Basic " + auth, "Content-Type": "application/json;charset=UTF-8"};
  
        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N27";
          }
  
          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n26: inputN26,
            n27_1: inputN27_1,
            n27_2: inputN27_2,
            n27_3: inputN27_3,
            n27_4: inputN27_4,
            n27_5: inputN27_5,
            n27_6: inputN27_6,
            n27_7: inputN27_7,
            n27_8: inputN27_8,
            n27_9: inputN27_9 === "" ? "" : inputN27_9.padStart(2, '0')
          };
  
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose27()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal27 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal27 ERROR: ", err);
        }
      }
    }
    else{
      //ไม่ต้องทำอะไร
    }

    
  }

  const SaveModal28 = async () =>{

    //consistency check
    let isvalid = true;

    if(inputN28_1 === "1"){

      if(inputN28_2 === "1" || inputN28_3 === "1" || inputN28_4 === "1" || inputN28_5 === "1" || inputN28_6 === "1"){
        setShowWarningN28_2_6("none")
      }
      else{
        isvalid = false
        setShowWarningN28_2_6("")
      }

      //ถ้า N28_2 = 1 แล้ว 
      if (inputN28_2 === "1") {
        if(inputN28_7 === "1" || inputN28_8 === "1" ){
          setShowWarningN28_7_8("none")
        }
        else{
          isvalid = false
          setShowWarningN28_7_8("")
        }
  
        if(inputN28_9 === ""){
          isvalid = false
          setShowWarningN28_9("")
        }
        else{
          setShowWarningN28_9("none")
        }

        //possible code
        if(Number(inputN28_9) < 1 || Number(inputN28_9) > 50 || !Number.isInteger(Number(inputN28_9))){
          isvalid = false
          setShowWarningN28_9("")
        }
        else{
          setShowWarningN28_9("none")
        }
      }

    }


    //ผ่านการ consistency check
    if (isvalid) {
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;
        const headers = { Authorization: "Basic " + auth, "Content-Type": "application/json;charset=UTF-8" };

        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N28";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n26: inputN26,
            n28_1: inputN28_1,
            n28_2: inputN28_2,
            n28_3: inputN28_3,
            n28_4: inputN28_4,
            n28_5: inputN28_5,
            n28_6: inputN28_6,
            n28_7: inputN28_7,
            n28_8: inputN28_8,
            n28_9: inputN28_9 === "" ? "" : inputN28_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose28()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal28 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal28 ERROR: ", err);
        }
      }

    }
    else {
      //ไม่ต้องทำอะไร
    }
    
  }

  const SaveModal29 = async () =>{

    //consistency check
    let isvalid = true;

    if(inputN29_1 === "1"){

      if(inputN29_2 === "1" || inputN29_3 === "1" || inputN29_4 === "1" || inputN29_5 === "1" || inputN29_6 === "1"){
        setShowWarningN29_2_6("none")
      }
      else{
        isvalid = false
        setShowWarningN29_2_6("")
      }

      //ถ้า N29_2 = 1 แล้ว 
      if (inputN29_2 === "1") {
        if(inputN29_7 === "1" || inputN29_8 === "1" ){
          setShowWarningN29_7_8("none")
        }
        else{
          isvalid = false
          setShowWarningN29_7_8("")
        }
  
        if(inputN29_9 === ""){
          isvalid = false
          setShowWarningN29_9("")
        }
        else{
          setShowWarningN29_9("none")
        }

        //possible code
        if(Number(inputN29_9) < 1 || Number(inputN29_9) > 50 || !Number.isInteger(Number(inputN29_9)) ){
          isvalid = false
          setShowWarningN29_9("")
        }
        else{
          setShowWarningN29_9("none")
        }
      }   

    }

    if (isvalid) {
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;
        const headers = { Authorization: "Basic " + auth, "Content-Type": "application/json;charset=UTF-8" };

        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N29";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n26: inputN26,
            n29_1: inputN29_1,
            n29_2: inputN29_2,
            n29_3: inputN29_3,
            n29_4: inputN29_4,
            n29_5: inputN29_5,
            n29_6: inputN29_6,
            n29_7: inputN29_7,
            n29_8: inputN29_8,
            n29_9: inputN29_9 === "" ? "" : inputN29_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose29()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal29 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal29 ERROR: ", err);
        }
      }
    }
    else {
      //ไม่ต้องทำอะไร
    }
    
  }

  const SaveModal30 = async () =>{

    //consistency check
    let isvalid = true;

    if(inputN30_1 === "1"){

      if(inputN30_2 === "1" || inputN30_3 === "1" || inputN30_4 === "1" || inputN30_5 === "1" || inputN30_6 === "1"){
        setShowWarningN30_2_6("none")
      }
      else{
        isvalid = false
        setShowWarningN30_2_6("")
      }

      //ถ้า N30_2 = 1 แล้ว 
      if (inputN30_2 === "1") {
        if(inputN30_7 === "1" || inputN30_8 === "1" ){
          setShowWarningN30_7_8("none")
        }
        else{
          isvalid = false
          setShowWarningN30_7_8("")
        }
  
        if(inputN30_9 === ""){
          isvalid = false
          setShowWarningN30_9("")
        }
        else{
          setShowWarningN30_9("none")
        }

        //possible code
        if(Number(inputN30_9) < 1 || Number(inputN30_9) > 50 || !Number.isInteger(Number(inputN30_9))){
          isvalid = false
          setShowWarningN30_9("")
        }
        else{
          setShowWarningN30_9("none")
        }
      }

    }

    if (isvalid) {
      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;
        const headers = {Authorization: "Basic " + auth, "Content-Type": "application/json;charset=UTF-8"};
  
        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N30";
          }
  
          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n26: inputN26,
            n30_1: inputN30_1,
            n30_2: inputN30_2,
            n30_3: inputN30_3,
            n30_4: inputN30_4,
            n30_5: inputN30_5,
            n30_6: inputN30_6,
            n30_7: inputN30_7,
            n30_8: inputN30_8,
            n30_9: inputN30_9 === "" ? "" : inputN30_9.padStart(2, '0')
          };
  
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose30()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal30 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal30 ERROR: ", err);
        }
      }
    }
    else {
      //ไม่ต้องทำอะไร
    }
    
  }

  //state warning
  const [showWarningN26, setShowWarningN26] = useState<string>("none"); // ปิด
  const [showWarningN26Blank, setShowWarningN26Blank] = useState<string>("none"); // ปิด

  const scollToWarning  = useRef<null | HTMLDivElement>(null);

  //save N26
  const SaveOnClick = async () => {

    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      n26: inputN26
    };

    //consistency check
    let isvalid = true;

    if (inputN26 === "1") {
      if (inputN27_1 === "1" || inputN28_1 === "1" || inputN29_1 === "1" || inputN30_1 === "1") {
        setShowWarningN26("none")
      }
      else {
        isvalid = false
        setShowWarningN26("")
        scollToWarning.current?.scrollIntoView({behavior: 'smooth'})
      }
    }

    if(inputN26 === ""){
      isvalid = false
      setShowWarningN26Blank("")
    }
    else{
      setShowWarningN26Blank("none")
    }

    //ผ่านการ consistency check
    if (isvalid) {

      try {

        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N26";
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

                  setPage(page + 1);

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });
        }

      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 7 (7.2) เครื่องจักร เครื่องมือ เทคโนโลยีดิจิทัลทางการเกษตร และอุปกรณ์การขนส่งเพื่อการเกษตร): ", error);
      }

    }
    else {
      //ไม่ต้องทำอะไร
    }


  };

  async function NextOnClick(){

    setPage(page + 1);

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
                      className="col-10 d-flex align-items-center pr-0"
                    >
                      <h5 className="mb-0 py-2 text-white ">
                        ตอนที่ 7 เครื่องจักร เครื่องมือ และเทคโนโลยีดิจิทัลทางการเกษตร อุปกรณ์การขนส่งเพื่อการเกษตร และแอปพลิเคชันเพื่อการเกษตร (ต่อ)
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl52232"
                        aria-expanded="false"
                        aria-controls="collapseControl52232"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl52232">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            2. อุปกรณ์การขนส่งเพื่อการเกษตร
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            2.1 ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการใช้อุปกรณ์การขนส่งเพื่อการเกษตร หรือไม่
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>N26</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_N26.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_N26"
                                  type="radio"
                                  id={`rd_N26${index}`}
                                  checked={option.value === inputN26}
                                  onChange={N26OnChange}
                                  value={option.value}

                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_N26${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Col>
                      </Row>

                      {/* Panel 2.2 */}
                      <Row style={{display:isPanel2_2}}>
                        <Col md={12}>

                          <Row className="mt-2 question-subTitle">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                2.2 ให้สอบถามและบันทึกรายละเอียด อุปกรณ์การขนส่งเพื่อการเกษตร
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 ">
                            <Col md={12}>
                              <label >
                                ชนิดของอุปกรณ์การขนส่งเพื่อการเกษตร
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">


                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem27} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN27_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN27_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 1. รถบรรทุก 4 ล้อ</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem28} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN28_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN28_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 2. รถบรรทุก 6 ล้อขึ้นไป</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem29} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN29_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN29_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 3. เรือ</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem30} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN30_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN30_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 4. รถเกษตรกร</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                          </Row>

                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div ref={scollToWarning}></div>
                          <div className="mb-3" style={{ display: showWarningN26 }}><label className="text-danger">กรุณาเลือก N27 ถึง N30 อย่างน้อย 1 รายการ</label></div>
                          <div className="mb-3" style={{ display: showWarningN26Blank }}><label className="text-danger">กรุณาเลือก N26</label></div>
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


      <Modal show={show27} onHide={handleClose27} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal27}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N27_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N27_1"
                        onChange={N27_1OnChange}
                        checked={inputN27_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N27_1">
                        {" "}
                        1. รถบรรทุก 4 ล้อ
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N27_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N27_2"
                        onChange={N27_2OnChange}
                        checked={inputN27_2 === "1" ? true : false }
                        disabled={disabledN27}
                      />
                      <label className="form-check-label" htmlFor="N27_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N27_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N27_3"
                        onChange={N27_3OnChange}
                        checked={inputN27_3 === "1" ? true : false }
                        disabled={disabledN27}
                      />
                      <label className="form-check-label" htmlFor="N27_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N27_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N27_4"
                        onChange={N27_4OnChange}
                        checked={inputN27_4 === "1" ? true : false }
                        disabled={disabledN27}
                      />
                      <label className="form-check-label" htmlFor="N27_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N27_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N27_5"
                        onChange={N27_5OnChange}
                        checked={inputN27_5 === "1" ? true : false }
                        disabled={disabledN27}
                      />
                      <label className="form-check-label" htmlFor="N27_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N27_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N27_6"
                        onChange={N27_6OnChange}
                        checked={inputN27_6 === "1" ? true : false }
                        disabled={disabledN27}
                      />
                      <label className="form-check-label" htmlFor="N27_6">
                        {" "}
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>
                
              <Row>
                <Col md={12} className="mt-5">
                  <label style={{ fontWeight: "bold" }}>การใช้งาน (ตอบได้มากกว่า 1 ข้อ)</label>

                  <Row>
                    <Col md={12} className="mt-3">
                      <label> N27_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N27_7"
                            onChange={N27_7OnChange}
                            checked={inputN27_7 === "1" ? true : false }
                            disabled={disabledN27 || disabledN27_7}
                          />
                          <label className="form-check-label" htmlFor="N27_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N27_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N27_8"
                            onChange={N27_8OnChange}
                            checked={inputN27_8 === "1" ? true : false }
                            disabled={disabledN27 || disabledN27_8}
                          />
                          <label className="form-check-label" htmlFor="N27_8">
                            {" "}
                            ใช้รับจ้างในที่ถือครองอื่น
                          </label>
                        </div>
                      </div>
                    </Col>
                  </Row>


                </Col>                  
              </Row>

              <Row>
                <Col md={12} className="mt-5">
                    <label> N27_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N27_9OnChange}
                        value={inputN27_9}
                        disabled={disabledN27 || disabledN27_9}
                      />
                      <span className="input-group-text">คัน</span>
                      <div className="invalid-feedback">
                        ค่าที่ระบุได้คือ 1 ถึง 50
                      </div>
                    </div>
                  </Col>
              </Row>

            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="mb-3" style={{ display: showWarningN27_2_6 }}><label className="text-danger">กรุณาเลือก N27_2 ถึง N27_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN27_7_8 }}><label className="text-danger">กรุณาเลือก N27_7 ถึง N27_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN27_9 }}><label className="text-danger">กรุณาระบุ N27_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose27}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose27()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal27()
                      : handleClose27()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show28} onHide={handleClose28} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal28}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N28_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N28_1"
                        onChange={N28_1OnChange}
                        checked={inputN28_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N28_1">
                        {" "}
                        2. รถบรรทุก 6 ล้อขึ้นไป
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N28_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N28_2"
                        onChange={N28_2OnChange}
                        checked={inputN28_2 === "1" ? true : false }
                        disabled={disabledN28}
                      />
                      <label className="form-check-label" htmlFor="N28_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N28_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N28_3"
                        onChange={N28_3OnChange}
                        checked={inputN28_3 === "1" ? true : false }
                        disabled={disabledN28}
                      />
                      <label className="form-check-label" htmlFor="N28_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N28_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N28_4"
                        onChange={N28_4OnChange}
                        checked={inputN28_4 === "1" ? true : false }
                        disabled={disabledN28}
                      />
                      <label className="form-check-label" htmlFor="N28_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N28_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N28_5"
                        onChange={N28_5OnChange}
                        checked={inputN28_5 === "1" ? true : false }
                        disabled={disabledN28}
                      />
                      <label className="form-check-label" htmlFor="N28_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N28_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N28_6"
                        onChange={N28_6OnChange}
                        checked={inputN28_6 === "1" ? true : false }
                        disabled={disabledN28}
                      />
                      <label className="form-check-label" htmlFor="N28_6">
                        {" "}
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>
                
              <Row>
                <Col md={12} className="mt-5">
                  <label style={{ fontWeight: "bold" }}>การใช้งาน (ตอบได้มากกว่า 1 ข้อ)</label>

                  <Row>
                    <Col md={12} className="mt-3">
                      <label> N28_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N28_7"
                            onChange={N28_7OnChange}
                            checked={inputN28_7 === "1" ? true : false }
                            disabled={disabledN28 || disabledN28_7}
                          />
                          <label className="form-check-label" htmlFor="N28_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N28_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N28_8"
                            onChange={N28_8OnChange}
                            checked={inputN28_8 === "1" ? true : false }
                            disabled={disabledN28 || disabledN28_8}
                          />
                          <label className="form-check-label" htmlFor="N28_8">
                            {" "}
                            ใช้รับจ้างในที่ถือครองอื่น
                          </label>
                        </div>
                      </div>
                    </Col>
                  </Row>


                </Col>                  
              </Row>

              <Row>
                <Col md={12} className="mt-5">
                    <label> N28_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N28_9OnChange}
                        value={inputN28_9}
                        disabled={disabledN28 || disabledN28_9}
                      />
                      <span className="input-group-text">เครื่อง</span>
                      <div className="invalid-feedback">
                        ค่าที่ระบุได้คือ 1 ถึง 50
                      </div>
                    </div>
                  </Col>
              </Row>

            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="mb-3" style={{ display: showWarningN28_2_6 }}><label className="text-danger">กรุณาเลือก N28_2 ถึง N28_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN28_7_8 }}><label className="text-danger">กรุณาเลือก N28_7 ถึง N28_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN28_9 }}><label className="text-danger">กรุณาระบุ N28_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose28}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose28()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal28()
                      : handleClose28()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show29} onHide={handleClose29} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal29}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N29_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N29_1"
                        onChange={N29_1OnChange}
                        checked={inputN29_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N29_1">
                        {" "}
                        3. เรือ
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N29_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N29_2"
                        onChange={N29_2OnChange}
                        checked={inputN29_2 === "1" ? true : false }
                        disabled={disabledN29}
                      />
                      <label className="form-check-label" htmlFor="N29_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N29_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N29_3"
                        onChange={N29_3OnChange}
                        checked={inputN29_3 === "1" ? true : false }
                        disabled={disabledN29}
                      />
                      <label className="form-check-label" htmlFor="N29_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N29_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N29_4"
                        onChange={N29_4OnChange}
                        checked={inputN29_4 === "1" ? true : false }
                        disabled={disabledN29}
                      />
                      <label className="form-check-label" htmlFor="N29_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N29_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N29_5"
                        onChange={N29_5OnChange}
                        checked={inputN29_5 === "1" ? true : false }
                        disabled={disabledN29}
                      />
                      <label className="form-check-label" htmlFor="N29_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N29_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N29_6"
                        onChange={N29_6OnChange}
                        checked={inputN29_6 === "1" ? true : false }
                        disabled={disabledN29}
                      />
                      <label className="form-check-label" htmlFor="N29_6">
                        {" "}
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>
                
              <Row>
                <Col md={12} className="mt-5">
                  <label style={{ fontWeight: "bold" }}>การใช้งาน (ตอบได้มากกว่า 1 ข้อ)</label>

                  <Row>
                    <Col md={12} className="mt-3">
                      <label> N29_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N29_7"
                            onChange={N29_7OnChange}
                            checked={inputN29_7 === "1" ? true : false }
                            disabled={disabledN29 || disabledN29_7}
                          />
                          <label className="form-check-label" htmlFor="N29_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N29_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N29_8"
                            onChange={N29_8OnChange}
                            checked={inputN29_8 === "1" ? true : false }
                            disabled={disabledN29 || disabledN29_8}
                          />
                          <label className="form-check-label" htmlFor="N29_8">
                            {" "}
                            ใช้รับจ้างในที่ถือครองอื่น
                          </label>
                        </div>
                      </div>
                    </Col>
                  </Row>


                </Col>                  
              </Row>

              <Row>
                <Col md={12} className="mt-5">
                    <label> N29_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N29_9OnChange}
                        value={inputN29_9}
                        disabled={disabledN29 || disabledN29_9}
                      />
                      <span className="input-group-text">เครื่อง</span>
                      <div className="invalid-feedback">
                        ค่าที่ระบุได้คือ 1 ถึง 50
                      </div>
                    </div>
                  </Col>
              </Row>

            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="mb-3" style={{ display: showWarningN29_2_6 }}><label className="text-danger">กรุณาเลือก N29_2 ถึง N29_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN29_7_8 }}><label className="text-danger">กรุณาเลือก N29_7 ถึง N29_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN29_9 }}><label className="text-danger">กรุณาระบุ N29_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose29}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose29()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal29()
                      : handleClose29()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show30} onHide={handleClose30} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal30}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N30_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N30_1"
                        onChange={N30_1OnChange}
                        checked={inputN30_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N30_1">
                        {" "}
                        4. รถเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N30_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N30_2"
                        onChange={N30_2OnChange}
                        checked={inputN30_2 === "1" ? true : false }
                        disabled={disabledN30}
                      />
                      <label className="form-check-label" htmlFor="N30_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N30_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N30_3"
                        onChange={N30_3OnChange}
                        checked={inputN30_3 === "1" ? true : false }
                        disabled={disabledN30}
                      />
                      <label className="form-check-label" htmlFor="N30_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N30_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N30_4"
                        onChange={N30_4OnChange}
                        checked={inputN30_4 === "1" ? true : false }
                        disabled={disabledN30}
                      />
                      <label className="form-check-label" htmlFor="N30_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N30_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N30_5"
                        onChange={N30_5OnChange}
                        checked={inputN30_5 === "1" ? true : false }
                        disabled={disabledN30}
                      />
                      <label className="form-check-label" htmlFor="N30_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N30_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N30_6"
                        onChange={N30_6OnChange}
                        checked={inputN30_6 === "1" ? true : false }
                        disabled={disabledN30}
                      />
                      <label className="form-check-label" htmlFor="N30_6">
                        {" "}
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>
                
              <Row>
                <Col md={12} className="mt-5">
                  <label style={{ fontWeight: "bold" }}>การใช้งาน (ตอบได้มากกว่า 1 ข้อ)</label>

                  <Row>
                    <Col md={12} className="mt-3">
                      <label> N30_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N30_7"
                            onChange={N30_7OnChange}
                            checked={inputN30_7 === "1" ? true : false }
                            disabled={disabledN30 || disabledN30_7}
                          />
                          <label className="form-check-label" htmlFor="N30_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N30_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N30_8"
                            onChange={N30_8OnChange}
                            checked={inputN30_8 === "1" ? true : false }
                            disabled={disabledN30 || disabledN30_8}
                          />
                          <label className="form-check-label" htmlFor="N30_8">
                            {" "}
                            ใช้รับจ้างในที่ถือครองอื่น
                          </label>
                        </div>
                      </div>
                    </Col>
                  </Row>


                </Col>                  
              </Row>

              <Row>
                <Col md={12} className="mt-5">
                    <label> N30_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N30_9OnChange}
                        value={inputN30_9}
                        disabled={disabledN30 || disabledN30_9}
                      />
                      <span className="input-group-text">เครื่อง</span>
                      <div className="invalid-feedback">
                        ค่าที่ระบุได้คือ 1 ถึง 50
                      </div>
                    </div>
                  </Col>
              </Row>

            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="mb-3" style={{ display: showWarningN30_2_6 }}><label className="text-danger">กรุณาเลือก N30_2 ถึง N30_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN30_7_8 }}><label className="text-danger">กรุณาเลือก N30_7 ถึง N30_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN30_9 }}><label className="text-danger">กรุณาระบุ N30_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose30}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose30()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal30()
                      : handleClose30()
                }
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
