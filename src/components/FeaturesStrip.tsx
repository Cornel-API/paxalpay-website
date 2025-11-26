export default function FeaturesStrip() {
  return (
    <section className="py-16">
      <h2 className="text-[#262626] font-bold  text-[18px] mb-10">
        Tired of P2P Drama?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex flex-col items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h7v8l11-14h-8V2z" fill="#262626" /></svg>
            <div>
              <div className="text-[#262626] font-bold text-[18px] md:text-[23px]">Waiting Game</div>
              <div className="mt-2 text-[#525252] font-medium text-[14px] md:text-[18px]">Hours waiting for P2P traders to confirm. Your money stuck in limbo while prices move.</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M2 12l20-6-6 20-5-8-9-6z" fill="#262626" /></svg>
            <div>
              <div className="text-[#262626] font-bold text-[18px] md:text-[23px]">The Risk</div>
              <div className="mt-2 text-[#525252] font-medium text-[14px] md:text-[18px]">Scammers. Chargebacks. Frozen accounts. One bad trade could lock your funds for weeks.</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18px" rx="2" stroke="#262626" /><path d="M9 8h6M9 12h6M9 16h6" stroke="#262626" /></svg>
            <div>
              <div className="text-[#262626] font-bold text-[18px] md:text-[23px]">Hidden Costs</div>
              <div className="mt-2 text-[#525252] font-medium text-[14px] md:text-[18px]">'Favorable rates' that aren't. Traders taking 3-5% cuts. You lose money on every transaction.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}