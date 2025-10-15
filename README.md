# SDS Consumer

This React application demonstrates how to consume the [SDS (Simple Design System) library](https://github.com/ramanathanMuthuraman/sds-library) components and leverage Figma's Code Connect panel for automated code generation. Built with Vite for optimal development experience.

## Overview

This project showcases:

- Integration of [`sds-library`](https://github.com/ramanathanMuthuraman/sds-library) components
- Utilization of Figma's Code Connect panel
- Streamlined design-to-development workflow

## Using with Figma Code Connect

1. Open your Figma design file
2. Select a component in Figma
3. Open the Code Connect panel
4. The panel will automatically detect the corresponding SDS component
5. Generate and copy the code directly into this project

## AI-Assisted Code Generation with Figma MCP

This project supports AI-assisted code generation through Figma's Model Context Protocol (MCP) integration:

1. Open Figma desktop and navigate to the design
2. Select a frame in Figma
3. Open the target file in VS Code where you want to add the component
4. Prompt the AI agent with "Add the selected Figma frame code to [file name]"
5. Use the AI agent in your IDE to:
   - Automatically generate component code
   - Map Figma components to existing SDS library components
   - Get intelligent suggestions for component properties
   - Generate responsive layouts
   - Implement component variations
6. The AI agent will:
   - Analyze the Figma design
   - Generate React code using SDS library components
   - Handle proper imports automatically
   - Ensure design system consistency
   - Add accessibility features

Benefits:

- Seamless design-to-code workflow
- Consistent implementation of design system components
- Reduced development time
- Automatic handling of component mappings
- Smart code suggestions based on design context

## Development Workflow

1. Design components in Figma using the SDS library components
2. Use the Code Connect panel to inspect the component structure
3. Generate React code that automatically uses the correct SDS library imports
4. Paste the generated code into your React components
5. The code will automatically reference the proper SDS library components

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

## Technical Stack

- React 18.2.0
- [SDS Library](https://github.com/ramanathanMuthuraman/sds-library) (`sds-library`)
- React Aria Components
- Vite for build tooling

## Vite Features

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
