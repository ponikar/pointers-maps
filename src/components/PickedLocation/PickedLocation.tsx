import { Box, Text } from "@mantine/core";
import { FC } from "react";
import { Trash, Trash2 } from "react-feather";
import { LocationType } from "../../@types";
import { useMutateMapOptions } from "../../store/mapOptions";

export const Location: FC<LocationType> = (props) => {
  const updateMapOptions = useMutateMapOptions();
  return (
    <div
      role="button"
      onClick={() => updateMapOptions({ center: { ...props.map }, zoom: 10 })}
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

      <Box className="ml-auto">
        <Trash size={20} />
      </Box>
    </div>
  );
};
