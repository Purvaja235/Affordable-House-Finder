import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from '../components/Profile';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await axios.get('/api/users/profile');
            setUser(data);
        };

        fetchUser();
    }, []);

    if (!user) return <div>Loading...</div>;

    return <Profile user={user} />;
};

export default UserProfile;
