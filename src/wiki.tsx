import { useState, useRef, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import './index.css';
import React from 'react';

type Topic = {
  id: string
  title: string
  summary: string
  content: React.ReactNode
  image: string
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const topicRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  const selectTopic = (id: string) => {
    setSelectedTopic(id)
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const scrollToTopic = (id: string) => {
    if (topicRefs.current[id]) {
      topicRefs.current[id]?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const topics: Topic[] = [
    {
      id: 'globalizacion',
      title: '1. Globalización',
      summary: 'Exploración de la globalización desde perspectivas económicas, políticas, tecnológicas y sociales.',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong className="text-gray-900 dark:text-gray-100">Fenómeno Económico:</strong> Impacto en mercados y economías mundiales</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Fenómeno Político:</strong> Cambios en las relaciones internacionales y políticas globales</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Fenómeno Tecnológico:</strong> Avances tecnológicos que facilitan la globalización</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Fenómeno Social:</strong> Efectos en culturas y sociedades</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Ventajas y Desventajas:</strong> Análisis crítico de los pros y contras de la globalización</li>
        </ul>
      ),
    },
    {
      id: 'modelos-de-negocios',
      title: '2. Modelos de negocios y Modelos de ingresos en Internet',
      summary: 'Análisis de cómo las empresas operan y generan ingresos en el entorno digital.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong className="text-gray-900 dark:text-gray-100">Definición:</strong> Conceptos clave de modelos de negocios en línea</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Sostenibilidad:</strong> Estrategias para mantener negocios en línea a largo plazo</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Modelo de Negocio y su evaluación:</strong> Métodos para analizar y mejorar modelos de negocio</li>
          <li><strong className="text-gray-900 dark:text-gray-100">E-Commerce:</strong> Principios y prácticas del comercio electrónico</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Modelos de negocios basados en Internet:</strong> Ejemplos y estudios de caso</li>
        </ul>
      ),
    },
    {
      id: 'aplicaciones-moviles',
      title: '3. Aplicaciones para Dispositivos Móviles',
      summary: 'Exploración del mundo de las apps móviles y su impacto en los negocios.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong className="text-gray-900 dark:text-gray-100">Impacto de las Aplicaciones Móviles:</strong> Cómo las apps están transformando industrias</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Características de una App:</strong> Elementos clave para el éxito de una aplicación móvil</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Uso de las aplicaciones móviles desde la perspectiva del usuario:</strong> Experiencia del usuario y diseño</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Usabilidad:</strong> Principios de diseño de interfaces y experiencia de usuario</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Relación de Costa Rica con respecto a otros países:</strong> Análisis comparativo del desarrollo de apps</li>
        </ul>
      ),
    },
    {
      id: 'computacion-en-la-nube',
      title: '4. Plataformas Tecnológicas para computación en la nube',
      summary: 'Introducción al mundo del cloud computing y su impacto en las empresas.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong className="text-gray-900 dark:text-gray-100">Definición:</strong> Conceptos fundamentales de la computación en la nube</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Relación costo beneficio:</strong> Análisis económico de la adopción de tecnologías cloud</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Tecnologías existentes:</strong> Panorama actual de plataformas y servicios en la nube</li>
          <li><strong className="text-gray-900 dark:text-gray-100">Realidad de las empresas:</strong> Casos de estudio y aplicaciones prácticas en diferentes industrias</li>
        </ul>
      ),
    },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans`}>
      <header className="bg-blue-600 dark:bg-blue-800 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Aplicaciones Informáticas Globales</h1>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors duration-200">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors duration-200">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <nav className={`md:w-1/4 md:pr-8 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Contenidos</h2>
            <ul className="space-y-2">
              {topics.map((topic) => (
                <li key={topic.id}>
                  <a
                    href={`#${topic.id}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToTopic(topic.id)
                    }}
                  >
                    {topic.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <main className="md:w-3/4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">Aplicaciones Informáticas Globales</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Wiki por Aaron Soto Quesada</p>
            
            <section id="introduccion" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Introducción</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bienvenidos a la wiki del curso "Aplicaciones Informáticas Globales". Este espacio está diseñado para proporcionar una visión general de los temas clave que cubriremos durante el curso. A continuación, encontrarán un desglose detallado de los contenidos principales.
              </p>
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic) => (
                <div key={topic.id} ref={(el) => topicRefs.current[topic.id] = el} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img src={topic.image} alt={topic.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{topic.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{topic.summary}</p>
                    <button
                      onClick={() => selectTopic(topic.id)}
                      className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedTopic && (
              <div ref={contentRef} className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-inner">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  {topics.find(t => t.id === selectedTopic)?.title}
                </h2>
                {topics.find(t => t.id === selectedTopic)?.content}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}