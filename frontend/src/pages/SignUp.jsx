import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Lock, Eye, EyeOff, User, ArrowRight, CheckCircle } from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const passwordStrength = (p) => {
    if (!p) return { level: 0, label: "" };
    if (p.length < 6) return { level: 1, label: "Weak" };
    if (p.length < 10) return { level: 2, label: "Fair" };
    return { level: 3, label: "Strong" };
  };

  const strength = passwordStrength(form.password);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-xl">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Phone size={20} className="text-primary-content" />
            </div>
            <span>HamroPhone</span>
          </Link>
          <h1 className="text-2xl font-bold mt-6 mb-1">Create your account</h1>
          <p className="text-secondary text-sm">Join thousands of buyers and sellers in Nepal</p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {["Free to list", "Direct contact", "No commission"].map((b) => (
            <div key={b} className="bg-base-100 border border-base-300 rounded-xl p-3 text-center">
              <CheckCircle size={14} className="text-success mx-auto mb-1" />
              <p className="text-xs font-medium">{b}</p>
            </div>
          ))}
        </div>

        <div className="bg-base-100 border border-base-300 rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xs">Full Name *</legend>
              <label className="input w-full border-base-300 focus-within:border-primary">
                <User size={15} className="text-secondary" />
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  autoComplete="name"
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xs">Email Address *</legend>
              <label className="input w-full border-base-300 focus-within:border-primary">
                <Mail size={15} className="text-secondary" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  autoComplete="email"
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xs">Phone Number *</legend>
              <label className="input w-full border-base-300 focus-within:border-primary">
                <Phone size={15} className="text-secondary" />
                <input
                  type="tel"
                  placeholder="98XXXXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  autoComplete="tel"
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xs">Password *</legend>
              <label className="input w-full border-base-300 focus-within:border-primary">
                <Lock size={15} className="text-secondary" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  minLength={8}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-secondary hover:text-primary"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </label>
              {form.password && (
                <div className="mt-2">
                  <div className="flex gap-1 h-1">
                    {[1, 2, 3].map((l) => (
                      <div
                        key={l}
                        className={`flex-1 rounded-full transition-colors ${
                          strength.level >= l
                            ? l === 1 ? "bg-error" : l === 2 ? "bg-warning" : "bg-success"
                            : "bg-base-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs mt-1 ${
                    strength.level === 1 ? "text-error" :
                    strength.level === 2 ? "text-warning" : "text-success"
                  }`}>
                    {strength.label}
                  </p>
                </div>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xs">Confirm Password *</legend>
              <label className={`input w-full border-base-300 focus-within:border-primary ${
                form.confirm && form.confirm !== form.password ? "border-error" : ""
              }`}>
                <Lock size={15} className="text-secondary" />
                <input
                  type="password"
                  placeholder="Repeat your password"
                  value={form.confirm}
                  onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                  required
                  autoComplete="new-password"
                />
              </label>
              {form.confirm && form.confirm !== form.password && (
                <p className="label text-xs text-error">Passwords don't match.</p>
              )}
            </fieldset>

            <button type="submit" className="btn btn-primary btn-block gap-2 mt-2">
              Create Account <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-xs text-secondary text-center mt-5 leading-relaxed">
            By creating an account, you agree to our{" "}
            <a href="#" className="underline hover:text-primary">Terms of Service</a> and{" "}
            <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
          </p>
        </div>

        <p className="text-center text-sm text-secondary mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
