import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="page-container py-14">
        <div className="footer footer-horizontal gap-y-10">
          {/* Brand */}
          <div className="col-span-full lg:col-span-1 max-w-xs">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 bg-primary-content/20 rounded-sm flex items-center justify-center">
                <Phone size={16} className="text-neutral-content" />
              </div>
              <span>HamroPhone</span>
            </Link>
            <p className="text-sm text-neutral-content/60 mt-3 leading-relaxed">
              Nepal's trusted marketplace for buying and selling used smartphones. Get the best deals safely.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="btn btn-ghost btn-xs btn-circle hover:bg-neutral-content/10">
                <Facebook size={15} />
              </a>
              <a href="#" className="btn btn-ghost btn-xs btn-circle hover:bg-neutral-content/10">
                <Instagram size={15} />
              </a>
              <a href="#" className="btn btn-ghost btn-xs btn-circle hover:bg-neutral-content/10">
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h6 className="footer-title text-neutral-content/50 text-xs">Quick Links</h6>
            <Link to="/" className="link link-hover text-sm">Home</Link>
            <Link to="/buy" className="link link-hover text-sm">Buy a Phone</Link>
            <Link to="/sell" className="link link-hover text-sm">Sell a Phone</Link>
            <Link to="/profile" className="link link-hover text-sm">My Account</Link>
          </nav>

          {/* Brands */}
          <nav>
            <h6 className="footer-title text-neutral-content/50 text-xs">Browse by Brand</h6>
            <Link to="/buy?brand=Apple" className="link link-hover text-sm">Apple</Link>
            <Link to="/buy?brand=Samsung" className="link link-hover text-sm">Samsung</Link>
            <Link to="/buy?brand=Google" className="link link-hover text-sm">Google</Link>
            <Link to="/buy?brand=OnePlus" className="link link-hover text-sm">OnePlus</Link>
            <Link to="/buy?brand=Xiaomi" className="link link-hover text-sm">Xiaomi</Link>
          </nav>

          {/* Contact */}
          <nav>
            <h6 className="footer-title text-neutral-content/50 text-xs">Contact Us</h6>
            <a className="flex items-center gap-2 text-sm" href="mailto:hello@hamrophone.com.np">
              <Mail size={14} className="opacity-60" />
              hello@hamrophone.com.np
            </a>
            <a className="flex items-center gap-2 text-sm" href="tel:+9779800000000">
              <Phone size={14} className="opacity-60" />
              +977 980-000-0000
            </a>
            <span className="flex items-center gap-2 text-sm opacity-70">
              <MapPin size={14} className="opacity-60" />
              Kathmandu, Nepal
            </span>
          </nav>
        </div>

        <div className="divider my-8 opacity-20"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-content/50">
          <p>© 2025 HamroPhone. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="link link-hover">Privacy Policy</a>
            <a href="#" className="link link-hover">Terms of Service</a>
            <a href="#" className="link link-hover">Safety Tips</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
