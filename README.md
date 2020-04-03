# Dicewars JS

Play my version [here](https://www.chrisraff.com/dicewars/). My slightly improved AI are the pink, green and lime player.

This is a modification of the game [Dice Wars](https://www.gamedesign.jp/games/dicewars/) from gamedesign.jp. I have added the ability to have multiple types of AI so I could try to create my own AI for the game.

## Usage

Once you have cloned the repository or downloaded the files, simply navigate to `file:///Drive:/the/directory/you/cloned/it/to/index.html` in any web browser on your computer (For instance, `file:///C:/Users/USERNAME/Downloads/dicewarsjs/index.html`).

## Make Your Own AI

1.  Copy one of the existing `ai_*.js` files and name it `ai_YourName.js`. Change the file's function to also be named `ai_YourName`

2. In `index.html` around line 39, include `ai_YourName.js` 

3. Go to line 42 of `game.js` where the array `this.ai` is defined. Change some of the items in the array to a unique identifier of your choice. The first player is always the human player, so leave it at 0.

* The index of the array corresponds to the color of the player in the game. The human (first) player is always purple, the second index is always lime, then green, pink, orange, cyan, yellow, and red.
* The order of play is shuffled in game, but the player colors always correspond to the order of this.ai
* It may be useful to set your AI as the second player so you can play against it in a two player game.

4. Modify the function `ai_YourName` in `ai_YourName.js`. Look at `ai_default` or `ai_defensive` for techniques to analyze the environment.

  * To declare an attack, set `game.area_from` to the id of the attacking region and `game.area_to` to the defending region's id (do not return). Once you have no good moves left, end the player's turn by returning 0.
  * `game.adat` is the array of regions.
  * `game.adat[i].arm` is the id of the player who owns the region, and `game.get_pn()` returns the id of the player whose turn it is.
  * `game.adat[i].dice` is the number of dice the region has
  * `game.adat[i].join[j]` is true (1) when region `i` is adjacent to region `j` and false (0) otherwise.

## Contributing
If you make a cool new AI, let me know!

## Potential Improvements
I plan to make a version of the game that just plays the AI against themselves quickly so you can get statstics on how well each AI performs. It would also be nice break each AI out into it's own file.

## License
[MIT](https://choosealicense.com/licenses/mit/)