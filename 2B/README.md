**Git and GitHub**

*Activity: Initiating git repo + making first commits*

Students should create an index.html file via the command line: 
```bash
$ touch index.html
```

In index.html, students should have something that looks like:
```html
<html>
  <head>
  </head>
  <body>
    <div></div>
  </body>
</html>
```
Students should remember to SAVE the file. 

They should then:
```bash
$ git init
$ git add .
$ git commit -m 'First Commit; index.html'
```


*Activity: Branching and Merging*

To create a new branch: 
```bash
$ git checkout -b new-branch
```

In index.html IN THE NEW BRANCH, add the following to the \<head> element:
```html
<style>
	div {
		height: 300px; 
		background: #5e5c7a;
	}
</style>
```

Switch back to master: 
```bash
$ git checkout master
```

Merge changes from new-branch: 
```bash
$ git merge new-branch
```

*Activity: Pushing changes to GitHub*

Add remote url and push changes: 
```bash
$ git remote add origin [origin_url]
$ git push origin master

```