export default function FeaturesStrip() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex flex-col items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h7v8l11-14h-8V2z" fill="#262626"/></svg>
            <div>
              <div className="text-[#262626] font-bold text-[18px] font-[700]">Instant Local Balance</div>
              <div className="mt-2 text-[#525252] font-medium text-[18px] font-[500]">Your crypto deposits settle in seconds; no delays, no manual confirmations.</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M2 12l20-6-6 20-5-8-9-6z" fill="#262626"/></svg>
            <div>
              <div className="text-[#262626] font-bold text-[18px] font-[700]">Zero Transfer Hassle</div>
              <div className="mt-2 text-[#525252] font-medium text-[18px] font-[500]">Send money to banks or Paxtag users instantly. Fast, predictable, reliable.</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18px" rx="2" stroke="#262626"/><path d="M9 8h6M9 12h6M9 16h6" stroke="#262626"/></svg>
            <div>
              <div className="text-[#262626] font-bold text-[18px] font-[700]">Pay Bills in One Tap</div>
              <div className="mt-2 text-[#525252] font-medium text-[18px] font-[500]">Airtime, data, internet, electricity — everything you need, without switching apps.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}