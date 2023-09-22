type ModsType = Record<string, string | boolean>

const classNames = (cls: string, additional: string[], mods: ModsType = {}) => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
             .filter(([cls, value]) => Boolean(value))
             .map(([cls]) => cls)
  ].join(' ')
}

export default classNames
