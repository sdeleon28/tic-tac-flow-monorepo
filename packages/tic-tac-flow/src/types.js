// @flow
export type Circle = { type: 'Circle' }
export type Cross = { type: 'Cross' }
export type Empty = { type: 'Empty' }
export type Cell
  = Circle
  | Cross
  | Empty
export type Row = [Cell, Cell, Cell]
export type Board = [Row, Row, Row]
export type Player = 0 | 1
export type Status = Result | { type: 'Running' }
export type Maybe<A> = Just<A> | Nothing
export type Just<A> = { type: 'Just', result: A }
export type Nothing = { type: 'Nothing' }
export type Result = Maybe<[Player, Row]>
export type State = {
  board: Board,
  player: Player,
  status: Status
}

