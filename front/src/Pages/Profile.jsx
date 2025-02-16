// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearUser } from "../Redux/Reducers/userSlice";

// const Profile = () => {
//     const dispatch = useDispatch();
//     // const user=useSelector(state=>state.user.user)
//     const [user, setUser] = useState({
//         name: "John Doe",
//         email: "johndoe@example.com",
//         profilePicture: "https://via.placeholder.com/100", // Default profile picture
//         joinedDate: "2023-01-01",
//     });

//     const handleLogout = () => {
//         localStorage.setItem("user", null);
//         dispatch(clearUser());
//     };
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleProfilePictureChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setUser((prevState) => ({
//                 ...prevState,
//                 profilePicture: imageUrl,
//             }));
//         }
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-6">Profile</h1>

//             {/* Profile Picture */}
//             <div className="mb-6">
//                 <img
//                     src={user.profilePicture}
//                     alt="Profile"
//                     className="w-24 h-24 rounded-full mb-4"
//                 />
//                 <label className="block mb-2">
//                     <span className="text-sm font-medium">Change Profile Picture:</span>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleProfilePictureChange}
//                         className="block mt-2"
//                     />
//                 </label>
//             </div>

//             {/* User Info */}
//             <div className="mb-6">
//                 <label className="block mb-2">
//                     <span className="text-sm font-medium">Name:</span>
//                     <input
//                         type="text"
//                         name="name"
//                         value={user.name}
//                         onChange={handleChange}
//                         className="w-full border px-3 py-2 rounded-md"
//                     />
//                 </label>
//                 <label className="block mb-2">
//                     <span className="text-sm font-medium">Email:</span>
//                     <input
//                         type="email"
//                         name="email"
//                         value={user.email}
//                         onChange={handleChange}
//                         className="w-full border px-3 py-2 rounded-md"
//                     />
//                 </label>
//             </div>

//             {/* Account Details */}
//             <div className="mb-6">
//                 <h2 className="text-xl font-semibold mb-3">Account Details</h2>
//                 <p>
//                     <span className="font-medium">Joined Date:</span> {user.joinedDate}
//                 </p>
//             </div>

//             {/* Password Management */}
//             <div className="mb-6">
//                 <h2 className="text-xl font-semibold mb-3">Password Management</h2>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//                     Change Password
//                 </button>
//             </div>

//             {/* Logout Option */}
//             <div>
//                 <button
//                     className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//                     onClick={handleLogout}
//                 >
//                     Logout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Profile;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../Redux/Reducers/userSlice";

const Profile = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
        address: "123 Main Street, Ninja City",
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s",
        joinedDate: "2023-01-01",
        darkMode: false,
        activityLogs: [
            "Logged in from Chrome on 2025-01-25 at 10:00 AM",
            "Updated profile picture on 2025-01-24",
            "Changed password on 2025-01-23",
        ],
    });

    const handleLogout = () => {
        localStorage.setItem("user", null);
        dispatch(clearUser());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUser((prevState) => ({
                ...prevState,
                profilePicture: imageUrl,
            }));
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Profile</h1>

            {/* Profile Picture */}
            <div className="mb-6">
                <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mb-4"
                />
                <label className="block mb-2">
                    <span className="text-sm font-medium">Change Profile Picture:</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        className="block mt-2"
                    />
                </label>
            </div>

            {/* User Info */}
            <div className="mb-6">
                <label className="block mb-2">
                    <span className="text-sm font-medium">Name:</span>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </label>
                <label className="block mb-2">
                    <span className="text-sm font-medium">Email:</span>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </label>
                <label className="block mb-2">
                    <span className="text-sm font-medium">Phone Number:</span>
                    <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="+1234567890"
                    />
                </label>
                <label className="block mb-2">
                    <span className="text-sm font-medium">Address:</span>
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </label>
            </div>

            {/* Preferences */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Preferences</h2>
                <label className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        name="darkMode"
                        checked={user.darkMode}
                        onChange={() =>
                            setUser((prevState) => ({
                                ...prevState,
                                darkMode: !prevState.darkMode,
                            }))
                        }
                    />
                    <span>Enable Dark Mode</span>
                </label>
            </div>

            {/* Activity Logs */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Activity Logs</h2>
                <ul className="list-disc pl-5">
                    {user.activityLogs.map((log, index) => (
                        <li key={index}>{log}</li>
                    ))}
                </ul>
            </div>

            {/* Password Management */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Password Management</h2>
                <label>
                    <span className="text-sm font-medium">New Password:</span>
                    <input
                        type="password"
                        className="w-full border px-3 py-2 rounded-md"
                    />
                    <div className="mt-2 text-sm text-green-500">Password Strength: Strong</div>
                </label>
            </div>

            {/* Logout Option */}
            <div>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
