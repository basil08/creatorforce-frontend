import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CoursePage from "./pages/Course";
import CoursePageUser from "./pages/CoursePageUser";
import DashboardUser from "./pages/DashboardUser";
import CreateNewLectureForm from "./pages/CreateNewLectureForm";
import CreateNewLiveWebinarForm from "./pages/CreateNewLiveWebinarForm";

const routes = [
  {
    path: '',
    main: () => <Home />
  },
  {
    path: '/dashboard/creator',
    main: () => <Dashboard />
  },
  {
    path: '/dashboard/user',
    main: () => <DashboardUser />
  },
  {
    path: '/newwebinar',
    main: () => <CreateNewLiveWebinarForm />
  },
  {
    path: '/newlecture',
    main: () => <CreateNewLectureForm />
  },
  {
    path: '/dashboard/:courseId/creator',
    main: () => <CoursePage />
  },
  {
    path: '/dashboard/:courseId/user',
    main: () => <CoursePageUser />
  },

];


export default routes;