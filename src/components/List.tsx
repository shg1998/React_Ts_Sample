import React from "react";
import { IListProps, IPeople } from "../interfaces/interfaces";
import { AiOutlineUserDelete } from "react-icons/ai";
import { EditPeople } from "./EditPeople";

export const List: React.FC<IListProps> = ({ peoples, setPeoples }) => {
  const deletePeople = (id: number): void => {
    const ps: IPeople[] = [...peoples];
    const filteredPeoples: IPeople[] = ps.filter((s) => s.id !== id);
    setPeoples(filteredPeoples);
  };
  const renderList = (): JSX.Element[] => {
    return peoples.map((people: IPeople, index: number) => {
      return (
        <div className="col-12 col-lg-6 mb-2" key={people.id}>
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <img
                className="img-fluid rounded img-thumbnail"
                width={100}
                height={100}
                src={people.img_url}
                alt={people.fullName}
              />
              <div className="me-4">
                <p>
                  <span className="h3">{people.fullName}</span>
                  <span className="badge bg-secondary me-3">
                    {people.age} سال
                  </span>
                </p>
                <p className="text-muted">{people.bio}</p>
              </div>
            </div>
            <div className="operation_btns">
              <EditPeople people={people} peoples={peoples} setPeoples = {setPeoples}/>
              <AiOutlineUserDelete
                className="text-danger m-1"
                size={30}
                onClick={() => deletePeople(people.id)}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="row">{renderList()}</div>;
};

export default List;
