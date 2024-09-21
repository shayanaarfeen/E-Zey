import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import NoPage from "./pages/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import CategoryPage from "./pages/category/CategoryPage";


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:categoryname" element={<CategoryPage />} />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          }
        />
        <Route
          path="/addproduct"
          element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          }
        />
        <Route
          path="/updateproduct/:id"
          element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          }
        />
      </Route>
    )
  );

  return (
    <div>
      <MyState>
        <RouterProvider router={router} />
        <Toaster />
      </MyState>
    </div>
  );
}

export default App
