"use client"

import { Button } from "@/components/ui/Button"

interface QuickActionButtonsProps {
  setInput: (value: string) => void
}

export const QuickActionButtons = ({ setInput }: QuickActionButtonsProps) => {
  const quickQuestions = [
    { label: "¿Cómo conectarme?", query: "¿Cómo me conecto al servidor?" },
    { label: "Problemas de lag", query: "Tengo problemas con el lag" },
    { label: "Reglas", query: "¿Cuáles son las reglas del servidor?" },
    { label: "Comandos", query: "¿Qué comandos puedo usar?" },
    { label: "Economía", query: "¿Cómo funciona la economía?" },
    { label: "Eventos", query: "¿Hay eventos próximos?" },
  ]

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {quickQuestions.map((question, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          className="text-gray-300 border-gray-700 hover:bg-gray-800"
          onClick={() => setInput(question.query)}
        >
          {question.label}
        </Button>
      ))}
    </div>
  )
}

export default QuickActionButtons

