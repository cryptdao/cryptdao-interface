import Scroller from '@/components/Scroller'
import React from 'react'
import Header from './Header'

export default function Layout(props: { children: React.ReactFragment }) {
  return (
    <>
      <aside className="fixed z-40  w-[70px]  p-3 border-2 h-screen">
        <Scroller />
      </aside>
      <div className="border-2 border-red wl-[70px]">
        <nav className="ml-[70px] left-0 w-full h-8 border-2 border-yellow-500 right-0">
          <Header />
        </nav>
        <main className="flex flex-row border-2 border-green ml-[70px] w-full flex-auto">
          {props.children}
        </main>
      </div>
    </>
  )
}
