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
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

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
