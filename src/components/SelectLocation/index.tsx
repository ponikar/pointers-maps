import {
  Button,
  InputWrapper,
  Modal,
  Textarea,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { DatePicker, TimeRangeInput } from "@mantine/dates";

import React, { useState } from "react";
import { usePickLocationForm } from "../../hooks/usePickLocationForm";
import { useStore } from "../../store";
import { PickMarker } from "../PickMarker";

export const SelectLocation = () => {
  const { onFormSubmit, getInputProps, ...form } = usePickLocationForm();
  const [showMarkers, setShowMarkers] = useState(false);

  const setTempSelectedCords = useStore((state) => state.setTempSelectedCords);
  const hideMarkers = () => {
    setShowMarkers(false);
  };

  const onClickMarker: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    setShowMarkers((old) => !old);
  };

  const onMarkerSelect = (e: string) => {
    form.setFieldValue("marker", e);
    hideMarkers();
  };

  return (
    <Modal
      title="Plan your Next Adventure!"
      opened
      onClose={() => setTempSelectedCords({ lat: null, lng: null })}
    >
      <form onSubmit={onFormSubmit}>
        <InputWrapper label="What's your Plan?">
          <TextInput
            rightSection={
              <>
                <Tooltip withArrow arrowSize={4} label="Select Marker">
                  <Button
                    onClick={onClickMarker}
                    className="text-lg"
                    color="dark"
                  >
                    {form.values.marker}
                  </Button>
                </Tooltip>
                <PickMarker
                  onMarkerSelect={onMarkerSelect}
                  opened={showMarkers}
                />
              </>
            }
            {...getInputProps("plan_title")}
            placeholder="Sunday Lunch!"
          />
        </InputWrapper>

        <DatePicker
          {...getInputProps("date")}
          my="xs"
          label="Pick Date"
          placeholder="January 9, 2022"
        />
        <TimeRangeInput
          my="xs"
          label="Pick Time Duration"
          placeholder="January 9, 2022"
          {...getInputProps("duration")}
        />
        <Textarea
          {...getInputProps("comment")}
          label="Comment"
          placeholder="Be on time!"
        />

        <Button type="submit" mt="xs" color="dark" fullWidth>
          Pick Location
        </Button>
      </form>
    </Modal>
  );
};
