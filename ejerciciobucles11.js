const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
]

function averageMovieDuration(movies) {
  if (movies.length === 0) return 0

  let totalDuration = 0

  for (let i = 0; i < movies.length; i++) {
    totalDuration += movies[i].duration
  }

  return totalDuration / movies.length
}

const average = averageMovieDuration(movies)
console.log(`El promedio de duración es: ${average.toFixed(2)} minutos.`)
