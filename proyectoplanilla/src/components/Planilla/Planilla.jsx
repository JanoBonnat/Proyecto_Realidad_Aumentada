import React from "react";

const Planilla = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShowProducts></ShowProducts>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export { Planilla };