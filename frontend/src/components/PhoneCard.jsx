import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Eye } from "lucide-react";

const conditionStyles = {
  "Like New": "condition-badge-like-new",
  "Good": "condition-badge-good",
  "Fair": "condition-badge-fair",
  "For Parts": "condition-badge-parts",
};

export default function PhoneCard({ phone }) {
  const { id, name, price, condition, storage, image, location, views } = phone;

  return (
    <Link to={`/listing/${id}`} className="card bg-base-100 border border-base-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group overflow-hidden">
      <figure className="relative aspect-square overflow-hidden bg-base-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${conditionStyles[condition] || "bg-base-300"}`}>
          {condition}
        </span>
      </figure>
      <div className="card-body p-4 gap-1">
        <h3 className="font-semibold text-sm leading-snug line-clamp-2">{name}</h3>
        <p className="text-xs text-secondary">{storage}</p>
        <p className="text-base font-bold mt-1">Rs. {price.toLocaleString()}</p>
        <div className="flex items-center justify-between mt-2 text-xs text-secondary">
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={11} />
            {views}
          </span>
        </div>
      </div>
    </Link>
  );
}
