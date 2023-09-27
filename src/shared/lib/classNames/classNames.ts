type ModsType = Record<string, string | boolean>

const classNames = (cls: string, additional: string[] = [], mods: ModsType = {}) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([cls]) => cls)
  ].join(' ')
}

export default classNames
