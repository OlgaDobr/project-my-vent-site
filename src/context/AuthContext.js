import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchProduct = async () => {
        try {
            const response = await fetch("/api/v1/product");
            if (response.ok) {
                setProduct(await response.json());
            } else {
                setProduct(null);
            }
        } catch {
            setProduct(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(fetchProduct, []);

    return (
        <AuthContext.Provider value={{ product, loading, setProduct }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}