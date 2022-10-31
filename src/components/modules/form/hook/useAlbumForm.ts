import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { serverNewAlbum } from "api/api";
import { useForm } from "react-hook-form";
import { IAlbumForm } from "../AlbumForm/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAlbumNew } from "../AlbumForm/schema";
import { useState } from "react";

export const useAlbumForm = (
  set: React.Dispatch<React.SetStateAction<number>>,
  current: number
) => {
  const [errorFormTwo, setErrorFormTwo] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(["album", "albumUser"], serverNewAlbum, {
    onSuccess: async () => {
      const cacheKey = ["album", "albumUser"];
      await queryClient.invalidateQueries(cacheKey);
      navigate("/", { replace: true });
    },
  });
  const methods = useForm<IAlbumForm>({
    resolver: yupResolver(schemaAlbumNew),
  });
  const { handleSubmit, trigger, clearErrors } = methods;

  const submit = async (data: any) => {
    const formData = new FormData();

    for (const key in data) {
      if (key === "picture") {
        formData.append(key, data[key][0]);
      }
      formData.append(key, data[key]);
    }

    await mutateAsync(formData);
  };

  const formIsValid = async () => {
    if (current === 1) {
      const error = await trigger(["name_album", "group_name", "release_date"]);

      if (!error) return;
    }

    if (current === 2) {
      const error = await trigger("genre");

      if (!error) {
        clearErrors("genre");
        setErrorFormTwo(!error);
        return;
      }
    }

    if (current === 3) {
      const error = await trigger("picture");

      if (!error) return;
    }

    setErrorFormTwo(false);

    set((p) => p + 1);
  };

  return { handleSubmit, submit, methods, formIsValid, errorFormTwo };
};
