export interface IPeople {
  id: number;
  fullName: string;
  age: number;
  img_url: string;
  bio?: string;
}

export interface IListProps {
  peoples: IPeople[];
  setPeoples: React.Dispatch<React.SetStateAction<IPeople[]>>;
}

export interface IAddPeopleProps {
  peoples: IPeople[];
  setPeoples: React.Dispatch<React.SetStateAction<IPeople[]>>;
}

export interface IEditPeopleProps {
  people: IPeople;
  peoples: IPeople[];
  setPeoples: React.Dispatch<React.SetStateAction<IPeople[]>>;
}
