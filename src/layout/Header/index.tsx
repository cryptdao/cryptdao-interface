import Account from '@/layout/Header/Account'
import styled from 'styled-components'

export const HeaderHeight = styled.div`
  height: 79px;
`

export const HeaderWrapper = styled.div`
  z-index: 20;
  right: 0px;
`

export const HeaderCenter = styled.div`
  height: 78px;
`

export const HeaderLink = styled.a`
  font-size: 24px;
  padding-top: 4px;
`

//TODO - add the following to the Header component:
export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <nav className="w-full border-b bg">
          <div className="px-4 max-w-[1012px] mx-auto">
            <HeaderCenter className="flex items-center">
              <div className="flex items-center flex-auto">
                <HeaderLink>CryptDAO</HeaderLink>
              </div>
              <Account />
            </HeaderCenter>
          </div>
        </nav>
      </HeaderWrapper>
    </>
  )
}
