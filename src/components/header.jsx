import { Link } from "react-router-dom";
import { Search, User, Truck} from "lucide-react";

export default function Header() {
  return (
    <header style={{ position: "", top: 0, zIndex: 50, marginBottom: 10, width: '100vw' }}>
      <div style={{ width: '90vw', padding: "0 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
        <Truck style={{ height: "24px", width: "24px", marginRight: "8px" }} />
          <Link to="/" style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none", color: "#000" }}>
            Geelex Logistics
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: 'right', gap: "2rem" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem", fontSize:'1.25rem', textDecoration:'none', }}>
            <Link to="/" style={{ color: '#333', textDecoration:'none', }}>Home</Link>
            <Link to="/services" style={{ color: '#333', textDecoration:'none', }}>Services</Link>
            <Link to="/about" style={{ color: '#333', textDecoration:'none', }}>About</Link>
            <Link to="/contact" style={{ color: '#333', textDecoration:'none', }}>Contact us</Link>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link to="/login" style={{ display: "flex", alignItems: "center", color: "#1f2937", fontWeight: "500", textDecoration: "none" }}>
            <User style={{ height: "20px", width: "20px", marginRight: "4px" }} />LogIn
            </Link>
            <button
              aria-label="Search"
              style={{ color: "#1f2937", background: "none", border: "none", cursor: "pointer" }}
            >
              <Search style={{ height: "20px", width: "20px" }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
