import { useState, useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Listing2 } from "../model/Listing2";
import { Listing2Context } from "../components/Listing2Context";
import { UserInfo } from "../model/UserInfo";
import { useCookies } from "react-cookie";
import { UserContext } from "../components/UserContext";
import CAgricultural2 from "../components/CAgricultural2";
import CFarming2 from "../components/CFarming2";
import CVerify2 from "../components/CVerify2";
import SummarySK1 from "../components/SummarySK1";

export default function ListingDetail() {

  let defaultValue: Listing2 = {
    TempKey: 0,
    AREA_CODE: "",
    REG: "",
    REGN: "",
    CWT: "",
    CWTN: "",
    AMP: "",
    AMPN: "",
    TAM: "",
    TAMN: "",
    TYPE: "",
    MUN: "",
    MUNN: "",
    VIL: "",
    VILN: "",
    VILT: "",
    ST_A: "",
    ST_B: "",
    ST_C: "",
    ST_Time: "",
    FN_A: "",
    FN_B: "",
    FN_C: "",
    FN_Time: "",
    ENU_A: "",
    ENU_B: "",
    ENU_C: "",
    ACA_A: "",
    ACA_B: "",
    ACA_C: "",
    SUB_A: "",
    SUB_B: "",
    SUB_C: "",
    ENO: "",
    F1CODE: "",
    Eadd_A: "",
    Eadd_B: "",
    Eadd_C: "",
    Eadd_D: "",
    Ename_A: "",
    Ename_AT: "",
    Ename_B: "",
    Ename_C: "",
    Esex: "",
    EPID: "",
    EBD: "",
    ESI: "",
    status1: "",
    R01: "",
    R02: "",
    R03_A: "",
    R03_B: "",
    R03_C: "",
    lat: "",
    long: "",
    R07: "",
    R08: "",
    R08_sub: "",
    R09: "",
    R10: "",
    R11: "",
    R12: "",
    R12_sub: "",
    R13_A: "",
    R13_AT: "",
    R13_B: "",
    R13_C: "",
    R14: "",
    R15: "",
    R16_A: "",
    R16_B: "",
    R16_C: "",
    R17: "",
    R18: "",
    R19: "",
    R20: "",
    R21: "",
    R22: "",
    R23: "",
    R24: "",
    R25: "",
    R26: "",
    R27: "",
    Status2: "",
    R28: "",
    R29_A: "",
    R29_AT: "",
    R29_B: "",
    R29_C: "",
    R29_D: "",
    R29_E: "",
    R29_F: "",
    R29_G: "",
    R29_H: "",
    R29_I: "",
    R30: "",
    R31: "",
    R32: "",
    R33: "",
    R34: "",
    R35: "",
    R36: "",
    R37_A: "",
    R37_B: "",
    R37_C: "",
    R37_D: "",
    R37_E: "",
    R37_F: "",
    R37_G: "",
    ENU: "",
    AH_CODE: "", //Enumerate
    AH_CODE1: "", //TempListing
    FromE: "",
    Status: "",
    Active: "",
    IsTracking: "",
    TrackingStatus: "",
    IsMakeUp: "",
    SDATE_A: "",
    SDATE_B: "",
    SDATE_C: "",
    CDATE_A: "",
    CDATE_B: "",
    CDATE_C: "",
    P1_A: "",
    FROM_AREA_CODE: "",
    FROM_ADD: "",
  };

    const location = useLocation();
    const KEY_AREA_R01 = location.state;
    const [listing, setListing] = useState<Listing2>();
  
    const [userInfo, setUser] = useState<UserInfo | null>(null);
  
    const [cookies] = useCookies(["token"]);
    const [cookiesKey] = useCookies(["key"]);
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
  
      async function getDetail() {
        let url_enumerate_api: string = "";
  
        let base64 = require("base-64");
        let basic_auth: string = "";
  
        if (process.env.REACT_APP_BASIC_AUTH_API) {
          basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
        }
        
        let key: string =
        KEY_AREA_R01 === null ? base64.decode(cookiesKey.key) : KEY_AREA_R01;
  
        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API + `/Listing2/getDetail/${key}`;
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
              setListing(res.data[0]);
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
      }
      getUser();
      if (parameter.type === "new") {
      } else {
        getDetail();
      }
    }, [KEY_AREA_R01, cookies.token, navigate, parameter, cookiesKey.key]);
  
    const [page, setPage] = useState<number>(1);
    const [noFarmer, setNoFarmer] = useState<boolean>(false);
  
    return (
      <div>
        <NavbarMenu />
        <UserContext.Provider value={{ userInfo, setUser }}>
          <Listing2Context.Provider
            value={{ listing: listing || defaultValue, setListing, noFarmer, setNoFarmer, page, setPage }}
          >
            <div style={{ display: page === 1 ? "" : "none" }}>
              {listing && page === 1 && <CAgricultural2 />}
            </div>
  
            <div style={{ display: page === 2 ? "" : "none" }}>
              {listing && page === 2 && <CFarming2 />}
            </div>
  
            <div style={{ display: page === 3 ? "" : "none" }}>
              {listing && page === 3 && <CVerify2 />}
            </div>

            <div style={{ display: page === 4 ? "" : "none" }}>
              {listing && page === 4 && <SummarySK1 />}
            </div>
          </Listing2Context.Provider>
        </UserContext.Provider>
      </div>
    );
}
