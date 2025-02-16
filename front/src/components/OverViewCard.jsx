import React from "react";

const OverViewCard = ({ title, value, icon, color }) => {
    return (
        <div className={`p-4 bg-${color}-100 rounded-lg shadow-md`}>
            <div className="flex items-center">
                <div className={`p-2 bg-${color}-500 text-white rounded-full`}>{icon}</div>

                <div className="ml-4">
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <p className="text-xl font-semibold">{value}</p>
                </div>
            </div>
        </div>
    );
};

export default OverViewCard;
