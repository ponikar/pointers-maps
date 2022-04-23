import { Container } from "@mantine/core";
import { Search } from "../Search";
import { PickedLocations } from "../PickedLocation";

export const MapFeature = () => {
  return (
    <Container
      style={{ position: "relative", width: "100%", height: "100%" }}
      p="lg"
    >
      <Search />
      <PickedLocations />
    </Container>
  );
};
