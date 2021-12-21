import { Routes, Route } from 'react-router-dom';

import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/Setting/Setting";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";



function App() {
  const user = false;
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
