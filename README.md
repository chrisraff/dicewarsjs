# Dicewars JS

This is a modification of the game [Dice Wars](https://www.gamedesign.jp/games/dicewars/) from gamedesign.jp. I have added the ability to have multiple types of AI so I could try to create my own AI for the game.

## Usage

Once you have cloned the repository or downloaded the files, simply navigate to `file:///Drive:/the/directory/you/cloned/it/to/index.html` in any web browser on your computer (For instance, `file:///C:/Users/USERNAME/Downloads/dicewarsjs/index.html`).

## Make Your Own AI

Open game.js

1. Go to line 42 where the array `this.ai` is defined. Change one of the numbers in the array to a unique identifier of your choice. The first player is always the human player, so leave it at -1. In the game the player order is always shuffled, but the AI types will always correspond to the same color. In order, including the human player, the colors are purple, lime, dark green, pink, orange, cyan, yellow, and red. It may be useful to set your ai as the second player so you can play against it in a two player game.

2. Go to line 449 where `this.com_thinking` is defined. Add a new case using your unique identifier from step 1, and point and have it return a function that you will define in step three. Look at the other cases for guidance.

3. Create your function somewhere after the definition of `this.com_thinking`. Look at `this.com_original` or `this.com_defensive` for techniques to analyze the environment.

  * To declare an attack, set `this.area_from` to the id of the attacking region and `this.area_to` to the defending region's id. To finish the player's turn, return 0. 
  * `this.adat` is the array of regions.
  * `this.adat[i].arm` is the id of the player who owns the region, and this.get_pn() returns the id of the player whose turn it is.
  * `this.adat[i].dice` is the number of dice the region has
  * `this.adat[i].join[j]` is true (1) when region `i` is adjacent to region `j` and false (0) otherwise.

## Contributing
If you make a cool new AI, let me know!

## License
[MIT](https://choosealicense.com/licenses/mit/)