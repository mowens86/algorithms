// jump heights
const height = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3
  }
  // Parameter hero has two method properties: 
  // findBirds() - Returns an array of birds that are on screen with x & y coordinates and horizontal speed 
  // jump(height) - Tells the hero to jump. Three jump heights available (1 - LOW, 2 - MEDIUM, 3 - HIGH)
  
  const controller = (hero) => {
    
    const birdArr = hero.findBirds();
    birdArr.forEach((curr, index) => {
      
      /* Level 2 & 1 */
      // Check if 2 birds on screen
      if (birdArr[index+1] !== undefined) {
        // Check if 3 birds on screen
        if (birdArr[index+2] !== undefined) {
          // If 3 birds on same x-axis have following 3 y-axis then jump high, this solves the final jump
          if (curr.x === 45 && (curr.y === 45 && birdArr[index+1].y === 75 && birdArr[index+2].y === 105)) hero.jump(height.HIGH);
        }
        if (curr.x === 40 && curr.y === 75) hero.jump(height.MEDIUM);
        if (curr.x === 50 && (curr.y === 45 && birdArr[index+1].y === 110)) hero.jump(height.HIGH);
        if (curr.x === 40 && curr.y === 40 || curr.x === 40 && curr.y === 45) hero.jump(height.LOW);
      }
      
      /* Level 0 */
      if (curr.x === 40 && curr.y === 40 || curr.x === 40 && curr.y === 45) hero.jump(height.LOW);
    });
  };