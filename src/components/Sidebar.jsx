import { IconArrowRightFromBracket, IconCar, IconFileLines } from "./icons";

const navItems = [
  { id: "drivers", label: "Drivers", active: true, icon: "car" },
  { id: "charges", label: "Charges", active: false, icon: "charges" },
  { id: "invoices", label: "Invoices", active: false, icon: "file" },
];

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-[296px] shrink-0 flex-col bg-[#080808] text-white">
      <div className="px-6 pt-12">
        <div className="relative h-10 w-[114px]">
          <img
            src="/assets/logo-outline.png"
            alt=""
            className="absolute inset-0 h-10 w-full object-contain"
          />
          <img
            src="/assets/logo-bypass.png"
            alt="BYPASS"
            className="absolute left-[12px] top-[13px] h-[14px] w-[88px] object-contain"
          />
        </div>
      </div>

      <nav className="mt-10 flex flex-col gap-1 px-6" aria-label="Main">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`flex h-14 items-center gap-3 rounded-lg px-4 text-base leading-[1.2] ${
              item.active
                ? "bg-white font-semibold text-[#080808]"
                : "font-normal text-white hover:bg-white/10"
            }`}
            aria-current={item.active ? "page" : undefined}
          >
            {item.icon === "car" && <IconCar className="h-5 w-5 shrink-0" />}
            {item.icon === "charges" && (
              <img
                src="/assets/icon-charges.png"
                alt=""
                className={`h-[19px] w-[19px] shrink-0 ${item.active ? "" : "brightness-0 invert"}`}
              />
            )}
            {item.icon === "file" && <IconFileLines className="h-5 w-5 shrink-0" />}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto px-6 pb-10">
        <div className="mb-6 h-px w-full bg-white/20" />
        <p className="mb-6 text-base font-semibold leading-[1.2]">danielle.warrent@gilbarco.com</p>
        <button
          type="button"
          className="flex items-center gap-2.5 text-base leading-[1.2] text-white hover:opacity-80"
        >
          <span>Log out</span>
          <IconArrowRightFromBracket />
        </button>
      </div>
    </aside>
  );
}
