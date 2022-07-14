# Angular 14 / Webstorm CPU usage reproduction test case

Issue: https://youtrack.jetbrains.com/issue/WEB-56567/High-CPU-usage-for-open-TypeScript-files?s=High-CPU-usage-for-open-TypeScript-files

- Open `src/app/app.component.ts`
- Observe Activity Monitor, specifically:  `Plugin JavaScript and TypeScript: lang.javascript.psi.types (in com.intellij)`
- Comment out line 18
- Observe CPU usage drops back down

This app was built with Angular CLI v14 `ng new`
