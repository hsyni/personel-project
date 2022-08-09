import React from "react";
import PersonelList from "./../pages/PersonelList";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
      <Categories />
      <PersonelList />
    </div>
  );
}
