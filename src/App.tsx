import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGeid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  function onSelectGenre(genre: Genre) {
    setSelectedGenre(genre);
  }
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre } />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGeid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
