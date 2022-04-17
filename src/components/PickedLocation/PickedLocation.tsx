import { Box, Text } from "@mantine/core";
import { Trash, Trash2 } from "react-feather";

export const Location = () => {
  return (
    <div className="flex cursor-pointer px-4 hover:bg-gray-100 p-2 gap-2 items-center">
      <Text size="lg" className="text-2xl">
        🍔
      </Text>
      <div>
        <Text size="sm" className="font-medium block">
          Lunch
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
