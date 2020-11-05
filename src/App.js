import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import { Route, Switch } from "react-router-dom";
import BioPage from "./components/BioPage/BioPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import WritingsPage from "./components/WritingsPage/WritingsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    // customizing h2 size
    // h2: {
    //   fontSize: 36,
    //   marginBottom: 15,
    // },
  },
  // defining palette for primary color
  palette: {
    primary: {
      main: "#e69456",
    },
    secondary: {
      main: "#a77898",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/bio" exact component={BioPage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/writings" exact component={WritingsPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
