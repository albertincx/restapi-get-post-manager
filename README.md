# REST API GET/POST Manager

A web-based tool for managing and testing REST API GET and POST requests with WebSocket support.

## Description

This application provides a user-friendly interface for sending GET and POST requests to REST APIs. It allows developers and testers to easily test API endpoints, inspect responses, manage request parameters, and connect to WebSocket endpoints for real-time communication.

## Features

- Send GET requests to API endpoints
- Send POST requests with customizable payloads
- View and inspect API responses
- Manage request headers
- Save and organize frequently used API endpoints
- Multiple tab support for concurrent API testing
- Settings panel with customizable base host
- WebSocket connection support with URL configuration
- Real-time WebSocket message display panel
- Beautiful notifications for WebSocket connection status and errors
- Responsive design with mobile navigation
- Multiple language support (Russian/English)
- Import/export functionality for saved tabs
- Simple and intuitive web interface

## Technologies Used

- HTML
- CSS
- JavaScript
- REST API protocols
- WebSocket API
- Tailwind CSS

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/restapi-get-post-manager.git
   ```

2. Navigate to the project directory:
   ```bash
   cd restapi-get-post-manager
   ```

3. Open `index.html` in your preferred web browser:
   ```bash
   open index.html
   ```

## WebSocket Usage

1. Go to Settings and enter your WebSocket URL (e.g., `ws://localhost:8080/ws`)
2. Use the WebSocket control buttons to start/stop the connection
3. View WebSocket messages in the dedicated panel at the bottom of the screen
4. Receive beautiful notifications for connection status changes:
   - Green notifications for successful connections
   - Red notifications for connection errors
   - Yellow warnings for configuration issues
   - Blue notifications for disconnections

## Regular API Usage

1. Enter the API endpoint URL in the designated field
2. Select the HTTP method (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS)
3. Add any required headers or request body (for POST, PUT, PATCH requests)
4. Click the "Execute Request" button
5. View the response in the results panel

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).
