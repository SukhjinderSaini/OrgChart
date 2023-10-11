import { createContext } from "react";
import { People } from "../types/People.types";
const initPeoplesOrg: People[] = [];
const CompanyContext = createContext<People[]>(initPeoplesOrg);
export default CompanyContext;
