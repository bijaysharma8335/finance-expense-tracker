import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaMoneyBill, FaWallet, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearUser } from "../Redux/Reducers/userSlice";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch(clearUser());

        // navigate("/");
    };
    return (
        <aside className="w-64 bg-purple-600 text-white p-4">
            <h2 className="text-2xl font-bold mb-6  font-poppins">Expense Tracker</h2>
            <nav className="space-y-4">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center py-2 px-4 bg-purple-700 rounded-md"
                            : "flex items-center py-2 px-4 hover:bg-purple-700 rounded-md"
                    }
                >
                    <FaHome className="mr-3" /> Dashboard
                </NavLink>
                <NavLink
                    to="expense"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center py-2 px-4 bg-purple-700 rounded-md"
                            : "flex items-center py-2 px-4 hover:bg-purple-700 rounded-md"
                    }
                >
                    <FaMoneyBill className="mr-3" /> Expense
                </NavLink>
                <NavLink
                    to="income"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center py-2 px-4 bg-purple-700 rounded-md"
                            : "flex items-center py-2 px-4 hover:bg-purple-700 rounded-md"
                    }
                >
                    <FaWallet className="mr-3" /> Income
                </NavLink>
                <NavLink
                    to="profile"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center py-2 px-4 bg-purple-700 rounded-md"
                            : "flex items-center py-2 px-4 hover:bg-purple-700 rounded-md"
                    }
                >
                    <FaUser className="mr-3" /> Profile
                </NavLink>
                <NavLink
                    to="settings"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center py-2 px-4 bg-purple-700 rounded-md"
                            : "flex items-center py-2 px-4 hover:bg-purple-700 rounded-md"
                    }
                >
                    <FaCog className="mr-3" /> Settings
                </NavLink>
                <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center py-2 px-4 bg-purple-700 rounded-md"
                            : "flex items-center py-2 px-4 hover:bg-purple-700 rounded-md"
                    }
                    onClick={handleLogout}
                >
                    <FaSignOutAlt className="mr-3" /> Logout
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;
