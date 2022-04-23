import { useForm } from "@mantine/form";
import { nanoid } from "nanoid";
import React from "react";
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
  const setTempSelectedCords = useStore((state) => state.setTempSelectedCords);
  const tempSelectedCords = useStore((state) => state.tempSelectedCords);
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
    if (
      !form.validate().hasErrors &&
      tempSelectedCords.lng &&
      tempSelectedCords.lng
    ) {
      addMarkedLocation({
        ...form.values,
        id: nanoid().toString(),
        map: tempSelectedCords,
      });
      setTempSelectedCords({ lng: null, lat: null });
    }
  };

  return { onFormSubmit, getInputProps, ...form };
};
