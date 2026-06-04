import Sidebar from "./Sidebar";
import { IconArrowLeft, IconBolt, IconPen } from "./icons";

export default function DriverProfile() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <Sidebar />

      <main className="min-w-0 flex-1 px-10 py-12 lg:px-14">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 text-base leading-[1.2] text-[#080808] hover:opacity-70"
        >
          <IconArrowLeft />
          <span className="font-normal">All drivers</span>
        </a>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="font-numans text-[32px] leading-[1.2] tracking-[-0.32px] text-[#080808]">
              Keith Jenkins
            </h1>
            <div className="mt-3 flex flex-wrap gap-x-10 gap-y-1 text-base leading-[1.2] text-[#080808]">
              <p>keith@gilbarco.com</p>
              <p>07142954019</p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-[42px] items-center justify-center gap-2 rounded-[14px] border border-[#080808] px-4 text-base font-medium leading-[1.2] text-[#080808] hover:bg-[#080808] hover:text-white"
          >
            <span>Edit driver</span>
            <IconPen />
          </button>
        </div>

        <div className="mt-10 flex max-w-[810px] items-center gap-2 rounded-[14px] border border-[#f6f6f6] bg-[#f6f6f6] p-4 text-base leading-[1.2] text-[#494949]">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#494949]" aria-hidden />
          <p className="font-normal">
            Invite sent. Awaiting driver to download Bypass app and activate card
          </p>
        </div>

        <section className="mt-16 max-w-[810px]">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-numans text-[20px] leading-[1.2] tracking-[-0.2px] text-[#080808]">
              Charger transactions
            </h2>
            <p className="font-numans text-[#080808]">
              <span className="text-base leading-[1.2]">£</span>
              <span className="text-[20px] leading-[1.2] tracking-[-0.2px]">0</span>
            </p>
          </div>

          <div className="mt-6 flex min-h-[315px] flex-col items-center justify-center gap-3 rounded-[14px] border border-[#f6f6f6] bg-[#f6f6f6] p-4 text-center text-base leading-[1.2] text-[#494949]">
            <IconBolt className="h-[25px] w-[25px]" />
            <p className="font-normal">No transactions for this driver yet</p>
          </div>
        </section>
      </main>
    </div>
  );
}
