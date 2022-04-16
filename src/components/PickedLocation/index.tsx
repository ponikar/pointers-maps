import { Box, Card, Divider, Text } from "@mantine/core";
import React from "react";
export const PickedLocations = () => {
  return (
    <div className="fixed w-[20%] h-1/2 right-2 top-[50%] translate-y-[-50%]">
      <Card className="w-full h-full">
        <Card.Section p="lg" pb="sm">
          <Text size="lg" className="font-semibold">
            📌 Picked Location
          </Text>
        </Card.Section>
        <Card.Section className="h-[95%] border" pl="sm">
          <section className="overflow-y-auto max-h-full">
            {Array(10)
              .fill(0)
              .map((s, index) => (
                <Location key={index} />
              ))}
          </section>
        </Card.Section>
      </Card>
    </div>
  );
};

const Location = () => {
  return (
    <div className="flex p-2 gap-2 items-center">
      <Text size="xl">😃</Text>
      <Text size="sm">Surat</Text>

      <Box className="ml-auto">
        <Text size="sm">Delete</Text>
      </Box>
    </div>
  );
};
