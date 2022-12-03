import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CoursePage from "./pages/Course";
import CoursePageUser from "./pages/CoursePageUser";
import DashboardUser from "./pages/DashboardUser";
import CreateNewLectureForm from "./pages/CreateNewLectureForm";
import CreateNewLiveWebinarForm from "./pages/CreateNewLiveWebinarForm";
import LiveExistingCourse from "./pages/LiveExistingCourse"
import UploadExistingCourse from "./pages/LiveExistingCourse"
import BuyCourse from "./pages/CourseMarketing";
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
    path: '/user/course/:courseId',
    main: () => <CoursePageUser />
  },
  {
    path: '/creator/course/:courseId',
    main: () => <CoursePage />
  },
  {
    path: '/liveexcourse/:courseId',
    main: () => <LiveExistingCourse />
  },
  {
    path: '/uploadexcourse/:courseId',
    main: () => <UploadExistingCourse />
  },
  {
    path: '/buycourse/:courseId',
    main: () => <BuyCourse />
  }
];


export default routes;