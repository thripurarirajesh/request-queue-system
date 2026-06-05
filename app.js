 const queue = new RequestQueue();

const addBtn = document.getElementById("addBtn");
const requestInput = document.getElementById("requestInput");
const requestTable = document.getElementById("requestTable");
const processBtn = document.getElementById("processBtn");

// Add Request
addBtn.addEventListener("click", () => {

    const requestName = requestInput.value.trim();

    if (requestName === "") {
        alert("Enter a request");
        return;
    }

    queue.addRequest(requestName);

    displayRequests();

    requestInput.value = "";
});

// Display Requests
function displayRequests() {

    requestTable.innerHTML = "";

    queue.queue.forEach(request => {

        const row = `
        <tr>
            <td>${request.id}</td>
            <td>${request.name}</td>
            <td>${request.status}</td>
            <td>
                <button onclick="cancelRequest(${request.id})">
                    Cancel
                </button>
            </td>
        </tr>
        `;

        requestTable.innerHTML += row;
    });

    updateStats();
}

// Cancel Request
function cancelRequest(id) {

    queue.cancelRequest(id);

    displayRequests();
}

// Update Statistics
function updateStats() {

    const stats = queue.getStats();

    document.getElementById("total").textContent =
        stats.total;

    document.getElementById("pending").textContent =
        stats.pending;

    document.getElementById("processed").textContent =
        stats.processed;

    document.getElementById("cancelled").textContent =
        stats.cancelled;
}

// Process Next Request
processBtn.addEventListener("click", () => {

    queue.processNext();

    displayRequests();
});