import { bgColorSelector } from './config'

export const getRandomBgColor = (n: number): string[] => {
  let colors = [], l = bgColorSelector.length;
  while (n--)
    colors.push(bgColorSelector[Math.floor(Math.random() * l)])
  return colors
}