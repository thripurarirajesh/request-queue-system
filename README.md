# Request Queue System

## Overview

The Request Queue System is a web-based application built using HTML, CSS, and JavaScript. It manages requests using the Queue (FIFO - First In First Out) data structure and allows users to add, process, and cancel requests while tracking their status.

## Features

* Add new requests
* Process requests in FIFO order
* Cancel requests
* View request status
* Display queue statistics
* Dynamic user interface

## Technologies Used

* HTML
* CSS
* JavaScript
* Git
* GitHub

## Project Structure

request-queue-system/

├── index.html

├── style.css

├── queue.js

└── app.js

## Queue Operations

### addRequest()

Adds a new request to the queue with a "Pending" status.

### processNext()

Processes the first pending request and changes its status to "Processed".

### cancelRequest(id)

Cancels a request based on its ID.

### getStats()

Returns:

* Total Requests
* Pending Requests
* Processed Requests
* Cancelled Requests

## How to Run the Project

1. Clone the repository:
   git clone https://github.com/thripurarirajesh/request-queue-system.git

2. Open the project folder in VS Code.

3. Open index.html using Live Server.

4. Add requests and manage them through the interface.

## Workflow

1. User enters a request.
2. Request is added to the queue.
3. Requests are displayed in a table.
4. User can process or cancel requests.
5. Statistics update automatically.

## Sample Output

* Add Request → Pending
* Process Request → Processed
* Cancel Request → Cancelled

## Future Enhancements

* Request priority levels
* Search functionality
* Local storage support
* User authentication
* Request timestamps

## Author

Thripurari Rajesh

GitHub: https://github.com/thripurarirajesh
