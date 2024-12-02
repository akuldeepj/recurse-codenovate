'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { saveDateToMongo } from "@/lib/saveDateToMongo"
import { Button } from "@/components/ui/button"

export default function Protected() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [saveStatus, setSaveStatus] = useState<string | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  const handleSaveDate = async () => {
    const now = new Date()
    now.setHours(now.getHours() + 29) // Add 24 hours
    now.setMinutes(now.getMinutes() + 30) // Add 30 minutes
    const formattedDate = now.toISOString().slice(0, 19) + '+05:30' // Format: '2024-11-30T10:00:00+05:30'

    try {
      const result = await saveDateToMongo(formattedDate)
      setSaveStatus(result.message)

      // Redirect to /timer after saving
      router.push('/timer')
    } catch (error) {
      setSaveStatus('Error saving date')
    }
  }

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <Button 
          onClick={handleSaveDate}
          className="bg-primary text-white font-bold py-2 px-4 rounded"
        >
          Start Hackathon
        </Button>
        {saveStatus && (
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{saveStatus}</p>
        )}
      </div>
    )
  }

  return null
}
