import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import NavbarMenu from "../components/NavbarMenu";
import { Link} from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Listing2 } from "../model/Listing2";
import { UserInfo } from "../model/UserInfo";
import { APIService } from "../service/APIService";
import ReactPaginate from "react-paginate";
import {
  faCaretDown,
  faHome,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../components/LoadingSpinner";

export default function List() {
  interface CWT {
    cwtCode: string;
    cwtOrder: string;
    cwtName: string;
  }

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

  interface TYPE {
    typeCode: string;
    typeOrder: string;
    typeName: string;
  }

  interface MUN {
    munCode: string;
    munOrder: string;
    munName: string;
  }

  interface VIL {
    vilCode: string;
    vilOrder: string;
    vilName: string;
  }

  const [ddlCwt, setDdlCWT] = useState<CWT[]>();
  const [ddlAMP, setDdlAmp] = useState<AMP[]>([]);
  const [ddlTAM, setDdlTam] = useState<TAM[]>([]);
  const [ddlTYPE, setDdlType] = useState<TYPE[]>([]);
  const [ddlMUN, setDdlMun] = useState<MUN[]>([]);
  const [ddlVIL, setDdlVil] = useState<VIL[]>([]);

  const [cwt, setCWT] = useState<string>("");
  const [amp, setAMP] = useState<string>("");
  const [tam, setTAM] = useState<string>("");
  const [type, setTYPE] = useState<string>("");
  const [mun, setMUN] = useState<string>("");
  const [vil, setVIL] = useState<string>("");

  const [disableCWT, setDisableCWT] = useState<boolean>(false);
  const [disableAMP, setDisableAMP] = useState<boolean>(false);

  const bindingCWT = async () => {
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
        let url_control: string = "";
        if (process.env.REACT_APP_SERVICE_CWT_API) {
          url_control = process.env.REACT_APP_SERVICE_CWT_API;
        }

        await axios
          .get(url_control, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDdlCWT(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS (CWT) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (CWT): ", err);
      }
    }
  };

  const onChangeDdlCwt = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCWT(event.target.value);
    if (event.target.value !== "") {
      let cwtCode: string = event.target.value;   
      bindingAMP(cwtCode);
    }

    setAMP("");
    setTAM("");
    setTYPE("");
    setMUN("");
    setVIL("");

    setDdlAmp([]);
    setDdlTam([]);
    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
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
          url_service_amp_api =
            process.env.REACT_APP_SERVICE_AMP_API + "?cwt=" + cwtCode;
        }

        await axios
          .get(url_service_amp_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
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

  const onChangeDdlAmp = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAMP(event.target.value);
    if (event.target.value !== "") {
      let ampOrder: string = event.target.value;
      bindingTAM(cwt, ampOrder);
    }

    setTAM("");
    setTYPE("");
    setMUN("");
    setVIL("");

    setDdlTam([]);
    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingTAM = async (cwtOrder: string, ampOrder: string) => {
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
              process.env.REACT_APP_SERVICE_TAM_API +
              "?cwt=" +
              cwtOrder +
              "&amp=" +
              ampOrder +
              "&pre=ignore";
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

  const onChangeDdlTam = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTAM(event.target.value);
    if (event.target.value !== "") {
      let tamOrder: string = event.target.value;
      bindingTYPE(cwt, amp, tamOrder);
    }

    setTYPE("");
    setMUN("");
    setVIL("");

    setDdlType([]);
    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingTYPE = async (
    cwtOrder: string,
    ampOrder: string,
    tamOrder: string
  ) => {
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
        let url_service_type_api: string = "";
        if (process.env.REACT_APP_SERVICE_TYPE_API) {
          url_service_type_api =
            process.env.REACT_APP_SERVICE_TYPE_API +
            "?cwt=" +
            cwtOrder +
            "&amp=" +
            ampOrder +
            "&tam=" +
            tamOrder +
            "&pre=ignore";
        }

        console.log(url_service_type_api);

        await axios
          .get(url_service_type_api, {
            headers: api.headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setDdlType(res.data);
            }
          })
          .catch((err) => {
            console.log("AXIOS (TYPE) ERROR: ", err);
          });
      } catch (err) {
        console.error("ERROR (TYPE): ", err);
      }
    }
  };

  const onChangeDdlType = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTYPE(event.target.value);
    if (event.target.value !== "") {
      bindingMUN(cwt, amp, tam);
    }

    setMUN("");
    setVIL("");

    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingMUN = async (
    cwtOrder: string,
    ampOrder: string,
    tamOrder: string
  ) => {
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
        let url_service_mun_api: string = "";
        if (process.env.REACT_APP_SERVICE_MUN_API) {
          url_service_mun_api =
            process.env.REACT_APP_SERVICE_MUN_API +
            "?cwt=" +
            cwtOrder +
            "&amp=" +
            ampOrder +
            "&tam=" +
            tamOrder+
            "&type=" +
            type +
            "&pre=ignore";
        }

        if (cwtOrder !== "" && ampOrder !== "") {
          await axios
            .get(url_service_mun_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setDdlMun(res.data);
              }
            })
            .catch((err) => {
              console.log("AXIOS (MUN) ERROR: ", err);
            });
        }
      } catch (err) {
        console.error("ERROR (MUN): ", err);
      }
    }
  };

  const onChangeDdlMun = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMUN(event.target.value);
    if (event.target.value !== "") {
      let munOrder: string = event.target.value;
      bindingVIL(cwt, amp, tam, munOrder);
    }
    setVIL("");
    setDdlVil([]);
  };

  const bindingVIL = async (
    cwtOrder: string,
    ampOrder: string,
    tamOrder: string,
    munOrder: string
  ) => {
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
            process.env.REACT_APP_SERVICE_VIL_API +
            "?cwt=" +
            cwtOrder +
            "&amp=" +
            ampOrder +
            "&tam=" +
            tamOrder+
            "&mun=" +
            munOrder +
            "&pre=ignore";
        }

        if (cwtOrder !== "" && ampOrder !== "" && tamOrder !== "") {
          await axios
            .get(url_service_vil_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setDdlVil(res.data);
              }
            })
            .catch((err) => {
              console.log("AXIOS (VIL) ERROR: ", err);
            });
        }
      } catch (err) {
        console.error("ERROR (VIL): ", err);
      }
    }
  };

  const onChangeDdlVil = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setVIL(event.target.value);
  };

  const [cookies, setCookie] = useCookies();
  const [listing, setListing] = useState<Listing2[] | null>([]);
  const [userInfo, setUser] = useState<UserInfo | null>(null);

  const [searchHouseNo, setSearchHouseNo] = useState<string>("");
  const [statusL_W, setStatusL_W] = useState<boolean>(false);
  const [statusL_P, setStatusL_P] = useState<boolean>(false);
  const [statusL_C, setStatusL_C] = useState<boolean>(true);
  const [statusE_W, setStatusE_W] = useState<boolean>(false);
  const [statusE_P, setStatusE_P] = useState<boolean>(false);
  const [statusE_C, setStatusE_C] = useState<boolean>(true);
  const [isMakeUp, setIsMakeUp] = useState<boolean>(false);

  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [dataInPage, setDataInPage] = useState<Listing2[][]>([]);
  const [page, setPage] = useState<number>(0);

  //pageload getUser
  useEffect(() => {
    const getUser = async () => {
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
                window.location.href = process.env.REACT_APP_PORTAL + "/logout";
              }
            });
        }
      }
    };

    getUser();
  }, [cookies.token]);

  useEffect(() => {
    const getFilterFromCookie = async () => {
      if(cookies.filter !== "" && cookies.filter !== undefined){
        let base64 = require("base-64");
        let jsonString = base64.decode(cookies.filter);
        const jsonObject = JSON.parse(jsonString);

        if(jsonObject.cwtCode !== ""){
          bindingCWT();
          bindingAMP(jsonObject.cwtCode);
        }

        if(jsonObject.ampCode !== ""){
          bindingTAM(jsonObject.cwtCode, jsonObject.ampCode);
        }

        if(jsonObject.tamCode !== ""){
          bindingTYPE(jsonObject.cwtCode, jsonObject.ampCode, jsonObject.tamCode);
        }

        if(jsonObject.typeCode !== ""){
          bindingMUN(jsonObject.cwtCode, jsonObject.ampCode, jsonObject.tamCode);
        }

        if(jsonObject.munCode !== ""){
          bindingVIL(jsonObject.cwtCode, jsonObject.ampCode, jsonObject.tamCode, jsonObject.munCode);
        }

        setCWT(jsonObject.cwtCode);
        setAMP(jsonObject.ampCode);
        setTAM(jsonObject.tamCode);
        setTYPE(jsonObject.typeCode);
        setMUN(jsonObject.munCode);
        setVIL(jsonObject.vilCode);  
      }
    }

    getFilterFromCookie();
   
  }, [cookies.filter !== "" && cookies.filter !== undefined && cwt !== ""]);

  useEffect(() => {
    if (userInfo !== null) {
      try {
        if (userInfo?.userId !== undefined) {
          bindingCWT();
          if(userInfo.roleId === 5){
            setCWT(userInfo?.cwtCode!);
            setDisableCWT(true);

            bindingAMP(userInfo.cwtCode!);

          }else if(userInfo.roleId === 7){
            setCWT(userInfo?.cwtCode!);
            setDisableCWT(true);

            bindingAMP(userInfo.cwtCode!);
            setAMP(userInfo?.ampCode!);
            setDisableAMP(true);

            bindingTAM(userInfo.cwtCode!, userInfo.ampCode!);
            
          }else if(userInfo.roleId === 8){
            setCWT(userInfo?.cwtCode!);
            setDisableCWT(true);

            bindingAMP(userInfo.cwtCode!);
            setAMP(userInfo?.ampCode!);
            setDisableAMP(true);
            
            bindingTAM(userInfo.cwtCode!, userInfo.ampCode!);
          }else{
            setDisableCWT(false);
            setDisableAMP(false);
          }

        }
      } catch (err) {
        console.error("ERROR (getList): ", err);
      }
    }
  }, [userInfo, cwt]);

  //pagination
  useEffect(() => {
    setListing(dataInPage[page]);
  }, [page, dataInPage]);

  const handlePageChange = (event: { selected: number }) => {
    setPage(event.selected);
  };

  const pagination = async (item: Listing2[] | null) => {
    const page_per: number = 10;
    const pages: number = Math.ceil(item?.length! / page_per);
    setTotalPage(pages);
    const newList: any = Array.from({ length: pages }, (data, index) => {
      const start: number = index * page_per;
      return item?.slice(start, start + page_per);
    });

    return newList;
  };

  const inputSearchHouseNo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchHouseNo(event.target.value);
  };

  const checkStatusL_W = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusL_W(event.target.checked);
  };

  const checkStatusL_P = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusL_P(event.target.checked);
  };

  const checkStatusL_C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusL_C(event.target.checked);
  };

  const checkStatusE_W = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusE_W(event.target.checked);
  };

  const checkStatusE_P = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusE_P(event.target.checked);
  };

  const checkStatusE_C = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusE_C(event.target.checked);
  };

  const checkIsMakeUp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsMakeUp(event.target.checked);
  };

  const [loading, setLoading] = useState(false);

  async function search() {
    setLoading(true);

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
            process.env.REACT_APP_ENUMERATE_API + "/Listing2/getList2";
        }

        const body = {
          CwtCode: cwt,
          AmpCode: amp,
          TamCode: tam,
          TypeCode: type,
          MunCode: mun,
          VilCode: vil,
          IsMakeUp : isMakeUp? "1" : "",
        };

        //console.log(JSON.stringify(body));

        if (cwt !== "") {
          await axios
            .post(url_enumerate_api, JSON.stringify(body), {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                setLoading(false);
                let item: Listing2[];
                item = res.data;

                let filteredItem = item;

                let statusListing: string[] = [];
                if (statusL_W) {
                  statusListing.push("");
                }
                if (statusL_P) {
                  statusListing.push("P");
                }
                if (statusL_C) {
                  statusListing.push("C");
                }

                if (
                  statusL_W &&
                  statusL_P &&
                  statusL_C &&
                  statusE_W &&
                  statusE_P &&
                  statusE_C
                ) {
                  //ไม่ต้องกรอง
                } else {
                  if (statusListing.length > 0) {
                    filteredItem = item.filter((obj) =>
                      statusListing.includes(obj.Status)
                    );
                  }
  
                  if (
                    statusL_W === false &&
                    statusL_P === false &&
                    statusL_C &&
                    statusE_W === false &&
                    statusE_P === false &&
                    statusE_C === false
                  ) {
                    //แสดงค่า สก.1 สำเร็จ
                  } else {
                    //จับคู่ สก.1 สำเร็จ อย่างเดียว
                    if (
                      statusL_W === false &&
                      statusL_P === false &&
                      statusL_C
                    ) {                     
                      //สก.2 เลือกทั้งหมด
                      if (statusE_W && statusE_P && statusE_C) {
                        filteredItem = item.filter((obj) => obj.Status === "C" && obj.AH_CODE !== null);
                      } else if (statusE_W && statusE_P) {
                        filteredItem = item.filter(
                          (obj) =>
                          obj.Status === "C" && 
                            obj.AH_CODE !== null &&
                            (obj.SDATE_A === "" || obj.SDATE_A !== "") &&
                            obj.CDATE_A === ""
                        );
                      } else if (statusE_W && statusE_C) {
                        filteredItem = item.filter(
                          (obj) =>
                          obj.Status === "C" && 
                            obj.AH_CODE !== null &&
                            (obj.SDATE_A === "" || obj.CDATE_A !== "")
                        );
                      } else if (statusE_P && statusE_C) {
                        filteredItem = item.filter(
                          (obj) =>
                          obj.Status === "C" && 
                            obj.AH_CODE !== null &&
                            (obj.SDATE_A !== "" ||
                              obj.SDATE_B !== "" ||
                              obj.SDATE_C !== "" ||
                              obj.CDATE_A !== "" ||
                              obj.CDATE_B !== "" ||
                              obj.CDATE_C !== "")
                        );
                      } else {
                        if (statusE_W) {
                          filteredItem = item.filter(
                            (obj) =>
                            obj.Status === "C" && 
                              obj.AH_CODE !== null &&
                              obj.SDATE_A === "" &&
                              obj.CDATE_A === ""
                          );
                        }

                        if (statusE_P) {
                          filteredItem = item.filter(
                            (obj) =>
                            obj.Status === "C" && 
                              obj.AH_CODE !== null &&
                              obj.SDATE_A !== "" &&
                              obj.CDATE_A === ""
                          );
                        }

                        if (statusE_C) {
                          filteredItem = item.filter(
                            (obj) =>
                            obj.Status === "C" && 
                            obj.AH_CODE !== null &&
                            obj.SDATE_A !== "" &&
                            obj.CDATE_A !== ""
                          );
                        }
                      }
                    }
                  }
                }
  
                if (searchHouseNo !== "") {
                  filteredItem = item.filter((obj) => obj.R02 === searchHouseNo);
                }  
                
                if (userInfo?.roleId === 3){
                  let base64 = require("base-64");
                  let encode = base64.encode(JSON.stringify(body));
                  setCookie("filter", encode, { path: "/" });
                }
               
                setListing(filteredItem);
                setTotalRecords(filteredItem.length);
                const paginate = pagination(filteredItem);
                paginate.then((value: Listing2[][]) => {
                  setDataInPage(value);
                  setPage(0);
                });
              }
            })
            .catch((err) => {
              setLoading(false);
              console.error("AXIOS ERROR: ", err);
            });
        } else {
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.error("Search ERROR: ", err);
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
                    {/* <h5 className='mb-0 py-2 py-xl-0 text-white '>
                      สถานที่ตั้งของเขตปฎิบัติงาน
                    </h5> */}
                  </Col>

                  <Col md={8} className="col-sm-auto ml-auto pl-0">
                    <button
                      className="btn btn-light btn-sm mr-1 float-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseList"
                      aria-expanded="false"
                      aria-controls="collapseList"
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className="card-menu">
                <div className="collapse show" id="collapseList">
                  <Row>
                    <Col md={12}>
                      <Row className="mt-2 mb-2">
                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">จังหวัด</label>
                            <select
                              className={`form-select`}
                              onChange={onChangeDdlCwt}
                              value={cwt}
                              disabled={disableCWT}
                            >
                              <option value="">ทุกจังหวัด</option>
                              {ddlCwt &&
                                ddlCwt.map((d) => (
                                  <option key={d.cwtCode} value={d.cwtCode}>
                                    {`${d.cwtCode}-${d.cwtName}`}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </Col>

                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">อำเภอ</label>
                            <select
                              className={`form-select mt-1`}
                              onChange={onChangeDdlAmp}
                              value={amp}
                              disabled={disableAMP}
                            >
                              <option value="">ทุกอำเภอ</option>
                              {ddlAMP &&
                                ddlAMP.map((d, index) => (
                                  <option key={index} value={d.ampOrder!}>
                                    {`${d.ampOrder!}-${d.ampName!}`}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </Col>

                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">ตำบล</label>
                            <select
                              className={`form-select mt-1`}
                              onChange={onChangeDdlTam}
                              value={tam}
                            >
                              <option value="">ทุกตำบล</option>
                              {ddlTAM &&
                                ddlTAM.map((d, index) => (
                                  <option key={index} value={d.tamOrder!}>
                                    {`${d.tamOrder!}-${d.tamName!}`}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </Col>

                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">ประเภทเขตเทศบาล</label>
                            <select
                              className={`form-select mt-1`}
                              onChange={onChangeDdlType}
                              value={type}
                            >
                              <option value="">ทุกประเภทเขตเทศบาล</option>
                              {ddlTYPE &&
                                ddlTYPE.map((d, index) => (
                                  <option key={index} value={d.typeOrder!}>
                                    {`${d.typeOrder!}-${d.typeName!}`}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mb-2">
                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">เทศบาล</label>
                            <select
                              className={`form-select mt-1`}
                              onChange={onChangeDdlMun}
                              value={mun}
                            >
                              <option value="">ทุกเทศบาล</option>
                              {ddlMUN &&
                                ddlMUN.map((d, index) => (
                                  <option key={index} value={d.munOrder!}>
                                    {`${d.munOrder!}-${d.munName!}`}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </Col>

                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">หมู่บ้าน</label>
                            <select
                              className={`form-select mt-1`}
                              onChange={onChangeDdlVil}
                              value={vil}
                            >
                              <option value="">ทุกหมู่บ้าน</option>
                              {ddlVIL &&
                                ddlVIL.map((d, index) => (
                                  <option key={index} value={d.vilOrder!}>
                                    {`${d.vilOrder!}-${d.vilName!}`}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </Col>

                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">บ้านเลขที่</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={inputSearchHouseNo}
                            />
                          </div>
                        </Col>

                        <Col md={3}>
                          <div className="form-group">
                            <div className="form-check">
                              <br></br>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="cbIsMakeup"
                                onChange={checkIsMakeUp}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="cbIsMakeup"
                              >
                                {" "}
                                Make up
                              </label>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row className="mb-2">
                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">สถานะ สก.1</label>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="statusL_W"
                                onChange={checkStatusL_W}
                                checked={statusL_W}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="statusL_W"
                              >
                                {" "}
                                รอดำเนินการ
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="statusL_P"
                                onChange={checkStatusL_P}
                                checked={statusL_P}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="statusL_P"
                              >
                                {" "}
                                กำลังดำเนินการ
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="statusL_C"
                                onChange={checkStatusL_C}
                                checked={statusL_C}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="statusL_C"
                              >
                                {" "}
                                สำเร็จ
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={3}>
                          <div className="form-group">
                            <label className="mb-0">สถานะ สก.2</label>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="statusE_W"
                                onChange={checkStatusE_W}
                                checked={statusE_W}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="statusE_W"
                              >
                                {" "}
                                รอดำเนินการ
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="statusE_P"
                                onChange={checkStatusE_P}
                                checked={statusE_P}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="statusE_P"
                              >
                                {" "}
                                กำลังดำเนินการ
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="statusE_C"
                                onChange={checkStatusE_C}
                                checked={statusE_C}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="statusE_C"
                              >
                                {" "}
                                สำเร็จ
                              </label>
                            </div>
                          </div>
                        </Col>

                        <Col md={3}>
                          <div className="mt-2">
                            <button
                              className="btn btn-primary"
                              onClick={search}
                            >
                              ค้นหา {loading && <LoadingSpinner />}
                            </button>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="table-responsive">
                            <label className="mb-2 badge rounded-pill bg-secondary py-1 px-2">
                              {totalRecords}
                            </label>{" "}
                            รายการ
                            <table className="table table-bordered mb-2">
                              <thead className="table-secondary text-nowrap">
                                <tr>
                                  <th scope="col">บ้านเลขที่</th>
                                  <th
                                    scope="col"
                                    colSpan={2}
                                    style={{ textAlign: "center" }}
                                  >
                                    แบบคุมยอดและนับจด (สก.1)
                                  </th>
                                  <th scope="col">ชื่อพนักงานแจงนับ</th>
                                  <th scope="col">วันที่เริ่มปฎิบัติงาน</th>
                                  <th scope="col">วันที่ปฎิบัติงานแล้วเสร็จ</th>
                                  <th
                                    scope="col"
                                    colSpan={2}
                                    style={{ textAlign: "center" }}
                                  >
                                    แบบแจงนับ (สก.2)
                                  </th>
                                  <th scope="col">ชื่อพนักงานแจงนับ</th>
                                  <th scope="col">วันที่เริ่มปฎิบัติงาน</th>
                                  <th scope="col">วันที่ปฎิบัติงานแล้วเสร็จ</th>
                                </tr>
                              </thead>
                              <tbody>
                                {listing &&
                                  listing.map((item, index) => {
                                    return (
                                      <tr key={index + 1}>
                                        <td>
                                          {item.R02}
                                          <span
                                            className="ms-1 position-relative"
                                            style={{
                                              display:
                                                Number(item.R08) > 1
                                                  ? ""
                                                  : "none",
                                            }}
                                          >
                                            <FontAwesomeIcon icon={faHome} />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                              {item.R09}
                                            </span>
                                          </span>
                                          <span
                                            style={{
                                              display:
                                                Number(item.R12) === 0
                                                  ? "none"
                                                  : "",
                                            }}
                                          >
                                            {" "}
                                            <FontAwesomeIcon
                                              icon={faLayerGroup}
                                            />
                                          </span>
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                          <span
                                            className={
                                              item.Status === "P"
                                                ? "badge bg-secondary"
                                                : item.Status === "C"
                                                ? "badge bg-success"
                                                : ""
                                            }
                                          >
                                            {item.Status === "P"
                                              ? "กำลังดำเนินการ"
                                              : item.Status === "C"
                                              ? "สำเร็จ"
                                              : "รอดำเนินการ"}
                                          </span>
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                          <Link
                                            to={"/detailListing"}
                                            state={`${item.TempKey}`}
                                            className="btn btn-primary"
                                          >
                                            สก.1
                                          </Link>
                                        </td>
                                        <td>{item.ENU_A}</td>
                                        <td>
                                          {item.ST_A !== "" &&
                                            `${item.ST_A}/${item.ST_B}/${item.ST_C}`}
                                        </td>
                                        <td>
                                          {item.FN_A !== "" &&
                                            `${item.FN_A}/${item.FN_B}/${item.FN_C}`}
                                        </td>
                                        <td
                                          style={{
                                            textAlign: "center",
                                          }}
                                        >
                                          <span
                                            className={
                                              item.SDATE_A === "" &&
                                              item.SDATE_B === "" &&
                                              item.SDATE_C === ""
                                                ? ""
                                                : item.CDATE_A !== "" &&
                                                  item.CDATE_B !== "" &&
                                                  item.CDATE_C !== ""
                                                ? "badge bg-success"
                                                : "badge bg-secondary"
                                            }
                                            style={{
                                              display:
                                                item.AH_CODE === null
                                                  ? "none"
                                                  : "",
                                            }}
                                          >
                                            {item.SDATE_A === "" &&
                                            item.SDATE_B === "" &&
                                            item.SDATE_C === ""
                                              ? "รอดำเนินการ"
                                              : item.CDATE_A !== "" &&
                                                item.CDATE_B !== "" &&
                                                item.CDATE_C !== ""
                                              ? "สำเร็จ"
                                              : "กำลังดำเนินการ"}
                                          </span>
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                          <Link
                                            to={"/enumerateDetail"}
                                            state={`${item.AH_CODE}`}
                                            className="btn btn-primary"
                                            style={{
                                              display:
                                                item.AH_CODE === null
                                                  ? "none"
                                                  : "",
                                            }}
                                          >
                                            สก.2
                                          </Link>
                                        </td>
                                        <td>
                                          {item.AH_CODE !== null && item.P1_A}
                                        </td>
                                        <td>
                                          {item.AH_CODE !== null &&
                                            item.SDATE_A !== "" &&
                                            `${item.SDATE_A}/${item.SDATE_B}/${item.SDATE_C}`}
                                        </td>
                                        <td>
                                          {item.AH_CODE !== null &&
                                            item.CDATE_A !== "" &&
                                            `${item.CDATE_A}/${item.CDATE_B}/${item.CDATE_C}`}
                                        </td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                            <ReactPaginate
                              previousLabel={"Previous"}
                              nextLabel={"Next"}
                              pageCount={totalPage}
                              containerClassName={"pagination"}
                              pageClassName={"page-item"}
                              pageLinkClassName={"page-link"}
                              previousClassName={"page-item"}
                              previousLinkClassName={"page-link"}
                              nextClassName={"page-item"}
                              nextLinkClassName={"page-link"}
                              breakLabel={"..."}
                              breakClassName={"page-item"}
                              breakLinkClassName={"page-link"}
                              activeClassName={"active"}
                              onPageChange={handlePageChange}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
