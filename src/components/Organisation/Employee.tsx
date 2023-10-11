import "bootstrap/dist/css/bootstrap.min.css";
import { People } from "../../types/People.types";
import "./Employee.css";
interface Props {
  details: People;
  onClick: (id: String) => void;
}
function Employee({ details, onClick }: Props) {
  return (
    <div
      className="employee-data list-group py-1 mx-auto"
      onClick={() => onClick(details.id)}>
      <div className="list-group-item list-group-item-action">
        <div className="mx-auto">
          <div className="d-flex">
            <a className="d-flex align-items-center" href="#">
              <img
                src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (${details.id}).webp`}
                className="rounded-circle"
                height="50"
                alt="Avatar"
                loading="lazy"
              />
            </a>
            <div className="ps-5 text-start employee employee-details d-flex flex-grow-1 flex-column">
              <div className="employee-name justify-left text-warning">
                {details.full_name}
              </div>
              <div className="employee-title text-success">
                {details.job_title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
