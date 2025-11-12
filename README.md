This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Git: Use SSH with GitHub

This repository is configured to use SSH for the `origin` remote:

origin  git@github.com:Lemarks/dev-events-nextjs16-crash-course.git

If you see authentication or host key errors when running `git fetch`/`git push`, follow the steps below.

### 1) Generate an SSH key (if you don’t have one)

macOS/Linux:

ssh-keygen -t ed25519 -C "your_email@example.com"

When prompted for a file path, press Enter to accept the default. Optionally set a passphrase.

Start the ssh-agent and add your key:

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

Copy your public key and add it to GitHub → Settings → SSH and GPG keys → New SSH key:

pbcopy < ~/.ssh/id_ed25519.pub   # macOS
# or
cat ~/.ssh/id_ed25519.pub        # Linux/Windows Git Bash

GitHub guide: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### 2) Verify your SSH connection to GitHub

ssh -T git@github.com

You should see a success message like: "Hi <username>! You've successfully authenticated, but GitHub does not provide shell access."

### 3) Fix "REMOTE HOST IDENTIFICATION HAS CHANGED" errors

If you encounter a message like:

WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

It means your local `~/.ssh/known_hosts` entry for `github.com` is outdated. To fix:

- Option A (safe refresh for GitHub only):

  ssh-keygen -R github.com
  ssh -T git@github.com   # Accept the new host key when prompted

- Option B (manually add current GitHub host keys): See official keys here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints

### 4) Ensure the remote uses SSH

git remote -v
git remote set-url origin git@github.com:Lemarks/dev-events-nextjs16-crash-course.git

Now you can fetch/pull/push over SSH:

git fetch
git pull
git push

Tip: To prefer SSH for all future GitHub clones:

git config --global url.ssh://git@github.com/.insteadof https://github.com/
