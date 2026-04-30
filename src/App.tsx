import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Community } from "./pages/Community";
import { CourseDetails } from "./pages/CourseDetails";
import { Enrollment } from "./pages/Enrollment";
import { ProfessionalCourseDetails } from "./pages/ProfessionalCourseDetails";
import { ProfessionalCourseOrder } from "./pages/ProfessionalCourseOrder";
import { CyberCommunity } from "./pages/CyberCommunity";

const withLayout = (Component: React.FC, layoutProps: any = {}) => (
  <Layout {...layoutProps}>
    <Component />
  </Layout>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={withLayout(Home, { showFooter: false })} />
      <Route path="/about" element={withLayout(About)} />
      <Route path="/course/:courseId" element={withLayout(CourseDetails)} />
      <Route path="/enroll/:courseId" element={withLayout(Enrollment)} />
      <Route path="/community" element={<CyberCommunity />} />
      <Route path="/professional-course" element={<ProfessionalCourseDetails />} />
      <Route path="/professional-course/order" element={<ProfessionalCourseOrder />} />
    </Routes>
  );
}

export default App;
