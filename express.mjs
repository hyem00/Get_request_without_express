import http from 'http';

class Express {
  constructor() {
    this.routes = {};
  }

  // GET 요청 핸들러
  get(path, handler) {
    this.routes[path] = { method: 'GET', handler };
  }

  handleRequest = (req, res) => {
    const { method, url } = req;
    const route = this.routes[url];

    if (!route || route.method !== method) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end(JSON.stringify({ error : "Not Found" }));
    }

    route.handler(req, res);
  }
  
  listen = (port, host, callback) => {
    const server = http.createServer((req, res) => {
      this.handleRequest(req, res);
    });

    server.listen(port, host, callback);
  }
}

export default Express;
