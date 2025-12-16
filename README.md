# AI Books and Agents Project

This project contains tools and frameworks for building AI-powered books and agents. It provides a RESTful API for creating, managing, and interacting with AI agents, as well as generating AI-authored books on various topics.

## Features

- Create and manage different types of AI agents (chatbots, researchers, writers, etc.)
- Generate books on various topics with customizable styles and lengths
- RESTful API for easy integration
- Extensible architecture for adding new agent types and book generation features

## Project Structure

- `/src` - Source code for AI agents and book generation
  - `/routes` - API route definitions
  - `/controllers` - Business logic handlers
  - `/models` - Data models
  - `/utils` - Utility functions and AI service integrations
- `/data` - Data files for training and content
- `/docs` - Documentation
- `/examples` - Example implementations

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (copy `.env.example` to `.env` and fill in your values)
4. Start the server: `npm start`

## API Documentation

See [API Documentation](docs/api.md) for detailed information about the available endpoints.

## Examples

Check the [examples](examples/) directory for sample implementations of agents and book generation.