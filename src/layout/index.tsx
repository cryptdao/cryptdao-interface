import Scroller from '@/components/Scroller'
import React from 'react'
import Header from './Header'

export default function Layout(props: { children: React.ReactFragment }) {
  return (
    <>
      <div className="flex">
        <aside className="fixed z-40 flex-1 flex-shrink-0 w-[70px] p-3 border-2 h-screen">
          <Scroller />
        </aside>
        <div className="border-2 border-red sm:left-[70px]">
          <nav className="fixed left-0 w-full h-8 border-2 border-yellow-500">
            <Header />
          </nav>

          <main className="border-2 border-green ml-[70px] w-full flex-auto">
            {props.children}
          </main>
        </div>
      </div>
    </>
  )
}
