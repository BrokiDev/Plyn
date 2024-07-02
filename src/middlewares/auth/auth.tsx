import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/auth/me";
import Loader from "../../components/loader";


const useAuth = () => {
    const navigate = useNavigate();
    const query = useUser();
    useEffect(() => {
        const CheckAuth = () => {
            try {
                const data = query;
                if (data.data?.status === 'fail' || data.data?.status === 'error') {
                    <Loader />;
                    navigate('/auth/sign-in');
                }
            } catch (error) {
                console.error(error);
                navigate('/auth/sign-in');
            }
        };
        CheckAuth();
    }, [query, navigate]);
    return query;
};

export default useAuth;
