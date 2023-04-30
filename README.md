# OpenAI API - Next.js Starter Project

This is a Typescript starter project for using the Open AI API to build a Node app.

This is a dead simple demo app with an example of how we can use ChatGPT with LangChain using Next api routes.

http://localhost:3000/ai - will generate a simple response a response using a defined template. Use this as a starting point to create your web app.

Technologies used:

- [LangChain](https://js.langchain.com/docs/)
- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Setup

1. You'll need Node >18 installed.

1. Clone this repository

1. Navigate into the project directory

```bash
cd openai-api-next-starter
```

1. Install the requirements

```bash
yarn install
```

1. Make a copy of the example environment variables file

```bash
cp .env.example .env
```

1. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

1. Run the app

```bash
yarn dev
```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000). Happy hacking.
