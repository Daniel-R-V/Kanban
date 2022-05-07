import { useState } from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  const [user, setUser] = useState(null);

  function logout() {
    setUser(null);
  }

  function login() {
    setUser({
      name: "David Medrano",
      avatar: "https://eu.ui-avatars.com/api/?name=David",
    });
  }

  return (
    <div className="Kanban-Board">
      <Header user={user} logout={logout} login={login} />
      <Layout user={user} />
    </div>
  );
}

export default App;
