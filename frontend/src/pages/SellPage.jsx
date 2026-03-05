import React, { useState } from "react";
import { Camera, CheckCircle, ChevronRight } from "lucide-react";
import { brands, conditions } from "../data/phones";

const storageOptions = ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"];
const ramOptions = ["2GB", "3GB", "4GB", "6GB", "8GB", "12GB", "16GB"];

const conditionDescriptions = {
  "Like New": "Device is in perfect condition, no signs of use.",
  "Good": "Minor signs of use, no cracks or major scratches.",
  "Fair": "Visible signs of use, may have scratches or small cracks.",
  "For Parts": "Device has significant damage or doesn't turn on.",
};

export default function SellPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    brand: "",
    model: "",
    storage: "",
    ram: "",
    color: "",
    condition: "",
    price: "",
    description: "",
    name: "",
    phone: "",
    location: "",
    email: "",
  });

  const update = (field, val) => setForm((prev) => ({ ...prev, [field]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-success" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Listing Published!</h2>
          <p className="text-secondary mb-8 leading-relaxed">
            Your phone has been listed successfully. Buyers will be able to contact you directly.
          </p>
          <div className="flex gap-3 justify-center">
            <a href="/buy" className="btn btn-primary">Browse Other Phones</a>
            <button onClick={() => { setSubmitted(false); setStep(1); setForm({ brand:"",model:"",storage:"",ram:"",color:"",condition:"",price:"",description:"",name:"",phone:"",location:"",email:"" }); }} className="btn btn-outline">
              List Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header */}
      <div className="bg-base-200 border-b border-base-300 py-10">
        <div className="page-container">
          <p className="section-label mb-2">Free Listing</p>
          <h1 className="section-title text-3xl">Sell Your Phone</h1>
          <p className="text-secondary mt-2 text-sm">Fill in the details below. Takes less than 5 minutes.</p>
        </div>
      </div>

      <div className="page-container py-10">
        {/* Steps progress */}
        <div className="flex items-center gap-0 mb-10 max-w-lg">
          {["Device Info", "Condition & Price", "Your Details"].map((label, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  i + 1 < step ? "bg-success text-white" :
                  i + 1 === step ? "bg-primary text-primary-content" :
                  "bg-base-300 text-secondary"
                }`}>
                  {i + 1 < step ? <CheckCircle size={16} /> : i + 1}
                </div>
                <span className={`text-xs font-medium ${i + 1 === step ? "text-primary" : "text-secondary"}`}>
                  {label}
                </span>
              </div>
              {i < 2 && <div className={`h-px flex-1 mb-5 mx-2 ${i + 1 < step ? "bg-success" : "bg-base-300"}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="max-w-2xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Device Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="bg-base-100 border border-base-300 rounded-xl p-6">
                  <h2 className="font-semibold text-base mb-5">Device Information</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">Brand *</legend>
                      <select
                        className="select w-full border-base-300"
                        value={form.brand}
                        onChange={(e) => update("brand", e.target.value)}
                        required
                      >
                        <option value="" disabled>Select brand</option>
                        {brands.map((b) => <option key={b}>{b}</option>)}
                      </select>
                    </fieldset>

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">Model *</legend>
                      <input
                        type="text"
                        placeholder="e.g. iPhone 14 Pro, Galaxy S23"
                        className="input w-full border-base-300"
                        value={form.model}
                        onChange={(e) => update("model", e.target.value)}
                        required
                      />
                    </fieldset>

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">Storage *</legend>
                      <select
                        className="select w-full border-base-300"
                        value={form.storage}
                        onChange={(e) => update("storage", e.target.value)}
                        required
                      >
                        <option value="" disabled>Select storage</option>
                        {storageOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </fieldset>

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">RAM</legend>
                      <select
                        className="select w-full border-base-300"
                        value={form.ram}
                        onChange={(e) => update("ram", e.target.value)}
                      >
                        <option value="" disabled>Select RAM</option>
                        {ramOptions.map((r) => <option key={r}>{r}</option>)}
                      </select>
                    </fieldset>

                    <fieldset className="fieldset sm:col-span-2">
                      <legend className="fieldset-legend text-xs">Color</legend>
                      <input
                        type="text"
                        placeholder="e.g. Midnight Black, Snow White"
                        className="input w-full border-base-300"
                        value={form.color}
                        onChange={(e) => update("color", e.target.value)}
                      />
                    </fieldset>
                  </div>
                </div>

                {/* Photo upload */}
                <div className="bg-base-100 border border-base-300 rounded-xl p-6">
                  <h2 className="font-semibold text-base mb-2">Photos</h2>
                  <p className="text-secondary text-xs mb-4">Add up to 6 photos. Clear photos get more inquiries.</p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg border-2 border-dashed border-base-300 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-base-200 transition-colors ${
                          i === 0 ? "col-span-2 row-span-2" : ""
                        }`}
                      >
                        <Camera size={i === 0 ? 24 : 16} className="text-secondary mb-1" />
                        {i === 0 && <span className="text-xs text-secondary">Main photo</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <button type="button" onClick={() => setStep(2)} className="btn btn-primary gap-2">
                  Continue <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* Step 2: Condition & Price */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="bg-base-100 border border-base-300 rounded-xl p-6">
                  <h2 className="font-semibold text-base mb-5">Condition</h2>
                  <div className="space-y-3">
                    {conditions.map((cond) => (
                      <label
                        key={cond}
                        className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
                          form.condition === cond
                            ? "border-primary bg-primary/5"
                            : "border-base-300 hover:border-base-content"
                        }`}
                      >
                        <input
                          type="radio"
                          name="condition"
                          className="radio radio-sm mt-0.5"
                          checked={form.condition === cond}
                          onChange={() => update("condition", cond)}
                        />
                        <div>
                          <p className="font-medium text-sm">{cond}</p>
                          <p className="text-xs text-secondary mt-0.5">{conditionDescriptions[cond]}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-base-100 border border-base-300 rounded-xl p-6">
                  <h2 className="font-semibold text-base mb-5">Pricing & Description</h2>
                  <div className="space-y-5">
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">Asking Price (Rs.) *</legend>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-secondary text-sm">Rs.</span>
                        <input
                          type="number"
                          placeholder="e.g. 45000"
                          className="input w-full border-base-300 pl-12"
                          value={form.price}
                          onChange={(e) => update("price", e.target.value)}
                          required
                          min="1"
                        />
                      </div>
                    </fieldset>

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">Description *</legend>
                      <textarea
                        className="textarea w-full border-base-300 min-h-32"
                        placeholder="Describe the phone's condition, accessories included, reason for selling, battery health, etc."
                        value={form.description}
                        onChange={(e) => update("description", e.target.value)}
                        required
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="btn btn-outline">
                    Back
                  </button>
                  <button type="button" onClick={() => setStep(3)} className="btn btn-primary gap-2">
                    Continue <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-base-100 border border-base-300 rounded-xl p-6">
                  <h2 className="font-semibold text-base mb-5">Your Contact Details</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">Full Name *</legend>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="input w-full border-base-300"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        required
                      />
                    </fieldset>

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">Phone Number *</legend>
                      <input
                        type="tel"
                        placeholder="98XXXXXXXX"
                        className="input w-full border-base-300"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        required
                      />
                    </fieldset>

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">Email</legend>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="input w-full border-base-300"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </fieldset>

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend text-xs">City / Location *</legend>
                      <input
                        type="text"
                        placeholder="e.g. Kathmandu, Pokhara"
                        className="input w-full border-base-300"
                        value={form.location}
                        onChange={(e) => update("location", e.target.value)}
                        required
                      />
                    </fieldset>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-base-200 border border-base-300 rounded-xl p-5">
                  <h3 className="font-semibold text-sm mb-3">Listing Summary</h3>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary">Device</span>
                      <span className="font-medium">{form.brand} {form.model || "—"} {form.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary">Condition</span>
                      <span className="font-medium">{form.condition || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary">Asking Price</span>
                      <span className="font-bold">Rs. {form.price ? Number(form.price).toLocaleString() : "—"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="btn btn-outline">
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary flex-1">
                    Publish Listing
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
