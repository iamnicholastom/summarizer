# AI Content Summarizer Agent

An AI agent designed to summarize content efficiently using the BaseAI framework, runnable locally with customizable API key support.

## Overview

This project implements an AI agent that takes long text inputs and produces concise yet comprehensive summaries. It leverages:

- **BaseAI**: For creating the AI workflow (pipes) and managing AI agents.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- An API key for your chosen AI model provider (e.g., OPENAI)

### Installation

After cloning the repository:

1. Install dependencies:

   ```sh
   npm install
   ```

2. Set up your environment variables:
   Create a `.env` file in the project root with the following:
   ```plaintext
   OPENAI_API_KEY=your_OPENAI_API_KEY_here
   ```
   Replace `OPENAI_API_KEY` with the name of your actual API key if different.

## Usage

### Running Locally

To run the summarizer agent locally:

1. Start the BaseAI server:

   ```sh
   npx baseai@latest dev
   ```

2. Run the summarizer script:
   ```sh
   npx tsx index.ts
   ```

This will prompt the LLM model to summarize the content. The response will be streamed directly in your terminal. All this happens locally on your machine.
