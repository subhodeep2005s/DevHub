"use client"

import { useEffect, useRef } from "react"

export default function RetroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawGrid()
    }

    const drawGrid = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 40
      const horizonY = canvas.height * 0.5

      // Set grid color based on theme
      const isDarkMode = document.documentElement.classList.contains("dark")
      ctx.strokeStyle = isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
      ctx.lineWidth = 1

      // Draw horizontal lines
      for (let y = horizonY; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, horizonY)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw perspective lines
      const vanishingPointX = canvas.width / 2
      const numLines = Math.ceil(canvas.width / gridSize)

      for (let i = -numLines; i <= numLines; i++) {
        const x = vanishingPointX + i * gridSize
        ctx.beginPath()
        ctx.moveTo(x, horizonY)
        ctx.lineTo(vanishingPointX, 0)
        ctx.stroke()
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Handle theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          drawGrid()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
}

