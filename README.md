# wbpack-szachownica
Chess - JS classes & object exercises

What works for now:
- checcboard is generated in JS and pieces are placed on it in JS, too
- picking up of pieces
- moving pieces

...and i'm stuck here :) The code is a bit too complicated for me, but I figured out a way to make it easier to maintain - it should be rewriten to a function I call "a translator":

See, thiss chessboard consists of two layers: a layer with chess fields and another one - with figures. Objects on those layers (fields and figures) store information in data- atribute and in classes. When an in-game event occurs (like picking a figure), this data is transfered from one layer to another. That's where I have some problems to implement changes.

The solution:
a function - "a translator" - to communicate both layers and share data between them.

demo: https://webpack-szachownica.stronyireszta.pl/
