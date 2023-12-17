import React, { useState, useRef, MutableRefObject } from "react";
import { Alert, Button, Text, TouchableHighlight, View } from "react-native";

import { StyleSheet } from "react-native";
import Crossword, { CrosswordInterface } from "./modules/Crossword";

const Grid = () => {
  const game: MutableRefObject<CrosswordInterface> = useRef<CrosswordInterface>(
    new Crossword()
  );
  const [grid, setGrid] = useState<[string, string, string][]>(
    game.current.getGrid()
  );
  const [turnStatus, setTurnStatus] = useState<string>(
    game.current.getTurnStatus()
  );
  const [isOver, setIsOver] = useState<Boolean>(game.current.checkOver());

  const handleCellClick = (pressPos: number) => {
    let status = game.current.makeMove(pressPos);
    if (status === "Success") {
      setGrid(game.current.getGrid());
      if (game.current.checkOver()) {
        setIsOver(true);
        console.log(turnStatus);
        console.log(game.current.getWinningPositions());
      } else {
        game.current.changeTurn();
        setTurnStatus(game.current.getTurnStatus());
      }
    }
  };

  const handleReplay = () => {
    game.current = new Crossword();
    setGrid(game.current.getGrid());
    setTurnStatus(game.current.getTurnStatus());
    setIsOver(false);
  };

  return (
    <>
      <View>
        <Text>{turnStatus}'s Turn</Text>
      </View>

      <View style={gridStyles.gridContainer}>
        {isOver && (
          <View style={gridStyles.overlay}>
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
    </>
  );
};

const YourApp = () => {
  return (
    <View style={gridStyles.main}>
      <Grid />
    </View>
  );
};

const gridStyles = StyleSheet.create({
  main: {
    flex: 1,
    gap: 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002f41",
  },
  gridContainer: {
    backgroundColor: "#61b8d3",
    width: "75%",
    aspectRatio: "1/1",
    position: "relative",
    overflow: "hidden",
  },
  gridContainerInner: {
    width: "100%",
    height: "100%",
    transform: "scale(1.02)",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridRows: {
    flex: 1,
    gap: 5,
    width: "100%",
    height: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
  gridCells: {
    flexGrow: 1,
    aspectRatio: "1/1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002f41",
    transform: "scaleY(1)",
  },
  largeTexts: {
    overflow: "visible",
    fontWeight: "300",
    color: "#61b8d3",
    fontSize: 90,
    lineHeight: 90,
  },
});

export default YourApp;
