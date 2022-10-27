import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { server } from "./../../api/api";

export default function NewTrack() {
  const a = useQuery(["track"], async () => {
    const todoById = await server.get("/track");

    return todoById;
  });

  console.log(a);
  return (
    <div>
      <h2>NewTrack</h2>
    </div>
  );
}
