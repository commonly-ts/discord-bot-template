## Requirements

- Node.js 18+ (20+ recommended)
- [PNPM](https://pnpm.io/) package manager
- Recommended basic TypeScript knowledge

## Quick start
```bash
git clone https://github.com/commonly-ts/discord-bot-template.git
cd discord-bot-template

pnpm install    # Install packages

# Recommended pre-build scripts
pnpm format     # Format every file with Prettier
pnpm lint       # Check for linting issues
pnpm typecheck  # Check for any type errors

pnpm build      # Build into lib/

# Remember to rename "temp.env" to ".env" before entering your secrets!
pnpm dev        # Run the bot locally
```
