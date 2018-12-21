#Create New Branch
git checkout -b [youBranchName]

#Save Changes
git add .
git commit -m "[message]"

#Update YOUR Master Branch
git checkout master
git pull
git checkout [youBranchName]

##OPTION TO MERGE DIRECTLY IN V.S.CODE
git merge master
<!-- resolve all conflicts directly in this file. Otherwise the conflicts will have to be resolved AFTER the pull request is made -->
git push
<!-- If you get "fatal: The current branch footer has no upstream branch." Use:--> 
git push --set-upstream origin [youBranchName]

##If not merging directly in VS.Code
git push
<!-- If you get "fatal: The current branch footer has no upstream branch." Use: --> 
git push --set-upstream origin [youBranchName]

#On GitHub
-Go to pull requests. 
-Click the green button "New Pull Request".
-Select [youBranchName] from the compare drop-down. 
-You should see a green check-box and "Able to merge. These branches can be automatically merged."
-Click "Create pull request" (green button)

