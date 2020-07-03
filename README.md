# Assertions-On-The-Logger-NestJs


# Scaffloded With Nest-CLI

created this project with using the [nest cli](https://docs.nestjs.com/cli/overview):
```
nest new assertions-on-logger
```

## Usage
Look at the README in the `assertions-on-logger` folder for how to run the dev server, units tests, and a fresh build.

## Borderline Unncecessary
It's common to have logging lines of code in a codebase that are meant to make it to production and provide useful information for debugging issues later. Within the XP crowd of engineers who love automated testing it's a tough call whether or not your unit tests should verify that the logs are logged.

On the one hand you do want the logs to work and say the right thing, but at the same time the only thing that can break is that the logs are written which is probably less important than most other things (ie. user-facing things).

## A Contrived Example of Mocking, Spying, and Asserting
Even if you don't end up writing assertions for your logs in your own production code, doing this exercise can be good practice for setting up a NestJs testing module, spying on a function, making assertions about it, and  