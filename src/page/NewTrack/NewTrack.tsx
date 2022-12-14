import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { server } from "./../../api/api";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "components/modules/Footer";
import { NewPushTrack } from "components/modules/NewPushTrack";

export default function NewTrack() {
  // const a = useQuery(["track"], async () => {
  //   const todoById = await server.get("/track");

  //   return todoById;
  // });

  return (
    <>
      <NewPushTrack />
      {/* <Section> */}
      {/* <h2>NewTrack</h2> */}
      {/* <ul>
        <li>
          <NavLink to={"/new-track/album"}>Створити новий альбом</NavLink>
        </li>
        <li>
          <NavLink to={"/new-track/track"}>Додати трек</NavLink>
        </li>
      </ul> */}

      {/* <Outlet /> */}
      {/* </Section> */}

      <Footer />
    </>
  );
}
