 class RequestQueue {
    constructor() {
        this.queue = [];
        this.nextId = 1;
    }

    addRequest(name) {
        this.queue.push({
            id: this.nextId++,
            name,
            status: "Pending"
        });
    }

    processNext() {
        const request = this.queue.find(
            req => req.status === "Pending"
        );

        if (request) {
            request.status = "Processed";
        }
    }

    cancelRequest(id) {
        const request = this.queue.find(
            req => req.id === id
        );

        if (request) {
            request.status = "Cancelled";
        }
    }

    getStats() {
        return {
            total: this.queue.length,
            pending: this.queue.filter(r => r.status === "Pending").length,
            processed: this.queue.filter(r => r.status === "Processed").length,
            cancelled: this.queue.filter(r => r.status === "Cancelled").length
        };
    }
}