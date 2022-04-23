import { Button, Header, Modal, Text } from "@mantine/core";
import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../store";

export const LocationInfo = () => {
  const { id } = useParams<{ id: string }>();
  const navigateTo = useNavigate();

  const location = useStore(
    (state) => state.markedLocations.filter((loc) => loc.id === id)[0]
  );

  console.log("LOC", location);
  return (
    <Modal
      title={<h2 className="text-2xl">{location.plan_title}</h2>}
      opened
      onClose={() => navigateTo("/map")}
    >
      <section className="flex flex-col gap-3">
        <div>
          <PropTitle>Marker</PropTitle>
          <PropBody>
            <p className="text-2xl">{location.marker}</p>
          </PropBody>
        </div>
        <div>
          <PropTitle>Picked By</PropTitle>
          <PropBody>Darshan Ponikar</PropBody>
        </div>
        <div>
          <PropTitle>Date</PropTitle>
          <PropBody>{new Date(location.date).toLocaleDateString()}</PropBody>
        </div>

        <div>
          <PropTitle>Time Duration</PropTitle>
          <PropBody>
            {new Date(location.duration[0]).toLocaleTimeString()} To{" "}
            {new Date(location.duration[1]).toLocaleTimeString()}
          </PropBody>
        </div>

        {location.comment && (
          <div>
            <PropTitle>Comment</PropTitle>
            <PropBody>{location.comment}</PropBody>
          </div>
        )}

        <section className="flex gap-1 justify-end">
          <Button color="dark" variant="white">
            Edit
          </Button>
          <Button color="red">Delete</Button>
        </section>
      </section>
    </Modal>
  );
};

const PropTitle: FC = ({ children }) => (
  <Text size="sm" className="font-medium">
    {children}
  </Text>
);
const PropBody: FC = ({ children }) => (
  <Text className="leading-4" size="sm">
    {children}
  </Text>
);
