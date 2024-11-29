'use client'

import React, { useEffect, useState } from 'react'
import CountdownTimer from '@/components/Timer-1'
import { getLatestDateFromMongo } from '@/lib/getLatestMongo'
import Spinner from '@/components/Spinner'

const App = () => {
  const [targetDate, setTargetDate] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const date = await getLatestDateFromMongo()
        setTargetDate(date)
      } catch (error) {
        console.error('Error fetching date:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDate()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {targetDate ? (
        <CountdownTimer targetDate={targetDate} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-6xl font-semibold mob:text-3xl">We will be starting soon!</h1>
        </div>
      )}
    </div>
  )
}

export default App

