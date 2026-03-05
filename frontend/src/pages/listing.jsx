import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin, Calendar, Eye, Phone, MessageCircle, ChevronLeft, Share2, Heart, Shield, X
} from "lucide-react";
import { phones } from "../data/phones";
import PhoneCard from "../components/PhoneCard";

const conditionStyles = {
  "Like New": "condition-badge-like-new",
  "Good": "condition-badge-good",
  "Fair": "condition-badge-fair",
  "For Parts": "condition-badge-parts",
};

export default function ListingPage() {
  const { id } = useParams();
  const phone = phones.find((p) => p.id === Number(id)) || phones[0];
  const similar = phones.filter((p) => p.id !== phone.id && p.brand === phone.brand).slice(0, 4);
  const moreSimilar = similar.length < 2 ? phones.filter((p) => p.id !== phone.id).slice(0, 4) : similar;

  const [activeImage, setActiveImage] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const allImages = phone.images?.length ? phone.images : [phone.image];

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-NP", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Breadcrumbs */}
      <div className="border-b border-base-300 bg-base-200">
        <div className="page-container py-3">
          <div className="breadcrumbs text-xs text-secondary">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/buy">Buy</Link></li>
              <li className="text-base-content font-medium">{phone.name}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="page-container py-8">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          {/* Left column */}
          <div>
            {/* Image gallery */}
            <div className="mb-6">
              <div className="relative aspect-[4/3] bg-base-200 rounded-2xl overflow-hidden mb-3">
                <img
                  src={allImages[activeImage]}
                  alt={phone.name}
                  className="w-full h-full object-contain p-4"
                />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full ${conditionStyles[phone.condition] || "bg-base-300"}`}>
                  {phone.condition}
                </span>
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className={`absolute top-4 right-4 btn btn-sm btn-circle ${wishlisted ? "btn-error" : "btn-ghost bg-base-100"}`}
                >
                  <Heart size={16} fill={wishlisted ? "currentColor" : "none"} />
                </button>
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-2">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        i === activeImage ? "border-primary" : "border-base-300"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Phone details */}
            <div className="bg-base-100 border border-base-300 rounded-xl p-6 mb-5">
              <h1 className="text-2xl font-bold mb-1">{phone.name}</h1>
              <p className="text-3xl font-bold text-primary mt-3 mb-4">Rs. {phone.price.toLocaleString()}</p>

              <div className="flex flex-wrap gap-3 mb-5">
                <div className="flex items-center gap-1.5 text-xs text-secondary bg-base-200 rounded-full px-3 py-1.5">
                  <MapPin size={12} /> {phone.location}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-secondary bg-base-200 rounded-full px-3 py-1.5">
                  <Calendar size={12} /> {formatDate(phone.postedDate)}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-secondary bg-base-200 rounded-full px-3 py-1.5">
                  <Eye size={12} /> {phone.views} views
                </div>
              </div>

              <div className="divider my-4"></div>

              <h2 className="font-semibold text-sm mb-3">Specifications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: "Brand", value: phone.brand },
                  { label: "Model", value: phone.model },
                  { label: "Storage", value: phone.storage },
                  { label: "RAM", value: phone.ram },
                  { label: "Color", value: phone.color },
                  { label: "Condition", value: phone.condition },
                ].map((spec) => (
                  <div key={spec.label} className="bg-base-200 rounded-lg p-3">
                    <p className="text-xs text-secondary mb-0.5">{spec.label}</p>
                    <p className="font-medium text-sm">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-base-100 border border-base-300 rounded-xl p-6 mb-5">
              <h2 className="font-semibold text-sm mb-3">Description</h2>
              <p className="text-sm text-secondary leading-relaxed">{phone.description}</p>
            </div>

            {/* Safety tips */}
            <div className="bg-base-200 border border-base-300 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-2">Safety Tips</h3>
                  <ul className="text-xs text-secondary space-y-1.5 list-disc list-inside">
                    <li>Always meet in a public place (café, mall, etc.)</li>
                    <li>Test the phone fully before handing over cash</li>
                    <li>Check IMEI on <strong>imei.info</strong> to verify it's not stolen</li>
                    <li>Never send money in advance for delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Seller card */}
          <div>
            <div className="sticky top-24 space-y-4">
              <div className="bg-base-100 border border-base-300 rounded-xl p-6">
                <h2 className="font-semibold text-sm mb-4">Seller Information</h2>
                <div className="flex items-center gap-4 mb-5">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={phone.sellerAvatar} alt={phone.seller} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{phone.seller}</p>
                    <p className="text-xs text-secondary flex items-center gap-1 mt-0.5">
                      <MapPin size={11} /> {phone.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="btn btn-primary btn-block gap-2"
                  >
                    <Phone size={16} />
                    Show Contact
                  </button>
                  <button className="btn btn-outline btn-block gap-2">
                    <MessageCircle size={16} />
                    Send Message
                  </button>
                  <button className="btn btn-ghost btn-block gap-2 text-secondary" onClick={() => setWishlisted(!wishlisted)}>
                    <Heart size={16} fill={wishlisted ? "currentColor" : "none"} className={wishlisted ? "text-error" : ""} />
                    {wishlisted ? "Saved" : "Save Listing"}
                  </button>
                </div>
              </div>

              <div className="bg-base-100 border border-base-300 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">Rs. {phone.price.toLocaleString()}</p>
                    <p className="text-xs text-secondary mt-0.5">Negotiable</p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${conditionStyles[phone.condition] || "bg-base-300"}`}>
                    {phone.condition}
                  </span>
                </div>
                <div className="divider my-3"></div>
                <button className="btn btn-ghost btn-sm gap-2 w-full">
                  <Share2 size={14} /> Share Listing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar listings */}
        {moreSimilar.length > 0 && (
          <section className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-xl">Similar Phones</h2>
              <Link to="/buy" className="btn btn-ghost btn-sm">View All</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {moreSimilar.map((p) => <PhoneCard key={p.id} phone={p} />)}
            </div>
          </section>
        )}
      </div>

      {/* Contact modal */}
      {contactOpen && (
        <dialog open className="modal modal-open">
          <div className="modal-box max-w-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-lg">Contact Seller</h3>
              <button onClick={() => setContactOpen(false)} className="btn btn-ghost btn-sm btn-circle">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={phone.sellerAvatar} alt={phone.seller} />
                </div>
              </div>
              <div>
                <p className="font-semibold">{phone.seller}</p>
                <p className="text-sm text-secondary">{phone.location}</p>
              </div>
            </div>

            <a
              href={`tel:+977${phone.sellerPhone}`}
              className="btn btn-primary btn-block gap-3 mb-3 text-base"
            >
              <Phone size={18} />
              +977 {phone.sellerPhone}
            </a>
            <a
              href={`https://wa.me/977${phone.sellerPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-block gap-3"
            >
              WhatsApp
            </a>

            <p className="text-xs text-secondary text-center mt-5 leading-relaxed">
              Always meet in a public place and inspect the device thoroughly before paying.
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setContactOpen(false)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}
