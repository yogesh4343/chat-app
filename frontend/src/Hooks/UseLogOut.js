import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const UseLogOut = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
        console.log('logout btn')
		setLoading(true);
		try {
			const res = await fetch("/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
            console.log(data);

            localStorage.removeItem("chat-user");
			setAuthUser(null);

			if (data.error) {
				throw new Error(data.error);
			}

			// localStorage.removeItem("chat-user");
			
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default UseLogOut;