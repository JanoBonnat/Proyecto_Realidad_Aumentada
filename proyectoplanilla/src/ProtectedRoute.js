import { useAuth } from '../context/AuthContext';

export function ProtectedRoute ({ children }){

    const { user, loading} = useAuth();

    if (loading) return <h1> Loading </h1>

    if (loading) return <Navigate to = "/login" /> ;
    
    return <> { children } </>
}

/*archivo firebase no se sube a la base de datos*/