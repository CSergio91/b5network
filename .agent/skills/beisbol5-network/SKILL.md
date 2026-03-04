---
name: Beisbol5 Network Expert (B5Tools)
description: Especialista en la arquitectura, reglas, diseño y ecosistema de B5Network (B5Tools). Incluye detalles técnicos del Score Sheet, gestión de torneos, estadísticas premium y diseño visual para Landing Pages profesionales.
---

# Skill: Beisbol5 Network Expert (B5Tools)

## 1. Misión y Visión de B5Network
B5Network (B5Tools) es la plataforma líder para la digitalización del **Baseball5 (B5)** y la **Pelotica de Goma**. Su misión es transformar un deporte tradicional en una experiencia tecnológica profesional, proporcionando herramientas de élite para clubes, organizadores de torneos y scouts.

### Propuesta de Valor
- **Profesionalismo**: Planillas digitales que cumplen con estándares internacionales.
- **Inmediatez**: Estadísticas en tiempo real sincronizadas con la nube.
- **Visibilidad**: Overlays de TV profesionales para streaming en vivo.
- **Escalabilidad**: Gestión desde juegos informales hasta ligas masivas.

---

## 2. REGLAMENTO TÉCNICO B5 (Core del Score Keeper)
Para ser un experto, se debe entender la lógica del juego implementada:
- **Jugadores**: 5 por equipo en el campo.
- **Innings**: 5 entradas (frente a las 9 del béisbol tradicional).
- **Sets**: Los partidos suelen jugarse al mejor de 3 sets (Best of 3).
- **Sin Bate/Guante**: El bateador usa su mano; no se usan guantes de defensa.
- **Nomenclatura Oficial**:
    - `X`: Out directo.
    - `H`: Hit (Llegada a base).
    - `E`: Error defensivo.
    - `●`: Carrera anotada (Run).
    - `‡`: RBI (Carrera impulsada).
    - `■`: Fin de la entrada.
    - `⇄`: Sustitución de jugador.
    - `Ex1B/2B/3B`: Corredor en base por regla de Extrainning.

---

## 3. ARQUITECTURA DE FUNCIONALIDADES

### A. Official Score Sheet (El Corazón)
- **Debounce Sync**: Guardado automático cada 1.2 segundos en Supabase para evitar pérdida de datos.
- **Automatic Transitions**: Detección de 3 outs o fin de lineup para cambio de turno.
- **RBI Intelligence**: Identificación de candidatos a RBI tras una carrera anotada.
- **Field Visualizer**: Mapa interactivo del campo para asignar posiciones (1B, 2B, 3B, SS, MF).

### B. Tournament Builder
- **Workflow**: Configuración → Participantes → Fases → Calendario.
- **Gestión de Roster**: Validación de géneros (mixto) y números de jugador.
- **Brackets**: Generación automática de llaves para eliminatorias.

### C. Stats Engine
- **Métricas tracking**: AB (At-bats), H (Hits), R (Runs), RBI, Errors (Defensive).
- **Fórmulas**: AVG (Average) calculado dinámicamente: `Hits / At-Bats`.
- **Agregación**: Estadísticas consolidadas por jugador en tabla global `players`.

---

## 4. DISEÑO Y ESTÉTICA (Sleek Dark Mode)
Para crear una Landing Page profesional ("Paradax/Parallax Style"), se deben seguir estas guías visuales existentes:

### Paleta de Colores
| Elemento | Color Hex | Clase Tailwind |
|----------|-----------|----------------|
| **Fondo Base** | `#0f172a` | `bg-slate-900` |
| **Hits (Éxito)** | `#4ade80` | `text-green-400` |
| **Carreras (Destacado)** | `#e11d48` | `bg-rose-600` |
| **RBI/Acción** | `#3b82f6` | `text-blue-500` |
| **Warnings/Errores** | `#facc15` | `text-yellow-400` |
| **Glassmorphism** | `rgba(255,255,255,0.05)` | `bg-white/5 backdrop-blur-xl` |

### Tipografía
- **Principal**: `Inter` (sans-serif) - para legibilidad y modernidad.
- **Decorativa**: `Dancing Script` (700) - usada para toques manuales o firmas.
- **Estilo**: Itálicas fuertes y pesos pesados (900/1000) para headers deportivos.

### Efectos y Animaciones (Framer Motion)
- **Transitions**: `AnimatePresence` para modales y cambios de página.
- **Micro-interacciones**: Efectos de `scale: 1.05` en hover sobre tarjetas.
- **Parallax**: Uso de `useScroll` and `useTransform` para elementos de fondo que se mueven a distintas velocidades.

---

## 5. ESTRATEGIA DE LANDING PAGE (Conversión)
Para el desarrollo de la Landing Page con efectos Parallax:
1. **Hero Section**: Imagen de alta calidad generada con `generate_image` mostrando un campo de B5 moderno con el texto "B5Tools: El Futuro del Béisbol Urbano".
2. **The "Wow" Metric**: Un contador animado de partidos anotados o jugadores en el sistema.
3. **Interactive Demo**: Una versión simplificada de la planilla girando en 3D (Parallax).
4. **Pricing Cards**: Modelos Gratis, Pro y Ultra con gradientes premium.
5. **Social Proof**: "Utilizado por ligas en X países".

---

## 6. STACK TECNOLÓGICO
- **Frontend**: React (Vite) + TypeScript.
- **Styles**: Tailwind CSS + Framer Motion.
- **Icons**: Lucide React.
- **Backend/DB**: Supabase (PostgreSQL + Realtime).
- **Payment**: Stripe API.
- **Infrastructure**: Vercel para deploys atómicos.

---

## 7. MEJORES PRÁCTICAS PARA DESARROLLADORES
- **Safe State**: Siempre manejar `newPlayer.scores` como array antes de usar `.map()`.
- **Performance**: Usar `React.memo` en celdas de anotación para evitar re-renders masivos en la planilla.
- **Mobile First**: La planilla debe ser operable desde una tablet en el campo de juego.
- **Logging**: Usar `logTournamentActivity` para trazar acciones críticas de árbitros.

---

## 8. RECURSOS
- **Repositorio**: `b5tools-scorekeeper`
- **Producción**: `b5tools.com`
- **Overlay TV**: `/tv/{matchId}`
- **Admin**: `/dashboard`
