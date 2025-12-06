# 🤝 Contributing to LeetZen

Thank you for considering contributing!  
This document outlines guidelines for reporting issues, requesting features, and submitting pull requests.

## 🐛 Reporting Issues

If you find:

* A bug
* A DOM selector that stopped working
* A new LeetZen UI change
* A blocker that does not hide correctly
* Performance issues

Please open an issue with:

* Clear description
* Steps to reproduce
* Expected behavior
* Screenshots (if possible)

## 🌟 Requesting Features

Open a feature request issue if you have ideas like:

* Hide premium lock icons
* Hide weekly-contest leaderboard
* Auto-copy code templates
* Session timers / focus mode
* New strategies

Features must follow the extension's core philosophy:
minimal, focused, and distraction-free experience for LeetCode.

## 📌 How to Contribute

### 1️⃣ Fork + Clone

```bash
git clone https://github.com/<your-username>/leetzen.git
cd leetzen
yarn install
```

## Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `chore`: tooling changes, e.g. change CI config.
- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module.
- `test`: adding or updating tests, e.g. add integration tests using detox.

Our pre-commit hooks verify that your commit message matches this format when committing.


## Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.