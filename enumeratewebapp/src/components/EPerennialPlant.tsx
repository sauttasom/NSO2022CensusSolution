import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { E01, _D01, _E01 } from "./Option";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC06Model } from "../model/REC06Model";
import { REC06Info } from "../model/REC06Info";
import { LandCalculator } from "../service/LandCalculator";
import { REC02Info } from "../model/REC02Info";
import { REC01Info } from "../model/REC01Info";

export default function EPerennialPlant() {
  const { enumeratesk2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  //state : input
  const [inputE01, setInputE01] = useState("");

  const [inputE02_01, setInputE02_01] = useState("");
  const [inputE03_01, setInputE03_01] = useState("");
  const [inputE04_01, setInputE04_01] = useState("");
  const [inputE05_01, setInputE05_01] = useState("");
  const [inputE06_01, setInputE06_01] = useState("");
  const [inputE06A_01, setInputE06A_01] = useState("");
  const [inputE06B_01, setInputE06B_01] = useState("");
  const [inputE06C_01, setInputE06C_01] = useState("");
  const [inputE07_01, setInputE07_01] = useState("");
  const [inputE08_01, setInputE08_01] = useState("");
  const [inputE09_01, setInputE09_01] = useState("");
  const [inputE10_01, setInputE10_01] = useState("");
  const [inputE02_02, setInputE02_02] = useState("");
  const [inputE03_02, setInputE03_02] = useState("");
  const [inputE04_02, setInputE04_02] = useState("");
  const [inputE05_02, setInputE05_02] = useState("");
  const [inputE06_02, setInputE06_02] = useState("");
  const [inputE06A_02, setInputE06A_02] = useState("");
  const [inputE06B_02, setInputE06B_02] = useState("");
  const [inputE06C_02, setInputE06C_02] = useState("");
  const [inputE07_02, setInputE07_02] = useState("");
  const [inputE08_02, setInputE08_02] = useState("");
  const [inputE09_02, setInputE09_02] = useState("");
  const [inputE10_02, setInputE10_02] = useState("");
  const [inputE02_03, setInputE02_03] = useState("");
  const [inputE03_03, setInputE03_03] = useState("");
  const [inputE04_03, setInputE04_03] = useState("");
  const [inputE05_03, setInputE05_03] = useState("");
  const [inputE06_03, setInputE06_03] = useState("");
  const [inputE06A_03, setInputE06A_03] = useState("");
  const [inputE06B_03, setInputE06B_03] = useState("");
  const [inputE06C_03, setInputE06C_03] = useState("");
  const [inputE07_03, setInputE07_03] = useState("");
  const [inputE08_03, setInputE08_03] = useState("");
  const [inputE09_03, setInputE09_03] = useState("");
  const [inputE10_03, setInputE10_03] = useState("");
  const [inputE02_04, setInputE02_04] = useState("");
  const [inputE03_04, setInputE03_04] = useState("");
  const [inputE04_04, setInputE04_04] = useState("");
  const [inputE05_04, setInputE05_04] = useState("");
  const [inputE06_04, setInputE06_04] = useState("");
  const [inputE06A_04, setInputE06A_04] = useState("");
  const [inputE06B_04, setInputE06B_04] = useState("");
  const [inputE06C_04, setInputE06C_04] = useState("");
  const [inputE07_04, setInputE07_04] = useState("");
  const [inputE08_04, setInputE08_04] = useState("");
  const [inputE09_04, setInputE09_04] = useState("");
  const [inputE10_04, setInputE10_04] = useState("");
  const [inputE02_05, setInputE02_05] = useState("");
  const [inputE03_05, setInputE03_05] = useState("");
  const [inputE04_05, setInputE04_05] = useState("");
  const [inputE05_05, setInputE05_05] = useState("");
  const [inputE06_05, setInputE06_05] = useState("");
  const [inputE06A_05, setInputE06A_05] = useState("");
  const [inputE06B_05, setInputE06B_05] = useState("");
  const [inputE06C_05, setInputE06C_05] = useState("");
  const [inputE07_05, setInputE07_05] = useState("");
  const [inputE08_05, setInputE08_05] = useState("");
  const [inputE09_05, setInputE09_05] = useState("");
  const [inputE10_05, setInputE10_05] = useState("");
  const [inputE02_06, setInputE02_06] = useState("");
  const [inputE03_06, setInputE03_06] = useState("");
  const [inputE04_06, setInputE04_06] = useState("");
  const [inputE05_06, setInputE05_06] = useState("");
  const [inputE06_06, setInputE06_06] = useState("");
  const [inputE06A_06, setInputE06A_06] = useState("");
  const [inputE06B_06, setInputE06B_06] = useState("");
  const [inputE06C_06, setInputE06C_06] = useState("");
  const [inputE07_06, setInputE07_06] = useState("");
  const [inputE08_06, setInputE08_06] = useState("");
  const [inputE09_06, setInputE09_06] = useState("");
  const [inputE10_06, setInputE10_06] = useState("");
  const [inputE02_07, setInputE02_07] = useState("");
  const [inputE03_07, setInputE03_07] = useState("");
  const [inputE04_07, setInputE04_07] = useState("");
  const [inputE05_07, setInputE05_07] = useState("");
  const [inputE06_07, setInputE06_07] = useState("");
  const [inputE06A_07, setInputE06A_07] = useState("");
  const [inputE06B_07, setInputE06B_07] = useState("");
  const [inputE06C_07, setInputE06C_07] = useState("");
  const [inputE07_07, setInputE07_07] = useState("");
  const [inputE08_07, setInputE08_07] = useState("");
  const [inputE09_07, setInputE09_07] = useState("");
  const [inputE10_07, setInputE10_07] = useState("");
  const [inputE02_08, setInputE02_08] = useState("");
  const [inputE03_08, setInputE03_08] = useState("");
  const [inputE04_08, setInputE04_08] = useState("");
  const [inputE05_08, setInputE05_08] = useState("");
  const [inputE06_08, setInputE06_08] = useState("");
  const [inputE06A_08, setInputE06A_08] = useState("");
  const [inputE06B_08, setInputE06B_08] = useState("");
  const [inputE06C_08, setInputE06C_08] = useState("");
  const [inputE07_08, setInputE07_08] = useState("");
  const [inputE08_08, setInputE08_08] = useState("");
  const [inputE09_08, setInputE09_08] = useState("");
  const [inputE10_08, setInputE10_08] = useState("");
  const [inputE02_09, setInputE02_09] = useState("");
  const [inputE03_09, setInputE03_09] = useState("");
  const [inputE04_09, setInputE04_09] = useState("");
  const [inputE05_09, setInputE05_09] = useState("");
  const [inputE06_09, setInputE06_09] = useState("");
  const [inputE06A_09, setInputE06A_09] = useState("");
  const [inputE06B_09, setInputE06B_09] = useState("");
  const [inputE06C_09, setInputE06C_09] = useState("");
  const [inputE07_09, setInputE07_09] = useState("");
  const [inputE08_09, setInputE08_09] = useState("");
  const [inputE09_09, setInputE09_09] = useState("");
  const [inputE10_09, setInputE10_09] = useState("");
  const [inputE02_10, setInputE02_10] = useState("");
  const [inputE03_10, setInputE03_10] = useState("");
  const [inputE04_10, setInputE04_10] = useState("");
  const [inputE05_10, setInputE05_10] = useState("");
  const [inputE06_10, setInputE06_10] = useState("");
  const [inputE06A_10, setInputE06A_10] = useState("");
  const [inputE06B_10, setInputE06B_10] = useState("");
  const [inputE06C_10, setInputE06C_10] = useState("");
  const [inputE07_10, setInputE07_10] = useState("");
  const [inputE08_10, setInputE08_10] = useState("");
  const [inputE09_10, setInputE09_10] = useState("");
  const [inputE10_10, setInputE10_10] = useState("");
  const [inputE02_11, setInputE02_11] = useState("");
  const [inputE03_11, setInputE03_11] = useState("");
  const [inputE04_11, setInputE04_11] = useState("");
  const [inputE05_11, setInputE05_11] = useState("");
  const [inputE06_11, setInputE06_11] = useState("");
  const [inputE06A_11, setInputE06A_11] = useState("");
  const [inputE06B_11, setInputE06B_11] = useState("");
  const [inputE06C_11, setInputE06C_11] = useState("");
  const [inputE07_11, setInputE07_11] = useState("");
  const [inputE08_11, setInputE08_11] = useState("");
  const [inputE09_11, setInputE09_11] = useState("");
  const [inputE10_11, setInputE10_11] = useState("");
  const [inputE02_12, setInputE02_12] = useState("");
  const [inputE03_12, setInputE03_12] = useState("");
  const [inputE04_12, setInputE04_12] = useState("");
  const [inputE05_12, setInputE05_12] = useState("");
  const [inputE06_12, setInputE06_12] = useState("");
  const [inputE06A_12, setInputE06A_12] = useState("");
  const [inputE06B_12, setInputE06B_12] = useState("");
  const [inputE06C_12, setInputE06C_12] = useState("");
  const [inputE07_12, setInputE07_12] = useState("");
  const [inputE08_12, setInputE08_12] = useState("");
  const [inputE09_12, setInputE09_12] = useState("");
  const [inputE10_12, setInputE10_12] = useState("");
  const [inputE02_13, setInputE02_13] = useState("");
  const [inputE03_13, setInputE03_13] = useState("");
  const [inputE04_13, setInputE04_13] = useState("");
  const [inputE05_13, setInputE05_13] = useState("");
  const [inputE06_13, setInputE06_13] = useState("");
  const [inputE06A_13, setInputE06A_13] = useState("");
  const [inputE06B_13, setInputE06B_13] = useState("");
  const [inputE06C_13, setInputE06C_13] = useState("");
  const [inputE07_13, setInputE07_13] = useState("");
  const [inputE08_13, setInputE08_13] = useState("");
  const [inputE09_13, setInputE09_13] = useState("");
  const [inputE10_13, setInputE10_13] = useState("");
  const [inputE02_14, setInputE02_14] = useState("");
  const [inputE03_14, setInputE03_14] = useState("");
  const [inputE04_14, setInputE04_14] = useState("");
  const [inputE05_14, setInputE05_14] = useState("");
  const [inputE06_14, setInputE06_14] = useState("");
  const [inputE06A_14, setInputE06A_14] = useState("");
  const [inputE06B_14, setInputE06B_14] = useState("");
  const [inputE06C_14, setInputE06C_14] = useState("");
  const [inputE07_14, setInputE07_14] = useState("");
  const [inputE08_14, setInputE08_14] = useState("");
  const [inputE09_14, setInputE09_14] = useState("");
  const [inputE10_14, setInputE10_14] = useState("");
  const [inputE02_15, setInputE02_15] = useState("");
  const [inputE03_15, setInputE03_15] = useState("");
  const [inputE04_15, setInputE04_15] = useState("");
  const [inputE05_15, setInputE05_15] = useState("");
  const [inputE06_15, setInputE06_15] = useState("");
  const [inputE06A_15, setInputE06A_15] = useState("");
  const [inputE06B_15, setInputE06B_15] = useState("");
  const [inputE06C_15, setInputE06C_15] = useState("");
  const [inputE07_15, setInputE07_15] = useState("");
  const [inputE08_15, setInputE08_15] = useState("");
  const [inputE09_15, setInputE09_15] = useState("");
  const [inputE10_15, setInputE10_15] = useState("");
  const [inputE02_16, setInputE02_16] = useState("");
  const [inputE03_16, setInputE03_16] = useState("");
  const [inputE04_16, setInputE04_16] = useState("");
  const [inputE05_16, setInputE05_16] = useState("");
  const [inputE06_16, setInputE06_16] = useState("");
  const [inputE06A_16, setInputE06A_16] = useState("");
  const [inputE06B_16, setInputE06B_16] = useState("");
  const [inputE06C_16, setInputE06C_16] = useState("");
  const [inputE07_16, setInputE07_16] = useState("");
  const [inputE08_16, setInputE08_16] = useState("");
  const [inputE09_16, setInputE09_16] = useState("");
  const [inputE10_16, setInputE10_16] = useState("");
  const [inputE02_17, setInputE02_17] = useState("");
  const [inputE03_17, setInputE03_17] = useState("");
  const [inputE04_17, setInputE04_17] = useState("");
  const [inputE05_17, setInputE05_17] = useState("");
  const [inputE06_17, setInputE06_17] = useState("");
  const [inputE06A_17, setInputE06A_17] = useState("");
  const [inputE06B_17, setInputE06B_17] = useState("");
  const [inputE06C_17, setInputE06C_17] = useState("");
  const [inputE07_17, setInputE07_17] = useState("");
  const [inputE08_17, setInputE08_17] = useState("");
  const [inputE09_17, setInputE09_17] = useState("");
  const [inputE10_17, setInputE10_17] = useState("");

  //state : input for modal
  const [inputE02, setInputE02] = useState("");
  const [inputE03, setInputE03] = useState("");
  const [inputE04, setInputE04] = useState("");
  const [inputE05, setInputE05] = useState("");
  const [inputE06, setInputE06] = useState("");
  const [inputE06A, setInputE06A] = useState("");
  const [inputE06B, setInputE06B] = useState("");
  const [inputE06C, setInputE06C] = useState("");
  const [inputE07, setInputE07] = useState("");
  const [inputE08, setInputE08] = useState("");
  const [inputE09, setInputE09] = useState("");
  const [inputE10, setInputE10] = useState("");

  const [rec01list, setRec01list] = useState<REC01Info[]>([]);

  //state rec01
  const [valueA10, setValueA10] = useState<string>("");

  //เก็บข้อมูลเป็นรายการ ที่แปลงมาจาก REC06
  const [plantList, SetPlantList] = useState<REC06Model[]>([]);
  
  const { handleSubmit } = useForm();

  useEffect(() => {
    console.log("load page EPerennialPlant");
    
    setInputE01("1")
    getREC06()

    setShowWarningE01("none")
    setShowWarningA10Blank("none")
    setShowWarningA10("none")

    //สำหรับดึงข้อมูล ผืนที่ดิน มาใช้ตรวจสอบ
    getREC01()

  }, [page === 7]);

  async function getREC06() {
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
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC06/" + enumeratesk2?.AH_CODE;
        }

        const result = await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              if (res.data[0] !== undefined) {

                let pl: REC06Model[] = []
                let rec06: REC06Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                if (rec06.E03_01 != "") { pl.push({ E02: rec06.E02_01, E03: rec06.E03_01, E04: rec06.E04_01, E05: rec06.E05_01, E06: rec06.E06_01, E06A: rec06.E06A_01, E06B: rec06.E06B_01, E06C: rec06.E06C_01, E07: rec06.E07_01, E08: rec06.E08_01, E09: rec06.E09_01, E10: rec06.E10_01 }) }
                if (rec06.E03_02 != "") { pl.push({ E02: rec06.E02_02, E03: rec06.E03_02, E04: rec06.E04_02, E05: rec06.E05_02, E06: rec06.E06_02, E06A: rec06.E06A_02, E06B: rec06.E06B_02, E06C: rec06.E06C_02, E07: rec06.E07_02, E08: rec06.E08_02, E09: rec06.E09_02, E10: rec06.E10_02 }) }
                if (rec06.E03_03 != "") { pl.push({ E02: rec06.E02_03, E03: rec06.E03_03, E04: rec06.E04_03, E05: rec06.E05_03, E06: rec06.E06_03, E06A: rec06.E06A_03, E06B: rec06.E06B_03, E06C: rec06.E06C_03, E07: rec06.E07_03, E08: rec06.E08_03, E09: rec06.E09_03, E10: rec06.E10_03 }) }
                if (rec06.E03_04 != "") { pl.push({ E02: rec06.E02_04, E03: rec06.E03_04, E04: rec06.E04_04, E05: rec06.E05_04, E06: rec06.E06_04, E06A: rec06.E06A_04, E06B: rec06.E06B_04, E06C: rec06.E06C_04, E07: rec06.E07_04, E08: rec06.E08_04, E09: rec06.E09_04, E10: rec06.E10_04 }) }
                if (rec06.E03_05 != "") { pl.push({ E02: rec06.E02_05, E03: rec06.E03_05, E04: rec06.E04_05, E05: rec06.E05_05, E06: rec06.E06_05, E06A: rec06.E06A_05, E06B: rec06.E06B_05, E06C: rec06.E06C_05, E07: rec06.E07_05, E08: rec06.E08_05, E09: rec06.E09_05, E10: rec06.E10_05 }) }
                if (rec06.E03_06 != "") { pl.push({ E02: rec06.E02_06, E03: rec06.E03_06, E04: rec06.E04_06, E05: rec06.E05_06, E06: rec06.E06_06, E06A: rec06.E06A_06, E06B: rec06.E06B_06, E06C: rec06.E06C_06, E07: rec06.E07_06, E08: rec06.E08_06, E09: rec06.E09_06, E10: rec06.E10_06 }) }
                if (rec06.E03_07 != "") { pl.push({ E02: rec06.E02_07, E03: rec06.E03_07, E04: rec06.E04_07, E05: rec06.E05_07, E06: rec06.E06_07, E06A: rec06.E06A_07, E06B: rec06.E06B_07, E06C: rec06.E06C_07, E07: rec06.E07_07, E08: rec06.E08_07, E09: rec06.E09_07, E10: rec06.E10_07 }) }
                if (rec06.E03_08 != "") { pl.push({ E02: rec06.E02_08, E03: rec06.E03_08, E04: rec06.E04_08, E05: rec06.E05_08, E06: rec06.E06_08, E06A: rec06.E06A_08, E06B: rec06.E06B_08, E06C: rec06.E06C_08, E07: rec06.E07_08, E08: rec06.E08_08, E09: rec06.E09_08, E10: rec06.E10_08 }) }
                if (rec06.E03_09 != "") { pl.push({ E02: rec06.E02_09, E03: rec06.E03_09, E04: rec06.E04_09, E05: rec06.E05_09, E06: rec06.E06_09, E06A: rec06.E06A_09, E06B: rec06.E06B_09, E06C: rec06.E06C_09, E07: rec06.E07_09, E08: rec06.E08_09, E09: rec06.E09_09, E10: rec06.E10_09 }) }
                if (rec06.E03_10 != "") { pl.push({ E02: rec06.E02_10, E03: rec06.E03_10, E04: rec06.E04_10, E05: rec06.E05_10, E06: rec06.E06_10, E06A: rec06.E06A_10, E06B: rec06.E06B_10, E06C: rec06.E06C_10, E07: rec06.E07_10, E08: rec06.E08_10, E09: rec06.E09_10, E10: rec06.E10_10 }) }
                if (rec06.E03_11 != "") { pl.push({ E02: rec06.E02_11, E03: rec06.E03_11, E04: rec06.E04_11, E05: rec06.E05_11, E06: rec06.E06_11, E06A: rec06.E06A_11, E06B: rec06.E06B_11, E06C: rec06.E06C_11, E07: rec06.E07_11, E08: rec06.E08_11, E09: rec06.E09_11, E10: rec06.E10_11 }) }
                if (rec06.E03_12 != "") { pl.push({ E02: rec06.E02_12, E03: rec06.E03_12, E04: rec06.E04_12, E05: rec06.E05_12, E06: rec06.E06_12, E06A: rec06.E06A_12, E06B: rec06.E06B_12, E06C: rec06.E06C_12, E07: rec06.E07_12, E08: rec06.E08_12, E09: rec06.E09_12, E10: rec06.E10_12 }) }
                if (rec06.E03_13 != "") { pl.push({ E02: rec06.E02_13, E03: rec06.E03_13, E04: rec06.E04_13, E05: rec06.E05_13, E06: rec06.E06_13, E06A: rec06.E06A_13, E06B: rec06.E06B_13, E06C: rec06.E06C_13, E07: rec06.E07_13, E08: rec06.E08_13, E09: rec06.E09_13, E10: rec06.E10_13 }) }
                if (rec06.E03_14 != "") { pl.push({ E02: rec06.E02_14, E03: rec06.E03_14, E04: rec06.E04_14, E05: rec06.E05_14, E06: rec06.E06_14, E06A: rec06.E06A_14, E06B: rec06.E06B_14, E06C: rec06.E06C_14, E07: rec06.E07_14, E08: rec06.E08_14, E09: rec06.E09_14, E10: rec06.E10_14 }) }
                if (rec06.E03_15 != "") { pl.push({ E02: rec06.E02_15, E03: rec06.E03_15, E04: rec06.E04_15, E05: rec06.E05_15, E06: rec06.E06_15, E06A: rec06.E06A_15, E06B: rec06.E06B_15, E06C: rec06.E06C_15, E07: rec06.E07_15, E08: rec06.E08_15, E09: rec06.E09_15, E10: rec06.E10_15 }) }
                if (rec06.E03_16 != "") { pl.push({ E02: rec06.E02_16, E03: rec06.E03_16, E04: rec06.E04_16, E05: rec06.E05_16, E06: rec06.E06_16, E06A: rec06.E06A_16, E06B: rec06.E06B_16, E06C: rec06.E06C_16, E07: rec06.E07_16, E08: rec06.E08_16, E09: rec06.E09_16, E10: rec06.E10_16 }) }
                if (rec06.E03_17 != "") { pl.push({ E02: rec06.E02_17, E03: rec06.E03_17, E04: rec06.E04_17, E05: rec06.E05_17, E06: rec06.E06_17, E06A: rec06.E06A_17, E06B: rec06.E06B_17, E06C: rec06.E06C_17, E07: rec06.E07_17, E08: rec06.E08_17, E09: rec06.E09_17, E10: rec06.E10_17 }) }

                //console.log(pl);

                SetPlantList(pl)
                
              }

              return true;

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC06): ", err);
          });

        //หลังจากเรียกข้อมูล พืชยืนต้น ไม้ผล REC06 เสร็จแล้ว
        /* if (result) {

          //เรียกข้อมูล ผืนที่ดิน REC01 มาใช้ตรวจสอบ

          //url getREC01
          let url_rec01_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_rec01_api =
              process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/getREC01/" + enumeratesk2?.AH_CODE!;
          }

          //api getREC01
          await axios
            .get(url_rec01_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {

                if (res.data[0] !== undefined) {

                  let rec01: REC01Info | undefined = JSON.parse(JSON.stringify(res.data[0]), (key, value) => value === null ? "" : value)

                  //เนื้อที่ปลูกพืชยืนต้น ไม้ผล
                  setValueA10(rec01?.A10!)


                }

              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getREC01 on EPerennialPlant): ", err);
            });

        } */


      } catch (err) {
        console.error("ERROR (getREC06): ", err);
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
                //เนื้อที่ปลูกพืชยืนต้น ไม้ผล
                setValueA10(rec01?.A10!)

              }                            

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List on EPerennialPlant): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC01List on EPerennialPlant): ", err);
      }
    }
  }


  //action : input for modal
  const E02OnChange = (event: any) => {
    setInputE02(event.currentTarget.value)
  }

  const E03OnChange = (event: any) => {
    setInputE03(event.currentTarget.value)
  }

  const E04OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputE04(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledE04(false)
    }
    else{
      setDisabledE04(true)
      setInputE06A("")
      setInputE06B("")
      setInputE06C("")
      setInputE07("")
      setInputE08("")
    }

  };

  const E05OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputE05(event.target.checked === true ? "1" : "0");
    if(event.target.checked === true){
      setDisabledE05(false)
    }
    else{
      setDisabledE05(true)
      setInputE09("")
      setInputE10("")
    }
  };

  const E06OnChange = (event: any) => {
    setInputE06(event.currentTarget.value)
  }

  const E06AOnChange = (event: any) => {
    setInputE06A(event.currentTarget.value)
  }

  const E06BOnChange = (event: any) => {
    setInputE06B(event.currentTarget.value)
  }

  const E06COnChange = (event: any) => {
    setInputE06C(event.currentTarget.value)
  }

  const E07OnChange = (event: any) => {
    setInputE07(event.currentTarget.value)
  }

  const E08OnChange = (event: any) => {
    setInputE08(event.currentTarget.value)
  }

  const E09OnChange = (event: any) => {
    setInputE09(event.currentTarget.value)
  }

  const E10OnChange = (event: any) => {
    setInputE10(event.currentTarget.value)
  }



  //state warning
  const [showWarningE04, setShowWarningE04] = useState<string>("none"); // ปิด

  const [showWarningE06, setShowWarningE06] = useState<string>("none"); // ปิด
  const [showWarningE06_A10, setShowWarningE06_A10] = useState<string>("none"); // ปิด
  const [showWarningE07, setShowWarningE07] = useState<string>("none"); // ปิด
  const [showWarningE08, setShowWarningE08] = useState<string>("none"); // ปิด
  const [showWarningE07_08, setShowWarningE07_08] = useState<string>("none"); // ปิด

  const [showWarningE09, setShowWarningE09] = useState<string>("none"); // ปิด
  const [showWarningE10, setShowWarningE10] = useState<string>("none"); // ปิด
  const [showWarningE09_10, setShowWarningE09_10] = useState<string>("none"); // ปิด


  //บันทึกรายละเอียดของพืช จาก modal
  async function SavePlant() {

    //consistency check
    let isvalid = true;

    if(inputE04 === "1" || inputE05 === "1"){     
      setShowWarningE04("none")
    }
    else{
      isvalid = false
      setShowWarningE04("")
    }

    //E04 = 1
    if(inputE04 === "1"){

      //E06 > 0
      if(Number(inputE06A) > 0 || Number(inputE06B) > 0 || Number(inputE06C) > 0){
        setShowWarningE06("none")
      }
      else{
        isvalid = false
        setShowWarningE06("")
      }

      //E07 > 0
      if(Number(inputE07) >= 1 && Number(inputE07) <= 999999 && Number.isInteger(Number(inputE07))  ){
        setShowWarningE07("none")
      }
      else{
        isvalid = false
        setShowWarningE07("")
      }

      //E08 != ค่าว่าง
      if(inputE08 !== "" && Number(inputE08) >= 0 && Number(inputE08) <= 999999 && Number.isInteger(Number(inputE08)) ){
        setShowWarningE08("none")
      }
      else{
        isvalid = false
        setShowWarningE08("")
      }

      //E07 > E08
      if(Number(inputE07) >= Number(inputE08)){
        setShowWarningE07_08("none")
      }
      else{
        isvalid = false
        setShowWarningE07_08("")
      } 

      //check ตัวเลข ไร่ งาน ตารางวา ต้องเป็น integer
      if (Number.isInteger(Number(inputE06A)) && Number.isInteger(Number(inputE06B)) && Number.isInteger(Number(inputE06C))) {
        //
      } else {
        isvalid = false;
      }

      //E06 <= A10 (อยู่ที่ REC02) *** ทำ consis หน้าผืนที่ก่อน กลับมาทำอีกที
      /* let A10 : number = Number(rec01list[0].A10)
      let E06 : number = LandCalculator.CalculateSummary(Number(inputE06A),Number(inputE06B),Number(inputE06C))
      if(E06 <= A10){
        setShowWarningE06_A10("none")
      }
      else{
        isvalid = false
        setShowWarningE06_A10("")
      } */


    }

    //E05 = 1
    if(inputE05 === "1"){
      //E09 > 0
      if(Number(inputE09)  >= 1 && Number(inputE09) <= 999999 && Number.isInteger(Number(inputE09))){
        setShowWarningE09("none")
      }
      else{
        isvalid = false
        setShowWarningE09("")     
      }

      //E10 != ว่าง
      if(inputE10 === "" && Number(inputE10) >= 0 && Number(inputE10) <= 999999 && Number.isInteger(Number(inputE10))){
        isvalid = false
        setShowWarningE10("")
      }
      else{
        setShowWarningE10("none")
      }

      //E09 > E10
      if(Number(inputE09) >= Number(inputE10)){
        setShowWarningE09_10("none")
      }
      else{
        isvalid = false
        setShowWarningE09_10("")
      }      

    }


    


    //ผ่านการ consistency check
    if (isvalid) {
      //บันทึกลง state : plantList
      const plantList_updated = plantList.map((obj) => {
        if (obj.E03 === inputE03) {
          return {
            ...obj,
            E04: inputE04,
            E05: inputE05,
            E06: inputE06,
            E06A: inputE06A,
            E06B: inputE06B,
            E06C: inputE06C,
            E07: inputE07,
            E08: inputE08,
            E09: inputE09,
            E10: inputE10,
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
  const [titleModal, setTitleModal] = useState("พืชยืนต้น ไม้ผล  ");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //state : disabled
  const [disabledE04, setDisabledE04] = useState<boolean>(false);
  const [disabledE05, setDisabledE05] = useState<boolean>(false);

  //เปิด modal
  const OpenModalItem = (E03:string) => {

    //ค้นหาใน รายการ
    const item : REC06Model | undefined = plantList.find(element => element.E03 === E03)
    console.log(item);
        
    //set value to state of modal
    setInputE02(item?.E02!)
    setInputE03(item?.E03!)
    setInputE04(item?.E04!)
    setInputE05(item?.E05!)
    setInputE06(item?.E06!)
    setInputE06A(item?.E06A! === "" ? "" : parseInt(item?.E06A!).toString())
    setInputE06B(item?.E06B! === "" ? "" : parseInt(item?.E06B!).toString())
    setInputE06C(item?.E06C! === "" ? "" : parseInt(item?.E06C!).toString())
    setInputE07(item?.E07! === "" ? "" : parseInt(item?.E07!).toString())
    setInputE08(item?.E08! === "" ? "" : parseInt(item?.E08!).toString())
    setInputE09(item?.E09! === "" ? "" : parseInt(item?.E09!).toString())
    setInputE10(item?.E10! === "" ? "" : parseInt(item?.E10!).toString())

    //disabled
    if(item?.E04! === "1"){
      setDisabledE04(false)
    }
    else{
      setDisabledE04(true)
    }

    if(item?.E05! === "1"){
      setDisabledE05(false)
    }
    else{
      setDisabledE05(true)
    }



    setShowWarningE04("none")
    setShowWarningE07("none")
    setShowWarningE08("none")
    setShowWarningE09("none")
    setShowWarningE10("none")

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
  const [showWarningE01, setShowWarningE01] = useState<string>("none"); // ปิด
  const [showWarningA10Blank, setShowWarningA10Blank] = useState<string>("none"); // ปิด
  const [showWarningA10, setShowWarningA10] = useState<string>("none"); // ปิด


  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 3.4 พืชยืนต้น ไม้ผล
  const SaveOnClick = async () => {

    //summation E06
    let SUM_E06 : number = 0;

    //คำนวณผลรวมของ e06 เป็นทศนิยม xxxxx.xxxx ที่อยู่ใน state : plantList
    const plantList_updated = plantList.map((obj) => {
      const _E06= LandCalculator.CalculateSummary(Number(obj.E06A),Number(obj.E06B),Number(obj.E06C)).toFixed(4).toString().padStart(10,'0')

      SUM_E06 += LandCalculator.CalculateSummary(Number(obj.E06A),Number(obj.E06B),Number(obj.E06C));

      return {
        ...obj,
        E06: _E06
      };
    });

    let rec06 : REC06Info = ({
      AH_CODE: enumeratesk2?.AH_CODE!,
      E01: inputE01,
      E02_01: "",
      E03_01: "",
      E04_01: "",
      E05_01: "",
      E06_01: "",
      E06A_01: "",
      E06B_01: "",
      E06C_01: "",
      E07_01: "",
      E08_01: "",
      E09_01: "",
      E10_01: "",
      E02_02: "",
      E03_02: "",
      E04_02: "",
      E05_02: "",
      E06_02: "",
      E06A_02: "",
      E06B_02: "",
      E06C_02: "",
      E07_02: "",
      E08_02: "",
      E09_02: "",
      E10_02: "",
      E02_03: "",
      E03_03: "",
      E04_03: "",
      E05_03: "",
      E06_03: "",
      E06A_03: "",
      E06B_03: "",
      E06C_03: "",
      E07_03: "",
      E08_03: "",
      E09_03: "",
      E10_03: "",
      E02_04: "",
      E03_04: "",
      E04_04: "",
      E05_04: "",
      E06_04: "",
      E06A_04: "",
      E06B_04: "",
      E06C_04: "",
      E07_04: "",
      E08_04: "",
      E09_04: "",
      E10_04: "",
      E02_05: "",
      E03_05: "",
      E04_05: "",
      E05_05: "",
      E06_05: "",
      E06A_05: "",
      E06B_05: "",
      E06C_05: "",
      E07_05: "",
      E08_05: "",
      E09_05: "",
      E10_05: "",
      E02_06: "",
      E03_06: "",
      E04_06: "",
      E05_06: "",
      E06_06: "",
      E06A_06: "",
      E06B_06: "",
      E06C_06: "",
      E07_06: "",
      E08_06: "",
      E09_06: "",
      E10_06: "",
      E02_07: "",
      E03_07: "",
      E04_07: "",
      E05_07: "",
      E06_07: "",
      E06A_07: "",
      E06B_07: "",
      E06C_07: "",
      E07_07: "",
      E08_07: "",
      E09_07: "",
      E10_07: "",
      E02_08: "",
      E03_08: "",
      E04_08: "",
      E05_08: "",
      E06_08: "",
      E06A_08: "",
      E06B_08: "",
      E06C_08: "",
      E07_08: "",
      E08_08: "",
      E09_08: "",
      E10_08: "",
      E02_09: "",
      E03_09: "",
      E04_09: "",
      E05_09: "",
      E06_09: "",
      E06A_09: "",
      E06B_09: "",
      E06C_09: "",
      E07_09: "",
      E08_09: "",
      E09_09: "",
      E10_09: "",
      E02_10: "",
      E03_10: "",
      E04_10: "",
      E05_10: "",
      E06_10: "",
      E06A_10: "",
      E06B_10: "",
      E06C_10: "",
      E07_10: "",
      E08_10: "",
      E09_10: "",
      E10_10: "",
      E02_11: "",
      E03_11: "",
      E04_11: "",
      E05_11: "",
      E06_11: "",
      E06A_11: "",
      E06B_11: "",
      E06C_11: "",
      E07_11: "",
      E08_11: "",
      E09_11: "",
      E10_11: "",
      E02_12: "",
      E03_12: "",
      E04_12: "",
      E05_12: "",
      E06_12: "",
      E06A_12: "",
      E06B_12: "",
      E06C_12: "",
      E07_12: "",
      E08_12: "",
      E09_12: "",
      E10_12: "",
      E02_13: "",
      E03_13: "",
      E04_13: "",
      E05_13: "",
      E06_13: "",
      E06A_13: "",
      E06B_13: "",
      E06C_13: "",
      E07_13: "",
      E08_13: "",
      E09_13: "",
      E10_13: "",
      E02_14: "",
      E03_14: "",
      E04_14: "",
      E05_14: "",
      E06_14: "",
      E06A_14: "",
      E06B_14: "",
      E06C_14: "",
      E07_14: "",
      E08_14: "",
      E09_14: "",
      E10_14: "",
      E02_15: "",
      E03_15: "",
      E04_15: "",
      E05_15: "",
      E06_15: "",
      E06A_15: "",
      E06B_15: "",
      E06C_15: "",
      E07_15: "",
      E08_15: "",
      E09_15: "",
      E10_15: "",
      E02_16: "",
      E03_16: "",
      E04_16: "",
      E05_16: "",
      E06_16: "",
      E06A_16: "",
      E06B_16: "",
      E06C_16: "",
      E07_16: "",
      E08_16: "",
      E09_16: "",
      E10_16: "",
      E02_17: "",
      E03_17: "",
      E04_17: "",
      E05_17: "",
      E06_17: "",
      E06A_17: "",
      E06B_17: "",
      E06C_17: "",
      E07_17: "",
      E08_17: "",
      E09_17: "",
      E10_17: ""      
    })

    //set ตามโครงสร้าง REC06Info
    plantList_updated.forEach(function (item) {

      //กล้วยน้ำว้า
      if(item.E03 === "10003"){
        rec06.E02_01 = item.E02;
        rec06.E03_01 = item.E03;
        rec06.E04_01 = item.E04;
        rec06.E05_01 = item.E05;
        rec06.E06_01 = item.E06;
        rec06.E06A_01 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_01 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_01 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_01 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_01 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_01 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_01 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //กล้วยหอม
      if(item.E03 === "10004"){
        rec06.E02_02 = item.E02;
        rec06.E03_02 = item.E03;
        rec06.E04_02 = item.E04;
        rec06.E05_02 = item.E05;
        rec06.E06_02 = item.E06;
        rec06.E06A_02 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_02 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_02 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_02 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_02 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_02 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_02 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //กาแฟ
      if(item.E03 === "10006"){
        rec06.E02_03 = item.E02;
        rec06.E03_03 = item.E03;
        rec06.E04_03 = item.E04;
        rec06.E05_03 = item.E05;
        rec06.E06_03 = item.E06;
        rec06.E06A_03 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_03 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_03 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_03 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_03 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_03 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_03 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //เงาะ
      if(item.E03 === "10013"){
        rec06.E02_04 = item.E02;
        rec06.E03_04 = item.E03;
        rec06.E04_04 = item.E04;
        rec06.E05_04 = item.E05;
        rec06.E06_04 = item.E06;
        rec06.E06A_04 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_04 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_04 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_04 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_04 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_04 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_04 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //ชา
      if(item.E03 === "10018"){
        rec06.E02_05 = item.E02;
        rec06.E03_05 = item.E03;
        rec06.E04_05 = item.E04;
        rec06.E05_05 = item.E05;
        rec06.E06_05 = item.E06;
        rec06.E06A_05 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_05 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_05 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_05 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_05 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_05 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_05 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //ทุเรียน
      if(item.E03 === "10027"){
        rec06.E02_06 = item.E02;
        rec06.E03_06 = item.E03;
        rec06.E04_06 = item.E04;
        rec06.E05_06 = item.E05;
        rec06.E06_06 = item.E06;
        rec06.E06A_06 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_06 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_06 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_06 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_06 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_06 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_06 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //มะขามหวาน
      if(item.E03 === "10046"){
        rec06.E02_07 = item.E02;
        rec06.E03_07 = item.E03;
        rec06.E04_07 = item.E04;
        rec06.E05_07 = item.E05;
        rec06.E06_07 = item.E06;
        rec06.E06A_07 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_07 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_07 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_07 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_07 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_07 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_07 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //มะนาว
      if(item.E03 === "10052"){
        rec06.E02_08 = item.E02;
        rec06.E03_08 = item.E03;
        rec06.E04_08 = item.E04;
        rec06.E05_08 = item.E05;
        rec06.E06_08 = item.E06;
        rec06.E06A_08 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_08 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_08 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_08 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_08 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_08 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_08 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //มะพร้าว (แก่)
      if(item.E03 === "10054"){
        rec06.E02_09 = item.E02;
        rec06.E03_09 = item.E03;
        rec06.E04_09 = item.E04;
        rec06.E05_09 = item.E05;
        rec06.E06_09 = item.E06;
        rec06.E06A_09 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_09 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_09 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_09 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_09 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_09 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_09 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //มะพร้าวอ่อน
      if(item.E03 === "10055"){
        rec06.E02_10 = item.E02;
        rec06.E03_10 = item.E03;
        rec06.E04_10 = item.E04;
        rec06.E05_10 = item.E05;
        rec06.E06_10 = item.E06;
        rec06.E06A_10 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_10 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_10 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_10 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_10 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_10 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_10 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //มะม่วง
      if(item.E03 === "10060"){
        rec06.E02_11 = item.E02;
        rec06.E03_11 = item.E03;
        rec06.E04_11 = item.E04;
        rec06.E05_11 = item.E05;
        rec06.E06_11 = item.E06;
        rec06.E06A_11 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_11 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_11 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_11 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_11 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_11 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_11 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //มะม่วงหิมพานต์
      if(item.E03 === "10061"){
        rec06.E02_12 = item.E02;
        rec06.E03_12 = item.E03;
        rec06.E04_12 = item.E04;
        rec06.E05_12 = item.E05;
        rec06.E06_12 = item.E06;
        rec06.E06A_12 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_12 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_12 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_12 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_12 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_12 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_12 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //มังคุด
      if(item.E03 === "10068"){
        rec06.E02_13 = item.E02;
        rec06.E03_13 = item.E03;
        rec06.E04_13 = item.E04;
        rec06.E05_13 = item.E05;
        rec06.E06_13 = item.E06;
        rec06.E06A_13 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_13 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_13 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_13 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_13 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_13 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_13 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //ลองกอง
      if(item.E03 === "10071"){
        rec06.E02_14 = item.E02;
        rec06.E03_14 = item.E03;
        rec06.E04_14 = item.E04;
        rec06.E05_14 = item.E05;
        rec06.E06_14 = item.E06;
        rec06.E06A_14 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_14 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_14 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_14 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_14 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_14 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_14 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //ลำไย
      if(item.E03 === "10075"){
        rec06.E02_15 = item.E02;
        rec06.E03_15 = item.E03;
        rec06.E04_15 = item.E04;
        rec06.E05_15 = item.E05;
        rec06.E06_15 = item.E06;
        rec06.E06A_15 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_15 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_15 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_15 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_15 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_15 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_15 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //ลิ้นจี่
      if(item.E03 === "10076"){
        rec06.E02_16 = item.E02;
        rec06.E03_16 = item.E03;
        rec06.E04_16 = item.E04;
        rec06.E05_16 = item.E05;
        rec06.E06_16 = item.E06;
        rec06.E06A_16 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_16 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_16 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_16 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_16 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_16 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_16 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

      //ส้มเขียวหวาน
      if(item.E03 === "10084"){
        rec06.E02_17 = item.E02;
        rec06.E03_17 = item.E03;
        rec06.E04_17 = item.E04;
        rec06.E05_17 = item.E05;
        rec06.E06_17 = item.E06;
        rec06.E06A_17 = item.E06A !== "" ? item.E06A.padStart(5, '0') : "" ;
        rec06.E06B_17 = item.E06B !== "" ? item.E06B.padStart(1, '0') : "" ;
        rec06.E06C_17 = item.E06C !== "" ? item.E06C.padStart(2, '0') : "" ;
        rec06.E07_17 = (item.E07 !== "" && item.E07 !== "0") ? item.E07.padStart(6, '0') : ""  ;
        rec06.E08_17 = item.E08 !== "" ? item.E08.padStart(6, '0') : "" ;
        rec06.E09_17 = (item.E09 !== "" && item.E09 !== "0") ? item.E09.padStart(6, '0') : ""  ;
        rec06.E10_17 = item.E10 !== "" ? item.E10.padStart(6, '0') : "" ;
      }

    });
    
    const body = rec06
    //console.log(body);


    //consistency check
    let isvalid = true;

    //ทุกพืชยืนต้น ไม้ผล ต้องมีการระบุข้อมูลทุกตัว
    let implist: REC06Model[] = plantList_updated.filter((p) => {
      return (
        p.E04 === "1" || p.E05 === "1"
      );
    })
    if(plantList_updated.length !== implist.length){
      setShowWarningE01("")
      isvalid = false
    }
    else{
      setShowWarningE01("none")
    }

    //ถ้า E04 = 1 แล้ว (เฉพาะรายการที่เลือก ปลูกเป็นกลุ่ม)
    let implist_E04_1: REC06Model[] = plantList_updated.filter((p) => {
      return (
        p.E04 === "1"
      );
    })
    if (implist_E04_1.length > 0) {

      //A10 ≠ blank
      if (Number(valueA10) <= 0) {
        setShowWarningA10Blank("")
        isvalid = false
      }
      else {
        setShowWarningA10Blank("none")
      }

      //ผลรวมเนื้อที่เพาะปลูกพืชยืนต้น ไม้ผล ต้อง ≤ A10
      console.log("SUM_E06 = ",SUM_E06.toFixed(4));
      console.log("valueA10 = ",Number(valueA10).toFixed(4));
      if (Number(SUM_E06.toFixed(4)) > Number(Number(valueA10).toFixed(4))) {
        setShowWarningA10("")
        isvalid = false
      }
      else {
        setShowWarningA10("none")
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

          //url updateREC06
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC06";
          }

          //api updateREC06
          const result = await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {
                  //setPage(page + 1);
                  return true;
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
              //setPage(page + 1);
            });


          // หลังจาก updateREC06 แล้ว
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
              .catch((err) => { console.log("AXIOS ERROR (getREC01List in EPerennialPlant): ", err); });


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

                  if (forestlist.length > 0) {
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
              })
              .catch((err) => {
                console.log("AXIOS ERROR (getREC02): ", err);
              });

          }

          


        }

      } catch (error) {
        console.error("SaveOnClick ERROR (ตอนที่ 3.4 พืชยืนต้น ไม้ผล): ", error);
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

              if(oilpalmlist.length > 0){
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
        console.error("OnClickBack ERROR (ตอนที่ 3.4 พืชยืนต้น ไม้ผล): ", error);
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
            .catch((err) => { console.log("AXIOS ERROR (NextOnClick.getREC01List in EPerennialPlant): ", err); });


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

                if (forestlist.length > 0) {
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
            })
            .catch((err) => {
              console.log("AXIOS ERROR (NextOnClick.getREC02): ", err);
            });

        }

      }

    } catch (error) {
      console.error("NextOnClick ERROR (ตอนที่ 3.4 พืชยืนต้น ไม้ผล): ", error);
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
                        ตอนที่ 3.4 พืชยืนต้น ไม้ผล
                      </h5>
                    </Col>

                    <Col md={8} className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseControl558"
                        aria-expanded="false"
                        aria-controls="collapseControl558"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="collapse show" id="collapseControl558">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ณ วันที่ 1 พฤษภาคม 2566 ที่ถือครองนี้มีการปลูกพืชยืนต้น ไม้ผล ชนิดสำคัญหรือไม่ (ระบบกำหนดให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={2}>
                          <label>E01</label>
                        </Col>
                        <Col md={12}>
                          <div className="form-group">
                            {_E01.map((option, index) => (
                              <div className="form-check" key={option.value}>
                                <input
                                  className="form-check-input"
                                  name="rd_E01"
                                  type="radio"
                                  value={option.value}
                                  id={`rd_E01${index}`}
                                  checked={option.value === inputE01}
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`rd_E01${index}`}
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
                                2. ให้สอบถามและบันทึกรายละเอียดการปลูกพืชยืนต้น ไม้ผลชนิดสำคัญ
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

                            {/* <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <a onClick={OpenModalItem} >
                              <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                <div className="card-body box-list">
                                  <Row>
                                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                                      <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}>ชื่อพืชชนิดที่ 1 (รหัส 12345)</p>
                                      <p>ปลูกเป็นกลุ่ม </p>
                                      <ul>
                                        <li>เนื้อที่เพาะปลูก 12345 ไร่ 3 งาน 99 ตารางวา</li>
                                        <li>จำนวนต้นทั้งสิ้น 1000 ต้น, ให้ผลแล้ว 500 ต้น</li>
                                      </ul>
                                      <p>ปลูกปะปนกัน </p>
                                      <ul>
                                        <li>จำนวนต้นทั้งสิ้น 2000 ต้น, ให้ผลแล้ว 800 ต้น</li>
                                      </ul>
                                    </div>
                                  </Row>                                                                                                  
                                </div>
                              </div>
                            </a>
                          </div> */}

                            {plantList &&
                              plantList.map((item, index) => {
                                return (
                                  <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
                                    <a onClick={() => OpenModalItem(item.E03)} >
                                      <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                        <div className={`card-body ${(item.E04 === "1" || item.E05 === "1" )?"box-list-success":"box-list-warning"} `}>
                                          <Row>
                                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                                              <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}> {(item.E04 === "1" || item.E05 === "1"  ) && (<i className='bx bxs-check-square fs-4'></i>) } {index + 1}. {item.E02} ({item.E03}) </p>

                                            </div>
                                          </Row>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                );
                              })}

                            {/* <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <a onClick={OpenModalItem} >
                              <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                <div className="card-body box-list">
                                  <Row>
                                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                                      <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}>ชื่อพืชชนิดที่ 1 (รหัส )</p>
                                      
                                    </div>
                                  </Row>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <a onClick={OpenModalItem} >
                              <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                <div className="card-body box-list">
                                  <Row>
                                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                                      <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}>ชื่อพืชชนิดที่ 2 (รหัส )</p>
                                      
                                    </div>
                                  </Row>                                                                                                  
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <a onClick={OpenModalItem} >
                              <div className="card icon-card cursor-pointer text-start mb-2 mt-2 ">
                                <div className="card-body box-list">
                                  <Row>
                                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                                      <p className="icon-name text-capitalize  mt-2" style={{ fontWeight: "bold" }}>ชื่อพืชชนิดที่ 3 (รหัส )</p>
                                      
                                    </div>
                                  </Row>                                                                                                  
                                </div>
                              </div>
                            </a>
                          </div> */}

                          </Row>


                          <Row>
                            <Col md={12}>
                              <div className="mt-3" style={{ display: showWarningE01 }}><label className="text-danger">กรุณาบันทึกรายละเอียดการปลูกพืชยืนต้น ไม้ผลชนิดสำคัญ</label></div>
                              <div className="mt-3" style={{ display: showWarningA10Blank}}><label className="text-danger">กรุณาระบุ เนื้อที่พืชยืนต้นและไม้ผล A10 โดยกลับไปที่ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร</label></div>
                              <div className="mt-3" style={{ display: showWarningA10}}><label className="text-danger">ผลรวมเนื้อที่เพาะปลูกพืชยืนต้น ไม้ผล ต้อง น้อยกว่าหรือเท่ากับ A10</label></div>
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
                E02 {inputE02}
              </label>
              <br />
            </Col>
            <Col md={12}>

              <Row>
                <Col md={4} className="mt-3">
                  <label> E03 รหัส</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={inputE03}
                  />
                </Col>
                <Col md={4} className="mt-3">
                  <label> E04 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="E04"
                        onChange={E04OnChange}
                        checked={inputE04 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="E04">
                        {" "}
                        ปลูกเป็นกลุ่ม
                      </label>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="mt-3">
                  <label> E05 </label>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="E05"
                        onChange={E05OnChange}
                        checked={inputE05 === "1" ? true : false }
                      />
                      <label className="form-check-label" htmlFor="E05">
                        {" "}
                        ปลูกปะปนกัน
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={4} className="mt-3">
                  <label> E06 เนื้อที่เพาะปลูก (ปลูกเป็นกลุ่ม)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputE06A) >= 0 &&
                        Number(inputE06A) <= 99999 && Number.isInteger(Number(inputE06A))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99999}
                      onChange={E06AOnChange}
                      value={inputE06A}
                      disabled={disabledE04}
                    />
                    <span className="input-group-text">
                      ไร่
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputE06B) >= 0 &&
                        Number(inputE06B) <= 3 && Number.isInteger(Number(inputE06B))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={3}
                      onChange={E06BOnChange}
                      value={inputE06B}
                      disabled={disabledE04}
                    />
                    <span className="input-group-text">
                      งาน
                    </span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${
                        Number(inputE06C) >= 0 &&
                        Number(inputE06C) <= 99 && Number.isInteger(Number(inputE06C))
                          ? ""
                          : "is-invalid"
                      }`}
                      min={0}
                      max={99}
                      onChange={E06COnChange}
                      value={inputE06C}
                      disabled={disabledE04}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                  <div className="mt-3" style={{ display: showWarningE06 }}><label className="text-danger">กรุณาระบุ E06 มากกว่า 0</label></div>
                  <div className="mt-3" style={{ display: showWarningE06_A10 }}><label className="text-danger">E06 ต้องมีค่าน้อยกว่าหรือเท่ากับ A10 </label></div>
                </Col>
                
              </Row>

              <Row>
                <Col md={4} className="mt-3">
                  <label> E07 จำนวนต้นทั้งสิ้น (ปลูกเป็นกลุ่ม)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      min={1}
                      max={999999}
                      onChange={E07OnChange}
                      value={inputE07}
                      disabled={disabledE04}
                    />
                    <span className="input-group-text">ต้น</span>
                  </div>
                  <div className="mt-3" style={{ display: showWarningE07}}><label className="text-danger">กรุณาระบุ E07 มากกว่า 0 ถึง 999999</label></div>
                  <div className="mt-3" style={{ display: showWarningE07_08 }}><label className="text-danger">กรุณาระบุ E07 มากกว่าหรือเท่ากับ E08</label></div>
                </Col>
                <Col md={4} className="mt-3">
                  <label> E08 จำนวนต้นให้ผลแล้ว (ปลูกเป็นกลุ่ม)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      max={999999}
                      onChange={E08OnChange}
                      value={inputE08}
                      disabled={disabledE04}
                    />
                    <span className="input-group-text">ต้น</span>
                  </div>
                  <div className="mt-3" style={{ display: showWarningE08 }}><label className="text-danger">กรุณาระบุ E08 ไม่เท่ากับ ค่าว่าง และมีค่า 0 ถึง 999999</label></div>
                </Col>
              </Row>

              <Row>
                <Col md={4} className="mt-3">
                  <label> E09 จำนวนต้นทั้งสิ้น (ปลูกปะปนกัน)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      min={1}
                      max={999999}
                      onChange={E09OnChange}
                      value={inputE09}
                      disabled={disabledE05}
                    />
                    <span className="input-group-text">ต้น</span>
                  </div>
                  <div className="mt-3" style={{ display: showWarningE09 }}><label className="text-danger">กรุณาระบุ E09 มากกว่า 0 ถึง 999999</label></div>
                  <div className="mt-3" style={{ display: showWarningE09_10 }}><label className="text-danger">กรุณาระบุ E09 มากกว่าหรือเท่ากับ E10</label></div>
                </Col>
                <Col md={4} className="mt-3">
                  <label> E10 จำนวนต้นให้ผลแล้ว (ปลูกปะปนกัน)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      max={999999}
                      onChange={E10OnChange}
                      value={inputE10}
                      disabled={disabledE05}
                    />
                    <span className="input-group-text">ต้น</span>
                  </div>
                  <div className="mt-3" style={{ display: showWarningE10 }}><label className="text-danger">กรุณาระบุ E10 ไม่เท่ากับ ค่าว่าง และมีค่า 0 ถึง 999999</label></div>
                </Col>
              </Row>


            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="mt-3" style={{ display: showWarningE04 }}><label className="text-danger">กรุณาระบุ E04 หรือ E05 อย่างน้อย 1 รายการ </label></div>
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
