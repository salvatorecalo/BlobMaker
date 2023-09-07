import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/generate" element={<div>Generate</div>} />
                <Route path="/*" element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
