// theme/colors.ts
export const colors = {
  /* ---------- Light Mode ---------- */
  light: {
    background: '#F7F8F6',        // warm off-white (easy on eyes)
    surface: '#FFFFFF',           // cards, modals
    textPrimary: '#1F2933',        // soft charcoal (not pure black)
    textSecondary: '#6B7280',
    border: '#E5E7EB',

    // Growth / progress
    primary: '#7FB8A6',            // muted sage green
    primaryRich: '#5E9C8A',        // richer green for streaks & milestones
    primarySubtle: '#E6F2EE',      // backgrounds, highlights, progress fill

    danger: '#DC2626',
  },

  /* ---------- Dark Mode ---------- */
  dark: {
    background: '#0F1412',         // deep green-tinted charcoal
    surface: '#161C19',            // elevated surfaces
    textPrimary: '#E5E7EB',
    textSecondary: '#9CA3AF',
    border: '#25302B',

    // Growth / progress (slightly brighter for contrast)
    primary: '#8FC9B7',
    primaryRich: '#6FB3A0',
    primarySubtle: '#1F2F29',

    danger: '#F87171',
  },
} as const;
