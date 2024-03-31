import { Grid, GridItem, Show } from "@chakra-ui/react";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem bg="red" area={"nav"}>
        NAv
      </GridItem>
      <Show above="lg" >
        <GridItem bg="yellow" area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem bg="green" area={"main"}>
        main
      </GridItem>
    </Grid>
  );
};

export default App;
