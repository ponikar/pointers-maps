import { Box, Text } from "@mantine/core";
import { FC } from "react";
import { Maximize, Trash, Trash2, X } from "react-feather";
import { LocationType } from "../../@types";
import { useMutateMapOptions } from "../../hooks/useMapOptions";

export const Location: FC<LocationType> = (props) => {
  const updateMapOptions = useMutateMapOptions();
  return (
    <div
      role="button"
      onClick={() => updateMapOptions({ center: { ...props.map } })}
      className="flex cursor-pointer px-4 hover:bg-gray-100 p-2 gap-2 items-center"
    >
      <Text size="lg" className="text-2xl">
        {props.marker}
      </Text>
      <div>
        <Text size="sm" className="font-medium block">
          {props.plan_title}
        </Text>
        <Text size="xs" className="block text-gray-600 font-medium -mt-1">
          Darshan Ponikar
        </Text>
      </div>

      <Box className="ml-auto items-center flex gap-4">
        <Maximize className="cursor-pointer" size={18} />
        <X size={20} className="cursor-pointer" />
      </Box>
    </div>
  );
};
