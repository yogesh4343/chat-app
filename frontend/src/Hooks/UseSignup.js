import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp  = async({fullName, userName, password, confirmPassword, gender})=>{
    const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });

    if (!success) return;

    setLoading(true);
    try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
			});

			const data = await res.json();
      console.log(data)
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	// return { loading, signUp };

  // }

  return { loading, signUp };
}

export default UseSignup





function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
	if (!fullName || !userName || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}