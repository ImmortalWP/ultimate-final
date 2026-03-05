import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Phone, Search, ShoppingBag, Tag, User, Menu, X, LogOut, List } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buy?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/buy", label: "Buy" },
    { to: "/sell", label: "Sell" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-base-100 border-b border-base-300">
      <div className="page-container">
        <div className="navbar px-0 min-h-[64px]">
          {/* Logo */}
          <div className="navbar-start">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Phone size={16} className="text-primary-content" />
              </div>
              <span>HamroPhone</span>
            </Link>
          </div>

          {/* Center nav links + search */}
          <div className="navbar-center hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search phones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-sm w-64 pl-9 bg-base-200 border-base-300 rounded-full text-sm focus:outline-none focus:border-base-content"
              />
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" />
            </form>
          </div>

          {/* Right actions */}
          <div className="navbar-end gap-2">
            <Link to="/sell" className="btn btn-primary btn-sm hidden lg:flex gap-2">
              <Tag size={15} />
              Sell Phone
            </Link>

            {/* Profile dropdown */}
            <div className="dropdown dropdown-end hidden lg:block">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle">
                <User size={18} />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-48 p-2 shadow-lg border border-base-300 mt-2">
                <li>
                  <Link to="/profile" className="flex items-center gap-2 text-sm">
                    <User size={14} /> My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="flex items-center gap-2 text-sm">
                    <List size={14} /> My Listings
                  </Link>
                </li>
                <li className="divider my-0"></li>
                <li>
                  <Link to="/signin" className="flex items-center gap-2 text-sm text-error">
                    <LogOut size={14} /> Sign Out
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile hamburger */}
            <button
              className="btn btn-ghost btn-sm btn-circle lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-base-300 bg-base-100">
          <div className="page-container py-4 flex flex-col gap-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search phones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-sm w-full pl-9 bg-base-200 border-base-300"
              />
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" />
            </form>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/profile"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium py-1"
            >
              Profile
            </Link>
            <Link
              to="/signin"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium py-1 text-secondary"
            >
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
