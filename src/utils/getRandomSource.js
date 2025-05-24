const sources = ["GitHub", "Nike", "Slack", "Spotify", "Amazon"];
export function getRandomSource() {
  return sources[Math.floor(Math.random() * sources.length)];
}
