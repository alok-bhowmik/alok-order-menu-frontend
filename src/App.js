import logo from "./logo.svg";

import "./App.css";
import "./Sidebar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { AccordionCollapse, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ContactView from "./components/ContactView";
import ContactEdit from "./components/ContactEdit";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts} from "./redux/actions/index";
import React, { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
//Leads
import LeadView from "./components/LeadView";
import LeadEdit from "./components/LeadEdit";
import LeadList from "./components/LeadList";
import LeadCreate from "./components/LeadCreate";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/DD"
            element={
              <>
                <Sidebar />
                <Header />
                <Container className="my-3">
                  <Home />
                </Container>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <div class="wrapper">
                  <Sidebar />
                  <div id="content">
                    <Header />
                    <Home />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <div class="wrapper">
                  <Sidebar />
                  <div id="content">
                    <Header />
                    <ContactList />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="contacts/:id"
            element={
              <>
                <div class="wrapper">
                  <Sidebar />
                  <div id="content">
                    <Header />
                    <ContactView />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="contacts/:id/e"
            element={
              <>
                <div class="wrapper">
                  <Sidebar />
                  <div id="content">
                    <Header />
                    <ContactEdit />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/leads"
            element={
              <>
                <div class="wrapper">
                  <Sidebar />
                  <div id="content">
                    <Header />
                    <LeadList />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/leads/e"
            element={
              <>
                <div class="wrapper">
                  <Sidebar />
                  <div id="content">
                    <Header />
                    <LeadCreate />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="leads/:id"
            element={
              <>
                <div class="wrapper">
                  <Sidebar />
                  <div id="content">
                    <Header />
                    <LeadView />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="leads/:id/e"
            element={
              <>
                <div class="wrapper">
                  <Sidebar />
                  <div id="content">
                    <Header />
                    <LeadEdit />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
