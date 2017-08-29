// @flow
import React from 'react';
import type { State, Empty, Row, Board } from '../types';

const empty : Empty = { type: 'Empty' }
const emptyRow : Row = [empty, empty, empty]
const board : Board = [emptyRow, emptyRow, emptyRow]

class TicTacToe extends React.Component<*, State> {
  state = {
    board,
    status: { type: 'Running' },
    player: 0
  }

  render() {
    const {board} = this.state
    return <div>{
      board.map((row, i) => {
        return <div style={{width: '600px', height: '150px'}} key={i}>
          {row.map((cell, j) => {
            return <div style={{
              float: 'left',
              textAlign: 'center',
              border: '1px solid #eee',
              padding: '75px'
            }} key={j}>
              cell
            </div>
          })}
        </div>
      })
    }</div>
  }
}

export default TicTacToe;

