# MANJUNADH — CHAPTER 22
## Setup & run
    npm install
    npm run dev          # http://localhost:5173
    npm run build        # production build in /dist
## Testing (dev server only)
    /?sim=before   1 hour before midnight, live countdown
    /?sim=now      8 seconds before midnight: watch the live transition
    /?sim=after    day after: reveal then journey
Test mode only shifts the clock in dev; it is ignored in production and never edits src/config.js.
Real countdown = fixed instant 2027-02-08T00:00:00+05:30 vs the device clock, so it never restarts and works in any timezone.
## Customize (all in src/config.js)
Photos: copy to public/photos, set gallery[i].src = '/photos/name.jpg'. Music: copy to public/audio, set music.src = '/audio/theme.mp3' (empty = built-in ambient pad). Messages, milestones, dreams: edit the arrays.
## Deploy
Push to GitHub and import into Vercel/Netlify (build: npm run build, output: dist), or run `npx vercel --prod`.
