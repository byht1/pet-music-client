import { useApiUser } from "./authStore";

export const useStoreUser = () => {
  const [user, logIn] = useApiUser((state) => [
    {
      username: state.username,
      email: state.email,
      token: state.token,
      trackList: state.track_list,
      trackPush: state.track_push,
    },
    // state.registration,
    state.logIn,
  ]);

  return { user, logIn };
};
