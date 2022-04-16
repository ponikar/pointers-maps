import { Button, Input, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { useStore } from "../../store";

export const PickEmoji = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const setEmoji = useStore((state) => state.setEmoji);
  return (
    <>
      <Modal
        withCloseButton={false}
        opened={true}
        onClose={() => {}}
        title="Pick your Favorite Emoji!"
      >
        {/* Modal content */}
        <Text size="xl" align="center" style={{ fontSize: "50px" }}>
          {selectedEmoji ? selectedEmoji : "👋"}
        </Text>

        <Input my="xs" placeholder="Mike" />
        <Picker
          pickerStyle={{ width: "100%" }}
          onEmojiClick={(e, { emoji }) => setSelectedEmoji(emoji)}
        />

        <Button
          color="dark"
          disabled={!selectedEmoji}
          onClick={() => setEmoji(selectedEmoji)}
          fullWidth
          my="sm"
        >
          Pick Emoji
        </Button>
      </Modal>
    </>
  );
};
