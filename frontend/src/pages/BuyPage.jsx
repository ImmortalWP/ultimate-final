import React, { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import PhoneCard from "../components/PhoneCard";
import ScrollReveal from "../components/ScrollReveal";
import { phones, brands, conditions } from "../data/phones";

const priceRanges = [
  { label: "Under Rs. 20,000", min: 0, max: 20000 },
  { label: "Rs. 20,000 – 40,000", min: 20000, max: 40000 },
  { label: "Rs. 40,000 – 60,000", min: 40000, max: 60000 },
  { label: "Rs. 60,000 – 80,000", min: 60000, max: 80000 },
  { label: "Rs. 80,000+", min: 80000, max: Infinity },
];

const storageOptions = ["64GB", "128GB", "256GB", "512GB"];

export default function BuyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleItem = (list, setList, item) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedConditions([]);
    setSelectedPriceRange(null);
    setSelectedStorage([]);
    setSearchQuery("");
  };

  const activeFilterCount =
    selectedBrands.length +
    selectedConditions.length +
    selectedStorage.length +
    (selectedPriceRange !== null ? 1 : 0);

  const filteredPhones = useMemo(() => {
    let result = [...phones];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      );
    }
    if (selectedBrands.length > 0) result = result.filter((p) => selectedBrands.includes(p.brand));
    if (selectedConditions.length > 0) result = result.filter((p) => selectedConditions.includes(p.condition));
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }
    if (selectedStorage.length > 0) result = result.filter((p) => selectedStorage.includes(p.storage));
    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "newest": result.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate)); break;
      case "views": result.sort((a, b) => b.views - a.views); break;
    }
    return result;
  }, [searchQuery, selectedBrands, selectedConditions, selectedPriceRange, selectedStorage, sortBy]);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-sm mb-3">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2.5 cursor-pointer group">
              <input type="checkbox" className="checkbox checkbox-xs" checked={selectedBrands.includes(brand)} onChange={() => toggleItem(selectedBrands, setSelectedBrands, brand)} />
              <span className="text-sm group-hover:text-primary transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="divider my-0"></div>
      <div>
        <h3 className="font-semibold text-sm mb-3">Condition</h3>
        <div className="space-y-2">
          {conditions.map((cond) => (
            <label key={cond} className="flex items-center gap-2.5 cursor-pointer group">
              <input type="checkbox" className="checkbox checkbox-xs" checked={selectedConditions.includes(cond)} onChange={() => toggleItem(selectedConditions, setSelectedConditions, cond)} />
              <span className="text-sm group-hover:text-primary transition-colors">{cond}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="divider my-0"></div>
      <div>
        <h3 className="font-semibold text-sm mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <label key={i} className="flex items-center gap-2.5 cursor-pointer group">
              <input type="radio" name="priceRange" className="radio radio-xs" checked={selectedPriceRange === i} onChange={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)} />
              <span className="text-sm group-hover:text-primary transition-colors">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="divider my-0"></div>
      <div>
        <h3 className="font-semibold text-sm mb-3">Storage</h3>
        <div className="flex flex-wrap gap-2">
          {storageOptions.map((s) => (
            <button key={s} onClick={() => toggleItem(selectedStorage, setSelectedStorage, s)} className={`btn btn-xs ${selectedStorage.includes(s) ? "btn-primary" : "btn-outline"}`}>{s}</button>
          ))}
        </div>
      </div>
      {activeFilterCount > 0 && (
        <button onClick={clearFilters} className="btn btn-ghost btn-sm w-full text-error gap-2">
          <X size={14} /> Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-base-100 min-h-screen">
      <ScrollReveal direction="up">
        <div className="bg-base-200 border-b border-base-300 py-10">
          <div className="page-container">
            <p className="section-label mb-2">Browse & Filter</p>
            <h1 className="section-title text-3xl mb-6">Buy a Used Phone</h1>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search by name, brand or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input w-full pl-11 bg-base-100 border-base-300 focus:outline-none focus:border-primary"
              />
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs btn-circle">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="page-container py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-60 shrink-0">
            <ScrollReveal direction="left">
              <div className="sticky top-24 bg-base-100 border border-base-300 rounded-xl p-5">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-semibold text-sm">Filters</h2>
                  {activeFilterCount > 0 && <span className="badge badge-primary badge-sm">{activeFilterCount}</span>}
                </div>
                <FilterPanel />
              </div>
            </ScrollReveal>
          </aside>

          <div className="flex-1 min-w-0">
            <ScrollReveal direction="up">
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <button onClick={() => setMobileFiltersOpen(true)} className="btn btn-outline btn-sm gap-2 lg:hidden">
                    <Filter size={14} /> Filters
                    {activeFilterCount > 0 && <span className="badge badge-primary badge-xs">{activeFilterCount}</span>}
                  </button>
                  <p className="text-sm text-secondary">
                    <span className="font-semibold text-base-content">{filteredPhones.length}</span> listings found
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs text-secondary font-medium">Sort:</label>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-sm border-base-300 text-sm">
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="views">Most Viewed</option>
                  </select>
                </div>
              </div>
            </ScrollReveal>

            {filteredPhones.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredPhones.map((phone, i) => (
                  <ScrollReveal key={phone.id} delay={Math.min(i % 6, 5) * 80} direction="up">
                    <PhoneCard phone={phone} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <ScrollReveal direction="fade">
                <div className="text-center py-20">
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="font-semibold text-lg mb-2">No phones found</h3>
                  <p className="text-secondary text-sm">Try adjusting your filters or search query.</p>
                  <button onClick={clearFilters} className="btn btn-primary btn-sm mt-5">Clear Filters</button>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-base-100 overflow-y-auto p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="btn btn-ghost btn-sm btn-circle"><X size={18} /></button>
            </div>
            <FilterPanel />
            <button onClick={() => setMobileFiltersOpen(false)} className="btn btn-primary btn-block mt-6">
              Show {filteredPhones.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
