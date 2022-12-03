import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CoursePage from "./pages/Course";

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
    path: '/dashboard/:courseId',
    main: () => <CoursePage />
  }
];


export default routes;