import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const localData = localStorage.getItem("user");
		return localData ? JSON.parse(localData) : null;
	});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
