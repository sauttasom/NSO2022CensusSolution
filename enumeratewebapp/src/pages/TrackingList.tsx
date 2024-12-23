import { faCaretDown, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import NavbarMenu from "../components/NavbarMenu";
import { UserInfo } from "../model/UserInfo";
import { APIService } from "../service/APIService";
import LoadingSpinner from "../components/LoadingSpinner";

export default function TrackingList() {
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

  interface Tracking {
    TRACKING_KEY: number;
    CWT: string;
    CWTN: string;
    AMP: string;
    AMPN: string;
    TAM: string;
    TAMN: string;
    MUN: string;
    MUNN: string;
    VIL: string;
    VILN: string;
    R02: string;
    TYPE_TRACKING: string;
    CWT_FROM: string;
    CWTN_FROM: string;
    AMP_FROM: string;
    AMPN_FROM: string;
    TAM_FROM: string;
    TAMN_FROM: string;
    VIL_FROM: string;
    VILN_FROM: string;
    ADD_FROM: string;
    CWT_TO: string;
    CWTN_TO: string;
    AMP_TO: string;
    AMPN_TO: string;
    TAM_TO: string;
    TAMN_TO: string;
    VIL_TO: string;
    VILN_TO: string;
    ADD_TO: string;
    IS_SEND: string;
    TempKey: number;
    loading: boolean;
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
            ampOrder;
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
            tamOrder;
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
            type;
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
            tamOrder +
            "&mun=" +
            munOrder;
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

  const [userInfo, setUser] = useState<UserInfo | null>(null);
  const [cookies] = useCookies();

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
                bindingCWT();
              } else {                
                window.location.href = process.env.REACT_APP_PORTAL + "/logout";
              }
            });
        }
      }
    };

    getUser();
  }, [cookies.token]);

  const [trackinglist, setTrackingList] = useState<Tracking[] | null>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [dataInPage, setDataInPage] = useState<Tracking[][]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  //pagination
  useEffect(() => {
    setTrackingList(dataInPage[page]);
  }, [page, dataInPage]);

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
            process.env.REACT_APP_ENUMERATE_API + "/Listing2/getTrackingList";
        }

        const body = {
          cwtCode: cwt,
          ampCode: amp,
          tamCode: tam,
          typeCode: type,
          munCode: mun,
          vilCode: vil,
        };

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setLoading(false);
              let item: Tracking[];
              item = res.data;

              setTotalRecords(item.length);
              const paginate = pagination(item);
              paginate.then((value: Tracking[][]) => {
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

  const pagination = async (item: Tracking[] | null) => {
    const page_per: number = 12;
    const pages: number = Math.ceil(item?.length! / page_per);
    setTotalPage(pages);
    const newList: any = Array.from({ length: pages }, (data, index) => {
      const start: number = index * page_per;
      return item?.slice(start, start + page_per);
    });

    return newList;
  };

  const handlePageChange = (event: { selected: number }) => {
    setPage(event.selected);
  };

  //modal popup
  const [trakcingKey, setTrackingKey] = useState<number>(0);
  const [tempKey, setTempKey] = useState<number>(0);
  const [progress, setProgress] = useState(false);

  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [msgModal, setMsgModal] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendTrack_handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: number,
    tempKey: number
  ) => {
    event.preventDefault();
    const updatedTrackingList =
      trackinglist &&
      trackinglist.map((item) => ({
        ...item,
        loading: item.TRACKING_KEY === key,
      }));
    setTrackingList(updatedTrackingList);
    setTitleModal("ยืนยันการส่งข้อมูลไปยังปลายทาง");
    setMsgModal(`กดปุ่ม "ยืนยันส่งข้อมูล" เพื่อส่งข้อมูลไปยังปลายทาง`);
    setTrackingKey(key);
    setTempKey(tempKey);
    handleShow();
  };

  async function confirm(tracking_key: number,temp_Key: number) {
    //call api
    setProgress(true);
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
            `/Listing2/sendTrackToDestination`;
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
          TRACKING_KEY: tracking_key,
          TempKey: temp_Key,
        };

        console.log(JSON.stringify(body));
        
        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              const updatedTrackingList = trackinglist && trackinglist.map((item) => {
                if (item.TRACKING_KEY === tracking_key) {
                  return {
                    ...item,
                    IS_SEND: "1",
                    loading: false,
                  };
                }
                return item;
              });
              setTrackingList(updatedTrackingList);
              setProgress(false);
              handleClose();
            }
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
            setProgress(false);
          });
      } catch (err) {
        console.error("ERROR (sendTrack_handleClick): ", err);
        setProgress(false);
      }
    }
  }

  async function cancle( key: number) {
    const updatedTrackingList = trackinglist && trackinglist.map((item) => {
      if (item.TRACKING_KEY === key) {
        return {
          ...item,
          loading: false,
        };
      }
      return item;
    });
    setTrackingList(updatedTrackingList);
    handleClose();
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
                      ระบบติดตามผู้ถือครองทำการเกษตร (Tracking)
                    </h5>
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
                  <Row className="mt-2 mb-2">
                    <Col md={2}>
                      <div className="form-group">
                        <label className="mb-0">จังหวัด</label>
                        <select
                          className="form-select"
                          onChange={onChangeDdlCwt}
                          value={cwt}
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

                    <Col md={2}>
                      <div className="form-group">
                        <label className="mb-0">อำเภอ</label>
                        <select
                          className="form-select"
                          onChange={onChangeDdlAmp}
                          value={amp}
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

                    <Col md={2}>
                      <div className="form-group">
                        <label className="mb-0">ตำบล</label>
                        <select
                          className="form-select"
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

                    <Col md={2}>
                      <div className="form-group">
                        <label className="mb-0">ประเภทเทศบาล</label>
                        <select
                          className="form-select"
                          onChange={onChangeDdlType}
                          value={type}
                        >
                          <option value="">ทุกประเภทเทศบาล</option>
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
                          className="form-select"
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

                    <Col md={2}>
                      <div className="form-group">
                        <label className="mb-0">หมู่บ้าน</label>
                        <select
                          className="form-select"
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
                  </Row>

                  <Row>
                    <Col md={2}>
                      <button
                        className="btn btn-primary"
                        style={{ marginTop: "17px" }}
                        onClick={search}
                      >
                        ค้นหา {loading && <LoadingSpinner />}
                      </button>
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col md={12}>
                      <label className="badge rounded-pill bg-secondary py-1 px-2">
                        {totalRecords}
                      </label>{" "}
                      รายการ
                    </Col>
                    {trackinglist &&
                      trackinglist.map((item, i) => (
                        <Col md={3} key={i}>
                          <div className="table-responsive">
                            <Card className="mt-2">
                              <Card.Header
                                style={{ backgroundColor: "#0281743c" }}
                              >
                                <b>Tracking</b>
                              </Card.Header>
                              <Card.Body
                                style={{ backgroundColor: "#e7e9ed91" }}
                              >
                                <Row>
                                  <Col md={12}>
                                    <ul className="list-group list-group-flush">
                                      <li className="list-group-item">
                                        <b>ต้นทาง</b>
                                      </li>
                                      <li className="list-group-item">
                                        <p>{`บ้านเลขที่ : ${item.ADD_FROM}`}</p>
                                        <p>{`จังหวัด : ${item.CWT_FROM}-${item.CWTN_FROM}`}</p>
                                        <p>{`อำเภอ : ${item.AMP_FROM}-${item.AMPN_FROM}`}</p>
                                        <p>{`ตำบล : ${item.TAM_FROM}-${item.TAMN_FROM}`}</p>
                                        <p>{`หมู่บ้าน : ${item.VIL_FROM}-${item.VILN_FROM}`}</p>
                                      </li>
                                      <li className="list-group-item">
                                        <b>ปลายทาง</b>{" "}
                                        <span
                                          className="ms-2"
                                          style={{
                                            color: "#82CD47",
                                            display:
                                              item.IS_SEND === "1"
                                                ? ""
                                                : "none",
                                          }}
                                        >
                                          <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className="fa-lg"
                                          />
                                        </span>
                                      </li>
                                      <li className="list-group-item">
                                        <p>{`บ้านเลขที่ : ${item.ADD_TO}`}</p>
                                        <p>{`จังหวัด : ${item.CWT_TO}-${item.CWTN_TO}`}</p>
                                        <p>{`อำเภอ : ${item.AMP_TO}-${item.AMPN_TO}`}</p>
                                        <p>{`ตำบล : ${item.TAM_TO}-${item.TAMN_TO}`}</p>
                                        <p>{`หมู่บ้าน : ${item.VIL_TO}-${item.VILN_TO}`}</p>
                                      </li>
                                    </ul>

                                    <button
                                      className="btn btn-warning me-2"
                                      style={{
                                        display:
                                          item.IS_SEND === "1" ? "none" : "",
                                      }}
                                      onClick={(e) =>
                                        sendTrack_handleClick(
                                          e,
                                          item.TRACKING_KEY,
                                          item.TempKey
                                        )
                                      }
                                    >
                                      TRACK {item.loading && <LoadingSpinner />}
                                    </button>

                                    <Link
                                      to={"/trackingDetail"}
                                      state={item.TRACKING_KEY}
                                      className="btn btn-primary"
                                    >
                                      รายละเอียด
                                    </Link>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </div>
                        </Col>
                      ))}
                    <Col md={12} className="mt-2">
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
                    </Col>
                  </Row>

                  {/* <Row className="mt-2">
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
                              <th scope="col">จังหวัด</th>
                              <th scope="col">อำเภอ</th>
                              <th scope="col">ตำบล</th>
                              <th scope="col">เทศบาล</th>
                              <th scope="col">หมู่บ้าน</th>
                              <th scope="col" style={{ textAlign: "center" }}>
                                Tracking
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {trackinglist &&
                              trackinglist.map((item, i) => (
                                <tr key={i}>
                                  <td>{item.R02}</td>
                                  <td>{`${item.CWT}-${item.CWTN}`}</td>
                                  <td>{`${item.AMP}-${item.AMPN}`}</td>
                                  <td>{`${item.TAM}-${item.TAMN}`}</td>
                                  <td>{`${item.MUN}-${item.MUNN}`}</td>
                                  <td>{`${item.VIL}-${item.VILN}`}</td>
                                  <td style={{ textAlign: "center" }}>
                                    <Link
                                      to={"/trackingDetail"}
                                      state={item.TRACKING_KEY}
                                      className="btn btn-primary"
                                    >
                                      รายละเอียด
                                    </Link>
                                  </td>
                                </tr>
                              ))}
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
                  </Row> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal
          show={show}
          onHide={() => cancle(trakcingKey)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title>{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <h5 style={{ lineHeight: "unset" }}>{msgModal}</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col md={12}>
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2"
                  onClick={() => cancle(trakcingKey)}
                >
                  ยกเลิก
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => confirm(trakcingKey, tempKey)}
                >
                  ยืนยันส่งข้อมูล {progress && <LoadingSpinner />}
                </button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
