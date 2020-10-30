# InterviewApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## First time 
Run `npm install` before launching this app

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Summary of the assignment

Design this app as mobile friendly with latest Angular and Angular Material.

This app's architecture designed as a Base APP, which the base folder is designed to be portable to other anglar apps, with minimum changes.

The Base Folder contains reuseable components, services, interceptors, guards, modals, validations and login and singup screens.

The project specific modules are created outside Bade Folder, which located under src/app:

1. Home Module: The landing page which give a brief summary, and navidations to other screens
2. Task Module: List of tasks
3. Profile Module: allow user to update personal profile

## What I have compelted

1. Login screen, with Email and Password form submit. User needs to fill out both fields to activate 'Login' button. If first time user, can navigate to sing up page by clicking on 'Click here to sign up' page. Once user logged in, will redirect to home page.

2. Sign Up screen, with email, password, name, and age form submit.  Users need to fill out all fields to activate 'Sign Up' button. User can navigate back to Log in Page. Once sign up, will redirect to home page.

3. Left Top corner has a three bar icon to open naviagtion slider

4. Click on 'Log Out' Menu item, will log on user

5. Click on 'Delete User' menul item, will delete user after confirmation. Then navigate to login screen.

6. At Home page, there is link to task screen. Also can click on the 'Task' menu icon.

7. At Task page, user can 
    Click on 'Add Task' button to add a new Task
    View All / Completed task
    Filter loaded task
    Update task by click on the edit icon to swap completed status to true and false
    Delete Task By click on the delete icon afte confirmation

## Given more time, I will do 

1. Complete the User Profile Page
2. Convert task table to be a Base-Table with dyanmic cell types, text, icon and so on
3. Improve UI layouts
4. Write Jasmine test cases and automation testing


