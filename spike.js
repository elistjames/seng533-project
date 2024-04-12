import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 5000 },  // Ramp-up to 5000 users over 10 seconds
    { duration: '3m', target: 5000 },  // Stay at 5000 users for 3 minutes
    { duration: '1s', target: 50000 }, // Ramp-up to 50000 users over 1 second
    { duration: '15s', target: 50000 }, // Stay at 50000 users for 15 seconds
    { duration: '94s', target: 5000 },  // Stay at 5000 users for end
  ],
};

//spike occurs right after 3min mark

export default function () {
  // Send a GET request to the API
  let response = http.get('https://gqfnc7ztrujstj3fyuzjdzjb2u0nqvus.lambda-url.us-east-2.on.aws');

  // Check if the response is successful
  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  // Sleep for a random amount of time between 1 and 5 seconds
  sleep(Math.random() * 4 + 1);
}
