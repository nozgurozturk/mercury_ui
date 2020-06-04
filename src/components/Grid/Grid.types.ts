export type justify = 'start' | 'center' | 'end' | 'around' | 'between'
export type align = 'top' | 'middle' | 'bottom'

export type span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type offset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type row = {justify?:justify, align?:align}
export type col = {span?:span, offset?:offset}