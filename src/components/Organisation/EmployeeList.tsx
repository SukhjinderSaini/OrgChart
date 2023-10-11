import { useEffect } from "react";
import { People } from "../../types/People.types";
import Employee from "./Employee";
interface Props {
  details: People[];
  onClick: (id: String) => void;
}
function EmployeeList({ details, onClick }: Props) {
  return (
    <div>
      {details.map((userDetails) => (
        <div key={"employee_" + userDetails.id}>
          <Employee
            key={"employee_" + userDetails.id}
            onClick={() => onClick(userDetails.id)}
            details={userDetails}></Employee>
          <div className="d-inline childEmployees">
            {userDetails.children?.map((subset) => (
              <Employee
                key={"employee_" + subset.id}
                onClick={() => onClick(subset.id)}
                details={subset}></Employee>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
