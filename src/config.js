// ONE place for everything personal. Edit freely; the birthday timestamp is fixed here.
export const EVENT = Object.freeze({
  name: 'MANJUNADH', fullName: 'MANJUNADH PRAKASH', age: 22, timezone: 'Asia/Kolkata',
  birthdayISO: '2027-02-08T00:00:00+05:30', // fixed instant: Feb 8 2027, 00:00 IST
  // Music: put a file in /public/audio and set e.g. '/audio/theme.mp3'. Empty = built-in soft music.
  music: { src: '', volume: 0.5 },
  backgroundImage: '/photos/manju.jpg', // faded photo behind the countdown; set '' to remove
  birthdayTune: true, // plays the Happy Birthday melody at the reveal; set false to turn off
  message: ['Another year. Another chapter. Another opportunity to become everything I have dreamed of.', 'The journey is not over.', 'This is only the beginning.'],
  // Placeholders — replace with your real memories.
  milestones: [
    { when: 'Add a year', title: 'Your first milestone', text: 'Placeholder. Replace this with a real memory.' },
    { when: 'Add a year', title: 'A turning point', text: 'Placeholder. Replace this with a real memory.' },
    { when: 'Add a year', title: 'Something you are proud of', text: 'Placeholder. Replace this with a real memory.' },
    { when: 'Now', title: 'Chapter 22', text: 'Placeholder. The next one is yours to write.' },
  ],
  dreams: [
    ['AI & Technology', 'Placeholder — describe this ambition.'], ['Entrepreneurship', 'Placeholder — describe this ambition.'],
    ['Creativity', 'Placeholder — describe this ambition.'], ['Personal Growth', 'Placeholder — describe this ambition.'],
    ['Financial Freedom', 'Placeholder — describe this ambition.'], ['Making a Difference', 'Placeholder — describe this ambition.'],
  ],
  // Put photos in /public/photos and set src: '/photos/me1.jpg'. Empty src = generated placeholder.
  gallery: Array.from({ length: 6 }, (_, i) => ({ src: '', caption: `Memory ${i + 1} (placeholder)` })),
});
