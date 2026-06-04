import Sidebar from "./Sidebar";
import {
  IconArrowLeft,
  IconBolt,
  IconBoltCharge,
  IconClock,
  IconMail,
  IconPen,
  IconPhone,
  IconWallet,
} from "./icons";

const stats = [
  { label: "Total spend", value: "£0", Icon: IconWallet },
  { label: "Charging sessions", value: "0", Icon: IconBoltCharge },
  { label: "Last active", value: "—", Icon: IconClock },
];

export default function DriverProfile() {
  return (
    <div className="flex min-h-screen w-full bg-[#f4f4f5]">
      <Sidebar />

      <main className="min-w-0 flex-1 px-6 py-8 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[900px]">
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-[15px] leading-none text-[#494949] transition-colors hover:text-[#080808]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform group-hover:-translate-x-0.5">
              <IconArrowLeft className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium">All drivers</span>
          </a>

          <section className="fade-up mt-6 rounded-3xl bg-white p-6 shadow-[0_2px_24px_-12px_rgba(8,8,8,0.18)] ring-1 ring-black/[0.04] sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#080808] text-2xl font-bold text-white">
                  KJ
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="font-numans text-[30px] leading-none tracking-[-0.5px] text-[#080808]">
                      Keith Jenkins
                    </h1>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[12px] font-semibold text-amber-700 ring-1 ring-amber-200">
                      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Pending
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-[#494949]">
                    <span className="inline-flex items-center gap-2">
                      <IconMail className="h-4 w-4 text-[#9a9a9a]" />
                      keith@gilbarco.com
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <IconPhone className="h-4 w-4 text-[#9a9a9a]" />
                      07142954019
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#080808] px-5 text-[15px] font-semibold text-white transition-all hover:bg-[#262626] hover:shadow-lg active:scale-[0.98]"
              >
                <IconPen className="h-3.5 w-3.5" />
                <span>Edit driver</span>
              </button>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-amber-50/70 p-4 ring-1 ring-amber-100">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-600">
                <IconClock className="h-3.5 w-3.5" />
              </span>
              <p className="text-[14px] leading-snug text-amber-800">
                Invite sent. Awaiting driver to download the Bypass app and activate their card.
              </p>
            </div>
          </section>

          <div className="fade-up mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3" style={{ animationDelay: "0.06s" }}>
            {stats.map(({ label, value, Icon }) => (
              <div
                key={label}
                className="rounded-2xl bg-white p-5 shadow-[0_2px_24px_-14px_rgba(8,8,8,0.16)] ring-1 ring-black/[0.04] transition-shadow hover:shadow-[0_8px_28px_-14px_rgba(8,8,8,0.22)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4f4f5] text-[#080808]">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <p className="mt-3 text-[13px] font-medium text-[#9a9a9a]">{label}</p>
                <p className="mt-0.5 font-numans text-[24px] leading-none tracking-[-0.4px] text-[#080808]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <section className="fade-up mt-5 rounded-3xl bg-white p-6 shadow-[0_2px_24px_-12px_rgba(8,8,8,0.18)] ring-1 ring-black/[0.04] sm:p-8" style={{ animationDelay: "0.12s" }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-numans text-[20px] leading-none tracking-[-0.3px] text-[#080808]">
                Charger transactions
              </h2>
              <span className="inline-flex items-baseline gap-0.5 rounded-full bg-[#f4f4f5] px-3 py-1.5 font-numans text-[#080808]">
                <span className="text-[13px]">£</span>
                <span className="text-[18px] leading-none tracking-[-0.3px]">0</span>
              </span>
            </div>

            <div className="mt-6 flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-[#e4e4e7] bg-[#fafafa] p-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#080808] text-white">
                <IconBolt className="h-7 w-7" />
              </span>
              <div>
                <p className="text-[16px] font-semibold text-[#080808]">
                  No transactions yet
                </p>
                <p className="mt-1 text-[14px] text-[#9a9a9a]">
                  Sessions will appear here once Keith starts charging.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
