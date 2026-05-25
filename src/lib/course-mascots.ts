/**
 * Maps every course slug to:
 * - its dedicated owl mascot asset
 * - human-readable unit names for the learning path
 */

export const COURSE_MASCOTS: Record<string, string> = {
  espanol:             "/OWL_WITH_SPAIN_FLAG.png",
  "herencia-peruana":  "/OWL_INVESTIGADOR_WITH_BOOK.png",
  "global-finance":    "/OWL_WITH_THE_EARTH.png",
  finanzas:            "/OWL_COMPETITOR.png",
  programacion:        "/OWL_CODING.png",
  matematicas:         "/OWL_NUMBER_ONE.png",
  ciencias:            "/OWL_SCIENCE.png",
  ciberseguridad:      "/OWL_INVESTIGATOR_WITH_COMPUTER.png",
  ingles:              "/OWL_READING.png",
};

export const UNIT_NAMES: Record<string, string[]> = {
  espanol: [
    "Primeros Pasos",
    "Vocabulario Esencial",
    "Sintaxis y Morfología",
    "Ortografía y Estilo",
    "Comunicación Avanzada",
  ],
  "herencia-peruana": [
    "Historia y Civilización",
    "Tradiciones y Patrimonio",
  ],
  "global-finance": [
    "Global Finance Fundamentals",
  ],
  finanzas: [
    "Fundamentos del Dinero",
    "El Sistema Financiero",
    "Inteligencia Financiera",
  ],
  programacion: [
    "Fundamentos Web",
    "JavaScript y Python",
  ],
  matematicas: [
    "Números y Medidas",
    "Geometría y Probabilidad",
  ],
  ciencias: [
    "Física y Movimiento",
    "Química y Biología",
  ],
  ciberseguridad: [
    "Seguridad Digital",
  ],
  ingles: [
    "English Language Skills",
  ],
};
