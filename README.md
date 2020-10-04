# web-inking-experiments

A new inking operation creates a vector and a grid of canvases.

Scrolling is locked when drawing.

At the end of the inking:
* Each paper canvas that is intersected by a grid canvas gets a reference to that vector and gets stamped with the grid canvas.
* The grid canvasses are cleared (possibly in a worker depending on perf) and reused.

Paper canvasses can be cleared if when they scroll too far out of view, but they still exist in the page data structure.

When they are scrolled back into view, all vectors that they own are restamped with the grid canvas method.

When checking for intersection with an inking path, you only need to check the vectors that are in the current paper canvas.