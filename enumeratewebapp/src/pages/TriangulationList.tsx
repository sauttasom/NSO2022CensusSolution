import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import NavbarMenu from "../components/NavbarMenu";

import "react-datepicker/dist/react-datepicker.css";
import ReactPaginate from "react-paginate";
import { APIService } from "../service/APIService";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { UserInfo } from "../model/UserInfo";
import { TriangulationInfo } from "../model/TriangulationInfo";
import LoadingSpinner from "../components/LoadingSpinner";

export default function TriangulationList() {
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
    if (event.target.value !== "") {
      let ampOrder: string = event.target.value;
      setAMP(ampOrder);
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

        if(userInfo?.roleId! === 8){
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_service_tam_api =
              process.env.REACT_APP_ENUMERATE_API + `/Triangulation/mapUserControl/${userInfo?.userId!}`;
          }
        }else{
          if (process.env.REACT_APP_SERVICE_TAM_API) {
            url_service_tam_api =
              process.env.REACT_APP_SERVICE_TAM_API +
              "?cwt=" +
              cwtOrder +
              "&amp=" +
              ampOrder +
              "&pre=ignore";
          }
  
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
    if (event.target.value !== "") {
      let tamOrder: string = event.target.value;
      setTAM(tamOrder);
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
    if (event.target.value !== "") {
      setTYPE(event.target.value);
      bindingMUN(cwt, amp, tam, event.target.value);
    }

    setMUN("");
    setVIL("");

    setDdlMun([]);
    setDdlVil([]);
  };

  const bindingMUN = async (
    cwtOrder: string,
    ampOrder: string,
    tamOrder: string,
    type: string
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
    if (event.target.value !== "") {
      let munOrder: string = event.target.value;
      setMUN(munOrder);
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

  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const [userInfo, setUser] = useState<UserInfo | null>(null);

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

  }, [cookies.token, navigate]);

  useEffect(() => {
    if (userInfo !== null) {
      const getList = async () => {
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
      };

      getList();
    }
  }, [userInfo, cwt]);

  const [loading, setLoading] = useState(false);
  const [triangulation, setTriangulation] = useState<
    TriangulationInfo[] | null
  >([]);

  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [dataInPage, setDataInPage] = useState<TriangulationInfo[][]>([]);
  const [page, setPage] = useState<number>(0);

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
            process.env.REACT_APP_ENUMERATE_API + "/Triangulation/getList";
        }

        const body = {
          roleId: userInfo?.roleId,
          userId: userInfo?.userId,
          cwtCode: cwt,
          ampCode: amp,
          tamCode: tam,
          typeCode: type,
          munCode: mun,
          vilCode: vil,
        };

        //console.log(JSON.stringify(body));     

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setLoading(false);
              let item: TriangulationInfo[];
              item = res.data;

              let filteredItem = item;

              setTriangulation(filteredItem);
              setTotalRecords(filteredItem.length);
              const paginate = pagination(filteredItem);
              paginate.then((value: TriangulationInfo[][]) => {
                setDataInPage(value);
                setPage(0);
              });
            }
          })
          .catch((err) => {
            setLoading(false);
            console.error("AXIOS ERROR: ", err);
          });
      } catch (err) {
        setLoading(false);
        console.error("Search ERROR: ", err);
      }
    }
  }

  const pagination = async (item: TriangulationInfo[] | null) => {
    const page_per: number = 10;
    const pages: number = Math.ceil(item?.length! / page_per);
    setTotalPage(pages);
    const newList: any = Array.from({ length: pages }, (data, index) => {
      const start: number = index * page_per;
      return item?.slice(start, start + page_per);
    });

    return newList;
  };

  //pagination
  useEffect(() => {
    setTriangulation(dataInPage[page]);
  }, [page, dataInPage]);


  const handlePageChange = (event: { selected: number }) => {
    setPage(event.selected);
  };

  return (
    <div>
      <NavbarMenu />

      <Container className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col md={12}>
            <Card className="card-border">
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
                  <Col md={2}>
                    <div className="form-group">
                      <label className="mb-0">จังหวัด</label>
                      <select
                        className="form-select mt-1"
                        onChange={onChangeDdlCwt}
                        value={cwt}
                        disabled={disableCWT}
                      >
                        <option value="">จังหวัด</option>
                        {ddlCwt &&
                          ddlCwt.map((d, index) => (
                            <option key={index} value={d.cwtCode!}>
                              {`${d.cwtCode!}-${d.cwtName!}`}
                            </option>
                          ))}
                      </select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="form-group">
                      <label className="mb-0">อำเภอ</label>
                      <select
                        className="form-select mt-1"
                        onChange={onChangeDdlAmp}
                        value={amp}
                        disabled={disableAMP}
                      >
                        <option value="">อำเภอ</option>
                        {ddlAMP &&
                          ddlAMP.map((d, index) => (
                            <option key={index} value={d.ampOrder!}>
                              {`${d.ampOrder!}-${d.ampName!}`}
                            </option>
                          ))}
                      </select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="form-group">
                      <label className="mb-0">ตำบล</label>
                      <select
                        className="form-select mt-1"
                        onChange={onChangeDdlTam}
                        value={tam}
                      >
                        <option value="">ตำบล</option>
                        {ddlTAM &&
                          ddlTAM.map((d, index) => (
                            <option key={index} value={d.tamOrder!}>
                              {`${d.tamOrder!}-${d.tamName!}`}
                            </option>
                          ))}
                      </select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="form-group">
                      <label className="mb-0">ประเภทเทศบาล</label>
                      <select
                        className="form-select mt-1"
                        onChange={onChangeDdlType}
                        value={type}
                      >
                        <option value="">ประเภทเทศบาล</option>
                        {ddlTYPE &&
                          ddlTYPE.map((d, index) => (
                            <option key={index} value={d.typeOrder!}>
                              {`${d.typeOrder!}-${d.typeName!}`}
                            </option>
                          ))}
                      </select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="form-group">
                      <label className="mb-0">เทศบาล</label>
                      <select
                        className="form-select mt-1"
                        onChange={onChangeDdlMun}
                        value={mun}
                      >
                        <option value="">เทศบาล</option>
                        {ddlMUN &&
                          ddlMUN.map((d, index) => (
                            <option key={index} value={d.munOrder!}>
                              {`${d.munOrder!}-${d.munName!}`}
                            </option>
                          ))}
                      </select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="form-group">
                      <label className="mb-0">หมู่บ้าน</label>
                      <select
                        className="form-select mt-1"
                        onChange={onChangeDdlVil}
                        value={vil}
                      >
                        <option value="">หมู่ที่</option>
                        {ddlVIL &&
                          ddlVIL.map((d, index) => (
                            <option key={index} value={d.vilOrder!}>
                              {`${d.vilOrder!}-${d.vilName!}`}
                            </option>
                          ))}
                      </select>
                    </div>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col md={2}>
                    <br></br>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        search();
                      }}
                    >
                      ค้นหา {loading && <LoadingSpinner />}
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Row className="mt-2">
              <Col md={12}>
                <Card className="card-border">
                  <Card.Body className="card-menu">
                    <div className="table-responsive mb-2">
                      <label className="mb-2 badge rounded-pill bg-secondary py-1 px-2">
                        {totalRecords}
                      </label>{" "}
                      รายการ
                      <table className="table table-bordered mb-2">
                        <thead className="table-secondary text-nowrap">
                          <tr style={{ textAlign: "center" }}>
                            <th scope="col">#</th>
                            <th scope="col">เจ้าหน้าที่วิชาการ</th>
                            <th scope="col">ผู้ประสานงานในพื้นที่ </th>
                            <th scope="col">พนักงานแจงนับ </th>
                            <th scope="col">จังหวัด</th>
                            <th scope="col">อำเภอ</th>
                            <th scope="col">ตำบล</th>
                            <th scope="col">หมู่บ้าน</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {triangulation &&
                            triangulation.map((item, index) => {
                              return (
                                <tr key={index + 1}>
                                  <td>{index + 1}</td>
                                  <td style={{ whiteSpace: "nowrap" }}>
                                    <span
                                      style={{
                                        color:
                                          item.ACA_TotalAH_NO === "" ||
                                          item.ACA_TotalActivity === "" ||
                                          item.ACA_TotalA07_AVG === "" ||
                                          item.ACA_TotalA07_MAX === "" ||
                                          item.ACA_TotalA07_MIN === "" ||
                                          item.ACA_TotalINCOME_AVG === "" ||
                                          item.ACA_TotalDEBT_AVG === "" ||
                                          item.ACA_TotalMEMBER_AVG === ""
                                            ? "#B7C4CF"
                                            : item.ACA_TotalAH_NO === "0" ||
                                              item.ACA_TotalActivity === "0" ||
                                              item.ACA_TotalA07_AVG === "0" ||
                                              item.ACA_TotalA07_MAX === "0" ||
                                              item.ACA_TotalA07_MIN === "0" ||
                                              item.ACA_TotalINCOME_AVG ===
                                                "0" ||
                                              item.ACA_TotalDEBT_AVG === "0" ||
                                              item.ACA_TotalMEMBER_AVG === "0"
                                            ? "#D2001A"
                                            : "#82CD47",
                                      }}
                                    >
                                      <FontAwesomeIcon icon={faCircle} />
                                    </span>{" "}
                                    {item.ACA_NAME}
                                  </td>
                                  <td style={{ whiteSpace: "nowrap" }}>
                                    <span
                                      style={{
                                        color:
                                          item.SUB_TotalAH_NO === "" ||
                                          item.SUB_TotalActivity === "" ||
                                          item.SUB_TotalA07_AVG === "" ||
                                          item.SUB_TotalA07_MAX === "" ||
                                          item.SUB_TotalA07_MIN === "" ||
                                          item.SUB_TotalINCOME_AVG === "" ||
                                          item.SUB_TotalDEBT_AVG === "" ||
                                          item.SUB_TotalMEMBER_AVG === ""
                                            ? "#B7C4CF"
                                            : item.SUB_TotalAH_NO === "0" ||
                                              item.SUB_TotalActivity === "0" ||
                                              item.SUB_TotalA07_AVG === "0" ||
                                              item.SUB_TotalA07_MAX === "0" ||
                                              item.SUB_TotalA07_MIN === "0" ||
                                              item.SUB_TotalINCOME_AVG ===
                                                "0" ||
                                              item.SUB_TotalDEBT_AVG === "0" ||
                                              item.SUB_TotalMEMBER_AVG === "0"
                                            ? "#D2001A"
                                            : "#82CD47",
                                      }}
                                    >
                                      <FontAwesomeIcon icon={faCircle} />
                                    </span>{" "}
                                    {item.SUB_NAME}
                                  </td>
                                  <td style={{ whiteSpace: "nowrap" }}>
                                    <span
                                      style={{
                                        color:
                                          item.ENU_TotalAH_NO === "" ||
                                          item.ENU_TotalActivity === "" ||
                                          item.ENU_TotalA07_AVG === "" ||
                                          item.ENU_TotalA07_MAX === "" ||
                                          item.ENU_TotalA07_MIN === "" ||
                                          item.ENU_TotalINCOME_AVG === "" ||
                                          item.ENU_TotalDEBT_AVG === "" ||
                                          item.ENU_TotalMEMBER_AVG === ""
                                            ? "#B7C4CF"
                                            : item.ENU_TotalAH_NO === "0" ||
                                              item.ENU_TotalActivity === "0" ||
                                              item.ENU_TotalA07_AVG === "0" ||
                                              item.ENU_TotalA07_MAX === "0" ||
                                              item.ENU_TotalA07_MIN === "0" ||
                                              item.ENU_TotalINCOME_AVG ===
                                                "0" ||
                                              item.ENU_TotalDEBT_AVG === "0" ||
                                              item.ENU_TotalMEMBER_AVG === "0"
                                            ? "#D2001A"
                                            : "#82CD47",
                                      }}
                                    >
                                      <FontAwesomeIcon icon={faCircle} />
                                    </span>{" "}
                                    {item.ENU_NAME}
                                  </td>
                                  <td>{`${item.CWT}-${item.CWTN}`}</td>
                                  <td>{`${item.AMP}-${item.AMPN}`}</td>
                                  <td>{`${item.TAM}-${item.TAMN}`}</td>
                                  <td>{`${item.VIL}-${item.VILN}`}</td>
                                  <td style={{ textAlign: "center" }}>
                                    <Link
                                      to={"/triangulationDetail"}
                                      state={`${item.AREA_CODE}`}
                                      className="btn btn-primary"
                                    >
                                      ดูข้อมูล
                                    </Link>
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

                    <div className="form-group">
                      <span className="me-2" style={{ color: "#B7C4CF" }}>
                        <FontAwesomeIcon icon={faCircle} />
                      </span>
                      <label>รอยืนยันข้อมูล</label>
                    </div>

                    <div className="form-group">
                      <span className="me-2" style={{ color: "#82CD47" }}>
                        <FontAwesomeIcon icon={faCircle} />
                      </span>
                      <label>ยืนยันข้อมูลเรียบร้อยแล้ว</label>
                    </div>

                    <div className="form-group">
                      <span className="me-2" style={{ color: "#D2001A" }}>
                        <FontAwesomeIcon icon={faCircle} />
                      </span>
                      <label>มีข้อมูลไ่ม่ถูกต้อง</label>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
