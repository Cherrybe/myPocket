# my-pocket

A modern component-driven Next.js application built with React, TypeScript, Tailwind CSS, and Storybook. It follows atomic design principles and supports scalable, maintainable frontend development.

---

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Class Variance Authority (CVA)
- **Component Explorer**: Storybook (with Vite builder)
- **Linting**: ESLint
- **Bundler (App)**: Turbopack
- **Bundler (Storybook)**: Vite
- **Testing (optional)**: Vitest, Playwright, Jest (choose as needed)

---

## 📁 Project Structure

```plaintext
my-pocket/
├── public/
├── src/
│ ├── components/
│ │ ├── src/
│ │ │ ├── atoms/
│ │ │ │ └── button/
│ │ │ │ ├── Button.tsx
│ │ │ │ ├── Button.types.ts
│ │ │ │ ├── Button.cva.ts
│ │ │ │ └── Button.stories.tsx
│ │ │ └── ...
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── globals.css
│ ├── styles/
│ │ └── theme.css
│ └── utils/
│ └── ...
├── .storybook/
│ ├── main.ts
│ └── preview.ts
└── ...
```

## `package.json` Overview
- Project Name: comment-app
- Version: 0.1.0
  
##Scripts
`pnpm dev`:	Run the development server with Turbopack
`pnpm build`:	Create a production build
`pnpm start`:	Start the production server
`pnpm lint`:	Run ESLint to check code quality
`pnpm storybook`:	Launch Storybook for component development
`pnpm build-storybook`:	Generate the static Storybook build
`pnpm tailwind:build`:	Build the Tailwind theme CSS file
`pnpm tailwind:watch`:	Watch and rebuild Tailwind styles

## Dependencies
- Next.js: React framework for server-rendered and hybrid applications
- React & ReactDOM: Core UI libraries
- TypeScript: Static typing for JavaScript
- Tailwind CSS: Utility-first CSS framework
- class-variance-authority (CVA): Class management with variants
- clsx: Utility for conditional class names
- Jest: For testing.

## DevDependencies
- ESLint: Linter for maintaining code quality
- Storybook: UI component explorer (@storybook/react, @storybook/nextjs, etc.)
- Jest / Vitest / Playwright: Testing frameworks
- Tailwind CLI & PostCSS: CSS processing
- Vite: Build tool used with Storybook
- Type Definitions: For Node, React, etc.

##  📦 Installation and Setup
To install and set up the project, follow these steps:
1. Clone the repository:
   ```
   git clone https://github.com/Cherrybe/myPocket.git
   cd myPocket
   ```
2. Install dependencies:
   ```
    pnpm install
   ```
3. Run the development server:
   ```
    pnpm dev
   ```
4. Run Run Storybook:
   ```
    pnpm storybook
   ```
5. Build for production:
   ```
    pnpm build
   ```
6. Build Tailwindcss (optional)
    ```
    pnpm tailwind:build
    ```
7. Build and Watch Tailwind changes (theme.css live reload) (optional)
   ```
   pnpm tailwind:watch
   ```    
       
## 🧱 Component Architecture
The project follows atomic design principles, organizing components into atoms, molecules, organisms, and higher-level patterns. This structure improves reusability and scalability.
- `Atoms`: Smallest reusable elements (e.g., buttons, icons)
- `Molecules`: Groups of atoms (e.g., input groups, cards)
- `Organisms`: Complex UI sections
- `Utils`: Shared utility functions or helpers
- `App`: Contains routing logic and layout structure
- `Templates / Pages`: – App routes and page content


## How it works
Each component is isolated and documented using Storybook, allowing visual testing and interaction outside of the main application.
src/components/src/atoms/button/
│   Button.tsx           # The functional component
│   Button.types.ts      # Component props and types
│   Button.stories.tsx   # Storybook stories
│   Button.cva.ts        # Variant styles with CVA (optional)

## Visual Documentation
Run Storybook to explore the component library:
```
pnpm storybook
```

##✨ Future Improvements
- ✅ Add reusable form field components
- ✅ Dark mode support
- ⏳ Internationalization (i18n)
- ⏳ CI/CD with GitHub Actions or Vercel preview deploys

## 📄 License
MIT © 2025 Christabel Quaye
