import re

GETAWAY = """  {
    id: 'getaway',
    title: 'Getaway: AI Trip Planner on Google Maps Platform',
    subtitle: 'iOS App with a Gemini Agent, Leave-Time Comparison and Turn-by-Turn Navigation · In Progress',
    year: '2026',
    category: 'ml-systems',
    tags: ['Swift', 'UIKit', 'Google Maps SDK', 'Places SDK', 'Navigation SDK', 'Routes API', 'FastAPI', 'Gemini', 'Docker', 'Render', 'XcodeGen'],
    summary: 'An iOS app that plans Victorian day trips with an AI agent, recommends when to leave to beat traffic, and navigates turn-by-turn from your real location.',
    problemStatement: 'In Melbourne\\'s summer holidays the roads to the coast jam up, and leaving an hour earlier can save a long wait. Maps apps tell you how long a trip takes at one departure time; they don\\'t compare times for you or help you choose where to go.',
    solution: 'Ask in plain English ("somewhere cool for a hike, back before dark") and a Gemini agent searches real places, checks traffic-aware drive times and sunset, then explains its top picks. Each place shows predicted drive times for several departure slots, highlights the fastest, and starts in-app navigation.',
    highlights: [
      'iOS app in Swift and UIKit using the Google Maps, Places and Navigation SDKs, with in-app turn-by-turn navigation from the user\\'s real GPS position.',
      'Leave-time comparison: traffic-aware Routes API predictions for 4 departure times, fetched in parallel with a Swift task group that cancels the rest if one fails.',
      'AI agent backend (FastAPI + Gemini tool calling) that calls Places search, Routes and a sunset calculator; a guardrail drops any place ID the model did not get from a real search.',
      'Resilience: exponential-backoff retries on overload, an automatic fallback model, clear 503 + Retry-After errors, and a "Try Again" flow in the app.',
      'Cost control: parallel tool calls, a 6-hour plan cache and Maps field masks to cut paid requests.',
      'Security: API keys kept out of the repo (gitignored config, encrypted environment variables on Render) and the iOS key restricted to the app\\'s bundle ID.',
      'Native iOS design: bottom sheets, an inset-grouped diffable list, SF Symbols, Dynamic Type, dark mode and VoiceOver support.'
    ],
    metrics: [
      { label: 'Departure Slots', value: '4, fetched in parallel' },
      { label: 'Hallucination Guardrail', value: 'Real place IDs only' },
      { label: 'Plan Cache', value: '6 hours' },
      { label: 'Status', value: 'Live backend · on device' }
    ],
    githubUrl: 'https://github.com/HieuTong/getaway',
    architectureHighlights: [
      'UI code never talks to Google directly: services return plain app models, so data sources can change without touching the screens.',
      'The LLM chooses and explains; real place data and traffic-aware routes come from Google APIs.'
    ]
  },
"""

ROADMAP = """  {
    id: 'getaway-next',
    title: 'Getaway: Holiday Traffic Forecasting, CarPlay & TestFlight',
    codename: 'Getaway v2',
    domain: 'Mobile & Maps',
    timeline: 'Dec 2026 – Feb 2027',
    status: 'Planned',
    progress: 0,
    executiveSummary: 'Forecast holiday traffic with a graph neural network on Victoria\\'s open traffic-signal data, bring Getaway to CarPlay, and ship a TestFlight beta.',
    problemStatement: 'Routing predictions reflect typical traffic, but holiday peaks on coastal roads are unusual days. And a trip planner is most useful in the car, not only on the phone.',
    architectureDetails: [
      'Graph neural network over the road network, trained on Victoria\\'s open traffic-signal data.',
      'CarPlay interface for the planned trip and navigation.',
      'TestFlight beta for real users.'
    ],
    keyInnovations: [
      'Builds on my GNN work in comps-gnn, applied to roads instead of property sales.'
    ],
    techStack: ['Swift', 'CarPlay', 'PyTorch', 'Graph Neural Networks', 'TestFlight'],
    hiringTeamTakeaway: 'Takes a working app from device to real users, with ML aimed at a problem the app actually has.',
    milestones: [
      { title: 'Holiday traffic forecasting with a GNN', completed: false },
      { title: 'CarPlay support', completed: false },
      { title: 'TestFlight beta', completed: false }
    ]
  },
"""

p = 'src/data/portfolioData.ts'
s = open(p).read()
if "id: 'getaway'," in s:
    print('ok       Getaway project already added')
else:
    anchor = 'export const SHIPPED_PROJECTS: Project[] = [\n'
    assert anchor in s, 'SHIPPED_PROJECTS not found'
    s = s.replace(anchor, anchor + GETAWAY, 1)
    print('added    Getaway project (first in the list)')
if "id: 'getaway-next'," in s:
    print('ok       Getaway roadmap entry already added')
else:
    anchor = 'export const UPCOMING_PROJECTS: UpcomingProject[] = [\n'
    assert anchor in s, 'UPCOMING_PROJECTS not found'
    s = s.replace(anchor, anchor + ROADMAP, 1)
    print('added    Getaway roadmap entry')
open(p, 'w').write(s)

# Allow the new roadmap category
t = 'src/types.ts'
ts = open(t).read()
if "'Mobile & Maps'" in ts:
    print('ok       types already allow Mobile & Maps')
else:
    ts, n = re.subn(r"domain: ([^;\n]*);", r"domain: \1 | 'Mobile & Maps';", ts, count=1)
    assert n == 1, 'domain line not found in types.ts'
    open(t, 'w').write(ts)
    print('updated  types.ts')
