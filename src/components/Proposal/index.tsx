export default function ProposalHeader() {
  return (
    <>
      <div id="header" className="flex px-4 mb-3 md:px-0">
        <div className="flex-auto">
          <div>CryptDAO</div>
          <div className="flex items-center flex-auto">
            <h2>提案</h2>
          </div>
        </div>
        <div className="relative">
          <div className="button">
            <button className="px-[24px] pr-3 button focus-within:border-skin-link">
              所有
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
