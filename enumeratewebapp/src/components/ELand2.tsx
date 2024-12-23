import { faCaretDown, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { AMP, TAM, VIL } from "../model/Address";
import { APIService } from "../service/APIService";
import { useGlobalEnumerateContext } from "./EnumerateContext";
import { useGlobalUserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import { REC01Info } from "../model/REC01Info";
import { LandCalculator } from "../service/LandCalculator";

export default function ELand2() {

  interface AMP {
    ampCode: string;
    ampOrder: string;
    ampName: string;
  }

  interface TAM {
    tamCode: string;
    tamOrder: string;
    tamName: string;
  }

  interface VIL {
    vilCode: string;
    vilOrder: string;
    vilName: string;
  }

  const { enumeratesk2, setEnumerateSK2, page, setPage } = useGlobalEnumerateContext();
  const { userInfo } = useGlobalUserContext();

  const [A06, setA06] = useState<string>("");
  const [rec01list, setRec01list] = useState<REC01Info[]>([]);
  const [A06_SUB, setA06_SUB] = useState<string>("");
  const [A07, setA07] = useState<string>("");
  const [A07A, setA07A] = useState<string>("");
  const [A07B, setA07B] = useState<string>("");
  const [A07C, setA07C] = useState<string>("");
  const [A08, setA08] = useState<string>("");
  const [A08A, setA08A] = useState<string>("");
  const [A08B, setA08B] = useState<string>("");
  const [A08C, setA08C] = useState<string>("");
  const [A09, setA09] = useState<string>("");
  const [A09A, setA09A] = useState<string>("");
  const [A09B, setA09B] = useState<string>("");
  const [A09C, setA09C] = useState<string>("");
  const [A10, setA10] = useState<string>("");
  const [A10A, setA10A] = useState<string>("");
  const [A10B, setA10B] = useState<string>("");
  const [A10C, setA10C] = useState<string>("");
  const [A11, setA11] = useState<string>("");
  const [A11A, setA11A] = useState<string>("");
  const [A11B, setA11B] = useState<string>("");
  const [A11C, setA11C] = useState<string>("");
  const [A12, setA12] = useState<string>("");
  const [A12A, setA12A] = useState<string>("");
  const [A12B, setA12B] = useState<string>("");
  const [A12C, setA12C] = useState<string>("");
  const [A13, setA13] = useState<string>("");
  const [A13A, setA13A] = useState<string>("");
  const [A13B, setA13B] = useState<string>("");
  const [A13C, setA13C] = useState<string>("");
  const [A14, setA14] = useState<string>("");
  const [A14A, setA14A] = useState<string>("");
  const [A14B, setA14B] = useState<string>("");
  const [A14C, setA14C] = useState<string>("");
  const [A15, setA15] = useState<string>("");
  const [A15A, setA15A] = useState<string>("");
  const [A15B, setA15B] = useState<string>("");
  const [A15C, setA15C] = useState<string>("");
  const [A16, setA16] = useState<string>("");
  const [A16A, setA16A] = useState<string>("");
  const [A16B, setA16B] = useState<string>("");
  const [A16C, setA16C] = useState<string>("");
  const [A17, setA17] = useState<string>("");
  const [A17A, setA17A] = useState<string>("");
  const [A17B, setA17B] = useState<string>("");
  const [A17C, setA17C] = useState<string>("");
  const [A18, setA18] = useState<string>("");
  const [A18A, setA18A] = useState<string>("");
  const [A18B, setA18B] = useState<string>("");
  const [A18C, setA18C] = useState<string>("");
  const [A19, setA19] = useState<string>("");
  const [A19A, setA19A] = useState<string>("");
  const [A19B, setA19B] = useState<string>("");
  const [A19C, setA19C] = useState<string>("");
  const [A20, setA20] = useState<string>("");
  const [A20A, setA20A] = useState<string>("");
  const [A20B, setA20B] = useState<string>("");
  const [A20C, setA20C] = useState<string>("");
  const [A21, setA21] = useState<string>("");
  const [A21A, setA21A] = useState<string>("");
  const [A21B, setA21B] = useState<string>("");
  const [A21C, setA21C] = useState<string>("");
  const [A22, setA22] = useState<string>("");
  const [A22A, setA22A] = useState<string>("");
  const [A22B, setA22B] = useState<string>("");
  const [A22C, setA22C] = useState<string>("");
  const [A23, setA23] = useState<string>("");
  const [A23A, setA23A] = useState<string>("");
  const [A23B, setA23B] = useState<string>("");
  const [A23C, setA23C] = useState<string>("");
  const [A24, setA24] = useState<string>("");
  const [A24A, setA24A] = useState<string>("");
  const [A24B, setA24B] = useState<string>("");
  const [A24C, setA24C] = useState<string>("");
  const [A25, setA25] = useState<string>("");
  const [A25A, setA25A] = useState<string>("");
  const [A25B, setA25B] = useState<string>("");
  const [A25C, setA25C] = useState<string>("");

  const [ddlAMP, setDdlAmp] = useState<AMP[]>([]);
  const [ddlTAM, setDdlTam] = useState<TAM[]>([]);
  const [ddlVIL, setDdlVil] = useState<VIL[]>([]);

  //for modal
  const [rec01sub, setRec01sub] = useState<REC01Info>();
  const [A06AMP_SUB, setA06AMP_SUB] = useState<string>("");
  const [A06TAM_SUB, setA06TAM_SUB] = useState<string>("");
  const [A06VIL_SUB, setA06VIL_SUB] = useState<string>("");
  const [A07_SUB, setA07_SUB] = useState<string>("");
  const [A07A_SUB, setA07A_SUB] = useState<string>("");
  const [A07B_SUB, setA07B_SUB] = useState<string>("");
  const [A07C_SUB, setA07C_SUB] = useState<string>("");
  const [A08_SUB, setA08_SUB] = useState<string>("");
  const [A08A_SUB, setA08A_SUB] = useState<string>("");
  const [A08B_SUB, setA08B_SUB] = useState<string>("");
  const [A08C_SUB, setA08C_SUB] = useState<string>("");
  const [A09_SUB, setA09_SUB] = useState<string>("");
  const [A09A_SUB, setA09A_SUB] = useState<string>("");
  const [A09B_SUB, setA09B_SUB] = useState<string>("");
  const [A09C_SUB, setA09C_SUB] = useState<string>("");
  const [A10_SUB, setA10_SUB] = useState<string>("");
  const [A10A_SUB, setA10A_SUB] = useState<string>("");
  const [A10B_SUB, setA10B_SUB] = useState<string>("");
  const [A10C_SUB, setA10C_SUB] = useState<string>("");
  const [A11_SUB, setA11_SUB] = useState<string>("");
  const [A11A_SUB, setA11A_SUB] = useState<string>("");
  const [A11B_SUB, setA11B_SUB] = useState<string>("");
  const [A11C_SUB, setA11C_SUB] = useState<string>("");
  const [A12_SUB, setA12_SUB] = useState<string>("");
  const [A12A_SUB, setA12A_SUB] = useState<string>("");
  const [A12B_SUB, setA12B_SUB] = useState<string>("");
  const [A12C_SUB, setA12C_SUB] = useState<string>("");
  const [A13_SUB, setA13_SUB] = useState<string>("");
  const [A13A_SUB, setA13A_SUB] = useState<string>("");
  const [A13B_SUB, setA13B_SUB] = useState<string>("");
  const [A13C_SUB, setA13C_SUB] = useState<string>("");
  const [A14_SUB, setA14_SUB] = useState<string>("");
  const [A14A_SUB, setA14A_SUB] = useState<string>("");
  const [A14B_SUB, setA14B_SUB] = useState<string>("");
  const [A14C_SUB, setA14C_SUB] = useState<string>("");
  const [A15_SUB, setA15_SUB] = useState<string>("");
  const [A15A_SUB, setA15A_SUB] = useState<string>("");
  const [A15B_SUB, setA15B_SUB] = useState<string>("");
  const [A15C_SUB, setA15C_SUB] = useState<string>("");
  const [A16_SUB, setA16_SUB] = useState<string>("");
  const [A16A_SUB, setA16A_SUB] = useState<string>("");
  const [A16B_SUB, setA16B_SUB] = useState<string>("");
  const [A16C_SUB, setA16C_SUB] = useState<string>("");
  const [A17_SUB, setA17_SUB] = useState<string>("");
  const [A17A_SUB, setA17A_SUB] = useState<string>("");
  const [A17B_SUB, setA17B_SUB] = useState<string>("");
  const [A17C_SUB, setA17C_SUB] = useState<string>("");
  const [A18_SUB, setA18_SUB] = useState<string>("");
  const [A18A_SUB, setA18A_SUB] = useState<string>("");
  const [A18B_SUB, setA18B_SUB] = useState<string>("");
  const [A18C_SUB, setA18C_SUB] = useState<string>("");
  const [A19_SUB, setA19_SUB] = useState<string>("");
  const [A19A_SUB, setA19A_SUB] = useState<string>("");
  const [A19B_SUB, setA19B_SUB] = useState<string>("");
  const [A19C_SUB, setA19C_SUB] = useState<string>("");
  const [A20_SUB, setA20_SUB] = useState<string>("");
  const [A20A_SUB, setA20A_SUB] = useState<string>("");
  const [A20B_SUB, setA20B_SUB] = useState<string>("");
  const [A20C_SUB, setA20C_SUB] = useState<string>("");
  const [A21_SUB, setA21_SUB] = useState<string>("");
  const [A21A_SUB, setA21A_SUB] = useState<string>("");
  const [A21B_SUB, setA21B_SUB] = useState<string>("");
  const [A21C_SUB, setA21C_SUB] = useState<string>("");
  const [A22_SUB, setA22_SUB] = useState<string>("");
  const [A22A_SUB, setA22A_SUB] = useState<string>("");
  const [A22B_SUB, setA22B_SUB] = useState<string>("");
  const [A22C_SUB, setA22C_SUB] = useState<string>("");
  const [A23_SUB, setA23_SUB] = useState<string>("");
  const [A23A_SUB, setA23A_SUB] = useState<string>("");
  const [A23B_SUB, setA23B_SUB] = useState<string>("");
  const [A23C_SUB, setA23C_SUB] = useState<string>("");
  const [A24_SUB, setA24_SUB] = useState<string>("");
  const [A24A_SUB, setA24A_SUB] = useState<string>("");
  const [A24B_SUB, setA24B_SUB] = useState<string>("");
  const [A24C_SUB, setA24C_SUB] = useState<string>("");
  const [A25_SUB, setA25_SUB] = useState<string>("");
  const [A25A_SUB, setA25A_SUB] = useState<string>("");
  const [A25B_SUB, setA25B_SUB] = useState<string>("");
  const [A25C_SUB, setA25C_SUB] = useState<string>("");

  const [A06VILN_SUB, setA06VILN_SUB] = useState<string>("");

  //state for disabled in modal
  //for A02_1 = 1 การปลูกพืช
  const [disabledA02_1, setDisabledA02_1] = useState<boolean>(false);
  //for A02_2 = 1 การเลี้ยงสัตว์
  const [disabledA02_2, setDisabledA02_2] = useState<boolean>(false);
  //for A02_3 = 1 การเลี้ยงสัตว์น้ำ
  const [disabledA02_3, setDisabledA02_3] = useState<boolean>(false);
  //for A02_4 = 1 การทำนาเกลือสมุทร
  const [disabledA02_4, setDisabledA02_4] = useState<boolean>(false);



  //state for delete
  const [showDeleteButton, setShowDeleteButton] = useState<string>(""); //เปิด
  const [showConfirmDeleteButton, setShowConfirmDeleteButton] = useState<string>("none"); // ปิด
 
  const {
    handleSubmit,
  } = useForm();

  //first load
  useEffect(() => {

    console.log("load page ELand2");
    
    getREC01("");

    //สำหรับรายผืนใน modal
    bindingAMP(enumeratesk2?.CWT!);

    setShowInvalidA06_Rec01list("none")
    setShowInvalidA06_A08_A19_A20_A25("none")
   
  }, [page === 2]);




  async function getREC01(refresh:string) {
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

              //console.log(res.data);

              if (res.data !== undefined) {

                //set state
                setRec01list(JSON.parse(JSON.stringify(res.data), (key, value) => value === null ? "" : value));

                //set state : main record
                setA06(Number(res.data[0]?.A06!) > 0 ? Number(res.data[0]?.A06!).toString() : "");

                setA07(res.data[0]?.A07!)
                if(refresh === ""){
                  setA07A(res.data[0]?.A07A === "" ? "" : parseInt(res.data[0]?.A07A!).toString())
                  setA07B(res.data[0]?.A07B === "" ? "" : parseInt(res.data[0]?.A07B!).toString())
                  setA07C(res.data[0]?.A07C === "" ? "" : parseInt(res.data[0]?.A07C!).toString())
                }else{
                  setA07A(A07A)
                  setA07B(A07B)
                  setA07C(A07C)
                }
                
                setA08(res.data[0]?.A08!)
                setA08A(res.data[0]?.A08A === "" ? "" : parseInt(res.data[0]?.A08A!).toString())
                setA08B(res.data[0]?.A08B === "" ? "" : parseInt(res.data[0]?.A08B!).toString())
                setA08C(res.data[0]?.A08C === "" ? "" : parseInt(res.data[0]?.A08C!).toString())
                setA09(res.data[0]?.A09!)
                setA09A(res.data[0]?.A09A === "" ? "" : parseInt(res.data[0]?.A09A!).toString())
                setA09B(res.data[0]?.A09B === "" ? "" : parseInt(res.data[0]?.A09B!).toString())
                setA09C(res.data[0]?.A09C === "" ? "" : parseInt(res.data[0]?.A09C!).toString())
                setA10(res.data[0]?.A10!)
                setA10A(res.data[0]?.A10A === "" ? "" : parseInt(res.data[0]?.A10A!).toString())
                setA10B(res.data[0]?.A10B === "" ? "" : parseInt(res.data[0]?.A10B!).toString())
                setA10C(res.data[0]?.A10C === "" ? "" : parseInt(res.data[0]?.A10C!).toString())
                setA11(res.data[0]?.A11!)
                setA11A(res.data[0]?.A11A === "" ? "" : parseInt(res.data[0]?.A11A!).toString())
                setA11B(res.data[0]?.A11B === "" ? "" : parseInt(res.data[0]?.A11B!).toString())
                setA11C(res.data[0]?.A11C === "" ? "" : parseInt(res.data[0]?.A11C!).toString())
                setA12(res.data[0]?.A12!)
                setA12A(res.data[0]?.A12A === "" ? "" : parseInt(res.data[0]?.A12A!).toString())
                setA12B(res.data[0]?.A12B === "" ? "" : parseInt(res.data[0]?.A12B!).toString())
                setA12C(res.data[0]?.A12C === "" ? "" : parseInt(res.data[0]?.A12C!).toString())
                setA13(res.data[0]?.A13!)
                setA13A(res.data[0]?.A13A === "" ? "" : parseInt(res.data[0]?.A13A!).toString())
                setA13B(res.data[0]?.A13B === "" ? "" : parseInt(res.data[0]?.A13B!).toString())
                setA13C(res.data[0]?.A13C === "" ? "" : parseInt(res.data[0]?.A13C!).toString())
                setA14(res.data[0]?.A14!)
                setA14A(res.data[0]?.A14A === "" ? "" : parseInt(res.data[0]?.A14A!).toString())
                setA14B(res.data[0]?.A14B === "" ? "" : parseInt(res.data[0]?.A14B!).toString())
                setA14C(res.data[0]?.A14C === "" ? "" : parseInt(res.data[0]?.A14C!).toString())
                setA15(res.data[0]?.A15!)
                setA15A(res.data[0]?.A15A === "" ? "" : parseInt(res.data[0]?.A15A!).toString())
                setA15B(res.data[0]?.A15B === "" ? "" : parseInt(res.data[0]?.A15B!).toString())
                setA15C(res.data[0]?.A15C === "" ? "" : parseInt(res.data[0]?.A15C!).toString())
                setA16(res.data[0]?.A16!)
                setA16A(res.data[0]?.A16A === "" ? "" : parseInt(res.data[0]?.A16A!).toString())
                setA16B(res.data[0]?.A16B === "" ? "" : parseInt(res.data[0]?.A16B!).toString())
                setA16C(res.data[0]?.A16C === "" ? "" : parseInt(res.data[0]?.A16C!).toString())
                setA17(res.data[0]?.A17!)
                setA17A(res.data[0]?.A17A === "" ? "" : parseInt(res.data[0]?.A17A!).toString())
                setA17B(res.data[0]?.A17B === "" ? "" : parseInt(res.data[0]?.A17B!).toString())
                setA17C(res.data[0]?.A17C === "" ? "" : parseInt(res.data[0]?.A17C!).toString())
                setA18(res.data[0]?.A18!)
                setA18A(res.data[0]?.A18A === "" ? "" : parseInt(res.data[0]?.A18A!).toString())
                setA18B(res.data[0]?.A18B === "" ? "" : parseInt(res.data[0]?.A18B!).toString())
                setA18C(res.data[0]?.A18C === "" ? "" : parseInt(res.data[0]?.A18C!).toString())
                setA19(res.data[0]?.A19!)
                setA19A(res.data[0]?.A19A === "" ? "" : parseInt(res.data[0]?.A19A!).toString())
                setA19B(res.data[0]?.A19B === "" ? "" : parseInt(res.data[0]?.A19B!).toString())
                setA19C(res.data[0]?.A19C === "" ? "" : parseInt(res.data[0]?.A19C!).toString())
                setA20(res.data[0]?.A20!)
                setA20A(res.data[0]?.A20A === "" ? "" : parseInt(res.data[0]?.A20A!).toString())
                setA20B(res.data[0]?.A20B === "" ? "" : parseInt(res.data[0]?.A20B!).toString())
                setA20C(res.data[0]?.A20C === "" ? "" : parseInt(res.data[0]?.A20C!).toString())
                setA21(res.data[0]?.A21!)
                setA21A(res.data[0]?.A21A === "" ? "" : parseInt(res.data[0]?.A21A!).toString())
                setA21B(res.data[0]?.A21B === "" ? "" : parseInt(res.data[0]?.A21B!).toString())
                setA21C(res.data[0]?.A21C === "" ? "" : parseInt(res.data[0]?.A21C!).toString())
                setA22(res.data[0]?.A22!)
                setA22A(res.data[0]?.A22A === "" ? "" : parseInt(res.data[0]?.A22A!).toString())
                setA22B(res.data[0]?.A22B === "" ? "" : parseInt(res.data[0]?.A22B!).toString())
                setA22C(res.data[0]?.A22C === "" ? "" : parseInt(res.data[0]?.A22C!).toString())
                setA23(res.data[0]?.A23!)
                setA23A(res.data[0]?.A23A === "" ? "" : parseInt(res.data[0]?.A23A!).toString())
                setA23B(res.data[0]?.A23B === "" ? "" : parseInt(res.data[0]?.A23B!).toString())
                setA23C(res.data[0]?.A23C === "" ? "" : parseInt(res.data[0]?.A23C!).toString())
                setA24(res.data[0]?.A24!)
                setA24A(res.data[0]?.A24A === "" ? "" : parseInt(res.data[0]?.A24A!).toString())
                setA24B(res.data[0]?.A24B === "" ? "" : parseInt(res.data[0]?.A24B!).toString())
                setA24C(res.data[0]?.A24C === "" ? "" : parseInt(res.data[0]?.A24C!).toString())
                setA25(res.data[0]?.A25!)
                setA25A(res.data[0]?.A25A === "" ? "" : parseInt(res.data[0]?.A25A!).toString())
                setA25B(res.data[0]?.A25B === "" ? "" : parseInt(res.data[0]?.A25B!).toString())
                setA25C(res.data[0]?.A25C === "" ? "" : parseInt(res.data[0]?.A25C!).toString())                

                //disabled
                if(res.data[0]?.A02_1! !== "1"){
                  //ถ้าไม่ได้เลือกปลูกพืช ให้ปิดที่ดินไว้ และให้ค่าว่าง
                  setDisabledA02_1(true)
                  setA08A_SUB("")
                  setA08B_SUB("")
                  setA08C_SUB("")
                  setA09A_SUB("")
                  setA09B_SUB("")
                  setA09C_SUB("")
                  setA10A_SUB("")
                  setA10B_SUB("")
                  setA10C_SUB("")
                  setA11A_SUB("")
                  setA11B_SUB("")
                  setA11C_SUB("")
                  setA12A_SUB("")
                  setA12B_SUB("")
                  setA12C_SUB("")
                  setA13A_SUB("")
                  setA13B_SUB("")
                  setA13C_SUB("")
                  setA14A_SUB("")
                  setA14B_SUB("")
                  setA14C_SUB("")
                }
                else{
                  setDisabledA02_1(false)
                }

                if(res.data[0]?.A02_2! !== "1"){
                  //ถ้าไม่ได้เลือกเลี้ยงสัตว์ ให้ปิดที่ดินไว้ และให้ค่าว่าง
                  setDisabledA02_2(true)
                  setA15A_SUB("")
                  setA15B_SUB("")
                  setA15C_SUB("")
                }
                else{
                  setDisabledA02_2(false)
                }

                if(res.data[0]?.A02_3! !== "1"){
                  //ถ้าไม่ได้เลือกเลี้ยงสัตว์น้ำ ให้ปิดที่ดินไว้ และให้ค่าว่าง
                  setDisabledA02_3(true)
                  setA16A_SUB("")
                  setA16B_SUB("")
                  setA16C_SUB("")
                }
                else{
                  setDisabledA02_3(false)
                }

                if(res.data[0]?.A02_4! !== "1"){
                  //ถ้าไม่ได้เลือกทำนาเกลือสมุทร ให้ปิดที่ดินไว้ และให้ค่าว่าง
                  setDisabledA02_4(true)
                  setA17A_SUB("")
                  setA17B_SUB("")
                  setA17C_SUB("")
                }
                else{
                  setDisabledA02_4(false)
                }

              }                            

            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR (getREC01List): ", err);
          });
      } catch (err) {
        console.error("ERROR (getREC01List): ", err);
      }
    }
  }



  /* for sub record  */

  const inputA07A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA07A_SUB(event.target.value);
  };

  const inputA07B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA07B_SUB(event.target.value);
  };

  const inputA07C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA07C_SUB(event.target.value);
  };

  const inputA08A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA08A_SUB(event.target.value);
  };

  const inputA08B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA08B_SUB(event.target.value);
  };

  const inputA08C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA08C_SUB(event.target.value);
  };

  const inputA09A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA09A_SUB(event.target.value);
  };

  const inputA09B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA09B_SUB(event.target.value);
  };

  const inputA09C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA09C_SUB(event.target.value);
  };

  const inputA10A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA10A_SUB(event.target.value);
  };

  const inputA10B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA10B_SUB(event.target.value);
  };

  const inputA10C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA10C_SUB(event.target.value);
  };

  const inputA11A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA11A_SUB(event.target.value);
  };

  const inputA11B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA11B_SUB(event.target.value);
  };

  const inputA11C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA11C_SUB(event.target.value);
  };

  const inputA12A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA12A_SUB(event.target.value);
  };

  const inputA12B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA12B_SUB(event.target.value);
  };

  const inputA12C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA12C_SUB(event.target.value);
  };

  const inputA13A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA13A_SUB(event.target.value);
  };

  const inputA13B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA13B_SUB(event.target.value);
  };

  const inputA13C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA13C_SUB(event.target.value);
  };

  const inputA14A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA14A_SUB(event.target.value);
  };

  const inputA14B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA14B_SUB(event.target.value);
  };

  const inputA14C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA14C_SUB(event.target.value);
  };

  const inputA15A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA15A_SUB(event.target.value);
  };

  const inputA15B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA15B_SUB(event.target.value);
  };

  const inputA15C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA15C_SUB(event.target.value);
  };

  const inputA16A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA16A_SUB(event.target.value);
  };

  const inputA16B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA16B_SUB(event.target.value);
  };

  const inputA16C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA16C_SUB(event.target.value);
  };

  const inputA17A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA17A_SUB(event.target.value);
  };

  const inputA17B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA17B_SUB(event.target.value);
  };

  const inputA17C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA17C_SUB(event.target.value);
  };

  const inputA18A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA18A_SUB(event.target.value);
  };

  const inputA18B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA18B_SUB(event.target.value);
  };

  const inputA18C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA18C_SUB(event.target.value);
  };

  const inputA19A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA19A_SUB(event.target.value);
  };

  const inputA19B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA19B_SUB(event.target.value);
  };

  const inputA19C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA19C_SUB(event.target.value);
  };

  const inputA20A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA20A_SUB(event.target.value);
  };

  const inputA20B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA20B_SUB(event.target.value);
  };

  const inputA20C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA20C_SUB(event.target.value);
  };

  const inputA21A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA21A_SUB(event.target.value);
  };

  const inputA21B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA21B_SUB(event.target.value);
  };

  const inputA21C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA21C_SUB(event.target.value);
  };

  const inputA22A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA22A_SUB(event.target.value);
  };

  const inputA22B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA22B_SUB(event.target.value);
  };

  const inputA22C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA22C_SUB(event.target.value);
  };

  const inputA23A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA23A_SUB(event.target.value);
  };

  const inputA23B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA23B_SUB(event.target.value);
  };

  const inputA23C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA23C_SUB(event.target.value);
  };

  const inputA24A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA24A_SUB(event.target.value);
  };

  const inputA24B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA24B_SUB(event.target.value);
  };

  const inputA24C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA24C_SUB(event.target.value);
  };

  const inputA25A_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA25A_SUB(event.target.value);
  };

  const inputA25B_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA25B_SUB(event.target.value);
  };

  const inputA25C_SUB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA25C_SUB(event.target.value);
  };

  const bindingAMP = async (cwtCode: string) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_service_amp_api: string = "";
        if (process.env.REACT_APP_SERVICE_AMP_API) {
          url_service_amp_api = process.env.REACT_APP_SERVICE_AMP_API + "?cwt=" + cwtCode;
        }

        await axios
          .get(url_service_amp_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              //console.log(res.data);          
              setDdlAmp(res.data);            
            }
          })
          .catch((err) => {
            console.log("AXIOS (AMP) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (AMP): ", err);
      }
    }
  };

  const onChangeDdlAmp =async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setA06AMP_SUB(event.target.value);

    if (event.target.value !== "") {
      let ampOrder: string = event.target.value;
      bindingTAM(ampOrder);
    }
    else{
      setDdlTam([])
    }
  }

  const bindingTAM = async (ampOrder: string) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_service_tam_api: string = "";
        if (process.env.REACT_APP_SERVICE_TAM_API) {
          url_service_tam_api =
            process.env.REACT_APP_SERVICE_TAM_API + "?cwt=" + enumeratesk2?.CWT + "&amp=" + ampOrder + "&pre=ignore";
        }

        await axios
          .get(url_service_tam_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDdlTam(res.data);

            }
          })
          .catch((err) => {
            console.log("AXIOS (TAM) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TAM): ", err);
      }
    }
  };

 /*  const bindingTAM_VIL = async (ampOrder: string , tamOrder:string) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_service_tam_api: string = "";
        if (process.env.REACT_APP_SERVICE_TAM_API) {
          url_service_tam_api =
            process.env.REACT_APP_SERVICE_TAM_API + "?cwt=" + enumeratesk2?.CWT + "&amp=" + ampOrder;
        }

        await axios
          .get(url_service_tam_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              console.log("2. call setDdlTam");
              
              setDdlTam(res.data);

              bindingVIL(tamOrder)

            }
          })
          .catch((err) => {
            console.log("AXIOS (TAM) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TAM): ", err);
      }
    }
  }; */

  const onChangeDdlTam =async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setA06TAM_SUB(event.target.value);

    if (event.target.value !== "") {
      let tamOrder: string = event.target.value;
      bindingVIL(A06AMP_SUB,tamOrder);
    }
    else{
      setDdlVil([])
    }
  }

  const bindingVIL = async (ampOrder:string,tamOrder: string) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_service_vil_api: string = "";
        if (process.env.REACT_APP_SERVICE_VIL_API) {
          url_service_vil_api =
            process.env.REACT_APP_SERVICE_VIL_API + "?cwt=" + enumeratesk2?.CWT + "&amp=" + ampOrder + "&tam=" + tamOrder + "&pre=ignore";
        }

        //console.log(url_service_vil_api);

        await axios
          .get(url_service_vil_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {

              //console.log(res.data);         
              setDdlVil(res.data);

            }
          })
          .catch((err) => {
            console.log("AXIOS (TAM) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TAM): ", err);
      }
    }
  };

  const onChangeDdlVil =async (event: React.ChangeEvent<HTMLSelectElement>) => {
    //setA06VIL_SUB(event.target.value);
    
    //2023-06-06 by pui ปรับเพื่อเก็บชื่อหมู่บ้าน กรณีมีรหัสหมู่บ้านเหมือนกัน แต่ชื่อหมู่บ้านไม่เหมือนกัน
    var index = event.target.selectedIndex;    
    console.log("event.target.value = ",event.target.value, " , # event.target[index].textContent = " , event.target[index].textContent);
    const VILN = event.target[index].textContent?.toString().split("-");
    
    const code = VILN && VILN.length > 1 ? VILN[0] : undefined;
    console.log("code = ",code);
    
    const word = VILN && VILN.length > 1 ? VILN[1] : undefined;
    console.log("word = ",word);
    
    setA06VIL_SUB(code!);
    setA06VILN_SUB(word!);

  }


 /*  const bindingAMP_NEW = async (cwtCode: string, n: number, index: number) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Address/amp/" + cwtCode;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              let _amp: LandAMP[] = [];
              let _tam: LandTAM[] = [];
              let _vil: LandVILL[] = [];
              for (let i: number = 1; i <= n; i++) {
                if (index === i) {
                  _amp.push({
                    id: i,
                    ampCode: "",
                    amp: res.data,
                  });
                  _tam.push({
                    id: i,
                    ampCode: "",
                    tamCode: "",
                    tam: [],
                  });
                  _vil.push({
                    id: i,
                    vilCode: "",
                    vil: [],
                  });

                  setDllAmp(_amp);
                  setDllTam(_tam);
                  setDllVil(_vil);
                } else {
                  _amp.push({
                    id: i,
                    ampCode: "",
                    amp: res.data,
                  });
                  _tam.push({
                    id: i,
                    ampCode: ddlTam[i - 1].ampCode,
                    tamCode: "",
                    tam: ddlTam[i - 1].tam,
                  });
                  _vil.push({
                    id: i,
                    vilCode: "",
                    vil: ddlVil[i - 1].vil,
                  });
                  setDllAmp(_amp);
                  setDllTam(_tam);
                  setDllVil(_vil);
                }
              }
            }
          })
          .catch((err) => {
            console.log("AXIOS (AMP) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (AMP): ", err);
      }
    }
  }; */

  /* const bindingTAM = async (ampCode: string, index: number) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Address/tam/" + ampCode;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDllTam((prevState) => {
                const newState = prevState.map((obj) => {
                  if (obj.id === index) {
                    return { ...obj, ampCode: ampCode, tam: res.data };
                  }

                  return obj;
                });

                return newState;
              });
            }
          })
          .catch((err) => {
            console.log("AXIOS (TAM) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TAM): ", err);
      }
    }
  }; */

 /*  const bindingVIL = async (tamCode: string, index: number) => {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      api.setHeaders([
        {
          key: "Authorization",
          value: "Basic " + auth,
        },
        {
          key: "Content-Type",
          value: "application/json;charset=UTF-8",
        },
      ]);

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Address/vil/" + tamCode;
        }

        await axios
          .get(url_enumerate_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDllVil((prevState) => {
                const newState = prevState.map((obj) => {
                  if (obj.id === index) {
                    return { ...obj, vil: res.data };
                  }

                  return obj;
                });

                return newState;
              });
            }
          })
          .catch((err) => {
            console.log("AXIOS (TAM) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TAM): ", err);
      }
    }
  }; */

  /* const handleRemovELand2 = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    setLand(current =>
      current.filter(l => {
        if(l.id === index){
          l.IsRemove = true;
        }
        return l.id !== index;
      }),
    );

    setLand((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === index) {
          return {
            ...obj,
            IsRemove: true,
          };
        }
        return obj;
      });
      return newState;
    });
  }; */



  /* #region  handle input A05-A17 for main record */

  const inputA06 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA06(event.target.value);
    if(Number(event.target.value) > 0 && Number(event.target.value) <= 99){
      setInvalidA06(false)
    }
    else{
      setInvalidA06(true)
    }


    
  };

  const inputA07A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA07A(event.target.value);
  };

  const inputA07B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA07B(event.target.value);
  };

  const inputA07C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA07C(event.target.value);
  };

  const inputA08A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA08A(event.target.value);
  };

  const inputA08B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA08B(event.target.value);
  };

  const inputA08C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA08C(event.target.value);
  };

  const inputA09A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA09A(event.target.value);
  };

  const inputA09B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA09B(event.target.value);
  };

  const inputA09C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA09C(event.target.value);
  };

  const inputA10A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA10A(event.target.value);
  };

  const inputA10B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA10B(event.target.value);
  };

  const inputA10C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA10C(event.target.value);
  };

  const inputA11A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA11A(event.target.value);
  };

  const inputA11B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA11B(event.target.value);
  };

  const inputA11C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA11C(event.target.value);
  };

  const inputA12A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA12A(event.target.value);
  };

  const inputA12B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA12B(event.target.value);
  };

  const inputA12C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA12C(event.target.value);
  };

  const inputA13A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA13A(event.target.value);
  };

  const inputA13B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA13B(event.target.value);
  };

  const inputA13C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA13C(event.target.value);
  };

  const inputA14A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA14A(event.target.value);
  };

  const inputA14B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA14B(event.target.value);
  };

  const inputA14C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA14C(event.target.value);
  };

  const inputA15A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA15A(event.target.value);
  };

  const inputA15B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA15B(event.target.value);
  };

  const inputA15C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA15C(event.target.value);
  };

  const inputA16A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA16A(event.target.value);
  };

  const inputA16B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA16B(event.target.value);
  };

  const inputA16C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA16C(event.target.value);
  };

  const inputA17A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA17A(event.target.value);
  };

  const inputA17B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA17B(event.target.value);
  };

  const inputA17C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA17C(event.target.value);
  };

  const inputA18A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA18A(event.target.value);
  };

  const inputA18B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA18B(event.target.value);
  };

  const inputA18C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA18C(event.target.value);
  };

  const inputA19A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA19A(event.target.value);
  };

  const inputA19B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA19B(event.target.value);
  };

  const inputA19C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA19C(event.target.value);
  };

  const inputA20A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA20A(event.target.value);
  };

  const inputA20B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA20B(event.target.value);
  };

  const inputA20C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA20C(event.target.value);
  };

  const inputA21A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA21A(event.target.value);
  };

  const inputA21B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA21B(event.target.value);
  };

  const inputA21C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA21C(event.target.value);
  };

  const inputA22A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA22A(event.target.value);
  };

  const inputA22B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA22B(event.target.value);
  };

  const inputA22C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA22C(event.target.value);
  };

  const inputA23A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA23A(event.target.value);
  };

  const inputA23B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA23B(event.target.value);
  };

  const inputA23C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA23C(event.target.value);
  };

  const inputA24A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA24A(event.target.value);
  };

  const inputA24B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA24B(event.target.value);
  };

  const inputA24C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA24C(event.target.value);
  };

  const inputA25A = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA25A(event.target.value);
  };

  const inputA25B = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA25B(event.target.value);
  };

  const inputA25C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA25C(event.target.value);
  };

  /* #endregion */


  //state invalid input
  const [invalidA06, setInvalidA06] = useState<boolean>(false); 
  const [showInvalidA06_Rec01list, setShowInvalidA06_Rec01list] = useState<string>("none"); // ปิด
  const [showInvalidA06_A08_A19_A20_A25, setShowInvalidA06_A08_A19_A20_A25] = useState<string>("none"); // ปิด
  const [showInvalidA06_A08_A19_A20_A25_SUB, setShowInvalidA06_A08_A19_A20_A25_SUB] = useState<string>("none"); // ปิด
  const [showInvalidA07, setShowInvalidA07] = useState<string>("none"); // ปิด
  const [showInvalidA07_equal_A08_A19, setShowInvalidA07_equal_A08_A19] = useState<string>("none"); // ปิด
  const [showInvalidA07_equal_A20_A25, setShowInvalidA07_equal_A20_A25] = useState<string>("none"); // ปิด

  //state invalid input : modal
  const [showInvalid_SUB_A07_equal_A08_A19, setShowInvalid_SUB_A07_equal_A08_A19] = useState<string>("none"); // ปิด
  const [showInvalid_SUB_A07_equal_A20_A25, setShowInvalid_SUB_A07_equal_A20_A25] = useState<string>("none"); // ปิด


  function convert(n: string) {
    n = String(n);
    if (n.length === 1) n = "0" + n;
    return n;
  }

  function convert_padding0(val:string ,digit:number){
    return val.padStart(digit, '0')
  }

  //warning 
  const [showWarningA06, setShowWarningA06,] = useState<string>("none"); // ปิด

  //สร้างผืนที่ดินรายผืน
  async function creatELand2() {

    let numberLand: number = 0;
    numberLand = Number(A06);

    //consistency check
    let isvalid = true;
    
    //console.log("numberLand",numberLand);
    
    //A06 >= 1 && A06 <= 99 && A06 is integer
    if(Number.isInteger(numberLand)){      
      setShowWarningA06("none")

      if(numberLand < 1){
        isvalid = false;
        setShowWarningA06("")
      }
      else{
        setShowWarningA06("none")
      }
  
      if(numberLand > 99){
        isvalid = false;
        setShowWarningA06("")
      }
      else{
        setShowWarningA06("none")
      }

    }
    else{
      isvalid = false;
      setShowWarningA06("")
    }

    //console.log("isvalid",isvalid);

    //ผ่านการ consistency check
    if (isvalid) {

      //มีข้อมูลผืนที่ดินรวม
      if (rec01list.length > 0) {

        if (numberLand <= rec01list.length - 1) {
          //สร้างน้อยกว่าหรือเท่ากับจำนวนเดิม (rec01list ไม่นับเรคอดที่ A06_SUB = 00) -ไม่ต้องทำอะไร

        }
        else {
          //สร้างมากกว่าจำนวนเดิม

          if (rec01list.length - 1 === 0) {
            //กรณียังไม่เคยมีที่ดิน -ให้สร้าง running A06_SUB ตั้งแต่ 01 เป็นต้นไป
            let runningNo: number = Number(rec01list[rec01list.length - 1].A06_SUB);
            for (let i: number = 1; i <= numberLand; i++) {
              runningNo += 1;
              let A06_SUB: string = convert(runningNo.toString());
              rec01list.push({
                AH_CODE: enumeratesk2?.AH_CODE!,
                A01: rec01list[0].A01,
                A02_1: rec01list[0].A02_1,
                A02_2: rec01list[0].A02_2,
                A02_3: rec01list[0].A02_3,
                A02_4: rec01list[0].A02_4,
                A03: rec01list[0].A03,
                A04: rec01list[0].A04,
                A04T: rec01list[0].A04T,
                A05: rec01list[0].A05,
                A05_1: rec01list[0].A05_1,
                A05_2: rec01list[0].A05_2,
                A05_3: rec01list[0].A05_3,
                A05_4: rec01list[0].A05_4,
                A05_5: rec01list[0].A05_5,
                A06: convert_padding0(A06, 2),
                A06_SUB: A06_SUB,
                A06AMP_SUB: "",
                A06TAM_SUB: "",
                A06VIL_SUB: "",
                A07: "",
                A07A: "",
                A07B: "",
                A07C: "",
                A08: "",
                A08A: "",
                A08B: "",
                A08C: "",
                A09: "",
                A09A: "",
                A09B: "",
                A09C: "",
                A10: "",
                A10A: "",
                A10B: "",
                A10C: "",
                A11: "",
                A11A: "",
                A11B: "",
                A11C: "",
                A12: "",
                A12A: "",
                A12B: "",
                A12C: "",
                A13: "",
                A13A: "",
                A13B: "",
                A13C: "",
                A14: "",
                A14A: "",
                A14B: "",
                A14C: "",
                A15: "",
                A15A: "",
                A15B: "",
                A15C: "",
                A16: "",
                A16A: "",
                A16B: "",
                A16C: "",
                A17: "",
                A17A: "",
                A17B: "",
                A17C: "",
                A18: "",
                A18A: "",
                A18B: "",
                A18C: "",
                A19: "",
                A19A: "",
                A19B: "",
                A19C: "",
                A20: "",
                A20A: "",
                A20B: "",
                A20C: "",
                A21: "",
                A21A: "",
                A21B: "",
                A21C: "",
                A22: "",
                A22A: "",
                A22B: "",
                A22C: "",
                A23: "",
                A23A: "",
                A23B: "",
                A23C: "",
                A24: "",
                A24A: "",
                A24B: "",
                A24C: "",
                A25: "",
                A25A: "",
                A25B: "",
                A25C: "",
                A06VILN_SUB: "",
              });
            }

            //บันทึกข้อมูล sub-record  ลงตาราง REC01
            const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
            if (api.authToken) {
              let auth: string = api.authToken;

              const headers = {
                Authorization: "Basic " + auth,
                "Content-Type": "application/json;charset=UTF-8",
              };

              try {
                let url_enumerate_api: string = "";
                if (process.env.REACT_APP_ENUMERATE_API) {
                  url_enumerate_api =
                    process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC01SubRecord";
                }

                let sub_rec01list: REC01Info[] = rec01list.filter((item) => item.A06_SUB !== "00");

                const body = {
                  rec01list: sub_rec01list
                };
                //console.log(JSON.stringify(body));

                await axios
                  .post(url_enumerate_api, JSON.stringify(body), {
                    headers: headers,
                  })
                  .then((res) => {
                    if (res.status === 200) {

                      getREC01("refresh")

                      Swal.fire({
                        icon: "success",
                        title: "สร้างผืนที่ดินสำเร็จ",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  })
                  .catch((err) => {
                    console.error("AXIOS ERROR: ", err);
                  });
              } catch (err) {
                console.error("SaveEnumerate ERROR: ", err);
              }
            }

          }
          else {

            //กรณีมีที่ดินเดิมอยู่ -ให้สร้าง running A06_SUB ต่อจากจำนวนล่าสุด
            let rec01list_extend: REC01Info[] = [];

            let runningNo: number = Number(rec01list[rec01list.length - 1].A06_SUB) + 1;
            for (let i: number = runningNo; i <= numberLand; i++) {
              let A06_SUB: string = convert(i.toString());
              rec01list_extend.push({
                AH_CODE: enumeratesk2?.AH_CODE!,
                A01: rec01list[0].A01,
                A02_1: rec01list[0].A02_1,
                A02_2: rec01list[0].A02_2,
                A02_3: rec01list[0].A02_3,
                A02_4: rec01list[0].A02_4,
                A03: rec01list[0].A03,
                A04: rec01list[0].A04,
                A04T: rec01list[0].A04T,
                A05: rec01list[0].A05,
                A05_1: rec01list[0].A05_1,
                A05_2: rec01list[0].A05_2,
                A05_3: rec01list[0].A05_3,
                A05_4: rec01list[0].A05_4,
                A05_5: rec01list[0].A05_5,
                A06: convert_padding0(A06, 2),
                A06_SUB: A06_SUB,
                A06AMP_SUB: "",
                A06TAM_SUB: "",
                A06VIL_SUB: "",
                A07: "",
                A07A: "",
                A07B: "",
                A07C: "",
                A08: "",
                A08A: "",
                A08B: "",
                A08C: "",
                A09: "",
                A09A: "",
                A09B: "",
                A09C: "",
                A10: "",
                A10A: "",
                A10B: "",
                A10C: "",
                A11: "",
                A11A: "",
                A11B: "",
                A11C: "",
                A12: "",
                A12A: "",
                A12B: "",
                A12C: "",
                A13: "",
                A13A: "",
                A13B: "",
                A13C: "",
                A14: "",
                A14A: "",
                A14B: "",
                A14C: "",
                A15: "",
                A15A: "",
                A15B: "",
                A15C: "",
                A16: "",
                A16A: "",
                A16B: "",
                A16C: "",
                A17: "",
                A17A: "",
                A17B: "",
                A17C: "",
                A18: "",
                A18A: "",
                A18B: "",
                A18C: "",
                A19: "",
                A19A: "",
                A19B: "",
                A19C: "",
                A20: "",
                A20A: "",
                A20B: "",
                A20C: "",
                A21: "",
                A21A: "",
                A21B: "",
                A21C: "",
                A22: "",
                A22A: "",
                A22B: "",
                A22C: "",
                A23: "",
                A23A: "",
                A23B: "",
                A23C: "",
                A24: "",
                A24A: "",
                A24B: "",
                A24C: "",
                A25: "",
                A25A: "",
                A25B: "",
                A25C: "",
                A06VILN_SUB: "",
              });
            }

            //บันทึกข้อมูล sub-record ส่วนที่เพิ่มเติม ลงตาราง REC01
            const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
            if (api.authToken) {
              let auth: string = api.authToken;

              const headers = {
                Authorization: "Basic " + auth,
                "Content-Type": "application/json;charset=UTF-8",
              };

              try {
                let url_enumerate_api: string = "";
                if (process.env.REACT_APP_ENUMERATE_API) {
                  url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/insertREC01SubRecordExtend";
                }

                const body = {
                  rec01list: rec01list_extend
                };
                //console.log(JSON.stringify(body));

                await axios
                  .post(url_enumerate_api, JSON.stringify(body), {
                    headers: headers,
                  })
                  .then((res) => {
                    if (res.status === 200) {

                      getREC01("refresh")

                      Swal.fire({
                        icon: "success",
                        title: "สร้างผืนที่ดินสำเร็จ",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  })
                  .catch((err) => {
                    console.error("AXIOS ERROR: ", err);
                  });
              } catch (err) {
                console.error("creatELand2,insertREC01SubRecordExtend ERROR: ", err);
              }
            }

          }

        }



      }

    }
    else {
      //ไม่ต้องทำอะไร
    }


    

    
   

  }

  //ยืนยันการลบผืนที่ดินรายผืน
  async function ConfirmDeleteLand() {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;
      const headers = {
        Authorization: "Basic " + auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/deleteREC01SubRecord";
        }

        const body = {
          aH_CODE: enumeratesk2?.AH_CODE!,
          a06_SUB: A06_SUB
        };

        //console.log("deleteREC01SubRecord - body ",body);
        

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              if (res.data) {

                getREC01("refresh");
                handleClose()

              }
            }
          })
          .catch((err) => {
            console.error("AXIOS ERROR: ", err);
          });

      } catch (err) {
        console.error("Delete Land ERROR: ", err);
      }

    }
  }

  //ลบผืนที่ดินรายผืน
  async function DeleteLand() {
    setShowConfirmDeleteButton("")
    setShowDeleteButton("none")
  }




  //state warning
  const [showWarningA06_SUB, setShowWarningA06_SUB] = useState<string>("none"); // ปิด

  //บันทึกผืนที่ดินรายผืน
  async function SaveLand() {

    //คำนวณผลรวมของ A07 ถึง A25 เป็นทศนิยม xxxxx.xxxx
    const _A07_SUB = LandCalculator.CalculateSummary(Number(A07A_SUB),Number(A07B_SUB),Number(A07C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A08_SUB = LandCalculator.CalculateSummary(Number(A08A_SUB),Number(A08B_SUB),Number(A08C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A09_SUB = LandCalculator.CalculateSummary(Number(A09A_SUB),Number(A09B_SUB),Number(A09C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A10_SUB = LandCalculator.CalculateSummary(Number(A10A_SUB),Number(A10B_SUB),Number(A10C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A11_SUB = LandCalculator.CalculateSummary(Number(A11A_SUB),Number(A11B_SUB),Number(A11C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A12_SUB = LandCalculator.CalculateSummary(Number(A12A_SUB),Number(A12B_SUB),Number(A12C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A13_SUB = LandCalculator.CalculateSummary(Number(A13A_SUB),Number(A13B_SUB),Number(A13C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A14_SUB = LandCalculator.CalculateSummary(Number(A14A_SUB),Number(A14B_SUB),Number(A14C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A15_SUB = LandCalculator.CalculateSummary(Number(A15A_SUB),Number(A15B_SUB),Number(A15C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A16_SUB = LandCalculator.CalculateSummary(Number(A16A_SUB),Number(A16B_SUB),Number(A16C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A17_SUB = LandCalculator.CalculateSummary(Number(A17A_SUB),Number(A17B_SUB),Number(A17C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A18_SUB = LandCalculator.CalculateSummary(Number(A18A_SUB),Number(A18B_SUB),Number(A18C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A19_SUB = LandCalculator.CalculateSummary(Number(A19A_SUB),Number(A19B_SUB),Number(A19C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A20_SUB = LandCalculator.CalculateSummary(Number(A20A_SUB),Number(A20B_SUB),Number(A20C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A21_SUB = LandCalculator.CalculateSummary(Number(A21A_SUB),Number(A21B_SUB),Number(A21C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A22_SUB = LandCalculator.CalculateSummary(Number(A22A_SUB),Number(A22B_SUB),Number(A22C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A23_SUB = LandCalculator.CalculateSummary(Number(A23A_SUB),Number(A23B_SUB),Number(A23C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A24_SUB = LandCalculator.CalculateSummary(Number(A24A_SUB),Number(A24B_SUB),Number(A24C_SUB)).toFixed(4).toString().padStart(10,'0')
    const _A25_SUB = LandCalculator.CalculateSummary(Number(A25A_SUB),Number(A25B_SUB),Number(A25C_SUB)).toFixed(4).toString().padStart(10,'0')

    //================================================================================================================
    //consistency check
    let isvalid = true;

    //ผลรวมของเนื้อที่ทุกผืนของทุกรายการ (A08_SUB ถึง A25_SUB) ต้อง = เนื้อที่รวมของรายการนั้นๆ (A07_SUB)
    //น่าจะเป็นผลรวมของเนื้อที่ทุกผืนของทุกรายการ (A08_SUB ถึง A19_SUB) ต้อง = เนื้อที่รวมของรายการนั้นๆ (A07_SUB)
    let summationA07SUB : number = Number(_A07_SUB);
    let summationA08SUBtoA19SUB : number = Number(_A08_SUB) + Number(_A09_SUB) + Number(_A10_SUB) + Number(_A11_SUB) + Number(_A12_SUB) + Number(_A13_SUB) + Number(_A14_SUB) + Number(_A15_SUB) + Number(_A16_SUB) + Number(_A17_SUB) + Number(_A18_SUB) + Number(_A19_SUB);    
    if(Number(summationA07SUB.toFixed(4)) !== Number(summationA08SUBtoA19SUB.toFixed(4)) ){
      setShowInvalid_SUB_A07_equal_A08_A19("") //เปิด
      isvalid = false;
    }
    else{
      setShowInvalid_SUB_A07_equal_A08_A19("none") //ปิด
    }

    //น่าจะเป็นผลรวมของเนื้อที่ทุกผืนของทุกรายการ (A20_SUB ถึง A25_SUB) ต้อง = เนื้อที่รวมของรายการนั้นๆ (A07_SUB)
    let summationA20SUBtoA25SUB : number = Number(_A20_SUB) + Number(_A21_SUB) + Number(_A22_SUB) + Number(_A23_SUB) + Number(_A24_SUB) + Number(_A25_SUB);
    if(Number(summationA07SUB.toFixed(4)) !== Number(summationA20SUBtoA25SUB.toFixed(4)) ){
      setShowInvalid_SUB_A07_equal_A20_A25("") //เปิด
      isvalid = false;
    }
    else{
      setShowInvalid_SUB_A07_equal_A20_A25("none") //ปิด
    }

    //ต้องระบุ ที่ตั้งผืนที่ดิน ด้วย
    if(A06AMP_SUB === ""){
      isvalid = false;
      setShowWarningA06_SUB("")
    }
    else{
      setShowWarningA06_SUB("none")
    }
    if(A06TAM_SUB === ""){
      isvalid = false;
      setShowWarningA06_SUB("")
    }
    else{
      setShowWarningA06_SUB("none")
    }
    if(A06VIL_SUB === ""){
      isvalid = false;
      setShowWarningA06_SUB("")
    }
    else{
      setShowWarningA06_SUB("none")
    }

    //check ตัวเลข ไร่ งาน ตารางวา ต้องเป็น integer
    if(Number.isInteger(Number(A07A_SUB)) && Number.isInteger(Number(A07B_SUB)) && Number.isInteger(Number(A07C_SUB))
      && Number.isInteger(Number(A08A_SUB)) && Number.isInteger(Number(A08B_SUB)) && Number.isInteger(Number(A08C_SUB))
      && Number.isInteger(Number(A09A_SUB)) && Number.isInteger(Number(A09B_SUB)) && Number.isInteger(Number(A09C_SUB))
      && Number.isInteger(Number(A10A_SUB)) && Number.isInteger(Number(A10B_SUB)) && Number.isInteger(Number(A10C_SUB))
      && Number.isInteger(Number(A11A_SUB)) && Number.isInteger(Number(A11B_SUB)) && Number.isInteger(Number(A11C_SUB))
      && Number.isInteger(Number(A12A_SUB)) && Number.isInteger(Number(A12B_SUB)) && Number.isInteger(Number(A12C_SUB))
      && Number.isInteger(Number(A13A_SUB)) && Number.isInteger(Number(A13B_SUB)) && Number.isInteger(Number(A13C_SUB))
      && Number.isInteger(Number(A14A_SUB)) && Number.isInteger(Number(A14B_SUB)) && Number.isInteger(Number(A14C_SUB))
      && Number.isInteger(Number(A15A_SUB)) && Number.isInteger(Number(A15B_SUB)) && Number.isInteger(Number(A15C_SUB))
      && Number.isInteger(Number(A16A_SUB)) && Number.isInteger(Number(A16B_SUB)) && Number.isInteger(Number(A16C_SUB))
      && Number.isInteger(Number(A17A_SUB)) && Number.isInteger(Number(A17B_SUB)) && Number.isInteger(Number(A17C_SUB))
      && Number.isInteger(Number(A18A_SUB)) && Number.isInteger(Number(A18B_SUB)) && Number.isInteger(Number(A18C_SUB))
      && Number.isInteger(Number(A19A_SUB)) && Number.isInteger(Number(A19B_SUB)) && Number.isInteger(Number(A19C_SUB))
      && Number.isInteger(Number(A20A_SUB)) && Number.isInteger(Number(A20B_SUB)) && Number.isInteger(Number(A20C_SUB))
      && Number.isInteger(Number(A21A_SUB)) && Number.isInteger(Number(A21B_SUB)) && Number.isInteger(Number(A21C_SUB))
      && Number.isInteger(Number(A22A_SUB)) && Number.isInteger(Number(A22B_SUB)) && Number.isInteger(Number(A22C_SUB))
      && Number.isInteger(Number(A23A_SUB)) && Number.isInteger(Number(A23B_SUB)) && Number.isInteger(Number(A23C_SUB))
      && Number.isInteger(Number(A24A_SUB)) && Number.isInteger(Number(A24B_SUB)) && Number.isInteger(Number(A24C_SUB))
      && Number.isInteger(Number(A25A_SUB)) && Number.isInteger(Number(A25B_SUB)) && Number.isInteger(Number(A25C_SUB))
    ){
      //
      
    }
    else{
      isvalid = false;
      
    }

    //console.log("isvalid",isvalid);
    

    //================================================================================================================
    //ผ่านการ consistency check
    if (isvalid) {

      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;
        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api =
              process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC01SubRecord";
          }

          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            a06_SUB: A06_SUB,
            a06AMP_SUB: A06AMP_SUB,
            a06TAM_SUB: A06TAM_SUB,
            a06VIL_SUB: A06VIL_SUB,
            a07: _A07_SUB,
            a07A: A07A_SUB !== "" ? A07A_SUB.padStart(5, '0') : "",
            a07B: A07B_SUB !== "" ? A07B_SUB.padStart(1, '0') : "",
            a07C: A07C_SUB !== "" ? A07C_SUB.padStart(2, '0') : "",
            a08: _A08_SUB,
            a08A: A08A_SUB !== "" ? A08A_SUB.padStart(5, '0') : "",
            a08B: A08B_SUB !== "" ? A08B_SUB.padStart(1, '0') : "",
            a08C: A08C_SUB !== "" ? A08C_SUB.padStart(2, '0') : "",
            a09: _A09_SUB,
            a09A: A09A_SUB !== "" ? A09A_SUB.padStart(5, '0') : "",
            a09B: A09B_SUB !== "" ? A09B_SUB.padStart(1, '0') : "",
            a09C: A09C_SUB !== "" ? A09C_SUB.padStart(2, '0') : "",
            a10: _A10_SUB,
            a10A: A10A_SUB !== "" ? A10A_SUB.padStart(5, '0') : "",
            a10B: A10B_SUB !== "" ? A10B_SUB.padStart(1, '0') : "",
            a10C: A10C_SUB !== "" ? A10C_SUB.padStart(2, '0') : "",
            a11: _A11_SUB,
            a11A: A11A_SUB !== "" ? A11A_SUB.padStart(5, '0') : "",
            a11B: A11B_SUB !== "" ? A11B_SUB.padStart(1, '0') : "",
            a11C: A11C_SUB !== "" ? A11C_SUB.padStart(2, '0') : "",
            a12: _A12_SUB,
            a12A: A12A_SUB !== "" ? A12A_SUB.padStart(5, '0') : "",
            a12B: A12B_SUB !== "" ? A12B_SUB.padStart(1, '0') : "",
            a12C: A12C_SUB !== "" ? A12C_SUB.padStart(2, '0') : "",
            a13: _A13_SUB,
            a13A: A13A_SUB !== "" ? A13A_SUB.padStart(5, '0') : "",
            a13B: A13B_SUB !== "" ? A13B_SUB.padStart(1, '0') : "",
            a13C: A13C_SUB !== "" ? A13C_SUB.padStart(2, '0') : "",
            a14: _A14_SUB,
            a14A: A14A_SUB !== "" ? A14A_SUB.padStart(5, '0') : "",
            a14B: A14B_SUB !== "" ? A14B_SUB.padStart(1, '0') : "",
            a14C: A14C_SUB !== "" ? A14C_SUB.padStart(2, '0') : "",
            a15: _A15_SUB,
            a15A: A15A_SUB !== "" ? A15A_SUB.padStart(5, '0') : "",
            a15B: A15B_SUB !== "" ? A15B_SUB.padStart(1, '0') : "",
            a15C: A15C_SUB !== "" ? A15C_SUB.padStart(2, '0') : "",
            a16: _A16_SUB,
            a16A: A16A_SUB !== "" ? A16A_SUB.padStart(5, '0') : "",
            a16B: A16B_SUB !== "" ? A16B_SUB.padStart(1, '0') : "",
            a16C: A16C_SUB !== "" ? A16C_SUB.padStart(2, '0') : "",
            a17: _A17_SUB,
            a17A: A17A_SUB !== "" ? A17A_SUB.padStart(5, '0') : "",
            a17B: A17B_SUB !== "" ? A17B_SUB.padStart(1, '0') : "",
            a17C: A17C_SUB !== "" ? A17C_SUB.padStart(2, '0') : "",
            a18: _A18_SUB,
            a18A: A18A_SUB !== "" ? A18A_SUB.padStart(5, '0') : "",
            a18B: A18B_SUB !== "" ? A18B_SUB.padStart(1, '0') : "",
            a18C: A18C_SUB !== "" ? A18C_SUB.padStart(2, '0') : "",
            a19: _A19_SUB,
            a19A: A19A_SUB !== "" ? A19A_SUB.padStart(5, '0') : "",
            a19B: A19B_SUB !== "" ? A19B_SUB.padStart(1, '0') : "",
            a19C: A19C_SUB !== "" ? A19C_SUB.padStart(2, '0') : "",
            a20: _A20_SUB,
            a20A: A20A_SUB !== "" ? A20A_SUB.padStart(5, '0') : "",
            a20B: A20B_SUB !== "" ? A20B_SUB.padStart(1, '0') : "",
            a20C: A20C_SUB !== "" ? A20C_SUB.padStart(2, '0') : "",
            a21: _A21_SUB,
            a21A: A21A_SUB !== "" ? A21A_SUB.padStart(5, '0') : "",
            a21B: A21B_SUB !== "" ? A21B_SUB.padStart(1, '0') : "",
            a21C: A21C_SUB !== "" ? A21C_SUB.padStart(2, '0') : "",
            a22: _A22_SUB,
            a22A: A22A_SUB !== "" ? A22A_SUB.padStart(5, '0') : "",
            a22B: A22B_SUB !== "" ? A22B_SUB.padStart(1, '0') : "",
            a22C: A22C_SUB !== "" ? A22C_SUB.padStart(2, '0') : "",
            a23: _A23_SUB,
            a23A: A23A_SUB !== "" ? A23A_SUB.padStart(5, '0') : "",
            a23B: A23B_SUB !== "" ? A23B_SUB.padStart(1, '0') : "",
            a23C: A23C_SUB !== "" ? A23C_SUB.padStart(2, '0') : "",
            a24: _A24_SUB,
            a24A: A24A_SUB !== "" ? A24A_SUB.padStart(5, '0') : "",
            a24B: A24B_SUB !== "" ? A24B_SUB.padStart(1, '0') : "",
            a24C: A24C_SUB !== "" ? A24C_SUB.padStart(2, '0') : "",
            a25: _A25_SUB,
            a25A: A25A_SUB !== "" ? A25A_SUB.padStart(5, '0') : "",
            a25B: A25B_SUB !== "" ? A25B_SUB.padStart(1, '0') : "",
            a25C: A25C_SUB !== "" ? A25C_SUB.padStart(2, '0') : "",

            a06VILN_SUB: A06VILN_SUB,
          };
          //console.log(body);

          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  getREC01("refresh");
                  handleClose()

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
            });


        } catch (err) {
          console.error("SaveLand Modal ERROR: ", err);
        }

      }

    }
    else{
      //consistency check ไม่ผ่าน

    }



    
  }

  //กด ถัดไป เพื่อ บันทึกข้อมูล ของตอนที่ 2 เนื้อที่ถือครองทำการเกษตร
  async function SaveEnumerate() {

    console.log("SaveEnumerate()")

    //consistency check
    let isvalid = true;

    if(Number(A06) <= 0 ){
      //A06 ต้อง > 0
      setInvalidA06(true)
      isvalid = false;
    }
    else{
      setInvalidA06(false)
    }

    if(Number(A06) !== rec01list.length-1 ){
      //A06 ต้อง = ลำดับที่ของผืนสุดท้าย
      setShowInvalidA06_Rec01list("") //เปิด
      isvalid = false;
    }
    else{
      setShowInvalidA06_Rec01list("none")
    }

    if(Number(A06) > 0 ){
      //ถ้า A06 > 0 แล้ว A08 - A19 และ A20 - A25 อย่างน้อย 1 รายการ ≠ blank
      let isvalid_A06 = false;
      if(A08A !== "" && Number(A08A) > 0){isvalid_A06 = true;}
      if(A08B !== "" && Number(A08B) > 0){isvalid_A06 = true;}
      if(A08C !== "" && Number(A08C) > 0){isvalid_A06 = true;}
      if(A09A !== "" && Number(A09A) > 0){isvalid_A06 = true;}
      if(A09B !== "" && Number(A09B) > 0){isvalid_A06 = true;}
      if(A09C !== "" && Number(A09C) > 0){isvalid_A06 = true;}
      if(A10A !== "" && Number(A10A) > 0){isvalid_A06 = true;}
      if(A10B !== "" && Number(A10B) > 0){isvalid_A06 = true;}
      if(A10C !== "" && Number(A10C) > 0){isvalid_A06 = true;}
      if(A11A !== "" && Number(A11A) > 0){isvalid_A06 = true;}
      if(A11B !== "" && Number(A11B) > 0){isvalid_A06 = true;}
      if(A11C !== "" && Number(A11C) > 0){isvalid_A06 = true;}
      if(A12A !== "" && Number(A12A) > 0){isvalid_A06 = true;}
      if(A12B !== "" && Number(A12B) > 0){isvalid_A06 = true;}
      if(A12C !== "" && Number(A12C) > 0){isvalid_A06 = true;}
      if(A13A !== "" && Number(A13A) > 0){isvalid_A06 = true;}
      if(A13B !== "" && Number(A13B) > 0){isvalid_A06 = true;}
      if(A13C !== "" && Number(A13C) > 0){isvalid_A06 = true;}
      if(A14A !== "" && Number(A14A) > 0){isvalid_A06 = true;}
      if(A14B !== "" && Number(A14B) > 0){isvalid_A06 = true;}
      if(A14C !== "" && Number(A14C) > 0){isvalid_A06 = true;}
      if(A15A !== "" && Number(A15A) > 0){isvalid_A06 = true;}
      if(A15B !== "" && Number(A15B) > 0){isvalid_A06 = true;}
      if(A15C !== "" && Number(A15C) > 0){isvalid_A06 = true;}
      if(A16A !== "" && Number(A16A) > 0){isvalid_A06 = true;}
      if(A16B !== "" && Number(A16B) > 0){isvalid_A06 = true;}
      if(A16C !== "" && Number(A16C) > 0){isvalid_A06 = true;}
      if(A17A !== "" && Number(A17A) > 0){isvalid_A06 = true;}
      if(A17B !== "" && Number(A17B) > 0){isvalid_A06 = true;}
      if(A17C !== "" && Number(A17C) > 0){isvalid_A06 = true;}
      if(A18A !== "" && Number(A18A) > 0){isvalid_A06 = true;}
      if(A18B !== "" && Number(A18B) > 0){isvalid_A06 = true;}
      if(A18C !== "" && Number(A18C) > 0){isvalid_A06 = true;}
      if(A19A !== "" && Number(A19A) > 0){isvalid_A06 = true;}
      if(A19B !== "" && Number(A19B) > 0){isvalid_A06 = true;}
      if(A19C !== "" && Number(A19C) > 0){isvalid_A06 = true;}

      if(isvalid_A06 === false){
        setShowInvalidA06_A08_A19_A20_A25("") //เปิด
        isvalid = false;
      }
      else{
        setShowInvalidA06_A08_A19_A20_A25("none")
      }

      //ต้องเช็ค sub record ด้วย --------------
      let isvalid_A06_SUB = false;
      let isvalid_A06_SUB_checked = false;
      rec01list.map((item, index) => {
        if(item.A06_SUB !== "00"){

          if(item.A08A !== "" && Number(item.A08A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A08B !== "" && Number(item.A08B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A08C !== "" && Number(item.A08C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A09A !== "" && Number(item.A09A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A09B !== "" && Number(item.A09B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A09C !== "" && Number(item.A09C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A10A !== "" && Number(item.A10A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A10B !== "" && Number(item.A10B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A10C !== "" && Number(item.A10C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A11A !== "" && Number(item.A11A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A11B !== "" && Number(item.A11B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A11C !== "" && Number(item.A11C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A12A !== "" && Number(item.A12A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A12B !== "" && Number(item.A12B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A12C !== "" && Number(item.A12C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A13A !== "" && Number(item.A13A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A13B !== "" && Number(item.A13B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A13C !== "" && Number(item.A13C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A14A !== "" && Number(item.A14A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A14B !== "" && Number(item.A14B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A14C !== "" && Number(item.A14C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A15A !== "" && Number(item.A15A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A15B !== "" && Number(item.A15B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A15C !== "" && Number(item.A15C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A16A !== "" && Number(item.A16A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A16B !== "" && Number(item.A16B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A16C !== "" && Number(item.A16C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A17A !== "" && Number(item.A17A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A17B !== "" && Number(item.A17B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A17C !== "" && Number(item.A17C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A18A !== "" && Number(item.A18A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A18B !== "" && Number(item.A18B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A18C !== "" && Number(item.A18C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A19A !== "" && Number(item.A19A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A19B !== "" && Number(item.A19B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A19C !== "" && Number(item.A19C) > 0){isvalid_A06_SUB_checked = true;}

          if(isvalid_A06_SUB_checked === true){
            isvalid_A06_SUB = true
          }
          else{
            isvalid_A06_SUB = false
          }
          //clear isvalid_A06_SUB_checked
          isvalid_A06_SUB_checked = false

        }
        
      })

      if(isvalid_A06_SUB === false){
        setShowInvalidA06_A08_A19_A20_A25_SUB("") //เปิด
        isvalid = false;
      }else{
        setShowInvalidA06_A08_A19_A20_A25_SUB("none")
      }
      //-------------------------------------


    }
    
    if(Number(A06) > 0 ){
      //ถ้า A06 > 0 แล้ว A08 - A19 และ A20 - A25 อย่างน้อย 1 รายการ ≠ blank
      let isvalid_A06 = false;
      if(A20A !== "" && Number(A20A) > 0){isvalid_A06 = true;}
      if(A20B !== "" && Number(A20B) > 0){isvalid_A06 = true;}
      if(A20C !== "" && Number(A20C) > 0){isvalid_A06 = true;}
      if(A21A !== "" && Number(A21A) > 0){isvalid_A06 = true;}
      if(A21B !== "" && Number(A21B) > 0){isvalid_A06 = true;}
      if(A21C !== "" && Number(A21C) > 0){isvalid_A06 = true;}
      if(A22A !== "" && Number(A22A) > 0){isvalid_A06 = true;}
      if(A22B !== "" && Number(A22B) > 0){isvalid_A06 = true;}
      if(A22C !== "" && Number(A22C) > 0){isvalid_A06 = true;}
      if(A23A !== "" && Number(A23A) > 0){isvalid_A06 = true;}
      if(A23B !== "" && Number(A23B) > 0){isvalid_A06 = true;}
      if(A23C !== "" && Number(A23C) > 0){isvalid_A06 = true;}
      if(A24A !== "" && Number(A24A) > 0){isvalid_A06 = true;}
      if(A24B !== "" && Number(A24B) > 0){isvalid_A06 = true;}
      if(A24C !== "" && Number(A24C) > 0){isvalid_A06 = true;}
      if(A25A !== "" && Number(A25A) > 0){isvalid_A06 = true;}
      if(A25B !== "" && Number(A25B) > 0){isvalid_A06 = true;}
      if(A25C !== "" && Number(A25C) > 0){isvalid_A06 = true;}

      if(isvalid_A06 === false){
        setShowInvalidA06_A08_A19_A20_A25("") //เปิด
        isvalid = false;
      }
      else{
        setShowInvalidA06_A08_A19_A20_A25("none")
      }

      //ต้องเช็ค sub record ด้วย --------------
      let isvalid_A06_SUB = false;
      let isvalid_A06_SUB_checked = false;
      rec01list.map((item, index) => {
        if(item.A06_SUB !== "00"){

          if(item.A20A !== "" && Number(item.A20A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A20B !== "" && Number(item.A20B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A20C !== "" && Number(item.A20C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A21A !== "" && Number(item.A21A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A21B !== "" && Number(item.A21B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A21C !== "" && Number(item.A21C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A22A !== "" && Number(item.A22A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A22B !== "" && Number(item.A22B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A22C !== "" && Number(item.A22C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A23A !== "" && Number(item.A23A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A23B !== "" && Number(item.A23B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A23C !== "" && Number(item.A23C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A24A !== "" && Number(item.A24A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A24B !== "" && Number(item.A24B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A24C !== "" && Number(item.A24C) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A25A !== "" && Number(item.A25A) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A25B !== "" && Number(item.A25B) > 0){isvalid_A06_SUB_checked = true;}
          if(item.A25C !== "" && Number(item.A25C) > 0){isvalid_A06_SUB_checked = true;}

          if(isvalid_A06_SUB_checked === true){
            isvalid_A06_SUB = true
          }
          else{
            isvalid_A06_SUB = false
          }
          //clear isvalid_A06_SUB_checked
          isvalid_A06_SUB_checked = false

        }
        
      })

      if(isvalid_A06_SUB === false){
        setShowInvalidA06_A08_A19_A20_A25_SUB("") //เปิด
        isvalid = false;
      }else{
        setShowInvalidA06_A08_A19_A20_A25_SUB("none")
      }
      //-------------------------------------


    }

    //A07 ต้อง > 0
    let isvalid_A07 = false;
    if (A07A !== "" && Number(A07A) > 0) { isvalid_A07 = true; }
    if (A07B !== "" && Number(A07B) > 0) { isvalid_A07 = true; }
    if (A07C !== "" && Number(A07C) > 0) { isvalid_A07 = true; }
    if (isvalid_A07 === false) {
      setShowInvalidA07("") //เปิด
      isvalid = false;
    }
    else{
      setShowInvalidA07("none") //ปิด
    }

    console.log("SummationA07() = ",SummationA07().toFixed(4));
    console.log("SummationA08toA19() = ",SummationA08toA19().toFixed(4));
    console.log("SummationA20toA25() = ",SummationA20toA25().toFixed(4));

    //A07 = (A08 + A09 + A10 + … + A19)
    if(Number(SummationA07().toFixed(4)) !== Number(SummationA08toA19().toFixed(4)) ){
      setShowInvalidA07_equal_A08_A19("") //เปิด      
      
      isvalid = false;
    }
    else{
      setShowInvalidA07_equal_A08_A19("none") //ปิด
    }

    //A07 = (A20 + A21 + A22 + … + A25)
    if(Number(SummationA07().toFixed(4)) !== Number(SummationA20toA25().toFixed(4)) ){
      setShowInvalidA07_equal_A20_A25("") //เปิด
      isvalid = false;
    }
    else{
      setShowInvalidA07_equal_A20_A25("none") //ปิด
    }


    //ผ่านการ consistency check
    if (isvalid) {
      const _A07 = LandCalculator.CalculateSummary(Number(A07A), Number(A07B), Number(A07C)).toFixed(4).toString().padStart(10, '0')

      const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        //header api
        const headers = {
          Authorization: "Basic " + auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        try {

          // url updateREC01MainRecord
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api = process.env.REACT_APP_ENUMERATE_API + "/Enumerate2/updateREC01MainRecord";
          }

          // body updateREC01MainRecord
          const body = {
            aH_CODE: enumeratesk2?.AH_CODE!,
            a07: _A07,
            a07A: A07A.padStart(5, '0'),
            a07B: A07B.padStart(1, '0'),
            a07C: A07C.padStart(2, '0')
          };

          // api updateREC01MainRecord
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                if (res.data) {

                  //ยังไม่ต้องทำอะไร

                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
            });

          //==========================================================================================
          // consistency check สำหรับตอนถัดไป

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
                if (rec01list[0].A02_1 === "1"){
                  setPage(3); //ไปตอนที่ 3 การปลูกพืช
                }
                else if(rec01list[0].A02_2 === "1"){
                  setPage(13); //ไปตอนที่ 4 การเลี้ยงสัตว์
                }
                else if(rec01list[0].A02_3 === "1"){
                  setPage(15); //ไปตอนที่ 5 การเลี้ยงสัตว์น้ำ
                }
                else if(rec01list[0].A02_4 === "1"){
                  setPage(17); //ไปตอนที่ 6 การทำนาเกลือ
                }
                else{
                  setPage(18); //ไปตอนที่ 7 เครื่องจักร
                }
                                

              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (SaveEnumerate.getREC01List in ELand2): ", err);
            });
            
            //==========================================================================================


        } catch (err) {
          console.error("SaveEnumerate ERROR: ", err);
        }
      }
      
    }
    else {
      //consistency check ไม่ผ่าน
    }

    
  }


  function SummationA07(){
    const _A07 = LandCalculator.CalculateSummary(Number(A07A),Number(A07B),Number(A07C))
    return _A07;
  }

  function SummationA08toA19(){    
    const _A08 = LandCalculator.CalculateSummary(Number(A08A),Number(A08B),Number(A08C))
    const _A09 = LandCalculator.CalculateSummary(Number(A09A),Number(A09B),Number(A09C))
    const _A10 = LandCalculator.CalculateSummary(Number(A10A),Number(A10B),Number(A10C))
    const _A11 = LandCalculator.CalculateSummary(Number(A11A),Number(A11B),Number(A11C))
    const _A12 = LandCalculator.CalculateSummary(Number(A12A),Number(A12B),Number(A12C))
    const _A13 = LandCalculator.CalculateSummary(Number(A13A),Number(A13B),Number(A13C))
    const _A14 = LandCalculator.CalculateSummary(Number(A14A),Number(A14B),Number(A14C))
    const _A15 = LandCalculator.CalculateSummary(Number(A15A),Number(A15B),Number(A15C))
    const _A16 = LandCalculator.CalculateSummary(Number(A16A),Number(A16B),Number(A16C))
    const _A17 = LandCalculator.CalculateSummary(Number(A17A),Number(A17B),Number(A17C))
    const _A18 = LandCalculator.CalculateSummary(Number(A18A),Number(A18B),Number(A18C))
    const _A19 = LandCalculator.CalculateSummary(Number(A19A),Number(A19B),Number(A19C))

    let sum : number = _A08 + _A09 + _A10 + _A11 + _A12 + _A13 + _A14 + _A15 + _A16 + _A17 + _A18 + _A19;
    return sum;
  }

  function SummationA20toA25(){    
    const _A20 = LandCalculator.CalculateSummary(Number(A20A),Number(A20B),Number(A20C))
    const _A21 = LandCalculator.CalculateSummary(Number(A21A),Number(A21B),Number(A21C))
    const _A22 = LandCalculator.CalculateSummary(Number(A22A),Number(A22B),Number(A22C))
    const _A23 = LandCalculator.CalculateSummary(Number(A23A),Number(A23B),Number(A23C))
    const _A24 = LandCalculator.CalculateSummary(Number(A24A),Number(A24B),Number(A24C))
    const _A25 = LandCalculator.CalculateSummary(Number(A25A),Number(A25B),Number(A25C))

    let sum : number = _A20 + _A21 + _A22 + _A23 + _A24 + _A25
    return sum;
  }


  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("รายผืน ");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //เปิด modal ผืนที่ดินมาแก้ไขข้อมูล
  const OpenModalLand = (ah_code:string,a06_sub:string) => {
    //get sub record
    async function getREC01SubRecord() {
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
              "/Enumerate2/getREC01SubRecord/" + enumeratesk2?.AH_CODE + "/" + a06_sub;
          }

          await axios
            .get(url_enumerate_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {

                let rec01sub : REC01Info = JSON.parse(JSON.stringify(res.data[0]), (key, value) =>value === null ? "" : value)

                //set state : sub record
                //console.log("rec01sub",rec01sub);
                
                bindingTAM(rec01sub.A06AMP_SUB)
                bindingVIL(rec01sub.A06AMP_SUB,rec01sub.A06TAM_SUB)

                setA06_SUB(a06_sub)
                setA06AMP_SUB(rec01sub.A06AMP_SUB)
                setA06TAM_SUB(rec01sub.A06TAM_SUB)
                setA06VIL_SUB(rec01sub.A06VIL_SUB)
                setA07_SUB(rec01sub.A07)
                setA07A_SUB(rec01sub.A07A === "" ? "" : parseInt(rec01sub.A07A).toString())
                setA07B_SUB(rec01sub.A07B=== "" ? "" : parseInt(rec01sub.A07B).toString())
                setA07C_SUB(rec01sub.A07C === "" ? "" : parseInt(rec01sub.A07C).toString())
                setA08_SUB(rec01sub.A08)
                setA08A_SUB(rec01sub.A08A === "" ? "" : parseInt(rec01sub.A08A).toString())
                setA08B_SUB(rec01sub.A08B=== "" ? "" : parseInt(rec01sub.A08B).toString())
                setA08C_SUB(rec01sub.A08C === "" ? "" : parseInt(rec01sub.A08C).toString())
                setA09_SUB(rec01sub.A09)
                setA09A_SUB(rec01sub.A09A === "" ? "" : parseInt(rec01sub.A09A).toString())
                setA09B_SUB(rec01sub.A09B === "" ? "" : parseInt(rec01sub.A09B).toString())
                setA09C_SUB(rec01sub.A09C === "" ? "" : parseInt(rec01sub.A09C).toString())
                setA10_SUB(rec01sub.A10)
                setA10A_SUB(rec01sub.A10A === "" ? "" : parseInt(rec01sub.A10A).toString())
                setA10B_SUB(rec01sub.A10B === "" ? "" : parseInt(rec01sub.A10B).toString())
                setA10C_SUB(rec01sub.A10C === "" ? "" : parseInt(rec01sub.A10C).toString())
                setA11_SUB(rec01sub.A11)
                setA11A_SUB(rec01sub.A11A === "" ? "" : parseInt(rec01sub.A11A).toString())
                setA11B_SUB(rec01sub.A11B === "" ? "" : parseInt(rec01sub.A11B).toString())
                setA11C_SUB(rec01sub.A11C === "" ? "" : parseInt(rec01sub.A11C).toString())
                setA12_SUB(rec01sub.A12)
                setA12A_SUB(rec01sub.A12A === "" ? "" : parseInt(rec01sub.A12A).toString())
                setA12B_SUB(rec01sub.A12B === "" ? "" : parseInt(rec01sub.A12B).toString())
                setA12C_SUB(rec01sub.A12C === "" ? "" : parseInt(rec01sub.A12C).toString())
                setA13_SUB(rec01sub.A13)
                setA13A_SUB(rec01sub.A13A === "" ? "" : parseInt(rec01sub.A13A).toString())
                setA13B_SUB(rec01sub.A13B=== "" ? "" : parseInt(rec01sub.A13B).toString())
                setA13C_SUB(rec01sub.A13C === "" ? "" : parseInt(rec01sub.A13C).toString())
                setA14_SUB(rec01sub.A14)
                setA14A_SUB(rec01sub.A14A === "" ? "" : parseInt(rec01sub.A14A).toString())
                setA14B_SUB(rec01sub.A14B === "" ? "" : parseInt(rec01sub.A14B).toString())
                setA14C_SUB(rec01sub.A14C === "" ? "" : parseInt(rec01sub.A14C).toString())
                setA15_SUB(rec01sub.A15)
                setA15A_SUB(rec01sub.A15A === "" ? "" : parseInt(rec01sub.A15A).toString())
                setA15B_SUB(rec01sub.A15B === "" ? "" : parseInt(rec01sub.A15B).toString())
                setA15C_SUB(rec01sub.A15C === "" ? "" : parseInt(rec01sub.A15C).toString())
                setA16_SUB(rec01sub.A16)
                setA16A_SUB(rec01sub.A16A === "" ? "" : parseInt(rec01sub.A16A).toString())
                setA16B_SUB(rec01sub.A16B === "" ? "" : parseInt(rec01sub.A16B).toString())
                setA16C_SUB(rec01sub.A16C === "" ? "" : parseInt(rec01sub.A16C).toString())
                setA17_SUB(rec01sub.A17)
                setA17A_SUB(rec01sub.A17A === "" ? "" : parseInt(rec01sub.A17A).toString())
                setA17B_SUB(rec01sub.A17B === "" ? "" : parseInt(rec01sub.A17B).toString())
                setA17C_SUB(rec01sub.A17C === "" ? "" : parseInt(rec01sub.A17C).toString())
                setA18_SUB(rec01sub.A18)
                setA18A_SUB(rec01sub.A18A === "" ? "" : parseInt(rec01sub.A18A).toString())
                setA18B_SUB(rec01sub.A18B === "" ? "" : parseInt(rec01sub.A18B).toString())
                setA18C_SUB(rec01sub.A18C === "" ? "" : parseInt(rec01sub.A18C).toString())
                setA19_SUB(rec01sub.A19)
                setA19A_SUB(rec01sub.A19A === "" ? "" : parseInt(rec01sub.A19A).toString())
                setA19B_SUB(rec01sub.A19B === "" ? "" : parseInt(rec01sub.A19B).toString())
                setA19C_SUB(rec01sub.A19C === "" ? "" : parseInt(rec01sub.A19C).toString())
                setA20_SUB(rec01sub.A20)
                setA20A_SUB(rec01sub.A20A === "" ? "" : parseInt(rec01sub.A20A).toString())
                setA20B_SUB(rec01sub.A20B === "" ? "" : parseInt(rec01sub.A20B).toString())
                setA20C_SUB(rec01sub.A20C === "" ? "" : parseInt(rec01sub.A20C).toString())
                setA21_SUB(rec01sub.A21)
                setA21A_SUB(rec01sub.A21A === "" ? "" : parseInt(rec01sub.A21A).toString())
                setA21B_SUB(rec01sub.A21B === "" ? "" : parseInt(rec01sub.A21B).toString())
                setA21C_SUB(rec01sub.A21C === "" ? "" : parseInt(rec01sub.A21C).toString())
                setA22_SUB(rec01sub.A22)
                setA22A_SUB(rec01sub.A22A === "" ? "" : parseInt(rec01sub.A22A).toString())
                setA22B_SUB(rec01sub.A22B === "" ? "" : parseInt(rec01sub.A22B).toString())
                setA22C_SUB(rec01sub.A22C=== "" ? "" : parseInt(rec01sub.A22C).toString())
                setA23_SUB(rec01sub.A23)
                setA23A_SUB(rec01sub.A23A === "" ? "" : parseInt(rec01sub.A23A).toString())
                setA23B_SUB(rec01sub.A23B === "" ? "" : parseInt(rec01sub.A23B).toString())
                setA23C_SUB(rec01sub.A23C === "" ? "" : parseInt(rec01sub.A23C).toString())
                setA24_SUB(rec01sub.A24)
                setA24A_SUB(rec01sub.A24A === "" ? "" : parseInt(rec01sub.A24A).toString())
                setA24B_SUB(rec01sub.A24B === "" ? "" : parseInt(rec01sub.A24B).toString())
                setA24C_SUB(rec01sub.A24C === "" ? "" : parseInt(rec01sub.A24C).toString())
                setA25_SUB(rec01sub.A25)
                setA25A_SUB(rec01sub.A25A === "" ? "" : parseInt(rec01sub.A25A).toString())
                setA25B_SUB(rec01sub.A25B === "" ? "" : parseInt(rec01sub.A25B).toString())
                setA25C_SUB(rec01sub.A25C === "" ? "" : parseInt(rec01sub.A25C).toString())

                setA06VILN_SUB(rec01sub.A06VILN_SUB)

                //
                //disabled
                if(rec01sub.A02_1 !== "1"){
                  //ถ้าไม่ได้เลือกปลูกพืช ให้ปิดที่ดินไว้ และให้ค่าว่าง
                  setDisabledA02_1(true)
                  setA08A_SUB("")
                  setA08B_SUB("")
                  setA08C_SUB("")
                  setA09A_SUB("")
                  setA09B_SUB("")
                  setA09C_SUB("")
                  setA10A_SUB("")
                  setA10B_SUB("")
                  setA10C_SUB("")
                  setA11A_SUB("")
                  setA11B_SUB("")
                  setA11C_SUB("")
                  setA12A_SUB("")
                  setA12B_SUB("")
                  setA12C_SUB("")
                  setA13A_SUB("")
                  setA13B_SUB("")
                  setA13C_SUB("")
                  setA14A_SUB("")
                  setA14B_SUB("")
                  setA14C_SUB("")
                }
                else{
                  setDisabledA02_1(false)
                }

                if(rec01sub.A02_2 !== "1"){
                  //ถ้าไม่ได้เลือกเลี้ยงสัตว์ ให้ปิดที่ดินไว้ และให้ค่าว่าง
                  setDisabledA02_2(true)
                  setA15A_SUB("")
                  setA15B_SUB("")
                  setA15C_SUB("")
                }
                else{
                  setDisabledA02_2(false)
                }

                if(rec01sub.A02_3 !== "1"){
                  //ถ้าไม่ได้เลือกเลี้ยงสัตว์น้ำ ให้ปิดที่ดินไว้ และให้ค่าว่าง
                  setDisabledA02_3(true)
                  setA16A_SUB("")
                  setA16B_SUB("")
                  setA16C_SUB("")
                }
                else{
                  setDisabledA02_3(false)
                }

                if(rec01sub.A02_4 !== "1"){
                  //ถ้าไม่ได้เลือกทำนาเกลือสมุทร ให้ปิดที่ดินไว้ และให้ค่าว่าง
                  setDisabledA02_4(true)
                  setA17A_SUB("")
                  setA17B_SUB("")
                  setA17C_SUB("")
                }
                else{
                  setDisabledA02_4(false)
                }
                

                //เปิด modal
                handleShow()
                
              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR (getLand): ", err);
            });
        } catch (err) {
          console.error("ERROR (getLand): ", err);
        }
      }
    }
    getREC01SubRecord();

    setShowConfirmDeleteButton("none")
    setShowDeleteButton("")
    
  };


  //สำหรับสิทธิ์ 3 , 7
  async function NextEnumerate() {
    //==========================================================================================
    // consistency check สำหรับตอนถัดไป

    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
      if (api.authToken) {
        let auth: string = api.authToken;

        //header api
    const headers = {
      Authorization: "Basic " + auth,
      "Content-Type": "application/json;charset=UTF-8",
    };

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
          else if (rec01list[0].A02_2 === "1") {
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
      })
      .catch((err) => {
        console.log("AXIOS ERROR (NextEnumerate.getREC01List in ELand2): ", err);
      });

      }

    

    //==========================================================================================
  }

  return (
    <div>
      <Container className="container-xxl flex-grow-1 container-p-y">
        <form
          onSubmit={handleSubmit(() =>
            userInfo?.roleId !== 9 && userInfo?.roleId !== 10
              ? NextEnumerate() //setPage(page + 1)
              : process.env.REACT_APP_PROJECT === "open"
              ? SaveEnumerate()
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
                      <h5 className="mb-0 py-2 py-xl-0 text-white ">
                        ตอนที่ 2 เนื้อที่ถือครองทำการเกษตร
                      </h5>
                    </Col>

                    <Col  className="col-2 ml-auto pl-0">
                      <button
                        className="btn btn-light btn-sm mr-1 float-end"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsELand288"
                        aria-expanded="false"
                        aria-controls="collapsELand288"
                      >
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                    </Col>
                  </Row>
                </Card.Header>

                <Card.Body>
                  <Row className="collapse show" id="collapsELand288">
                    <Col md={12}>

                      <Row className="mt-2 question-title">
                        <Col md={12}>
                          <label style={{ fontWeight: "bold" }}>
                            1. ให้สอบถามและบันทึกเนื้อที่ถือครองทำการเกษตร ณ วันที่ 1 พฤษภาคม 2566
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle">
                        <Col md={12}>
                          <label>
                            1.1 ผืนที่ดิน 
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A06 จำนวนผืนที่ดิน</label>
                        </Col>
                        <Col md={6}>
                          <div className="input-group">
                            <input
                              type="number"
                              className={`form-control ${invalidA06?"is-invalid":""}`}
                              onChange={inputA06}
                              min={1}
                              max={99}
                              value={A06}
                            />
                            <button
                              type="button"
                              className="btn btn-primary text-white"
                              disabled={Number(A06) <= 0 || Number(A06) > 99 ? true : false}
                              onClick={() => creatELand2()}
                              style={{
                                display:
                                  process.env.REACT_APP_PROJECT === "open"
                                    ? userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                                      ? "none"
                                      : ""
                                    : "none",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faLayerGroup}
                                className="me-1"
                              />
                              สร้างผืนที่ดิน
                            </button>
                            <div className="invalid-feedback">A06 ต้องมีค่าอยู่ระหว่าง 1 ถึง 99 ผืน</div>
                          </div>
                          <div className="mt-3" style={{ display: showWarningA06 }}><label className="text-danger">จำนวนผืนที่ดินทั้งสิ้น ต้องมีค่าอยู่ระหว่าง 1 ถึง 99 ผืน</label></div>
                        </Col>
                      </Row>

                      <Row className="mt-2 ">
                        <Col md={12}>
                          <label >
                            เนื้อที่ถือครองทำการเกษตร เป็นรายผืน (ตามจำนวนผืน ใน A06)
                          </label>
                        </Col>
                      </Row>

                      {/* List of Land for A06 */}
                      <Row className="mt-4">

                      <div style={{display:showInvalidA06_Rec01list}}><label className="text-danger">A06 ต้อง = ลำดับที่ของผืนสุดท้าย</label></div>
                      
                      <div style={{display:showInvalidA06_A08_A19_A20_A25}}><label className="text-danger">ถ้า A06 มากกว่า 0 แล้ว A08 ถึง A19 และ A20 ถึง A25 ต้องระบุค่าอย่างน้อย 1 รายการ </label></div>
                      <div style={{display:showInvalidA06_A08_A19_A20_A25_SUB}}><label className="text-danger">ถ้า A06 มากกว่า 0 แล้ว A08 ถึง A19 และ A20 ถึง A25 ต้องระบุค่าอย่างน้อย 1 รายการ ในทุกผืนที่ดิน </label></div>

                      {rec01list &&
                        rec01list.map((item, index) => {
                          if (item.A06_SUB !== "00"){
                            return (

                              <div className="col-lg-4 col-md-4 col-sm-6 " key={index}>
                                <a onClick={() => OpenModalLand(item.AH_CODE,item.A06_SUB)} >
                                    <div className="card icon-card cursor-pointer text-center mb-2 mt-2 ">
                                        <div className={`card-body ${(Number(item.A07A) !== 0 || Number(item.A07B) !== 0 || Number(item.A07C) !== 0 )?"box-list-success":"box-list-warning"} `}>
                                          <i className={`bx bxs-layer fs-1  ${(Number(item.A07A) !== 0 || Number(item.A07B) !== 0 || Number(item.A07C) !== 0 )?"text-primary":"text-warning"} `}></i>
                                          <p className="icon-name text-capitalize  mb-0">ผืนที่ {item.A06_SUB}</p>

                                          {(Number(item.A07A) !== 0 || Number(item.A07B) !== 0 || Number(item.A07C) !== 0) && (
                                            <p>เนื้อที่รวม {Number(item.A07A)} ไร่ {Number(item.A07B)} งาน {Number(item.A07C)} ตารางวา </p>
                                          )}

                                          {/* <p>เนื้อที่รวม 100 ไร่ 3 งาน 99 ตารางวา </p> */}
                                        </div>
                                    </div>
                                </a>
                              </div>
                              
                            );
                          }                          
                        })}

                      </Row>
                      
                      <Row className="mt-2 question-subTitle">
                        <Col md={12}>
                          <label>
                          1.2 เนื้อที่ถือครองทำการเกษตร
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A07 เนื้อที่ถือครองทั้งสิ้น</label>
                          <div style={{display:showInvalidA07}}><label className="text-danger">A07 ต้องมีค่ามากกว่า 0</label></div>
                          <div style={{display:showInvalidA07_equal_A08_A19}}><label className="text-danger">A07 ต้องมีค่าเท่ากับ A08 ถึง A19 รวมกัน</label></div>
                          <div style={{display:showInvalidA07_equal_A20_A25}}><label className="text-danger">A07 ต้องมีค่าเท่ากับ A20 ถึง A25 รวมกัน</label></div>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <div className="input-group mb-3">
                                <input
                                  type="number"
                                  className={`form-control form-control-mini-x ${
                                    Number(A07A) >= 0 && Number(A07A) <= 99999 && Number.isInteger(Number(A07A))
                                      ? ""
                                      : "is-invalid"
                                  }`}
                                  onChange={inputA07A}
                                  value={A07A}
                                  min={0}
                                  max={99999}
                                />
                                <span className="input-group-text">ไร่</span>

                                <input
                                  type="number"
                                  className={`form-control form-control-mini-x ${
                                    Number(A07B) >= 0 && Number(A07B) <= 3 && Number.isInteger(Number(A07B))
                                      ? ""
                                      : "is-invalid"
                                  }`}
                                  onChange={inputA07B}
                                  value={A07B}
                                  min={0}
                                  max={3}
                                />
                                <span className="input-group-text">งาน</span>

                                <input
                                  type="number"
                                  className={`form-control form-control-mini-x ${
                                    Number(A07C) >= 0 && Number(A07C) <= 99 && Number.isInteger(Number(A07C))
                                      ? ""
                                      : "is-invalid"
                                  }`}
                                  onChange={inputA07C}
                                  value={A07C}
                                  min={0}
                                  max={99}
                                />
                                <span className="input-group-text">ตารางวา</span>

                                <div className="invalid-feedback">
                                  ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                                </div>

                              </div>
                            </Col>
                                                        
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle">
                        <Col md={12}>
                          <label>
                          1.3 เนื้อที่ถือครองทั้งสิ้น จำแนกตามการใช้ประโยชน์ (ระบบคำนวณให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A08 ที่นา (ปลูกข้าว)</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A08A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A08B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A08C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A09 สวนยางพารา</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A09A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A09B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A09C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A10 พืชยืนต้นและไม้ผล</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A10A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A10B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A10C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A11 พืชไร่</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A11A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A11B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A11C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A12 พืชผัก สมุนไพร และไม้ดอกไม้ประดับ</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A12A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A12B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A12C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A13 สวนป่า</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A13A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A13B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A13C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A14 ทุ่งหญ้าเลี้ยงสัตว์</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A14A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A14B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A14C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A15 ที่เลี้ยงสัตว์ (คอกสัตว์)</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A15A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A15B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A15C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A16 ที่เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A16A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A16B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A16C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A17 ที่นาเกลือสมุทร</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A17A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A17B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A17C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A18 แหล่งน้ำเพื่อการเกษตร เช่น บ่อน้ำตื้น สระน้ำ</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A18A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A18B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A18C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A19 ที่อื่นๆ</label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A19A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A19B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A19C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle ">
                        <Col md={12}>
                          <label>
                          1.4 เนื้อที่ถือครองทั้งสิ้น จำแนกตามลักษณะการถือครองและประเภทเอกสารสิทธิ์ (ระบบคำนวณให้)
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2 question-subTitle bg-90">
                        <Col md={12}>
                          <label>
                          1.4.1 เป็นที่ของตนเอง จำแนกตามประเภทเอกสารเกี่ยวกับที่ดิน
                          </label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A20 โฉนด (เอกสารสิทธิ์ตามกฎหมายที่ดิน 22 แบบ) 
                            <span className="">
                            </span>
                          </label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A20A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A20B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A20C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A21 หนังสืออนุญาตการใช้ประโยชน์ที่ดิน ที่ออกโดยสำนักงานปฏิรูปที่ดินเพื่อเกษตรกรรม (ส.ป.ก.) 
                            <span className="">
                            </span>
                          </label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A21A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A21B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A21C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>       

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A22 หนังสืออนุญาตการใช้ประโยชน์ที่ดินของรัฐอื่นๆ ที่ไม่ได้ออกโดยสำนักงานปฏิรูปที่ดินเพื่อเกษตรกรรม (ส.ป.ก.)   
                            <span className="">
                            </span>
                          </label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A22A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A22B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A22C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>   

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A23 เอกสารเกี่ยวกับที่ดินอื่นๆ    
                            <span className="">
                            </span>
                          </label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A23A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A23B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A23C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>  

                      <Row className="mt-2 question-subTitle bg-90">
                        <Col md={12}>
                          <label>
                          1.4.2 เป็นที่ไม่ใช่ของตนเอง จำแนกตามลักษณะการถือครอง
                          </label>
                        </Col>
                      </Row>   

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A24 เช่า     
                            <span className=""> 
                            </span>
                          </label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A24A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A24B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A24C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>  

                      <Row className="mt-2">
                        <Col md={6}>
                          <label>A25 ได้ทำฟรี/ที่สาธารณะ/ที่ป่าสงวน/ที่ป่าเสื่อมโทรม     
                            <span className=""> 
                            </span>
                          </label>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12} >
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-body">{A25A}</span>
                                <span className="input-group-text">ไร่</span>
                                <span className="input-group-text bg-body">{A25B}</span>
                                <span className="input-group-text">งาน</span>
                                <span className="input-group-text bg-body">{A25C}</span>
                                <span className="input-group-text">ตารางวา</span>
                              </div>
                            </Col>                            
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-2  alert alert-warning text-center">
                        <Col md={12}>
                          <label>
                          ให้ตรวจสอบภายหลังการบันทึกข้อมูลรายผืนแล้ว
                          </label>
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row className="mt-2 text-center">
                    <Col md={12}>
                      <label>
                        บันทึกเนื้อที่ตามลักษณะการถือครองให้ครบทุกผืน (ต้องเท่ากับจำนวนผืนทั้งสิ้นใน A06)
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

                    <button type="submit" className="btn btn-primary">
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

          <Row className="mt-2 question-subTitle">
            <Col md={12}>
              <label>
                2.1 ให้สอบถามและบันทึกเนื้อที่ถือครองรายผืนและสถานที่ตั้ง จำแนกตามการใช้ประโยชน์ ณ วันที่ 1 พฤษภาคม 2566
              </label>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A06_{A06_SUB} ผืนที่ {A06_SUB} </label>
            </Col>
            <Col md={6}>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  disabled
                  value={A06_SUB}
                />
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>ที่ตั้งผืนที่ดิน (ระบบกำหนดรหัสให้) </label>
            </Col>
            <Col md={6}>
                     
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="mb-3" style={{ display: showWarningA06_SUB }}><label className="text-danger">กรุณาเลือก ที่ตั้งผืนที่ดิน (อำเภอ/ตำบล/หมู่ที่)</label></div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A06AMP_{A06_SUB} อำเภอ </label>
            </Col>
            <Col md={6}>
              <select className="form-select " 
                  onChange={onChangeDdlAmp}
                  value={A06AMP_SUB}
                >
                  <option value="">อำเภอ</option>
                  {ddlAMP &&
                    ddlAMP.map((d,index) => (
                      <option key={index} value={d.ampOrder!}>
                        {`${d.ampOrder!}-${d.ampName!}`}
                      </option>
                    ))}
                </select>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A06TAM_{A06_SUB} ตำบล  </label>
            </Col>
            <Col md={6}>
              <select className="form-select "
                  onChange={onChangeDdlTam}
                  value={A06TAM_SUB}
                >
                  <option value="">ตำบล</option>
                  {ddlTAM &&
                    ddlTAM.map((d,index) => (
                      <option key={index} value={d.tamOrder!}>
                        {`${d.tamOrder!}-${d.tamName!}`}
                      </option>
                    ))}
                </select>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A06VIL_{A06_SUB} หมู่ที่  </label>
            </Col>
            <Col md={6}>
              <select className="form-select "
                onChange={onChangeDdlVil}
                  value={A06VILN_SUB === ""? A06VIL_SUB : A06VIL_SUB + "-" + A06VILN_SUB}
                >
                  <option value="">หมู่ที่</option>
                  {ddlVIL &&
                    ddlVIL.map((d, index) => (
                      <option key={index} value= {A06VILN_SUB === ""? `${d.vilOrder!}` : `${d.vilOrder!}-${d.vilName!}`}>
                        {`${d.vilOrder!}-${d.vilName!}`}
                      </option>
                    ))}
                </select>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <label className="fw-bold">A07_{A06_SUB} เนื้อที่รวมผืนที่ {A06_SUB}</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A07A_SUB) >= 0 && Number(A07A_SUB) <= 99999 && Number.isInteger(Number(A07A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA07A_SUB}
                      value={A07A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A07B_SUB) >= 0 && Number(A07B_SUB) <= 3 && Number.isInteger(Number(A07B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA07B_SUB}
                      value={A07B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A07C_SUB) >= 0 && Number(A07C_SUB) <= 99 && Number.isInteger(Number(A07C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA07C_SUB}
                      value={A07C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">ตารางวา</span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>
                    {/* <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ 0 ถึง 3
                    </div>
                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div> */}

                  </div>
                </Col>

              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A08_{A06_SUB} ที่นา (ปลูกข้าว)</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A08A_SUB) >= 0 && Number(A08A_SUB) <= 99999 && Number.isInteger(Number(A08A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA08A_SUB}
                      value={A08A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A08B_SUB) >= 0 && Number(A08B_SUB) <= 3 && Number.isInteger(Number(A08B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA08B_SUB}
                      value={A08B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A08C_SUB) >= 0 && Number(A08C_SUB) <= 99 && Number.isInteger(Number(A08C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA08C_SUB}
                      value={A08C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                    ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>

              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A09_{A06_SUB} สวนยางพารา</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A09A_SUB) >= 0 && Number(A09A_SUB) <= 99999 && Number.isInteger(Number(A09A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA09A_SUB}
                      value={A09A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A09B_SUB) >= 0 && Number(A09B_SUB) <= 3 && Number.isInteger(Number(A09B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA09B_SUB}
                      value={A09B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A09C_SUB) >= 0 && Number(A09C_SUB) <= 99 && Number.isInteger(Number(A09C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA09C_SUB}
                      value={A09C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>                    

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A10_{A06_SUB} พืชยืนต้นและไม้ผล</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A10A_SUB) >= 0 && Number(A10A_SUB) <= 99999 && Number.isInteger(Number(A10A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA10A_SUB}
                      value={A10A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A10B_SUB) >= 0 && Number(A10B_SUB) <= 3 && Number.isInteger(Number(A10B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA10B_SUB}
                      value={A10B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A10C_SUB) >= 0 && Number(A10C_SUB) <= 99 && Number.isInteger(Number(A10C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA10C_SUB}
                      value={A10C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A11_{A06_SUB} พืชไร่</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A11A_SUB) >= 0 && Number(A11A_SUB) <= 99999 && Number.isInteger(Number(A11A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA11A_SUB}
                      value={A11A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A11B_SUB) >= 0 && Number(A11B_SUB) <= 3 && Number.isInteger(Number(A11B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA11B_SUB}
                      value={A11B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x  ${Number(A11C_SUB) >= 0 && Number(A11C_SUB) <= 99 && Number.isInteger(Number(A11C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA11C_SUB}
                      value={A11C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A12_{A06_SUB} พืชผัก สมุนไพร และไม้ดอกไม้ประดับ</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A12A_SUB) >= 0 && Number(A12A_SUB) <= 99999 && Number.isInteger(Number(A12A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA12A_SUB}
                      value={A12A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A12B_SUB) >= 0 && Number(A12B_SUB) <= 3 && Number.isInteger(Number(A12B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA12B_SUB}
                      value={A12B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A12C_SUB) >= 0 && Number(A12C_SUB) <= 99 && Number.isInteger(Number(A12C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA12C_SUB}
                      value={A12C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>                    

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A13_{A06_SUB} สวนป่า</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A13A_SUB) >= 0 && Number(A13A_SUB) <= 99999 && Number.isInteger(Number(A13A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA13A_SUB}
                      value={A13A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A13B_SUB) >= 0 && Number(A13B_SUB) <= 3 && Number.isInteger(Number(A13B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA13B_SUB}
                      value={A13B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A13C_SUB) >= 0 && Number(A13C_SUB) <= 99 && Number.isInteger(Number(A13C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA13C_SUB}
                      value={A13C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A14_{A06_SUB} ทุ่งหญ้าเลี้ยงสัตว์</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A14A_SUB) >= 0 && Number(A14A_SUB) <= 99999 && Number.isInteger(Number(A14A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA14A_SUB}
                      value={A14A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A14B_SUB) >= 0 && Number(A14B_SUB) <= 3 && Number.isInteger(Number(A14B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA14B_SUB}
                      value={A14B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A14C_SUB) >= 0 && Number(A14C_SUB) <= 99 && Number.isInteger(Number(A14C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA14C_SUB}
                      value={A14C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_1}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>
                  
                  </div>
                </Col>

              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A15_{A06_SUB} ที่เลี้ยงสัตว์ (คอกสัตว์)</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A15A_SUB) >= 0 && Number(A15A_SUB) <= 99999 && Number.isInteger(Number(A15A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA15A_SUB}
                      value={A15A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_2}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A15B_SUB) >= 0 && Number(A15B_SUB) <= 3 && Number.isInteger(Number(A15B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA15B_SUB}
                      value={A15B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_2}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A15C_SUB) >= 0 && Number(A15C_SUB) <= 99 && Number.isInteger(Number(A15C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA15C_SUB}
                      value={A15C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_2}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A16_{A06_SUB} ที่เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A16A_SUB) >= 0 && Number(A16A_SUB) <= 99999 && Number.isInteger(Number(A16A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA16A_SUB}
                      value={A16A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_3}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A16B_SUB) >= 0 && Number(A16B_SUB) <= 3 && Number.isInteger(Number(A16B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA16B_SUB}
                      value={A16B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A16C_SUB) >= 0 && Number(A16C_SUB) <= 99 && Number.isInteger(Number(A16C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA16C_SUB}
                      value={A16C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_3}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A17_{A06_SUB} ที่นาเกลือสมุทร</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A17A_SUB) >= 0 && Number(A17A_SUB) <= 99999 && Number.isInteger(Number(A17A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA17A_SUB}
                      value={A17A_SUB}
                      min={0}
                      max={99999}
                      disabled={disabledA02_4}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A17B_SUB) >= 0 && Number(A17B_SUB) <= 3 && Number.isInteger(Number(A17B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA17B_SUB}
                      value={A17B_SUB}
                      min={0}
                      max={3}
                      disabled={disabledA02_4}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A17C_SUB) >= 0 && Number(A17C_SUB) <= 99 && Number.isInteger(Number(A17C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA17C_SUB}
                      value={A17C_SUB}
                      min={0}
                      max={99}
                      disabled={disabledA02_4}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A18_{A06_SUB} แหล่งน้ำเพื่อการเกษตร เช่น บ่อน้ำตื้น สระน้ำ</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A18A_SUB) >= 0 && Number(A18A_SUB) <= 99999 && Number.isInteger(Number(A18A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA18A_SUB}
                      value={A18A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A18B_SUB) >= 0 && Number(A18B_SUB) <= 3 && Number.isInteger(Number(A18B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA18B_SUB}
                      value={A18B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A18C_SUB) >= 0 && Number(A18C_SUB) <= 99 && Number.isInteger(Number(A18C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA18C_SUB}
                      value={A18C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A19_{A06_SUB} ที่อื่นๆ</label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${ Number(A19A_SUB === ""? 0 : A19A_SUB) >= 0 && Number(A19A_SUB === ""? 0 : A19A_SUB) <= 99999  && Number.isInteger(Number(A19A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA19A_SUB}
                      value={A19A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A19B_SUB) >= 0 && Number(A19B_SUB) <= 3 && Number.isInteger(Number(A19B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA19B_SUB}
                      value={A19B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A19C_SUB) >= 0 && Number(A19C_SUB) <= 99 && Number.isInteger(Number(A19C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA19C_SUB}
                      value={A19C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2 question-subTitle">
            <Col md={12}>
              <label>
                2.2 ให้สอบถามและบันทึกเนื้อที่ถือครองเป็นรายผืน จำแนกตามลักษณะการถือครอง ณ วันที่ 1 พฤษภาคม 2566
              </label>
            </Col>
          </Row>

          <Row className="mt-2 question-subTitle1">
            <Col md={12}>
              <label>
                2.2.1 เป็นที่ของตนเอง จำแนกตามประเภทเอกสารเกี่ยวกับที่ดิน
              </label>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A20_{A06_SUB} โฉนด (เอกสารสิทธิ์ตามกฎหมายที่ดิน 22 แบบ)
                <span> 
                </span>
              </label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A20A_SUB) >= 0 && Number(A20A_SUB) <= 99999 && Number.isInteger(Number(A20A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA20A_SUB}
                      value={A20A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A20B_SUB) >= 0 && Number(A20B_SUB) <= 3 && Number.isInteger(Number(A20B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA20B_SUB}
                      value={A20B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A20C_SUB) >= 0 && Number(A20C_SUB) <= 99 && Number.isInteger(Number(A20C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA20C_SUB}
                      value={A20C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A21_{A06_SUB} หนังสืออนุญาตการใช้ประโยชน์ที่ดิน ที่ออกโดยสำนักงานปฏิรูปที่ดินเพื่อเกษตรกรรม (ส.ป.ก.)
                <span> 
                </span>
              </label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A21A_SUB) >= 0 && Number(A21A_SUB) <= 99999 && Number.isInteger(Number(A21A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA21A_SUB}
                      value={A21A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A21B_SUB) >= 0 && Number(A21B_SUB) <= 3 && Number.isInteger(Number(A21B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA21B_SUB}
                      value={A21B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A21C_SUB) >= 0 && Number(A21C_SUB) <= 99 && Number.isInteger(Number(A21C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA21C_SUB}
                      value={A21C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A22_{A06_SUB} หนังสืออนุญาตการใช้ประโยชน์ที่ดินของรัฐอื่นๆ ที่ไม่ได้ออกโดยสำนักงานปฏิรูปที่ดินเพื่อเกษตรกรรม (ส.ป.ก.)
                <span> 
                </span>
              </label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A22A_SUB) >= 0 && Number(A22A_SUB) <= 99999 && Number.isInteger(Number(A22A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA22A_SUB}
                      value={A22A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A22B_SUB) >= 0 && Number(A22B_SUB) <= 3 && Number.isInteger(Number(A22B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA22B_SUB}
                      value={A22B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A22C_SUB) >= 0 && Number(A22C_SUB) <= 99 && Number.isInteger(Number(A22C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA22C_SUB}
                      value={A22C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A23_{A06_SUB} เอกสารเกี่ยวกับที่ดินอื่นๆ 
                <span> 
                </span>
              </label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A23A_SUB) >= 0 && Number(A23A_SUB) <= 99999 && Number.isInteger(Number(A23A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA23A_SUB}
                      value={A23A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A23B_SUB) >= 0 && Number(A23B_SUB) <= 3 && Number.isInteger(Number(A23B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA23B_SUB}
                      value={A23B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A23C_SUB) >= 0 && Number(A23C_SUB) <= 99 && Number.isInteger(Number(A23C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA23C_SUB}
                      value={A23C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>


          <Row className="mt-2 question-subTitle1">
            <Col md={12}>
              <label>
                2.2.2 เป็นที่ไม่ใช่ของตนเอง จำแนกตามลักษณะการถือครอง
              </label>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A24_{A06_SUB} เช่า   
                <span>
                </span>
              </label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A24A_SUB) >= 0 && Number(A24A_SUB) <= 99999 && Number.isInteger(Number(A24A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA24A_SUB}
                      value={A24A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A24B_SUB) >= 0 && Number(A24B_SUB) <= 3 && Number.isInteger(Number(A24B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA24B_SUB}
                      value={A24B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A24C_SUB) >= 0 && Number(A24C_SUB) <= 99 && Number.isInteger(Number(A24C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA24C_SUB}
                      value={A24C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col md={6}>
              <label>A25_{A06_SUB} ได้ทำฟรี/ที่สาธารณะ/ที่ป่าสงวน/ที่ป่าเสื่อมโทรม   
                <span>
                </span>
              </label>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A25A_SUB) >= 0 && Number(A25A_SUB) <= 99999 && Number.isInteger(Number(A25A_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA25A_SUB}
                      value={A25A_SUB}
                      min={0}
                      max={99999}
                    />
                    <span className="input-group-text">ไร่</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A25B_SUB) >= 0 && Number(A25B_SUB) <= 3 && Number.isInteger(Number(A25B_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA25B_SUB}
                      value={A25B_SUB}
                      min={0}
                      max={3}
                    />
                    <span className="input-group-text">งาน</span>

                    <input
                      type="number"
                      className={`form-control form-control-mini-x ${Number(A25C_SUB) >= 0 && Number(A25C_SUB) <= 99 && Number.isInteger(Number(A25C_SUB))
                          ? ""
                          : "is-invalid"
                        }`}
                      onChange={inputA25C_SUB}
                      value={A25C_SUB}
                      min={0}
                      max={99}
                    />
                    <span className="input-group-text">
                      ตารางวา
                    </span>

                    <div className="invalid-feedback">
                      ค่าที่ระบุได้คือ ไร่ = 0 ถึง 99999 , งาน = 0 ถึง 3 , ตารางวา = 0 ถึง 99
                    </div>

                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>

          <Row className="">
            <Col md={12}>
              <div style={{display:showInvalid_SUB_A07_equal_A08_A19}}><label className="text-danger">A07_{A06_SUB} ต้องมีค่าเท่ากับ A08_{A06_SUB} ถึง A19_{A06_SUB} รวมกัน</label></div>
              <div style={{display:showInvalid_SUB_A07_equal_A20_A25}}><label className="text-danger">A07_{A06_SUB} ต้องมีค่าเท่ากับ A20_{A06_SUB} ถึง A25-{A06_SUB} รวมกัน</label></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12} className="text-end">
              <label className="text-danger me-3" style={{display:showConfirmDeleteButton}}>ยืนยันการลบผืนที่ {A06_SUB} </label>
              <button
                type="button"
                className="btn btn-danger me-2"
                style={{display:showConfirmDeleteButton}}
                onClick={()=>ConfirmDeleteLand()}
              >
                ยืนยันการลบผืนที่ดิน
              </button>
              <button
                type="button"
                className="btn btn-outline-danger me-2"
                style={{display:showDeleteButton}}
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose()
                    : process.env.REACT_APP_PROJECT === "open"
                    ? DeleteLand()
                    : handleClose()
                }
              >
                ลบผืนที่ดิน
              </button>
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
                onClick={() =>
                  userInfo?.roleId !== 9 && userInfo?.roleId !== 10
                    ? handleClose()
                    : process.env.REACT_APP_PROJECT === "open"
                    ? SaveLand()
                    : handleClose()
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
