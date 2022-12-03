import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const routes = [
  {
    path: '',
    main: () => <Home />
  },
  {
    path: '/dashboard',
    main: () => <Dashboard />
  }
];


export default routes;