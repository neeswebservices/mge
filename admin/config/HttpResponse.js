export class HttpResponse {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.timeStamp = new Date().toLocaleString();
    this.message = message;
    this.data = this?.data;
  }
}
