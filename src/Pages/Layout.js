import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex justify-between bg-slate-800 text-white py-2">
        <ul><li className="mx-4">Logo</li></ul>
        <ul className="flex">
          <li className="mx-4"><Link to="/">Home</Link></li>
          <li className="mx-4"><Link to="/products">Products</Link></li>
          <li className="mx-4"><Link to="/sale">Sale</Link></li>
          <li className="mx-4"><Link to="/about">Company</Link></li>
        </ul>
        <ul className="flex">
            <li className="mx-4">Search</li>
            <li className="mx-4">Help</li>
            <li className="mx-4">Cart 0</li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;