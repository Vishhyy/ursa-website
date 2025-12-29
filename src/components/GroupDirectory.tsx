"use client";

import { useState } from "react";
import { groupList } from "@/data/groupList";
import {
    Search, Mail, Instagram, UserCircle,
    BookOpen, Trophy, Building2, Users,
    Briefcase, HeartHandshake, Info
} from "lucide-react";

export default function GroupDirectory() {
    const [search, setSearch] = useState("");

    const filteredGroups = groupList.filter((g) =>
        g.name.toLowerCase().includes(search.toLowerCase()) ||
        g.category.toLowerCase().includes(search.toLowerCase())
    );

    const allCategories = ["Academic Society", "Club", "Federated College", "Faculty", "Administration", "Campus Service", "Athletics", "Service & Advocacy"];

    const activeCategories = allCategories.filter(cat =>
        filteredGroups.some(g => g.category === cat)
    );

    const getCategoryIcon = (cat: string) => {
        switch (cat) {
            case "Academic Society": return <BookOpen size={20} />;
            case "Athletics": return <Trophy size={20} />;
            case "Club": return <Users size={20} />;
            case "Service & Advocacy": return <HeartHandshake size={20} />;
            case "Campus Service": return <Info size={20} />;
            case "Administration": return <Briefcase size={20} />;
            case "Faculty": return <Building2 size={20} />;
            default: return <Building2 size={20} />;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full">

            {/* Search Header */}
            <div className="bg-accent p-6 md:p-8 text-white relative z-20 flex flex-col gap-4">
                <div className="relative w-full group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-accent transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search for a society, club, or service..."
                        className="w-full pl-12 pr-4 py-4 rounded-md text-gray-900 text-base focus:outline-none focus:ring-4 focus:ring-gold/50 font-bold placeholder:text-gray-400 placeholder:font-medium shadow-lg transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider ml-1">
                    Try "Engineering", "Rugby", or "Advocacy"
                </p>
            </div>

            {/* Content Area */}
            <div className="bg-gray-50 min-h-[600px] flex flex-col pb-12 relative z-10">
                {activeCategories.map((cat) => {
                    const catGroups = filteredGroups.filter((g) => g.category === cat);

                    return (
                        <div key={cat} className="relative group/section">

                            {/* --- NEW VIBRANT SEPARATOR --- */}
                            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-t border-gray-100 px-6 md:px-8 py-5 flex items-center justify-between shadow-md transition-all group-hover/section:border-gold">
                                <div className="flex items-center gap-4">
                                    {/* Icon in Gold Gradient Circle */}
                                    <div className="p-3 bg-gradient-to-br from-gold/80 to-gold text-accent rounded-full shadow-lg border border-gold/50 shrink-0">
                                        {getCategoryIcon(cat)}
                                    </div>

                                    {/* Title Text */}
                                    <h3 className="font-display font-black text-xl md:text-2xl text-accent uppercase tracking-wide group-hover/section:text-black transition-colors leading-none">
                                        {cat}
                                    </h3>
                                </div>

                                {/* Item Count */}
                                <div className="hidden sm:block text-xs font-bold text-gray-400 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
                                    {catGroups.length} Items
                                </div>
                            </div>

                            {/* Grid Cards */}
                            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {catGroups.map((group, i) => (
                                    <div
                                        key={i}
                                        className="bg-white border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-xl hover:border-accent hover:-translate-y-1 transition-all flex flex-col h-full justify-between group/card"
                                    >
                                        <div className="mb-6">
                                            <h4 className="font-bold text-base md:text-lg text-gray-800 leading-tight mb-2 group-hover/card:text-accent transition-colors">
                                                {group.name}
                                            </h4>

                                            {group.keyPerson && (
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                                                    <UserCircle size={12} className="text-gold" />
                                                    {group.keyPerson}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {group.instagram && (
                                                <a
                                                    href={`https://instagram.com/${group.instagram}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex-1 min-w-[100px] justify-center inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 text-accent text-[11px] font-bold rounded-sm hover:bg-accent hover:text-white hover:border-accent transition-all shadow-sm"
                                                >
                                                    <Instagram size={14} /> Instagram
                                                </a>
                                            )}

                                            {group.email ? (
                                                <a
                                                    href={`mailto:${group.email}`}
                                                    className="flex-1 min-w-[100px] justify-center inline-flex items-center gap-1.5 px-3 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-[11px] font-bold rounded-sm hover:bg-gold hover:text-black hover:border-gold transition-all shadow-sm"
                                                >
                                                    <Mail size={14} /> Email
                                                </a>
                                            ) : (
                                                group.contactMethod && (
                                                    <span className="flex-1 min-w-[120px] justify-center inline-flex items-center gap-1.5 px-3 py-2 bg-gray-100 border border-gray-200 text-gray-500 text-[10px] font-bold uppercase rounded-sm cursor-default">
                                                        {group.contactMethod}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {filteredGroups.length === 0 && (
                    <div className="text-center py-24 opacity-50 px-6">
                        <Search size={48} className="text-gray-300 mx-auto mb-4" />
                        <p className="font-bold text-gray-500 text-lg">No results found for "{search}".</p>
                        <p className="text-sm text-gray-400 mb-6">Check your spelling or try searching "Club".</p>
                        <button onClick={() => setSearch('')} className="px-6 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-accent font-bold hover:bg-gold hover:text-white transition-all text-sm">
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}