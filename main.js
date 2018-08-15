const maze = [
    [ S, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [ 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
    [ 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
    [ 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
    [ 0, 0, 1, 1, 1, 0, 0 ,0, 0, 0],
    [ 0, 0, 0, 0, 1, 1, 1, 1, 1, E]
  ];

  makeRoad(maze);

  function makeRoad(maze) {
    const path = [];
    const visited = {};
  
    function find(location) {
      if (maze[location.r][location.c] && !visited[location.r + '' + location.c]) {
        visited[location.r+''+location.c] = true;
        
        if (maze[location.r][location.c] === 'E') {
          path.push([location.r, location.c]);
          return true;
        }
  
        if (maze[location.r + 1] && find({r: location.r + 1, c:location.c})) {
          path.push([location.r, location.c]);
          return true; 
        }
  
        if (maze[location.r][location.c + 1] && find({r: location.r, c: location.c + 1})) {
          path.push([location.r, location.c]);
          return true;
        }  
        
        if (maze[location.r - 1] && find({ r: location.r - 1, c: location.c })) {
          path.push([location.r, location.c]);
          return true;
        } 
  
        if (maze[location.r][location.c - 1] && find({ r: location.r, c: location.c - 1 })) {
          path.push([location.r, location.c]);
          return true;
        } 
      }
    }
  
    for (var r = 0; r < maze.length; r++) {
      for (var c = 0; c < maze.length; c++) {
        if (maze[r][c] === 'S') {
          find({r:r, c:c});
          break;
        }
      }
    }
  
    return path.reverse();
  }