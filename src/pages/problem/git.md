# 
## git repo 大小寫問題
- git config core.ignorecase false

## 保持 repo 文件版本 不使用 ignore 排除 local 文件
git update-index --no-skip-worktree .husky/pre-commit