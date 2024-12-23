import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import NavbarMenu from "../components/NavbarMenu";
import { _Triangulation } from "../components/Option";
import { TriangulationInfo } from "../model/TriangulationInfo";
import { UserInfo } from "../model/UserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function TriangulationDetail() {
  const [userInfo, setUser] = useState<UserInfo | null>(null);
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const parameter = useParams();

  useEffect(() => {
    async function getUser() {
      if (cookies.token !== "" && cookies.token !== undefined) {
        let url_auth_validate: string = "";
        if (process.env.REACT_APP_AUTH_VALIDATE_API) {
          url_auth_validate = process.env.REACT_APP_AUTH_VALIDATE_API;

          await axios
            .get(url_auth_validate, {
              headers: { Authorization: "Bearer " + cookies.token },
            })
            .then((res) => {
              if (res.status === 200) {
                setUser(res.data);
              } else {
                navigate("/");
              }
            });
        }
      }
    }

    getUser();
  }, [cookies.token, navigate, parameter]);

  const location = useLocation();
  const KEY_AREA_CODE = location.state;

  const [cookiesKey] = useCookies(["key"]);
  const [triKey, setTriKey] = useState<number>(0);

  const [totalAH_NO, setTotalAH_NO] = useState<number>(0);
  const [totalPlant, setTotalPlant] = useState<number>(0);
  const [totalShieling, setTotalShieling] = useState<number>(0);
  const [totalAquafarming, setTotalAquafarming] = useState<number>(0);
  const [totalSeaSalt, setTotalSeaSalt] = useState<number>(0);
  const [totalA07_AVG, setTotalA07_AVG] = useState<string>("");
  const [totalA07_MAX, setTotalA07_MAX] = useState<string>("");
  const [totalA07_MIN, setTotalA07_MIN] = useState<string>("");
  const [totalINCOME, setTotalINCOME] = useState<string>("");
  const [totalDEBT, setTotalDEBT] = useState<string>("");
  const [totalMEMBER, setTotalMEMBER] = useState<string>("");

  const [checkTotalAH_NO, setCheckTotalAH_NO] = useState<string>("");
  const [checkActivity, setCheckActivity] = useState<string>("");
  const [checkTotalA07_AVG, setCheckTotalA07_AVG] = useState<string>("");
  const [checkTotalA07_MAX, setCheckTotalA07_MAX] = useState<string>("");
  const [checkTotalA07_MIN, setCheckTotalA07_MIN] = useState<string>("");
  const [checkTotalDEBT, setCheckTotalDEBT] = useState<string>("");
  const [checkTotalINCOME, setCheckTotalINCOME] = useState<string>("");
  const [checkTotalMEMBER, setCheckTotalMEMBER] = useState<string>("");

  const [invalidENU_TotalAH_NO, setInvalidENU_TotalAH_NO] = useState<string>("");
  const [invalidENU_TotalActivity, setInvalidENU_TotalActivity] = useState<string>("");
  const [invalidENU_TotalA07_AVG, setInvalidENU_TotalA07_AVG] = useState<string>("");
  const [invalidENU_TotalA07_MAX, setInvalidENU_TotalA07_MAX] = useState<string>("");
  const [invalidENU_TotalA07_MIN, setInvalidENU_TotalA07_MIN] = useState<string>("");
  const [invalidENU_TotalDEBT, setInvalidENU_TotalDEBT] = useState<string>("");
  const [invalidENU_TotalINCOME, setInvalidENU_TotalINCOME] = useState<string>("");
  const [invalidENU_TotalMEMBER, setInvalidENU_TotalMEMBER] = useState<string>("");

  const [invalidSUB_TotalAH_NO, setInvalidSUB_TotalAH_NO] = useState<string>("");
  const [invalidSUB_TotalActivity, setInvalidSUB_TotalActivity] = useState<string>("");
  const [invalidSUB_TotalA07_AVG, setInvalidSUB_TotalA07_AVG] = useState<string>("");
  const [invalidSUB_TotalA07_MAX, setInvalidSUB_TotalA07_MAX] = useState<string>("");
  const [invalidSUB_TotalA07_MIN, setInvalidSUB_TotalA07_MIN] = useState<string>("");
  const [invalidSUB_TotalDEBT, setInvalidSUB_TotalDEBT] = useState<string>("");
  const [invalidSUB_TotalINCOME, setInvalidSUB_TotalINCOME] = useState<string>("");
  const [invalidSUB_TotalMEMBER, setInvalidSUB_TotalMEMBER] = useState<string>("");

  const [invalidACA_TotalAH_NO, setInvalidACA_TotalAH_NO] = useState<string>("");
  const [invalidACA_TotalActivity, setInvalidACA_TotalActivity] = useState<string>("");
  const [invalidACA_TotalA07_AVG, setInvalidACA_TotalA07_AVG] = useState<string>("");
  const [invalidACA_TotalA07_MAX, setInvalidACA_TotalA07_MAX] = useState<string>("");
  const [invalidACA_TotalA07_MIN, setInvalidACA_TotalA07_MIN] = useState<string>("");
  const [invalidACA_TotalDEBT, setInvalidACA_TotalDEBT] = useState<string>("");
  const [invalidACA_TotalINCOME, setInvalidACA_TotalINCOME] = useState<string>("");
  const [invalidACA_TotalMEMBER, setInvalidACA_TotalMEMBER] = useState<string>("");

  const [remark, setRemark] = useState<string>("");

  const [SK1_11, setSK1_11] = useState<string>("");
  const [SK1_12, setSK1_12] = useState<string>("");
  const [SK1_10, setSK1_10] = useState<string>("");
  const [SK1_0, setSK1_0] = useState<string>("");
  const [SK1_31, setSK1_31] = useState<string>("");
  const [SK1_32, setSK1_32] = useState<string>("");
  const [SK1_41, setSK1_41] = useState<string>("");
  const [SK1_42, setSK1_42] = useState<string>("");
  const [SK1_43, setSK1_43] = useState<string>("");
  const [SK1_5, setSK1_5] = useState<string>("");

  //ผลการยืนยันของทั้ง 3 ราย
  const [ACA_TotalAH_NO, setACA_TotalAH_NO] = useState<string>("");
  const [ACA_TotalActivity, setACA_TotalActivity] = useState<string>("");
  const [ACA_TotalA07_AVG, setACA_TotalA07_AVG] = useState<string>("");
  const [ACA_TotalA07_MAX, setACA_TotalA07_MAX] = useState<string>("");
  const [ACA_TotalA07_MIN, setACA_TotalA07_MIN] = useState<string>("");
  const [ACA_TotalINCOME_AVG, setACA_TotalINCOME_AVG] = useState<string>("");
  const [ACA_TotalDEBT_AVG, setACA_TotalDEBT_AVG] = useState<string>("");
  const [ACA_TotalMEMBER_AVG, setACA_TotalMEMBER_AVG] = useState<string>("");

  const [SUB_TotalAH_NO, setSUB_TotalAH_NO] = useState<string>("");
  const [SUB_TotalActivity, setSUB_TotalActivity] = useState<string>("");
  const [SUB_TotalA07_AVG, setSUB_TotalA07_AVG] = useState<string>("");
  const [SUB_TotalA07_MAX, setSUB_TotalA07_MAX] = useState<string>("");
  const [SUB_TotalA07_MIN, setSUB_TotalA07_MIN] = useState<string>("");
  const [SUB_TotalINCOME_AVG, setSUB_TotalINCOME_AVG] = useState<string>("");
  const [SUB_TotalDEBT_AVG, setSUB_TotalDEBT_AVG] = useState<string>("");
  const [SUB_TotalMEMBER_AVG, setSUB_TotalMEMBER_AVG] = useState<string>("");

  const [ENU_TotalAH_NO, setENU_TotalAH_NO] = useState<string>("");
  const [ENU_TotalActivity, setENU_TotalActivity] = useState<string>("");
  const [ENU_TotalA07_AVG, setENU_TotalA07_AVG] = useState<string>("");
  const [ENU_TotalA07_MAX, setENU_TotalA07_MAX] = useState<string>("");
  const [ENU_TotalA07_MIN, setENU_TotalA07_MIN] = useState<string>("");
  const [ENU_TotalINCOME_AVG, setENU_TotalINCOME_AVG] = useState<string>("");
  const [ENU_TotalDEBT_AVG, setENU_TotalDEBT_AVG] = useState<string>("");
  const [ENU_TotalMEMBER_AVG, setENU_TotalMEMBER_AVG] = useState<string>("");

  const [ACA_REMARK, setACA_REMARK] = useState<string>("");
  const [SUB_REMARK, setSUB_REMARK] = useState<string>("");
  const [ENU_REMARK, setENU_REMARK] = useState<string>("");

  useEffect(() => {
    async function getDetail() {
      let url_enumerate_api: string = "";

      let base64 = require("base-64");
      let basic_auth: string = "";

      if (process.env.REACT_APP_BASIC_AUTH_API) {
        basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
      }

      let key: string =
        KEY_AREA_CODE === null ? base64.decode(cookiesKey.key) : KEY_AREA_CODE;

      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API + `/Triangulation/getData/${key}`;
      }

      const headers = {
        Authorization: "Basic " + basic_auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      await axios
        .get(url_enumerate_api, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            let item: TriangulationInfo = res.data[0];

            setTriKey(item.TRIANGULATION_KEY);

            console.log(item);

            setTotalAH_NO(item.TotalAH_NO); //จำนวนผู้ถือครองฯ
            setTotalPlant(item.TotalPlant); //ปลูกพืช
            setTotalShieling(item.TotalShieling); //เลี้ยงสัตว์
            setTotalAquafarming(item.TotalAquafarming); //เลี้ยงสัตว์น้ำในพื้นที่น้ำจืด
            setTotalSeaSalt(item.TotalSeaSalt); //ทำนาเกลือสมุทร
            setTotalA07_AVG(numberWithCommas(item.TotalA07_AVG)); //เนื้อที่ถือครองทำการเกษตรทั้งสิ้น
            setTotalA07_MAX(numberWithCommas(item.TotalA07_MAX)); //เนื้อที่ถือครองที่มากที่สุด
            setTotalA07_MIN(numberWithCommas(item.TotalA07_MIN)); //เนื้อที่ถือครองที่น้อยที่สุด
            setTotalDEBT(numberWithCommas(item.TotalDEBT_AVG)); //การมีหนี้สินทางการเกษตรเฉลี่ย
            setTotalINCOME(numberWithCommas(item.TotalINCOME_AVG)); //รายได้ทางการเกษตรเฉลี่ย
            setTotalMEMBER(numberWithCommas(item.TotalMEMBER_AVG)); //จำนวนสมาชิกในครัวเรือนเฉลี่ย

            //พนักงานแจงนับ
            setENU_TotalAH_NO(item.ENU_TotalAH_NO);
            setENU_TotalActivity(item.ENU_TotalActivity);
            setENU_TotalA07_AVG(item.ENU_TotalA07_AVG);
            setENU_TotalA07_MAX(item.ENU_TotalA07_MAX);
            setENU_TotalA07_MIN(item.ENU_TotalA07_MIN);
            setENU_TotalINCOME_AVG(item.ENU_TotalINCOME_AVG);
            setENU_TotalDEBT_AVG(item.ENU_TotalDEBT_AVG);
            setENU_TotalMEMBER_AVG(item.ENU_TotalMEMBER_AVG);
            setENU_REMARK(item.ENU_REMARK);

            //ผู้ประสานพื้นที่
            setSUB_TotalAH_NO(item.SUB_TotalAH_NO);
            setSUB_TotalActivity(item.SUB_TotalActivity);
            setSUB_TotalA07_AVG(item.SUB_TotalA07_AVG);
            setSUB_TotalA07_MAX(item.SUB_TotalA07_MAX);
            setSUB_TotalA07_MIN(item.SUB_TotalA07_MIN);
            setSUB_TotalINCOME_AVG(item.SUB_TotalINCOME_AVG);
            setSUB_TotalDEBT_AVG(item.SUB_TotalDEBT_AVG);
            setSUB_TotalMEMBER_AVG(item.SUB_TotalMEMBER_AVG);
            setSUB_REMARK(item.SUB_REMARK);

            //เจ้าหน้าที่วิชาการ
            setACA_TotalAH_NO(item.ACA_TotalAH_NO);
            setACA_TotalActivity(item.ACA_TotalActivity);
            setACA_TotalA07_AVG(item.ACA_TotalA07_AVG);
            setACA_TotalA07_MAX(item.ACA_TotalA07_MAX);
            setACA_TotalA07_MIN(item.ACA_TotalA07_MIN);
            setACA_TotalINCOME_AVG(item.ACA_TotalINCOME_AVG);
            setACA_TotalDEBT_AVG(item.ACA_TotalDEBT_AVG);
            setACA_TotalMEMBER_AVG(item.ACA_TotalMEMBER_AVG);
            setACA_REMARK(item.ACA_REMARK);

            if (userInfo?.roleId === 9) {
              //พนักงานแจงนับ
              setCheckTotalAH_NO(item.ENU_TotalAH_NO);
              setCheckActivity(item.ENU_TotalActivity);
              setCheckTotalA07_AVG(item.ENU_TotalA07_AVG);
              setCheckTotalA07_MAX(item.ENU_TotalA07_MAX);
              setCheckTotalA07_MIN(item.ENU_TotalA07_MIN);
              setCheckTotalDEBT(item.ENU_TotalDEBT_AVG);
              setCheckTotalINCOME(item.ENU_TotalINCOME_AVG);
              setCheckTotalMEMBER(item.ENU_TotalMEMBER_AVG);
              setRemark(item.ENU_REMARK);
            } else if (userInfo?.roleId === 8) {
              //ผู้ประสานพื้นที่
              setCheckTotalAH_NO(item.SUB_TotalAH_NO);
              setCheckActivity(item.SUB_TotalActivity);
              setCheckTotalA07_AVG(item.SUB_TotalA07_AVG);
              setCheckTotalA07_MAX(item.SUB_TotalA07_MAX);
              setCheckTotalA07_MIN(item.SUB_TotalA07_MIN);
              setCheckTotalDEBT(item.SUB_TotalDEBT_AVG);
              setCheckTotalINCOME(item.SUB_TotalINCOME_AVG);
              setCheckTotalMEMBER(item.SUB_TotalMEMBER_AVG);
              setRemark(item.SUB_REMARK);
            } else if (userInfo?.roleId === 7) {
              //เจ้าหน้าที่วิชาการ
              setCheckTotalAH_NO(item.ACA_TotalAH_NO);
              setCheckActivity(item.ACA_TotalActivity);
              setCheckTotalA07_AVG(item.ACA_TotalA07_AVG);
              setCheckTotalA07_MAX(item.ACA_TotalA07_MAX);
              setCheckTotalA07_MIN(item.ACA_TotalA07_MIN);
              setCheckTotalDEBT(item.ACA_TotalDEBT_AVG);
              setCheckTotalINCOME(item.ACA_TotalINCOME_AVG);
              setCheckTotalMEMBER(item.ACA_TotalMEMBER_AVG);
              setRemark(item.ACA_REMARK);
            }
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    }

    async function getSummarySk1() {
      let url_enumerate_api: string = "";

      let base64 = require("base-64");
      let basic_auth: string = "";

      if (process.env.REACT_APP_BASIC_AUTH_API) {
        basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
      }

      let key: string =
        KEY_AREA_CODE === null ? base64.decode(cookiesKey.key) : KEY_AREA_CODE;

      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API +
          `/Triangulation/getSummarySK1/${key}`;
      }

      const headers = {
        Authorization: "Basic " + basic_auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      await axios
        .get(url_enumerate_api, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data[0]);
            setSK1_11(res.data[0].SK1_11);
            setSK1_12(res.data[0].SK1_12);
            setSK1_10(res.data[0].SK1_10);
            setSK1_0(res.data[0].SK1_0);
            setSK1_31(res.data[0].SK1_31);
            setSK1_32(res.data[0].SK1_32);
            setSK1_41(res.data[0].SK1_41);
            setSK1_42(res.data[0].SK1_42);
            setSK1_43(res.data[0].SK1_43);
            setSK1_5(res.data[0].SK1_5);
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    }

    getDetail();
    getSummarySk1();
  }, [
    KEY_AREA_CODE,
    cookies.token,
    navigate,
    parameter,
    cookiesKey.key,
    userInfo?.roleId,
  ]);

  function numberWithCommas(num: number) {
    return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const radioCheckTotalAH_NO = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckTotalAH_NO(event.target.value);
    setInvalidENU_TotalAH_NO("");
    setInvalidSUB_TotalAH_NO("");
    setInvalidACA_TotalAH_NO("");
  };

  const radioCheckActivity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckActivity(event.target.value);
    setInvalidENU_TotalActivity("");
    setInvalidSUB_TotalActivity("");
    setInvalidACA_TotalActivity("");
  };

  const radioCheckTotalA07_AVG = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckTotalA07_AVG(event.target.value);
    setInvalidENU_TotalA07_AVG("");
    setInvalidSUB_TotalA07_AVG("");
    setInvalidACA_TotalA07_AVG("");
  };

  const radioCheckTotalA07_MAX = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckTotalA07_MAX(event.target.value);
    setInvalidENU_TotalA07_MAX("");
    setInvalidSUB_TotalA07_MAX("");
    setInvalidACA_TotalA07_MAX("");
  };

  const radioCheckTotalA07_MIN = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckTotalA07_MIN(event.target.value);
    setInvalidENU_TotalA07_MIN("");
    setInvalidSUB_TotalA07_MIN("");
    setInvalidACA_TotalA07_MIN("");
  };

  const radioCheckTotalDEBT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckTotalDEBT(event.target.value);
    setInvalidENU_TotalDEBT("");
    setInvalidSUB_TotalDEBT("");
    setInvalidACA_TotalDEBT("");
  };

  const radioCheckTotalINCOME = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckTotalINCOME(event.target.value);
    setInvalidENU_TotalINCOME("");
    setInvalidSUB_TotalINCOME("");
    setInvalidACA_TotalINCOME("");
  };

  const radioCheckTotalMEMBER = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckTotalMEMBER(event.target.value);
    setInvalidENU_TotalMEMBER("");
    setInvalidSUB_TotalMEMBER("");
    setInvalidACA_TotalMEMBER("");
  };

  const inputRemark = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemark(event.target.value);
  };

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [msgModal, setMsgModal] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);
  async function save() {
    let isValid: boolean = true;

    if(userInfo?.roleId === 9){
      if(checkTotalAH_NO === ""){
        setInvalidENU_TotalAH_NO("is-invalid");
        isValid = false;
      }

      if(checkActivity === ""){
        setInvalidENU_TotalActivity("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_AVG === ""){
        setInvalidENU_TotalA07_AVG("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_MAX === ""){
        setInvalidENU_TotalA07_MAX("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_MIN === ""){
        setInvalidENU_TotalA07_MIN("is-invalid");
        isValid = false;
      }

      if(checkTotalINCOME === ""){
        setInvalidENU_TotalINCOME("is-invalid");
        isValid = false;
      }

      if(checkTotalDEBT === ""){
        setInvalidENU_TotalDEBT("is-invalid");
        isValid = false;
      }

      if(checkTotalMEMBER === ""){
        setInvalidENU_TotalMEMBER("is-invalid");
        isValid = false;
      }
    }

    if(userInfo?.roleId === 8){
      if(checkTotalAH_NO === ""){
        setInvalidSUB_TotalAH_NO("is-invalid");
        isValid = false;
      }

      if(checkActivity === ""){
        setInvalidSUB_TotalActivity("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_AVG === ""){
        setInvalidSUB_TotalA07_AVG("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_MAX === ""){
        setInvalidSUB_TotalA07_MAX("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_MIN === ""){
        setInvalidSUB_TotalA07_MIN("is-invalid");
        isValid = false;
      }

      if(checkTotalINCOME === ""){
        setInvalidSUB_TotalINCOME("is-invalid");
        isValid = false;
      }

      if(checkTotalDEBT === ""){
        setInvalidSUB_TotalDEBT("is-invalid");
        isValid = false;
      }

      if(checkTotalMEMBER === ""){
        setInvalidSUB_TotalMEMBER("is-invalid");
        isValid = false;
      }
    }

    if(userInfo?.roleId === 7){
      if(checkTotalAH_NO === ""){
        setInvalidACA_TotalAH_NO("is-invalid");
        isValid = false;
      }

      if(checkActivity === ""){
        setInvalidACA_TotalActivity("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_AVG === ""){
        setInvalidACA_TotalA07_AVG("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_MAX === ""){
        setInvalidACA_TotalA07_MAX("is-invalid");
        isValid = false;
      }

      if(checkTotalA07_MIN === ""){
        setInvalidACA_TotalA07_MIN("is-invalid");
        isValid = false;
      }

      if(checkTotalINCOME === ""){
        setInvalidACA_TotalINCOME("is-invalid");
        isValid = false;
      }

      if(checkTotalDEBT === ""){
        setInvalidACA_TotalDEBT("is-invalid");
        isValid = false;
      }

      if(checkTotalMEMBER === ""){
        setInvalidACA_TotalMEMBER("is-invalid");
        isValid = false;
      }
    }

    if (isValid) {
      try {
        let url_enumerate_api: string = "";
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + "/Triangulation/approve";
        }

        let base64 = require("base-64");
        let basic_auth: string = "";

        if (process.env.REACT_APP_BASIC_AUTH_API) {
          basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
        }

        const headers = {
          Authorization: "Basic " + basic_auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        const body = {
          triangulatioN_KEY: triKey,
          checK_TOTAL_AH_NO: checkTotalAH_NO,
          checK_TOTAL_ACTIVITY: checkActivity,
          checK_TOTAL_A07_AVG: checkTotalA07_AVG,
          checK_TOTAL_A07_MAX: checkTotalA07_MAX,
          checK_TOTAL_A07_MIN: checkTotalA07_MIN,
          checK_TOTAL_INCOME_AVG: checkTotalINCOME,
          checK_TOTAL_DEBT_AVG: checkTotalDEBT,
          checK_TOTAL_MEMBER_AVG: checkTotalMEMBER,
          approvE_TYPE:
            userInfo?.roleId === 9
              ? "ENU"
              : userInfo?.roleId === 8
              ? "SUB"
              : "ACA",
          approvE_KEY: userInfo?.userId,
          approvE_NAME: userInfo?.name,
          remark: remark,
        };

        console.log(JSON.stringify(body));

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setLoading(false);

              setTitleModal("บันทึกข้อมูลเรียบร้อยแล้ว");
              setMsgModal(`กรุณากดปุ่ม "หน้ารายการ" เพื่อกลับไปยังหน้าแรก`);
              handleShow();
            }
          })
          .catch((err) => {
            setLoading(false);
            console.log("AXIOS ERROR: ", err);
          });
      } catch (err) {
        setLoading(false);
        console.error("save triangulation ERROR: ", err);
      }
    }
  }

  return (
    <div>
      <NavbarMenu />

      <Container className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="header">
                <Row className="flex-between-center">
                  <Col
                    md={4}
                    className="col-sm-auto d-flex align-items-center pr-0"
                  >
                    <h5 className="mb-0 py-2 py-xl-0 text-white ">
                      ระบบยืนยันข้อมูลสามเส้า
                    </h5>
                  </Col>
                </Row>
              </Card.Header>

              <Card.Body className="card-menu">
                <Row className="mt-2">
                  <Col md={12}>
                    <label style={{ fontWeight: "bold" }}>
                      ตรวจสอบและยืนยันความครบถ้วนของจำนวนผู้ถือครองทำการเกษตร
                      และข้อมูลสำคัญในเขตปฏิบัติงาน
                    </label>
                  </Col>
                </Row>

                <Row
                  className="mt-2"
                  style={{
                    display:
                      userInfo?.roleId === 7 ||
                      userInfo?.roleId === 8 ||
                      userInfo?.roleId === 9
                        ? "none"
                        : "",
                  }}
                >
                  <Col md={12}>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">ข้อมูลสำคัญ</th>
                            <th scope="col">ตัวเลขที่ได้</th>
                            <th scope="col" className="text-center">
                              เจ้าหน้าที่วิชาการ
                            </th>
                            <th scope="col" className="text-center">
                              ผู้ประสานงานในพื้นที่
                            </th>
                            <th scope="col" className="text-center">
                              พนักงานแจงนับ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1. จำนวนผู้ถือครองทำการเกษตร</td>
                            <td>
                              <b>{`${totalAH_NO} ราย`}</b>
                            </td>
                            <td className="text-center">
                              {ACA_TotalAH_NO !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ACA_TotalAH_NO === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {SUB_TotalAH_NO !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    SUB_TotalAH_NO === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {ENU_TotalAH_NO !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ENU_TotalAH_NO === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2. จำนวนผู้ถือครองทำการเกษตร
                              จำแนกตามกิจกรรมการเกษตร
                            </td>
                            <td>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  ปลูกพืช: <b>{`${totalPlant} ราย`}</b>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  เลี้ยงสัตว์: <b>{`${totalShieling} ราย`}</b>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  เลี้ยงสัตว์ในพื้นที่น้ำจืด:{" "}
                                  <b>{`${totalAquafarming} ราย`}</b>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  ทำนาเกลือสมุทร: <b>{`${totalSeaSalt} ราย`}</b>
                                </ListGroup.Item>
                              </ListGroup>
                            </td>
                            <td className="text-center">
                              {ACA_TotalActivity !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ACA_TotalActivity === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {SUB_TotalActivity !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    SUB_TotalActivity === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {ENU_TotalActivity !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ENU_TotalActivity === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>3. เนื้อที่ถือครองฯเฉลี่ย</td>
                            <td>
                              <b>{`${totalA07_AVG} ไร่`}</b>
                            </td>
                            <td className="text-center">
                              {ACA_TotalA07_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ACA_TotalA07_AVG === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {SUB_TotalA07_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    SUB_TotalA07_AVG === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {ENU_TotalA07_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ENU_TotalA07_AVG === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>4. เนื้อที่ถือครองที่มากที่สุด</td>
                            <td>
                              <b>{`${totalA07_MAX} ไร่`}</b>
                            </td>
                            <td className="text-center">
                              {ACA_TotalA07_MAX !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ACA_TotalA07_MAX === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {SUB_TotalA07_MAX !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    SUB_TotalA07_MAX === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {ENU_TotalA07_MAX !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ENU_TotalA07_MAX === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>5. เนื้อที่ถือครองที่น้อยที่สุด</td>
                            <td>
                              <b>{`${totalA07_MIN} ไร่`}</b>
                            </td>
                            <td className="text-center">
                              {ACA_TotalA07_MIN !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ACA_TotalA07_MIN === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {SUB_TotalA07_MIN !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    SUB_TotalA07_MIN === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {ENU_TotalA07_MIN !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ENU_TotalA07_MIN === "1" ? faCheck : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>6. รายได้ทางการเกษตรเฉลี่ย</td>
                            <td>
                              <b>{`${totalINCOME} บาท`}</b>
                            </td>
                            <td className="text-center">
                              {ACA_TotalINCOME_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ACA_TotalINCOME_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {SUB_TotalINCOME_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    SUB_TotalINCOME_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {ENU_TotalINCOME_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ENU_TotalINCOME_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>7. การมีหนี้สินทางการเกษตรเฉลี่ย</td>
                            <td>
                              <b>{`${totalDEBT} บาท`}</b>
                            </td>
                            <td className="text-center">
                              {ACA_TotalDEBT_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ACA_TotalDEBT_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {SUB_TotalDEBT_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    SUB_TotalDEBT_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {ENU_TotalDEBT_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ENU_TotalDEBT_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>8. จำนวนสมาชิกในครัวเรือนเฉลี่ย</td>
                            <td>
                              <b>{`${totalMEMBER} ราย`}</b>
                            </td>
                            <td className="text-center">
                              {ACA_TotalMEMBER_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ACA_TotalMEMBER_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {SUB_TotalMEMBER_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    SUB_TotalMEMBER_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                            <td className="text-center">
                              {ENU_TotalMEMBER_AVG !== "" && (
                                <FontAwesomeIcon
                                  icon={
                                    ENU_TotalMEMBER_AVG === "1"
                                      ? faCheck
                                      : faXmark
                                  }
                                  className="fa-lg"
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>หมายเหตุ</td>
                            <td></td>
                            <td>{ACA_REMARK}</td>
                            <td>{SUB_REMARK}</td>
                            <td>{ENU_REMARK}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>

                <Row
                  className="mt-2"
                  style={{
                    display:
                      userInfo?.roleId === 7 ||
                      userInfo?.roleId === 8 ||
                      userInfo?.roleId === 9
                        ? ""
                        : "none",
                  }}
                >
                  <Col md={12}>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">ข้อมูลสำคัญ</th>
                            <th scope="col">ตัวเลขที่ได้</th>
                            <th scope="col" className="text-center">
                              เจ้าหน้าที่วิชาการ
                            </th>
                            <th scope="col" className="text-center">
                              ผู้ประสานงานในพื้นที่
                            </th>
                            <th scope="col" className="text-center">
                              พนักงานแจงนับ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1. จำนวนผู้ถือครองทำการเกษตร</td>
                            <td>
                              <b>{`${totalAH_NO} ราย`}</b>
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 7 ? "" : "text-center"
                              }
                            >
                              {ACA_TotalAH_NO !== "" &&
                                userInfo?.roleId !== 7 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ACA_TotalAH_NO === "1" ? faCheck : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 7 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidACA_TotalAH_NO}`}
                                        name="rdCheck1_ACA"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck1_ACA${index}`}
                                        onChange={radioCheckTotalAH_NO}
                                        checked={
                                          option.value === checkTotalAH_NO
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck1_ACA${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 8 ? "" : "text-center"
                              }
                            >
                              {SUB_TotalAH_NO !== "" &&
                                userInfo?.roleId !== 8 && (
                                  <FontAwesomeIcon
                                    icon={
                                      SUB_TotalAH_NO === "1" ? faCheck : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}
                              {userInfo?.roleId === 8 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidSUB_TotalAH_NO}`}
                                        name="rdCheck1_SUB"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck1_SUB${index}`}
                                        onChange={radioCheckTotalAH_NO}
                                        checked={
                                          option.value === checkTotalAH_NO
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck1_SUB${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 9 ? "" : "text-center"
                              }
                            >
                              {ENU_TotalAH_NO !== "" &&
                                userInfo?.roleId !== 9 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ENU_TotalAH_NO === "1" ? faCheck : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 9 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidENU_TotalAH_NO}`}
                                        name="rdCheck1_ENU"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck1_ENU${index}`}
                                        onChange={radioCheckTotalAH_NO}
                                        checked={
                                          option.value === checkTotalAH_NO
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck1_ENU${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2. จำนวนผู้ถือครองทำการเกษตร
                              จำแนกตามกิจกรรมการเกษตร
                            </td>
                            <td>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  ปลูกพืช: <b>{`${totalPlant} ราย`}</b>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  เลี้ยงสัตว์: <b>{`${totalShieling} ราย`}</b>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  เลี้ยงสัตว์ในพื้นที่น้ำจืด:{" "}
                                  <b>{`${totalAquafarming} ราย`}</b>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  ทำนาเกลือสมุทร: <b>{`${totalSeaSalt} ราย`}</b>
                                </ListGroup.Item>
                              </ListGroup>
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 7 ? "" : "text-center"
                              }
                            >
                              {ACA_TotalActivity !== "" &&
                                userInfo?.roleId !== 7 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ACA_TotalActivity === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 7 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidACA_TotalActivity}`}
                                        name="rdCheck2_ACA"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck2_ACA${index}`}
                                        onChange={radioCheckActivity}
                                        checked={option.value === checkActivity}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck2_ACA${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 8 ? "" : "text-center"
                              }
                            >
                              {SUB_TotalActivity !== "" &&
                                userInfo?.roleId !== 8 && (
                                  <FontAwesomeIcon
                                    icon={
                                      SUB_TotalActivity === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}
                              {userInfo?.roleId === 8 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                         className={`form-check-input ${invalidSUB_TotalActivity}`}
                                        name="rdCheck2_SUB"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck2_SUB${index}`}
                                        onChange={radioCheckActivity}
                                        checked={option.value === checkActivity}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck2_SUB${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 9 ? "" : "text-center"
                              }
                            >
                              {ENU_TotalActivity !== "" &&
                                userInfo?.roleId !== 9 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ENU_TotalActivity === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 9 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidENU_TotalActivity}`}
                                        name="rdCheck2_ENU"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck2_ENU${index}`}
                                        onChange={radioCheckActivity}
                                        checked={option.value === checkActivity}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck2_ENU${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>3. เนื้อที่ถือครองฯเฉลี่ย</td>
                            <td>
                              <b>{`${totalA07_AVG} ไร่`}</b>
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 7 ? "" : "text-center"
                              }
                            >
                              {ACA_TotalA07_AVG !== "" &&
                                userInfo?.roleId !== 7 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ACA_TotalA07_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 7 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidACA_TotalA07_AVG}`}
                                        name="rdCheck3_ACA"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck3_ACA${index}`}
                                        onChange={radioCheckTotalA07_AVG}
                                        checked={
                                          option.value === checkTotalA07_AVG
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck3_ACA${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 8 ? "" : "text-center"
                              }
                            >
                              {SUB_TotalA07_AVG !== "" &&
                                userInfo?.roleId !== 8 && (
                                  <FontAwesomeIcon
                                    icon={
                                      SUB_TotalA07_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}
                              {userInfo?.roleId === 8 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidSUB_TotalA07_AVG}`}
                                        name="rdCheck3_SUB"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck3_SUB${index}`}
                                        onChange={radioCheckTotalA07_AVG}
                                        checked={
                                          option.value === checkTotalA07_AVG
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck3_SUB${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 9 ? "" : "text-center"
                              }
                            >
                              {ENU_TotalA07_AVG !== "" &&
                                userInfo?.roleId !== 9 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ENU_TotalA07_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 9 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidENU_TotalA07_AVG}`}
                                        name="rdCheck3_ENU"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck3_ENU${index}`}
                                        onChange={radioCheckTotalA07_AVG}
                                        checked={
                                          option.value === checkTotalA07_AVG
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck3_ENU${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>4. เนื้อที่ถือครองที่มากที่สุด</td>
                            <td>
                              <b>{`${totalA07_MAX} ไร่`}</b>
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 7 ? "" : "text-center"
                              }
                            >
                              {ACA_TotalA07_MAX !== "" &&
                                userInfo?.roleId !== 7 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ACA_TotalA07_MAX === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 7 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidACA_TotalA07_MAX}`}
                                        name="rdCheck4_ACA"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck4_ACA${index}`}
                                        onChange={radioCheckTotalA07_MAX}
                                        checked={
                                          option.value === checkTotalA07_MAX
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck4_ACA${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 8 ? "" : "text-center"
                              }
                            >
                              {SUB_TotalA07_MAX !== "" &&
                                userInfo?.roleId !== 8 && (
                                  <FontAwesomeIcon
                                    icon={
                                      SUB_TotalA07_MAX === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}
                              {userInfo?.roleId === 8 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidSUB_TotalA07_MAX}`}
                                        name="rdCheck4_SUB"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck4_SUB${index}`}
                                        onChange={radioCheckTotalA07_MAX}
                                        checked={
                                          option.value === checkTotalA07_MAX
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck4_SUB${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 9 ? "" : "text-center"
                              }
                            >
                              {ENU_TotalA07_MAX !== "" &&
                                userInfo?.roleId !== 9 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ENU_TotalA07_MAX === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 9 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidENU_TotalA07_MAX}`}
                                        name="rdCheck4_ENU"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck4_ENU${index}`}
                                        onChange={radioCheckTotalA07_MAX}
                                        checked={
                                          option.value === checkTotalA07_MAX
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck4_ENU${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>5. เนื้อที่ถือครองที่น้อยที่สุด</td>
                            <td>
                              <b>{`${totalA07_MIN} ไร่`}</b>
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 7 ? "" : "text-center"
                              }
                            >
                              {ACA_TotalA07_MIN !== "" &&
                                userInfo?.roleId !== 7 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ACA_TotalA07_MIN === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 7 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidACA_TotalA07_MIN}`}
                                        name="rdCheck5_ACA"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck5_ACA${index}`}
                                        onChange={radioCheckTotalA07_MIN}
                                        checked={
                                          option.value === checkTotalA07_MIN
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck5_ACA${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 8 ? "" : "text-center"
                              }
                            >
                              {SUB_TotalA07_MIN !== "" &&
                                userInfo?.roleId !== 8 && (
                                  <FontAwesomeIcon
                                    icon={
                                      SUB_TotalA07_MIN === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 8 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidSUB_TotalA07_MIN}`}
                                        name="rdCheck5_SUB"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck5_SUB${index}`}
                                        onChange={radioCheckTotalA07_MIN}
                                        checked={
                                          option.value === checkTotalA07_MIN
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck5_SUB${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 9 ? "" : "text-center"
                              }
                            >
                              {ENU_TotalA07_MIN !== "" &&
                                userInfo?.roleId !== 9 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ENU_TotalA07_MIN === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 9 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidENU_TotalA07_MIN}`}
                                        name="rdCheck5_ENU"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck5_ENU${index}`}
                                        onChange={radioCheckTotalA07_MIN}
                                        checked={
                                          option.value === checkTotalA07_MIN
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck5_ENU${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>6. รายได้ทางการเกษตรเฉลี่ย</td>
                            <td>
                              <b>{`${totalINCOME} บาท`}</b>
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 7 ? "" : "text-center"
                              }
                            >
                              {ACA_TotalINCOME_AVG !== "" &&
                                userInfo?.roleId !== 7 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ACA_TotalINCOME_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 7 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidACA_TotalINCOME}`}
                                        name="rdCheck6_ACA"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck6_ACA${index}`}
                                        onChange={radioCheckTotalINCOME}
                                        checked={
                                          option.value === checkTotalINCOME
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck6_ACA${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 8 ? "" : "text-center"
                              }
                            >
                              {SUB_TotalINCOME_AVG !== "" &&
                                userInfo?.roleId !== 8 && (
                                  <FontAwesomeIcon
                                    icon={
                                      SUB_TotalINCOME_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 8 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidSUB_TotalINCOME}`}
                                        name="rdCheck6_SUB"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck6_SUB${index}`}
                                        onChange={radioCheckTotalINCOME}
                                        checked={
                                          option.value === checkTotalINCOME
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck6_SUB${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 9 ? "" : "text-center"
                              }
                            >
                              {ENU_TotalINCOME_AVG !== "" &&
                                userInfo?.roleId !== 9 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ENU_TotalINCOME_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 9 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidENU_TotalINCOME}`}
                                        name="rdCheck6_ENU"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck6_ENU${index}`}
                                        onChange={radioCheckTotalINCOME}
                                        checked={
                                          option.value === checkTotalINCOME
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck6_ENU${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>7. การมีหนี้สินทางการเกษตรเฉลี่ย</td>
                            <td>
                              <b>{`${totalDEBT} บาท`}</b>
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 7 ? "" : "text-center"
                              }
                            >
                              {ACA_TotalDEBT_AVG !== "" &&
                                userInfo?.roleId !== 7 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ACA_TotalDEBT_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 7 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidACA_TotalDEBT}`}
                                        name="rdCheck7_ACA"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck7_ACA${index}`}
                                        onChange={radioCheckTotalDEBT}
                                        checked={
                                          option.value === checkTotalDEBT
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck7_ACA${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 8 ? "" : "text-center"
                              }
                            >
                              {SUB_TotalDEBT_AVG !== "" &&
                                userInfo?.roleId !== 8 && (
                                  <FontAwesomeIcon
                                    icon={
                                      SUB_TotalDEBT_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 8 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidSUB_TotalDEBT}`}
                                        name="rdCheck7_SUB"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck7_SUB${index}`}
                                        onChange={radioCheckTotalDEBT}
                                        checked={
                                          option.value === checkTotalDEBT
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck7_SUB${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 9 ? "" : "text-center"
                              }
                            >
                              {ENU_TotalDEBT_AVG !== "" &&
                                userInfo?.roleId !== 9 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ENU_TotalDEBT_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 9 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidENU_TotalDEBT}`}
                                        name="rdCheck7_ENU"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck7_ENU${index}`}
                                        onChange={radioCheckTotalDEBT}
                                        checked={
                                          option.value === checkTotalDEBT
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck7_ENU${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>8. จำนวนสมาชิกในครัวเรือนเฉลี่ย</td>
                            <td>
                              <b>{`${totalMEMBER} ราย`}</b>
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 7 ? "" : "text-center"
                              }
                            >
                              {ACA_TotalMEMBER_AVG !== "" &&
                                userInfo?.roleId !== 7 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ACA_TotalMEMBER_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 7 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidACA_TotalMEMBER}`}
                                        name="rdCheck8_ACA"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck8_ACA${index}`}
                                        onChange={radioCheckTotalMEMBER}
                                        checked={
                                          option.value === checkTotalMEMBER
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck8_ACA${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 8 ? "" : "text-center"
                              }
                            >
                              {SUB_TotalMEMBER_AVG !== "" &&
                                userInfo?.roleId !== 8 && (
                                  <FontAwesomeIcon
                                    icon={
                                      SUB_TotalMEMBER_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 8 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidSUB_TotalMEMBER}`}
                                        name="rdCheck8_SUB"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck8_SUB${index}`}
                                        onChange={radioCheckTotalMEMBER}
                                        checked={
                                          option.value === checkTotalMEMBER
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck8_SUB${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td
                              className={
                                userInfo?.roleId === 9 ? "" : "text-center"
                              }
                            >
                              {ENU_TotalMEMBER_AVG !== "" &&
                                userInfo?.roleId !== 9 && (
                                  <FontAwesomeIcon
                                    icon={
                                      ENU_TotalMEMBER_AVG === "1"
                                        ? faCheck
                                        : faXmark
                                    }
                                    className="fa-lg"
                                  />
                                )}

                              {userInfo?.roleId === 9 && (
                                <div className="form-group">
                                  {_Triangulation.map((option, index) => (
                                    <div
                                      className="form-check"
                                      key={option.value}
                                    >
                                      <input
                                        className={`form-check-input ${invalidENU_TotalMEMBER}`}
                                        name="rdCheck8_ENU"
                                        type="radio"
                                        value={option.value}
                                        id={`rdCheck8_ENU${index}`}
                                        onChange={radioCheckTotalMEMBER}
                                        checked={
                                          option.value === checkTotalMEMBER
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`rdCheck8_ENU${index}`}
                                      >
                                        {option.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>หมายเหตุ</td>
                            <td></td>
                            <td>
                              {userInfo?.roleId !== 7 && ACA_REMARK}
                              {userInfo?.roleId === 7 && (
                                <Form.Group
                                  className="mt-2"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={inputRemark}
                                    value={remark}
                                  />
                                </Form.Group>
                              )}
                            </td>
                            <td>
                              {userInfo?.roleId !== 8 && SUB_REMARK}
                              {userInfo?.roleId === 8 && (
                                <Form.Group
                                  className="mt-2"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={inputRemark}
                                    value={remark}
                                  />
                                </Form.Group>
                              )}
                            </td>
                            <td>
                              {userInfo?.roleId !== 9 && ENU_REMARK}
                              {userInfo?.roleId === 9 && (
                                <Form.Group
                                  className="mt-2"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={inputRemark}
                                    value={remark}
                                  />
                                </Form.Group>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>

                <Row className="flex-between-center mt-2">
                  <Col
                    md={4}
                    className="col-sm-auto d-flex align-items-center pr-0"
                  >
                    <h5 className="mb-0 py-2 py-xl-0 text-primary">
                      สรุปผลของการนับจดของแต่ละสถานะ
                    </h5>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col md={6}>
                    <ol className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">นับจดและแจงนับ</div>
                          <p className="mb-1">
                            จากการสัมภาษณ์แบบเผชิญหน้า{" "}
                            <span className="badge bg-secondary rounded-pill">
                              {SK1_11}
                            </span>
                          </p>
                          <p className="mb-1">
                            จากผู้ถือครองทำการเกษตรตอบข้อมูลด้วยตนเอง{" "}
                            <span className="badge bg-secondary rounded-pill">
                              {SK1_12}
                            </span>
                          </p>
                        </div>
                        {/* <span className="badge bg-primary rounded-pill">
                          {Number(SK1_11) + Number(SK1_12)}
                        </span> */}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            นับจดแล้วส่งต่อให้เขตปฏิบัติงานอื่น
                          </div>
                          <p className="mb-1">
                            มีทั้งในจังหวัดนี้และจังหวัดอื่น{" "}
                            <span className="badge bg-secondary rounded-pill">
                              {SK1_31}
                            </span>
                          </p>
                          <p className="mb-1">
                            มีเฉพาะจังหวัดอื่น{" "}
                            <span className="badge bg-secondary rounded-pill">
                              {SK1_32}
                            </span>
                          </p>
                        </div>
                        {/* <span className="badge bg-primary rounded-pill">
                          {Number(SK1_31) + Number(SK1_32)}
                        </span> */}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">นับจด</div>
                          แต่ไม่ต้องแจงนับ
                        </div>
                        <span className="badge bg-secondary rounded-pill">
                          {SK1_10}
                        </span>
                      </li>
                    </ol>
                  </Col>

                  <Col md={6}>
                    <ol className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            นับจดแจงนับให้เขตปฏิบัติงานอื่น (สก.12)
                          </div>
                          <p className="mb-1">
                            ไม่ต้องแจงนับ{" "}
                            <span className="badge bg-secondary rounded-pill">
                              {SK1_41}
                            </span>
                          </p>
                          <p className="mb-1">
                            จากการสัมภาษณ์{" "}
                            <span className="badge bg-secondary rounded-pill">
                              {SK1_42}
                            </span>
                          </p>
                          <p className="mb-1">
                            ผู้ถือครองทำการเกษตรตอบข้อมูลด้วยตนเอง{" "}
                            <span className="badge bg-secondary rounded-pill">
                              {SK1_43}
                            </span>
                          </p>
                        </div>
                        {/* <span className="badge bg-primary rounded-pill">
                          {Number(SK1_41) + Number(SK1_42) + Number(SK1_43)}
                        </span> */}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            ติดตามผู้ถือครองทำการเกษตร
                          </div>
                          ตามฐานข้อมูลที่ส่งมาจากเขตปฏิบัติงานอื่น
                          กรณีนับจดไปแล้ว
                        </div>
                        <span className="badge bg-secondary rounded-pill">
                          {SK1_5}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">นับจดไม่ได้</div>
                          บ้านเลขที่ตามฐานข้อมูลไม่มีผู้อาศัยและไม่ทราบร่องรอย
                        </div>
                        <span className="badge bg-secondary rounded-pill">
                          {SK1_0}
                        </span>
                      </li>
                    </ol>
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
                    onClick={() => {
                      userInfo?.roleId === 9
                        ? (window.location.href =
                            process.env.PUBLIC_URL + "/ownerList")
                        : (window.location.href =
                            process.env.PUBLIC_URL + "/triangulationList");
                    }}
                    type="button"
                    className="btn btn-outline-secondary me-2"
                  >
                    หน้ารายการ
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      display:
                        userInfo?.roleId === 9 ||
                        userInfo?.roleId === 8 ||
                        userInfo?.roleId === 7
                          ? ""
                          : "none",
                    }}
                    onClick={() => save()}
                  >
                    บันทึก {loading && <LoadingSpinner />}
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
          <Modal.Header className="header">
            <Modal.Title>{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 style={{ lineHeight: "unset" }}>{msgModal}</h5>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => {
                userInfo?.roleId === 9
                  ? (window.location.href =
                      process.env.PUBLIC_URL + "/appendix")
                  : (window.location.href =
                      process.env.PUBLIC_URL + "/triangulationList");
              }}
              type="button"
              className="btn btn-outline-secondary me-2"
            >
              หน้ารายการ
            </button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
