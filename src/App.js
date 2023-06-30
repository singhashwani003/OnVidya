import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import HomeThree from "./Components/Home/HomeThree";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleBlog from "./Components/Pages/SingleBlog";
import Thanks from "./Components/Pages/Thanks";
import EventTwo from "./Components/Pages/EventTwo";
import EventsThree from "./Components/Pages/EventsThree";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route
            path="/"
            element={<HomeThree />}
          />
          <Route
            path="/react-templates/edumim/home-three"
            element={<HomeThree />}
          />
          <Route path="/react-templates/edumim/about" element={<AboutOne />} />
          <Route
            path="/react-templates/edumim/instructor-two"
            element={<InstructorTwo />}
          />
          <Route path="/react-templates/edumim/event" element={<Event />} />
          <Route
            path="/react-templates/edumim/event-single"
            element={<EventSingle />}
          />
          <Route
            path="/react-templates/edumim/event-two"
            element={<EventTwo/>}
          />
          <Route
            path="/react-templates/edumim/event-three"
            element={<EventsThree/>}
          />
          <Route path="/react-templates/edumim/error" element={<ErrorPage />} />
          <Route path="/react-templates/edumim/courses" element={<Courses />} />
          <Route
            path="/react-templates/edumim/single-blog"
            element={<SingleBlog />}
          />
          <Route
            path="/react-templates/edumim/contacts"
            element={<ContactUs />}
          />
          <Route path="/react-templates/edumim/thanks" element={<Thanks/>} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
