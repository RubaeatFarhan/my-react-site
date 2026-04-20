import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Community } from "./pages/Community";
import { CourseDetails } from "./pages/CourseDetails";
import { Enrollment } from "./pages/Enrollment";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/enroll/:courseId" element={<Enrollment />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Layout>
  );
}

export default App;
