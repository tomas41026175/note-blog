# Git Remotes - learn git branching

## git clone

從 remote clone 一份副本

## git remote branch ( 建立遠端分支 )

當移動至 remote branch 的時候，會直接進入 HEAD 分離的狀態。
git 這樣做的原因是告訴你不能夠直接影響這些 branch。你必須要在其它的 branch 工作

### 命名格式

```
<remote 名稱>/<branch 名稱>
```

```
origin/main // remote = origin branch = main
```

### 切換至 remote branch

```
git checkout origin/main
```

## git fetch

**`git fetch`不會將 local 的 main branch 更新至最新的狀態。
所以 `git fetch` 實際上只有下載 local 沒有的資料**

1. 下載 remote 有，但 local 沒有的 commit
2. 更新 remote branch 所指向的位置

`git fetch` 通常是透過網路來跟 remote 溝通（透過一個 protocol （協定），例如 http:// 或者是 git://）。

## git pull

實際上等於 :
`git fetch` + `git merge origin/main`

### 參數

**使用這些選項之前，最好理解它們的行為以及它們如何影響你的存儲庫的歷史。**

--rebase [false|true|merges|interactive]: 使用 --rebase 選項，git pull 會通過 rebase 而不是合併來整合遠程分支的變更。這可以保持一個乾淨的線性歷史。你可以選擇不同的 rebase 模式，例如 interactive 來手動選擇哪些提交要 rebase。

--no-rebase: 覆蓋默認或配置的 rebase 行為，強制使用合併。

--ff: 當可能的時候，只進行快進合併（fast-forward merge）。

--no-ff: 即使合併可以快進，也要創建一個合併提交。

--ff-only: 拒絕所有無法快進的合併。

--edit 或 -e: 在合併時打開一個編輯器，讓你編輯自動生成的合併提交信息。

--no-edit: 在合併時不打開編輯器，使用自動生成的提交信息。

--quiet 或 -q: 在拉取過程中抑制所有輸出。

--verbose 或 -v: 在拉取過程中提供詳細的輸出信息。

--commit: 在拉取後進行合併時，總是創建一個合併提交，即使合併可以快進。

--no-commit: 在拉取後進行合併時，不要自動創建合併提交。

--squash: 在合併時將變更壓縮成一個提交，這樣不會保留拉取的提交的歷史。

--no-squash: 與 --squash 相反，保留所有拉取的提交的歷史。

--strategy=<strategy>: 在合併時使用特定的合併策略。

--strategy-option 或 -X: 在合併時傳遞特定的策略選項。

--depth <depth>: 深度指定拉取時的深度，這是用於淺克隆的。

## co-work

```
git clone
git fakeTeamwork 2 //推兩個 commit 到 remote
git commit
git pull
```

## git push

將目前的 commit 進度推送至遠端

```
git push
```

## Diverged history

情境 :
當 local 的版本落後於 remote 的時候，push 會失敗。

方案 :
先透過
`git fetch`獲取資料，並更新你的本地存儲庫的遠程分支指針（例如 origin/main）到最新狀態，但不會影響你的本地分支。
再透過
`git rebase origin/main`合併 commit
這邊會將 local 的變更移動至 remote 的頂端，建立一個乾淨的 history ， 如果遇到衝突 git 會暫停 rebase 並允許 user 解決衝突，完成後透過 git rebase --continue 繼續 rebase 過程。
最後
`git push` 將目前的資料推送至 remote

方案 2 :
如果不想改變 local 的 commit history 可以使用 `git merge`

```
git fetch origin
git merge origin/main
```

**總結 :**
選擇 rebase 還是 merge 取決於你的團隊工作流程和對歷史的偏好。rebase 會創建一個更乾淨的歷史，但 merge 會保留原始的分支結構和提交歷史。

### 表示一個 fetch 以及一個 rebase。

```
 git pull --rebase; git push
```

## 擷取不同的 commit push 到 remote

```
git cherry C2 C3 C4 C5 C6 C7
git branch -f main C7'
git checkout main
git push
```

## merge & rebase 的差異

優點：

rebase 使得你的 commit tree 看起來更為簡潔，因為任何的 commit 都在一條直線上面。

缺點：

rebase 修改了 commit tree 的歷史紀錄。

## remote tracking branch

用途 :

1. 參照遠程分支的狀態： 它們讓你知道本地分支與遠程分支的同步狀態，包括任何需要推送（push）或拉取（pull）的提交。

2. 拉取遠程變更： 你可以使用 git pull 從遠程追蹤分支拉取最新的變更到本地分支，這通常會自動合併這些變更到你的本地分支。

3. 推送本地變更： 當你在本地分支上進行了提交後，你可以推送這些變更到遠程分支，以便與其他人共享你的工作。

4. 保持分支同步： 遠程追蹤分支讓你能夠保持本地分支與遠程分支的同步，這對於協作開發和分佈式版本控制來說非常重要。

-   在使用 pull 的時候，下載 commit 到 o/main，並且 merge 這些 commit 到 main branch，這就表示這個 merge 的目標是決定於這個對應關係。

-   在使用 push 的時候，在 main branch 上面的 commit 被 push 到 remote 上面的 main branch （它在 local 被表示成 o/main），這就表示 push 的目標是決定於 main 以及 o/main 之間的對應關係。

### 自訂用於追蹤 remote main 的分支 ( Remote tracking )

```
git checkout -b totallyNotMain o/main
```

在 o/main 下建立一個名為 totallyNotMain 的分支，並切換過去。

```
git checkout //切換分支
```

```
-b 建立一個新的分支
```

```
totallyNotMain //新分支的名子
```

```
o/main //建立分支的位置
```

### 使用 `branch -u` 建立分支

```
git branch -u o/main foo 
//表示將 foo 設定用於追蹤 o/main 
```
