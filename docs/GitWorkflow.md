`Part of your final submission is going to be submitting documentation around your Git Workflow`

# Overview of Team `git` Workflow

Our primary use of `git` revolved around what is commonly termed the 'standard GitHub workflow'.  It can be summarized in the following steps:

1. Create a repository with a `master` branch that is protected and considered to be deployable at all times.  In other words this `master` branch is the "current" final word in what the app/product consists of in a final form at any particular point in time.
2. Create a `dev` branch that is used as a staging branch for all other "feature" and "fix" branches. `dev` is the only branch that is ever merged into the `master` branch, and it is only merged after close review and testing.
3. "Feature" and "fix" branches are created regularly by team members to isolate the particular issues or concerns each member may be working on.  Once an issue is closed, the branch attached to that issue is merged into the `dev` branch.
4. Once all of the issues associated with a milestone, and/or project (as defined in GitHub), that working "milestone version" of the `dev` branch is merged into the `master` and the process of refinement begins again.
