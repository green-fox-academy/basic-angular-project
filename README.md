# Angular Basic Project

## Dependencies

- Node.JS 13.2.0
- Yarn 1.22.0
- Angular CLI 9.0.3
- Latest Chrome browser

## Project setup

### AWS

You will need an S3 bucket to deploy the app somewhere.

### Jenkins

1. After the repository has been created you will need to create a new
   multibranch pipeline in Jenkins. You can either define it by your own or
   simply make a copy of the template project's pipeline.
   Do not forget to provide a readable display name.
1. You will need to add webhooks to the repository on github, so it will notify
   the jenkins if any change happens. You can get some hint in the template
   repository's settings.
1. Bucket name has to be set in the Jenkinsfile so it will know where to deploy
   the application. The environment variables can be found at the top of the
   file.
   - **AWS_CREDENTIALS**: credential id in jenkins
   - **S3_BUCKET**: the bucket name which has been created for the project
   - **S3_REGION**: the region where the bucket lives.

### CLI

The project uses yarn and you will need the following commands during the
development.

- yarn install - install the dependencies
- yarn start - start the app on a local development server
- yarn test - run all the unit tests
- yarn test:e2e - start all the e2e tests
- yarn lint - run the linter to enforce the styleguide
- yarn build - compiles the application

## GIT Workflow

### Day Start

Use `git pull` in order to have the most recent revision

### Start New Feature/Bugfix

In order to minimize later merge conflicts always open feature branch from most
recent state of `dev`.

- `git checkout dev`
- `git pull`
- `git checkout -b <branch_name>`

### Update Feature Branch

It is common to have an update on `dev` while you are working on your own
feature/bugfix in this case it is recommended to update your branch to keep it
as close as possible to the most recent version.

[`git merge` vs `git rebase`](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

#### Rebase

[`git rebase`](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

Because it rewrites commit history rebase only unpushed commits (you can rebase
already pushed commits but then you can have serious issues).

Use `git rebase <source_branch>` on your branch.

#### Merge

[`git merge`](https://www.atlassian.com/git/tutorials/using-branches/git-merge)

It is going to put dev on the top of your current branch.

Use `git merge <source_branch>` on your branch.

### Commit and Push

You can work on your feature/bugfix separately but sometimes you may need to
merge another branch into your branch (i.e. to try out your feature). In order
to have clean workflow (and pull requests) always commit only feature related
modifications (it is harder to reset files or hunks later).

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Development server

Run `ng serve` or `yarn start` for a dev server. Navigate to
`http://localhost:4200/`. The app will automatically reload if you change any of
the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the
`dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
