import React, { useState } from 'react'

import CrashForm from './crash/form'

type Props = {
  color: string
}

export default function MobileControl({ color }: Props) {

  return (
    <div className="w-full flex gap-3 justify-center flex-wrap md:flex-nowrap md:hidden">
      <CrashForm
        color={color}
        position="left"
      />
    </div>
  )
}
