import { Colors } from '@/constants/colors'

export const LightTheme = {
  dark: false,
  colors: {
    background: Colors.background,
    text: Colors.text,
    primary: Colors.primary,
    card: Colors.surface,
    border: Colors.border,
    notification: Colors.secondary,
  },
}

export const DarkTheme = {
  dark: true,
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    primary: Colors.primary,
    card: '#1C1C1E',
    border: '#3A3A3C',
    notification: Colors.secondary,
  },
}
