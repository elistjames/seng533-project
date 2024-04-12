import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000, // Number of virtual users
  duration: '300s', // Duration of the test
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
