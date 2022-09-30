import React from "react";
import Navigation from "../Navigation/Navigation";
import SideNav from "../Navigation/SideNav";
import Login from "../Login/Login";
import UsersList from "../View/UsersList";
import ProjectsList from "../View/ProjectsList";
import TasksList from "../View/TasksList";

export const Home = () => {
  return (
    <div>
      {
        //<Navigation />
      }
      <SideNav>
        <UsersList />
        <TasksList />
        <ProjectsList />
      </SideNav>
    </div>
  );
};
