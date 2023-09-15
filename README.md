# Platform Engineering Interview

A colleague has developed an API using python and a UI using React. They need some help dockerising their app and running acceptance tests against their app.

## Problems:
1. Not all of the tests on the API are passing, make sure they are passing
2. Create a Dockerfile for the API and test the API once you've built/run it
3. Create a Dockerfile for the UI and test the UI once you've built/run it
4. You may want to consider adding a reverse proxy like NGINX to the UI dockerfile to host the UI build - you can find some relevant config in the nginx folder
4. Validate that the API and UI work in tandem by running docker compose

Feel free to review the code and make any changes you want to.

## API
This has been built using python with a dependency management and packaging solution called poetry. You can use poetry if you wish. The tests are written using pytest.

## UI
This has been built in ReactJS and makes a call to the API to receive it's answer.

### Notes
You are not expected to complete this entire exercise in the time allocated. We're looking for good problem solving skills and logical thoughts in trying to work through the problem. You may use any amount of googling to work through your solution. AI assitance is not acceptable.