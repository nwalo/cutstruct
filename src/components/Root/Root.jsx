// import React from "react";
// import Navigation from "../Navigation/Navigation";
// import SideNav from "../Navigation/SideNav";
// import Login from "../Login/Login";
// import UsersList from "../View/UsersList";
// import ProjectsList from "../View/ProjectsList";
// import TasksList from "../View/TasksList";
// import AddProject from "../Add/AddProject";
// import AddUser from "../Add/AddUser";
// import Header from "../Header/Header";
// import { Route, Routes } from "react-router-dom";

// export const Root = () => {
//   return (
//     <div>
//       <Routes>
//         <Route
//           path="/dashboard"
//           element={
//             <SideNav>
//               <Header />
//             </SideNav>
//           }
//         />
//         <Route
//           path="/users"
//           element={
//             <SideNav>
//               <UsersList />
//             </SideNav>
//           }
//         />
//         <Route
//           path="/user"
//           element={
//             <SideNav>
//               <AddUser />
//             </SideNav>
//           }
//         />{" "}
//         {/* ?new=true/false */}
//         <Route
//           path="/project"
//           element={
//             <SideNav>
//               <AddProject />
//             </SideNav>
//           }
//         />
//         {/* ?new=true/false */}
//         <Route
//           path="/projects"
//           element={
//             <SideNav>
//               <ProjectsList />
//             </SideNav>
//           }
//         />
//         <Route
//           path="/projects/tasks"
//           element={
//             <SideNav>
//               <TasksList />
//             </SideNav>
//           }
//         />
//       </Routes>

//       {
//         //<Navigation />
//         // <SideNav>
//         //   <Header />
//         //   <AddProject />
//         //   <AddUser />
//         //   <UsersList />
//         //   <TasksList />
//         //   <ProjectsList />
//         // </SideNav>
//       }
//     </div>
//   );
// };
