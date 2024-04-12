import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 },  // Ramp-up to 100 users over 30 seconds
    { duration: '1m', target: 1000 }, // Increase to 1000 users over 1 minute
    { duration: '1m', target: 5000 }, // Increase to 5000 users over 1 minute
    { duration: '1m', target: 10000 },// Increase to 10000 users over 1 minute
    { duration: '1m', target: 10000 },// Stay at 10000 users for 30 seconds
    { duration: '30s', target: 0 },    // Ramp-down to 0 users over 30 seconds
  ],
};

export default function () {
  // Send a GET request to the provided URL
  let response = http.get('https://gqfnc7ztrujstj3fyuzjdzjb2u0nqvus.lambda-url.us-east-2.on.aws');

  // Check if the response is successful
  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  // Sleep for a random amount of time between 1 and 5 seconds
  sleep(Math.random() * 4 + 1);
}
