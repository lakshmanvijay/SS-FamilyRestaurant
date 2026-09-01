function unsplash(id: string, width: number, quality = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`
}

export const images = {
  heroBg: unsplash('photo-1414235077428-338989a2e8c0', 1920, 75),
  chef: unsplash('photo-1583394293214-28ded15ee548', 900),
}

export const menuImages = {
  pasta: unsplash('photo-1551183053-bf91a1d81141', 700),
  burger: unsplash('photo-1568901346375-23c9450c58cd', 700),
  salad: unsplash('photo-1512621776951-a57141f2eefd', 700),
  pizza: unsplash('photo-1574071318508-1cdbab80d002', 700),
  dessert: unsplash('photo-1541783245831-57d6fb0926d3', 700),
  soup: unsplash('photo-1547592166-23ac45744acd', 700),
  steak: unsplash('photo-1558030006-450675393462', 700),
  seafood: unsplash('photo-1519708227418-c8fd9a32b7a2', 700),
}
