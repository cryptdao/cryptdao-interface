export default function Proposal() {
  return <>
  <div className="mb-4 transition-colors border-t border-b rounded-none md:border md:rounded-lg bg-skin-block-bg timeline-proposal">
      <div className="leading-6">
        <a className="block p-4 text-color">
          <div className="mb-2">
            <span className="ml-2">cryptDAO</span>
            由 0x3880...5429
            <span className="inline-block float-right text-white bg-purple-600 State">已关闭</span>
          </div>
          <h3 className="my-1">Redistribute GTC to Individuals Who Could Not Claim Due to Error</h3>
          <p className="mb-2 break-words text-md">
            Summary:
If this proposal passes, we plan to distribute 32,717.33 GTC using WhalerDAO’s Astro-Drop tool to the users below who were eligibl...
          </p>
          <div>
            <span className="flex items-center mt-2 space-x-1">
              <span className="mt-1">
                No: do not compensate them - 3.83m GTC
              </span>
            </span>
          </div>
        </a>
      </div>
    </div>
  </>
}