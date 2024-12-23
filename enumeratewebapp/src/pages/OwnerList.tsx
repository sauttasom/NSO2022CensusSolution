import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import NavbarMenu from "../components/NavbarMenu";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Listing2 } from "../model/Listing2";
import { UserInfo } from "../model/UserInfo";
import { APIService } from "../service/APIService";
import ReactPaginate from "react-paginate";
import {
  faCircle,
  faHome,
  faHouseChimneyUser,
  faLayerGroup,
  faPersonCirclePlus,
  faRoute,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { R32_LIST } from "../components/Option";
import LoadingSpinner from "../components/LoadingSpinner";
import { OutsideInfo } from "../model/OutsideInfo";
import { TrackingInfo } from "../model/TrackingInfo";
import Swal from "sweetalert2";
import { TriangulationInfo } from "../model/TriangulationInfo";

export default function OwnerList() {
  const [userInfo, setUser] = useState<UserInfo | null>(null);

  const [cookies] = useCookies(["token"]);
  const [listing, setListing] = useState<Listing2[] | null>([]);
  const navigate = useNavigate();

  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [dataInPage, setDataInPage] = useState<Listing2[][]>([]);
  const [page, setPage] = useState<number>(0);

  const [outside, setOutside] = useState<OutsideInfo[] | null>([]);
  const [totalPageOutside, setTotalPageOutside] = useState<number>(0);
  const [totalRecordsOutside, setTotalRecordsOutside] = useState<number>(0);
  const [dataInPageOutside, setDataInPageOutside] = useState<OutsideInfo[][]>(
    []
  );
  const [pageOutside, setPageOutside] = useState<number>(0);

  //search
  const [searchHouseNo, setSearchHouseNo] = useState<string>("");
  const [statusL_W, setStatusL_W] = useState<boolean>(true);
  const [statusL_P, setStatusL_P] = useState<boolean>(true);
  const [statusL_C, setStatusL_C] = useState<boolean>(true);
  const [statusE_W, setStatusE_W] = useState<boolean>(true);
  const [statusE_P, setStatusE_P] = useState<boolean>(true);
  const [statusE_C, setStatusE_C] = useState<boolean>(true);

  const [opeationArea, setOpeationArea] = useState<string>("");
  const ddlOpeationArea = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOpeationArea(event.target.value);
  };

  const [key, setKey, removeCookie] = useCookies(["key"]);

  const [listingKey, setListingKey] = useState<number>(0);
  const [inputHouse, setInputHouse] = useState<string>("");
  const [confirmHouse, setConfirmHouse] = useState<string>("");

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
    removeCookie("key", { path: "/" });
  }, [cookies.token, navigate]);

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

  const paginationOutside = async (item: OutsideInfo[] | null) => {
    const page_per: number = 10;
    const pages: number = Math.ceil(item?.length! / page_per);
    setTotalPageOutside(pages);
    const newList: any = Array.from({ length: pages }, (data, index) => {
      const start: number = index * page_per;
      return item?.slice(start, start + page_per);
    });

    return newList;
  };

  const [isMakeUp, setIsMakeUp] = useState<boolean>(false);
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
              search();
              getOutside();
            }
          } catch (err) {
            console.error("ERROR (getList): ", err);
          }
        }
      };

      const getListMakeUp = async () => {
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
              searchMakeUp();
              getOutsideMakeUp();
            }
          } catch (err) {
            console.error("ERROR (getList): ", err);
          }
        }
      };

      const checkTriangulation = async () => {
        let ah_code: string = userInfo?.areA_CODE ?? "";
        let url_enumerate_api: string = "";

        let base64 = require("base-64");
        let basic_auth: string = "";

        if (process.env.REACT_APP_BASIC_AUTH_API) {
          basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
        }

        if (process.env.REACT_APP_ENUMERATE_API) {
          url_enumerate_api =
            process.env.REACT_APP_ENUMERATE_API +
            `/Triangulation/getData/${ah_code}`;
        }

        const headers = {
          Authorization: "Basic " + basic_auth,
          "Content-Type": "application/json;charset=UTF-8",
        };

        if (ah_code !== "") {
          await axios
            .get(url_enumerate_api, {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                let item: TriangulationInfo = res.data[0];

                if (item === undefined) {
                  console.log("ไม่มีข้อมูลจ้า");
                  setIsMakeUp(false);
                  getList();
                } else {
                  if (item.Lock === "1") {
                    setIsMakeUp(true);
                    getListMakeUp();
                  } else {
                    setIsMakeUp(false);
                    getList();
                  }
                }
              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR: ", err);
            });
        }
      };
      checkTriangulation();
    }
  }, [userInfo]);

  //pagination
  useEffect(() => {
    setListing(dataInPage[page]);
  }, [page, dataInPage]);

  const handlePageChange = (event: { selected: number }) => {
    setPage(event.selected);
  };

  const handlePageChangeOutside = (event: { selected: number }) => {
    setPageOutside(event.selected);
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

  const [AREA_CODE, setAREA_CODE] = useState<string>("");
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

        const amp_Code = userInfo?.ampCode!;
        const ampCode = amp_Code.substring(amp_Code.length - 2);

        const tam_Code = userInfo?.tamCode!;
        const tamCode = tam_Code.substring(tam_Code.length - 2);

        const vil_Code = userInfo?.vilCode!;
        const vilCode = vil_Code.substring(vil_Code.length - 2);

        if (userInfo?.cwtCode! !== undefined || userInfo?.cwtCode! !== "") {
          const body = {
            CwtCode: userInfo?.cwtCode!,
            AmpCode: ampCode,
            TamCode: tamCode,
            TypeCode: userInfo?.typeCode!,
            MunCode: userInfo?.munCode!,
            VilCode: vilCode,
            IsMakeUp: "",
          };

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
                    statusL_C &&
                    statusE_W === false &&
                    statusE_P === false &&
                    statusE_C === false
                  ) {
                    //แสดงค่า สก.1 สำเร็จ
                  } else {
                    if (statusE_W && statusE_P && statusE_C) {
                      //แสดงค่า สก.2 ทั้งหมด
                      filteredItem = item.filter((obj) => obj.AH_CODE !== null);
                    } else if (statusE_W && statusE_P) {
                      filteredItem = item.filter(
                        (obj) =>
                          obj.AH_CODE !== null &&
                          (obj.SDATE_A === "" || obj.SDATE_A !== "") &&
                          obj.CDATE_A === ""
                      );
                    } else if (statusE_W && statusE_C) {
                      filteredItem = item.filter(
                        (obj) =>
                          obj.AH_CODE !== null &&
                          (obj.SDATE_A === "" || obj.CDATE_A !== "")
                      );
                    } else if (statusE_P && statusE_C) {
                      filteredItem = item.filter(
                        (obj) =>
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
                            obj.AH_CODE !== null &&
                            obj.SDATE_A === "" &&
                            obj.CDATE_A === ""
                        );
                      }

                      if (statusE_P) {
                        filteredItem = item.filter(
                          (obj) =>
                            obj.AH_CODE !== null &&
                            obj.SDATE_A !== "" &&
                            obj.CDATE_A === ""
                        );
                      }

                      if (statusE_C) {
                        filteredItem = item.filter(
                          (obj) =>
                            obj.AH_CODE !== null &&
                            obj.CDATE_A !== null &&
                            obj.CDATE_A !== ""
                        );
                      }
                    }
                  }
                }

                if (searchHouseNo !== "") {
                  filteredItem = item.filter(
                    (obj) => obj.R02 === searchHouseNo
                  );
                }

                if (opeationArea === "2") {
                  filteredItem = item.filter(
                    (obj) => obj.FROM_AREA_CODE !== ""
                  );
                }

                getListHouseTrack(item[0].AREA_CODE);
                setAreaFrom(item[0].AREA_CODE);
                setAREA_CODE(item[0].AREA_CODE);

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
          //redirect หน้า portal
          navigate("/");
        }
      } catch (err) {
        setLoading(false);
        console.error("Search ERROR: ", err);
      }
    }
  }

  async function searchMakeUp() {
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

        const amp_Code = userInfo?.ampCode!;
        const ampCode = amp_Code.substring(amp_Code.length - 2);

        const tam_Code = userInfo?.tamCode!;
        const tamCode = tam_Code.substring(tam_Code.length - 2);

        const vil_Code = userInfo?.vilCode!;
        const vilCode = vil_Code.substring(vil_Code.length - 2);

        if (userInfo?.cwtCode! !== undefined || userInfo?.cwtCode! !== "") {
          const body = {
            CwtCode: userInfo?.cwtCode!,
            AmpCode: ampCode,
            TamCode: tamCode,
            TypeCode: userInfo?.typeCode!,
            MunCode: userInfo?.munCode!,
            VilCode: vilCode,
            IsMakeUp: "1",
          };

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
                    statusL_C &&
                    statusE_W === false &&
                    statusE_P === false &&
                    statusE_C === false
                  ) {
                    //แสดงค่า สก.1 สำเร็จ
                  } else {
                    if (statusE_W && statusE_P && statusE_C) {
                      //แสดงค่า สก.2 ทั้งหมด
                      filteredItem = item.filter((obj) => obj.AH_CODE !== null);
                    } else if (statusE_W && statusE_P) {
                      filteredItem = item.filter(
                        (obj) =>
                          obj.AH_CODE !== null &&
                          (obj.SDATE_A === "" || obj.SDATE_A !== "") &&
                          obj.CDATE_A === ""
                      );
                    } else if (statusE_W && statusE_C) {
                      filteredItem = item.filter(
                        (obj) =>
                          obj.AH_CODE !== null &&
                          (obj.SDATE_A === "" || obj.CDATE_A !== "")
                      );
                    } else if (statusE_P && statusE_C) {
                      filteredItem = item.filter(
                        (obj) =>
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
                            obj.AH_CODE !== null &&
                            obj.SDATE_A === "" &&
                            obj.CDATE_A === ""
                        );
                      }

                      if (statusE_P) {
                        filteredItem = item.filter(
                          (obj) =>
                            obj.AH_CODE !== null &&
                            obj.SDATE_A !== "" &&
                            obj.CDATE_A === ""
                        );
                      }

                      if (statusE_C) {
                        filteredItem = item.filter(
                          (obj) =>
                            obj.AH_CODE !== null &&
                            obj.CDATE_A !== null &&
                            obj.CDATE_A !== ""
                        );
                      }
                    }
                  }
                }

                if (searchHouseNo !== "") {
                  filteredItem = item.filter(
                    (obj) => obj.R02 === searchHouseNo
                  );
                }

                if (opeationArea === "2") {
                  filteredItem = item.filter(
                    (obj) => obj.FROM_AREA_CODE !== ""
                  );
                }

                if (item.length > 0) {
                  getListHouseTrack(item[0].AREA_CODE);
                  setAreaFrom(item[0].AREA_CODE);
                  setAREA_CODE(item[0].AREA_CODE);
                } else {
                  getListHouseTrack("");
                  setAreaFrom("");
                  setAREA_CODE("");
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
          //redirect หน้า portal
          navigate("/");
        }
      } catch (err) {
        setLoading(false);
        console.error("Search ERROR: ", err);
      }
    }
  }

  //pagination
  useEffect(() => {
    setOutside(dataInPageOutside[pageOutside]);
  }, [pageOutside, dataInPageOutside]);

  async function getOutside() {
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
            process.env.REACT_APP_ENUMERATE_API + "/Listing2/getOutside";
        }

        const amp_Code = userInfo?.ampCode!;
        const ampCode = amp_Code.substring(amp_Code.length - 2);

        const tam_Code = userInfo?.tamCode!;
        const tamCode = tam_Code.substring(tam_Code.length - 2);

        const vil_Code = userInfo?.vilCode!;
        const vilCode = vil_Code.substring(vil_Code.length - 2);

        const body = {
          cwtCode: userInfo?.cwtCode!,
          ampCode: ampCode,
          tamCode: tamCode,
          typeCode: userInfo?.typeCode!,
          munCode: userInfo?.munCode!,
          vilCode: vilCode,
        };

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setLoading(false);
              let item: OutsideInfo[];
              item = res.data;
              let filteredItem = item;
              if (searchHouseNo !== "") {
                filteredItem = item.filter(
                  (obj) => obj.Temp_R02 === searchHouseNo
                );
              } else {
                filteredItem = item;
              }

              setOutside(filteredItem);
              setTotalRecordsOutside(filteredItem.length);
              const paginate = paginationOutside(filteredItem);
              paginate.then((value: OutsideInfo[][]) => {
                setDataInPageOutside(value);
                setPageOutside(0);
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

  async function getOutsideMakeUp() {
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
            process.env.REACT_APP_ENUMERATE_API + "/Listing2/getOutsideMakeUp";
        }

        const amp_Code = userInfo?.ampCode!;
        const ampCode = amp_Code.substring(amp_Code.length - 2);

        const tam_Code = userInfo?.tamCode!;
        const tamCode = tam_Code.substring(tam_Code.length - 2);

        const vil_Code = userInfo?.vilCode!;
        const vilCode = vil_Code.substring(vil_Code.length - 2);

        const body = {
          cwtCode: userInfo?.cwtCode!,
          ampCode: ampCode,
          tamCode: tamCode,
          typeCode: userInfo?.typeCode!,
          munCode: userInfo?.munCode!,
          vilCode: vilCode,
        };

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setLoading(false);
              let item: OutsideInfo[];
              item = res.data;
              let filteredItem = item;
              if (searchHouseNo !== "") {
                filteredItem = item.filter(
                  (obj) => obj.Temp_R02 === searchHouseNo
                );
              } else {
                filteredItem = item;
              }

              setOutside(filteredItem);
              setTotalRecordsOutside(filteredItem.length);
              const paginate = paginationOutside(filteredItem);
              paginate.then((value: OutsideInfo[][]) => {
                setDataInPageOutside(value);
                setPageOutside(0);
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

  const deleteRecord = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: number,
    houseNo: string
  ) => {
    console.log(`delete key: ${key} houseNo : ${houseNo}`);
    setListingKey(key);
    setConfirmHouse(houseNo);
    setTitleModal("ยืนยันการลบข้อมูล");
    setMsgModal(
      `ท่านต้องการลบข้อมูลรายการนี้หรือไม่? ระบุบ้านเลขที่ ที่ต้องการลบแล้วกดปุ่ม "ยืนยัน" `
    );
    handleShow();
  };

  const inputConfirmHouse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputHouse(event.target.value);
  };

  async function confirmDelete(tempKey: number) {
    let isDelete: boolean = false;

    if (confirmHouse.trim() === "" && inputHouse.trim() === "000") {
      isDelete = true;
    } else if (confirmHouse.trim() === inputHouse.trim()) {
      isDelete = true;
    }

    if (isDelete) {
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
              "/Listing2/deleteHouse/" +
              tempKey;
          }

          await axios
            .get(url_enumerate_api, {
              headers: api.headers,
            })
            .then((res) => {
              if (res.status === 200) {
                handleClose();
                if (isMakeUp) {
                  searchMakeUp();
                } else {
                  search();
                }
              }
            })
            .catch((err) => {
              console.log("AXIOS ERROR: ", err);
            });
        } catch (err) {
          console.error("ERROR (deleteHouse): ", err);
        }
      }
    }
  }

  //modal popup
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [msgModal, setMsgModal] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //modal popup warning บ้านใหม่จากเขตอื่น
  const [listHouseFromAnother, setListHouseFromAnother] = useState<
    Array<string>
  >([]);
  const [modalHouseTracking, setmodalHouseTracking] = useState(false);
  const showHouseTracking = () => setmodalHouseTracking(true);
  const closeHouseTracking = () => setmodalHouseTracking(false);

  //modal tracking1 : สก.12
  const [tracking1, setTracking1] = useState<Listing2>();
  const [showTracking1, setShowTracking1] = useState(false);
  const handleShowTracking1 = () => setShowTracking1(true);
  const handleCloseTracking1 = () => setShowTracking1(false);

  //modal tracking2
  const [loadTracking2, setLoadTracking2] = useState(false);
  const [tracking2, setTracking2] = useState<TrackingInfo | null>(null);
  const [areaFrom, setAreaFrom] = useState("");
  const [titleModalTracking, setTitleModalTracking] = useState("");
  const [showTracking2, setShowTracking2] = useState(false);
  const handleShowTracking2 = () => setShowTracking2(true);
  const handleCloseTracking2 = () => setShowTracking2(false);

  function getDate(date: string): string {
    let d = new Date(date);
    return (
      d.getDate() + "/" + (d.getMonth() + 1) + "/" + (d.getFullYear() + 543)
    );
  }

  function getTime(date: string): string {
    let d = new Date(date);
    return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  }

  const [valueR31, setValueR31] = useState<string>("");
  const radioR31 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueR31(event.target.value);
  };

  async function getDataTracking(
    area_code_from: string,
    add_from: string,
    area_code_to: string,
    add_to: string,
    type: string
  ) {
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
            process.env.REACT_APP_ENUMERATE_API + "/Listing2/getTracking";
        }

        const body = {
          AREA_CODE_FROM: area_code_from,
          ADD_FROM: add_from,
          AREA_CODE_TO: area_code_to,
          ADD_TO: add_to,
          TYPE: type,
        };

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setLoadTracking2(false);
              setTracking2(res.data[0]);
              setValueR31(res.data[0].R31);

              if (
                res.data[0].TYPE_TRACKING === "Duplicate" &&
                res.data[0].AREA_CODE_FROM !== areaFrom
              ) {
                setTitleModalTracking("แบบรายงานผลการ Tracking");
              } else {
                setTitleModalTracking(
                  "การติดตามผู้ถือครองทำการเกษตรที่ส่งออกจากเขตปฏิบัติงานในแต่ละพื้นที่"
                );
              }

              handleShowTracking2();
            }
          })
          .catch((err) => {
            setLoading(false);
            console.error("AXIOS ERROR: ", err);
          });
      } catch (err) {
        setLoading(false);
        console.error("Save Tracking ERROR: ", err);
      }
    }
  }

  async function updateTracking(area_code: string, r02: string) {
    setLoadTracking2(true);
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
            process.env.REACT_APP_ENUMERATE_API +
            "/Listing2/updateStatus1_Tracking";
        }

        const body = {
          areA_CODE: area_code,
          r02: r02,
          r31: valueR31,
        };

        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              search();
              setLoadTracking2(false);
              handleCloseTracking2();
            }
          })
          .catch((err) => {
            setLoading(false);
            console.error("AXIOS ERROR: ", err);
          });
      } catch (err) {
        setLoading(false);
        console.error("Save Tracking ERROR: ", err);
      }
    }
  }

  async function getListHouseTrack(area_code: string) {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);
    if (api.authToken) {
      let auth: string = api.authToken;

      const headers = {
        Authorization: "Basic " + auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      if (area_code !== "") {
        try {
          let url_enumerate_api: string = "";
          if (process.env.REACT_APP_ENUMERATE_API) {
            url_enumerate_api =
              process.env.REACT_APP_ENUMERATE_API +
              `/Listing2/getListHouseTrack/${area_code}`;
          }

          await axios
            .get(url_enumerate_api, {
              headers: headers,
            })
            .then((res) => {
              if (res.status === 200) {
                let listHouse: Array<string> = [];
                let item: TrackingInfo[];
                item = res.data;

                item.forEach(function (value) {
                  listHouse.push(value.ADD_TO);
                });

                if (item.length > 0) {
                  setListHouseFromAnother(listHouse);
                  setTitleModal("บ้านเลขที่ใหม่");
                  setMsgModal(
                    "มีบ้านเลขที่ใหม่ ถูกเพิ่มในเขตปฏิบัติงานนี้ ได้แก่"
                  );
                  showHouseTracking();
                }
              }
            })
            .catch((err) => {
              console.error("AXIOS ERROR: ", err);
            });
        } catch (err) {
          setLoading(false);
          console.error("Tracking ERROR: ", err);
        }
      }
    }
  }

  const [loadingConfirm, setLoadingConfirm] = useState(false);
  async function gotoTriangulationPage() {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);

    if (api.authToken) {
      setLoadingConfirm(true);
      let auth: string = api.authToken;
      const headers = {
        Authorization: "Basic " + auth,
        "Content-Type": "application/json;charset=UTF-8",
      };

      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API +
          `/Triangulation/checkDataCompleted/${AREA_CODE}`;
      }

      try {
        await axios
          .get(url_enumerate_api, {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              let totalJobCompleted: number = res.data.totalJobComplete;
              let totalInArea: number = res.data.totalInArea;
              let sK1_NoHave_SK2: string = res.data.sK1_NoHave_SK2;
              let sK12_NoHave_SK2: string = res.data.sK12_NoHave_SK2;

              if (totalJobCompleted === totalInArea) {
                insertTriangulation(AREA_CODE);
              } else {
                Swal.fire({
                  title: "ไม่สามารถยืนยันข้อมูลได้",
                  text: `เนื่องจากท่านยังไม่ได้กรอกข้อมูลไม่ครบถ้วนทั้ง สก.1${
                    sK1_NoHave_SK2 === ""
                      ? ""
                      : ` (บ้านเลขที่ ${sK1_NoHave_SK2})`
                  }, สก.12${
                    sK12_NoHave_SK2 === ""
                      ? ""
                      : ` (บ้านเลขที่ ${sK12_NoHave_SK2})`
                  } และ สก.2`,
                  icon: "error",
                  confirmButtonText: "ตกลง",
                });
                setLoadingConfirm(false);
              }
            }
          })
          .catch((err) => {
            console.error("AXIOS ERROR: ", err);
            setLoadingConfirm(false);
          });
      } catch (err) {
        console.error("Triangulation Page ERROR: ", err);
        setLoadingConfirm(false);
      }
    }
  }

  async function insertTriangulation(AREA_CODE: string) {
    const api = new APIService(process.env.REACT_APP_BASIC_AUTH_API!);

    if (api.authToken) {
      let url_enumerate_api: string = "";
      if (process.env.REACT_APP_ENUMERATE_API) {
        url_enumerate_api =
          process.env.REACT_APP_ENUMERATE_API +
          "/Triangulation/insertTriangulation";
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
        areA_CODE: AREA_CODE,
        approvE_KEY: userInfo?.userId,
        approvE_NAME: userInfo?.name,
      };

      try {
        await axios
          .post(url_enumerate_api, JSON.stringify(body), {
            headers: headers,
          })
          .then((res) => {
            if (res.status === 200) {
              setLoadingConfirm(false);
              let base64 = require("base-64");
              setKey("key", base64.encode(`${AREA_CODE}`), { path: "/" });
              navigate("/triangulationDetail");
            }
          })
          .catch((err) => {
            console.error("AXIOS ERROR: ", err);
            setLoadingConfirm(false);
          });
      } catch (err) {
        console.error("Triangulation Page ERROR: ", err);
        setLoadingConfirm(false);
      }
    }
  }

  async function showOutsideSource(tempKey: number) {
    let url_enumerate_api: string = "";

    let base64 = require("base-64");
    let basic_auth: string = "";

    if (process.env.REACT_APP_BASIC_AUTH_API) {
      basic_auth = base64.encode(process.env.REACT_APP_BASIC_AUTH_API);
    }

    if (process.env.REACT_APP_ENUMERATE_API) {
      url_enumerate_api =
        process.env.REACT_APP_ENUMERATE_API + `/Listing2/getDetail/${tempKey}`;
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
          setTracking1(res.data[0]);
          handleShowTracking1();
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }
  return (
    <div>
      <NavbarMenu />
      <Container className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col md={12}>
            <Card>
              <Card.Body className="card-menu">
                <Row>
                  <Col md={12}>
                    <div>
                      <h5
                        className="me-1"
                        style={{ fontWeight: "bold", display: "inline" }}
                      >
                        รายชื่อผู้ถือครองทำการเกษตร
                      </h5>
                    </div>
                  </Col>
                </Row>

                <Row className="mt-2 mb-2">
                  <Col md={2}>
                    <div className="form-group">
                      <label className="mb-0">บ้านเลขที่</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={inputSearchHouseNo}
                      />
                    </div>
                  </Col>

                  <Col md={2}>
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
                        <label className="form-check-label" htmlFor="statusL_W">
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
                        <label className="form-check-label" htmlFor="statusL_P">
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
                        <label className="form-check-label" htmlFor="statusL_C">
                          {" "}
                          สำเร็จ
                        </label>
                      </div>
                    </div>
                  </Col>

                  <Col md={2}>
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
                        <label className="form-check-label" htmlFor="statusE_W">
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
                        <label className="form-check-label" htmlFor="statusE_P">
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
                        <label className="form-check-label" htmlFor="statusE_C">
                          {" "}
                          สำเร็จ
                        </label>
                      </div>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="form-group">
                      <label className="mb-0">สถานะการยืนยันข้อมูล</label>
                      <select
                        className="form-select"
                        defaultValue={"1"}
                        onChange={ddlOpeationArea}
                      >
                        <option key={1} value="1">
                          ในเขตปฏิบัติงาน
                        </option>
                        <option key={2} value="2">
                          จากเขตปฏิบัติงานอื่น
                        </option>
                      </select>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="mt-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => isMakeUp? searchMakeUp() : search()}
                        style={{ marginTop: "17px" }}
                      >
                        ค้นหา {loading && <LoadingSpinner />}
                      </button>
                    </div>
                  </Col>
                </Row>

                {isMakeUp === false && (
                  <>
                    <Row style={{ backgroundColor: "#e7e9ed" }}>
                      <Col md={12}>
                        <div className="form-group">
                          <button
                            type="button"
                            className="btn btn-primary mt-2 me-2"
                            onClick={() => gotoTriangulationPage()}
                            disabled={loadingConfirm}
                          >
                            ยืนยันข้อมูล {loadingConfirm && <LoadingSpinner />}
                          </button>
                          <label>
                            ท่านได้กรอกข้อมูลครบแล้ว
                            ระบบจะนำท่านเข้าสู่กระบวนการยืนยันข้อมูล กดปุ่ม{" "}
                            <b style={{ fontWeight: "bold" }}>
                              {" "}
                              'ยืนยันข้อมูล'{" "}
                            </b>
                            เพื่อยืนยันข้อมูล
                            และส่งให้กับผู้ประสานงานในพื้นที่และเจ้าหน้าที่วิชาการตรวจสอบ{" "}
                          </label>
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
                                <th
                                  scope="col"
                                  className="table-sticky-first-child"
                                >
                                  บ้านเลขที่
                                </th>
                                <th style={{ textAlign: "center" }}>
                                  Tracking
                                </th>
                                <th
                                  scope="col"
                                  colSpan={2}
                                  style={{ textAlign: "center" }}
                                >
                                  แบบคุมยอดและนับจด (สก.1)
                                </th>
                                <th
                                  scope="col"
                                  colSpan={2}
                                  style={{ textAlign: "center" }}
                                >
                                  แบบแจงนับ (สก.2)
                                </th>
                                <th
                                  style={{
                                    display:
                                      process.env.REACT_APP_PROJECT === "open"
                                        ? ""
                                        : "none",
                                  }}
                                ></th>
                              </tr>
                            </thead>
                            <tbody>
                              {listing &&
                                listing.map((item, index) => {
                                  return (
                                    <tr key={index + 1}>
                                      <td className="table-sticky-first-child">
                                        {item.R02}
                                        <span
                                          className="ms-1 position-relative me-2"
                                          style={{
                                            display:
                                              item.R08_sub === "" ? "none" : "",
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faHome} />
                                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                            {item.R08_sub}
                                          </span>
                                        </span>
                                        <span
                                          style={{
                                            display:
                                              item.R12_sub === "" ? "none" : "",
                                          }}
                                        >
                                          {" "}
                                          <FontAwesomeIcon
                                            icon={faLayerGroup}
                                          />
                                        </span>
                                      </td>
                                      <td style={{ textAlign: "center" }}>
                                        <div className="form-group from-inline">
                                          {item.IsTracking === "2" && (
                                            <a
                                              style={{ cursor: "pointer" }}
                                              onClick={() => {
                                                getDataTracking(
                                                  item.FROM_AREA_CODE,
                                                  item.FROM_ADD,
                                                  item.AREA_CODE,
                                                  item.R02,
                                                  ""
                                                );
                                              }}
                                            >
                                              <span
                                                className="me-2"
                                                style={{
                                                  color:
                                                    item.TrackingStatus === ""
                                                      ? "#B7C4CF"
                                                      : "#82CD47",
                                                }}
                                              >
                                                <FontAwesomeIcon
                                                  icon={faPersonCirclePlus}
                                                  className="fa-xl"
                                                />
                                              </span>
                                            </a>
                                          )}

                                          {item.IsTracking === "3" && (
                                            <FontAwesomeIcon
                                              icon={faHouseChimneyUser}
                                              className="fa-xl"
                                            />
                                          )}

                                          {item.Status === "C" && (
                                            <a
                                              style={{ cursor: "pointer" }}
                                              onClick={() => {
                                                getDataTracking(
                                                  item.AREA_CODE,
                                                  item.R02,
                                                  "",
                                                  "",
                                                  "12"
                                                );
                                              }}
                                            >
                                              <span
                                                className="ms- position-relative"
                                                style={{
                                                  display:
                                                    item.R28 === "2"
                                                      ? ""
                                                      : "none",
                                                }}
                                              >
                                                <FontAwesomeIcon
                                                  icon={faRoute}
                                                  className="fa-lg"
                                                />
                                                <span className="position-absolute top-0 start-100 rounded-pill badge rounded-pill bg-primary">
                                                  1
                                                </span>
                                              </span>
                                            </a>
                                          )}

                                          {item.Status === "C" &&
                                            item.R36 === "0" && (
                                              <a
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                  getDataTracking(
                                                    item.AREA_CODE,
                                                    item.R02,
                                                    "",
                                                    "",
                                                    ""
                                                  );
                                                }}
                                              >
                                                <span className="ms-4 position-relative">
                                                  <FontAwesomeIcon
                                                    icon={faRoute}
                                                    className="fa-lg"
                                                  />
                                                  <span
                                                    className={`position-absolute top-0 start-100 rounded-pill badge rounded-pill 
                                            ${
                                              item.TrackingStatus === ""
                                                ? "bg-secondary"
                                                : item.TrackingStatus === "P"
                                                ? "bg-warning"
                                                : "bg-success"
                                            }`}
                                                  >
                                                    2
                                                  </span>
                                                </span>
                                              </a>
                                            )}
                                        </div>
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
                                          to={"/listingDetail"}
                                          state={`${item.TempKey}`}
                                          className="btn btn-primary"
                                        >
                                          สก.1
                                        </Link>
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
                                      <td
                                        style={{
                                          textAlign: "center",
                                          display:
                                            process.env.REACT_APP_PROJECT ===
                                            "open"
                                              ? ""
                                              : "none",
                                        }}
                                      >
                                        <button
                                          className="btn btn-danger me-2"
                                          style={{
                                            display:
                                              item.FromE === "0" ||
                                              item.FromE === ""
                                                ? ""
                                                : "none",
                                          }}
                                          onClick={(e) =>
                                            deleteRecord(
                                              e,
                                              item.TempKey,
                                              item.R02
                                            )
                                          }
                                        >
                                          <FontAwesomeIcon icon={faTimes} />
                                        </button>
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

                    <Row>
                      <Col md={12}>
                        <div className="table-responsive">
                          <label className="mb-2 badge rounded-pill bg-secondary py-1 px-2">
                            {totalRecordsOutside}
                          </label>{" "}
                          รายการ
                          <table className="table table-bordered mb-2">
                            <thead className="table-secondary text-nowrap">
                              <tr>
                                <th
                                  scope="col"
                                  className="table-sticky-first-child"
                                >
                                  บ้านเลขที่
                                </th>
                                <th style={{ textAlign: "center" }}>
                                  บ้านเลขที่จาก สก.1
                                </th>
                                <th
                                  scope="col"
                                  colSpan={2}
                                  style={{ textAlign: "center" }}
                                >
                                  แบบนับจดเพิ่ม (สก.12)
                                </th>
                                <th
                                  scope="col"
                                  colSpan={2}
                                  style={{ textAlign: "center" }}
                                >
                                  แบบแจงนับ (สก.2)
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {outside &&
                                outside.map((item, index) => {
                                  return (
                                    <tr key={index + 1}>
                                      <td className="table-sticky-first-child">
                                        {item.OADD}
                                      </td>
                                      <td style={{ textAlign: "center" }}>
                                        {item.Temp_R02}{" "}
                                        {item.Temp_AREA_CODE !==
                                          item.AREA_CODE && (
                                          <a
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                              showOutsideSource(item.TempKey);
                                            }}
                                          >
                                            <span className="badge bg-primary">
                                              นอกเขต
                                            </span>
                                          </a>
                                        )}
                                      </td>
                                      <td style={{ textAlign: "center" }}>
                                        <span
                                          className={
                                            item.ST_A === "" &&
                                            item.ST_B === "" &&
                                            item.ST_C === ""
                                              ? ""
                                              : item.FN_A !== "" &&
                                                item.FN_B !== "" &&
                                                item.FN_C !== ""
                                              ? "badge bg-success"
                                              : "badge bg-secondary"
                                          }
                                        >
                                          {item.ST_A === "" &&
                                          item.ST_A === "" &&
                                          item.ST_A === ""
                                            ? "รอดำเนินการ"
                                            : item.FN_A !== "" &&
                                              item.FN_B !== "" &&
                                              item.FN_C !== ""
                                            ? "สำเร็จ"
                                            : "กำลังดำเนินการ"}
                                        </span>
                                      </td>
                                      <td style={{ textAlign: "center" }}>
                                        <Link
                                          to={"/outsideDetail"}
                                          state={`${item.TempKey}`}
                                          className="btn btn-primary"
                                        >
                                          สก.12
                                        </Link>
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
                                              item.AH_CODE === ""
                                                ? "none"
                                                : item.FN_A !== "" &&
                                                  item.FN_B !== "" &&
                                                  item.FN_C !== ""
                                                ? ""
                                                : "none",
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
                                          state={item.AH_CODE}
                                          className="btn btn-primary"
                                          style={{
                                            display:
                                              item.AH_CODE === ""
                                                ? "none"
                                                : item.FN_A !== "" &&
                                                  item.FN_B !== "" &&
                                                  item.FN_C !== ""
                                                ? ""
                                                : "none",
                                          }}
                                        >
                                          สก.2
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
                            pageCount={totalPageOutside}
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
                            onPageChange={handlePageChangeOutside}
                          />
                        </div>
                      </Col>
                    </Row>
                  </>
                )}

                {isMakeUp === true && (
                  <>
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
                                <th
                                  scope="col"
                                  className="table-sticky-first-child"
                                >
                                  บ้านเลขที่ (Make up)
                                </th>
                                <th style={{ textAlign: "center" }}>
                                  Tracking
                                </th>
                                <th
                                  scope="col"
                                  colSpan={2}
                                  style={{ textAlign: "center" }}
                                >
                                  แบบคุมยอดและนับจด (สก.1)
                                </th>
                                <th
                                  scope="col"
                                  colSpan={2}
                                  style={{ textAlign: "center" }}
                                >
                                  แบบแจงนับ (สก.2)
                                </th>
                                <th
                                  style={{
                                    display:
                                      process.env.REACT_APP_PROJECT === "open"
                                        ? ""
                                        : "none",
                                  }}
                                ></th>
                              </tr>
                            </thead>
                            <tbody>
                              {listing &&
                                listing.map((item, index) => {
                                  return (
                                    <tr key={index + 1}>
                                      <td className="table-sticky-first-child">
                                        {item.R02}
                                        <span
                                          className="ms-1 position-relative me-2"
                                          style={{
                                            display:
                                              item.R08_sub === "" ? "none" : "",
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faHome} />
                                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                            {item.R08_sub}
                                          </span>
                                        </span>
                                        <span
                                          style={{
                                            display:
                                              item.R12_sub === "" ? "none" : "",
                                          }}
                                        >
                                          {" "}
                                          <FontAwesomeIcon
                                            icon={faLayerGroup}
                                          />
                                        </span>
                                      </td>
                                      <td style={{ textAlign: "center" }}>
                                        <div className="form-group from-inline">
                                          {item.IsTracking === "2" && (
                                            <a
                                              style={{ cursor: "pointer" }}
                                              onClick={() => {
                                                getDataTracking(
                                                  item.FROM_AREA_CODE,
                                                  item.FROM_ADD,
                                                  item.AREA_CODE,
                                                  item.R02,
                                                  ""
                                                );
                                              }}
                                            >
                                              <span
                                                className="me-2"
                                                style={{
                                                  color:
                                                    item.TrackingStatus === ""
                                                      ? "#B7C4CF"
                                                      : "#82CD47",
                                                }}
                                              >
                                                <FontAwesomeIcon
                                                  icon={faPersonCirclePlus}
                                                  className="fa-xl"
                                                />
                                              </span>
                                            </a>
                                          )}

                                          {item.IsTracking === "3" && (
                                            <FontAwesomeIcon
                                              icon={faHouseChimneyUser}
                                              className="fa-xl"
                                            />
                                          )}

                                          {item.Status === "C" && (
                                            <a
                                              style={{ cursor: "pointer" }}
                                              onClick={() => {
                                                getDataTracking(
                                                  item.AREA_CODE,
                                                  item.R02,
                                                  "",
                                                  "",
                                                  "12"
                                                );
                                              }}
                                            >
                                              <span
                                                className="ms- position-relative"
                                                style={{
                                                  display:
                                                    item.R28 === "2"
                                                      ? ""
                                                      : "none",
                                                }}
                                              >
                                                <FontAwesomeIcon
                                                  icon={faRoute}
                                                  className="fa-lg"
                                                />
                                                <span className="position-absolute top-0 start-100 rounded-pill badge rounded-pill bg-primary">
                                                  1
                                                </span>
                                              </span>
                                            </a>
                                          )}

                                          {item.Status === "C" &&
                                            item.R36 === "0" && (
                                              <a
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                  getDataTracking(
                                                    item.AREA_CODE,
                                                    item.R02,
                                                    "",
                                                    "",
                                                    ""
                                                  );
                                                }}
                                              >
                                                <span className="ms-4 position-relative">
                                                  <FontAwesomeIcon
                                                    icon={faRoute}
                                                    className="fa-lg"
                                                  />
                                                  <span
                                                    className={`position-absolute top-0 start-100 rounded-pill badge rounded-pill 
                                            ${
                                              item.TrackingStatus === ""
                                                ? "bg-secondary"
                                                : item.TrackingStatus === "P"
                                                ? "bg-warning"
                                                : "bg-success"
                                            }`}
                                                  >
                                                    2
                                                  </span>
                                                </span>
                                              </a>
                                            )}
                                        </div>
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
                                          to={"/listingDetail"}
                                          state={`${item.TempKey}`}
                                          className="btn btn-primary"
                                        >
                                          สก.1
                                        </Link>
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
                                      <td
                                        style={{
                                          textAlign: "center",
                                          display:
                                            process.env.REACT_APP_PROJECT ===
                                            "open"
                                              ? ""
                                              : "none",
                                        }}
                                      >
                                        <button
                                          className="btn btn-danger me-2"
                                          style={{
                                            display:
                                              item.FromE === "0" ||
                                              item.FromE === ""
                                                ? ""
                                                : "none",
                                          }}
                                          onClick={(e) =>
                                            deleteRecord(
                                              e,
                                              item.TempKey,
                                              item.R02
                                            )
                                          }
                                        >
                                          <FontAwesomeIcon icon={faTimes} />
                                        </button>
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

                    <Row>
                      <Col md={12}>
                        <div className="table-responsive">
                          <label className="mb-2 badge rounded-pill bg-secondary py-1 px-2">
                            {totalRecordsOutside}
                          </label>{" "}
                          รายการ
                          <table className="table table-bordered mb-2">
                            <thead className="table-secondary text-nowrap">
                              <tr>
                                <th
                                  scope="col"
                                  className="table-sticky-first-child"
                                >
                                  บ้านเลขที่ (Make up)
                                </th>
                                <th style={{ textAlign: "center" }}>
                                  บ้านเลขที่จาก สก.1
                                </th>
                                <th
                                  scope="col"
                                  colSpan={2}
                                  style={{ textAlign: "center" }}
                                >
                                  แบบนับจดเพิ่ม (สก.12)
                                </th>
                                <th
                                  scope="col"
                                  colSpan={2}
                                  style={{ textAlign: "center" }}
                                >
                                  แบบแจงนับ (สก.2)
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {outside &&
                                outside.map((item, index) => {
                                  return (
                                    <tr key={index + 1}>
                                      <td className="table-sticky-first-child">
                                        {item.OADD}
                                      </td>
                                      <td style={{ textAlign: "center" }}>
                                        {item.Temp_R02}{" "}
                                        {item.Temp_AREA_CODE !==
                                          item.AREA_CODE && (
                                          <a
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                              showOutsideSource(item.TempKey);
                                            }}
                                          >
                                            <span className="badge bg-primary">
                                              นอกเขต
                                            </span>
                                          </a>
                                        )}
                                      </td>
                                      <td style={{ textAlign: "center" }}>
                                        <span
                                          className={
                                            item.ST_A === "" &&
                                            item.ST_B === "" &&
                                            item.ST_C === ""
                                              ? ""
                                              : item.FN_A !== "" &&
                                                item.FN_B !== "" &&
                                                item.FN_C !== ""
                                              ? "badge bg-success"
                                              : "badge bg-secondary"
                                          }
                                        >
                                          {item.ST_A === "" &&
                                          item.ST_A === "" &&
                                          item.ST_A === ""
                                            ? "รอดำเนินการ"
                                            : item.FN_A !== "" &&
                                              item.FN_B !== "" &&
                                              item.FN_C !== ""
                                            ? "สำเร็จ"
                                            : "กำลังดำเนินการ"}
                                        </span>
                                      </td>
                                      <td style={{ textAlign: "center" }}>
                                        <Link
                                          to={"/outsideDetail"}
                                          state={`${item.TempKey}`}
                                          className="btn btn-primary"
                                        >
                                          สก.12
                                        </Link>
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
                                              item.AH_CODE === ""
                                                ? "none"
                                                : item.FN_A !== "" &&
                                                  item.FN_B !== "" &&
                                                  item.FN_C !== ""
                                                ? ""
                                                : "none",
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
                                          state={item.AH_CODE}
                                          className="btn btn-primary"
                                          style={{
                                            display:
                                              item.AH_CODE === ""
                                                ? "none"
                                                : item.FN_A !== "" &&
                                                  item.FN_B !== "" &&
                                                  item.FN_C !== ""
                                                ? ""
                                                : "none",
                                          }}
                                        >
                                          สก.2
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
                            pageCount={totalPageOutside}
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
                            onPageChange={handlePageChangeOutside}
                          />
                        </div>
                      </Col>
                    </Row>
                  </>
                )}

                <Row className="mt-2">
                  <Col md={12} lg={12} sm={12} className="col-12 mb-2 mt-0">
                    <a
                      href={process.env.PUBLIC_URL + "/appendix"}
                      type="button"
                      className="btn btn-outline-secondary float-end"
                    >
                      กลับ
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="กรณีไม่มีเลขที่บ้าน ให้ระบุ 000"
                      onChange={inputConfirmHouse}
                    />
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
                  onClick={handleClose}
                >
                  ยกเลิก
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => confirmDelete(listingKey)}
                >
                  ยืนยันการลบข้อมูล
                </button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>

        <Modal
          show={modalHouseTracking}
          onHide={closeHouseTracking}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title>{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <label>{msgModal}</label>
                {listHouseFromAnother.map((value, index) => (
                  <p key={index}>{value}</p>
                ))}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>

        <Modal
          show={showTracking2}
          onHide={handleCloseTracking2}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title>{titleModalTracking}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* content ต้นทาง */}
            {areaFrom === tracking2?.AREA_CODE_FROM && (
              <>
                <Row>
                  <Col md={12}>
                    <div className="table-responsive">
                      <table className="table table-sm">
                        <tbody>
                          <tr className="border-top ">
                            <td className="bg-100">บ้านเลขที่</td>
                            <td>
                              {tracking2.TYPE_TRACKING === "12" &&
                              tracking2.ADD_TO === "" ? (
                                <b>(รอปลายทางบันทึก สก.12)</b>
                              ) : (
                                tracking2.ADD_TO
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-100">จังหวัด </td>
                            <td>{`${tracking2.CWT_TO}-${tracking2.CWTN_TO}`}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">อำเภอ </td>
                            <td>{`${tracking2.AMP_TO}-${tracking2.AMPN_TO}`}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">ตำบล </td>
                            <td>{`${tracking2.TAM_TO}-${tracking2.TAMN_TO}`}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">ประเภทเทศบาล </td>
                            <td>
                              {tracking2.TYPE_TO && `${tracking2.TYPE_TO}`}
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-100">เทศบาล </td>
                            <td>
                              {tracking2.MUN_TO &&
                                `${tracking2.MUN_TO}-${tracking2.MUNN_TO}`}
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-100">หมู่บ้าน </td>
                            <td>{`${tracking2.VIL_TO}-${tracking2.VILN_TO}`}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">วันที่ส่งข้อมูล </td>
                            <td>{getDate(tracking2.TRACK_DATE)}</td>
                          </tr>
                          <tr>
                            <td className="bg-100">เวลา </td>
                            <td>{getTime(tracking2.TRACK_DATE)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="progress-track">
                      <b>สถานะปลายทาง</b>
                      <ul id="progressbar">
                        <li className="step0 active" id="step1">
                          รับข้อมูล
                        </li>
                        <li
                          className={`step0 ${
                            tracking2.PROCESS_DATE === null ? "wait" : "active"
                          }`}
                          id="step2"
                        >
                          รอดำเนินการ
                        </li>
                        <li
                          className={`step0 ${
                            tracking2.SUCCESS_DATE === null
                              ? tracking2.PROCESS_DATE === null
                                ? ""
                                : "process"
                              : "active"
                          }`}
                          id="step3"
                        >
                          กำลังดำเนินการ
                        </li>
                        <li
                          className={`step0 ${
                            tracking2.SUCCESS_DATE !== null ? "active" : ""
                          }`}
                          id="step4"
                        >
                          สำเร็จ
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </>
            )}

            {/* content ปลายทาง */}
            {areaFrom !== tracking2?.AREA_CODE_FROM &&
              tracking2?.TYPE_TRACKING === "Duplicate" && (
                <>
                  <Row>
                    <Col md={12}>
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <tbody>
                            <tr className="border-top">
                              <td>วันที่ได้รับข้อมูล </td>
                              <td>{getDate(tracking2?.TRACK_DATE!)}</td>
                            </tr>
                            <tr>
                              <td>เวลา </td>
                              <td>{getTime(tracking2?.TRACK_DATE!)}</td>
                            </tr>
                            <tr>
                              <td>วันที่อัพเดทข้อมูล </td>
                              <td>
                                {tracking2?.SUCCESS_DATE! === null
                                  ? ""
                                  : getDate(tracking2?.SUCCESS_DATE!)}
                              </td>
                            </tr>
                            <tr>
                              <td>เวลา </td>
                              <td>
                                {tracking2?.SUCCESS_DATE! === null
                                  ? ""
                                  : getTime(tracking2?.SUCCESS_DATE!)}
                              </td>
                            </tr>
                            <tr>
                              <td>สถานะ </td>
                              <td>
                                <span
                                  className="me-2"
                                  style={{
                                    color:
                                      tracking2?.PROCESS_DATE === null
                                        ? "#B7C4CF"
                                        : "#82CD47",
                                  }}
                                >
                                  <FontAwesomeIcon icon={faCircle} />
                                </span>
                                <label>
                                  {tracking2?.PROCESS_DATE === null
                                    ? "รอดำเนินการ"
                                    : "สำเร็จ"}
                                </label>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <div className="form-group">
                        <label>
                          <b>{tracking2?.TRACK_NAME}</b>{" "}
                          เป็นสมาชิกครัวเรือนนี้หรือไม่
                        </label>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group">
                        {R32_LIST.map((option, index) => (
                          <div className="form-check" key={option.value}>
                            <input
                              className="form-check-input"
                              name="rdR31"
                              type="radio"
                              value={option.value}
                              id={`rdR31${index}`}
                              onChange={radioR31}
                              checked={option.value === valueR31}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`rdR31${index}`}
                            >
                              {option.text}
                            </label>
                          </div>
                        ))}
                      </div>

                      <div className="float-end">
                        <button
                          type="button"
                          className="btn btn-primary mt-2"
                          style={{
                            display:
                              tracking2?.PROCESS_DATE === null ? "" : "none",
                          }}
                          onClick={() =>
                            updateTracking(
                              tracking2?.AREA_CODE_FROM ?? "",
                              tracking2?.ADD_FROM ?? ""
                            )
                          }
                        >
                          บันทึก {loadTracking2 && <LoadingSpinner />}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </>
              )}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>

        <Modal
          show={showTracking1}
          onHide={handleCloseTracking1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="header" closeButton>
            <Modal.Title>ข้อมูลต้นทาง</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* content ต้นทาง */}
            {tracking1 && (
              <Row>
                <Col md={12}>
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <tbody>
                        <tr className="border-top ">
                          <td className="bg-100">บ้านเลขที่</td>
                          <td>{tracking1.R02}</td>
                        </tr>
                        <tr>
                          <td className="bg-100">จังหวัด </td>
                          <td>{`${tracking1.CWT}-${tracking1.CWTN}`}</td>
                        </tr>
                        <tr>
                          <td className="bg-100">อำเภอ </td>
                          <td>{`${tracking1.AMP}-${tracking1.AMPN}`}</td>
                        </tr>
                        <tr>
                          <td className="bg-100">ตำบล </td>
                          <td>{`${tracking1.TAM}-${tracking1.TAMN}`}</td>
                        </tr>
                        <tr>
                          <td className="bg-100">ประเภทเทศบาล </td>
                          <td>{`${tracking1.TYPE}`}</td>
                        </tr>
                        <tr>
                          <td className="bg-100">เทศบาล </td>
                          <td>{`${tracking1.MUN}-${tracking1.MUNN}`}</td>
                        </tr>
                        <tr>
                          <td className="bg-100">หมู่บ้าน </td>
                          <td>{`${tracking1.VIL}-${tracking1.VILN}`}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}
