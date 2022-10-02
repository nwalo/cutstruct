import React from "react";
import Navigation from "../Navigation/Navigation";
import SideNav from "../Navigation/SideNav";
import Login from "../Login/Login";
import UsersList from "../View/UsersList";
import ProjectUserList from "../View/ProjectsUsersList";
import ProjectsList from "../View/ProjectsList";
import TasksList from "../View/TasksList";
import AddProject from "../Add/AddProject";
import AddUser from "../Add/AddUser";
import AddTask from "../Add/AddTask";
import Header from "../Header/Header";
import Register from "../Register/Register";
import { Route, Routes, useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <SideNav>
              <Header />
            </SideNav>
          }
        />
        <Route
          path="/users"
          element={
            <SideNav>
              <UsersList />
            </SideNav>
          }
        />
        <Route
          path="/user"
          element={
            <SideNav>
              <AddUser />
            </SideNav>
          }
        />{" "}
        {/* ?new=true/false */}
        <Route
          path="/project"
          element={
            <SideNav>
              <AddProject />
            </SideNav>
          }
        />
        {/* ?new=true/false */}
        <Route
          path="/projects"
          element={
            <SideNav>
              <ProjectsList />
            </SideNav>
          }
        />
        <Route
          path="/projects/:projectId/tasks"
          element={
            <SideNav>
              <TasksList />
            </SideNav>
          }
        />
        <Route
          path="/projects/:projectId/users"
          element={
            <SideNav>
              <ProjectUserList />
            </SideNav>
          }
        />
      </Routes>

      {
        //<Navigation />
        // <SideNav>
        //   <Header />
        //   <AddProject />
        //   <AddUser />
        //   <UsersList />
        //   <TasksList />
        //   <ProjectsList />
        // </SideNav>
      }
    </div>
  );
};
