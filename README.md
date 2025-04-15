# ⚡ React Starter Template

A powerful, minimal, and production-ready React + Vite starter template with built-in support for:

- ✅ **Vite** – Fast dev/build tool with instant HMR
- ✅ **React + TypeScript**
- ✅ **Tailwind CSS** – Utility-first styling
- ✅ **GSAP** – Smooth and powerful animations
- ✅ **Formik + Yup** – Scalable forms & validation
- ✅ **TanStack Query (React Query)** – Data fetching, caching & syncing
- ✅ **React Router** – Powerful routing solution
- ✅ **Axios** – API consumption with global config
- ✅ **Environment** – Variables via .env
- ✅ **Prettier** - Maintain a clean codebase
- ✅ **Simple-git-hooks** - set up git hooks
- ✅ **Nano-staged** - run commands for git files
- ✅ Well-organized folder structure
- ✅ ESM, HMR, PostCSS, and Vite-ready

---

## 📦 Tech Stack

| Tool             | Purpose                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------- |
| Vite             | Build tool for speed                                                                    |
| React            | UI library                                                                              |
| TypeScript       | Static typing                                                                           |
| Tailwind CSS     | Utility-first CSS framework                                                             |
| GSAP             | High-performance animations                                                             |
| Formik           | Form management                                                                         |
| Yup              | Schema validation                                                                       |
| TanStack Query   | Data fetching, caching, and sync                                                        |
| React Router     | Routing and navigation                                                                  |
| Axios            | HTTP client for APIs                                                                    |
| dotenv           | Manage environment variables                                                            |
| Prettier         | Maintain a clean codebase                                                               |
| Simple-git-hooks | For setting up git hooks                                                                |
| Nano-staged      | Tiny tool to run commands for modified, staged, and committed files in a GIT repository |

## 🚀 Getting Started

### 1. Clone the Template

```bash
git clone https://github.com/RidwanAdebosin/react-starter-template.git
cd react-starter-template
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install
```

### 3. Add Environment Variables

```bash
# Create a .env file in the root of the project:
VITE_API_BASE_URL=https://your-api.com
```

### 4. Start the Development Server

```bash
npm run dev

# or

pnpm run dev

# or

yarn dev
```

### Simple-git-hooks

A git hook is a command or script that is going to be run every time you perform a git action.
Simple-git-hooks in this case helps to automate code formatting pre-commit, and linting pre-push.
This helps to make sure you don't push broken code to your remote repository, ensuring a clean codebase and error catching before push.

#### Initiate simple-git-hooks

To enable `simple-git-hooks` which is already installed and set up, simply run the following in your command line:

```bash
# Using npm
npx simple-git-hooks

# Using pnpm
pnpm dlx simple-git-hooks

# Using yarn
yarn simple-git-hooks
```

#### Disable simple-git-hooks

Well, everyone loves a clean and error-free codebase, so you should actually enable simple-git-hooks!
But if you want to disable it, simply remove node_modules folders and re-install npm/pnpm/yarn.

```bash
rm -rf .idea node_modules

# and then

npm install
# or
pnpm install
# or
yarn install
```

---
