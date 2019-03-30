# Angular Basic Project

## Dependencies

- Node.JS 10.15.0
- NPM 6.4.1
- Angular CLI 7.2.1

## Steps

- Copy this repository
  - in order to initialise project team repo follow the project naming convention: https://docs.google.com/spreadsheets/d/1vdqn4i0GYWNDHL96jrNrXOZJJ6lQsN-_m3aFHGjOmng
- Use the following commands:
  - npm i - install the dependencies
  - npm start - start your app
  - npm test - start your test
  - npm run lint - start the linter

## GIT Workflow

### Day Start

Use `git pull` in order to have the most recent

### Start New Feature/Bugfix

In order to minimise later merge conflicts always open feature branch from most recent state of `dev`.

- `git checkout dev`
- `git pull`
- `git checkout -b <branch_name>`

### Update Feature Branch

This is usual to have an update on `dev` while you are working on your feature/bugfix and this is recommended to update your branch to keep consistency of your code. You can do this in 2 ways.

[`git merge` vs `git rebase`](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

#### Rebase

[`git rebase`](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

Because it rewrites commit history rebase only unpushed commits (you can rebase already pushed commits but then you can have serious issues).

Use `git rebase dev` on your branch.

#### Merge

[`git merge`](https://www.atlassian.com/git/tutorials/using-branches/git-merge)

It is going to put dev on the top of your current branch.

Use `git merge dev` on your branch.

### Commit and Push

You can work on your feature/bugfix separately but sometimes you may need to merge another branch into your branch (i.e. to try out your feature). In order to have clean workflow (and pull requests) always commit only feature related modifications. This is harder to reset files or hunks later.

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
