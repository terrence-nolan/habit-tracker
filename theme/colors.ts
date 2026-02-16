// theme/colors.ts
export const colors = {
  /* ---------- Light Mode ---------- */
  light: {
    background: "#F4F7F5", // warm off-white (easy on eyes)
    surface: "#FBFDFC", // cards, modals
    textPrimary: "#1F2933", // soft charcoal (not pure black)
    textSecondary: "#6B7280",
    border: "#E2E8E5",

    // Growth / progress
    primary: "#7FB8A6", // muted sage green
    primaryRich: "#5E9C8A", // richer green for streaks & milestones
    primarySubtle: "#E6F2EE", // backgrounds, highlights, progress fill

    danger: "#DC2626",
    inactive: "#D1D5DB",
  },

  /* ---------- Dark Mode ---------- */
  dark: {
    background: "#0F1412", // deep green-tinted charcoal
    surface: "#161C19", // elevated surfaces
    textPrimary: "#E5E7EB",
    textSecondary: "#9CA3AF",
    border: "#25302B",

    // Growth / progress (slightly brighter for contrast)
    primary: "#8FC9B7",
    primaryRich: "#6FB3A0",
    primarySubtle: "#1F2F29",

    danger: "#F87171",
    inactive: "#374151",
  },
} as const;
