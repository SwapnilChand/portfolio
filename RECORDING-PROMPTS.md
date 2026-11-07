# What to record next

Each block on the "What I build" tab has video slots. Right now 3 of the 6 blocks have a real video (Voice: Interrogation Room demo, Agents: CineBook, Mobile: ble-monitor). The rest show screenshots and diagrams. Below are the questions people ask on a call, grouped by who's asking, each with one prompt for a 30 to 60 second Loom or a screen recording of the thing working.

Rules for every clip: show the thing working in the first 5 seconds, talk over it like you'd explain it to a friend, one idea per clip, end on what it would do for them. Record at 1280x720 or more. Send me the Loom link and I'll drop it into the right card (`blocks` array in index.html, card kind `video` with a `loom` link).

## Recruiters and hiring managers

| Question they ask | Block | Record this (30 to 60 s) |
|---|---|---|
| What did you actually do at Bolna AI? | 04 Full stack | Walk the Bolna diagram on the site: dashboard, FastAPI, Postgres, billing, Slack alerts. Say what each one replaced (the manual audit, the missed outage). No company screens, just the diagram and your voice. |
| Have you shipped voice AI to real users? | 01 Voice | Arrowhead in 45 s: what a PhysicsWallah or upGrad call needed, one prompt problem you hit (hallucination or losing context), and how A/B tests picked the fix. |
| How do you debug when a voice bot sounds wrong? | 01 Voice | Open Interrogation Room, make a suspect talk, interrupt it, and point at what you'd look at first (latency, VAD, transcript). |
| How do you know your AI changes work? | 02 Evals | Run the cola benchmark live: 20 prompts, 17 right, about 2 s each. Show one it gets wrong and say what you'd change. |
| Can you work across the stack? | 04 Full stack | Open hourplan, use it once, then show the code for the one Vercel function behind it in 20 seconds. |
| Why are you leaving or available now? | Hero | Optional second intro, 30 s: what you want next (voice AI or full stack, Bangalore or remote), said plainly. |

## Founders hiring an early engineer

| Question they ask | Block | Record this (30 to 60 s) |
|---|---|---|
| How fast can you get something working? | 04 Full stack | Screen record a tiny app going from empty folder to a live Vercel link. Speed it up, keep your voice over the key moments. |
| Can you build an agent that does real work, not just chat? | 03 Agents | CineBook: ask it to book 2 seats for tonight, show the tool calls in the terminal next to the app, then the booking in Postgres. |
| Have you used MCP? | 03 Agents | Code Tutor in VS Code: ask Claude Code to explain one file and let the cursor move and the whiteboard draw. Say in one line what the MCP server does. |
| Can you handle realtime audio and interruptions? | 01 Voice | voice-engine: talk to it, cut it off mid sentence, show the live latency numbers on screen. |
| What would you build for us in week one? | 02 Evals | Show promptpen on a real looking support prompt, then say how you'd set up a small eval set for their product on day one. |
| How do you think about cost? | 02 Evals | pertask: load the sample logs and show what one finished agent task costs once failed runs are counted. |

## Freelance clients

| Question they ask | Block | Record this (30 to 60 s) |
|---|---|---|
| Can you build us a voice agent that answers our calls? | 01 Voice | Call flow walkthrough: point at the diagram (caller, speech to text, model, text to speech, cut in), then play 15 s of Interrogation Room as proof. |
| Can you build our mobile app? | 06 Mobile | Offlyn style: create an event with two slots, book one, show the slot sold out. If you can't show Offlyn, use CineBook on Android. |
| Will it work on bad networks? | 06 Mobile | vidsync: record a clip, turn on airplane mode, show it queued, turn the network back on, watch it upload once. |
| Can you make the admin dashboard too? | 04 Full stack | Any dashboard you built: filter, export a CSV, done. 30 s. |
| Can you build tools for our dev team? | 05 Dev tools | cola in the terminal: three plain English asks, three commands, one of them run. |
| What will working with you look like? | Short answers | 30 s talking head: you send something working in the first few days, then you improve it together on a call. |

## Order to record (best value first)
1. CineBook tool calls next to the app (agents block, founders ask this most).
2. cola benchmark run (gives the evals block its first video).
3. voice-engine with a live interruption (second voice video, shows realtime skill).
4. vidsync airplane mode test (mobile block).
5. Code Tutor in VS Code (dev tools block has no video yet).
6. Bolna diagram walkthrough (full stack block has no video yet).
