# Bhallu Siva - portfolio

React + TypeScript + Vite + Tailwind CSS v4. Static site, no backend, no API keys.

    npm install
    npm run dev        # local dev server
    npm run build      # type-check + production build into dist/
    npm run preview    # serve the production build

## Where things live
- `src/data/portfolio.ts` - all copy: profile, projects, skills, education. Edit here.
- `src/data/dsa.generated.ts` - generated from the DSA repo: `python3 scripts/gen_dsa.py /path/to/DSA` (clone it first).
- `src/components/` - one component per section.
- `public/Bhallu_Siva_Resume.pdf` - the resume download. Replace the file to update it.

## Deploy
Push to GitHub, then import the repo in Vercel or Netlify (build `npm run build`, output `dist`), or enable GitHub Pages with a build workflow.

## Open items
- LinkedIn: the site uses linkedin.com/in/sivabhallu (resume). Your GitHub profile links linkedin.com/in/siva-bhallu-333836305. Set the right one in `profile.linkedin`.
- Weather Application: no repository found on GitHub, so it is not shown. Add an entry to `projects` once it is pushed.
