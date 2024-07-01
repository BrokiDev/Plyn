import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/auth/me";

const useAuth = () => {
    const navigate = useNavigate();
    const query = useUser();
    useEffect(() => {
        const CheckAuth = async () => {
            try {
                const data = await query;
                if (data.data?.status === 'fail') {
                    navigate('/auth/sign-in');
                }
            } catch (error) {
                console.error(error);
                navigate('/auth/sign-in');
            }
        };
        CheckAuth();
    }, [query, navigate]);
};

export default useAuth;
