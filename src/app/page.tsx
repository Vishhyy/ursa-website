import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { Eye, ShieldCheck, Users, ChevronRight, CheckCircle2, Quote, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 pb-0 relative">

      {/* --- NEW BACKGROUND: CONSTELLATION WATERMARK --- */}
      {/* Subtle lines connecting points, like the Big Dipper - adds University academic texture */}
      <div className="fixed inset-0 z-[-2] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23004F2E' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6">

        {/* IMAGE: Adjusted for Mobile (Center alignment keeps faces visible) */}
        <div className="absolute inset-0 z-[-2]">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2532&auto=format&fit=crop"
            alt="Student Unity"
            fill
            className="object-cover object-center md:object-top"
            priority
          />
        </div>

        {/* FADE: Slightly taller on mobile to ensure white text pops */}
        <div className="absolute bottom-0 left-0 right-0 h-[20%] md:h-[15%] bg-gradient-to-t from-background to-transparent z-[-1]" />

        <div className="container mx-auto mt-10 md:mt-0">
          <FadeIn>
            {/* TEXT: Massive responsive scaling to fix wrapping issues */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-9xl uppercase leading-[0.9] tracking-tighter mb-6 md:mb-8 text-accent drop-shadow-2xl">
              Transparent<br />
              <span className="text-stroke text-transparent">Student-Led</span><br />
              Governance<span className="text-gold">.</span>
            </h1>

            <div className="bg-surface/90 backdrop-blur-md p-6 border-l-4 border-gold w-full md:max-w-2xl mb-8 md:mb-12 rounded-r-sm shadow-md">
              <p className="text-textMain text-lg md:text-xl font-bold leading-tight">
                Building transparent, accountable, student-led governance for the University of Regina.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Link href="/documents" className="w-full md:w-auto px-8 py-4 bg-accent text-white font-black uppercase text-sm tracking-widest hover:bg-gold hover:text-accent transition-colors flex items-center gap-2 justify-center shadow-2xl rounded-sm">
                Read The Plan <ChevronRight size={16} />
              </Link>
              <Link href="/leadership" className="w-full md:w-auto px-8 py-4 bg-white border-2 border-white text-accent font-bold uppercase text-sm tracking-widest hover:bg-accent hover:text-white hover:border-accent transition-colors flex items-center gap-2 justify-center rounded-sm shadow-xl">
                Meet The Team
              </Link>
              {/* BUTTON 3: EVENT (GOLD) - VISIBILITY FIX */}
              <Link
                href="/events"
                className="w-full md:w-auto px-8 py-4 bg-gold border-2 border-gold text-accent font-bold uppercase text-sm tracking-widest hover:bg-accent hover:text-white hover:border-accent transition-colors flex items-center gap-2 justify-center rounded-sm shadow-xl"
              >
                Upcoming Events <Calendar size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- DIVIDER LINE (Responsive) --- */}
      <div className="container mx-auto px-6 relative z-20">
        <FadeIn delay={0.2}>
          <div className="w-full flex items-center justify-center gap-2 md:gap-4 py-8">
            {/* Shortens lines on mobile */}
            <div className="h-[2px] bg-gradient-to-r from-transparent to-gold/50 w-12 md:flex-grow md:max-w-[400px]"></div>
            <div className="text-accent bg-white p-2 rounded-full shadow-sm border border-gold/30 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="h-[2px] bg-gradient-to-l from-transparent to-gold/50 w-12 md:flex-grow md:max-w-[400px]"></div>
          </div>
        </FadeIn>
      </div>

      {/* --- PILLARS --- */}
      <section className="pb-24 px-6 relative z-10">
        <div className="container mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-12">
              <span className="font-bold text-gold uppercase tracking-widest text-xs md:text-sm mb-3">Our Core Values</span>
              <h2 className="font-display font-black text-3xl md:text-5xl text-accent">The 3 Pillars of URSA</h2>
              <div className="w-16 md:w-24 h-1 bg-gray-300 mt-4 md:mt-6 rounded-full"></div>
            </div>
          </FadeIn>

          {/* Stacks on mobile (grid-cols-1) -> Row on Desktop (grid-cols-3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { icon: Eye, title: "Transparent", desc: "Open processes. Clear communication. Students always know what’s happening." },
              { icon: ShieldCheck, title: "Accountable", desc: "Structures that include oversight, reporting, and responsibility at every level." },
              { icon: Users, title: "Student-Led", desc: "Driven by student voices. Every decision starts with and serves students." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group h-full p-8 md:p-10 bg-white shadow-sm border border-gray-200/50 border-t-[6px] border-t-accent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase text-accent group-hover:text-gold transition-colors">{item.title}</h3>
                    <div className="p-3 bg-gray-50 shadow-inner rounded-full text-accent group-hover:text-gold transition-colors">
                      <item.icon size={24} className="md:w-7 md:h-7" />
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION (Stacked layout for Mobile) --- */}
      <section className="container-fluid py-24 md:py-32 px-6 relative overflow-hidden bg-white/50 border-t border-accent/5">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col xl:flex-row gap-12 md:gap-20 items-start">

            {/* TEXT */}
            <div className="xl:w-5/12 flex flex-col justify-center w-full">
              <FadeIn>
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-2 bg-gold"></div>
                  <span className="text-accent font-bold tracking-widest uppercase text-sm">About Us</span>
                </div>

                <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-accent leading-none mb-8">
                  What is <br /> URSA?
                </h2>

                <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  <p>
                    URSA is a student-led initiative working to build a modern, transparent, and accountable governance framework for the <span className="bg-white px-2 py-1 shadow-sm rounded-sm border border-gray-200 font-bold text-accent">University of Regina student body.</span>
                  </p>

                  <div className="bg-white p-6 md:p-8 rounded-sm shadow-md border-l-4 border-accent relative">
                    <Quote className="absolute top-4 left-4 text-gray-100 fill-gray-100 -z-10" size={60} />
                    <p className="italic text-gray-800 relative z-10">
                      "URSA was created through ongoing collaboration between multiple student organizations who have been working together for months to protect student interests and strengthen student representation on campus."
                    </p>
                  </div>

                  <p className="text-gray-600">
                    During the interim period, URSA is focused on establishing foundational documents, building representative structures, and preparing for a fully elected student governance model.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* FEATURE CARD (Full width on mobile) */}
            <div className="xl:w-7/12 w-full">
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">

                  {/* 
                      --- UPDATED HEADER (Glossy Green) --- 
                      Changed: Used 'bg-constellation' and REMOVED the dark overlay div
                  */}
                  <div className="bg-constellation p-6 md:p-12 border-b-8 border-gold relative shadow-inner">

                    <div className="flex items-center gap-4 md:gap-6 text-white relative z-10">
                      <div className="p-3 bg-white/10 rounded-full shrink-0 shadow-lg border border-white/10">
                        <ShieldCheck size={32} className="text-gold md:w-10 md:h-10 drop-shadow-md" />
                      </div>
                      <div>
                        <h3 className="font-display font-black text-xl md:text-4xl uppercase tracking-wide mb-1 drop-shadow-md">
                          Key Constitution Features
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-12 bg-white">
                    <ul className="grid gap-6">
                      {[
                        'The "Senate" comprises of a General Council, Executive Council, and Board of Trustees.',
                        'The "Executive Council" comprises the President and Vice-Presidents, carries out logistical management and oversight and communicates with external stakeholders on behalf of the membership. They are required to report regularly to, and answer questions from, the General Council.',
                        'The "General Council" is the legislative body of URSA. It comprises of Faculty Representatives, allocated by student population, Group Representatives, representing ratified student groups (i.e. societies, club), and the Executive Council as ex officio members.',
                        'The General Council is intended to represent the interests and voices of the students, legislate on their behalf, and hold the executive accountable through various representations.',
                        'The "Board of Trustees" comprises of six General Council-appointed members (2 student, 2 alumni, and 2 community members) to provide regular financial oversight.',
                        'Interim Executives shall not be eligible for re-election come the regular voting period.',
                        'The Interim Executives receive no salary or honoraria.',
                        'The hiring process of the General Manager includes checks to ensure competency and eliminate nepotism.'
                      ].map((text, idx) => (
                        <li key={idx} className="flex gap-4 items-start group">
                          <div className="mt-1 min-w-[24px]">
                            <CheckCircle2 size={24} className="text-gold group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed group-hover:text-black transition-colors">
                            {text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}