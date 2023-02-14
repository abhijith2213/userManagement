import React from "react"
import { Outlet } from "react-router-dom"
import LeftSidebar from "../components/sidebars/LeftSidebar"

export default function Structure() {
   return (
      <section className='flex max-h-screen overflow-y-auto no-scrollbar w-full'>
         <LeftSidebar />
         <Outlet />
      </section>
   )
}
