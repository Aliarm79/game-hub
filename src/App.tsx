import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem  area={"nav"}>
       <NavBar/>
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
