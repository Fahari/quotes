# Quotes

#### quotes is a web-application that simply hosts quotes.

 11/January/2019

### Author  **Kironji Kevin**

## Description

 Quotes is a web-application that is meant to solely host quotes. By default, it's populated by some variations of quotes that a visitor can view. A visitor has the ability to up-vote(like) a quote and to down-vote(dislike) a quote. Quotes goes further to add a functionality that allows a visitor to add his/her desired quotes and vote on them.
 A visitor also has the ability to delete any quote he/she has added and feels shouldn't belong.
 Quotes is built entirely in Angular.js and TypeScript.

## Prerequisites

1.  You need to have git installed.You can install git using the following command in your terminal $ sudo apt install git-all -y
2.  Download and install Node(a server-side runtime environment for javascript) at <https://nodejs.org/en/download/package-manager/> (Links to an external site.)
3.  Download and install Angular(a platform that makes it easy to build applications) using the following command >$ npm install -g @angular/cli
4.  Download and install watchman(an application that watches and records files as they change.) using the following commands
    1. $ cd ~
    2. $ git clone <https://github.com/facebook/watchman.git>
    3. $ cd watchman/
    4. $ git checkout v4.7.0
    5. $ sudo apt-get install -y autoconf automake build-essential python-dev
    6. $ ./autogen.sh
    7. $ ./configure
    8. $ make
    9. $ sudo make install
    10. $ watchman --version
    11. $ echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches  && echo 999999 | sudo tee -a  /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee  -a /proc/sys/fs/inotify/max_user_instances && watchman  shutdown-server
5.  Install Typescript(Superset of JavaScript) and its transpiler with the following command $ npm install -g typescript && $ tsc -v -y

## Setup

1.  Use this command $ git clone <https://github.com/Fahari/quotes> This will clone the projects repository into a local folder on your device.
2.  Open the files with an editor( preferably Atom. )
3.  Study the code. learn from it. Improve on it.

## Known Bugs

   As of the completion of this project 11/January/2019, NO bugs were present.

## Technologies Used

1.  Angular
2.  TypeScript
3.  nodejs
4.  watchman
5.  Atom text editor

## Site

You can access the live project at **[Quotes](https://fahari.github.io/quotes/)**

## Support and contact details

Have a question? Want to report a bug? feeling philanthropic? want to buy some beans? drop a suggestion or comment at karonjekevin67@gmail.com}

### License

This project is under the **[MIT](https://github.com/Fahari/quotes/blob/master/LICENSE)** license. Feel free to study and use the code.

Copyright (c) 2019 **Kironji Kevin**
