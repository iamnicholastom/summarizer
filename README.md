# AI Content Summarizer Agent

An AI agent designed to summarize content efficiently using the BaseAI framework, runnable locally with customizable API key support.

## Overview

This project implements an AI agent that takes long text inputs and produces concise yet comprehensive summaries. It leverages:

- **BaseAI**: For creating the AI workflow (pipes) and managing AI agents.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- An API key for your chosen AI model provider (e.g., XAI)

### Installation

After cloning the repository:

1. Install dependencies:

   ```sh
   npm install # or yarn install
   ```

2. Set up your environment variables:
   Create a `.env` file in the project root with the following:
   ```plaintext
   XAI_API_KEY=your_xai_api_key_here
   ```
   Replace `XAI_API_KEY` with the name of your actual API key if different.

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

## Code Structure

The project consists of two main files:

- `summarizer.ts`: Defines the pipe configuration for the summarizer agent, using your API key (XAI_API_KEY)
- `index.ts`: Entry point that initializes the pipe and demonstrates its usage with a sample job description

## Configuration

### Pipe Configuration

In `summarizer.ts`, you'll find settings for the AI model (xai:grok-beta), temperature, max tokens, etc., which you can adjust for different summarization outcomes. Make sure the apiKey matches your .env variable name.

## Troubleshooting

### Common Issues

- **API Key Issues**: Confirm your API key is correctly set in your .env file. If authentication errors occur, verify the key name and value match what's expected in summarizer.ts
- **Model Performance**: If the model xai:grok-beta doesn't perform as expected, you might need to adjust settings or consider alternative models if available
