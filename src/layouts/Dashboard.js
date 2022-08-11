import React from "react";
import PersonelList from "./../pages/PersonelList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import PersonelDetail from "../pages/PersonelDetail";
import PersonelAdd from "../pages/PersonelAdd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" element={<PersonelList />} />
              <Route path="/personels" element={<PersonelList />} />
              <Route path="/personels/:id" element={<PersonelDetail />} />
              <Route path="/personel/add" element={<PersonelAdd />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
