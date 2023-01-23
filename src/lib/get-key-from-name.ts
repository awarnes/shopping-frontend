export default function(name: string) {
  return `key-${name.toLowerCase().replace(/\s/g, '-')}`
}