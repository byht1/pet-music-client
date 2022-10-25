import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
  );
}

export default App;
