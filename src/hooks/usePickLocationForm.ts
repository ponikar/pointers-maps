import { useForm } from "@mantine/form";
import { nanoid } from "nanoid";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NewLocation } from "../@types";
import { useStore } from "../store";

const DEFAULT_STATE: NewLocation = {
  comment: "",
  duration: "",
  date: "",
  plan_title: "",
  marker: "📍",
};
export const usePickLocationForm = () => {
  const addMarkedLocation = useStore((state) => state.addMarkedLocation);

  const [searchParam] = useSearchParams();
  const navigateTo = useNavigate();

  const { getInputProps, ...form } = useForm({
    initialValues: DEFAULT_STATE,
    validate: {
      date: (val) => (!val ? "Please select date" : null),
      plan_title: (val) => (!val ? "Please add Plan title" : null),
      duration: (val) => (!val ? "Please select time" : null),
    },
  });
  const onFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (!form.validate().hasErrors) {
      addMarkedLocation({
        ...form.values,
        id: nanoid().toString(),
        map: {
          lat: Number(searchParam.get("lat")),
          lng: Number(searchParam.get("lng")),
        },
      });
      navigateTo("/map");
    }
  };

  return { onFormSubmit, getInputProps, ...form };
};
