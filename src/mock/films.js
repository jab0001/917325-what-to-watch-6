const FILMS = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink:
      `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink:
      `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description:
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`,
      `Saoirse Ronan`,
    ],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false,
  },
  {
    id: 2,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `#ffffff`,
    videoLink:
      `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink:
      `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description:
      `In the 1930s, Fantastic Beasts: The Crimes of Grindelwald is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
    rating: 7.9,
    scoresCount: 2400,
    director: `David Yates`,
    starring: [
      `Eddie Redmayne`,
      `Katherine Waterston`,
      `Dan Fogler`,
      `Alison Sudol`,
    ],
    runTime: 102,
    genre: `Fantasy`,
    released: 2012,
    isFavorite: false,
  },
  {
    id: 3,
    name: `Johnny English`,
    posterImage: `img/johnny-english.jpg`,
    previewImage: `img/johnny-english.jpg`,
    backgroundImage: `img/johnny-english.jpg`,
    backgroundColor: `#ffffff`,
    videoLink:
      `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink:
      `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description:
      `In the 1930s, Johnny English is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
    rating: 5.9,
    scoresCount: 540,
    director: `Peter Howitt`,
    starring: [
      `Rowan Atkinson`,
      `Natalie Imbruglia`,
      `Ben Miller`,
      `John Malkovich`,
    ],
    runTime: 60,
    genre: `Comedy`,
    released: 2015,
    isFavorite: true,
  },
  {
    id: 4,
    name: `Macbeth`,
    posterImage: `img/macbeth.jpg`,
    previewImage: `img/macbeth.jpg`,
    backgroundImage: `img/macbeth.jpg`,
    backgroundColor: `#ffffff`,
    videoLink:
      `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink:
      `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description:
      `In the 1930s, macbeth is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
    rating: 7.6,
    scoresCount: 180,
    director: `Justin Kurzel`,
    starring: [
      `Michael Fassbender`,
      `Marion Cotillard`,
      `Paddy Considine`,
      `Sean Harris`,
    ],
    runTime: 78,
    genre: `Thriller`,
    released: 2017,
    isFavorite: true,
  },
  {
    id: 5,
    name: `Aviator`,
    posterImage: `img/aviator.jpg`,
    previewImage: `img/aviator.jpg`,
    backgroundImage: `img/aviator.jpg`,
    backgroundColor: `#ffffff`,
    videoLink:
      `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink:
      `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description:
      `In the 1930s, Aviator is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
    rating: 9.9,
    scoresCount: 780,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Cate Blanchett`,
      `Kate Beckinsale`,
      `John C. Reilly`,
    ],
    runTime: 60,
    genre: `Drama`,
    released: 2004,
    isFavorite: false,
  },
  {
    id: 6,
    name: `The Revenant`,
    posterImage: `img/revenant.jpg`,
    previewImage: `img/revenant.jpg`,
    backgroundImage: `img/revenant.jpg`,
    backgroundColor: `#ffffff`,
    videoLink:
      `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink:
      `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description:
      `In the 1930s, Revenant is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
    rating: 8.9,
    scoresCount: 5740,
    director: `Alejandro G. Iñárritu`,
    starring: [
      `Leonardo DiCaprio`,
      `Tom Hardy`,
      `Domhnall Gleeson`,
      `Will Poulter`,
    ],
    runTime: 80,
    genre: `Thriller`,
    released: 2015,
    isFavorite: true,
  },
  {
    id: 7,
    name: `Pulp Fiction`,
    posterImage: `img/pulp-fiction.jpg`,
    previewImage: `img/pulp-fiction.jpg`,
    backgroundImage: `img/pulp-fiction.jpg`,
    backgroundColor: `#ffffff`,
    videoLink:
      `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink:
      `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description:
      `In the 1930s, Pulp Fiction is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
    rating: 9.9,
    scoresCount: 5430,
    director: `Quentin Tarantino`,
    starring: [
      `John Travolta`,
      `Samuel L. Jackson`,
      `Uma Thurman`,
      `Harvey Keitel`,
      `Tim Roth`,
      `Amanda Plummer`,
    ],
    runTime: 180,
    genre: `Comedy`,
    released: 1994,
    isFavorite: true,
  },
  {
    id: 8,
    name: `Snatch`,
    posterImage: `img/snatch.jpg`,
    previewImage: `img/snatch.jpg`,
    backgroundImage: `img/snatch.jpg`,
    backgroundColor: `#ffffff`,
    videoLink:
      `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink:
      `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description:
      `In the 1930s, Snatch is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
    rating: 8.9,
    scoresCount: 5400,
    director: `Guy Ritchie`,
    starring: [
      `Benicio del Toro`,
      `Dennis Farina`,
      `Jason Flemyng`,
      `Vinnie Jones`,
      `Brad Pitt`,
      `Rade Sherbedgia`,
      `Jason Statham`,
    ],
    runTime: 45,
    genre: `Comedy`,
    released: 1998,
    isFavorite: true,
  },
];

export default FILMS;