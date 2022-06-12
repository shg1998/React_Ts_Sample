import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { IEditPeopleProps } from "../interfaces/interfaces";

export const EditPeople: React.FC<IEditPeopleProps> = ({
  people,
  peoples,
  setPeoples,
}) => {
  const [fullName, setFullName] = useState<string>(people.fullName);
  const [age, setAge] = useState<number | string>(people.age);
  const [img_addr, setImg_addr] = useState<string>(people.img_url);
  const [bio, setBio] = useState<string | undefined>(people.bio);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!fullName) return alert("نامت بایدیه :)");
    if (!age) return alert("سنت الزامیه :)");
    if (!img_addr) return alert("تصویر الزامیه :)");
    const ps = [...peoples];
    const index: number = ps.findIndex((s) => s.id === people.id);
    ps[index] = {
      id: people.id,
      age: Number(age),
      fullName,
      bio,
      img_url: img_addr,
    };
    setPeoples(ps);
    setIsShowModal(false);
  };

  return (
    <>
      <FaUserEdit
        className="text-primary m-1"
        onClick={() => setIsShowModal(true)}
        size={30}
      />
      <Modal
        size={"lg"}
        show={isShowModal}
        centered
        onHide={() => setIsShowModal(false)}
      >
        <Modal.Header>
          <Modal.Title>ویرایش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-6 col-lg-6 mx-auto">
            <form
              autoComplete="off"
              onSubmit={(e) => handleSubmit(e)}
              className="mt-3"
            >
              <input
                type="text"
                className="form-control mb-2"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="نام و نام خانوادگی"
              />
              <input
                type="number"
                className="form-control mb-2"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="سن"
              />
              <input
                type="text"
                className="form-control mb-2"
                name="img_url"
                value={img_addr}
                onChange={(e) => setImg_addr(e.target.value)}
                placeholder="آدرس تصویر پروفایل"
              />
              <textarea
                className="form-control mb-2"
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={7}
                placeholder="بیوگرافی"
              />
              <button type="submit" className="btn btn-success">
                ویرایش
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsShowModal(false);
                }}
                className="btn btn-danger me-2"
              >
                بستن
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
