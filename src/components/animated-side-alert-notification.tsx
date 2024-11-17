'use client'

import { useState, useEffect } from 'react'
import { X, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export function AnimatedSideAlertNotification() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simulate a delay before showing the notification
    const timer = setTimeout(() => setIsVisible(true), 4000) // Changed to 5 seconds
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleViewHere = () => {
    // Add your logic here to navigate or open the problem statements
    console.log('View problem statements')
  }

  return (
    <div 
      className={`fixed right-4 top-4 z-50 w-72 transition-all duration-500 ease-in-out rounded-full ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      } dark:bg-gray-800 dark:text-white`}
    >
      <Alert variant="default" className="shadow-lg dark:bg-gray-900 dark:border-gray-700">
        <AlertCircle className="h-4 w-4 dark:text-white" />
        <AlertTitle className="flex justify-between items-center">
          New Problem Statements
          <Button variant="ghost" size="sm" onClick={handleClose} className="-my-1 h-8 w-8 p-0 hover:bg-transparent dark:hover:bg-transparent">
            <X className="h-4 w-4 dark:text-white" />
            <span className="sr-only">Close</span>
          </Button>
        </AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-2">Problem statements have been released!</p>
          <Button variant="outline" className="w-full text-white bg-primary" onClick={handleViewHere}>
            View Here
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  )
}