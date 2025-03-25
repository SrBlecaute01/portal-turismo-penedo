import {HashRouter, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import Loading from "../components/Loading";

const HomePage = lazy(() => import("../pages/Home"))
const HotelsPage = lazy(() => import("../pages/Hotels"))
const RestaurantsPage = lazy(() => import("../pages/Restaurants"))
const EventsPage = lazy(() => import("../pages/Events"))
const TourismPage = lazy(() => import("../pages/Tourism"))
const RoutesPage = lazy(() => import("../pages/Routes"))
const MapPage = lazy(() => import("../pages/Map"))
const RoutesDetailsPage = lazy(() => import("../pages/RoutesDetails"))

function AppRouter() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/hoteis" element={<HotelsPage/>}/>
          <Route path="/restaurantes" element={<RestaurantsPage/>}/>
          <Route path="/eventos" element={<EventsPage/>}/>
          <Route path="/turismo" element={<TourismPage/>}/>
          <Route path="/rotas" element={<RoutesPage/>}/>
          <Route path="/mapa" element={<MapPage apiKey={""}/>}/>
          <Route path="/detalhes-rotas" element={<RoutesDetailsPage/>}/>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default AppRouter;