"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { processUserMessage } from "@/lib/chatbot" 
import QuickActionButtons from "./QuickActionButtons"
import ChatMessage from "./ChatMessage"

// Iconos SVG para botones e indicadores
const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
)

const HistoryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v5h5"></path>
    <path d="M3 3l6.5 6.5"></path>
    <circle cx="13" cy="13" r="8"></circle>
    <path d="M13 8v5l3 3"></path>
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const LoaderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-spin"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
  </svg>
)

// Interfaz para definir el formato de los mensajes
export interface Message {
  id: string // Identificador único del mensaje
  role: "user" | "assistant" // Rol del mensaje (usuario o asistente)
  content: string // Contenido del mensaje
}

export default function ChatInterface() {
  // Estado para almacenar los mensajes del chat
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "¡Hola! Soy el asistente de soporte del servidor de Minecraft. ¿En qué puedo ayudarte hoy?",
    },
  ])
  const [input, setInput] = useState("") // Entrada del usuario
  const [isLoading, setIsLoading] = useState(false) // Indicador de carga
  const [error, setError] = useState<string | null>(null) // Manejo de errores
  const [showHistory, setShowHistory] = useState(false) // Mostrar historial
  const [hasHistory, setHasHistory] = useState(false) // Indica si hay historial guardado

  // Cargar historial de chat desde localStorage al iniciar
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem("chatHistory")
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages)
        if (Array.isArray(parsedMessages) && parsedMessages.length > 1) {
          setMessages(parsedMessages)
          setHasHistory(true)
        }
      }
    } catch (err) {
      console.error("Error loading chat history:", err)
      // Si hay un error al cargar el historial, simplemente continuamos sin él
    }
  }, [])

  // Guardar mensajes en localStorage cada vez que cambien
  useEffect(() => {
    try {
      if (messages.length > 1) {
        localStorage.setItem("chatHistory", JSON.stringify(messages))
        setHasHistory(true)
      }
    } catch (err) {
      console.error("Error saving chat history:", err)
      // Mostrar un error sutil al usuario si es necesario
    }
  }, [messages])

  // Función para cargar el historial desde localStorage
  const loadHistory = () => {
    try {
      const savedMessages = localStorage.getItem("chatHistory")
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages)
        if (Array.isArray(parsedMessages)) {
          setMessages(parsedMessages)
          setShowHistory(false)
        }
      }
    } catch (err) {
      console.error("Error loading chat history:", err)
      setError("No se pudo cargar el historial de chat.")
    }
  }

  // Función para borrar el historial de chat
  const clearHistory = () => {
    try {
      localStorage.removeItem("chatHistory")
      setHasHistory(false)
      setShowHistory(false)
      setMessages([
        {
          id: "1",
          role: "assistant",
          content: "¡Hola! Soy el asistente de soporte del servidor de Minecraft. ¿En qué puedo ayudarte hoy?",
        },
      ])
    } catch (err) {
      console.error("Error clearing chat history:", err)
      setError("No se pudo borrar el historial de chat.")
    }
  }

  // Manejar cambios en el campo de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    // Limpiar cualquier error previo cuando el usuario comienza a escribir
    if (error) setError(null)
  }

  // Manejar el envío de mensajes
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "") return

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    const currentInput = input // Guardar el input actual antes de limpiarlo
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      // Simular un pequeño retraso para dar sensación de procesamiento
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Procesar el mensaje del usuario y obtener la respuesta
      const botResponse = processUserMessage(currentInput)

      // Añadir la respuesta del bot al chat
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: botResponse,
        },
      ])
    } catch (err) {
      console.error("Error procesando el mensaje:", err)
      setError(
        `Error: No se pudo procesar el mensaje. ${err instanceof Error ? err.message : "Por favor, intenta de nuevo."}`,
      )
    } finally {
      setIsLoading(false)
    }
  }

  // Referencia para el scroll automático al final del chat
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Función para hacer scroll al final del chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Hacer scroll automáticamente cuando se agregan nuevos mensajes
  useEffect(() => {
    // Usar un pequeño retraso para asegurar que el DOM se ha actualizado
    const timer = setTimeout(() => {
      scrollToBottom()
    }, 100)
    return () => clearTimeout(timer)
  }, [messages, isLoading])

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-300">Minecraft Support</h1>
          <div className="flex gap-2">
            {hasHistory && (
              <Button
                variant="outline"
                size="sm"
                className="text-gray-300 border-gray-700 hover:bg-gray-800"
                onClick={() => setShowHistory(!showHistory)}
              >
                <HistoryIcon />
                <span className="ml-2 hidden sm:inline">Historial</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Área principal del chat */}
      <main className="flex-1 container mx-auto p-4 overflow-hidden flex flex-col">
        {/* Sidebar del historial */}
        {showHistory && (
          <div className="absolute right-0 top-16 bg-gray-900 border border-gray-800 rounded-l-lg p-4 w-64 h-[calc(100vh-4rem)] z-10 animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-blue-300">Historial</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowHistory(false)}>
                <CloseIcon />
              </Button>
            </div>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-gray-300 border-gray-700"
                onClick={loadHistory}
              >
                Cargar historial
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-gray-300 border-gray-700"
                onClick={clearHistory}
              >
                Borrar historial
              </Button>
            </div>
          </div>
        )}

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
          {/* Renderizar mensajes */}
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {/* Indicador de carga */}
          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="16" x2="8" y2="16"></line>
                  <line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
              </div>
              <div className="rounded-lg px-4 py-2 bg-gray-800 text-gray-200">
                <LoaderIcon />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Botones de acceso rápido */}
        <QuickActionButtons setInput={setInput} />

        {/* Sección de soporte en Discord */}
        <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <h3 className="text-blue-300 font-medium mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="h-5 w-5 mr-2 fill-blue-300">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
            Soporte en Discord
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            Para problemas más complejos o asistencia personalizada, únete a nuestro servidor de Discord y contacta con
            el equipo de soporte.
          </p>
          <a
            href="https://discord.gg/tuservidordeminecraft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-md transition-colors"
          >
            Unirse al Discord
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Área de entrada */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe tu pregunta aquí..."
            className="bg-gray-800 border-gray-700 text-gray-200 focus-visible:ring-blue-400"
          />
          <Button
            type="submit"
            disabled={isLoading || input.trim() === ""}
            className="bg-blue-700 hover:bg-blue-600 text-white"
          >
            {isLoading ? <LoaderIcon /> : <SendIcon />}
          </Button>
        </form>

        {/* Mostrar errores */}
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </main>
    </div>
  )
}

