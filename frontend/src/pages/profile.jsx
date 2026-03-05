import React, { useState } from "react";
import { User, Lock, List, MapPin, Phone, Mail, Eye, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";
import { phones } from "../data/phones";

const myListings = phones.slice(0, 3);

const tabs = [
  { id: "profile", label: "Profile Info", icon: <User size={15} /> },
  { id: "listings", label: "My Listings", icon: <List size={15} /> },
  { id: "security", label: "Security", icon: <Lock size={15} /> },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Shubham Neupane",
    email: "shubhamneupane36@gmail.com",
    phone: "9841234567",
    city: "Kathmandu",
  });
  const [passwords, setPasswords] = useState({ current: "", newPass: "", confirm: "" });

  const handleProfileSave = (e) => {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 3000);
    setPasswords({ current: "", newPass: "", confirm: "" });
  };

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header */}
      <div className="bg-base-200 border-b border-base-300 py-10">
        <div className="page-container">
          <div className="flex items-center gap-5">
            <div className="avatar avatar-placeholder">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
                {form.name.charAt(0)}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">{form.name}</h1>
              <p className="text-secondary text-sm flex items-center gap-1.5 mt-1">
                <MapPin size={13} /> {form.city}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container py-8">
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Sidebar tabs */}
          <aside className="lg:w-52 shrink-0">
            <ul className="menu bg-base-100 border border-base-300 rounded-xl p-2 gap-0.5">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2.5 text-sm ${activeTab === tab.id ? "active font-medium" : ""}`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content area */}
          <div className="flex-1 min-w-0">
            {/* Profile Info Tab */}
            {activeTab === "profile" && (
              <div className="bg-base-100 border border-base-300 rounded-xl p-6">
                <h2 className="font-semibold text-base mb-1">Profile Information</h2>
                <p className="text-secondary text-xs mb-6">Update your personal details shown to other users.</p>

                {profileSaved && (
                  <div role="alert" className="alert alert-success alert-soft mb-5">
                    <CheckCircle size={16} />
                    <span className="text-sm">Profile updated successfully.</span>
                  </div>
                )}

                <form onSubmit={handleProfileSave} className="space-y-5 max-w-lg">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xs">Email Address</legend>
                    <label className="input w-full border-base-300 bg-base-200">
                      <Mail size={15} className="text-secondary" />
                      <input
                        type="email"
                        value={form.email}
                        disabled
                        className="text-secondary cursor-not-allowed"
                      />
                    </label>
                    <p className="label text-xs text-secondary">Email cannot be changed.</p>
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xs">Full Name</legend>
                    <label className="input w-full border-base-300">
                      <User size={15} className="text-secondary" />
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </label>
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xs">Phone Number</legend>
                    <label className="input w-full border-base-300">
                      <Phone size={15} className="text-secondary" />
                      <input
                        type="tel"
                        placeholder="98XXXXXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </label>
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xs">City</legend>
                    <label className="input w-full border-base-300">
                      <MapPin size={15} className="text-secondary" />
                      <input
                        type="text"
                        placeholder="e.g. Kathmandu"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                      />
                    </label>
                  </fieldset>

                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {/* My Listings Tab */}
            {activeTab === "listings" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-semibold text-base">My Listings</h2>
                    <p className="text-secondary text-xs mt-0.5">{myListings.length} active listings</p>
                  </div>
                  <Link to="/sell" className="btn btn-primary btn-sm">+ New Listing</Link>
                </div>

                {myListings.length === 0 ? (
                  <div className="bg-base-100 border border-base-300 rounded-xl p-12 text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="font-semibold mb-2">No listings yet</h3>
                    <p className="text-secondary text-sm mb-5">Start selling your phones today.</p>
                    <Link to="/sell" className="btn btn-primary btn-sm">List a Phone</Link>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {myListings.map((phone) => (
                      <div key={phone.id} className="relative">
                        <PhoneCard phone={phone} />
                        <div className="absolute top-2 right-2 flex gap-1">
                          <button className="btn btn-xs bg-base-100 border border-base-300">Edit</button>
                          <button className="btn btn-xs btn-error btn-outline">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="bg-base-100 border border-base-300 rounded-xl p-6">
                <h2 className="font-semibold text-base mb-1">Change Password</h2>
                <p className="text-secondary text-xs mb-6">Update your account password.</p>

                {passwordSaved && (
                  <div role="alert" className="alert alert-success alert-soft mb-5">
                    <CheckCircle size={16} />
                    <span className="text-sm">Password changed successfully.</span>
                  </div>
                )}

                <form onSubmit={handlePasswordSave} className="space-y-5 max-w-lg">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xs">Current Password</legend>
                    <input
                      type="password"
                      placeholder="Enter current password"
                      className="input w-full border-base-300"
                      value={passwords.current}
                      onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                      required
                    />
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xs">New Password</legend>
                    <input
                      type="password"
                      placeholder="Enter new password (min. 8 characters)"
                      className="input w-full border-base-300"
                      value={passwords.newPass}
                      onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                      required
                      minLength={8}
                    />
                  </fieldset>

                  <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xs">Confirm New Password</legend>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="input w-full border-base-300"
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                      required
                    />
                  </fieldset>

                  <button type="submit" className="btn btn-primary">
                    Update Password
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
