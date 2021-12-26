
export default function Scroller() {

    return (
      <>
        <div className="position: fixed; width: 240px;">
          <div className="mb-4 overflow-hidden border-t border-b rounded-none md:border md:rounded-lg bg-skin-block-bg">
            <div className="leading-6">
              <div className="text-center border-b bg-skin-header-bg">
                <h3 className="mb-[2px] mx-2">
                  CryptDAO
                </h3>
                <div className="mb-[12px] text-color">
                  20.0k成员
                </div>
                <div className="flex justify-center gap-x-2">
                  <button className="button px-[24px] focus-within:border-skin-link mb-4">加入</button>
                </div>
              </div>
            </div>
            <div className="py-3">
              <a className="block px-4 py-2 router-link-active router-link-exact-active sidenav-item">提案</a>
              <a className="block px-4 py-2 sidenav-item">新提案</a>
              <a className="block px-4 py-2 sidenav-item">授权</a>
              <a className="block px-4 py-2 sidenav-item">关于</a>
            </div>
          </div>
          info
        </div>
        </>
    )
}