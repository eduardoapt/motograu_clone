import React, { useState } from 'react'
import CrashForm from './crash/form'

type Props = {
  color: string
}

export default function DesktopControl({ color }: Props) {

  return (
    <div className="hidden w-full gap-3 justify-center flex-wrap md:flex-nowrap md:flex">
      <CrashForm
        color={color}
        position="left"
      />
    </div>
  )
}
