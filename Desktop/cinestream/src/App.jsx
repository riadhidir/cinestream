import { useState } from "react";

import "./App.css";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import { QueryClientProvider, QueryClient, useQuery,} from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
function App() {
    const [count, setCount] = useState(0);
    const client = new QueryClient();
    
    return (
        <Router>
            <QueryClientProvider client={client}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Movie/>} />

                </Routes>
            </QueryClientProvider>
        </Router>
    );
}

export default App;
