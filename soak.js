import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 20000 },  // Immediate ramp-up to 20,000 users
    { duration: '4m59s', target: 20000 },  // Stay at 20,000 users for the remainder of the test
  ],
};

export default function () {
  // Send a GET request to the provided URL
  let response = http.get('https://gqfnc7ztrujstj3fyuzjdzjb2u0nqvus.lambda-url.us-east-2.on.aws');

  // Check if the response is successful
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
}
