import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getToken, logInReducer } from "redux/auth";

import Home from "./page/Home/Home";
import AppBar from "./page/AppBar/AppBar";
import SingUp from "./page/SingUp/SingUp";
import LogIn from "./page/LogIn/LogIn";
import TrackList from "./page/TrackList/TrackList";
import Profile from "./page/Profile/Profile";
import Comment from "./page/Comment/Comment";
import ForgottenPassword from "page/ForgottenPassword/ForgottenPassword";
// import { Track } from "page/NewTrack/Track/Track";
// import { Album } from "page/NewTrack/Album/Album";
// import { PrivateRouter } from "components/modules/PrivateRouter";
import NewPassword from "page/NewPassword/NewPassword";
import PersonalOffice from "page/PersonalOffice/PersonalOffice";
import { CardAudioPlayer } from "components/global/audio/CardAudioPlayer";
import { Nav } from "page/Nav/Nav";
import { Track, Album, StepOne, StepTwo } from "page/NewTrack";
import NewTrack from "page/NewTrack/NewTrack";
import { tokenLogIn } from "api";
import { IUser } from "redux/auth/type/type";

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(getToken);
  useQuery<IUser | string, unknown, IUser, string[]>({
    queryKey: ["user"],
    queryFn: () => {
      if (!token) return "error";
      return tokenLogIn(token);
    },
    onSuccess: (data) => {
      if (typeof data === "string") return;
      dispatch(logInReducer(data));
    },
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />

          <Route path="nav" element={<Nav />} />
          <Route path="track-list" element={<TrackList />} />

          <Route path="new" element={<NewTrack />}>
            <Route index element={<StepOne />} />
            <Route path="step2" element={<StepTwo />}>
              <Route index element={<Track />} />
              <Route path="album" element={<Album />} />
            </Route>
          </Route>

          {/* <Route
            path="new-track/track"
            element={
              // <PrivateRouter>
              <Track />
              // </PrivateRouter>
            }
          />

          <Route
            path="new-track/album"
            element={
              // <PrivateRouter>
              <Album />
              // </PrivateRouter>
            }
          /> */}

          <Route path="profile" element={<Profile />} />
          <Route path="comment" element={<Comment />} />
        </Route>
        <Route path="/user">
          <Route
            index
            element={
              // <PrivateRouter>
              <PersonalOffice />
              // </PrivateRouter>
            }
          />
          <Route path="sing-up" element={<SingUp />} />
          <Route path="log-in" element={<LogIn />} />
          <Route path="forgotten" element={<ForgottenPassword />} />
          <Route path="new-password/:id" element={<NewPassword />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />

      <CardAudioPlayer />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
