import { verifyMe } from "@/services/api/auth";
import { axiosClient } from "@/services/api/axios";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent: any) => {
    const Wrapper = (props: any) => {
        const router = useRouter();

        useEffect(() => {
            // Check if the user is authenticated
            const checkAuthen = async () => {
                const rs = await verifyMe();
                if (rs.data.statusCode < 200 || rs.data.statusCode >= 300) {
                    router.push("/auth/login");
                }
            }
            checkAuthen();
        }, []);
        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default withAuth;