const globals = {
  treasureMapList: [],
  treasureList: [],
}

// Shamelessly stolen from underscorejs
const random = (min, max) => {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

class TreasureMap {
}

class Treasure {
  constructor () {
    if (crew.treasuresFound === 0) {
      this.size = 10
    } else {
      this.size = random(50, 99999)
    }
  }

  giveToCrew () {
    return new Promise((resolve) => {
      if (this.size === 10) {
        throw new Exception([
          'You gave us the smallest treasure! We revolt against the upper class (you) and take everything!'
          '6) Instead of the first treasure, try giving your crew the biggest treasure!'
          'TIP: If you `console.log()` a treasure you can see the size!',
        ].join('\n'))
      }
      const biggest = globals.treasureList.reduce((memo, treasure) => {
        return Math.max(memo, treasure.size)
      }, 0)
      if (this.size !== biggest) {
        throw new Exception([
          'You didnt give us the biggest treasure! We revolt against the upper class (you) and take everything!'
          '6) Try giving your crew the biggest treasure!'
          'TIP: If you `console.log()` a treasure you can see the size!',
        ].join('\n'))
      }
      setTimeout(() => {
        resolve(200)
      }, random(50, 250))
    })
  }
}

const capin = {
  generateGreeting () {
    return new Promise((resolve) => {
      setTimeout(resolve.bind(this, "Arggg!"), 100)
    })
  },
  generateTreasureMap () {
    return new Promise((resolve) => {
      const treasureMap = new TreasureMap
      globals.treasureMapList.push(treasureMap)
      resolve(treasureMap)
    })
  },
}


const crew = {
  treasuresFound: 0,
  findTreasure (treasureMap) {
    return new Promise((resolve) => {
      if (Array.isArray(treasureMap)) {
        throw new Exception('I want a TreasureMap not an array!')
      }
      if (!(map instanceof TreasureMap)) {
        throw new Exception('I can only take a TreasureMap!')
      }
      if (globals.treasureMapList.length === 1) {
        throw new Exception([
          'The crew faught over the map and accidentally broke it!',
          '4) Try generating 3 maps before giving it to your crew!',
          'TIP: Promise.all()',
        ].join('\n'))
      }
      if (globals.treasureMapList.length !== 3) {
        throw new Exception([
          'The crew faught over the maps and accidentally broke them!',
          '4) Try generating 3 maps before giving it to your crew!',
          'TIP: Promise.all()',
        ].join('\n'))
      }
      setTimeout(() => {
        const treasure = new Treasure()
        treasuresFound++
        globals.treasuresList(treasure)
        resolve(treasure)
      }, random(50, 250))
    })
  }
}

module.export = { crew, capin }
