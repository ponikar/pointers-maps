import { Button, Header, Modal, Text } from "@mantine/core";
import React, { FC } from "react";

export const LocationInfo = () => {
  return (
    <Modal
      title={<h2 className="text-2xl">Header</h2>}
      opened
      onClose={() => console.log("w")}
    >
      <section className="flex flex-col gap-3">
        <div>
          <PropTitle>Marker</PropTitle>
          <PropBody>P</PropBody>
        </div>
        <div>
          <PropTitle>Picked By</PropTitle>
          <PropBody>Darshan Ponikar</PropBody>
        </div>
        <div>
          <PropTitle>Date & Time</PropTitle>
          <PropBody>22nd Jan, 2021, 12:00 to 01:00</PropBody>
        </div>
        <div>
          <PropTitle>Comment</PropTitle>
          <PropBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            recusandae, assumenda pariatur, quam necessitatibus quia repr
          </PropBody>
        </div>

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
