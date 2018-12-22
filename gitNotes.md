#Create New Branch
git checkout -b [yourBranchName]

#Save Changes
git add .
git commit -m "[message]"

#Update YOUR Master Branch
git checkout master
git pull
git checkout [yourBranchName]

##OPTION TO MERGE DIRECTLY IN V.S.CODE
git merge master
<!-- resolve all conflicts directly in this file. Otherwise the conflicts will have to be resolved AFTER the pull request is made -->
git push
<!-- If you get "fatal: The current branch footer has no upstream branch." Use:--> 
git push --set-upstream origin [yourBranchName]

##If not merging directly in VS.Code
git push
<!-- If you get "fatal: The current branch footer has no upstream branch." Use: --> 
git push --set-upstream origin [yourBranchName]

#On GitHub
-Go to pull requests. 
-Click the green button "New Pull Request".
-Select [yourBranchName] from the compare drop-down. 
-You should see a green check-box and "Able to merge. These branches can be automatically merged."
-Click "Create pull request" (green button)

#Deleting your local branch (Once merged)
git branch -D [yourBranchName]

#Deleting the branch on git (Once merged)
git push origin --delete [yourBranchName]
<!-- alternatively you can delete your branch by clicking the trash can by your branch after clicking the branches option from the repository on git-hub. -->