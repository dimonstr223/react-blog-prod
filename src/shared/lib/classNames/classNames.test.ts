import { classNames } from './classNames'

describe('classNames', () => {
  test('with one class', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('width additional', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', ['class1', 'class2'])).toBe(expected)
  })

  test('width mods', () => {
    const expected = 'someClass class1 class2 hovered active'
    expect(classNames(
      'someClass', ['class1', 'class2'], { hovered: true, active: true })
    ).toBe(expected)
  })

  test('width false mode', () => {
    const expected = 'someClass class1 class2 active'
    expect(classNames(
      'someClass', ['class1', 'class2'], { hovered: false, active: true })
    ).toBe(expected)
  })

  test('width mods', () => {
    const expected = 'someClass class1 class2 active'
    expect(classNames(
      'someClass', ['class1', 'class2'], { hovered: undefined, active: true })
    ).toBe(expected)
  })
})
