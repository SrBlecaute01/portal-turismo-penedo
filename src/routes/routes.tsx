import {HashRouter, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import Loading from "../components/Loading";

const HomePage = lazy(() => import("../pages/Home"))
const HotelsPage = lazy(() => import("../pages/Hotels"))

function AppRouter() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/hoteis" element={<HotelsPage/>}/>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default AppRouter;