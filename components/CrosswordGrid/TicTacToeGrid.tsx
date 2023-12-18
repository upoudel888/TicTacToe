import React, { useState, useRef, MutableRefObject } from "react";
import { Button, Text, TouchableHighlight, View } from "react-native";

import { gridStyles } from "./styles";
import TicTacToe, { TicTacToeInterface } from "../../modules/TicTacToe";

const TicTacToeGrid = () => {
  const game: MutableRefObject<TicTacToeInterface> = useRef<TicTacToeInterface>(
    new TicTacToe()
  );

  const [grid, setGrid] = useState<[string, string, string][]>(
    game.current.getGrid()
  );
  const [turnStatus, setTurnStatus] = useState<string>(
    game.current.getTurnStatus()
  );
  const [isOver, setIsOver] = useState<Boolean>(game.current.checkOver());
  const [overMsg, setOverMsg] = useState<String>("Not Over");

  const handleCellClick = (pressPos: number) => {
    let status = game.current.makeMove(pressPos);
    if (status === "Success") {
      setGrid(game.current.getGrid());
      if (game.current.checkOver()) {
        setIsOver(true);
        setOverMsg(game.current.getOverMsg());
      } else {
        game.current.changeTurn();
        setTurnStatus(game.current.getTurnStatus());
      }
    }
  };

  const handleReplay = () => {
    game.current = new TicTacToe();
    setGrid(game.current.getGrid());
    setTurnStatus(game.current.getTurnStatus());
    setIsOver(false);
  };

  return (
    <>
      <View style={gridStyles.gridContainer}>
        {isOver && (
          <View style={gridStyles.overlay}>
            <Text style={gridStyles.mediumTexts}>{overMsg}</Text>
            <Button title="Play Again" onPress={handleReplay} />
          </View>
        )}

        <View style={gridStyles.gridContainerInner}>
          {grid.map((grid_row, index_row) => {
            return (
              <View style={gridStyles.gridRows} key={index_row}>
                {grid_row.map((cell, index) => {
                  return (
                    <TouchableHighlight
                      onPress={() => {
                        handleCellClick(index_row * 3 + index);
                      }}
                      underlayColor="white"
                      key={index}
                      style={gridStyles.gridCells}
                    >
                      <View key={index} style={gridStyles.gridCells}>
                        <Text style={gridStyles.largeTexts}>{cell}</Text>
                      </View>
                    </TouchableHighlight>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
      <View style={gridStyles.turnStatus}>
        <Text style={gridStyles.mediumTexts}>Turn - </Text>
        <Text style={gridStyles.largerTexts}>{turnStatus}</Text>
      </View>
    </>
  );
};

export default TicTacToeGrid;
