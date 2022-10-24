import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Box from "./components/global/Box/Box";
import Home from "./page/Home/Home";
import AppBar from "./page/AppBar/AppBar";
import SingUp from "./page/SingUp/SingUp";
import LogIn from "./page/LogIn/LogIn";
import TrackList from "./page/TrackList/TrackList";
import NewTrack from "./page/NewTrack/NewTrack";
import Profile from "./page/Profile/Profile";
import Comment from "./page/Comment/Comment";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="sing-up" element={<SingUp />} />
          <Route path="log-in" element={<LogIn />} />
          <Route path="track-list" element={<TrackList />} />
          <Route path="new-track" element={<NewTrack />} />
          <Route path="profile" element={<Profile />} />
          <Route path="comment" element={<Comment />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Box>
  );
}

export default App;
