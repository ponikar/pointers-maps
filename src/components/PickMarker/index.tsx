import { Button, Tooltip } from "@mantine/core";
import React, { FC } from "react";
import EmojiPicker, { IEmojiPickerProps } from "emoji-picker-react";

interface PickMarker {
  opened: boolean;
  onMarkerSelect: (e: string) => void;
}
export const PickMarker: FC<PickMarker> = ({ opened, onMarkerSelect }) => {
  const onSelect: IEmojiPickerProps["onEmojiClick"] = (e, data) => {
    e.stopPropagation();
    onMarkerSelect(data.emoji);
  };
  return (
    <div className="translate-y-[60%] absolute z-[1]">
      {opened && (
        <EmojiPicker
          pickerStyle={{ boxShadow: "none" }}
          onEmojiClick={onSelect}
        />
      )}
    </div>
  );
};
