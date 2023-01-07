import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getLoader,
  getRefreshing,
  getToken,
  loaderReducer,
  logInReducer,
  refreshingReducer,
} from "redux/auth";

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
import { Loader } from "components/global/Loader/Loader";
import {
  PrivateRouter,
  RestrictedRoute,
} from "components/global/router/inddex";
import { useEffect } from "react";

function App() {
  const refreshing = useAppSelector(getRefreshing);
  const dispatch = useAppDispatch();
  const token = useAppSelector(getToken);
  useQuery<IUser | string, unknown, IUser, string[]>({
    queryKey: ["user"],
    queryFn: () => {
      dispatch(loaderReducer(true));
      if (!token) return "error";
      return tokenLogIn(token);
    },
    onSuccess: (data) => {
      if (typeof data === "string") return;
      dispatch(logInReducer(data));
    },
    onSettled: () => {
      dispatch(refreshingReducer(false));
      dispatch(loaderReducer(false));
    },
  });

  return (
    <>
      {refreshing ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index element={<Home />} />

              <Route path="nav" element={<Nav />} />
              <Route path="track-list" element={<TrackList />} />

              {/* Роут додавання треку */}
              <Route
                path="new"
                element={<PrivateRouter component={<NewTrack />} />}
              >
                <Route
                  index
                  element={<PrivateRouter component={<StepOne />} />}
                />
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
            {/* Роут користувача */}
            <Route path="/user">
              <Route
                index
                element={
                  // <PrivateRouter>
                  <PersonalOffice />
                  // </PrivateRouter>
                }
              />
              <Route
                path="sing-up"
                element={<RestrictedRoute component={<SingUp />} />}
              />
              <Route
                path="log-in"
                element={<RestrictedRoute component={<LogIn />} />}
              />
              <Route
                path="forgotten"
                element={<RestrictedRoute component={<ForgottenPassword />} />}
              />
              <Route
                path="new-password/:id"
                element={<RestrictedRoute component={<NewPassword />} />}
              />
            </Route>

            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </>
      )}

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
