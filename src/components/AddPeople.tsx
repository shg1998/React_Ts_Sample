import React, { useState } from "react";
import { IAddPeopleProps } from "../interfaces/interfaces";

export const AddPeople: React.FC<IAddPeopleProps> = ({ peoples, setPeoples }) => {
  const [fullName, setFullName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [img_addr, setImg_addr] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  // const handleSubmit = (e:React.FormEventHandler<HTMLFormElement>) : void=>{

  // }

  const handleResetAllStates = (): void => {
    setFullName("");
    setAge("");
    setImg_addr("");
    setBio("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!fullName) return alert("نامت بایدیه :)");
    if (!age) return alert("سنت الزامیه :)");
    if (!img_addr) return alert("تصویر الزامیه :)");
    setPeoples([
      ...peoples,
      {
        id: Math.floor(Math.random() * 10000000),
        fullName,
        age: Number(age),
        bio,
        img_url: img_addr,
      },
    ]);
    handleResetAllStates();
  };

  return (
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
          افزودن به لیست
        </button>
      </form>
    </div>
  );
};

export default AddPeople;
