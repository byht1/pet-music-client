import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAppDispatch } from "redux/hook";

import { current } from "redux/auth";

import Home from "./page/Home/Home";
import AppBar from "./page/AppBar/AppBar";
import SingUp from "./page/SingUp/SingUp";
import LogIn from "./page/LogIn/LogIn";
import TrackList from "./page/TrackList/TrackList";
import NewTrack from "./page/NewTrack/NewTrack";
import Profile from "./page/Profile/Profile";
import Comment from "./page/Comment/Comment";
import ForgottenPassword from "page/ForgottenPassword/ForgottenPassword";
import { Track } from "page/NewTrack/Track/Track";
import { Album } from "page/NewTrack/Album/Album";
import { PrivateRouter } from "components/modules/PrivateRouter";
import NewPassword from "page/NewPassword/NewPassword";
import PersonalOffice from "page/PersonalOffice/PersonalOffice";

const queryClient = new QueryClient();

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(current(controller.signal));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/user">
            <Route
              index
              element={
                <PrivateRouter>
                  <PersonalOffice />
                </PrivateRouter>
              }
            />
            <Route path="sing-up" element={<SingUp />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="forgotten" element={<ForgottenPassword />} />
            <Route path="new-password" element={<NewPassword />} />
          </Route>

          <Route path="track-list" element={<TrackList />} />

          <Route
            path="new-track"
            element={
              <PrivateRouter>
                <NewTrack />
              </PrivateRouter>
            }
          />

          <Route
            path="new-track/track"
            element={
              <PrivateRouter>
                <Track />
              </PrivateRouter>
            }
          />

          <Route
            path="new-track/album"
            element={
              <PrivateRouter>
                <Album />
              </PrivateRouter>
            }
          />

          <Route path="profile" element={<Profile />} />
          <Route path="comment" element={<Comment />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
