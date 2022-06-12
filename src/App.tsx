import { useState } from "react";
import AddPeople from "./components/AddPeople";
import List from "./components/List";
import { IPeople } from "./interfaces/interfaces";



const App = () => {
  const [peoples, setPeoples] = useState<IPeople[]>([
    {
      id: 12,
      fullName: "محمدحسین نژادهندی",
      age: 23,
      img_url:
        "https://avatars.githubusercontent.com/u/52446257?v=4",
      bio: "توسعه دهنده",
    },
  ]);

  peoples.map((p:IPeople) => p.fullName);

  return (
    <div className="container">
      <h4 className="alert alert-warning">مدیریت اشخاص</h4>
      <List peoples={peoples} setPeoples={setPeoples}/>
      <AddPeople peoples={peoples} setPeoples={setPeoples}/>
    </div>
  );
};

export default App;
