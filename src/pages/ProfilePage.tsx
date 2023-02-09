import React, { useContext, useEffect, useState } from "react";
import { DataContext } from '../context/DataContext';

const ProfilePage = () => {
    const [isSubscribed, setIsSubscibed] = useState(false);
    const data = useContext(DataContext);

    useEffect(() => {
        if (data){
            if (data.val().abonnement){
                var parts = data.val().abonnement.AbonnementSlutt.split('-');
                var today = new Date();
                var end = new Date(parts[0], parts[1] - 1, parts[2]);
                if (end > today) setIsSubscibed(true);
            }
        }
    },[])

    return (
        <div className="userProfile">
            {data?
                <>
                    <h1>Brukerinfo</h1>
                    <p><b>Navn:</b> {data.val().Navn}</p>
                    <p><b>E-mail:</b> {data.val().Email}</p>
                    <p><b>Bruker-ID:</b> {data.key}</p>

                </> : <p>Logget ut</p>}
        </div>
    )
}

export default ProfilePage;