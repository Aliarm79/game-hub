import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGeid from "./components/GameGrid";
import GenreList from "./components/GenreList";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGeid />
      </GridItem>
    </Grid>
  );
};

export default App;
