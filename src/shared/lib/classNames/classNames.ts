type ModsType = Record<string, string | boolean>

const classNames = (cls: string, additional: string[] = [], mods: ModsType = {}) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.values(mods).filter(value => Boolean(value)).map(cls => cls)
  ].join(' ')
}

export default classNames
