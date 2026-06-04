import {
  IconArrowRightFromBracket,
  IconBoltCharge,
  IconCar,
  IconFileLines,
} from "./icons";

const navItems = [
  { id: "drivers", label: "Drivers", active: true, Icon: IconCar },
  { id: "charges", label: "Charges", active: false, Icon: IconBoltCharge },
  { id: "invoices", label: "Invoices", active: false, Icon: IconFileLines },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-[264px] shrink-0 flex-col bg-[#080808] text-white">
      <div className="px-7 pt-10">
        <div className="relative h-10 w-[120px]">
          <img
            src="/assets/logo-outline.png"
            alt=""
            className="absolute inset-0 h-10 w-full object-contain"
          />
          <img
            src="/assets/logo-bypass.png"
            alt="BYPASS"
            className="absolute left-[13px] top-[13px] h-[14px] w-[92px] object-contain"
          />
        </div>
      </div>

      <p className="mt-9 mb-2 px-7 text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
        Menu
      </p>
      <nav className="flex flex-col gap-1.5 px-4" aria-label="Main">
        {navItems.map(({ id, label, active, Icon }) => (
          <a
            key={id}
            href="#"
            aria-current={active ? "page" : undefined}
            className={`group flex h-[46px] items-center gap-3 rounded-xl px-4 text-[15px] leading-none transition-all duration-200 ${
              active
                ? "bg-white font-bold text-[#080808] shadow-[0_8px_24px_-8px_rgba(255,255,255,0.45)]"
                : "font-medium text-white/65 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            <Icon
              className={`h-[18px] w-[18px] shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                active ? "text-[#080808]" : "text-white/55 group-hover:text-white"
              }`}
            />
            <span>{label}</span>
            {active && (
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#080808]" />
            )}
          </a>
        ))}
      </nav>

      <div className="mt-auto px-5 pb-7">
        <div className="rounded-2xl bg-white/[0.05] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-[13px] font-bold text-[#080808]">
              DW
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold leading-tight">
                danielle.warrent
              </p>
              <p className="truncate text-[11px] leading-tight text-white/45">
                @gilbarco.com
              </p>
            </div>
          </div>
          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-[13px] font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white"
          >
            <span>Log out</span>
            <IconArrowRightFromBracket className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
