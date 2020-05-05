const person = {
    title: 'How to Train Your Dragon',
    image: 'https://api.androidhive.info/json/movies/15.jpg',
    rating: 8.2,
    releaseYear: 2010,
    genre: ['Animation', 'Adventure', 'Family']
}

const keys = Object.getOwnPropertyNames(person);
console.log(keys);

for (idx in keys)
    console.log(idx + " - " + keys[idx] + " : " + person[keys[idx]]);


