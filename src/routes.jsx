import Analytics from "./pages/Analytics/Analytics";
import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import UsersList from "./pages/Users/UsersList";
import Home from "./pages/home/Home";
import Sales from './pages/Sales/Sales'
import Transaction from "./pages/Transaction/Transaction";
import Reports from './pages/Reports/Reports'




let routes = [
  { path: "/", element: <Home /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/sales", element: <Sales /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Product /> },
  { path: "/product/:productID", element: <Products /> },
  { path: "/transaction", element: <Transaction /> },
  { path: "/reports", element: <Reports /> },

];

export default routes;
