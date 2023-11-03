export type ModsType = Record<string, string | boolean | undefined>

export const classNames = (
  cls: string,
  additional: Array<string | undefined> = [],
  mods: ModsType = {}
) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([cls]) => cls)
  ].join(' ')
}
