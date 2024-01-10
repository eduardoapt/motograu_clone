import './index.css'

import React, { useContext, useEffect } from 'react'
import Display from './components/display'
import Snackbar from '../../core/components/snackbar'
import Results from '../..//core/components/results'
import TransactionBar from '../..//core/components/transaction-bar'
import Controls from '../../customs/custom-controls/crash-control'
import { CrashGameContext } from '../../core/providers/games/crash-game.provider'
import { SessionContext } from '../../core/providers/session.provider'
import { GameStatus } from '../../core/providers/enums/game-status'
import Navbar from '../../customs/custom-navbar'

function HomePage() {
  const { setLoading } = useContext<any>(SessionContext)
  const { iframeRef, gameStatus, executeAction, balance } =
    useContext<any>(CrashGameContext)

  useEffect(() => {
    iframeRef.current?.contentWindow.addEventListener(
      'instance-created',
      () => {
        setLoading(false)
        if (gameStatus == GameStatus.RUNNING)
          setTimeout(() => executeAction('start'), 1000)
      }
    )
  }, [iframeRef])

  return (
    <div className="flex min-h-screen overflow-hidden py-0 px-0 sm:px-3 motograu-game">
      <div className="flex w-full sm:gap-3 min-h-screen relative">
        <section className="flex flex-col h-full grow p-0">
          <div style={{ zIndex: 100 }}>
            <Navbar
              name='type-error'
              game="motograu"
              executeAction={executeAction}
              balance={balance}
            />
          </div>
          <div className="grid p-3 gap-3 grow rounded w-full grid-cols-12">
            <div className="col-span-12 sm:col-span-12 grow xl:col-span-3 order-2 xl:order-1">
              <TransactionBar variant='slate' />
            </div>

            <div className="col-span-12 sm:col-span-12 xl:col-span-9 relative order-1 xl:order-2">
              <div className="flex gap-3 h-full flex-col">

                <div className="grow min-h-40vh sm:min-h-60vh relative z-0">
                  <iframe
                    ref={iframeRef}
                    className="rounded-md overflow-hidden w-full h-full pointer-events-none min-h-[250px] xl:min-h-[300px]"
                    src="/motograu/index.html"
                  ></iframe>
                  <div className="transform absolute top-20 right-2/4">
                    <Display color='blue' />
                  </div>
                </div>

                <Results variant='type-error' />

                <Controls color="login-button" />
              </div>

              <Snackbar />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
