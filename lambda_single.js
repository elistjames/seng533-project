import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  // Send a GET request to the provided URL
  let response = http.get('https://gqfnc7ztrujstj3fyuzjdzjb2u0nqvus.lambda-url.us-east-2.on.aws');

  // Check if the response is successful
  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  // You can add more checks as needed

  // Sleep for 1 second between iterations
  sleep(1);
}