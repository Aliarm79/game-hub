import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGeid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
  serachText: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(value: string) =>
            setGameQuery({ ...gameQuery, serachText: value })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platform: platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.ordering}
              onSelectSortOrder={(value: string) =>
                setGameQuery({ ...gameQuery, ordering: value })
              }
            />
          </HStack>
        </Box>
        <GameGeid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
