import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01, _F01, _L01, _N01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC17Info } from "../model/REC17Info";
import { REC01Info } from "../model/REC01Info";

export default function EMachinery2() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : REC17
  const [REC17, setREC17] = useState<REC17Info>();

  //state : input
  const [inputN01, setInputN01] = useState<string>("");

  const [inputN02_1, setInputN02_1] = useState<string>("");
  const [inputN02_2, setInputN02_2] = useState<string>("");
  const [inputN02_3, setInputN02_3] = useState<string>("");
  const [inputN02_4, setInputN02_4] = useState<string>("");
  const [inputN02_5, setInputN02_5] = useState<string>("");
  const [inputN02_6, setInputN02_6] = useState<string>("");
  const [inputN02_7, setInputN02_7] = useState<string>("");
  const [inputN02_8, setInputN02_8] = useState<string>("");
  const [inputN02_9, setInputN02_9] = useState<string>("");

  const [inputN03_1, setInputN03_1] = useState<string>("");
  const [inputN03_2, setInputN03_2] = useState<string>("");
  const [inputN03_3, setInputN03_3] = useState<string>("");
  const [inputN03_4, setInputN03_4] = useState<string>("");
  const [inputN03_5, setInputN03_5] = useState<string>("");
  const [inputN03_6, setInputN03_6] = useState<string>("");
  const [inputN03_7, setInputN03_7] = useState<string>("");
  const [inputN03_8, setInputN03_8] = useState<string>("");
  const [inputN03_9, setInputN03_9] = useState<string>("");

  const [inputN04_1, setInputN04_1] = useState<string>("");
  const [inputN04_2, setInputN04_2] = useState<string>("");
  const [inputN04_3, setInputN04_3] = useState<string>("");
  const [inputN04_4, setInputN04_4] = useState<string>("");
  const [inputN04_5, setInputN04_5] = useState<string>("");
  const [inputN04_6, setInputN04_6] = useState<string>("");
  const [inputN04_7, setInputN04_7] = useState<string>("");
  const [inputN04_8, setInputN04_8] = useState<string>("");
  const [inputN04_9, setInputN04_9] = useState<string>("");

  const [inputN05_1, setInputN05_1] = useState<string>("");
  const [inputN05_2, setInputN05_2] = useState<string>("");
  const [inputN05_3, setInputN05_3] = useState<string>("");
  const [inputN05_4, setInputN05_4] = useState<string>("");
  const [inputN05_5, setInputN05_5] = useState<string>("");
  const [inputN05_6, setInputN05_6] = useState<string>("");
  const [inputN05_7, setInputN05_7] = useState<string>("");
  const [inputN05_8, setInputN05_8] = useState<string>("");
  const [inputN05_9, setInputN05_9] = useState<string>("");

  const [inputN06_1, setInputN06_1] = useState<string>("");
  const [inputN06_2, setInputN06_2] = useState<string>("");
  const [inputN06_3, setInputN06_3] = useState<string>("");
  const [inputN06_4, setInputN06_4] = useState<string>("");
  const [inputN06_5, setInputN06_5] = useState<string>("");
  const [inputN06_6, setInputN06_6] = useState<string>("");
  const [inputN06_7, setInputN06_7] = useState<string>("");
  const [inputN06_8, setInputN06_8] = useState<string>("");
  const [inputN06_9, setInputN06_9] = useState<string>("");

  const [inputN07_1, setInputN07_1] = useState<string>("");
  const [inputN07_2, setInputN07_2] = useState<string>("");
  const [inputN07_3, setInputN07_3] = useState<string>("");
  const [inputN07_4, setInputN07_4] = useState<string>("");
  const [inputN07_5, setInputN07_5] = useState<string>("");
  const [inputN07_6, setInputN07_6] = useState<string>("");
  const [inputN07_7, setInputN07_7] = useState<string>("");
  const [inputN07_8, setInputN07_8] = useState<string>("");
  const [inputN07_9, setInputN07_9] = useState<string>("");

  const [inputN08_1, setInputN08_1] = useState<string>("");
  const [inputN08_2, setInputN08_2] = useState<string>("");
  const [inputN08_3, setInputN08_3] = useState<string>("");
  const [inputN08_4, setInputN08_4] = useState<string>("");
  const [inputN08_5, setInputN08_5] = useState<string>("");
  const [inputN08_6, setInputN08_6] = useState<string>("");
  const [inputN08_7, setInputN08_7] = useState<string>("");
  const [inputN08_8, setInputN08_8] = useState<string>("");
  const [inputN08_9, setInputN08_9] = useState<string>("");

  const [inputN09_1, setInputN09_1] = useState<string>("");
  const [inputN09_2, setInputN09_2] = useState<string>("");
  const [inputN09_3, setInputN09_3] = useState<string>("");
  const [inputN09_4, setInputN09_4] = useState<string>("");
  const [inputN09_5, setInputN09_5] = useState<string>("");
  const [inputN09_6, setInputN09_6] = useState<string>("");
  const [inputN09_7, setInputN09_7] = useState<string>("");
  const [inputN09_8, setInputN09_8] = useState<string>("");
  const [inputN09_9, setInputN09_9] = useState<string>("");

  const [inputN10_1, setInputN10_1] = useState<string>("");
  const [inputN10_2, setInputN10_2] = useState<string>("");
  const [inputN10_3, setInputN10_3] = useState<string>("");
  const [inputN10_4, setInputN10_4] = useState<string>("");
  const [inputN10_5, setInputN10_5] = useState<string>("");
  const [inputN10_6, setInputN10_6] = useState<string>("");
  const [inputN10_7, setInputN10_7] = useState<string>("");
  const [inputN10_8, setInputN10_8] = useState<string>("");
  const [inputN10_9, setInputN10_9] = useState<string>("");

  const [inputN11_1, setInputN11_1] = useState<string>("");
  const [inputN11_2, setInputN11_2] = useState<string>("");
  const [inputN11_3, setInputN11_3] = useState<string>("");
  const [inputN11_4, setInputN11_4] = useState<string>("");
  const [inputN11_5, setInputN11_5] = useState<string>("");
  const [inputN11_6, setInputN11_6] = useState<string>("");
  const [inputN11_7, setInputN11_7] = useState<string>("");
  const [inputN11_8, setInputN11_8] = useState<string>("");
  const [inputN11_9, setInputN11_9] = useState<string>("");

  const [inputN12_1, setInputN12_1] = useState<string>("");
  const [inputN12_2, setInputN12_2] = useState<string>("");
  const [inputN12_3, setInputN12_3] = useState<string>("");
  const [inputN12_4, setInputN12_4] = useState<string>("");
  const [inputN12_5, setInputN12_5] = useState<string>("");
  const [inputN12_6, setInputN12_6] = useState<string>("");
  const [inputN12_7, setInputN12_7] = useState<string>("");
  const [inputN12_8, setInputN12_8] = useState<string>("");
  const [inputN12_9, setInputN12_9] = useState<string>("");

  const [inputN13_1, setInputN13_1] = useState<string>("");
  const [inputN13_2, setInputN13_2] = useState<string>("");
  const [inputN13_3, setInputN13_3] = useState<string>("");
  const [inputN13_4, setInputN13_4] = useState<string>("");
  const [inputN13_5, setInputN13_5] = useState<string>("");
  const [inputN13_6, setInputN13_6] = useState<string>("");
  const [inputN13_7, setInputN13_7] = useState<string>("");
  const [inputN13_8, setInputN13_8] = useState<string>("");
  const [inputN13_9, setInputN13_9] = useState<string>("");

  const [inputN14_1, setInputN14_1] = useState<string>("");
  const [inputN14_2, setInputN14_2] = useState<string>("");
  const [inputN14_3, setInputN14_3] = useState<string>("");
  const [inputN14_4, setInputN14_4] = useState<string>("");
  const [inputN14_5, setInputN14_5] = useState<string>("");
  const [inputN14_6, setInputN14_6] = useState<string>("");
  const [inputN14_7, setInputN14_7] = useState<string>("");
  const [inputN14_8, setInputN14_8] = useState<string>("");
  const [inputN14_9, setInputN14_9] = useState<string>("");

  const [inputN15_1, setInputN15_1] = useState<string>("");
  const [inputN15_2, setInputN15_2] = useState<string>("");
  const [inputN15_3, setInputN15_3] = useState<string>("");
  const [inputN15_4, setInputN15_4] = useState<string>("");
  const [inputN15_5, setInputN15_5] = useState<string>("");
  const [inputN15_6, setInputN15_6] = useState<string>("");
  const [inputN15_7, setInputN15_7] = useState<string>("");
  const [inputN15_8, setInputN15_8] = useState<string>("");
  const [inputN15_9, setInputN15_9] = useState<string>("");

  const [inputN16_1, setInputN16_1] = useState<string>("");
  const [inputN16_2, setInputN16_2] = useState<string>("");
  const [inputN16_3, setInputN16_3] = useState<string>("");
  const [inputN16_4, setInputN16_4] = useState<string>("");
  const [inputN16_5, setInputN16_5] = useState<string>("");
  const [inputN16_6, setInputN16_6] = useState<string>("");
  const [inputN16_7, setInputN16_7] = useState<string>("");
  const [inputN16_8, setInputN16_8] = useState<string>("");
  const [inputN16_9, setInputN16_9] = useState<string>("");

  const [inputN17_1, setInputN17_1] = useState<string>("");
  const [inputN17_2, setInputN17_2] = useState<string>("");
  const [inputN17_3, setInputN17_3] = useState<string>("");
  const [inputN17_4, setInputN17_4] = useState<string>("");
  const [inputN17_5, setInputN17_5] = useState<string>("");
  const [inputN17_6, setInputN17_6] = useState<string>("");
  const [inputN17_7, setInputN17_7] = useState<string>("");
  const [inputN17_8, setInputN17_8] = useState<string>("");
  const [inputN17_9, setInputN17_9] = useState<string>("");

  const [inputN18_1, setInputN18_1] = useState<string>("");
  const [inputN18_2, setInputN18_2] = useState<string>("");
  const [inputN18_3, setInputN18_3] = useState<string>("");
  const [inputN18_4, setInputN18_4] = useState<string>("");
  const [inputN18_5, setInputN18_5] = useState<string>("");
  const [inputN18_6, setInputN18_6] = useState<string>("");
  const [inputN18_7, setInputN18_7] = useState<string>("");
  const [inputN18_8, setInputN18_8] = useState<string>("");
  const [inputN18_9, setInputN18_9] = useState<string>("");

  const [inputN19_1, setInputN19_1] = useState<string>("");
  const [inputN19_2, setInputN19_2] = useState<string>("");
  const [inputN19_3, setInputN19_3] = useState<string>("");
  const [inputN19_4, setInputN19_4] = useState<string>("");
  const [inputN19_5, setInputN19_5] = useState<string>("");
  const [inputN19_6, setInputN19_6] = useState<string>("");
  const [inputN19_7, setInputN19_7] = useState<string>("");
  const [inputN19_8, setInputN19_8] = useState<string>("");
  const [inputN19_9, setInputN19_9] = useState<string>("");

  const [inputN20_1, setInputN20_1] = useState<string>("");
  const [inputN20_2, setInputN20_2] = useState<string>("");
  const [inputN20_3, setInputN20_3] = useState<string>("");
  const [inputN20_4, setInputN20_4] = useState<string>("");
  const [inputN20_5, setInputN20_5] = useState<string>("");
  const [inputN20_6, setInputN20_6] = useState<string>("");
  const [inputN20_7, setInputN20_7] = useState<string>("");
  const [inputN20_8, setInputN20_8] = useState<string>("");
  const [inputN20_9, setInputN20_9] = useState<string>("");

  const [inputN21_1, setInputN21_1] = useState<string>("");
  const [inputN21_2, setInputN21_2] = useState<string>("");
  const [inputN21_3, setInputN21_3] = useState<string>("");
  const [inputN21_4, setInputN21_4] = useState<string>("");
  const [inputN21_5, setInputN21_5] = useState<string>("");
  const [inputN21_6, setInputN21_6] = useState<string>("");
  const [inputN21_7, setInputN21_7] = useState<string>("");
  const [inputN21_8, setInputN21_8] = useState<string>("");
  const [inputN21_9, setInputN21_9] = useState<string>("");

  const [inputN22_1, setInputN22_1] = useState<string>("");
  const [inputN22_2, setInputN22_2] = useState<string>("");
  const [inputN22_3, setInputN22_3] = useState<string>("");
  const [inputN22_4, setInputN22_4] = useState<string>("");
  const [inputN22_5, setInputN22_5] = useState<string>("");
  const [inputN22_6, setInputN22_6] = useState<string>("");
  const [inputN22_7, setInputN22_7] = useState<string>("");
  const [inputN22_8, setInputN22_8] = useState<string>("");
  const [inputN22_9, setInputN22_9] = useState<string>("");

  const [inputN23_1, setInputN23_1] = useState<string>("");
  const [inputN23_2, setInputN23_2] = useState<string>("");
  const [inputN23_3, setInputN23_3] = useState<string>("");
  const [inputN23_4, setInputN23_4] = useState<string>("");
  const [inputN23_5, setInputN23_5] = useState<string>("");
  const [inputN23_6, setInputN23_6] = useState<string>("");
  const [inputN23_7, setInputN23_7] = useState<string>("");
  const [inputN23_8, setInputN23_8] = useState<string>("");
  const [inputN23_9, setInputN23_9] = useState<string>("");

  const [inputN24_1, setInputN24_1] = useState<string>("");
  const [inputN24_2, setInputN24_2] = useState<string>("");
  const [inputN24_3, setInputN24_3] = useState<string>("");
  const [inputN24_4, setInputN24_4] = useState<string>("");
  const [inputN24_5, setInputN24_5] = useState<string>("");
  const [inputN24_6, setInputN24_6] = useState<string>("");
  const [inputN24_7, setInputN24_7] = useState<string>("");
  const [inputN24_8, setInputN24_8] = useState<string>("");
  const [inputN24_9, setInputN24_9] = useState<string>("");

  const [inputN25_1, setInputN25_1] = useState<string>("");
  const [inputN25_2, setInputN25_2] = useState<string>("");
  const [inputN25_3, setInputN25_3] = useState<string>("");
  const [inputN25_4, setInputN25_4] = useState<string>("");
  const [inputN25_5, setInputN25_5] = useState<string>("");
  const [inputN25_6, setInputN25_6] = useState<string>("");
  const [inputN25_7, setInputN25_7] = useState<string>("");
  const [inputN25_8, setInputN25_8] = useState<string>("");
  const [inputN25_9, setInputN25_9] = useState<string>("");

  const { handleSubmit } = useForm();

  //first load
  useEffect(() => {
    
    console.log("load page EMachinery2");

    //setInputN01("1")

    getREC17()

  }, [page === 18]);

  async function getREC17() {
    //console.log("load EMachinery2.getREC17()");
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

                setInputN01(item?.N01!)

                //เซตให้ครบทุกฟิลดิ์ด้วยนะ ในตอนที่ 7-1 นี้เซตถึง N25 พอ
                setInputN02_1(item?.N02_1!)
                setInputN02_2(item?.N02_2!)
                setInputN02_3(item?.N02_3!)
                setInputN02_4(item?.N02_4!)
                setInputN02_5(item?.N02_5!)
                setInputN02_6(item?.N02_6!)
                setInputN02_7(item?.N02_7!)
                setInputN02_8(item?.N02_8!)
                setInputN02_9(item?.N02_9! !== "" ? Number(item?.N02_9!).toString() : "")

                setInputN03_1(item?.N03_1!)
                setInputN03_2(item?.N03_2!)
                setInputN03_3(item?.N03_3!)
                setInputN03_4(item?.N03_4!)
                setInputN03_5(item?.N03_5!)
                setInputN03_6(item?.N03_6!)
                setInputN03_7(item?.N03_7!)
                setInputN03_8(item?.N03_8!)
                setInputN03_9(item?.N03_9! !== "" ? Number(item?.N03_9!).toString() : "")

                setInputN04_1(item?.N04_1!)
                setInputN04_2(item?.N04_2!)
                setInputN04_3(item?.N04_3!)
                setInputN04_4(item?.N04_4!)
                setInputN04_5(item?.N04_5!)
                setInputN04_6(item?.N04_6!)
                setInputN04_7(item?.N04_7!)
                setInputN04_8(item?.N04_8!)
                setInputN04_9(item?.N04_9! !== "" ? Number(item?.N04_9!).toString() : "")

                setInputN05_1(item?.N05_1!)
                setInputN05_2(item?.N05_2!)
                setInputN05_3(item?.N05_3!)
                setInputN05_4(item?.N05_4!)
                setInputN05_5(item?.N05_5!)
                setInputN05_6(item?.N05_6!)
                setInputN05_7(item?.N05_7!)
                setInputN05_8(item?.N05_8!)
                setInputN05_9(item?.N05_9! !== "" ? Number(item?.N05_9!).toString() : "")

                setInputN06_1(item?.N06_1!)
                setInputN06_2(item?.N06_2!)
                setInputN06_3(item?.N06_3!)
                setInputN06_4(item?.N06_4!)
                setInputN06_5(item?.N06_5!)
                setInputN06_6(item?.N06_6!)
                setInputN06_7(item?.N06_7!)
                setInputN06_8(item?.N06_8!)
                setInputN06_9(item?.N06_9! !== "" ? Number(item?.N06_9!).toString() : "")

                setInputN07_1(item?.N07_1!)
                setInputN07_2(item?.N07_2!)
                setInputN07_3(item?.N07_3!)
                setInputN07_4(item?.N07_4!)
                setInputN07_5(item?.N07_5!)
                setInputN07_6(item?.N07_6!)
                setInputN07_7(item?.N07_7!)
                setInputN07_8(item?.N07_8!)
                setInputN07_9(item?.N07_9! !== "" ? Number(item?.N07_9!).toString() : "")

                setInputN08_1(item?.N08_1!)
                setInputN08_2(item?.N08_2!)
                setInputN08_3(item?.N08_3!)
                setInputN08_4(item?.N08_4!)
                setInputN08_5(item?.N08_5!)
                setInputN08_6(item?.N08_6!)
                setInputN08_7(item?.N08_7!)
                setInputN08_8(item?.N08_8!)
                setInputN08_9(item?.N08_9! !== "" ? Number(item?.N08_9!).toString() : "")

                setInputN09_1(item?.N09_1!)
                setInputN09_2(item?.N09_2!)
                setInputN09_3(item?.N09_3!)
                setInputN09_4(item?.N09_4!)
                setInputN09_5(item?.N09_5!)
                setInputN09_6(item?.N09_6!)
                setInputN09_7(item?.N09_7!)
                setInputN09_8(item?.N09_8!)
                setInputN09_9(item?.N09_9! !== "" ? Number(item?.N09_9!).toString() : "")

                setInputN10_1(item?.N10_1!)
                setInputN10_2(item?.N10_2!)
                setInputN10_3(item?.N10_3!)
                setInputN10_4(item?.N10_4!)
                setInputN10_5(item?.N10_5!)
                setInputN10_6(item?.N10_6!)
                setInputN10_7(item?.N10_7!)
                setInputN10_8(item?.N10_8!)
                setInputN10_9(item?.N10_9! !== "" ? Number(item?.N10_9!).toString() : "")

                setInputN11_1(item?.N11_1!)
                setInputN11_2(item?.N11_2!)
                setInputN11_3(item?.N11_3!)
                setInputN11_4(item?.N11_4!)
                setInputN11_5(item?.N11_5!)
                setInputN11_6(item?.N11_6!)
                setInputN11_7(item?.N11_7!)
                setInputN11_8(item?.N11_8!)
                setInputN11_9(item?.N11_9! !== "" ? Number(item?.N11_9!).toString() : "")

                setInputN12_1(item?.N12_1!)
                setInputN12_2(item?.N12_2!)
                setInputN12_3(item?.N12_3!)
                setInputN12_4(item?.N12_4!)
                setInputN12_5(item?.N12_5!)
                setInputN12_6(item?.N12_6!)
                setInputN12_7(item?.N12_7!)
                setInputN12_8(item?.N12_8!)
                setInputN12_9(item?.N12_9! !== "" ? Number(item?.N12_9!).toString() : "")

                setInputN13_1(item?.N13_1!)
                setInputN13_2(item?.N13_2!)
                setInputN13_3(item?.N13_3!)
                setInputN13_4(item?.N13_4!)
                setInputN13_5(item?.N13_5!)
                setInputN13_6(item?.N13_6!)
                setInputN13_7(item?.N13_7!)
                setInputN13_8(item?.N13_8!)
                setInputN13_9(item?.N13_9! !== "" ? Number(item?.N13_9!).toString() : "")

                setInputN14_1(item?.N14_1!)
                setInputN14_2(item?.N14_2!)
                setInputN14_3(item?.N14_3!)
                setInputN14_4(item?.N14_4!)
                setInputN14_5(item?.N14_5!)
                setInputN14_6(item?.N14_6!)
                setInputN14_7(item?.N14_7!)
                setInputN14_8(item?.N14_8!)
                setInputN14_9(item?.N14_9! !== "" ? Number(item?.N14_9!).toString() : "")

                setInputN15_1(item?.N15_1!)
                setInputN15_2(item?.N15_2!)
                setInputN15_3(item?.N15_3!)
                setInputN15_4(item?.N15_4!)
                setInputN15_5(item?.N15_5!)
                setInputN15_6(item?.N15_6!)
                setInputN15_7(item?.N15_7!)
                setInputN15_8(item?.N15_8!)
                setInputN15_9(item?.N15_9! !== "" ? Number(item?.N15_9!).toString() : "")

                setInputN16_1(item?.N16_1!)
                setInputN16_2(item?.N16_2!)
                setInputN16_3(item?.N16_3!)
                setInputN16_4(item?.N16_4!)
                setInputN16_5(item?.N16_5!)
                setInputN16_6(item?.N16_6!)
                setInputN16_7(item?.N16_7!)
                setInputN16_8(item?.N16_8!)
                setInputN16_9(item?.N16_9! !== "" ? Number(item?.N16_9!).toString() : "")

                setInputN17_1(item?.N17_1!)
                setInputN17_2(item?.N17_2!)
                setInputN17_3(item?.N17_3!)
                setInputN17_4(item?.N17_4!)
                setInputN17_5(item?.N17_5!)
                setInputN17_6(item?.N17_6!)
                setInputN17_7(item?.N17_7!)
                setInputN17_8(item?.N17_8!)
                setInputN17_9(item?.N17_9! !== "" ? Number(item?.N17_9!).toString() : "")

                setInputN18_1(item?.N18_1!)
                setInputN18_2(item?.N18_2!)
                setInputN18_3(item?.N18_3!)
                setInputN18_4(item?.N18_4!)
                setInputN18_5(item?.N18_5!)
                setInputN18_6(item?.N18_6!)
                setInputN18_7(item?.N18_7!)
                setInputN18_8(item?.N18_8!)
                setInputN18_9(item?.N18_9! !== "" ? Number(item?.N18_9!).toString() : "")

                setInputN19_1(item?.N19_1!)
                setInputN19_2(item?.N19_2!)
                setInputN19_3(item?.N19_3!)
                setInputN19_4(item?.N19_4!)
                setInputN19_5(item?.N19_5!)
                setInputN19_6(item?.N19_6!)
                setInputN19_7(item?.N19_7!)
                setInputN19_8(item?.N19_8!)
                setInputN19_9(item?.N19_9! !== "" ? Number(item?.N19_9!).toString() : "")

                setInputN20_1(item?.N20_1!)
                setInputN20_2(item?.N20_2!)
                setInputN20_3(item?.N20_3!)
                setInputN20_4(item?.N20_4!)
                setInputN20_5(item?.N20_5!)
                setInputN20_6(item?.N20_6!)
                setInputN20_7(item?.N20_7!)
                setInputN20_8(item?.N20_8!)
                setInputN20_9(item?.N20_9! !== "" ? Number(item?.N20_9!).toString() : "")

                setInputN21_1(item?.N21_1!)
                setInputN21_2(item?.N21_2!)
                setInputN21_3(item?.N21_3!)
                setInputN21_4(item?.N21_4!)
                setInputN21_5(item?.N21_5!)
                setInputN21_6(item?.N21_6!)
                setInputN21_7(item?.N21_7!)
                setInputN21_8(item?.N21_8!)
                setInputN21_9(item?.N21_9! !== "" ? Number(item?.N21_9!).toString() : "")

                setInputN22_1(item?.N22_1!)
                setInputN22_2(item?.N22_2!)
                setInputN22_3(item?.N22_3!)
                setInputN22_4(item?.N22_4!)
                setInputN22_5(item?.N22_5!)
                setInputN22_6(item?.N22_6!)
                setInputN22_7(item?.N22_7!)
                setInputN22_8(item?.N22_8!)
                setInputN22_9(item?.N22_9! !== "" ? Number(item?.N22_9!).toString() : "")

                setInputN23_1(item?.N23_1!)
                setInputN23_2(item?.N23_2!)
                setInputN23_3(item?.N23_3!)
                setInputN23_4(item?.N23_4!)
                setInputN23_5(item?.N23_5!)
                setInputN23_6(item?.N23_6!)
                setInputN23_7(item?.N23_7!)
                setInputN23_8(item?.N23_8!)
                setInputN23_9(item?.N23_9! !== "" ? Number(item?.N23_9!).toString() : "")

                setInputN24_1(item?.N24_1!)
                setInputN24_2(item?.N24_2!)
                setInputN24_3(item?.N24_3!)
                setInputN24_4(item?.N24_4!)
                setInputN24_5(item?.N24_5!)
                setInputN24_6(item?.N24_6!)
                setInputN24_7(item?.N24_7!)
                setInputN24_8(item?.N24_8!)
                setInputN24_9(item?.N24_9! !== "" ? Number(item?.N24_9!).toString() : "");

                setInputN25_1(item?.N25_1!)
                setInputN25_2(item?.N25_2!)
                setInputN25_3(item?.N25_3!)
                setInputN25_4(item?.N25_4!)
                setInputN25_5(item?.N25_5!)
                setInputN25_6(item?.N25_6!)
                setInputN25_7(item?.N25_7!)
                setInputN25_8(item?.N25_8!)
                setInputN25_9(item?.N25_9! !== "" ? Number(item?.N25_9!).toString() : "");

                //panel
                if (item?.N01! === "0" || item?.N01! === "") {
                  setIsPanel1_2("none") //ปิด
                }
                else {
                  setIsPanel1_2("") //เปิด
                }

              }

              
 
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC17): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC17): ", err);
      }
    }
  }


  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("ชนิดเครื่องจักร เครื่องมือ และเทคโนโลยีดิจิทัลทางการเกษตร");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //modal popup 2
  const [show2, setShow2] = useState(false);
  const [titleModal2, setTitleModal2] = useState("1. รถแทรกเตอร์ 4 ล้อ");
  const handleClose2 = () => {
    //reset value
    setInputN02_1(REC17?.N02_1!)
    setInputN02_2(REC17?.N02_2!)
    setInputN02_3(REC17?.N02_3!)
    setInputN02_4(REC17?.N02_4!)
    setInputN02_5(REC17?.N02_5!)
    setInputN02_6(REC17?.N02_6!)
    setInputN02_7(REC17?.N02_7!)
    setInputN02_8(REC17?.N02_8!)
    setInputN02_9(REC17?.N02_9! !== "" ? Number(REC17?.N02_9!).toString() : "")
    setShow2(false)
  };
  const handleShow2 = () => setShow2(true);

  //modal popup 3
  const [show3, setShow3] = useState(false);
  const [titleModal3, setTitleModal3] = useState("2. รถไถเดินตาม ");
  const handleClose3 = () => {
    //reset value
    setInputN03_1(REC17?.N03_1!)
    setInputN03_2(REC17?.N03_2!)
    setInputN03_3(REC17?.N03_3!)
    setInputN03_4(REC17?.N03_4!)
    setInputN03_5(REC17?.N03_5!)
    setInputN03_6(REC17?.N03_6!)
    setInputN03_7(REC17?.N03_7!)
    setInputN03_8(REC17?.N03_8!)
    setInputN03_9(REC17?.N03_9! !== "" ? Number(REC17?.N03_9!).toString() : "")
    setShow3(false)
  }
  const handleShow3 = () => setShow3(true);

  //modal popup 4
  const [show4, setShow4] = useState(false);
  const [titleModal4, setTitleModal4] = useState("3.1 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้เครื่องยนต์  ");
  const handleClose4 = () => {
    //reset value
    setInputN04_1(REC17?.N04_1!)
    setInputN04_2(REC17?.N04_2!)
    setInputN04_3(REC17?.N04_3!)
    setInputN04_4(REC17?.N04_4!)
    setInputN04_5(REC17?.N04_5!)
    setInputN04_6(REC17?.N04_6!)
    setInputN04_7(REC17?.N04_7!)
    setInputN04_8(REC17?.N04_8!)
    setInputN04_9(REC17?.N04_9! !== "" ? Number(REC17?.N04_9!).toString() : "")
    setShow4(false)
  }
  const handleShow4 = () => setShow4(true);

  //modal popup 5
  const [show5, setShow5] = useState(false);
  const [titleModal5, setTitleModal5] = useState("3.2 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้มอเตอร์ไฟฟ้า  ");
  const handleClose5 = () => {
    //reset value
    setInputN05_1(REC17?.N05_1!)
    setInputN05_2(REC17?.N05_2!)
    setInputN05_3(REC17?.N05_3!)
    setInputN05_4(REC17?.N05_4!)
    setInputN05_5(REC17?.N05_5!)
    setInputN05_6(REC17?.N05_6!)
    setInputN05_7(REC17?.N05_7!)
    setInputN05_8(REC17?.N05_8!)
    setInputN05_9(REC17?.N05_9! !== "" ? Number(REC17?.N05_9!).toString() : "")
    setShow5(false)
  }
  const handleShow5 = () => setShow5(true);

  //modal popup 6
  const [show6, setShow6] = useState(false);
  const [titleModal6, setTitleModal6] = useState("3.3 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้พลังงานธรรมชาติ  ");
  const handleClose6 = () => {
    //reset value
    setInputN06_1(REC17?.N06_1!)
    setInputN06_2(REC17?.N06_2!)
    setInputN06_3(REC17?.N06_3!)
    setInputN06_4(REC17?.N06_4!)
    setInputN06_5(REC17?.N06_5!)
    setInputN06_6(REC17?.N06_6!)
    setInputN06_7(REC17?.N06_7!)
    setInputN06_8(REC17?.N06_8!)
    setInputN06_9(REC17?.N06_9! !== "" ? Number(REC17?.N06_9!).toString() : "")
    setShow6(false)
  }
  const handleShow6 = () => setShow6(true);

  //modal popup 7
  const [show7, setShow7] = useState(false);
  const [titleModal7, setTitleModal7] = useState("4.1 เครื่องพ่นยาปราบศัตรูพืช -ใช้แรงคน  ");
  const handleClose7 = () => {
    //reset value
    setInputN07_1(REC17?.N07_1!)
    setInputN07_2(REC17?.N07_2!)
    setInputN07_3(REC17?.N07_3!)
    setInputN07_4(REC17?.N07_4!)
    setInputN07_5(REC17?.N07_5!)
    setInputN07_6(REC17?.N07_6!)
    setInputN07_7(REC17?.N07_7!)
    setInputN07_8(REC17?.N07_8!)
    setInputN07_9(REC17?.N07_9! !== "" ? Number(REC17?.N07_9!).toString() : "")
    setShow7(false)
  }
  const handleShow7 = () => setShow7(true);

   //modal popup 8
   const [show8, setShow8] = useState(false);
   const [titleModal8, setTitleModal8] = useState("4.2 เครื่องพ่นยาปราบศัตรูพืช -ใช้เครื่องยนต์  ");
   const handleClose8 = () => {
    //reset value
    setInputN08_1(REC17?.N08_1!)
    setInputN08_2(REC17?.N08_2!)
    setInputN08_3(REC17?.N08_3!)
    setInputN08_4(REC17?.N08_4!)
    setInputN08_5(REC17?.N08_5!)
    setInputN08_6(REC17?.N08_6!)
    setInputN08_7(REC17?.N08_7!)
    setInputN08_8(REC17?.N08_8!)
    setInputN08_9(REC17?.N08_9! !== "" ? Number(REC17?.N08_9!).toString() : "")
    setShow8(false)
  }
   const handleShow8 = () => setShow8(true);

   //modal popup 9
   const [show9, setShow9] = useState(false);
   const [titleModal9, setTitleModal9] = useState("4.3 เครื่องพ่นยาปราบศัตรูพืช -โดรน  ");
   const handleClose9 = () => {
    //reset value
    setInputN09_1(REC17?.N09_1!)
    setInputN09_2(REC17?.N09_2!)
    setInputN09_3(REC17?.N09_3!)
    setInputN09_4(REC17?.N09_4!)
    setInputN09_5(REC17?.N09_5!)
    setInputN09_6(REC17?.N09_6!)
    setInputN09_7(REC17?.N09_7!)
    setInputN09_8(REC17?.N09_8!)
    setInputN09_9(REC17?.N09_9! !== "" ? Number(REC17?.N09_9!).toString() : "")
    setShow9(false)
  }
   const handleShow9 = () => setShow9(true);

   //modal popup 10
   const [show10, setShow10] = useState(false);
   const [titleModal10, setTitleModal10] = useState("5.1 เครื่องกำจัดวัชพืช -ใช้แรงคน");
   const handleClose10 = () => {
    //reset value
    setInputN10_1(REC17?.N10_1!)
    setInputN10_2(REC17?.N10_2!)
    setInputN10_3(REC17?.N10_3!)
    setInputN10_4(REC17?.N10_4!)
    setInputN10_5(REC17?.N10_5!)
    setInputN10_6(REC17?.N10_6!)
    setInputN10_7(REC17?.N10_7!)
    setInputN10_8(REC17?.N10_8!)
    setInputN10_9(REC17?.N10_9! !== "" ? Number(REC17?.N10_9!).toString() : "")
    setShow10(false)
  }
   const handleShow10 = () => setShow10(true);

   //modal popup 11
   const [show11, setShow11] = useState(false);
   const [titleModal11, setTitleModal11] = useState("5.2 เครื่องกำจัดวัชพืช -ใช้เครื่องยนต์");
   const handleClose11 = () => {
    //reset value
    setInputN11_1(REC17?.N11_1!)
    setInputN11_2(REC17?.N11_2!)
    setInputN11_3(REC17?.N11_3!)
    setInputN11_4(REC17?.N11_4!)
    setInputN11_5(REC17?.N11_5!)
    setInputN11_6(REC17?.N11_6!)
    setInputN11_7(REC17?.N11_7!)
    setInputN11_8(REC17?.N11_8!)
    setInputN11_9(REC17?.N11_9! !== "" ? Number(REC17?.N11_9!).toString() : "")
    setShow11(false)
  }
   const handleShow11 = () => setShow11(true);

  //modal popup 12
  const [show12, setShow12] = useState(false);
  const [titleModal12, setTitleModal12] = useState("6.1 เครื่องปลูกหรือหยอดเมล็ด -ใช้แรงคน");
  const handleClose12 = () => {
    //reset value
    setInputN12_1(REC17?.N12_1!)
    setInputN12_2(REC17?.N12_2!)
    setInputN12_3(REC17?.N12_3!)
    setInputN12_4(REC17?.N12_4!)
    setInputN12_5(REC17?.N12_5!)
    setInputN12_6(REC17?.N12_6!)
    setInputN12_7(REC17?.N12_7!)
    setInputN12_8(REC17?.N12_8!)
    setInputN12_9(REC17?.N12_9! !== "" ? Number(REC17?.N12_9!).toString() : "")
    setShow12(false)
  }
  const handleShow12 = () => setShow12(true);

  //modal popup 13
  const [show13, setShow13] = useState(false);
  const [titleModal13, setTitleModal13] = useState("6.2 เครื่องปลูกหรือหยอดเมล็ด -ใช้เครื่องยนต์ขับเคลื่อนด้วยตนเอง");
  const handleClose13 = () => {
    //reset value
    setInputN13_1(REC17?.N13_1!)
    setInputN13_2(REC17?.N13_2!)
    setInputN13_3(REC17?.N13_3!)
    setInputN13_4(REC17?.N13_4!)
    setInputN13_5(REC17?.N13_5!)
    setInputN13_6(REC17?.N13_6!)
    setInputN13_7(REC17?.N13_7!)
    setInputN13_8(REC17?.N13_8!)
    setInputN13_9(REC17?.N13_9! !== "" ? Number(REC17?.N13_9!).toString() : "")
    setShow13(false)
  }
  const handleShow13 = () => setShow13(true);

  //modal popup 14
  const [show14, setShow14] = useState(false);
  const [titleModal14, setTitleModal14] = useState("6.3 เครื่องปลูกหรือหยอดเมล็ด -พ่วงกับรถไถเดินตาม");
  const handleClose14 = () => {
    //reset value
    setInputN14_1(REC17?.N14_1!)
    setInputN14_2(REC17?.N14_2!)
    setInputN14_3(REC17?.N14_3!)
    setInputN14_4(REC17?.N14_4!)
    setInputN14_5(REC17?.N14_5!)
    setInputN14_6(REC17?.N14_6!)
    setInputN14_7(REC17?.N14_7!)
    setInputN14_8(REC17?.N14_8!)
    setInputN14_9(REC17?.N14_9! !== "" ? Number(REC17?.N14_9!).toString() : "")
    setShow14(false)
  }
  const handleShow14 = () => setShow14(true);

  //modal popup 15
  const [show15, setShow15] = useState(false);
  const [titleModal15, setTitleModal15] = useState("6.4 เครื่องปลูกหรือหยอดเมล็ด -พ่วงกับรถแทรกเตอร์ 4 ล้อ");
  const handleClose15 = () => {
    //reset value
    setInputN15_1(REC17?.N15_1!)
    setInputN15_2(REC17?.N15_2!)
    setInputN15_3(REC17?.N15_3!)
    setInputN15_4(REC17?.N15_4!)
    setInputN15_5(REC17?.N15_5!)
    setInputN15_6(REC17?.N15_6!)
    setInputN15_7(REC17?.N15_7!)
    setInputN15_8(REC17?.N15_8!)
    setInputN15_9(REC17?.N15_9! !== "" ? Number(REC17?.N15_9!).toString() : "")
    setShow15(false)
  }
  const handleShow15 = () => setShow15(true);

  //modal popup 16
  const [show16, setShow16] = useState(false);
  const [titleModal16, setTitleModal16] = useState("6.5 เครื่องปลูกหรือหยอดเมล็ด -โดรน");
  const handleClose16 = () => {
    //reset value
    setInputN16_1(REC17?.N16_1!)
    setInputN16_2(REC17?.N16_2!)
    setInputN16_3(REC17?.N16_3!)
    setInputN16_4(REC17?.N16_4!)
    setInputN16_5(REC17?.N16_5!)
    setInputN16_6(REC17?.N16_6!)
    setInputN16_7(REC17?.N16_7!)
    setInputN16_8(REC17?.N16_8!)
    setInputN16_9(REC17?.N16_9! !== "" ? Number(REC17?.N16_9!).toString() : "")
    setShow16(false)
  }
  const handleShow16 = () => setShow16(true);

  //modal popup 17
  const [show17, setShow17] = useState(false);
  const [titleModal17, setTitleModal17] = useState("7.1 เครื่องเก็บเกี่ยว (ใช้เครื่องยนต์) -เครื่องเกี่ยวอ้อย");
  const handleClose17 = () => {
    //reset value
    setInputN17_1(REC17?.N17_1!)
    setInputN17_2(REC17?.N17_2!)
    setInputN17_3(REC17?.N17_3!)
    setInputN17_4(REC17?.N17_4!)
    setInputN17_5(REC17?.N17_5!)
    setInputN17_6(REC17?.N17_6!)
    setInputN17_7(REC17?.N17_7!)
    setInputN17_8(REC17?.N17_8!)
    setInputN17_9(REC17?.N17_9! !== "" ? Number(REC17?.N17_9!).toString() : "")
    setShow17(false)
  }
  const handleShow17 = () => setShow17(true);

  //modal popup 18
  const [show18, setShow18] = useState(false);
  const [titleModal18, setTitleModal18] = useState("7.2 เครื่องเก็บเกี่ยว (ใช้เครื่องยนต์) -เครื่องเกี่ยวนวดข้าว");
  const handleClose18 = () => {
    //reset value
    setInputN18_1(REC17?.N18_1!)
    setInputN18_2(REC17?.N18_2!)
    setInputN18_3(REC17?.N18_3!)
    setInputN18_4(REC17?.N18_4!)
    setInputN18_5(REC17?.N18_5!)
    setInputN18_6(REC17?.N18_6!)
    setInputN18_7(REC17?.N18_7!)
    setInputN18_8(REC17?.N18_8!)
    setInputN18_9(REC17?.N18_9! !== "" ? Number(REC17?.N18_9!).toString() : "")
    setShow18(false)
  }
  const handleShow18 = () => setShow18(true);

  //modal popup 19
  const [show19, setShow19] = useState(false);
  const [titleModal19, setTitleModal19] = useState("8.1 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องนวดข้าวและธัญพืช");
  const handleClose19 = () => {
    //reset value
    setInputN19_1(REC17?.N19_1!)
    setInputN19_2(REC17?.N19_2!)
    setInputN19_3(REC17?.N19_3!)
    setInputN19_4(REC17?.N19_4!)
    setInputN19_5(REC17?.N19_5!)
    setInputN19_6(REC17?.N19_6!)
    setInputN19_7(REC17?.N19_7!)
    setInputN19_8(REC17?.N19_8!)
    setInputN19_9(REC17?.N19_9! !== "" ? Number(REC17?.N19_9!).toString() : "")
    setShow19(false)
  }
  const handleShow19 = () => setShow19(true);

  //modal popup 20
  const [show20, setShow20] = useState(false);
  const [titleModal20, setTitleModal20] = useState("8.2 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องกะเทาะเมล็ดข้าวโพด");
  const handleClose20 = () => {
    //reset value
    setInputN20_1(REC17?.N20_1!)
    setInputN20_2(REC17?.N20_2!)
    setInputN20_3(REC17?.N20_3!)
    setInputN20_4(REC17?.N20_4!)
    setInputN20_5(REC17?.N20_5!)
    setInputN20_6(REC17?.N20_6!)
    setInputN20_7(REC17?.N20_7!)
    setInputN20_8(REC17?.N20_8!)
    setInputN20_9(REC17?.N20_9! !== "" ? Number(REC17?.N20_9!).toString() : "")
    setShow20(false)
  }
  const handleShow20 = () => setShow20(true);

  //modal popup 21
  const [show21, setShow21] = useState(false);
  const [titleModal21, setTitleModal21] = useState("8.3 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องสีฝัดข้าวและธัญพืช");
  const handleClose21 = () => {
    //reset value
    setInputN21_1(REC17?.N21_1!)
    setInputN21_2(REC17?.N21_2!)
    setInputN21_3(REC17?.N21_3!)
    setInputN21_4(REC17?.N21_4!)
    setInputN21_5(REC17?.N21_5!)
    setInputN21_6(REC17?.N21_6!)
    setInputN21_7(REC17?.N21_7!)
    setInputN21_8(REC17?.N21_8!)
    setInputN21_9(REC17?.N21_9! !== "" ? Number(REC17?.N21_9!).toString() : "")
    setShow21(false)
  }
  const handleShow21 = () => setShow21(true);

  //modal popup 22
  const [show22, setShow22] = useState(false);
  const [titleModal22, setTitleModal22] = useState("9. เครื่องสีข้าว");
  const handleClose22 = () => {
    //reset value
    setInputN22_1(REC17?.N22_1!)
    setInputN22_2(REC17?.N22_2!)
    setInputN22_3(REC17?.N22_3!)
    setInputN22_4(REC17?.N22_4!)
    setInputN22_5(REC17?.N22_5!)
    setInputN22_6(REC17?.N22_6!)
    setInputN22_7(REC17?.N22_7!)
    setInputN22_8(REC17?.N22_8!)
    setInputN22_9(REC17?.N22_9! !== "" ? Number(REC17?.N22_9!).toString() : "")
    setShow22(false)
  }
  const handleShow22 = () => setShow22(true);

  //modal popup 23
  const [show23, setShow23] = useState(false);
  const [titleModal23, setTitleModal23] = useState("10. เครื่องรีดนม (ใช้เครื่องยนต์)");
  const handleClose23 = () => {
    //reset value
    setInputN23_1(REC17?.N23_1!)
    setInputN23_2(REC17?.N23_2!)
    setInputN23_3(REC17?.N23_3!)
    setInputN23_4(REC17?.N23_4!)
    setInputN23_5(REC17?.N23_5!)
    setInputN23_6(REC17?.N23_6!)
    setInputN23_7(REC17?.N23_7!)
    setInputN23_8(REC17?.N23_8!)
    setInputN23_9(REC17?.N23_9! !== "" ? Number(REC17?.N23_9!).toString() : "")
    setShow23(false)
  }
  const handleShow23 = () => setShow23(true);

  //modal popup 24
  const [show24, setShow24] = useState(false);
  const [titleModal24, setTitleModal24] = useState("11. เครื่องอัดฟางข้าว");
  const handleClose24 = () => {
    //reset value
    setInputN24_1(REC17?.N24_1!)
    setInputN24_2(REC17?.N24_2!)
    setInputN24_3(REC17?.N24_3!)
    setInputN24_4(REC17?.N24_4!)
    setInputN24_5(REC17?.N24_5!)
    setInputN24_6(REC17?.N24_6!)
    setInputN24_7(REC17?.N24_7!)
    setInputN24_8(REC17?.N24_8!)
    setInputN24_9(REC17?.N24_9! !== "" ? Number(REC17?.N24_9!).toString() : "")
    setShow24(false)
  }
  const handleShow24 = () => setShow24(true);

  //modal popup 25
  const [show25, setShow25] = useState(false);
  const [titleModal25, setTitleModal25] = useState("12. เครื่องอัดใบอ้อย");
  const handleClose25 = () => {
    //reset value
    setInputN25_1(REC17?.N25_1!)
    setInputN25_2(REC17?.N25_2!)
    setInputN25_3(REC17?.N25_3!)
    setInputN25_4(REC17?.N25_4!)
    setInputN25_5(REC17?.N25_5!)
    setInputN25_6(REC17?.N25_6!)
    setInputN25_7(REC17?.N25_7!)
    setInputN25_8(REC17?.N25_8!)
    setInputN25_9(REC17?.N25_9! !== "" ? Number(REC17?.N25_9!).toString() : "")
    setShow25(false)
  }
  const handleShow25 = () => setShow25(true);


  //state : disabled
  const [disabledN02, setDisabledN02] = useState<boolean>(false);
  const [disabledN03, setDisabledN03] = useState<boolean>(false);
  const [disabledN04, setDisabledN04] = useState<boolean>(false);
  const [disabledN05, setDisabledN05] = useState<boolean>(false);
  const [disabledN06, setDisabledN06] = useState<boolean>(false);
  const [disabledN07, setDisabledN07] = useState<boolean>(false);
  const [disabledN08, setDisabledN08] = useState<boolean>(false);
  const [disabledN09, setDisabledN09] = useState<boolean>(false);
  const [disabledN10, setDisabledN10] = useState<boolean>(false);
  const [disabledN11, setDisabledN11] = useState<boolean>(false);
  const [disabledN12, setDisabledN12] = useState<boolean>(false);
  const [disabledN13, setDisabledN13] = useState<boolean>(false);
  const [disabledN14, setDisabledN14] = useState<boolean>(false);
  const [disabledN15, setDisabledN15] = useState<boolean>(false);
  const [disabledN16, setDisabledN16] = useState<boolean>(false);
  const [disabledN17, setDisabledN17] = useState<boolean>(false);
  const [disabledN18, setDisabledN18] = useState<boolean>(false);
  const [disabledN19, setDisabledN19] = useState<boolean>(false);
  const [disabledN20, setDisabledN20] = useState<boolean>(false);
  const [disabledN21, setDisabledN21] = useState<boolean>(false);
  const [disabledN22, setDisabledN22] = useState<boolean>(false);
  const [disabledN23, setDisabledN23] = useState<boolean>(false);
  const [disabledN24, setDisabledN24] = useState<boolean>(false);
  const [disabledN25, setDisabledN25] = useState<boolean>(false);

  //state : disabled
  const [disabledN02_7, setDisabledN02_7] = useState<boolean>(false);
  const [disabledN02_8, setDisabledN02_8] = useState<boolean>(false);
  const [disabledN02_9, setDisabledN02_9] = useState<boolean>(false);

  const [disabledN03_7, setDisabledN03_7] = useState<boolean>(false);
  const [disabledN03_8, setDisabledN03_8] = useState<boolean>(false);
  const [disabledN03_9, setDisabledN03_9] = useState<boolean>(false);

  const [disabledN04_7, setDisabledN04_7] = useState<boolean>(false);
  const [disabledN04_8, setDisabledN04_8] = useState<boolean>(false);
  const [disabledN04_9, setDisabledN04_9] = useState<boolean>(false);

  const [disabledN05_7, setDisabledN05_7] = useState<boolean>(false);
  const [disabledN05_8, setDisabledN05_8] = useState<boolean>(false);
  const [disabledN05_9, setDisabledN05_9] = useState<boolean>(false);

  const [disabledN06_7, setDisabledN06_7] = useState<boolean>(false);
  const [disabledN06_8, setDisabledN06_8] = useState<boolean>(false);
  const [disabledN06_9, setDisabledN06_9] = useState<boolean>(false);

  const [disabledN07_7, setDisabledN07_7] = useState<boolean>(false);
  const [disabledN07_8, setDisabledN07_8] = useState<boolean>(false);
  const [disabledN07_9, setDisabledN07_9] = useState<boolean>(false);

  const [disabledN08_7, setDisabledN08_7] = useState<boolean>(false);
  const [disabledN08_8, setDisabledN08_8] = useState<boolean>(false);
  const [disabledN08_9, setDisabledN08_9] = useState<boolean>(false);

  const [disabledN09_7, setDisabledN09_7] = useState<boolean>(false);
  const [disabledN09_8, setDisabledN09_8] = useState<boolean>(false);
  const [disabledN09_9, setDisabledN09_9] = useState<boolean>(false);

  const [disabledN10_7, setDisabledN10_7] = useState<boolean>(false);
  const [disabledN10_8, setDisabledN10_8] = useState<boolean>(false);
  const [disabledN10_9, setDisabledN10_9] = useState<boolean>(false);

  const [disabledN11_7, setDisabledN11_7] = useState<boolean>(false);
  const [disabledN11_8, setDisabledN11_8] = useState<boolean>(false);
  const [disabledN11_9, setDisabledN11_9] = useState<boolean>(false);

  const [disabledN12_7, setDisabledN12_7] = useState<boolean>(false);
  const [disabledN12_8, setDisabledN12_8] = useState<boolean>(false);
  const [disabledN12_9, setDisabledN12_9] = useState<boolean>(false);

  const [disabledN13_7, setDisabledN13_7] = useState<boolean>(false);
  const [disabledN13_8, setDisabledN13_8] = useState<boolean>(false);
  const [disabledN13_9, setDisabledN13_9] = useState<boolean>(false);

  const [disabledN14_7, setDisabledN14_7] = useState<boolean>(false);
  const [disabledN14_8, setDisabledN14_8] = useState<boolean>(false);
  const [disabledN14_9, setDisabledN14_9] = useState<boolean>(false);

  const [disabledN15_7, setDisabledN15_7] = useState<boolean>(false);
  const [disabledN15_8, setDisabledN15_8] = useState<boolean>(false);
  const [disabledN15_9, setDisabledN15_9] = useState<boolean>(false);

  const [disabledN16_7, setDisabledN16_7] = useState<boolean>(false);
  const [disabledN16_8, setDisabledN16_8] = useState<boolean>(false);
  const [disabledN16_9, setDisabledN16_9] = useState<boolean>(false);

  const [disabledN17_7, setDisabledN17_7] = useState<boolean>(false);
  const [disabledN17_8, setDisabledN17_8] = useState<boolean>(false);
  const [disabledN17_9, setDisabledN17_9] = useState<boolean>(false);

  const [disabledN18_7, setDisabledN18_7] = useState<boolean>(false);
  const [disabledN18_8, setDisabledN18_8] = useState<boolean>(false);
  const [disabledN18_9, setDisabledN18_9] = useState<boolean>(false);

  const [disabledN19_7, setDisabledN19_7] = useState<boolean>(false);
  const [disabledN19_8, setDisabledN19_8] = useState<boolean>(false);
  const [disabledN19_9, setDisabledN19_9] = useState<boolean>(false);

  const [disabledN20_7, setDisabledN20_7] = useState<boolean>(false);
  const [disabledN20_8, setDisabledN20_8] = useState<boolean>(false);
  const [disabledN20_9, setDisabledN20_9] = useState<boolean>(false);

  const [disabledN21_7, setDisabledN21_7] = useState<boolean>(false);
  const [disabledN21_8, setDisabledN21_8] = useState<boolean>(false);
  const [disabledN21_9, setDisabledN21_9] = useState<boolean>(false);

  const [disabledN22_7, setDisabledN22_7] = useState<boolean>(false);
  const [disabledN22_8, setDisabledN22_8] = useState<boolean>(false);
  const [disabledN22_9, setDisabledN22_9] = useState<boolean>(false);

  const [disabledN23_7, setDisabledN23_7] = useState<boolean>(false);
  const [disabledN23_8, setDisabledN23_8] = useState<boolean>(false);
  const [disabledN23_9, setDisabledN23_9] = useState<boolean>(false);

  const [disabledN24_7, setDisabledN24_7] = useState<boolean>(false);
  const [disabledN24_8, setDisabledN24_8] = useState<boolean>(false);
  const [disabledN24_9, setDisabledN24_9] = useState<boolean>(false);

  const [disabledN25_7, setDisabledN25_7] = useState<boolean>(false);
  const [disabledN25_8, setDisabledN25_8] = useState<boolean>(false);
  const [disabledN25_9, setDisabledN25_9] = useState<boolean>(false);

  const OpenModalItem2 = () => {
    if(inputN02_1 === "1"){
      setDisabledN02(false)
      if(inputN02_2 === "1"){
        setDisabledN02_7(false)
        setDisabledN02_8(false)
        setDisabledN02_9(false)
      }
      else{
        setDisabledN02_7(true)
        setDisabledN02_8(true)
        setDisabledN02_9(true)
      }
    }
    else{
      setDisabledN02(true)
    }

    setShowWarningN02_2_6("none")
    setShowWarningN02_7_8("none")
    setShowWarningN02_9("none")
    handleShow2()
  };

  const OpenModalItem3 = () => {
    if(inputN03_1 === "1"){
      setDisabledN03(false)
      if(inputN03_2 === "1"){
        setDisabledN03_7(false)
        setDisabledN03_8(false)
        setDisabledN03_9(false)
      }
      else{
        setDisabledN03_7(true)
        setDisabledN03_8(true)
        setDisabledN03_9(true)
      }
    }
    else{
      setDisabledN03(true)
    }

    setShowWarningN03_2_6("none")
    setShowWarningN03_7_8("none")
    setShowWarningN03_9("none")
    handleShow3()
  };

  const OpenModalItem4 = () => {
    if(inputN04_1 === "1"){
      setDisabledN04(false)
      if(inputN04_2 === "1"){
        setDisabledN04_7(false)
        setDisabledN04_8(false)
        setDisabledN04_9(false)
      }
      else{
        setDisabledN04_7(true)
        setDisabledN04_8(true)
        setDisabledN04_9(true)
      }
    }
    else{
      setDisabledN04(true)
    }

    setShowWarningN04_2_6("none")
    setShowWarningN04_7_8("none")
    setShowWarningN04_9("none")
    handleShow4()
  };

  const OpenModalItem5 = () => {
    if(inputN05_1 === "1"){
      setDisabledN05(false)
      if(inputN05_2 === "1"){
        setDisabledN05_7(false)
        setDisabledN05_8(false)
        setDisabledN05_9(false)
      }
      else{
        setDisabledN05_7(true)
        setDisabledN05_8(true)
        setDisabledN05_9(true)
      }
    }
    else{
      setDisabledN05(true)
    }

    setShowWarningN05_2_6("none")
    setShowWarningN05_7_8("none")
    setShowWarningN05_9("none")
    handleShow5()
  };

  const OpenModalItem6 = () => {
    if(inputN06_1 === "1"){
      setDisabledN06(false)
      if(inputN06_2 === "1"){
        setDisabledN06_7(false)
        setDisabledN06_8(false)
        setDisabledN06_9(false)
      }
      else{
        setDisabledN06_7(true)
        setDisabledN06_8(true)
        setDisabledN06_9(true)
      }
    }
    else{
      setDisabledN06(true)
    }

    setShowWarningN06_2_6("none")
    setShowWarningN06_7_8("none")
    setShowWarningN06_9("none")
    handleShow6()
  };

  const OpenModalItem7 = () => {
    if(inputN07_1 === "1"){
      setDisabledN07(false)
      if(inputN07_2 === "1"){
        setDisabledN07_7(false)
        setDisabledN07_8(false)
        setDisabledN07_9(false)
      }
      else{
        setDisabledN07_7(true)
        setDisabledN07_8(true)
        setDisabledN07_9(true)
      }
    }
    else{
      setDisabledN07(true)
    }

    setShowWarningN07_2_6("none")
    setShowWarningN07_7_8("none")
    setShowWarningN07_9("none")
    handleShow7()
  };

  const OpenModalItem8 = () => {
    if(inputN08_1 === "1"){
      setDisabledN08(false)
      if(inputN08_2 === "1"){
        setDisabledN08_7(false)
        setDisabledN08_8(false)
        setDisabledN08_9(false)
      }
      else{
        setDisabledN08_7(true)
        setDisabledN08_8(true)
        setDisabledN08_9(true)
      }
    }
    else{
      setDisabledN08(true)
    }

    setShowWarningN08_2_6("none")
    setShowWarningN08_7_8("none")
    setShowWarningN08_9("none")
    handleShow8()
  };

  const OpenModalItem9 = () => {
    if(inputN09_1 === "1"){
      setDisabledN09(false)
      if(inputN09_2 === "1"){
        setDisabledN09_7(false)
        setDisabledN09_8(false)
        setDisabledN09_9(false)
      }
      else{
        setDisabledN09_7(true)
        setDisabledN09_8(true)
        setDisabledN09_9(true)
      }
    }
    else{
      setDisabledN09(true)
    }

    setShowWarningN09_2_6("none")
    setShowWarningN09_7_8("none")
    setShowWarningN09_9("none")
    handleShow9()
  };

  const OpenModalItem10 = () => {
    if(inputN10_1 === "1"){
      setDisabledN10(false)
      if(inputN10_2 === "1"){
        setDisabledN10_7(false)
        setDisabledN10_8(false)
        setDisabledN10_9(false)
      }
      else{
        setDisabledN10_7(true)
        setDisabledN10_8(true)
        setDisabledN10_9(true)
      }
    }
    else{
      setDisabledN10(true)
    }

    setShowWarningN10_2_6("none")
    setShowWarningN10_7_8("none")
    setShowWarningN10_9("none")
    handleShow10()
  };

  const OpenModalItem11 = () => {
    if(inputN11_1 === "1"){
      setDisabledN11(false)
      if(inputN11_2 === "1"){
        setDisabledN11_7(false)
        setDisabledN11_8(false)
        setDisabledN11_9(false)
      }
      else{
        setDisabledN11_7(true)
        setDisabledN11_8(true)
        setDisabledN11_9(true)
      }
    }
    else{
      setDisabledN11(true)
    }

    setShowWarningN11_2_6("none")
    setShowWarningN11_7_8("none")
    setShowWarningN11_9("none")
    handleShow11()
  };

  const OpenModalItem12 = () => {
    if(inputN12_1 === "1"){
      setDisabledN12(false)
      if(inputN12_2 === "1"){
        setDisabledN12_7(false)
        setDisabledN12_8(false)
        setDisabledN12_9(false)
      }
      else{
        setDisabledN12_7(true)
        setDisabledN12_8(true)
        setDisabledN12_9(true)
      }
    }
    else{
      setDisabledN12(true)
    }

    setShowWarningN12_2_6("none")
    setShowWarningN12_7_8("none")
    setShowWarningN12_9("none")
    handleShow12()
  };

  const OpenModalItem13 = () => {
    if(inputN13_1 === "1"){
      setDisabledN13(false)
      if(inputN13_2 === "1"){
        setDisabledN13_7(false)
        setDisabledN13_8(false)
        setDisabledN13_9(false)
      }
      else{
        setDisabledN13_7(true)
        setDisabledN13_8(true)
        setDisabledN13_9(true)
      }
    }
    else{
      setDisabledN13(true)
    }

    setShowWarningN13_2_6("none")
    setShowWarningN13_7_8("none")
    setShowWarningN13_9("none")
    handleShow13()
  };

  const OpenModalItem14 = () => {
    if(inputN14_1 === "1"){
      setDisabledN14(false)
      if(inputN14_2 === "1"){
        setDisabledN14_7(false)
        setDisabledN14_8(false)
        setDisabledN14_9(false)
      }
      else{
        setDisabledN14_7(true)
        setDisabledN14_8(true)
        setDisabledN14_9(true)
      }
    }
    else{
      setDisabledN14(true)
    }

    setShowWarningN14_2_6("none")
    setShowWarningN14_7_8("none")
    setShowWarningN14_9("none")
    handleShow14()
  };

  const OpenModalItem15 = () => {
    if(inputN15_1 === "1"){
      setDisabledN15(false)
      if(inputN15_2 === "1"){
        setDisabledN15_7(false)
        setDisabledN15_8(false)
        setDisabledN15_9(false)
      }
      else{
        setDisabledN15_7(true)
        setDisabledN15_8(true)
        setDisabledN15_9(true)
      }
    }
    else{
      setDisabledN15(true)
    }

    setShowWarningN15_2_6("none")
    setShowWarningN15_7_8("none")
    setShowWarningN15_9("none")
    handleShow15()
  };

  const OpenModalItem16 = () => {
    if(inputN16_1 === "1"){
      setDisabledN16(false)
      if(inputN16_2 === "1"){
        setDisabledN16_7(false)
        setDisabledN16_8(false)
        setDisabledN16_9(false)
      }
      else{
        setDisabledN16_7(true)
        setDisabledN16_8(true)
        setDisabledN16_9(true)
      }
    }
    else{
      setDisabledN16(true)
    }

    setShowWarningN16_2_6("none")
    setShowWarningN16_7_8("none")
    setShowWarningN16_9("none")
    handleShow16()
  };

  const OpenModalItem17 = () => {
    if(inputN17_1 === "1"){
      setDisabledN17(false)
      if(inputN17_2 === "1"){
        setDisabledN17_7(false)
        setDisabledN17_8(false)
        setDisabledN17_9(false)
      }
      else{
        setDisabledN17_7(true)
        setDisabledN17_8(true)
        setDisabledN17_9(true)
      }
    }
    else{
      setDisabledN17(true)
    }

    setShowWarningN17_2_6("none")
    setShowWarningN17_7_8("none")
    setShowWarningN17_9("none")
    handleShow17()
  };

  const OpenModalItem18 = () => {
    if(inputN18_1 === "1"){
      setDisabledN18(false)
      if(inputN18_2 === "1"){
        setDisabledN18_7(false)
        setDisabledN18_8(false)
        setDisabledN18_9(false)
      }
      else{
        setDisabledN18_7(true)
        setDisabledN18_8(true)
        setDisabledN18_9(true)
      }
    }
    else{
      setDisabledN18(true)
    }

    setShowWarningN18_2_6("none")
    setShowWarningN18_7_8("none")
    setShowWarningN18_9("none")
    handleShow18()
  };

  const OpenModalItem19 = () => {
    if(inputN19_1 === "1"){
      setDisabledN19(false)
      if(inputN19_2 === "1"){
        setDisabledN19_7(false)
        setDisabledN19_8(false)
        setDisabledN19_9(false)
      }
      else{
        setDisabledN19_7(true)
        setDisabledN19_8(true)
        setDisabledN19_9(true)
      }
    }
    else{
      setDisabledN19(true)
    }

    setShowWarningN19_2_6("none")
    setShowWarningN19_7_8("none")
    setShowWarningN19_9("none")
    handleShow19()
  };

  const OpenModalItem20 = () => {
    if(inputN20_1 === "1"){
      setDisabledN20(false)
      if(inputN20_2 === "1"){
        setDisabledN20_7(false)
        setDisabledN20_8(false)
        setDisabledN20_9(false)
      }
      else{
        setDisabledN20_7(true)
        setDisabledN20_8(true)
        setDisabledN20_9(true)
      }
    }
    else{
      setDisabledN20(true)
    }

    setShowWarningN20_2_6("none")
    setShowWarningN20_7_8("none")
    setShowWarningN20_9("none")
    handleShow20()
  };

  const OpenModalItem21 = () => {
    if(inputN21_1 === "1"){
      setDisabledN21(false)
      if(inputN21_2 === "1"){
        setDisabledN21_7(false)
        setDisabledN21_8(false)
        setDisabledN21_9(false)
      }
      else{
        setDisabledN21_7(true)
        setDisabledN21_8(true)
        setDisabledN21_9(true)
      }
    }
    else{
      setDisabledN21(true)
    }

    setShowWarningN21_2_6("none")
    setShowWarningN21_7_8("none")
    setShowWarningN21_9("none")
    handleShow21()
  };

  const OpenModalItem22 = () => {
    if(inputN22_1 === "1"){
      setDisabledN22(false)
      if(inputN22_2 === "1"){
        setDisabledN22_7(false)
        setDisabledN22_8(false)
        setDisabledN22_9(false)
      }
      else{
        setDisabledN22_7(true)
        setDisabledN22_8(true)
        setDisabledN22_9(true)
      }
    }
    else{
      setDisabledN22(true)
    }

    setShowWarningN22_2_6("none")
    setShowWarningN22_7_8("none")
    setShowWarningN22_9("none")
    handleShow22()
  };

  const OpenModalItem23 = () => {
    if(inputN23_1 === "1"){
      setDisabledN23(false)
      if(inputN23_2 === "1"){
        setDisabledN23_7(false)
        setDisabledN23_8(false)
        setDisabledN23_9(false)
      }
      else{
        setDisabledN23_7(true)
        setDisabledN23_8(true)
        setDisabledN23_9(true)
      }
    }
    else{
      setDisabledN23(true)
    }

    setShowWarningN23_2_6("none")
    setShowWarningN23_7_8("none")
    setShowWarningN23_9("none")
    handleShow23()
  };

  const OpenModalItem24 = () => {
    if(inputN24_1 === "1"){
      setDisabledN24(false)
      if(inputN24_2 === "1"){
        setDisabledN24_7(false)
        setDisabledN24_8(false)
        setDisabledN24_9(false)
      }
      else{
        setDisabledN24_7(true)
        setDisabledN24_8(true)
        setDisabledN24_9(true)
      }
    }
    else{
      setDisabledN24(true)
    }

    setShowWarningN24_2_6("none")
    setShowWarningN24_7_8("none")
    setShowWarningN24_9("none")
    handleShow24()
  };

  const OpenModalItem25 = () => {
    if(inputN25_1 === "1"){
      setDisabledN25(false)
      if(inputN25_2 === "1"){
        setDisabledN25_7(false)
        setDisabledN25_8(false)
        setDisabledN25_9(false)
      }
      else{
        setDisabledN25_7(true)
        setDisabledN25_8(true)
        setDisabledN25_9(true)
      }
    }
    else{
      setDisabledN25(true)
    }

    setShowWarningN25_2_6("none")
    setShowWarningN25_7_8("none")
    setShowWarningN25_9("none")
    handleShow25()
  };


  //state : panel
  const [isPanel1_2, setIsPanel1_2] = useState<string>("none"); //ปิด


  //action : input
  const N01OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setInputN01(event.target.value)

    //ถ้า N01 = 0 แล้ว N02 - N25 = blank --> ข้ามไปถาม ข้อที่ 2 , page = 19
    if(event.target.value === "0"){
      setIsPanel1_2("none") //ปิด

      setInputN02_1("");
      setInputN02_2("");
      setInputN02_3("");
      setInputN02_4("");
      setInputN02_5("");
      setInputN02_6("");
      setInputN02_7("");
      setInputN02_8("");
      setInputN02_9("");

      setInputN03_1("");
      setInputN03_2("");
      setInputN03_3("");
      setInputN03_4("");
      setInputN03_5("");
      setInputN03_6("");
      setInputN03_7("");
      setInputN03_8("");
      setInputN03_9("");

      setInputN04_1("");
      setInputN04_2("");
      setInputN04_3("");
      setInputN04_4("");
      setInputN04_5("");
      setInputN04_6("");
      setInputN04_7("");
      setInputN04_8("");
      setInputN04_9("");

      setInputN05_1("");
      setInputN05_2("");
      setInputN05_3("");
      setInputN05_4("");
      setInputN05_5("");
      setInputN05_6("");
      setInputN05_7("");
      setInputN05_8("");
      setInputN05_9("");

      setInputN06_1("");
      setInputN06_2("");
      setInputN06_3("");
      setInputN06_4("");
      setInputN06_5("");
      setInputN06_6("");
      setInputN06_7("");
      setInputN06_8("");
      setInputN06_9("");

      setInputN07_1("");
      setInputN07_2("");
      setInputN07_3("");
      setInputN07_4("");
      setInputN07_5("");
      setInputN07_6("");
      setInputN07_7("");
      setInputN07_8("");
      setInputN07_9("");

      setInputN08_1("");
      setInputN08_2("");
      setInputN08_3("");
      setInputN08_4("");
      setInputN08_5("");
      setInputN08_6("");
      setInputN08_7("");
      setInputN08_8("");
      setInputN08_9("");

      setInputN09_1("");
      setInputN09_2("");
      setInputN09_3("");
      setInputN09_4("");
      setInputN09_5("");
      setInputN09_6("");
      setInputN09_7("");
      setInputN09_8("");
      setInputN09_9("");

      setInputN10_1("");
      setInputN10_2("");
      setInputN10_3("");
      setInputN10_4("");
      setInputN10_5("");
      setInputN10_6("");
      setInputN10_7("");
      setInputN10_8("");
      setInputN10_9("");

      setInputN11_1("");
      setInputN11_2("");
      setInputN11_3("");
      setInputN11_4("");
      setInputN11_5("");
      setInputN11_6("");
      setInputN11_7("");
      setInputN11_8("");
      setInputN11_9("");

      setInputN12_1("");
      setInputN12_2("");
      setInputN12_3("");
      setInputN12_4("");
      setInputN12_5("");
      setInputN12_6("");
      setInputN12_7("");
      setInputN12_8("");
      setInputN12_9("");

      setInputN13_1("");
      setInputN13_2("");
      setInputN13_3("");
      setInputN13_4("");
      setInputN13_5("");
      setInputN13_6("");
      setInputN13_7("");
      setInputN13_8("");
      setInputN13_9("");

      setInputN14_1("");
      setInputN14_2("");
      setInputN14_3("");
      setInputN14_4("");
      setInputN14_5("");
      setInputN14_6("");
      setInputN14_7("");
      setInputN14_8("");
      setInputN14_9("");

      setInputN15_1("");
      setInputN15_2("");
      setInputN15_3("");
      setInputN15_4("");
      setInputN15_5("");
      setInputN15_6("");
      setInputN15_7("");
      setInputN15_8("");
      setInputN15_9("");

      setInputN16_1("");
      setInputN16_2("");
      setInputN16_3("");
      setInputN16_4("");
      setInputN16_5("");
      setInputN16_6("");
      setInputN16_7("");
      setInputN16_8("");
      setInputN16_9("");

      setInputN17_1("");
      setInputN17_2("");
      setInputN17_3("");
      setInputN17_4("");
      setInputN17_5("");
      setInputN17_6("");
      setInputN17_7("");
      setInputN17_8("");
      setInputN17_9("");

      setInputN18_1("");
      setInputN18_2("");
      setInputN18_3("");
      setInputN18_4("");
      setInputN18_5("");
      setInputN18_6("");
      setInputN18_7("");
      setInputN18_8("");
      setInputN18_9("");

      setInputN19_1("");
      setInputN19_2("");
      setInputN19_3("");
      setInputN19_4("");
      setInputN19_5("");
      setInputN19_6("");
      setInputN19_7("");
      setInputN19_8("");
      setInputN19_9("");

      setInputN20_1("");
      setInputN20_2("");
      setInputN20_3("");
      setInputN20_4("");
      setInputN20_5("");
      setInputN20_6("");
      setInputN20_7("");
      setInputN20_8("");
      setInputN20_9("");

      setInputN21_1("");
      setInputN21_2("");
      setInputN21_3("");
      setInputN21_4("");
      setInputN21_5("");
      setInputN21_6("");
      setInputN21_7("");
      setInputN21_8("");
      setInputN21_9("");

      setInputN22_1("");
      setInputN22_2("");
      setInputN22_3("");
      setInputN22_4("");
      setInputN22_5("");
      setInputN22_6("");
      setInputN22_7("");
      setInputN22_8("");
      setInputN22_9("");

      setInputN23_1("");
      setInputN23_2("");
      setInputN23_3("");
      setInputN23_4("");
      setInputN23_5("");
      setInputN23_6("");
      setInputN23_7("");
      setInputN23_8("");
      setInputN23_9("");

      setInputN24_1("");
      setInputN24_2("");
      setInputN24_3("");
      setInputN24_4("");
      setInputN24_5("");
      setInputN24_6("");
      setInputN24_7("");
      setInputN24_8("");
      setInputN24_9("");

      setInputN25_1("");
      setInputN25_2("");
      setInputN25_3("");
      setInputN25_4("");
      setInputN25_5("");
      setInputN25_6("");
      setInputN25_7("");
      setInputN25_8("");
      setInputN25_9("");

      setShowWarningN01("none")

    }
    else if(event.target.value === "1"){
      //
      setIsPanel1_2("") //เปิด

      setInputN02_1("0");
      setInputN02_2("0");
      setInputN02_3("0");
      setInputN02_4("0");
      setInputN02_5("0");
      setInputN02_6("0");
      setInputN02_7("0");
      setInputN02_8("0");
      setInputN02_9("");

      setInputN03_1("0");
      setInputN03_2("0");
      setInputN03_3("0");
      setInputN03_4("0");
      setInputN03_5("0");
      setInputN03_6("0");
      setInputN03_7("0");
      setInputN03_8("0");
      setInputN03_9("");

      setInputN04_1("0");
      setInputN04_2("0");
      setInputN04_3("0");
      setInputN04_4("0");
      setInputN04_5("0");
      setInputN04_6("0");
      setInputN04_7("0");
      setInputN04_8("0");
      setInputN04_9("");

      setInputN05_1("0");
      setInputN05_2("0");
      setInputN05_3("0");
      setInputN05_4("0");
      setInputN05_5("0");
      setInputN05_6("0");
      setInputN05_7("0");
      setInputN05_8("0");
      setInputN05_9("");

      setInputN06_1("0");
      setInputN06_2("0");
      setInputN06_3("0");
      setInputN06_4("0");
      setInputN06_5("0");
      setInputN06_6("0");
      setInputN06_7("0");
      setInputN06_8("0");
      setInputN06_9("");

      setInputN07_1("0");
      setInputN07_2("0");
      setInputN07_3("0");
      setInputN07_4("0");
      setInputN07_5("0");
      setInputN07_6("0");
      setInputN07_7("0");
      setInputN07_8("0");
      setInputN07_9("");

      setInputN08_1("0");
      setInputN08_2("0");
      setInputN08_3("0");
      setInputN08_4("0");
      setInputN08_5("0");
      setInputN08_6("0");
      setInputN08_7("0");
      setInputN08_8("0");
      setInputN08_9("");

      setInputN09_1("0");
      setInputN09_2("0");
      setInputN09_3("0");
      setInputN09_4("0");
      setInputN09_5("0");
      setInputN09_6("0");
      setInputN09_7("0");
      setInputN09_8("0");
      setInputN09_9("");

      setInputN10_1("0");
      setInputN10_2("0");
      setInputN10_3("0");
      setInputN10_4("0");
      setInputN10_5("0");
      setInputN10_6("0");
      setInputN10_7("0");
      setInputN10_8("0");
      setInputN10_9("");

      setInputN11_1("0");
      setInputN11_2("0");
      setInputN11_3("0");
      setInputN11_4("0");
      setInputN11_5("0");
      setInputN11_6("0");
      setInputN11_7("0");
      setInputN11_8("0");
      setInputN11_9("");

      setInputN12_1("0");
      setInputN12_2("0");
      setInputN12_3("0");
      setInputN12_4("0");
      setInputN12_5("0");
      setInputN12_6("0");
      setInputN12_7("0");
      setInputN12_8("0");
      setInputN12_9("");

      setInputN13_1("0");
      setInputN13_2("0");
      setInputN13_3("0");
      setInputN13_4("0");
      setInputN13_5("0");
      setInputN13_6("0");
      setInputN13_7("0");
      setInputN13_8("0");
      setInputN13_9("");

      setInputN14_1("0");
      setInputN14_2("0");
      setInputN14_3("0");
      setInputN14_4("0");
      setInputN14_5("0");
      setInputN14_6("0");
      setInputN14_7("0");
      setInputN14_8("0");
      setInputN14_9("");

      setInputN15_1("0");
      setInputN15_2("0");
      setInputN15_3("0");
      setInputN15_4("0");
      setInputN15_5("0");
      setInputN15_6("0");
      setInputN15_7("0");
      setInputN15_8("0");
      setInputN15_9("");

      setInputN16_1("0");
      setInputN16_2("0");
      setInputN16_3("0");
      setInputN16_4("0");
      setInputN16_5("0");
      setInputN16_6("0");
      setInputN16_7("0");
      setInputN16_8("0");
      setInputN16_9("");

      setInputN17_1("0");
      setInputN17_2("0");
      setInputN17_3("0");
      setInputN17_4("0");
      setInputN17_5("0");
      setInputN17_6("0");
      setInputN17_7("0");
      setInputN17_8("0");
      setInputN17_9("");

      setInputN18_1("0");
      setInputN18_2("0");
      setInputN18_3("0");
      setInputN18_4("0");
      setInputN18_5("0");
      setInputN18_6("0");
      setInputN18_7("0");
      setInputN18_8("0");
      setInputN18_9("");

      setInputN19_1("0");
      setInputN19_2("0");
      setInputN19_3("0");
      setInputN19_4("0");
      setInputN19_5("0");
      setInputN19_6("0");
      setInputN19_7("0");
      setInputN19_8("0");
      setInputN19_9("");

      setInputN20_1("0");
      setInputN20_2("0");
      setInputN20_3("0");
      setInputN20_4("0");
      setInputN20_5("0");
      setInputN20_6("0");
      setInputN20_7("0");
      setInputN20_8("0");
      setInputN20_9("");

      setInputN21_1("0");
      setInputN21_2("0");
      setInputN21_3("0");
      setInputN21_4("0");
      setInputN21_5("0");
      setInputN21_6("0");
      setInputN21_7("0");
      setInputN21_8("0");
      setInputN21_9("");

      setInputN22_1("0");
      setInputN22_2("0");
      setInputN22_3("0");
      setInputN22_4("0");
      setInputN22_5("0");
      setInputN22_6("0");
      setInputN22_7("0");
      setInputN22_8("0");
      setInputN22_9("");

      setInputN23_1("0");
      setInputN23_2("0");
      setInputN23_3("0");
      setInputN23_4("0");
      setInputN23_5("0");
      setInputN23_6("0");
      setInputN23_7("0");
      setInputN23_8("0");
      setInputN23_9("");

      setInputN24_1("0");
      setInputN24_2("0");
      setInputN24_3("0");
      setInputN24_4("0");
      setInputN24_5("0");
      setInputN24_6("0");
      setInputN24_7("0");
      setInputN24_8("0");
      setInputN24_9("");

      setInputN25_1("0");
      setInputN25_2("0");
      setInputN25_3("0");
      setInputN25_4("0");
      setInputN25_5("0");
      setInputN25_6("0");
      setInputN25_7("0");
      setInputN25_8("0");
      setInputN25_9("");
    }

  }

  //action : input N02
  const N02_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN02_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN02(false)

      setDisabledN02_7(true)
      setDisabledN02_8(true)
      setDisabledN02_9(true)

    }else{
      setDisabledN02(true)

      setInputN02_2("")
      setInputN02_3("")
      setInputN02_4("")
      setInputN02_5("")
      setInputN02_6("")
      setInputN02_7("")
      setInputN02_8("")
      setInputN02_9("")

    }
  };

  const N02_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN02_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN02_7(false)
      setDisabledN02_8(false)
      setDisabledN02_9(false)
    }
    else{
      setDisabledN02_7(true)
      setDisabledN02_8(true)
      setDisabledN02_9(true)

      setInputN02_7("")
      setInputN02_8("")
      setInputN02_9("")
    }
  };

  const N02_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN02_3(event.target.checked === true ? "1" : "0");
  };

  const N02_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN02_4(event.target.checked === true ? "1" : "0");
  };

  const N02_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN02_5(event.target.checked === true ? "1" : "0");
  };

  const N02_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN02_6(event.target.checked === true ? "1" : "0");
  };

  const N02_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN02_7(event.target.checked === true ? "1" : "0");
  };

  const N02_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN02_8(event.target.checked === true ? "1" : "0");
  };

  const N02_9OnChange = (event: any) => {
    setInputN02_9(event.currentTarget.value)
  }

  //action : input N03
  const N03_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN03_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN03(false)

      setDisabledN03_7(true)
      setDisabledN03_8(true)
      setDisabledN03_9(true)

    }else{
      setDisabledN03(true)

      setInputN03_2("")
      setInputN03_3("")
      setInputN03_4("")
      setInputN03_5("")
      setInputN03_6("")
      setInputN03_7("")
      setInputN03_8("")
      setInputN03_9("")

    }
  };

  const N03_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN03_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN03_7(false)
      setDisabledN03_8(false)
      setDisabledN03_9(false)
    }
    else{
      setDisabledN03_7(true)
      setDisabledN03_8(true)
      setDisabledN03_9(true)

      setInputN03_7("")
      setInputN03_8("")
      setInputN03_9("")
    }
  };

  const N03_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN03_3(event.target.checked === true ? "1" : "0");
  };

  const N03_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN03_4(event.target.checked === true ? "1" : "0");
  };

  const N03_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN03_5(event.target.checked === true ? "1" : "0");
  };

  const N03_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN03_6(event.target.checked === true ? "1" : "0");
  };

  const N03_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN03_7(event.target.checked === true ? "1" : "0");
  };

  const N03_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN03_8(event.target.checked === true ? "1" : "0");
  };

  const N03_9OnChange = (event: any) => {
    setInputN03_9(event.currentTarget.value)
  }

  //action : input N04
  const N04_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN04_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN04(false)

      setDisabledN04_7(true)
      setDisabledN04_8(true)
      setDisabledN04_9(true)

    }else{
      setDisabledN04(true)

      setInputN04_2("")
      setInputN04_3("")
      setInputN04_4("")
      setInputN04_5("")
      setInputN04_6("")
      setInputN04_7("")
      setInputN04_8("")
      setInputN04_9("")

    }
  };

  const N04_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN04_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN04_7(false)
      setDisabledN04_8(false)
      setDisabledN04_9(false)
    }
    else{
      setDisabledN04_7(true)
      setDisabledN04_8(true)
      setDisabledN04_9(true)

      setInputN04_7("")
      setInputN04_8("")
      setInputN04_9("")
    }
  };

  const N04_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN04_3(event.target.checked === true ? "1" : "0");
  };

  const N04_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN04_4(event.target.checked === true ? "1" : "0");
  };

  const N04_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN04_5(event.target.checked === true ? "1" : "0");
  };

  const N04_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN04_6(event.target.checked === true ? "1" : "0");
  };

  const N04_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN04_7(event.target.checked === true ? "1" : "0");
  };

  const N04_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN04_8(event.target.checked === true ? "1" : "0");
  };

  const N04_9OnChange = (event: any) => {
    setInputN04_9(event.currentTarget.value)
  }

  //action : input N05
  const N05_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN05_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN05(false)
      
      setDisabledN05_7(true)
      setDisabledN05_8(true)
      setDisabledN05_9(true)

    }else{
      setDisabledN05(true)

      setInputN05_2("")
      setInputN05_3("")
      setInputN05_4("")
      setInputN05_5("")
      setInputN05_6("")
      setInputN05_7("")
      setInputN05_8("")
      setInputN05_9("")

    }
  };

  const N05_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN05_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN05_7(false)
      setDisabledN05_8(false)
      setDisabledN05_9(false)
    }
    else{
      setDisabledN05_7(true)
      setDisabledN05_8(true)
      setDisabledN05_9(true)

      setInputN05_7("")
      setInputN05_8("")
      setInputN05_9("")
    }
  };

  const N05_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN05_3(event.target.checked === true ? "1" : "0");
  };

  const N05_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN05_4(event.target.checked === true ? "1" : "0");
  };

  const N05_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN05_5(event.target.checked === true ? "1" : "0");
  };

  const N05_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN05_6(event.target.checked === true ? "1" : "0");
  };

  const N05_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN05_7(event.target.checked === true ? "1" : "0");
  };

  const N05_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN05_8(event.target.checked === true ? "1" : "0");
  };

  const N05_9OnChange = (event: any) => {
    setInputN05_9(event.currentTarget.value)
  }

  //action : input N06
  const N06_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN06_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN06(false)
      
      setDisabledN06_7(true)
      setDisabledN06_8(true)
      setDisabledN06_9(true)

    }else{
      setDisabledN06(true)

      setInputN06_2("")
      setInputN06_3("")
      setInputN06_4("")
      setInputN06_5("")
      setInputN06_6("")
      setInputN06_7("")
      setInputN06_8("")
      setInputN06_9("")

    }
  };

  const N06_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN06_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN06_7(false)
      setDisabledN06_8(false)
      setDisabledN06_9(false)
    }
    else{
      setDisabledN06_7(true)
      setDisabledN06_8(true)
      setDisabledN06_9(true)

      setInputN06_7("")
      setInputN06_8("")
      setInputN06_9("")
    }
  };

  const N06_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN06_3(event.target.checked === true ? "1" : "0");
  };

  const N06_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN06_4(event.target.checked === true ? "1" : "0");
  };

  const N06_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN06_5(event.target.checked === true ? "1" : "0");
  };

  const N06_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN06_6(event.target.checked === true ? "1" : "0");
  };

  const N06_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN06_7(event.target.checked === true ? "1" : "0");
  };

  const N06_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN06_8(event.target.checked === true ? "1" : "0");
  };

  const N06_9OnChange = (event: any) => {
    setInputN06_9(event.currentTarget.value)
  }

  //action : input N07
  const N07_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN07_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN07(false)
      
      setDisabledN07_7(true)
      setDisabledN07_8(true)
      setDisabledN07_9(true)

    }else{
      setDisabledN07(true)

      setInputN07_2("")
      setInputN07_3("")
      setInputN07_4("")
      setInputN07_5("")
      setInputN07_6("")
      setInputN07_7("")
      setInputN07_8("")
      setInputN07_9("")

    }
  };

  const N07_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN07_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN07_7(false)
      setDisabledN07_8(false)
      setDisabledN07_9(false)
    }
    else{
      setDisabledN07_7(true)
      setDisabledN07_8(true)
      setDisabledN07_9(true)

      setInputN07_7("")
      setInputN07_8("")
      setInputN07_9("")
    }
  };

  const N07_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN07_3(event.target.checked === true ? "1" : "0");
  };

  const N07_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN07_4(event.target.checked === true ? "1" : "0");
  };

  const N07_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN07_5(event.target.checked === true ? "1" : "0");
  };

  const N07_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN07_6(event.target.checked === true ? "1" : "0");
  };

  const N07_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN07_7(event.target.checked === true ? "1" : "0");
  };

  const N07_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN07_8(event.target.checked === true ? "1" : "0");
  };

  const N07_9OnChange = (event: any) => {
    setInputN07_9(event.currentTarget.value)
  }

      //action : input N08
  const N08_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN08_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN08(false)
      
      setDisabledN08_7(true)
      setDisabledN08_8(true)
      setDisabledN08_9(true)

    }else{
      setDisabledN08(true)

      setInputN08_2("")
      setInputN08_3("")
      setInputN08_4("")
      setInputN08_5("")
      setInputN08_6("")
      setInputN08_7("")
      setInputN08_8("")
      setInputN08_9("")

    }
  };

  const N08_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN08_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN08_7(false)
      setDisabledN08_8(false)
      setDisabledN08_9(false)
    }
    else{
      setDisabledN08_7(true)
      setDisabledN08_8(true)
      setDisabledN08_9(true)

      setInputN08_7("")
      setInputN08_8("")
      setInputN08_9("")
    }
  };

  const N08_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN08_3(event.target.checked === true ? "1" : "0");
  };

  const N08_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN08_4(event.target.checked === true ? "1" : "0");
  };

  const N08_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN08_5(event.target.checked === true ? "1" : "0");
  };

  const N08_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN08_6(event.target.checked === true ? "1" : "0");
  };

  const N08_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN08_7(event.target.checked === true ? "1" : "0");
  };

  const N08_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN08_8(event.target.checked === true ? "1" : "0");
  };

  const N08_9OnChange = (event: any) => {
    setInputN08_9(event.currentTarget.value)
  }

  //action : input N09
  const N09_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN09_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN09(false)
      
      setDisabledN09_7(true)
      setDisabledN09_8(true)
      setDisabledN09_9(true)

    }else{
      setDisabledN09(true)

      setInputN09_2("")
      setInputN09_3("")
      setInputN09_4("")
      setInputN09_5("")
      setInputN09_6("")
      setInputN09_7("")
      setInputN09_8("")
      setInputN09_9("")

    }
  };

  const N09_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN09_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN09_7(false)
      setDisabledN09_8(false)
      setDisabledN09_9(false)
    }
    else{
      setDisabledN09_7(true)
      setDisabledN09_8(true)
      setDisabledN09_9(true)

      setInputN09_7("")
      setInputN09_8("")
      setInputN09_9("")
    }
  };

  const N09_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN09_3(event.target.checked === true ? "1" : "0");
  };

  const N09_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN09_4(event.target.checked === true ? "1" : "0");
  };

  const N09_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN09_5(event.target.checked === true ? "1" : "0");
  };

  const N09_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN09_6(event.target.checked === true ? "1" : "0");
  };

  const N09_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN09_7(event.target.checked === true ? "1" : "0");
  };

  const N09_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN09_8(event.target.checked === true ? "1" : "0");
  };

  const N09_9OnChange = (event: any) => {
    setInputN09_9(event.currentTarget.value)
  }

      //action : input N10
  const N10_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN10_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN10(false)
      
      setDisabledN10_7(true)
      setDisabledN10_8(true)
      setDisabledN10_9(true)

    }else{
      setDisabledN10(true)

      setInputN10_2("")
      setInputN10_3("")
      setInputN10_4("")
      setInputN10_5("")
      setInputN10_6("")
      setInputN10_7("")
      setInputN10_8("")
      setInputN10_9("")

    }
  };

  const N10_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN10_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN10_7(false)
      setDisabledN10_8(false)
      setDisabledN10_9(false)
    }
    else{
      setDisabledN10_7(true)
      setDisabledN10_8(true)
      setDisabledN10_9(true)

      setInputN10_7("")
      setInputN10_8("")
      setInputN10_9("")
    }
  };

  const N10_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN10_3(event.target.checked === true ? "1" : "0");
  };

  const N10_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN10_4(event.target.checked === true ? "1" : "0");
  };

  const N10_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN10_5(event.target.checked === true ? "1" : "0");
  };

  const N10_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN10_6(event.target.checked === true ? "1" : "0");
  };

  const N10_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN10_7(event.target.checked === true ? "1" : "0");
  };

  const N10_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN10_8(event.target.checked === true ? "1" : "0");
  };

  const N10_9OnChange = (event: any) => {
    setInputN10_9(event.currentTarget.value)
  }

  //action : input N11
  const N11_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN11_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN11(false)
            
      setDisabledN11_7(true)
      setDisabledN11_8(true)
      setDisabledN11_9(true)

    }else{
      setDisabledN11(true)

      setInputN11_2("")
      setInputN11_3("")
      setInputN11_4("")
      setInputN11_5("")
      setInputN11_6("")
      setInputN11_7("")
      setInputN11_8("")
      setInputN11_9("")

    }
  };

  const N11_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN11_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN11_7(false)
      setDisabledN11_8(false)
      setDisabledN11_9(false)
    }
    else{
      setDisabledN11_7(true)
      setDisabledN11_8(true)
      setDisabledN11_9(true)

      setInputN11_7("")
      setInputN11_8("")
      setInputN11_9("")
    }
  };

  const N11_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN11_3(event.target.checked === true ? "1" : "0");
  };

  const N11_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN11_4(event.target.checked === true ? "1" : "0");
  };

  const N11_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN11_5(event.target.checked === true ? "1" : "0");
  };

  const N11_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN11_6(event.target.checked === true ? "1" : "0");
  };

  const N11_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN11_7(event.target.checked === true ? "1" : "0");
  };

  const N11_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN11_8(event.target.checked === true ? "1" : "0");
  };

  const N11_9OnChange = (event: any) => {
    setInputN11_9(event.currentTarget.value)
  }

      //action : input N12
  const N12_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN12_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN12(false)
            
      setDisabledN12_7(true)
      setDisabledN12_8(true)
      setDisabledN12_9(true)

    }else{
      setDisabledN12(true)

      setInputN12_2("")
      setInputN12_3("")
      setInputN12_4("")
      setInputN12_5("")
      setInputN12_6("")
      setInputN12_7("")
      setInputN12_8("")
      setInputN12_9("")

    }
  };

  const N12_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN12_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN12_7(false)
      setDisabledN12_8(false)
      setDisabledN12_9(false)
    }
    else{
      setDisabledN12_7(true)
      setDisabledN12_8(true)
      setDisabledN12_9(true)

      setInputN12_7("")
      setInputN12_8("")
      setInputN12_9("")
    }
  };

  const N12_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN12_3(event.target.checked === true ? "1" : "0");
  };

  const N12_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN12_4(event.target.checked === true ? "1" : "0");
  };

  const N12_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN12_5(event.target.checked === true ? "1" : "0");
  };

  const N12_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN12_6(event.target.checked === true ? "1" : "0");
  };

  const N12_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN12_7(event.target.checked === true ? "1" : "0");
  };

  const N12_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN12_8(event.target.checked === true ? "1" : "0");
  };

  const N12_9OnChange = (event: any) => {
    setInputN12_9(event.currentTarget.value)
  }

    //action : input N13
    const N13_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputN13_1(event.target.checked === true ? "1" : "0");
      if(event.target.checked === true){
        setDisabledN13(false)
              
      setDisabledN13_7(true)
      setDisabledN13_8(true)
      setDisabledN13_9(true)

      }else{
        setDisabledN13(true)
  
        setInputN13_2("")
        setInputN13_3("")
        setInputN13_4("")
        setInputN13_5("")
        setInputN13_6("")
        setInputN13_7("")
        setInputN13_8("")
        setInputN13_9("")
  
      }
    };
  
    const N13_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputN13_2(event.target.checked === true ? "1" : "0");
      if(event.target.checked === true){
        setDisabledN13_7(false)
        setDisabledN13_8(false)
        setDisabledN13_9(false)
      }
      else{
        setDisabledN13_7(true)
        setDisabledN13_8(true)
        setDisabledN13_9(true)
  
        setInputN13_7("")
        setInputN13_8("")
        setInputN13_9("")
      }
    };
  
    const N13_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputN13_3(event.target.checked === true ? "1" : "0");
    };
  
    const N13_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputN13_4(event.target.checked === true ? "1" : "0");
    };
  
    const N13_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputN13_5(event.target.checked === true ? "1" : "0");
    };
  
    const N13_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputN13_6(event.target.checked === true ? "1" : "0");
    };
  
    const N13_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputN13_7(event.target.checked === true ? "1" : "0");
    };
  
    const N13_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputN13_8(event.target.checked === true ? "1" : "0");
    };
  
    const N13_9OnChange = (event: any) => {
      setInputN13_9(event.currentTarget.value)
    }

      //action : input N14
  const N14_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN14_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN14(false)
            
      setDisabledN14_7(true)
      setDisabledN14_8(true)
      setDisabledN14_9(true)

    }else{
      setDisabledN14(true)

      setInputN14_2("")
      setInputN14_3("")
      setInputN14_4("")
      setInputN14_5("")
      setInputN14_6("")
      setInputN14_7("")
      setInputN14_8("")
      setInputN14_9("")

    }
  };

  const N14_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN14_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN14_7(false)
      setDisabledN14_8(false)
      setDisabledN14_9(false)
    }
    else{
      setDisabledN14_7(true)
      setDisabledN14_8(true)
      setDisabledN14_9(true)

      setInputN14_7("")
      setInputN14_8("")
      setInputN14_9("")
    }
  };

  const N14_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN14_3(event.target.checked === true ? "1" : "0");
  };

  const N14_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN14_4(event.target.checked === true ? "1" : "0");
  };

  const N14_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN14_5(event.target.checked === true ? "1" : "0");
  };

  const N14_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN14_6(event.target.checked === true ? "1" : "0");
  };

  const N14_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN14_7(event.target.checked === true ? "1" : "0");
  };

  const N14_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN14_8(event.target.checked === true ? "1" : "0");
  };

  const N14_9OnChange = (event: any) => {
    setInputN14_9(event.currentTarget.value)
  }

  //action : input N15
  const N15_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN15_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN15(false)
            
      setDisabledN15_7(true)
      setDisabledN15_8(true)
      setDisabledN15_9(true)

    }else{
      setDisabledN15(true)

      setInputN15_2("")
      setInputN15_3("")
      setInputN15_4("")
      setInputN15_5("")
      setInputN15_6("")
      setInputN15_7("")
      setInputN15_8("")
      setInputN15_9("")

    }
  };

  const N15_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN15_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN15_7(false)
      setDisabledN15_8(false)
      setDisabledN15_9(false)
    }
    else{
      setDisabledN15_7(true)
      setDisabledN15_8(true)
      setDisabledN15_9(true)

      setInputN15_7("")
      setInputN15_8("")
      setInputN15_9("")
    }
  };

  const N15_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN15_3(event.target.checked === true ? "1" : "0");
  };

  const N15_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN15_4(event.target.checked === true ? "1" : "0");
  };

  const N15_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN15_5(event.target.checked === true ? "1" : "0");
  };

  const N15_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN15_6(event.target.checked === true ? "1" : "0");
  };

  const N15_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN15_7(event.target.checked === true ? "1" : "0");
  };

  const N15_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN15_8(event.target.checked === true ? "1" : "0");
  };

  const N15_9OnChange = (event: any) => {
    setInputN15_9(event.currentTarget.value)
  }

  //action : input N16
  const N16_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN16_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN16(false)
            
      setDisabledN16_7(true)
      setDisabledN16_8(true)
      setDisabledN16_9(true)

    }else{
      setDisabledN16(true)

      setInputN16_2("")
      setInputN16_3("")
      setInputN16_4("")
      setInputN16_5("")
      setInputN16_6("")
      setInputN16_7("")
      setInputN16_8("")
      setInputN16_9("")

    }
  };

  const N16_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN16_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN16_7(false)
      setDisabledN16_8(false)
      setDisabledN16_9(false)
    }
    else{
      setDisabledN16_7(true)
      setDisabledN16_8(true)
      setDisabledN16_9(true)

      setInputN16_7("")
      setInputN16_8("")
      setInputN16_9("")
    }
  };

  const N16_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN16_3(event.target.checked === true ? "1" : "0");
  };

  const N16_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN16_4(event.target.checked === true ? "1" : "0");
  };

  const N16_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN16_5(event.target.checked === true ? "1" : "0");
  };

  const N16_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN16_6(event.target.checked === true ? "1" : "0");
  };

  const N16_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN16_7(event.target.checked === true ? "1" : "0");
  };

  const N16_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN16_8(event.target.checked === true ? "1" : "0");
  };

  const N16_9OnChange = (event: any) => {
    setInputN16_9(event.currentTarget.value)
  }

  //action : input N17
  const N17_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN17_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN17(false)
            
      setDisabledN17_7(true)
      setDisabledN17_8(true)
      setDisabledN17_9(true)

    }else{
      setDisabledN17(true)

      setInputN17_2("")
      setInputN17_3("")
      setInputN17_4("")
      setInputN17_5("")
      setInputN17_6("")
      setInputN17_7("")
      setInputN17_8("")
      setInputN17_9("")

    }
  };

  const N17_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN17_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN17_7(false)
      setDisabledN17_8(false)
      setDisabledN17_9(false)
    }
    else{
      setDisabledN17_7(true)
      setDisabledN17_8(true)
      setDisabledN17_9(true)

      setInputN17_7("")
      setInputN17_8("")
      setInputN17_9("")
    }
  };

  const N17_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN17_3(event.target.checked === true ? "1" : "0");
  };

  const N17_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN17_4(event.target.checked === true ? "1" : "0");
  };

  const N17_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN17_5(event.target.checked === true ? "1" : "0");
  };

  const N17_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN17_6(event.target.checked === true ? "1" : "0");
  };

  const N17_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN17_7(event.target.checked === true ? "1" : "0");
  };

  const N17_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN17_8(event.target.checked === true ? "1" : "0");
  };

  const N17_9OnChange = (event: any) => {
    setInputN17_9(event.currentTarget.value)
  }

      //action : input N18
  const N18_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN18_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN18(false)
            
      setDisabledN18_7(true)
      setDisabledN18_8(true)
      setDisabledN18_9(true)

    }else{
      setDisabledN18(true)

      setInputN18_2("")
      setInputN18_3("")
      setInputN18_4("")
      setInputN18_5("")
      setInputN18_6("")
      setInputN18_7("")
      setInputN18_8("")
      setInputN18_9("")

    }
  };

  const N18_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN18_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN18_7(false)
      setDisabledN18_8(false)
      setDisabledN18_9(false)
    }
    else{
      setDisabledN18_7(true)
      setDisabledN18_8(true)
      setDisabledN18_9(true)

      setInputN18_7("")
      setInputN18_8("")
      setInputN18_9("")
    }
  };

  const N18_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN18_3(event.target.checked === true ? "1" : "0");
  };

  const N18_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN18_4(event.target.checked === true ? "1" : "0");
  };

  const N18_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN18_5(event.target.checked === true ? "1" : "0");
  };

  const N18_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN18_6(event.target.checked === true ? "1" : "0");
  };

  const N18_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN18_7(event.target.checked === true ? "1" : "0");
  };

  const N18_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN18_8(event.target.checked === true ? "1" : "0");
  };

  const N18_9OnChange = (event: any) => {
    setInputN18_9(event.currentTarget.value)
  }

  //action : input N19
  const N19_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN19_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN19(false)
            
      setDisabledN19_7(true)
      setDisabledN19_8(true)
      setDisabledN19_9(true)

    }else{
      setDisabledN19(true)

      setInputN19_2("")
      setInputN19_3("")
      setInputN19_4("")
      setInputN19_5("")
      setInputN19_6("")
      setInputN19_7("")
      setInputN19_8("")
      setInputN19_9("")

    }
  };

  const N19_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN19_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN19_7(false)
      setDisabledN19_8(false)
      setDisabledN19_9(false)
    }
    else{
      setDisabledN19_7(true)
      setDisabledN19_8(true)
      setDisabledN19_9(true)

      setInputN19_7("")
      setInputN19_8("")
      setInputN19_9("")
    }
  };

  const N19_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN19_3(event.target.checked === true ? "1" : "0");
  };

  const N19_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN19_4(event.target.checked === true ? "1" : "0");
  };

  const N19_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN19_5(event.target.checked === true ? "1" : "0");
  };

  const N19_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN19_6(event.target.checked === true ? "1" : "0");
  };

  const N19_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN19_7(event.target.checked === true ? "1" : "0");
  };

  const N19_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN19_8(event.target.checked === true ? "1" : "0");
  };

  const N19_9OnChange = (event: any) => {
    setInputN19_9(event.currentTarget.value)
  }

      //action : input N20
  const N20_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN20_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN20(false)
            
      setDisabledN20_7(true)
      setDisabledN20_8(true)
      setDisabledN20_9(true)

    }else{
      setDisabledN20(true)

      setInputN20_2("")
      setInputN20_3("")
      setInputN20_4("")
      setInputN20_5("")
      setInputN20_6("")
      setInputN20_7("")
      setInputN20_8("")
      setInputN20_9("")

    }
  };

  const N20_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN20_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN20_7(false)
      setDisabledN20_8(false)
      setDisabledN20_9(false)
    }
    else{
      setDisabledN20_7(true)
      setDisabledN20_8(true)
      setDisabledN20_9(true)

      setInputN20_7("")
      setInputN20_8("")
      setInputN20_9("")
    }
  };

  const N20_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN20_3(event.target.checked === true ? "1" : "0");
  };

  const N20_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN20_4(event.target.checked === true ? "1" : "0");
  };

  const N20_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN20_5(event.target.checked === true ? "1" : "0");
  };

  const N20_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN20_6(event.target.checked === true ? "1" : "0");
  };

  const N20_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN20_7(event.target.checked === true ? "1" : "0");
  };

  const N20_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN20_8(event.target.checked === true ? "1" : "0");
  };

  const N20_9OnChange = (event: any) => {
    setInputN20_9(event.currentTarget.value)
  }

  //action : input N21
  const N21_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN21_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN21(false)
                 
      setDisabledN21_7(true)
      setDisabledN21_8(true)
      setDisabledN21_9(true)

    }else{
      setDisabledN21(true)

      setInputN21_2("")
      setInputN21_3("")
      setInputN21_4("")
      setInputN21_5("")
      setInputN21_6("")
      setInputN21_7("")
      setInputN21_8("")
      setInputN21_9("")

    }
  };

  const N21_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN21_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN21_7(false)
      setDisabledN21_8(false)
      setDisabledN21_9(false)
    }
    else{
      setDisabledN21_7(true)
      setDisabledN21_8(true)
      setDisabledN21_9(true)

      setInputN21_7("")
      setInputN21_8("")
      setInputN21_9("")
    }
  };

  const N21_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN21_3(event.target.checked === true ? "1" : "0");
  };

  const N21_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN21_4(event.target.checked === true ? "1" : "0");
  };

  const N21_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN21_5(event.target.checked === true ? "1" : "0");
  };

  const N21_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN21_6(event.target.checked === true ? "1" : "0");
  };

  const N21_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN21_7(event.target.checked === true ? "1" : "0");
  };

  const N21_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN21_8(event.target.checked === true ? "1" : "0");
  };

  const N21_9OnChange = (event: any) => {
    setInputN21_9(event.currentTarget.value)
  }

      //action : input N22
  const N22_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN22_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN22(false)
                 
      setDisabledN22_7(true)
      setDisabledN22_8(true)
      setDisabledN22_9(true)

    }else{
      setDisabledN22(true)

      setInputN22_2("")
      setInputN22_3("")
      setInputN22_4("")
      setInputN22_5("")
      setInputN22_6("")
      setInputN22_7("")
      setInputN22_8("")
      setInputN22_9("")

    }
  };

  const N22_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN22_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN22_7(false)
      setDisabledN22_8(false)
      setDisabledN22_9(false)
    }
    else{
      setDisabledN22_7(true)
      setDisabledN22_8(true)
      setDisabledN22_9(true)

      setInputN22_7("")
      setInputN22_8("")
      setInputN22_9("")
    }
  };

  const N22_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN22_3(event.target.checked === true ? "1" : "0");
  };

  const N22_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN22_4(event.target.checked === true ? "1" : "0");
  };

  const N22_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN22_5(event.target.checked === true ? "1" : "0");
  };

  const N22_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN22_6(event.target.checked === true ? "1" : "0");
  };

  const N22_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN22_7(event.target.checked === true ? "1" : "0");
  };

  const N22_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN22_8(event.target.checked === true ? "1" : "0");
  };

  const N22_9OnChange = (event: any) => {
    setInputN22_9(event.currentTarget.value)
  }

  //action : input N23
  const N23_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN23_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN23(false)
                 
      setDisabledN23_7(true)
      setDisabledN23_8(true)
      setDisabledN23_9(true)

    }else{
      setDisabledN23(true)

      setInputN23_2("")
      setInputN23_3("")
      setInputN23_4("")
      setInputN23_5("")
      setInputN23_6("")
      setInputN23_7("")
      setInputN23_8("")
      setInputN23_9("")

    }
  };

  const N23_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN23_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN23_7(false)
      setDisabledN23_8(false)
      setDisabledN23_9(false)
    }
    else{
      setDisabledN23_7(true)
      setDisabledN23_8(true)
      setDisabledN23_9(true)

      setInputN23_7("")
      setInputN23_8("")
      setInputN23_9("")
    }
  };

  const N23_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN23_3(event.target.checked === true ? "1" : "0");
  };

  const N23_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN23_4(event.target.checked === true ? "1" : "0");
  };

  const N23_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN23_5(event.target.checked === true ? "1" : "0");
  };

  const N23_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN23_6(event.target.checked === true ? "1" : "0");
  };

  const N23_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN23_7(event.target.checked === true ? "1" : "0");
  };

  const N23_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN23_8(event.target.checked === true ? "1" : "0");
  };

  const N23_9OnChange = (event: any) => {
    setInputN23_9(event.currentTarget.value)
  }

      //action : input N24
  const N24_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN24_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN24(false)
                 
      setDisabledN24_7(true)
      setDisabledN24_8(true)
      setDisabledN24_9(true)

    }else{
      setDisabledN24(true)

      setInputN24_2("")
      setInputN24_3("")
      setInputN24_4("")
      setInputN24_5("")
      setInputN24_6("")
      setInputN24_7("")
      setInputN24_8("")
      setInputN24_9("")

    }
  };

  const N24_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN24_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN24_7(false)
      setDisabledN24_8(false)
      setDisabledN24_9(false)
    }
    else{
      setDisabledN24_7(true)
      setDisabledN24_8(true)
      setDisabledN24_9(true)

      setInputN24_7("")
      setInputN24_8("")
      setInputN24_9("")
    }
  };

  const N24_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN24_3(event.target.checked === true ? "1" : "0");
  };

  const N24_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN24_4(event.target.checked === true ? "1" : "0");
  };

  const N24_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN24_5(event.target.checked === true ? "1" : "0");
  };

  const N24_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN24_6(event.target.checked === true ? "1" : "0");
  };

  const N24_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN24_7(event.target.checked === true ? "1" : "0");
  };

  const N24_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN24_8(event.target.checked === true ? "1" : "0");
  };

  const N24_9OnChange = (event: any) => {
    setInputN24_9(event.currentTarget.value)
  }

  //action : input N25
  const N25_1OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN25_1(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN25(false)
                 
      setDisabledN25_7(true)
      setDisabledN25_8(true)
      setDisabledN25_9(true)

    }else{
      setDisabledN25(true)

      setInputN25_2("")
      setInputN25_3("")
      setInputN25_4("")
      setInputN25_5("")
      setInputN25_6("")
      setInputN25_7("")
      setInputN25_8("")
      setInputN25_9("")

    }
  };

  const N25_2OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN25_2(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledN25_7(false)
      setDisabledN25_8(false)
      setDisabledN25_9(false)
    }
    else{
      setDisabledN25_7(true)
      setDisabledN25_8(true)
      setDisabledN25_9(true)

      setInputN25_7("")
      setInputN25_8("")
      setInputN25_9("")
    }
  };

  const N25_3OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN25_3(event.target.checked === true ? "1" : "0");
  };

  const N25_4OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN25_4(event.target.checked === true ? "1" : "0");
  };

  const N25_5OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN25_5(event.target.checked === true ? "1" : "0");
  };

  const N25_6OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN25_6(event.target.checked === true ? "1" : "0");
  };

  const N25_7OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN25_7(event.target.checked === true ? "1" : "0");
  };

  const N25_8OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputN25_8(event.target.checked === true ? "1" : "0");
  };

  const N25_9OnChange = (event: any) => {
    setInputN25_9(event.currentTarget.value)
  }


  //state warning
  const [showWarningN02_2_6, setShowWarningN02_2_6] = useState<string>("none"); // ปิด
  const [showWarningN02_7_8, setShowWarningN02_7_8] = useState<string>("none"); // ปิด
  const [showWarningN02_9, setShowWarningN02_9] = useState<string>("none"); // ปิด
  const [showWarningN03_2_6, setShowWarningN03_2_6] = useState<string>("none"); // ปิด
  const [showWarningN03_7_8, setShowWarningN03_7_8] = useState<string>("none"); // ปิด
  const [showWarningN03_9, setShowWarningN03_9] = useState<string>("none"); // ปิด
  const [showWarningN04_2_6, setShowWarningN04_2_6] = useState<string>("none"); // ปิด
  const [showWarningN04_7_8, setShowWarningN04_7_8] = useState<string>("none"); // ปิด
  const [showWarningN04_9, setShowWarningN04_9] = useState<string>("none"); // ปิด
  const [showWarningN05_2_6, setShowWarningN05_2_6] = useState<string>("none"); // ปิด
  const [showWarningN05_7_8, setShowWarningN05_7_8] = useState<string>("none"); // ปิด
  const [showWarningN05_9, setShowWarningN05_9] = useState<string>("none"); // ปิด
  const [showWarningN06_2_6, setShowWarningN06_2_6] = useState<string>("none"); // ปิด
  const [showWarningN06_7_8, setShowWarningN06_7_8] = useState<string>("none"); // ปิด
  const [showWarningN06_9, setShowWarningN06_9] = useState<string>("none"); // ปิด
  const [showWarningN07_2_6, setShowWarningN07_2_6] = useState<string>("none"); // ปิด
  const [showWarningN07_7_8, setShowWarningN07_7_8] = useState<string>("none"); // ปิด
  const [showWarningN07_9, setShowWarningN07_9] = useState<string>("none"); // ปิด
  const [showWarningN08_2_6, setShowWarningN08_2_6] = useState<string>("none"); // ปิด
  const [showWarningN08_7_8, setShowWarningN08_7_8] = useState<string>("none"); // ปิด
  const [showWarningN08_9, setShowWarningN08_9] = useState<string>("none"); // ปิด
  const [showWarningN09_2_6, setShowWarningN09_2_6] = useState<string>("none"); // ปิด
  const [showWarningN09_7_8, setShowWarningN09_7_8] = useState<string>("none"); // ปิด
  const [showWarningN09_9, setShowWarningN09_9] = useState<string>("none"); // ปิด
  const [showWarningN10_2_6, setShowWarningN10_2_6] = useState<string>("none"); // ปิด
  const [showWarningN10_7_8, setShowWarningN10_7_8] = useState<string>("none"); // ปิด
  const [showWarningN10_9, setShowWarningN10_9] = useState<string>("none"); // ปิด
  const [showWarningN11_2_6, setShowWarningN11_2_6] = useState<string>("none"); // ปิด
  const [showWarningN11_7_8, setShowWarningN11_7_8] = useState<string>("none"); // ปิด
  const [showWarningN11_9, setShowWarningN11_9] = useState<string>("none"); // ปิด
  const [showWarningN12_2_6, setShowWarningN12_2_6] = useState<string>("none"); // ปิด
  const [showWarningN12_7_8, setShowWarningN12_7_8] = useState<string>("none"); // ปิด
  const [showWarningN12_9, setShowWarningN12_9] = useState<string>("none"); // ปิด
  const [showWarningN13_2_6, setShowWarningN13_2_6] = useState<string>("none"); // ปิด
  const [showWarningN13_7_8, setShowWarningN13_7_8] = useState<string>("none"); // ปิด
  const [showWarningN13_9, setShowWarningN13_9] = useState<string>("none"); // ปิด
  const [showWarningN14_2_6, setShowWarningN14_2_6] = useState<string>("none"); // ปิด
  const [showWarningN14_7_8, setShowWarningN14_7_8] = useState<string>("none"); // ปิด
  const [showWarningN14_9, setShowWarningN14_9] = useState<string>("none"); // ปิด
  const [showWarningN15_2_6, setShowWarningN15_2_6] = useState<string>("none"); // ปิด
  const [showWarningN15_7_8, setShowWarningN15_7_8] = useState<string>("none"); // ปิด
  const [showWarningN15_9, setShowWarningN15_9] = useState<string>("none"); // ปิด
  const [showWarningN16_2_6, setShowWarningN16_2_6] = useState<string>("none"); // ปิด
  const [showWarningN16_7_8, setShowWarningN16_7_8] = useState<string>("none"); // ปิด
  const [showWarningN16_9, setShowWarningN16_9] = useState<string>("none"); // ปิด
  const [showWarningN17_2_6, setShowWarningN17_2_6] = useState<string>("none"); // ปิด
  const [showWarningN17_7_8, setShowWarningN17_7_8] = useState<string>("none"); // ปิด
  const [showWarningN17_9, setShowWarningN17_9] = useState<string>("none"); // ปิด
  const [showWarningN18_2_6, setShowWarningN18_2_6] = useState<string>("none"); // ปิด
  const [showWarningN18_7_8, setShowWarningN18_7_8] = useState<string>("none"); // ปิด
  const [showWarningN18_9, setShowWarningN18_9] = useState<string>("none"); // ปิด
  const [showWarningN19_2_6, setShowWarningN19_2_6] = useState<string>("none"); // ปิด
  const [showWarningN19_7_8, setShowWarningN19_7_8] = useState<string>("none"); // ปิด
  const [showWarningN19_9, setShowWarningN19_9] = useState<string>("none"); // ปิด
  const [showWarningN20_2_6, setShowWarningN20_2_6] = useState<string>("none"); // ปิด
  const [showWarningN20_7_8, setShowWarningN20_7_8] = useState<string>("none"); // ปิด
  const [showWarningN20_9, setShowWarningN20_9] = useState<string>("none"); // ปิด
  const [showWarningN21_2_6, setShowWarningN21_2_6] = useState<string>("none"); // ปิด
  const [showWarningN21_7_8, setShowWarningN21_7_8] = useState<string>("none"); // ปิด
  const [showWarningN21_9, setShowWarningN21_9] = useState<string>("none"); // ปิด
  const [showWarningN22_2_6, setShowWarningN22_2_6] = useState<string>("none"); // ปิด
  const [showWarningN22_7_8, setShowWarningN22_7_8] = useState<string>("none"); // ปิด
  const [showWarningN22_9, setShowWarningN22_9] = useState<string>("none"); // ปิด
  const [showWarningN23_2_6, setShowWarningN23_2_6] = useState<string>("none"); // ปิด
  const [showWarningN23_7_8, setShowWarningN23_7_8] = useState<string>("none"); // ปิด
  const [showWarningN23_9, setShowWarningN23_9] = useState<string>("none"); // ปิด
  const [showWarningN24_2_6, setShowWarningN24_2_6] = useState<string>("none"); // ปิด
  const [showWarningN24_7_8, setShowWarningN24_7_8] = useState<string>("none"); // ปิด
  const [showWarningN24_9, setShowWarningN24_9] = useState<string>("none"); // ปิด
  const [showWarningN25_2_6, setShowWarningN25_2_6] = useState<string>("none"); // ปิด
  const [showWarningN25_7_8, setShowWarningN25_7_8] = useState<string>("none"); // ปิด
  const [showWarningN25_9, setShowWarningN25_9] = useState<string>("none"); // ปิด


  //save data on modal
  const SaveModal2 = async () =>{

    //consistency check
    let isvalid = true;

    if(inputN02_1 === "1"){

      if(inputN02_2 === "1" || inputN02_3 === "1" || inputN02_4 === "1" || inputN02_5 === "1" || inputN02_6 === "1"){
        setShowWarningN02_2_6("none")
      }
      else{
        isvalid = false
        setShowWarningN02_2_6("")
      }

      //ถ้า N02_2 = 1 แล้ว 
      if (inputN02_2 === "1") {
        //N02_7 - N02_8 อย่างน้อย 1 รายการ = 1
        if (inputN02_7 === "1" || inputN02_8 === "1") {
          setShowWarningN02_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN02_7_8("")
        }

        //N02_9 ≠ blank
        if (inputN02_9 === "") {
          isvalid = false
          setShowWarningN02_9("")
        }
        else {
          setShowWarningN02_9("none")
        }

        //possible code
        if(Number(inputN02_9) < 1 || Number(inputN02_9) > 50 || !Number.isInteger(Number(inputN02_9)) ){
          isvalid = false
          setShowWarningN02_9("")
        }
        else{
          setShowWarningN02_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N02";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n02_1: inputN02_1,
            n02_2: inputN02_2,
            n02_3: inputN02_3,
            n02_4: inputN02_4,
            n02_5: inputN02_5,
            n02_6: inputN02_6,
            n02_7: inputN02_7,
            n02_8: inputN02_8,
            n02_9: inputN02_9 === "" ? "" : inputN02_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose2()

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal2 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal2 ERROR: ", err);
        }
      }

    }
    else{
      //ไม่ต้องทำอะไร
    }
    
  }

  const SaveModal3 = async () =>{

    //consistency check
    let isvalid = true;

    if(inputN03_1 === "1"){

      if(inputN03_2 === "1" || inputN03_3 === "1" || inputN03_4 === "1" || inputN03_5 === "1" || inputN03_6 === "1"){
        setShowWarningN03_2_6("none")
      }
      else{
        isvalid = false
        setShowWarningN03_2_6("")
      }

      //ถ้า N03_2 = 1 แล้ว 
      if (inputN03_2 === "1") {
        if(inputN03_7 === "1" || inputN03_8 === "1" ){
          setShowWarningN03_7_8("none")
        }
        else{
          isvalid = false
          setShowWarningN03_7_8("")
        }
  
        if(inputN03_9 === ""){
          isvalid = false
          setShowWarningN03_9("")
        }
        else{
          setShowWarningN03_9("none")
        }

        //possible code
        if(Number(inputN03_9) < 1 || Number(inputN03_9) > 50  || !Number.isInteger(Number(inputN03_9))){
          isvalid = false
          setShowWarningN03_9("")
        }
        else{
          setShowWarningN03_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N03";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n03_1: inputN03_1,
            n03_2: inputN03_2,
            n03_3: inputN03_3,
            n03_4: inputN03_4,
            n03_5: inputN03_5,
            n03_6: inputN03_6,
            n03_7: inputN03_7,
            n03_8: inputN03_8,
            n03_9: inputN03_9 === "" ? "" : inputN03_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose3()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal3 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal3 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }

    
  }

  const SaveModal4 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN04_1 === "1") {

      if (inputN04_2 === "1" || inputN04_3 === "1" || inputN04_4 === "1" || inputN04_5 === "1" || inputN04_6 === "1") {
        setShowWarningN04_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN04_2_6("")
      }

      //ถ้า N04_2 = 1 แล้ว 
      if (inputN04_2 === "1"){
        if (inputN04_7 === "1" || inputN04_8 === "1") {
          setShowWarningN04_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN04_7_8("")
        }
  
        if (inputN04_9 === "") {
          isvalid = false
          setShowWarningN04_9("")
        }
        else {
          setShowWarningN04_9("none")
        }

        //possible code
        if(Number(inputN04_9) < 1 || Number(inputN04_9) > 50 || !Number.isInteger(Number(inputN04_9))){
          isvalid = false
          setShowWarningN04_9("")
        }
        else{
          setShowWarningN04_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N04";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n04_1: inputN04_1,
            n04_2: inputN04_2,
            n04_3: inputN04_3,
            n04_4: inputN04_4,
            n04_5: inputN04_5,
            n04_6: inputN04_6,
            n04_7: inputN04_7,
            n04_8: inputN04_8,
            n04_9: inputN04_9 === "" ? "" : inputN04_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose4()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal4 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal4 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal5 = async () =>{

    //consistency check
    let isvalid = true;

    if (inputN05_1 === "1") {

      if (inputN05_2 === "1" || inputN05_3 === "1" || inputN05_4 === "1" || inputN05_5 === "1" || inputN05_6 === "1") {
        setShowWarningN05_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN05_2_6("")
      }

      //ถ้า N05_2 = 1 แล้ว 
      if (inputN05_2 === "1"){
        if (inputN05_7 === "1" || inputN05_8 === "1") {
          setShowWarningN05_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN05_7_8("")
        }
  
        if (inputN05_9 === "") {
          isvalid = false
          setShowWarningN05_9("")
        }
        else {
          setShowWarningN05_9("none")
        }

        //possible code
        if(Number(inputN05_9) < 1 || Number(inputN05_9) > 50  || !Number.isInteger(Number(inputN05_9))){
          isvalid = false
          setShowWarningN05_9("")
        }
        else{
          setShowWarningN05_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N05";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n05_1: inputN05_1,
            n05_2: inputN05_2,
            n05_3: inputN05_3,
            n05_4: inputN05_4,
            n05_5: inputN05_5,
            n05_6: inputN05_6,
            n05_7: inputN05_7,
            n05_8: inputN05_8,
            n05_9: inputN05_9 === "" ? "" : inputN05_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose5()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal5 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal5 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }

    
  }

  const SaveModal6 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN06_1 === "1") {

      if (inputN06_2 === "1" || inputN06_3 === "1" || inputN06_4 === "1" || inputN06_5 === "1" || inputN06_6 === "1") {
        setShowWarningN06_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN06_2_6("")
      }

      //ถ้า N06_2 = 1 แล้ว 
      if (inputN06_2 === "1"){
        if (inputN06_7 === "1" || inputN06_8 === "1") {
          setShowWarningN06_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN06_7_8("")
        }
  
        if (inputN06_9 === "") {
          isvalid = false
          setShowWarningN06_9("")
        }
        else {
          setShowWarningN06_9("none")
        }

        //possible code
        if(Number(inputN06_9) < 1 || Number(inputN06_9) > 50 || !Number.isInteger(Number(inputN06_9))){
          isvalid = false
          setShowWarningN06_9("")
        }
        else{
          setShowWarningN06_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N06";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n06_1: inputN06_1,
            n06_2: inputN06_2,
            n06_3: inputN06_3,
            n06_4: inputN06_4,
            n06_5: inputN06_5,
            n06_6: inputN06_6,
            n06_7: inputN06_7,
            n06_8: inputN06_8,
            n06_9: inputN06_9 === "" ? "" : inputN06_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose6()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal6 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal6 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }



  }

  const SaveModal7 = async () => {
    //consistency check
    let isvalid = true;

    if (inputN07_1 === "1") {

      if (inputN07_2 === "1" || inputN07_3 === "1" || inputN07_4 === "1" || inputN07_5 === "1" || inputN07_6 === "1") {
        setShowWarningN07_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN07_2_6("")
      }

      //ถ้า N07_2 = 1 แล้ว 
      if (inputN07_2 === "1"){
        if (inputN07_7 === "1" || inputN07_8 === "1") {
          setShowWarningN07_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN07_7_8("")
        }
  
        if (inputN07_9 === "") {
          isvalid = false
          setShowWarningN07_9("")
        }
        else {
          setShowWarningN07_9("none")
        }

        //possible code
        if(Number(inputN07_9) < 1 || Number(inputN07_9) > 50 || !Number.isInteger(Number(inputN07_9))){
          isvalid = false
          setShowWarningN07_9("")
        }
        else{
          setShowWarningN07_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N07";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n07_1: inputN07_1,
            n07_2: inputN07_2,
            n07_3: inputN07_3,
            n07_4: inputN07_4,
            n07_5: inputN07_5,
            n07_6: inputN07_6,
            n07_7: inputN07_7,
            n07_8: inputN07_8,
            n07_9: inputN07_9 === "" ? "" : inputN07_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose7()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal7 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal7 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }



  }

  const SaveModal8 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN08_1 === "1") {

      if (inputN08_2 === "1" || inputN08_3 === "1" || inputN08_4 === "1" || inputN08_5 === "1" || inputN08_6 === "1") {
        setShowWarningN08_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN08_2_6("")
      }

      //ถ้า N08_2 = 1 แล้ว 
      if (inputN08_2 === "1"){
        if (inputN08_7 === "1" || inputN08_8 === "1") {
          setShowWarningN08_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN08_7_8("")
        }
  
        if (inputN08_9 === "") {
          isvalid = false
          setShowWarningN08_9("")
        }
        else {
          setShowWarningN08_9("none")
        }

        //possible code
        if(Number(inputN08_9) < 1 || Number(inputN08_9) > 50 || !Number.isInteger(Number(inputN08_9))){
          isvalid = false
          setShowWarningN08_9("")
        }
        else{
          setShowWarningN08_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N08";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n08_1: inputN08_1,
            n08_2: inputN08_2,
            n08_3: inputN08_3,
            n08_4: inputN08_4,
            n08_5: inputN08_5,
            n08_6: inputN08_6,
            n08_7: inputN08_7,
            n08_8: inputN08_8,
            n08_9: inputN08_9 === "" ? "" : inputN08_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose8()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal8 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal8 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }



  }

  const SaveModal9 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN09_1 === "1") {

      if (inputN09_2 === "1" || inputN09_3 === "1" || inputN09_4 === "1" || inputN09_5 === "1" || inputN09_6 === "1") {
        setShowWarningN09_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN09_2_6("")
      }

      //ถ้า N09_2 = 1 แล้ว 
      if (inputN09_2 === "1"){
        if (inputN09_7 === "1" || inputN09_8 === "1") {
          setShowWarningN09_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN09_7_8("")
        }
  
        if (inputN09_9 === "") {
          isvalid = false
          setShowWarningN09_9("")
        }
        else {
          setShowWarningN09_9("none")
        }

        //possible code
        if(Number(inputN09_9) < 1 || Number(inputN09_9) > 50 || !Number.isInteger(Number(inputN09_9))){
          isvalid = false
          setShowWarningN09_9("")
        }
        else{
          setShowWarningN09_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N09";
          }
  
          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n09_1: inputN09_1,
            n09_2: inputN09_2,
            n09_3: inputN09_3,
            n09_4: inputN09_4,
            n09_5: inputN09_5,
            n09_6: inputN09_6,
            n09_7: inputN09_7,
            n09_8: inputN09_8,
            n09_9: inputN09_9 === "" ? "" : inputN09_9.padStart(2, '0')
          };
  
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose9()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal9 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal9 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }

    
  }

  const SaveModal10 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN10_1 === "1") {

      if (inputN10_2 === "1" || inputN10_3 === "1" || inputN10_4 === "1" || inputN10_5 === "1" || inputN10_6 === "1") {
        setShowWarningN10_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN10_2_6("")
      }

      //ถ้า N10_2 = 1 แล้ว 
      if (inputN10_2 === "1"){
        if (inputN10_7 === "1" || inputN10_8 === "1") {
          setShowWarningN10_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN10_7_8("")
        }
  
        if (inputN10_9 === "") {
          isvalid = false
          setShowWarningN10_9("")
        }
        else {
          setShowWarningN10_9("none")
        }

        //possible code
        if(Number(inputN10_9) < 1 || Number(inputN10_9) > 50 || !Number.isInteger(Number(inputN10_9)) ){
          isvalid = false
          setShowWarningN10_9("")
        }
        else{
          setShowWarningN10_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N10";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n10_1: inputN10_1,
            n10_2: inputN10_2,
            n10_3: inputN10_3,
            n10_4: inputN10_4,
            n10_5: inputN10_5,
            n10_6: inputN10_6,
            n10_7: inputN10_7,
            n10_8: inputN10_8,
            n10_9: inputN10_9 === "" ? "" : inputN10_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose10()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal10 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal10 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal11 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN11_1 === "1") {

      if (inputN11_2 === "1" || inputN11_3 === "1" || inputN11_4 === "1" || inputN11_5 === "1" || inputN11_6 === "1") {
        setShowWarningN11_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN11_2_6("")
      }

      //ถ้า N11_2 = 1 แล้ว 
      if (inputN11_2 === "1"){
        if (inputN11_7 === "1" || inputN11_8 === "1") {
          setShowWarningN11_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN11_7_8("")
        }
  
        if (inputN11_9 === "") {
          isvalid = false
          setShowWarningN11_9("")
        }
        else {
          setShowWarningN11_9("none")
        }

        //possible code
        if(Number(inputN11_9) < 1 || Number(inputN11_9) > 50 || !Number.isInteger(Number(inputN11_9)) ){
          isvalid = false
          setShowWarningN11_9("")
        }
        else{
          setShowWarningN11_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N11";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n11_1: inputN11_1,
            n11_2: inputN11_2,
            n11_3: inputN11_3,
            n11_4: inputN11_4,
            n11_5: inputN11_5,
            n11_6: inputN11_6,
            n11_7: inputN11_7,
            n11_8: inputN11_8,
            n11_9: inputN11_9 === "" ? "" : inputN11_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose11()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal11 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal11 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal12 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN12_1 === "1") {

      if (inputN12_2 === "1" || inputN12_3 === "1" || inputN12_4 === "1" || inputN12_5 === "1" || inputN12_6 === "1") {
        setShowWarningN12_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN12_2_6("")
      }

      //ถ้า N12_2 = 1 แล้ว 
      if (inputN12_2 === "1"){
        if (inputN12_7 === "1" || inputN12_8 === "1") {
          setShowWarningN12_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN12_7_8("")
        }
  
        if (inputN12_9 === "") {
          isvalid = false
          setShowWarningN12_9("")
        }
        else {
          setShowWarningN12_9("none")
        }

        //possible code
        if(Number(inputN12_9) < 1 || Number(inputN12_9) > 50 || !Number.isInteger(Number(inputN12_9)) ){
          isvalid = false
          setShowWarningN12_9("")
        }
        else{
          setShowWarningN12_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N12";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n12_1: inputN12_1,
            n12_2: inputN12_2,
            n12_3: inputN12_3,
            n12_4: inputN12_4,
            n12_5: inputN12_5,
            n12_6: inputN12_6,
            n12_7: inputN12_7,
            n12_8: inputN12_8,
            n12_9: inputN12_9 === "" ? "" : inputN12_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose12()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal12 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal12 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal13 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN13_1 === "1") {

      if (inputN13_2 === "1" || inputN13_3 === "1" || inputN13_4 === "1" || inputN13_5 === "1" || inputN13_6 === "1") {
        setShowWarningN13_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN13_2_6("")
      }

      //ถ้า N13_2 = 1 แล้ว 
      if (inputN13_2 === "1"){
        if (inputN13_7 === "1" || inputN13_8 === "1") {
          setShowWarningN13_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN13_7_8("")
        }
  
        if (inputN13_9 === "") {
          isvalid = false
          setShowWarningN13_9("")
        }
        else {
          setShowWarningN13_9("none")
        }

        //possible code
        if(Number(inputN13_9) < 1 || Number(inputN13_9) > 50 || !Number.isInteger(Number(inputN13_9)) ){
          isvalid = false
          setShowWarningN13_9("")
        }
        else{
          setShowWarningN13_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N13";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n13_1: inputN13_1,
            n13_2: inputN13_2,
            n13_3: inputN13_3,
            n13_4: inputN13_4,
            n13_5: inputN13_5,
            n13_6: inputN13_6,
            n13_7: inputN13_7,
            n13_8: inputN13_8,
            n13_9: inputN13_9 === "" ? "" : inputN13_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose13()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal13 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal13 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal14 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN14_1 === "1") {

      if (inputN14_2 === "1" || inputN14_3 === "1" || inputN14_4 === "1" || inputN14_5 === "1" || inputN14_6 === "1") {
        setShowWarningN14_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN14_2_6("")
      }

      //ถ้า N14_2 = 1 แล้ว 
      if (inputN14_2 === "1"){
        if (inputN14_7 === "1" || inputN14_8 === "1") {
          setShowWarningN14_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN14_7_8("")
        }
  
        if (inputN14_9 === "") {
          isvalid = false
          setShowWarningN14_9("")
        }
        else {
          setShowWarningN14_9("none")
        }

        //possible code
        if(Number(inputN14_9) < 1 || Number(inputN14_9) > 50 || !Number.isInteger(Number(inputN14_9)) ){
          isvalid = false
          setShowWarningN14_9("")
        }
        else{
          setShowWarningN14_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N14";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n14_1: inputN14_1,
            n14_2: inputN14_2,
            n14_3: inputN14_3,
            n14_4: inputN14_4,
            n14_5: inputN14_5,
            n14_6: inputN14_6,
            n14_7: inputN14_7,
            n14_8: inputN14_8,
            n14_9: inputN14_9 === "" ? "" : inputN14_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose14()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal14 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal14 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal15 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN15_1 === "1") {

      if (inputN15_2 === "1" || inputN15_3 === "1" || inputN15_4 === "1" || inputN15_5 === "1" || inputN15_6 === "1") {
        setShowWarningN15_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN15_2_6("")
      }

      //ถ้า N15_2 = 1 แล้ว 
      if (inputN15_2 === "1"){
        if (inputN15_7 === "1" || inputN15_8 === "1") {
          setShowWarningN15_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN15_7_8("")
        }
  
        if (inputN15_9 === "") {
          isvalid = false
          setShowWarningN15_9("")
        }
        else {
          setShowWarningN15_9("none")
        }

        //possible code
        if(Number(inputN15_9) < 1 || Number(inputN15_9) > 50 || !Number.isInteger(Number(inputN15_9)) ){
          isvalid = false
          setShowWarningN15_9("")
        }
        else{
          setShowWarningN15_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N15";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n15_1: inputN15_1,
            n15_2: inputN15_2,
            n15_3: inputN15_3,
            n15_4: inputN15_4,
            n15_5: inputN15_5,
            n15_6: inputN15_6,
            n15_7: inputN15_7,
            n15_8: inputN15_8,
            n15_9: inputN15_9 === "" ? "" : inputN15_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose15()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal15 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal15 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }

  }

  const SaveModal16 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN16_1 === "1") {

      if (inputN16_2 === "1" || inputN16_3 === "1" || inputN16_4 === "1" || inputN16_5 === "1" || inputN16_6 === "1") {
        setShowWarningN16_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN16_2_6("")
      }

      //ถ้า N16_2 = 1 แล้ว 
      if (inputN16_2 === "1"){
        if (inputN16_7 === "1" || inputN16_8 === "1") {
          setShowWarningN16_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN16_7_8("")
        }
  
        if (inputN16_9 === "") {
          isvalid = false
          setShowWarningN16_9("")
        }
        else {
          setShowWarningN16_9("none")
        }

        //possible code
        if(Number(inputN16_9) < 1 || Number(inputN16_9) > 50 || !Number.isInteger(Number(inputN16_9)) ){
          isvalid = false
          setShowWarningN16_9("")
        }
        else{
          setShowWarningN16_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N16";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n16_1: inputN16_1,
            n16_2: inputN16_2,
            n16_3: inputN16_3,
            n16_4: inputN16_4,
            n16_5: inputN16_5,
            n16_6: inputN16_6,
            n16_7: inputN16_7,
            n16_8: inputN16_8,
            n16_9: inputN16_9 === "" ? "" : inputN16_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose16()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal16 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal16 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal17 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN17_1 === "1") {

      if (inputN17_2 === "1" || inputN17_3 === "1" || inputN17_4 === "1" || inputN17_5 === "1" || inputN17_6 === "1") {
        setShowWarningN17_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN17_2_6("")
      }

      //ถ้า N17_2 = 1 แล้ว 
      if (inputN17_2 === "1"){
        if (inputN17_7 === "1" || inputN17_8 === "1") {
          setShowWarningN17_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN17_7_8("")
        }
  
        if (inputN17_9 === "") {
          isvalid = false
          setShowWarningN17_9("")
        }
        else {
          setShowWarningN17_9("none")
        }

        //possible code
        if(Number(inputN17_9) < 1 || Number(inputN17_9) > 50 || !Number.isInteger(Number(inputN17_9)) ){
          isvalid = false
          setShowWarningN17_9("")
        }
        else{
          setShowWarningN17_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N17";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n17_1: inputN17_1,
            n17_2: inputN17_2,
            n17_3: inputN17_3,
            n17_4: inputN17_4,
            n17_5: inputN17_5,
            n17_6: inputN17_6,
            n17_7: inputN17_7,
            n17_8: inputN17_8,
            n17_9: inputN17_9 === "" ? "" : inputN17_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose17()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal17 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal17 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal18 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN18_1 === "1") {

      if (inputN18_2 === "1" || inputN18_3 === "1" || inputN18_4 === "1" || inputN18_5 === "1" || inputN18_6 === "1") {
        setShowWarningN18_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN18_2_6("")
      }

      //ถ้า N18_2 = 1 แล้ว 
      if (inputN18_2 === "1"){
        if (inputN18_7 === "1" || inputN18_8 === "1") {
          setShowWarningN18_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN18_7_8("")
        }
  
        if (inputN18_9 === "") {
          isvalid = false
          setShowWarningN18_9("")
        }
        else {
          setShowWarningN18_9("none")
        }

        //possible code
        if(Number(inputN18_9) < 1 || Number(inputN18_9) > 50 || !Number.isInteger(Number(inputN18_9)) ){
          isvalid = false
          setShowWarningN18_9("")
        }
        else{
          setShowWarningN18_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N18";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n18_1: inputN18_1,
            n18_2: inputN18_2,
            n18_3: inputN18_3,
            n18_4: inputN18_4,
            n18_5: inputN18_5,
            n18_6: inputN18_6,
            n18_7: inputN18_7,
            n18_8: inputN18_8,
            n18_9: inputN18_9 === "" ? "" : inputN18_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose18()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal18 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal18 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal19 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN19_1 === "1") {

      if (inputN19_2 === "1" || inputN19_3 === "1" || inputN19_4 === "1" || inputN19_5 === "1" || inputN19_6 === "1") {
        setShowWarningN19_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN19_2_6("")
      }

      //ถ้า N19_2 = 1 แล้ว 
      if (inputN19_2 === "1"){
        if (inputN19_7 === "1" || inputN19_8 === "1") {
          setShowWarningN19_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN19_7_8("")
        }
  
        if (inputN19_9 === "") {
          isvalid = false
          setShowWarningN19_9("")
        }
        else {
          setShowWarningN19_9("none")
        }

        //possible code
        if(Number(inputN19_9) < 1 || Number(inputN19_9) > 50 || !Number.isInteger(Number(inputN19_9)) ){
          isvalid = false
          setShowWarningN19_9("")
        }
        else{
          setShowWarningN19_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N19";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n19_1: inputN19_1,
            n19_2: inputN19_2,
            n19_3: inputN19_3,
            n19_4: inputN19_4,
            n19_5: inputN19_5,
            n19_6: inputN19_6,
            n19_7: inputN19_7,
            n19_8: inputN19_8,
            n19_9: inputN19_9 === "" ? "" : inputN19_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose19()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal19 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal19 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal20 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN20_1 === "1") {

      if (inputN20_2 === "1" || inputN20_3 === "1" || inputN20_4 === "1" || inputN20_5 === "1" || inputN20_6 === "1") {
        setShowWarningN20_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN20_2_6("")
      }

      //ถ้า N20_2 = 1 แล้ว 
      if (inputN20_2 === "1"){
        if (inputN20_7 === "1" || inputN20_8 === "1") {
          setShowWarningN20_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN20_7_8("")
        }
  
        if (inputN20_9 === "") {
          isvalid = false
          setShowWarningN20_9("")
        }
        else {
          setShowWarningN20_9("none")
        }

        //possible code
        if(Number(inputN20_9) < 1 || Number(inputN20_9) > 50 || !Number.isInteger(Number(inputN20_9)) ){
          isvalid = false
          setShowWarningN20_9("")
        }
        else{
          setShowWarningN20_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N20";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n20_1: inputN20_1,
            n20_2: inputN20_2,
            n20_3: inputN20_3,
            n20_4: inputN20_4,
            n20_5: inputN20_5,
            n20_6: inputN20_6,
            n20_7: inputN20_7,
            n20_8: inputN20_8,
            n20_9: inputN20_9 === "" ? "" : inputN20_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose20()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal20 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal20 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal21 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN21_1 === "1") {

      if (inputN21_2 === "1" || inputN21_3 === "1" || inputN21_4 === "1" || inputN21_5 === "1" || inputN21_6 === "1") {
        setShowWarningN21_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN21_2_6("")
      }

      //ถ้า N21_2 = 1 แล้ว 
      if (inputN21_2 === "1"){
        if (inputN21_7 === "1" || inputN21_8 === "1") {
          setShowWarningN21_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN21_7_8("")
        }
  
        if (inputN21_9 === "") {
          isvalid = false
          setShowWarningN21_9("")
        }
        else {
          setShowWarningN21_9("none")
        }

        //possible code
        if(Number(inputN21_9) < 1 || Number(inputN21_9) > 50 || !Number.isInteger(Number(inputN21_9)) ){
          isvalid = false
          setShowWarningN21_9("")
        }
        else{
          setShowWarningN21_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N21";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n21_1: inputN21_1,
            n21_2: inputN21_2,
            n21_3: inputN21_3,
            n21_4: inputN21_4,
            n21_5: inputN21_5,
            n21_6: inputN21_6,
            n21_7: inputN21_7,
            n21_8: inputN21_8,
            n21_9: inputN21_9 === "" ? "" : inputN21_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose21()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal21 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal21 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal22 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN22_1 === "1") {

      if (inputN22_2 === "1" || inputN22_3 === "1" || inputN22_4 === "1" || inputN22_5 === "1" || inputN22_6 === "1") {
        setShowWarningN22_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN22_2_6("")
      }

      //ถ้า N22_2 = 1 แล้ว 
      if (inputN22_2 === "1"){
        if (inputN22_7 === "1" || inputN22_8 === "1") {
          setShowWarningN22_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN22_7_8("")
        }
  
        if (inputN22_9 === "") {
          isvalid = false
          setShowWarningN22_9("")
        }
        else {
          setShowWarningN22_9("none")
        }

        //possible code
        if(Number(inputN22_9) < 1 || Number(inputN22_9) > 50 || !Number.isInteger(Number(inputN22_9)) ){
          isvalid = false
          setShowWarningN22_9("")
        }
        else{
          setShowWarningN22_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N22";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n22_1: inputN22_1,
            n22_2: inputN22_2,
            n22_3: inputN22_3,
            n22_4: inputN22_4,
            n22_5: inputN22_5,
            n22_6: inputN22_6,
            n22_7: inputN22_7,
            n22_8: inputN22_8,
            n22_9: inputN22_9 === "" ? "" : inputN22_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose22()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal22 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal22 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal23 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN23_1 === "1") {

      if (inputN23_2 === "1" || inputN23_3 === "1" || inputN23_4 === "1" || inputN23_5 === "1" || inputN23_6 === "1") {
        setShowWarningN23_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN23_2_6("")
      }

      //ถ้า N23_2 = 1 แล้ว 
      if (inputN23_2 === "1"){
        if (inputN23_7 === "1" || inputN23_8 === "1") {
          setShowWarningN23_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN23_7_8("")
        }
  
        if (inputN23_9 === "") {
          isvalid = false
          setShowWarningN23_9("")
        }
        else {
          setShowWarningN23_9("none")
        }

        //possible code
        if(Number(inputN23_9) < 1 || Number(inputN23_9) > 50 || !Number.isInteger(Number(inputN23_9)) ){
          isvalid = false
          setShowWarningN23_9("")
        }
        else{
          setShowWarningN23_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N23";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n23_1: inputN23_1,
            n23_2: inputN23_2,
            n23_3: inputN23_3,
            n23_4: inputN23_4,
            n23_5: inputN23_5,
            n23_6: inputN23_6,
            n23_7: inputN23_7,
            n23_8: inputN23_8,
            n23_9: inputN23_9 === "" ? "" : inputN23_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose23()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal23 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal23 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal24 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN24_1 === "1") {

      if (inputN24_2 === "1" || inputN24_3 === "1" || inputN24_4 === "1" || inputN24_5 === "1" || inputN24_6 === "1") {
        setShowWarningN24_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN24_2_6("")
      }

      //ถ้า N24_2 = 1 แล้ว 
      if (inputN24_2 === "1"){
        if (inputN24_7 === "1" || inputN24_8 === "1") {
          setShowWarningN24_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN24_7_8("")
        }
  
        if (inputN24_9 === "") {
          isvalid = false
          setShowWarningN24_9("")
        }
        else {
          setShowWarningN24_9("none")
        }

        //possible code
        if(Number(inputN24_9) < 1 || Number(inputN24_9) > 50 || !Number.isInteger(Number(inputN24_9)) ){
          isvalid = false
          setShowWarningN24_9("")
        }
        else{
          setShowWarningN24_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N24";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n24_1: inputN24_1,
            n24_2: inputN24_2,
            n24_3: inputN24_3,
            n24_4: inputN24_4,
            n24_5: inputN24_5,
            n24_6: inputN24_6,
            n24_7: inputN24_7,
            n24_8: inputN24_8,
            n24_9: inputN24_9 === "" ? "" : inputN24_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose24()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal24 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal24 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }

  const SaveModal25 = async () => {

    //consistency check
    let isvalid = true;

    if (inputN25_1 === "1") {

      if (inputN25_2 === "1" || inputN25_3 === "1" || inputN25_4 === "1" || inputN25_5 === "1" || inputN25_6 === "1") {
        setShowWarningN25_2_6("none")
      }
      else {
        isvalid = false
        setShowWarningN25_2_6("")
      }

      //ถ้า N25_2 = 1 แล้ว 
      if (inputN25_2 === "1"){
        if (inputN25_7 === "1" || inputN25_8 === "1") {
          setShowWarningN25_7_8("none")
        }
        else {
          isvalid = false
          setShowWarningN25_7_8("")
        }
  
        if (inputN25_9 === "") {
          isvalid = false
          setShowWarningN25_9("")
        }
        else {
          setShowWarningN25_9("none")
        }

        //possible code
        if(Number(inputN25_9) < 1 || Number(inputN25_9) > 50 || !Number.isInteger(Number(inputN25_9)) ){
          isvalid = false
          setShowWarningN25_9("")
        }
        else{
          setShowWarningN25_9("none")
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
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N25";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            n01: inputN01,
            n25_1: inputN25_1,
            n25_2: inputN25_2,
            n25_3: inputN25_3,
            n25_4: inputN25_4,
            n25_5: inputN25_5,
            n25_6: inputN25_6,
            n25_7: inputN25_7,
            n25_8: inputN25_8,
            n25_9: inputN25_9 === "" ? "" : inputN25_9.padStart(2, '0')
          };

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  //console.log("Reload getREC17");
                  
                  getREC17() //เรียกข้อมูลมาแสดงใหม่อีกครั้ง
                  handleClose25()
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS , SaveModal25 ERROR: ", err);
            });
        } catch (err) {
          console.error("SaveModal25 ERROR: ", err);
        }
      }

    }

    else {
      //ไม่ต้องทำอะไร
    }


  }


  //state warning
  const [showWarningN01, setShowWarningN01] = useState<string>("none"); // ปิด
  const [showWarningN01Blank, setShowWarningN01Blank] = useState<string>("none"); // ปิด

  const scollToWarning  = useRef<null | HTMLDivElement>(null);

  //save N01
  const SaveOnClick = async () => {

    const body = {
      aH_CODE: enumeratesk2?.AH_CODE!,
      n01: inputN01
    };

    //consistency check
    let isvalid = true;

    if(inputN01 === "1"){
      if(inputN02_1 === "1" || inputN03_1 === "1" || inputN04_1 === "1" || inputN05_1 === "1"
      || inputN06_1 === "1" || inputN07_1 === "1" || inputN08_1 === "1" || inputN09_1 === "1" || inputN10_1 === "1"
      || inputN11_1 === "1" || inputN12_1 === "1" || inputN13_1 === "1" || inputN14_1 === "1" || inputN15_1 === "1"
      || inputN16_1 === "1" || inputN17_1 === "1" || inputN18_1 === "1" || inputN19_1 === "1" || inputN20_1 === "1"
      || inputN21_1 === "1" || inputN22_1 === "1" || inputN23_1 === "1" || inputN24_1 === "1" || inputN25_1 === "1") {
        setShowWarningN01("none")
      }
      else{
        isvalid = false
        setShowWarningN01("")
        scollToWarning.current?.scrollIntoView({behavior: 'smooth'})
      }
    }

    if(inputN01 === ""){
      isvalid = false
      setShowWarningN01Blank("")
    }
    else{
      setShowWarningN01Blank("none")
    }


    //ผ่านการ consistency check
    if (isvalid) {

      try {

        //url updateREC17/N01
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC17/N01";
        }

        //api updateREC17/N01
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
              console.error("AXIOS ERROR (updateREC17/N01): ", err);
              //setPage(page + 1);
            });
        }
        
      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 7 (7.1) เครื่องจักร เครื่องมือ เทคโนโลยีดิจิทัลทางการเกษตร และอุปกรณ์การขนส่งเพื่อการเกษตร): ", error);
      }

    }
    else{
      //ไม่ต้องทำอะไร
    }

    
    

  };


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
              if (rec01list[0].A02_4 === "1") {
                setPage(17); //ไปตอนที่ 6 การทำนาเกลือสมุทร
              }
              else if (rec01list[0].A02_3 === "1") {
                setPage(15); //ไปตอนที่ 5 การเลี้ยงสัตว์น้ำ
              }
              else if (rec01list[0].A02_2 === "1") {
                setPage(13); //ไปตอนที่ 4 การเลี้ยงสัตว์
              }
              else if (rec01list[0].A02_1 === "1") {
                setPage(3); //ไปตอนที่ 3 การปลูกพืช
              }
              else {
                setPage(2); //ไปตอนที่ 2 เนื้อที่
              }


            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List in EMachinery2 ): ", err);
          });

      } catch (error) {
        console.error("OnClickBack ERROR (ตอนที่ 7 เครื่องจักร): ", error);
      }

    }

  }


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
                        ตอนที่ 7 เครื่องจักร เครื่องมือ และเทคโนโลยีดิจิทัลทางการเกษตร อุปกรณ์การขนส่งเพื่อการเกษตร และแอปพลิเคชันเพื่อการเกษตร
                      </h5>
                    </Col>

                    <Col className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl5223"
                        aria-expanded="false"
                        aria-controls="collapseControl5223"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl5223">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. เครื่องจักร เครื่องมือ และเทคโนโลยีดิจิทัลทางการเกษตร
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1.1 ในรอบ 12 เดือนที่แล้ว ที่ถือครองนี้มีการใช้เครื่องจักร เครื่องมือ และเทคโนโลยีดิจิทัลทางการเกษตร
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>N01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_N01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_N01"
                                  type="radio"
                                  id={`rd_N01${index}`}
                                  checked={option.value === inputN01}
                                  onChange={N01OnChange}
                                  value={option.value}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_N01${index}`}
                                >
                                  {option.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Col>
                      </Row>

                      {/* Panel 1.2 */}
                      <Row style={{display:isPanel1_2}}>
                        <Col md={12}>

                          <Row className="mt-2 question-subTitle">
                            <Col md={12}>
                              <label style={{ fontWeight: "bold" }}>
                                1.2 ให้สอบถามและบันทึก รายละเอียดเครื่องจักร เครื่องมือ และเทคโนโลยีดิจิทัลทางการเกษตร
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2 ">
                            <Col md={12}>
                              <label >
                                ชนิดเครื่องจักร เครื่องมือ และเทคโนโลยีดิจิทัลทางการเกษตร
                              </label>
                            </Col>
                          </Row>

                          <Row className="mt-2">

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem2} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN02_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize mt-2" style={{ fontWeight: "bold" }}> {(inputN02_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 1. รถแทรกเตอร์ 4 ล้อ </p>
                                        {/* <p>แหล่งที่มาของเครื่องจักรฯ </p>
                                      <ul>
                                        <li>ผู้ถือครองเป็นเจ้าของ</li>
                                        <li>สหกรณ์หรือกลุ่มเกษตรกร</li>
                                        <li>เป็นของผู้มารับจ้าง</li>
                                        <li>หน่วยงานของรัฐ</li>
                                        <li>อื่นๆ</li>
                                      </ul>
                                      <p>การใช้งาน </p>
                                      <ul>
                                        <li>ใช้ในที่ถือครอง</li>
                                        <li>ใช้รับจ้างในที่ถือครองอื่น</li>
                                      </ul>
                                      <p>จำนวนที่มีและยังใช้งานได้ 99 คัน</p> */}
                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem3} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN03_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN03_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 2. รถไถเดินตาม </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem4} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN04_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN04_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 3.1 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้เครื่องยนต์ </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem5} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN05_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN05_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 3.2 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้มอเตอร์ไฟฟ้า </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem6} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN06_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN06_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 3.3 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้พลังงานธรรมชาติ </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem7} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN07_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN07_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 4.1 เครื่องพ่นยาปราบศัตรูพืช -ใช้แรงคน </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem8} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN08_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN08_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 4.2 เครื่องพ่นยาปราบศัตรูพืช -ใช้เครื่องยนต์ </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem9} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN09_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN09_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 4.3 เครื่องพ่นยาปราบศัตรูพืช -โดรน </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem10} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN10_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN10_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 5.1 เครื่องกำจัดวัชพืช -ใช้แรงคน </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem11} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN11_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN11_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 5.2 เครื่องกำจัดวัชพืช -ใช้เครื่องยนต์ </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem12} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN12_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN12_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 6.1 เครื่องปลูกหรือหยอดเมล็ด -ใช้แรงคน </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem13} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN13_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN13_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 6.2 เครื่องปลูกหรือหยอดเมล็ด -ใช้เครื่องยนต์ขับเคลื่อนด้วยตนเอง </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem14} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                <div className={`card-body ${(inputN14_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN14_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 6.3 เครื่องปลูกหรือหยอดเมล็ด -พ่วงกับรถไถเดินตาม </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem15} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN15_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN15_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 6.4 เครื่องปลูกหรือหยอดเมล็ด -พ่วงกับรถแทรกเตอร์ 4 ล้อ </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem16} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN16_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN16_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 6.5 เครื่องปลูกหรือหยอดเมล็ด -โดรน </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem17} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN17_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN17_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 7.1 เครื่องเก็บเกี่ยว (ใช้เครื่องยนต์) -เครื่องเกี่ยวอ้อย </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem18} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN18_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN18_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 7.2 เครื่องเก็บเกี่ยว (ใช้เครื่องยนต์) -เครื่องเกี่ยวนวดข้าว </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem19} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN19_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN19_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 8.1 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องนวดข้าวและธัญพืช </p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem20} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN20_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN20_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 8.2 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องกะเทาะเมล็ดข้าวโพด</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem21} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN21_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN21_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 8.3 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องสีฝัดข้าวและธัญพืช</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem22} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN22_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN22_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 9. เครื่องสีข้าว</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem23} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN23_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN23_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 10. เครื่องรีดนม (ใช้เครื่องยนต์)</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem24} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN24_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN24_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 11. เครื่องอัดฟางข้าว</p>

                                      </div>
                                    </Row>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <a onClick={OpenModalItem25} >
                                <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                  <div className={`card-body ${(inputN25_1 === "1" )?"box-list-success":"box-list-warning"} `}>
                                    <Row>
                                      <div className="col-lg-12 col-md-12 col-sm-12 ">
                                        <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(inputN25_1 === "1" ) && (<i className='bx bxs-check-square fs-4'></i>) } 12. เครื่องอัดใบอ้อย</p>

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
                          <div className="mb-3" style={{ display: showWarningN01 }}><label className="text-danger">กรุณาเลือก N02 ถึง N25 อย่างน้อย 1 รายการ</label></div>
                          <div className="mb-3" style={{ display: showWarningN01Blank }}><label className="text-danger">กรุณาเลือก N01</label></div>
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

      <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal2}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N02_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N02_1"
                        onChange={N02_1OnChange}
                        checked={inputN02_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N02_1">
                        {" "}
                        1. รถแทรกเตอร์ 4 ล้อ
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N02_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N02_2"
                        onChange={N02_2OnChange}
                        checked={inputN02_2 === "1" ? true : false }
                        disabled={disabledN02}
                      />
                      <label className="form-check-label" htmlFor="N02_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N02_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N02_3"
                        onChange={N02_3OnChange}
                        checked={inputN02_3 === "1" ? true : false }
                        disabled={disabledN02}
                      />
                      <label className="form-check-label" htmlFor="N02_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N02_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N02_4"
                        onChange={N02_4OnChange}
                        checked={inputN02_4 === "1" ? true : false }
                        disabled={disabledN02}
                      />
                      <label className="form-check-label" htmlFor="N02_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N02_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N02_5"
                        onChange={N02_5OnChange}
                        checked={inputN02_5 === "1" ? true : false }
                        disabled={disabledN02}
                      />
                      <label className="form-check-label" htmlFor="N02_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N02_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N02_6"
                        onChange={N02_6OnChange}
                        checked={inputN02_6 === "1" ? true : false }
                        disabled={disabledN02}
                      />
                      <label className="form-check-label" htmlFor="N02_6">
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
                      <label> N02_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N02_7"
                            onChange={N02_7OnChange}
                            checked={inputN02_7 === "1" ? true : false }
                            disabled={disabledN02 || disabledN02_7}
                          />
                          <label className="form-check-label" htmlFor="N02_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N02_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N02_8"
                            onChange={N02_8OnChange}
                            checked={inputN02_8 === "1" ? true : false }
                            disabled={disabledN02 || disabledN02_8}
                          />
                          <label className="form-check-label" htmlFor="N02_8">
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
                    <label> N02_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N02_9OnChange}
                        value={inputN02_9}
                        disabled={disabledN02 || disabledN02_9}
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
              <div className="mb-3" style={{ display: showWarningN02_2_6 }}><label className="text-danger">กรุณาเลือก N02_2 ถึง N02_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN02_7_8 }}><label className="text-danger">กรุณาเลือก N02_7 ถึง N02_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN02_9 }}><label className="text-danger">กรุณาระบุ N02_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose2}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose2()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal2()
                      : handleClose2()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show3} onHide={handleClose3} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal3}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N03_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N03_1"
                        onChange={N03_1OnChange}
                        checked={inputN03_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N03_1">
                        {" "}
                        2. รถไถเดินตาม
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N03_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N03_2"
                        onChange={N03_2OnChange}
                        checked={inputN03_2 === "1" ? true : false }
                        disabled={disabledN03}
                      />
                      <label className="form-check-label" htmlFor="N03_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N03_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N03_3"
                        onChange={N03_3OnChange}
                        checked={inputN03_3 === "1" ? true : false }
                        disabled={disabledN03}
                      />
                      <label className="form-check-label" htmlFor="N03_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N03_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N03_4"
                        onChange={N03_4OnChange}
                        checked={inputN03_4 === "1" ? true : false }
                        disabled={disabledN03}
                      />
                      <label className="form-check-label" htmlFor="N03_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N03_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N03_5"
                        onChange={N03_5OnChange}
                        checked={inputN03_5 === "1" ? true : false }
                        disabled={disabledN03}
                      />
                      <label className="form-check-label" htmlFor="N03_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N03_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N03_6"
                        onChange={N03_6OnChange}
                        checked={inputN03_6 === "1" ? true : false }
                        disabled={disabledN03}
                      />
                      <label className="form-check-label" htmlFor="N03_6">
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
                      <label> N03_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N03_7"
                            onChange={N03_7OnChange}
                            checked={inputN03_7 === "1" ? true : false }
                            disabled={disabledN03 || disabledN03_7}
                          />
                          <label className="form-check-label" htmlFor="N03_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N03_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N03_8"
                            onChange={N03_8OnChange}
                            checked={inputN03_8 === "1" ? true : false }
                            disabled={disabledN03 || disabledN03_8}
                          />
                          <label className="form-check-label" htmlFor="N03_8">
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
                    <label> N03_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N03_9OnChange}
                        value={inputN03_9}
                        disabled={disabledN03 || disabledN03_9}
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
              <div className="mb-3" style={{ display: showWarningN03_2_6 }}><label className="text-danger">กรุณาเลือก N03_2 ถึง N03_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN03_7_8 }}><label className="text-danger">กรุณาเลือก N03_7 ถึง N03_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN03_9 }}><label className="text-danger">กรุณาระบุ N03_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose3}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose3()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal3()
                      : handleClose3()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show4} onHide={handleClose4} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal4}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N04_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N04_1"
                        onChange={N04_1OnChange}
                        checked={inputN04_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N04_1">
                        {" "}
                        3.1 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้เครื่องยนต์
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N04_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N04_2"
                        onChange={N04_2OnChange}
                        checked={inputN04_2 === "1" ? true : false }
                        disabled={disabledN04}
                      />
                      <label className="form-check-label" htmlFor="N04_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N04_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N04_3"
                        onChange={N04_3OnChange}
                        checked={inputN04_3 === "1" ? true : false }
                        disabled={disabledN04}
                      />
                      <label className="form-check-label" htmlFor="N04_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N04_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N04_4"
                        onChange={N04_4OnChange}
                        checked={inputN04_4 === "1" ? true : false }
                        disabled={disabledN04}
                      />
                      <label className="form-check-label" htmlFor="N04_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N04_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N04_5"
                        onChange={N04_5OnChange}
                        checked={inputN04_5 === "1" ? true : false }
                        disabled={disabledN04}
                      />
                      <label className="form-check-label" htmlFor="N04_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N04_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N04_6"
                        onChange={N04_6OnChange}
                        checked={inputN04_6 === "1" ? true : false }
                        disabled={disabledN04}
                      />
                      <label className="form-check-label" htmlFor="N04_6">
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
                      <label> N04_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N04_7"
                            onChange={N04_7OnChange}
                            checked={inputN04_7 === "1" ? true : false }
                            disabled={disabledN04 || disabledN04_7}
                          />
                          <label className="form-check-label" htmlFor="N04_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N04_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N04_8"
                            onChange={N04_8OnChange}
                            checked={inputN04_8 === "1" ? true : false }
                            disabled={disabledN04 || disabledN04_8}
                          />
                          <label className="form-check-label" htmlFor="N04_8">
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
                    <label> N04_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N04_9OnChange}
                        value={inputN04_9}
                        disabled={disabledN04 || disabledN04_9}
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
              <div className="mb-3" style={{ display: showWarningN04_2_6 }}><label className="text-danger">กรุณาเลือก N04_2 ถึง N04_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN04_7_8 }}><label className="text-danger">กรุณาเลือก N04_7 ถึง N04_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN04_9 }}><label className="text-danger">กรุณาระบุ N04_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose4}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose4()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal4()
                      : handleClose4()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show5} onHide={handleClose5} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal5}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N05_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N05_1"
                        onChange={N05_1OnChange}
                        checked={inputN05_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N05_1">
                        {" "}
                        3.2 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้มอเตอร์ไฟฟ้า
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N05_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N05_2"
                        onChange={N05_2OnChange}
                        checked={inputN05_2 === "1" ? true : false }
                        disabled={disabledN05}
                      />
                      <label className="form-check-label" htmlFor="N05_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N05_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N05_3"
                        onChange={N05_3OnChange}
                        checked={inputN05_3 === "1" ? true : false }
                        disabled={disabledN05}
                      />
                      <label className="form-check-label" htmlFor="N05_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N05_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N05_4"
                        onChange={N05_4OnChange}
                        checked={inputN05_4 === "1" ? true : false }
                        disabled={disabledN05}
                      />
                      <label className="form-check-label" htmlFor="N05_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N05_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N05_5"
                        onChange={N05_5OnChange}
                        checked={inputN05_5 === "1" ? true : false }
                        disabled={disabledN05}
                      />
                      <label className="form-check-label" htmlFor="N05_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N05_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N05_6"
                        onChange={N05_6OnChange}
                        checked={inputN05_6 === "1" ? true : false }
                        disabled={disabledN05}
                      />
                      <label className="form-check-label" htmlFor="N05_6">
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
                      <label> N05_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N05_7"
                            onChange={N05_7OnChange}
                            checked={inputN05_7 === "1" ? true : false }
                            disabled={disabledN05 || disabledN05_7}
                          />
                          <label className="form-check-label" htmlFor="N05_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N05_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N05_8"
                            onChange={N05_8OnChange}
                            checked={inputN05_8 === "1" ? true : false }
                            disabled={disabledN05 || disabledN05_8}
                          />
                          <label className="form-check-label" htmlFor="N05_8">
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
                    <label> N05_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N05_9OnChange}
                        value={inputN05_9}
                        disabled={disabledN05 || disabledN05_9}
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
              <div className="mb-3" style={{ display: showWarningN05_2_6 }}><label className="text-danger">กรุณาเลือก N05_2 ถึง N05_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN05_7_8 }}><label className="text-danger">กรุณาเลือก N05_7 ถึง N05_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN05_9 }}><label className="text-danger">กรุณาระบุ N05_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose5}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose5()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal5()
                      : handleClose5()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show6} onHide={handleClose6} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal6}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N06_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N06_1"
                        onChange={N06_1OnChange}
                        checked={inputN06_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N06_1">
                        {" "}
                        3.3 เครื่องสูบน้ำหรือระหัดวิดน้ำ -ใช้พลังงานธรรมชาติ
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N06_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N06_2"
                        onChange={N06_2OnChange}
                        checked={inputN06_2 === "1" ? true : false }
                        disabled={disabledN06}
                      />
                      <label className="form-check-label" htmlFor="N06_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N06_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N06_3"
                        onChange={N06_3OnChange}
                        checked={inputN06_3 === "1" ? true : false }
                        disabled={disabledN06}
                      />
                      <label className="form-check-label" htmlFor="N06_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N06_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N06_4"
                        onChange={N06_4OnChange}
                        checked={inputN06_4 === "1" ? true : false }
                        disabled={disabledN06}
                      />
                      <label className="form-check-label" htmlFor="N06_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N06_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N06_5"
                        onChange={N06_5OnChange}
                        checked={inputN06_5 === "1" ? true : false }
                        disabled={disabledN06}
                      />
                      <label className="form-check-label" htmlFor="N06_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N06_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N06_6"
                        onChange={N06_6OnChange}
                        checked={inputN06_6 === "1" ? true : false }
                        disabled={disabledN06}
                      />
                      <label className="form-check-label" htmlFor="N06_6">
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
                      <label> N06_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N06_7"
                            onChange={N06_7OnChange}
                            checked={inputN06_7 === "1" ? true : false }
                            disabled={disabledN06 || disabledN06_7}
                          />
                          <label className="form-check-label" htmlFor="N06_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N06_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N06_8"
                            onChange={N06_8OnChange}
                            checked={inputN06_8 === "1" ? true : false }
                            disabled={disabledN06 || disabledN06_8}
                          />
                          <label className="form-check-label" htmlFor="N06_8">
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
                    <label> N06_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N06_9OnChange}
                        value={inputN06_9}
                        disabled={disabledN06 || disabledN06_9}
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
              <div className="mb-3" style={{ display: showWarningN06_2_6 }}><label className="text-danger">กรุณาเลือก N06_2 ถึง N06_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN06_7_8 }}><label className="text-danger">กรุณาเลือก N06_7 ถึง N06_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN06_9 }}><label className="text-danger">กรุณาระบุ N06_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose6}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose6()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal6()
                      : handleClose6()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show7} onHide={handleClose7} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal7}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N07_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N07_1"
                        onChange={N07_1OnChange}
                        checked={inputN07_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N07_1">
                        {" "}
                        4.1 เครื่องพ่นยาปราบศัตรูพืช -ใช้แรงคน
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N07_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N07_2"
                        onChange={N07_2OnChange}
                        checked={inputN07_2 === "1" ? true : false }
                        disabled={disabledN07}
                      />
                      <label className="form-check-label" htmlFor="N07_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N07_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N07_3"
                        onChange={N07_3OnChange}
                        checked={inputN07_3 === "1" ? true : false }
                        disabled={disabledN07}
                      />
                      <label className="form-check-label" htmlFor="N07_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N07_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N07_4"
                        onChange={N07_4OnChange}
                        checked={inputN07_4 === "1" ? true : false }
                        disabled={disabledN07}
                      />
                      <label className="form-check-label" htmlFor="N07_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N07_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N07_5"
                        onChange={N07_5OnChange}
                        checked={inputN07_5 === "1" ? true : false }
                        disabled={disabledN07}
                      />
                      <label className="form-check-label" htmlFor="N07_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N07_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N07_6"
                        onChange={N07_6OnChange}
                        checked={inputN07_6 === "1" ? true : false }
                        disabled={disabledN07}
                      />
                      <label className="form-check-label" htmlFor="N07_6">
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
                      <label> N07_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N07_7"
                            onChange={N07_7OnChange}
                            checked={inputN07_7 === "1" ? true : false }
                            disabled={disabledN07 || disabledN07_7}
                          />
                          <label className="form-check-label" htmlFor="N07_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N07_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N07_8"
                            onChange={N07_8OnChange}
                            checked={inputN07_8 === "1" ? true : false }
                            disabled={disabledN07 || disabledN07_8}
                          />
                          <label className="form-check-label" htmlFor="N07_8">
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
                    <label> N07_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N07_9OnChange}
                        value={inputN07_9}
                        disabled={disabledN07 || disabledN07_9}
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
              <div className="mb-3" style={{ display: showWarningN07_2_6 }}><label className="text-danger">กรุณาเลือก N07_2 ถึง N07_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN07_7_8 }}><label className="text-danger">กรุณาเลือก N07_7 ถึง N07_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN07_9 }}><label className="text-danger">กรุณาระบุ N07_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose7}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose7()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal7()
                      : handleClose7()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show8} onHide={handleClose8} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal8}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N08_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N08_1"
                        onChange={N08_1OnChange}
                        checked={inputN08_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N08_1">
                        {" "}
                        4.2 เครื่องพ่นยาปราบศัตรูพืช -ใช้เครื่องยนต์
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N08_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N08_2"
                        onChange={N08_2OnChange}
                        checked={inputN08_2 === "1" ? true : false }
                        disabled={disabledN08}
                      />
                      <label className="form-check-label" htmlFor="N08_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N08_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N08_3"
                        onChange={N08_3OnChange}
                        checked={inputN08_3 === "1" ? true : false }
                        disabled={disabledN08}
                      />
                      <label className="form-check-label" htmlFor="N08_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N08_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N08_4"
                        onChange={N08_4OnChange}
                        checked={inputN08_4 === "1" ? true : false }
                        disabled={disabledN08}
                      />
                      <label className="form-check-label" htmlFor="N08_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N08_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N08_5"
                        onChange={N08_5OnChange}
                        checked={inputN08_5 === "1" ? true : false }
                        disabled={disabledN08}
                      />
                      <label className="form-check-label" htmlFor="N08_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N08_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N08_6"
                        onChange={N08_6OnChange}
                        checked={inputN08_6 === "1" ? true : false }
                        disabled={disabledN08}
                      />
                      <label className="form-check-label" htmlFor="N08_6">
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
                      <label> N08_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N08_7"
                            onChange={N08_7OnChange}
                            checked={inputN08_7 === "1" ? true : false }
                            disabled={disabledN08 || disabledN08_7}
                          />
                          <label className="form-check-label" htmlFor="N08_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N08_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N08_8"
                            onChange={N08_8OnChange}
                            checked={inputN08_8 === "1" ? true : false }
                            disabled={disabledN08 || disabledN08_8}
                          />
                          <label className="form-check-label" htmlFor="N08_8">
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
                    <label> N08_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N08_9OnChange}
                        value={inputN08_9}
                        disabled={disabledN08 || disabledN08_9}
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
              <div className="mb-3" style={{ display: showWarningN08_2_6 }}><label className="text-danger">กรุณาเลือก N08_2 ถึง N08_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN08_7_8 }}><label className="text-danger">กรุณาเลือก N08_7 ถึง N08_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN08_9 }}><label className="text-danger">กรุณาระบุ N08_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose8}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose8()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal8()
                      : handleClose8()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show9} onHide={handleClose9} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal9}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N09_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N09_1"
                        onChange={N09_1OnChange}
                        checked={inputN09_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N09_1">
                        {" "}
                        4.3 เครื่องพ่นยาปราบศัตรูพืช -โดรน
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N09_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N09_2"
                        onChange={N09_2OnChange}
                        checked={inputN09_2 === "1" ? true : false }
                        disabled={disabledN09}
                      />
                      <label className="form-check-label" htmlFor="N09_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N09_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N09_3"
                        onChange={N09_3OnChange}
                        checked={inputN09_3 === "1" ? true : false }
                        disabled={disabledN09}
                      />
                      <label className="form-check-label" htmlFor="N09_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N09_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N09_4"
                        onChange={N09_4OnChange}
                        checked={inputN09_4 === "1" ? true : false }
                        disabled={disabledN09}
                      />
                      <label className="form-check-label" htmlFor="N09_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N09_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N09_5"
                        onChange={N09_5OnChange}
                        checked={inputN09_5 === "1" ? true : false }
                        disabled={disabledN09}
                      />
                      <label className="form-check-label" htmlFor="N09_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N09_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N09_6"
                        onChange={N09_6OnChange}
                        checked={inputN09_6 === "1" ? true : false }
                        disabled={disabledN09}
                      />
                      <label className="form-check-label" htmlFor="N09_6">
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
                      <label> N09_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N09_7"
                            onChange={N09_7OnChange}
                            checked={inputN09_7 === "1" ? true : false }
                            disabled={disabledN09 || disabledN09_7}
                          />
                          <label className="form-check-label" htmlFor="N09_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N09_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N09_8"
                            onChange={N09_8OnChange}
                            checked={inputN09_8 === "1" ? true : false }
                            disabled={disabledN09 || disabledN09_8}
                          />
                          <label className="form-check-label" htmlFor="N09_8">
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
                    <label> N09_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N09_9OnChange}
                        value={inputN09_9}
                        disabled={disabledN09 || disabledN09_9}
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
              <div className="mb-3" style={{ display: showWarningN09_2_6 }}><label className="text-danger">กรุณาเลือก N09_2 ถึง N09_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN09_7_8 }}><label className="text-danger">กรุณาเลือก N09_7 ถึง N09_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN09_9 }}><label className="text-danger">กรุณาระบุ N09_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose9}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose9()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal9()
                      : handleClose9()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show10} onHide={handleClose10} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal10}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N10_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N10_1"
                        onChange={N10_1OnChange}
                        checked={inputN10_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N10_1">
                        {" "}
                        5.1 เครื่องกำจัดวัชพืช -ใช้แรงคน
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N10_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N10_2"
                        onChange={N10_2OnChange}
                        checked={inputN10_2 === "1" ? true : false }
                        disabled={disabledN10}
                      />
                      <label className="form-check-label" htmlFor="N10_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N10_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N10_3"
                        onChange={N10_3OnChange}
                        checked={inputN10_3 === "1" ? true : false }
                        disabled={disabledN10}
                      />
                      <label className="form-check-label" htmlFor="N10_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N10_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N10_4"
                        onChange={N10_4OnChange}
                        checked={inputN10_4 === "1" ? true : false }
                        disabled={disabledN10}
                      />
                      <label className="form-check-label" htmlFor="N10_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N10_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N10_5"
                        onChange={N10_5OnChange}
                        checked={inputN10_5 === "1" ? true : false }
                        disabled={disabledN10}
                      />
                      <label className="form-check-label" htmlFor="N10_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N10_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N10_6"
                        onChange={N10_6OnChange}
                        checked={inputN10_6 === "1" ? true : false }
                        disabled={disabledN10}
                      />
                      <label className="form-check-label" htmlFor="N10_6">
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
                      <label> N10_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N10_7"
                            onChange={N10_7OnChange}
                            checked={inputN10_7 === "1" ? true : false }
                            disabled={disabledN10 || disabledN10_7}
                          />
                          <label className="form-check-label" htmlFor="N10_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N10_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N10_8"
                            onChange={N10_8OnChange}
                            checked={inputN10_8 === "1" ? true : false }
                            disabled={disabledN10 || disabledN10_8}
                          />
                          <label className="form-check-label" htmlFor="N10_8">
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
                    <label> N10_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N10_9OnChange}
                        value={inputN10_9}
                        disabled={disabledN10 || disabledN10_9}
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
              <div className="mb-3" style={{ display: showWarningN10_2_6 }}><label className="text-danger">กรุณาเลือก N10_2 ถึง N10_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN10_7_8 }}><label className="text-danger">กรุณาเลือก N10_7 ถึง N10_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN10_9 }}><label className="text-danger">กรุณาระบุ N10_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose10}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose10()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal10()
                      : handleClose10()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show11} onHide={handleClose11} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal11}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N11_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N11_1"
                        onChange={N11_1OnChange}
                        checked={inputN11_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N11_1">
                        {" "}
                        5.2 เครื่องกำจัดวัชพืช -ใช้เครื่องยนต์
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N11_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N11_2"
                        onChange={N11_2OnChange}
                        checked={inputN11_2 === "1" ? true : false }
                        disabled={disabledN11}
                      />
                      <label className="form-check-label" htmlFor="N11_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N11_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N11_3"
                        onChange={N11_3OnChange}
                        checked={inputN11_3 === "1" ? true : false }
                        disabled={disabledN11}
                      />
                      <label className="form-check-label" htmlFor="N11_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N11_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N11_4"
                        onChange={N11_4OnChange}
                        checked={inputN11_4 === "1" ? true : false }
                        disabled={disabledN11}
                      />
                      <label className="form-check-label" htmlFor="N11_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N11_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N11_5"
                        onChange={N11_5OnChange}
                        checked={inputN11_5 === "1" ? true : false }
                        disabled={disabledN11}
                      />
                      <label className="form-check-label" htmlFor="N11_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N11_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N11_6"
                        onChange={N11_6OnChange}
                        checked={inputN11_6 === "1" ? true : false }
                        disabled={disabledN11}
                      />
                      <label className="form-check-label" htmlFor="N11_6">
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
                      <label> N11_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N11_7"
                            onChange={N11_7OnChange}
                            checked={inputN11_7 === "1" ? true : false }
                            disabled={disabledN11 || disabledN11_7}
                          />
                          <label className="form-check-label" htmlFor="N11_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N11_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N11_8"
                            onChange={N11_8OnChange}
                            checked={inputN11_8 === "1" ? true : false }
                            disabled={disabledN11 || disabledN11_8}
                          />
                          <label className="form-check-label" htmlFor="N11_8">
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
                    <label> N11_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N11_9OnChange}
                        value={inputN11_9}
                        disabled={disabledN11 || disabledN11_9}
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
              <div className="mb-3" style={{ display: showWarningN11_2_6 }}><label className="text-danger">กรุณาเลือก N11_2 ถึง N11_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN11_7_8 }}><label className="text-danger">กรุณาเลือก N11_7 ถึง N11_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN11_9 }}><label className="text-danger">กรุณาระบุ N11_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose11}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose11()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal11()
                      : handleClose11()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show12} onHide={handleClose12} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal12}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N12_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N12_1"
                        onChange={N12_1OnChange}
                        checked={inputN12_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N12_1">
                        {" "}
                        6.1 เครื่องปลูกหรือหยอดเมล็ด -ใช้แรงคน
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N12_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N12_2"
                        onChange={N12_2OnChange}
                        checked={inputN12_2 === "1" ? true : false }
                        disabled={disabledN12}
                      />
                      <label className="form-check-label" htmlFor="N12_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N12_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N12_3"
                        onChange={N12_3OnChange}
                        checked={inputN12_3 === "1" ? true : false }
                        disabled={disabledN12}
                      />
                      <label className="form-check-label" htmlFor="N12_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N12_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N12_4"
                        onChange={N12_4OnChange}
                        checked={inputN12_4 === "1" ? true : false }
                        disabled={disabledN12}
                      />
                      <label className="form-check-label" htmlFor="N12_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N12_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N12_5"
                        onChange={N12_5OnChange}
                        checked={inputN12_5 === "1" ? true : false }
                        disabled={disabledN12}
                      />
                      <label className="form-check-label" htmlFor="N12_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N12_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N12_6"
                        onChange={N12_6OnChange}
                        checked={inputN12_6 === "1" ? true : false }
                        disabled={disabledN12}
                      />
                      <label className="form-check-label" htmlFor="N12_6">
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
                      <label> N12_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N12_7"
                            onChange={N12_7OnChange}
                            checked={inputN12_7 === "1" ? true : false }
                            disabled={disabledN12 || disabledN12_7}
                          />
                          <label className="form-check-label" htmlFor="N12_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N12_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N12_8"
                            onChange={N12_8OnChange}
                            checked={inputN12_8 === "1" ? true : false }
                            disabled={disabledN12 || disabledN12_8}
                          />
                          <label className="form-check-label" htmlFor="N12_8">
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
                    <label> N12_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N12_9OnChange}
                        value={inputN12_9}
                        disabled={disabledN12 || disabledN12_9}
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
              <div className="mb-3" style={{ display: showWarningN12_2_6 }}><label className="text-danger">กรุณาเลือก N12_2 ถึง N12_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN12_7_8 }}><label className="text-danger">กรุณาเลือก N12_7 ถึง N12_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN12_9 }}><label className="text-danger">กรุณาระบุ N12_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose12}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose12()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal12()
                      : handleClose12()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show13} onHide={handleClose13} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal13}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N13_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N13_1"
                        onChange={N13_1OnChange}
                        checked={inputN13_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N13_1">
                        {" "}
                        6.2 เครื่องปลูกหรือหยอดเมล็ด -ใช้เครื่องยนต์ขับเคลื่อนด้วยตนเอง 
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N13_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N13_2"
                        onChange={N13_2OnChange}
                        checked={inputN13_2 === "1" ? true : false }
                        disabled={disabledN13}
                      />
                      <label className="form-check-label" htmlFor="N13_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N13_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N13_3"
                        onChange={N13_3OnChange}
                        checked={inputN13_3 === "1" ? true : false }
                        disabled={disabledN13}
                      />
                      <label className="form-check-label" htmlFor="N13_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N13_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N13_4"
                        onChange={N13_4OnChange}
                        checked={inputN13_4 === "1" ? true : false }
                        disabled={disabledN13}
                      />
                      <label className="form-check-label" htmlFor="N13_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N13_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N13_5"
                        onChange={N13_5OnChange}
                        checked={inputN13_5 === "1" ? true : false }
                        disabled={disabledN13}
                      />
                      <label className="form-check-label" htmlFor="N13_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N13_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N13_6"
                        onChange={N13_6OnChange}
                        checked={inputN13_6 === "1" ? true : false }
                        disabled={disabledN13}
                      />
                      <label className="form-check-label" htmlFor="N13_6">
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
                      <label> N13_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N13_7"
                            onChange={N13_7OnChange}
                            checked={inputN13_7 === "1" ? true : false }
                            disabled={disabledN13 || disabledN13_7}
                          />
                          <label className="form-check-label" htmlFor="N13_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N13_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N13_8"
                            onChange={N13_8OnChange}
                            checked={inputN13_8 === "1" ? true : false }
                            disabled={disabledN13 || disabledN13_8}
                          />
                          <label className="form-check-label" htmlFor="N13_8">
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
                    <label> N13_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N13_9OnChange}
                        value={inputN13_9}
                        disabled={disabledN13 || disabledN13_9}
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
              <div className="mb-3" style={{ display: showWarningN13_2_6 }}><label className="text-danger">กรุณาเลือก N13_2 ถึง N13_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN13_7_8 }}><label className="text-danger">กรุณาเลือก N13_7 ถึง N13_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN13_9 }}><label className="text-danger">กรุณาระบุ N13_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose13}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose13()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal13()
                      : handleClose13()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show14} onHide={handleClose14} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal14}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N14_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N14_1"
                        onChange={N14_1OnChange}
                        checked={inputN14_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N14_1">
                        {" "}
                        6.3 เครื่องปลูกหรือหยอดเมล็ด -พ่วงกับรถไถเดินตาม
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N14_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N14_2"
                        onChange={N14_2OnChange}
                        checked={inputN14_2 === "1" ? true : false }
                        disabled={disabledN14}
                      />
                      <label className="form-check-label" htmlFor="N14_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N14_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N14_3"
                        onChange={N14_3OnChange}
                        checked={inputN14_3 === "1" ? true : false }
                        disabled={disabledN14}
                      />
                      <label className="form-check-label" htmlFor="N14_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N14_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N14_4"
                        onChange={N14_4OnChange}
                        checked={inputN14_4 === "1" ? true : false }
                        disabled={disabledN14}
                      />
                      <label className="form-check-label" htmlFor="N14_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N14_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N14_5"
                        onChange={N14_5OnChange}
                        checked={inputN14_5 === "1" ? true : false }
                        disabled={disabledN14}
                      />
                      <label className="form-check-label" htmlFor="N14_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N14_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N14_6"
                        onChange={N14_6OnChange}
                        checked={inputN14_6 === "1" ? true : false }
                        disabled={disabledN14}
                      />
                      <label className="form-check-label" htmlFor="N14_6">
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
                      <label> N14_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N14_7"
                            onChange={N14_7OnChange}
                            checked={inputN14_7 === "1" ? true : false }
                            disabled={disabledN14 || disabledN14_7}
                          />
                          <label className="form-check-label" htmlFor="N14_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N14_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N14_8"
                            onChange={N14_8OnChange}
                            checked={inputN14_8 === "1" ? true : false }
                            disabled={disabledN14 || disabledN14_8}
                          />
                          <label className="form-check-label" htmlFor="N14_8">
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
                    <label> N14_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N14_9OnChange}
                        value={inputN14_9}
                        disabled={disabledN14 || disabledN14_9}
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
              <div className="mb-3" style={{ display: showWarningN14_2_6 }}><label className="text-danger">กรุณาเลือก N14_2 ถึง N14_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN14_7_8 }}><label className="text-danger">กรุณาเลือก N14_7 ถึง N14_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN14_9 }}><label className="text-danger">กรุณาระบุ N14_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose14}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose14()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal14()
                      : handleClose14()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show15} onHide={handleClose15} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal15}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N15_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N15_1"
                        onChange={N15_1OnChange}
                        checked={inputN15_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N15_1">
                        {" "}
                        6.4 เครื่องปลูกหรือหยอดเมล็ด -พ่วงกับรถแทรกเตอร์ 4 ล้อ
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N15_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N15_2"
                        onChange={N15_2OnChange}
                        checked={inputN15_2 === "1" ? true : false }
                        disabled={disabledN15}
                      />
                      <label className="form-check-label" htmlFor="N15_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N15_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N15_3"
                        onChange={N15_3OnChange}
                        checked={inputN15_3 === "1" ? true : false }
                        disabled={disabledN15}
                      />
                      <label className="form-check-label" htmlFor="N15_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N15_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N15_4"
                        onChange={N15_4OnChange}
                        checked={inputN15_4 === "1" ? true : false }
                        disabled={disabledN15}
                      />
                      <label className="form-check-label" htmlFor="N15_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N15_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N15_5"
                        onChange={N15_5OnChange}
                        checked={inputN15_5 === "1" ? true : false }
                        disabled={disabledN15}
                      />
                      <label className="form-check-label" htmlFor="N15_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N15_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N15_6"
                        onChange={N15_6OnChange}
                        checked={inputN15_6 === "1" ? true : false }
                        disabled={disabledN15}
                      />
                      <label className="form-check-label" htmlFor="N15_6">
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
                      <label> N15_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N15_7"
                            onChange={N15_7OnChange}
                            checked={inputN15_7 === "1" ? true : false }
                            disabled={disabledN15 || disabledN15_7}
                          />
                          <label className="form-check-label" htmlFor="N15_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N15_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N15_8"
                            onChange={N15_8OnChange}
                            checked={inputN15_8 === "1" ? true : false }
                            disabled={disabledN15 || disabledN15_8}
                          />
                          <label className="form-check-label" htmlFor="N15_8">
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
                    <label> N15_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N15_9OnChange}
                        value={inputN15_9}
                        disabled={disabledN15 || disabledN15_9}
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
              <div className="mb-3" style={{ display: showWarningN15_2_6 }}><label className="text-danger">กรุณาเลือก N15_2 ถึง N15_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN15_7_8 }}><label className="text-danger">กรุณาเลือก N15_7 ถึง N15_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN15_9 }}><label className="text-danger">กรุณาระบุ N15_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose15}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose15()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal15()
                      : handleClose15()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show16} onHide={handleClose16} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal16}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N16_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N16_1"
                        onChange={N16_1OnChange}
                        checked={inputN16_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N16_1">
                        {" "}
                        6.5 เครื่องปลูกหรือหยอดเมล็ด -โดรน 
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N16_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N16_2"
                        onChange={N16_2OnChange}
                        checked={inputN16_2 === "1" ? true : false }
                        disabled={disabledN16}
                      />
                      <label className="form-check-label" htmlFor="N16_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N16_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N16_3"
                        onChange={N16_3OnChange}
                        checked={inputN16_3 === "1" ? true : false }
                        disabled={disabledN16}
                      />
                      <label className="form-check-label" htmlFor="N16_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N16_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N16_4"
                        onChange={N16_4OnChange}
                        checked={inputN16_4 === "1" ? true : false }
                        disabled={disabledN16}
                      />
                      <label className="form-check-label" htmlFor="N16_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N16_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N16_5"
                        onChange={N16_5OnChange}
                        checked={inputN16_5 === "1" ? true : false }
                        disabled={disabledN16}
                      />
                      <label className="form-check-label" htmlFor="N16_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N16_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N16_6"
                        onChange={N16_6OnChange}
                        checked={inputN16_6 === "1" ? true : false }
                        disabled={disabledN16}
                      />
                      <label className="form-check-label" htmlFor="N16_6">
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
                      <label> N16_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N16_7"
                            onChange={N16_7OnChange}
                            checked={inputN16_7 === "1" ? true : false }
                            disabled={disabledN16 || disabledN16_7}
                          />
                          <label className="form-check-label" htmlFor="N16_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N16_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N16_8"
                            onChange={N16_8OnChange}
                            checked={inputN16_8 === "1" ? true : false }
                            disabled={disabledN16 || disabledN16_8}
                          />
                          <label className="form-check-label" htmlFor="N16_8">
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
                    <label> N16_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N16_9OnChange}
                        value={inputN16_9}
                        disabled={disabledN16 || disabledN16_9}
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
              <div className="mb-3" style={{ display: showWarningN16_2_6 }}><label className="text-danger">กรุณาเลือก N16_2 ถึง N16_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN16_7_8 }}><label className="text-danger">กรุณาเลือก N16_7 ถึง N16_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN16_9 }}><label className="text-danger">กรุณาระบุ N16_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose16}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose16()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal16()
                      : handleClose16()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show17} onHide={handleClose17} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal17}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N17_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N17_1"
                        onChange={N17_1OnChange}
                        checked={inputN17_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N17_1">
                        {" "}
                        7.1 เครื่องเก็บเกี่ยว (ใช้เครื่องยนต์) -เครื่องเกี่ยวอ้อย
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N17_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N17_2"
                        onChange={N17_2OnChange}
                        checked={inputN17_2 === "1" ? true : false }
                        disabled={disabledN17}
                      />
                      <label className="form-check-label" htmlFor="N17_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N17_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N17_3"
                        onChange={N17_3OnChange}
                        checked={inputN17_3 === "1" ? true : false }
                        disabled={disabledN17}
                      />
                      <label className="form-check-label" htmlFor="N17_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N17_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N17_4"
                        onChange={N17_4OnChange}
                        checked={inputN17_4 === "1" ? true : false }
                        disabled={disabledN17}
                      />
                      <label className="form-check-label" htmlFor="N17_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N17_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N17_5"
                        onChange={N17_5OnChange}
                        checked={inputN17_5 === "1" ? true : false }
                        disabled={disabledN17}
                      />
                      <label className="form-check-label" htmlFor="N17_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N17_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N17_6"
                        onChange={N17_6OnChange}
                        checked={inputN17_6 === "1" ? true : false }
                        disabled={disabledN17}
                      />
                      <label className="form-check-label" htmlFor="N17_6">
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
                      <label> N17_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N17_7"
                            onChange={N17_7OnChange}
                            checked={inputN17_7 === "1" ? true : false }
                            disabled={disabledN17 || disabledN17_7}
                          />
                          <label className="form-check-label" htmlFor="N17_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N17_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N17_8"
                            onChange={N17_8OnChange}
                            checked={inputN17_8 === "1" ? true : false }
                            disabled={disabledN17 || disabledN17_8}
                          />
                          <label className="form-check-label" htmlFor="N17_8">
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
                    <label> N17_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N17_9OnChange}
                        value={inputN17_9}
                        disabled={disabledN17 || disabledN17_9}
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
              <div className="mb-3" style={{ display: showWarningN17_2_6 }}><label className="text-danger">กรุณาเลือก N17_2 ถึง N17_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN17_7_8 }}><label className="text-danger">กรุณาเลือก N17_7 ถึง N17_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN17_9 }}><label className="text-danger">กรุณาระบุ N17_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose17}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose17()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal17()
                      : handleClose17()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show18} onHide={handleClose18} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal18}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N18_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N18_1"
                        onChange={N18_1OnChange}
                        checked={inputN18_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N18_1">
                        {" "}
                        7.2 เครื่องเก็บเกี่ยว (ใช้เครื่องยนต์) -เครื่องเกี่ยวนวดข้าว
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N18_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N18_2"
                        onChange={N18_2OnChange}
                        checked={inputN18_2 === "1" ? true : false }
                        disabled={disabledN18}
                      />
                      <label className="form-check-label" htmlFor="N18_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N18_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N18_3"
                        onChange={N18_3OnChange}
                        checked={inputN18_3 === "1" ? true : false }
                        disabled={disabledN18}
                      />
                      <label className="form-check-label" htmlFor="N18_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N18_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N18_4"
                        onChange={N18_4OnChange}
                        checked={inputN18_4 === "1" ? true : false }
                        disabled={disabledN18}
                      />
                      <label className="form-check-label" htmlFor="N18_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N18_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N18_5"
                        onChange={N18_5OnChange}
                        checked={inputN18_5 === "1" ? true : false }
                        disabled={disabledN18}
                      />
                      <label className="form-check-label" htmlFor="N18_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N18_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N18_6"
                        onChange={N18_6OnChange}
                        checked={inputN18_6 === "1" ? true : false }
                        disabled={disabledN18}
                      />
                      <label className="form-check-label" htmlFor="N18_6">
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
                      <label> N18_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N18_7"
                            onChange={N18_7OnChange}
                            checked={inputN18_7 === "1" ? true : false }
                            disabled={disabledN18 || disabledN18_7}
                          />
                          <label className="form-check-label" htmlFor="N18_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N18_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N18_8"
                            onChange={N18_8OnChange}
                            checked={inputN18_8 === "1" ? true : false }
                            disabled={disabledN18 || disabledN18_8}
                          />
                          <label className="form-check-label" htmlFor="N18_8">
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
                    <label> N18_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N18_9OnChange}
                        value={inputN18_9}
                        disabled={disabledN18 || disabledN18_9}
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
              <div className="mb-3" style={{ display: showWarningN18_2_6 }}><label className="text-danger">กรุณาเลือก N18_2 ถึง N18_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN18_7_8 }}><label className="text-danger">กรุณาเลือก N18_7 ถึง N18_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN18_9 }}><label className="text-danger">กรุณาระบุ N18_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose18}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose18()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal18()
                      : handleClose18()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show19} onHide={handleClose19} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal19}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N19_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N19_1"
                        onChange={N19_1OnChange}
                        checked={inputN19_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N19_1">
                        {" "}
                        8.1 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องนวดข้าวและธัญพืช
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N19_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N19_2"
                        onChange={N19_2OnChange}
                        checked={inputN19_2 === "1" ? true : false }
                        disabled={disabledN19}
                      />
                      <label className="form-check-label" htmlFor="N19_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N19_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N19_3"
                        onChange={N19_3OnChange}
                        checked={inputN19_3 === "1" ? true : false }
                        disabled={disabledN19}
                      />
                      <label className="form-check-label" htmlFor="N19_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N19_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N19_4"
                        onChange={N19_4OnChange}
                        checked={inputN19_4 === "1" ? true : false }
                        disabled={disabledN19}
                      />
                      <label className="form-check-label" htmlFor="N19_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N19_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N19_5"
                        onChange={N19_5OnChange}
                        checked={inputN19_5 === "1" ? true : false }
                        disabled={disabledN19}
                      />
                      <label className="form-check-label" htmlFor="N19_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N19_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N19_6"
                        onChange={N19_6OnChange}
                        checked={inputN19_6 === "1" ? true : false }
                        disabled={disabledN19}
                      />
                      <label className="form-check-label" htmlFor="N19_6">
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
                      <label> N19_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N19_7"
                            onChange={N19_7OnChange}
                            checked={inputN19_7 === "1" ? true : false }
                            disabled={disabledN19 || disabledN19_7}
                          />
                          <label className="form-check-label" htmlFor="N19_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N19_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N19_8"
                            onChange={N19_8OnChange}
                            checked={inputN19_8 === "1" ? true : false }
                            disabled={disabledN19 || disabledN19_8}
                          />
                          <label className="form-check-label" htmlFor="N19_8">
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
                    <label> N19_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        maxLength={2}
                        onChange={N19_9OnChange}
                        value={inputN19_9}
                        disabled={disabledN19 || disabledN19_9}
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
              <div className="mb-3" style={{ display: showWarningN19_2_6 }}><label className="text-danger">กรุณาเลือก N19_2 ถึง N19_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN19_7_8 }}><label className="text-danger">กรุณาเลือก N19_7 ถึง N19_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN19_9 }}><label className="text-danger">กรุณาระบุ N19_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose19}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose19()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal19()
                      : handleClose19()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show20} onHide={handleClose20} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal20}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N20_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N20_1"
                        onChange={N20_1OnChange}
                        checked={inputN20_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N20_1">
                        {" "}
                        8.2 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องกะเทาะเมล็ดข้าวโพด
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N20_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N20_2"
                        onChange={N20_2OnChange}
                        checked={inputN20_2 === "1" ? true : false }
                        disabled={disabledN20}
                      />
                      <label className="form-check-label" htmlFor="N20_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N20_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N20_3"
                        onChange={N20_3OnChange}
                        checked={inputN20_3 === "1" ? true : false }
                        disabled={disabledN20}
                      />
                      <label className="form-check-label" htmlFor="N20_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N20_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N20_4"
                        onChange={N20_4OnChange}
                        checked={inputN20_4 === "1" ? true : false }
                        disabled={disabledN20}
                      />
                      <label className="form-check-label" htmlFor="N20_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N20_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N20_5"
                        onChange={N20_5OnChange}
                        checked={inputN20_5 === "1" ? true : false }
                        disabled={disabledN20}
                      />
                      <label className="form-check-label" htmlFor="N20_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N20_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N20_6"
                        onChange={N20_6OnChange}
                        checked={inputN20_6 === "1" ? true : false }
                        disabled={disabledN20}
                      />
                      <label className="form-check-label" htmlFor="N20_6">
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
                      <label> N20_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N20_7"
                            onChange={N20_7OnChange}
                            checked={inputN20_7 === "1" ? true : false }
                            disabled={disabledN20 || disabledN20_7}
                          />
                          <label className="form-check-label" htmlFor="N20_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N20_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N20_8"
                            onChange={N20_8OnChange}
                            checked={inputN20_8 === "1" ? true : false }
                            disabled={disabledN20 || disabledN20_8}
                          />
                          <label className="form-check-label" htmlFor="N20_8">
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
                    <label> N20_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N20_9OnChange}
                        value={inputN20_9}
                        disabled={disabledN20 || disabledN20_9}
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
              <div className="mb-3" style={{ display: showWarningN20_2_6 }}><label className="text-danger">กรุณาเลือก N20_2 ถึง N20_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN20_7_8 }}><label className="text-danger">กรุณาเลือก N20_7 ถึง N20_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN20_9 }}><label className="text-danger">กรุณาระบุ N20_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose20}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose20()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal20()
                      : handleClose20()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show21} onHide={handleClose21} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal21}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N21_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N21_1"
                        onChange={N21_1OnChange}
                        checked={inputN21_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N21_1">
                        {" "}
                        8.3 เครื่องนวดหรือกะเทาะเมล็ด -เครื่องสีฝัดข้าวและธัญพืช
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N21_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N21_2"
                        onChange={N21_2OnChange}
                        checked={inputN21_2 === "1" ? true : false }
                        disabled={disabledN21}
                      />
                      <label className="form-check-label" htmlFor="N21_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N21_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N21_3"
                        onChange={N21_3OnChange}
                        checked={inputN21_3 === "1" ? true : false }
                        disabled={disabledN21}
                      />
                      <label className="form-check-label" htmlFor="N21_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N21_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N21_4"
                        onChange={N21_4OnChange}
                        checked={inputN21_4 === "1" ? true : false }
                        disabled={disabledN21}
                      />
                      <label className="form-check-label" htmlFor="N21_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N21_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N21_5"
                        onChange={N21_5OnChange}
                        checked={inputN21_5 === "1" ? true : false }
                        disabled={disabledN21}
                      />
                      <label className="form-check-label" htmlFor="N21_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N21_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N21_6"
                        onChange={N21_6OnChange}
                        checked={inputN21_6 === "1" ? true : false }
                        disabled={disabledN21}
                      />
                      <label className="form-check-label" htmlFor="N21_6">
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
                      <label> N21_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N21_7"
                            onChange={N21_7OnChange}
                            checked={inputN21_7 === "1" ? true : false }
                            disabled={disabledN21 || disabledN21_7}
                          />
                          <label className="form-check-label" htmlFor="N21_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N21_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N21_8"
                            onChange={N21_8OnChange}
                            checked={inputN21_8 === "1" ? true : false }
                            disabled={disabledN21 || disabledN21_8}
                          />
                          <label className="form-check-label" htmlFor="N21_8">
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
                    <label> N21_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N21_9OnChange}
                        value={inputN21_9}
                        disabled={disabledN21 || disabledN21_9}
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
              <div className="mb-3" style={{ display: showWarningN21_2_6 }}><label className="text-danger">กรุณาเลือก N21_2 ถึง N21_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN21_7_8 }}><label className="text-danger">กรุณาเลือก N21_7 ถึง N21_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN21_9 }}><label className="text-danger">กรุณาระบุ N21_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose21}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose21()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal21()
                      : handleClose21()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show22} onHide={handleClose22} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal22}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N22_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N22_1"
                        onChange={N22_1OnChange}
                        checked={inputN22_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N22_1">
                        {" "}
                        9. เครื่องสีข้าว
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N22_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N22_2"
                        onChange={N22_2OnChange}
                        checked={inputN22_2 === "1" ? true : false }
                        disabled={disabledN22}
                      />
                      <label className="form-check-label" htmlFor="N22_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N22_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N22_3"
                        onChange={N22_3OnChange}
                        checked={inputN22_3 === "1" ? true : false }
                        disabled={disabledN22}
                      />
                      <label className="form-check-label" htmlFor="N22_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N22_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N22_4"
                        onChange={N22_4OnChange}
                        checked={inputN22_4 === "1" ? true : false }
                        disabled={disabledN22}
                      />
                      <label className="form-check-label" htmlFor="N22_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N22_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N22_5"
                        onChange={N22_5OnChange}
                        checked={inputN22_5 === "1" ? true : false }
                        disabled={disabledN22}
                      />
                      <label className="form-check-label" htmlFor="N22_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N22_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N22_6"
                        onChange={N22_6OnChange}
                        checked={inputN22_6 === "1" ? true : false }
                        disabled={disabledN22}
                      />
                      <label className="form-check-label" htmlFor="N22_6">
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
                      <label> N22_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N22_7"
                            onChange={N22_7OnChange}
                            checked={inputN22_7 === "1" ? true : false }
                            disabled={disabledN22 || disabledN22_7}
                          />
                          <label className="form-check-label" htmlFor="N22_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N22_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N22_8"
                            onChange={N22_8OnChange}
                            checked={inputN22_8 === "1" ? true : false }
                            disabled={disabledN22 || disabledN22_8}
                          />
                          <label className="form-check-label" htmlFor="N22_8">
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
                    <label> N22_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N22_9OnChange}
                        value={inputN22_9}
                        disabled={disabledN22 || disabledN22_9}
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
              <div className="mb-3" style={{ display: showWarningN22_2_6 }}><label className="text-danger">กรุณาเลือก N22_2 ถึง N22_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN22_7_8 }}><label className="text-danger">กรุณาเลือก N22_7 ถึง N22_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN22_9 }}><label className="text-danger">กรุณาระบุ N22_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose22}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose22()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal22()
                      : handleClose22()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show23} onHide={handleClose23} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal23}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N23_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N23_1"
                        onChange={N23_1OnChange}
                        checked={inputN23_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N23_1">
                        {" "}
                        10. เครื่องรีดนม (ใช้เครื่องยนต์)
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N23_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N23_2"
                        onChange={N23_2OnChange}
                        checked={inputN23_2 === "1" ? true : false }
                        disabled={disabledN23}
                      />
                      <label className="form-check-label" htmlFor="N23_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N23_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N23_3"
                        onChange={N23_3OnChange}
                        checked={inputN23_3 === "1" ? true : false }
                        disabled={disabledN23}
                      />
                      <label className="form-check-label" htmlFor="N23_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N23_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N23_4"
                        onChange={N23_4OnChange}
                        checked={inputN23_4 === "1" ? true : false }
                        disabled={disabledN23}
                      />
                      <label className="form-check-label" htmlFor="N23_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N23_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N23_5"
                        onChange={N23_5OnChange}
                        checked={inputN23_5 === "1" ? true : false }
                        disabled={disabledN23}
                      />
                      <label className="form-check-label" htmlFor="N23_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N23_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N23_6"
                        onChange={N23_6OnChange}
                        checked={inputN23_6 === "1" ? true : false }
                        disabled={disabledN23}
                      />
                      <label className="form-check-label" htmlFor="N23_6">
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
                      <label> N23_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N23_7"
                            onChange={N23_7OnChange}
                            checked={inputN23_7 === "1" ? true : false }
                            disabled={disabledN23 || disabledN23_7}
                          />
                          <label className="form-check-label" htmlFor="N23_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N23_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N23_8"
                            onChange={N23_8OnChange}
                            checked={inputN23_8 === "1" ? true : false }
                            disabled={disabledN23 || disabledN23_8}
                          />
                          <label className="form-check-label" htmlFor="N23_8">
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
                    <label> N23_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N23_9OnChange}
                        value={inputN23_9}
                        disabled={disabledN23 || disabledN23_9}
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
              <div className="mb-3" style={{ display: showWarningN23_2_6 }}><label className="text-danger">กรุณาเลือก N23_2 ถึง N23_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN23_7_8 }}><label className="text-danger">กรุณาเลือก N23_7 ถึง N23_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN23_9 }}><label className="text-danger">กรุณาระบุ N23_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose23}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose23()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal23()
                      : handleClose23()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show24} onHide={handleClose24} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal24}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N24_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N24_1"
                        onChange={N24_1OnChange}
                        checked={inputN24_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N24_1">
                        {" "}
                        11. เครื่องอัดฟางข้าว
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N24_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N24_2"
                        onChange={N24_2OnChange}
                        checked={inputN24_2 === "1" ? true : false }
                        disabled={disabledN24}
                      />
                      <label className="form-check-label" htmlFor="N24_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N24_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N24_3"
                        onChange={N24_3OnChange}
                        checked={inputN24_3 === "1" ? true : false }
                        disabled={disabledN24}
                      />
                      <label className="form-check-label" htmlFor="N24_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N24_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N24_4"
                        onChange={N24_4OnChange}
                        checked={inputN24_4 === "1" ? true : false }
                        disabled={disabledN24}
                      />
                      <label className="form-check-label" htmlFor="N24_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N24_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N24_5"
                        onChange={N24_5OnChange}
                        checked={inputN24_5 === "1" ? true : false }
                        disabled={disabledN24}
                      />
                      <label className="form-check-label" htmlFor="N24_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N24_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N24_6"
                        onChange={N24_6OnChange}
                        checked={inputN24_6 === "1" ? true : false }
                        disabled={disabledN24}
                      />
                      <label className="form-check-label" htmlFor="N24_6">
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
                      <label> N24_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N24_7"
                            onChange={N24_7OnChange}
                            checked={inputN24_7 === "1" ? true : false }
                            disabled={disabledN24 || disabledN24_7}
                          />
                          <label className="form-check-label" htmlFor="N24_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N24_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N24_8"
                            onChange={N24_8OnChange}
                            checked={inputN24_8 === "1" ? true : false }
                            disabled={disabledN24 || disabledN24_8}
                          />
                          <label className="form-check-label" htmlFor="N24_8">
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
                    <label> N24_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N24_9OnChange}
                        value={inputN24_9}
                        disabled={disabledN24 || disabledN24_9}
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
              <div className="mb-3" style={{ display: showWarningN24_2_6 }}><label className="text-danger">กรุณาเลือก N24_2 ถึง N24_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN24_7_8 }}><label className="text-danger">กรุณาเลือก N24_7 ถึง N24_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN24_9 }}><label className="text-danger">กรุณาระบุ N24_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose24}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose24()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal24()
                      : handleClose24()
                }
              >
                บันทึก
              </button>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show25} onHide={handleClose25} backdrop="static" keyboard={false} fullscreen={undefined}>
        <Modal.Header closeButton className="header">
          <Modal.Title className="mb-2">{titleModal25}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row className="">

            <Col md={12}>
              <Row>

                <Col md={12} className="mt-3">
                  <label> N25_1  </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N25_1"
                        onChange={N25_1OnChange}
                        checked={inputN25_1 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="N25_1">
                        {" "}
                        12. เครื่องอัดใบอ้อย
                      </label>
                    </div>
                  </div>
                </Col>
                
                <Col md={12} className="mt-3">
                  <label style={{ fontWeight: "bold" }}> แหล่งที่มาของเครื่องจักรฯ ที่ใช้ในรอบ 12 เดือนที่แล้ว  (ตอบได้มากกว่า 1 ข้อ)</label>
                </Col>

                <Col md={12} className="mt-3">
                  <label> N25_2 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N25_2"
                        onChange={N25_2OnChange}
                        checked={inputN25_2 === "1" ? true : false }
                        disabled={disabledN25}
                      />
                      <label className="form-check-label" htmlFor="N25_2">
                        {" "}
                        ผู้ถือครองเป็นเจ้าของ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N25_3 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N25_3"
                        onChange={N25_3OnChange}
                        checked={inputN25_3 === "1" ? true : false }
                        disabled={disabledN25}
                      />
                      <label className="form-check-label" htmlFor="N25_3">
                        {" "}
                        สหกรณ์หรือกลุ่มเกษตรกร
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N25_4 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N25_4"
                        onChange={N25_4OnChange}
                        checked={inputN25_4 === "1" ? true : false }
                        disabled={disabledN25}
                      />
                      <label className="form-check-label" htmlFor="N25_4">
                        {" "}
                        เป็นของผู้มารับจ้าง
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N25_5 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N25_5"
                        onChange={N25_5OnChange}
                        checked={inputN25_5 === "1" ? true : false }
                        disabled={disabledN25}
                      />
                      <label className="form-check-label" htmlFor="N25_5">
                        {" "}
                        หน่วยงานของรัฐ
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mt-3">
                  <label> N25_6 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="N25_6"
                        onChange={N25_6OnChange}
                        checked={inputN25_6 === "1" ? true : false }
                        disabled={disabledN25}
                      />
                      <label className="form-check-label" htmlFor="N25_6">
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
                      <label> N25_7 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N25_7"
                            onChange={N25_7OnChange}
                            checked={inputN25_7 === "1" ? true : false }
                            disabled={disabledN25 || disabledN25_7}
                          />
                          <label className="form-check-label" htmlFor="N25_7">
                            {" "}
                            ใช้ในที่ถือครอง
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="mt-3">
                      <label> N25_8 </label>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="N25_8"
                            onChange={N25_8OnChange}
                            checked={inputN25_8 === "1" ? true : false }
                            disabled={disabledN25 || disabledN25_8}
                          />
                          <label className="form-check-label" htmlFor="N25_8">
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
                    <label> N25_9 จำนวนที่มี และยังใช้งานได้ ณ 1 พ.ค. 66</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className={`form-control `}
                        min={1}
                        max={50}
                        onChange={N25_9OnChange}
                        value={inputN25_9}
                        disabled={disabledN25 || disabledN25_9}
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
              <div className="mb-3" style={{ display: showWarningN25_2_6 }}><label className="text-danger">กรุณาเลือก N25_2 ถึง N25_6 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN25_7_8 }}><label className="text-danger">กรุณาเลือก N25_7 ถึง N25_8 อย่างน้อย 1 รายการ</label></div>
              <div className="mb-3" style={{ display: showWarningN25_9 }}><label className="text-danger">กรุณาระบุ N25_9 (1 ถึง 50)</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={handleClose25}
              >
                ยกเลิก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose25()
                    : process.env.REACT_APP_PROJECT === "open"
                      ? SaveModal25()
                      : handleClose25()
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
