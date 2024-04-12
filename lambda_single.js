import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5m', target: 1 },  // 1 virtual user arriving every second for 5 minutes
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // Ensure 95% of requests finish within 500ms
  },
};

export default function () {
  // Send a GET request to the provided URL
  let response = http.get('https://gqfnc7ztrujstj3fyuzjdzjb2u0nqvus.lambda-url.us-east-2.on.aws');

  // Check if the response is successful
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
  
  // Sleep for 1 second
  sleep(1);
}
