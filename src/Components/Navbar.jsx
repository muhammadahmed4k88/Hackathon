import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseclient";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(error.message);
    else {
      toast.success("Logged out successfully!");
      setUser(null);
      navigate("/login");
    }
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold">Pitch craft 🚀</h1>
      <div className="flex gap-4">
       
        {user ? (
          <button onClick={handleLogout} className="hover:text-gray-400 transition">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-400 transition">Login</Link>
            <Link to="/signup" className="hover:text-gray-400 transition">Signup</Link>
            {/* <Link to="/dashboard" className="hover:text-gray-400 transition">Dashboard</Link> */}
          </>
        )}
      </div>
    </nav>
  );
}
