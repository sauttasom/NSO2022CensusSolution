import { createContext, useContext } from "react";
import { OutsideInfo } from "../model/OutsideInfo";

let outside: OutsideInfo = {
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
  VIL: "",
  VILT: "",
  ST_A: "",
  ST_B: "",
  ST_C: "",
  FN_A: "",
  FN_B: "",
  FN_C: "",
  ENU_A: "",
  ENU_B: "",
  ACA_A: "",
  ACA_B: "",
  SUB_A: "",
  SUB_B: "",
  R01: "",
  F1CODE: "",
  OCWT: "",
  OAMP: "",
  OTAM: "",
  OTYPE: "",
  OMUN: "",
  OVIL: "",
  OADD: "",
  KP: "",
  R13_A: "",
  R13_AT: "",
  R13_B: "",
  R13_C: "",
  R17: "",
  R19: "",
  R20: "",
  R21: "",
  R22: "",
  R23: "",
  R24: "",
  R25: "",
  R26: "",
  R27: "",
  AH_CODE: "",
  TempKey: 0,
  Temp_AREA_CODE: "",
  Temp_R02: "",
  SDATE_A: "",
  SDATE_B: "",
  SDATE_C: "",
  CDATE_A: "",
  CDATE_B: "",
  CDATE_C: "",
};

export type GlobalContent = {
    outsideInfo: OutsideInfo | null
    setOutside:(c: OutsideInfo) => void
};

export const OutsideContext = createContext<GlobalContent>({
  outsideInfo: outside, // set a default value
  setOutside: () => {}
});

export const useGlobalUserContext = () => useContext(OutsideContext);
