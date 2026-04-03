## Requirements

- Node.js 18+ (20+ recommended)
- [pnpm](https://pnpm.io/) package manager
- [pm2](https://pm2.keymetrics.io/) process manager
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

# Production scripts
pnpm redeploy		# Pull from origin, install dependencies, build, and reload the process
pnpm start			# Start the process
pnpm stop       # Stop the process
pnpm restart		# Restart the process
pnpm reload			# Reload the process (zero downtime)
```
