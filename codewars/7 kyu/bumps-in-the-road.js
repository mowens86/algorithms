const bump = (x) => {
  let bumpCounter = 0;
  const splitRoad = x.split('');
  splitRoad.forEach(piece => {
    if (piece === 'n') bumpCounter++; 
  });
  return bumpCounter > 15 ? "Car Dead" : "Woohoo!";
};

/**
 * Your car is old, it breaks easily. The shock absorbers are gone
 *  and you think it can handle about 15 more bumps before it dies totally.

  Unfortunately for you, your drive is very bumpy! Given a string showing
   either flat road ("_") or bumps ("n"), work out if you make it home safely.
    15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

  FUNDAMENTALSSTRINGS
 */