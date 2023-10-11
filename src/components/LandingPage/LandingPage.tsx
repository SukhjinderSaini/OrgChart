import { useContext, useState } from "react";
import Hero from "./Hero";
import CompanyContext from "../../context/CompanyContext";
import { People } from "../../types/People.types";
import EmployeeList from "../Organisation/EmployeeList";

function LandingPage() {
  const orgPeople = useContext(CompanyContext);
  const [employees, setEmployees] = useState(orgPeople);
  const matchSearchEmployee = (search: string) => {
    search = search.toLowerCase();
    let searchEmployees = orgPeople.filter(
      (employee) =>
        employee.full_name.toLowerCase().indexOf(search) != -1 ||
        employee.job_title.toLowerCase().indexOf(search) != -1
    );
    setEmployees(searchEmployees);
  };

  const getChildrenForEmployee = (
    orgEmployeeList: People[],
    workUnderId: String | null
  ): People[] => {
    const childrenForManager = orgEmployeeList.filter(
      (employee) => employee.parent_id === workUnderId
    );
    return childrenForManager;
  };

  const [employeesToShow, setEmployessToShow] = useState<People[]>(
    getChildrenForEmployee(employees, null)
  );
  const searchChildrenForManager = (workUnderId: String | null) => {
    const workUnderParentId = getChildrenForEmployee(employees, workUnderId);
    const employeesUpdated = employees.map((employee: People) => {
      if (employee.id === workUnderId) {
        employee.children = workUnderParentId;
      }
      return employee;
    });
    const clickedEmployee = employees.filter(
      (employee) => employee.id == workUnderId
    );
    setEmployees(employeesUpdated);
    setEmployessToShow([...new Set([...employeesToShow, ...clickedEmployee])]);
  };

  return (
    <div className="w-100">
      <Hero onSearch={matchSearchEmployee} />
      <section>
        <h1>Organisation View</h1>
        <EmployeeList
          onClick={searchChildrenForManager}
          details={employeesToShow}></EmployeeList>
      </section>
    </div>
  );
}

export default LandingPage;
