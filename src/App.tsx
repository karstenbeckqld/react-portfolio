import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import {DataContextProvider} from "./context/DataContext.tsx";
import '@shoelace-style/shoelace/dist/themes/dark.css';
import {setBasePath} from "@shoelace-style/shoelace";

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/');


function App() {

    return (
        <DataContextProvider>
            <div className="App">
                <BrowserRouter>
                    <main>
                        <Routes> <Route
                        path="/"
                        element={<Home />}
                    /> <Route
                        path="/details"
                        element={<Details />}
                    /> </Routes>

                    </main>
                </BrowserRouter>
            </div>
        </DataContextProvider>
    );
}

export default App;
