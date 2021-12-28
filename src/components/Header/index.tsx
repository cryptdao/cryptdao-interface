import styled from "styled-components";

export const HeaderHeight = styled.div`
  height: 79px;
`;

export const HeaderWrapper = styled.div`
  z-index: 20;
  right: 0px;
`;

export const HeaderCenter = styled.div`
  height: 78px;
`;

export const HeaderLink = styled.a`
  font-size: 24px;
  padding-top: 4px;
`;
export default function Header() {
  return (
    <>
      <div>
        <HeaderHeight />
        <HeaderWrapper className="left-0 fixed top-0 sm:left-[68px]">
          <nav className="w-full border-b">
            <div className="px-4 max-w-[1012px] mx-auto">
              <HeaderCenter className="flex items-center">
                <div className="flex items-center flex-auto">
                  <HeaderLink>CryptDAO</HeaderLink>
                </div>
                <div>
                  <button className="px-[24px]">
                    <span className="hidden sm:block">连接钱包</span>
                  </button>
                </div>
              </HeaderCenter>
            </div>
          </nav>
        </HeaderWrapper>
      </div>
    </>
  );
}
