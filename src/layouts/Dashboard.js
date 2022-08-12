import React from "react";
import PersonelList from "./../pages/PersonelList";
import Categories from "./Categories";
import { Grid, Container } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import PersonelDetail from "../pages/PersonelDetail";
import PersonelAdd from "../pages/PersonelAdd";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { ToastContainer } from "react-toastify";
import Navi from "./Navi";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Navi />
      <Container className="main">
        <Grid stackable>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" element={<PersonelList />} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" element={<Register />} />
              <Route path="/personels" element={<PersonelList />} />
              <Route path="/personels/:id" elemet={<PersonelDetail />} />
              <Route path="/personel/add" element={<PersonelAdd />} />
            </Routes>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
