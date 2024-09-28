import React, { useEffect } from 'react';
import cookies from 'js-cookie'; 
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const userId = cookies.get("userId");

    useEffect(() => {
        if (!userId) {
            navigate("/login");
        }
    }, [userId, navigate]); 

    return (
        <div>
            {userId ? children : null} 
        </div>
    );
}

export default ProtectedRoute;
