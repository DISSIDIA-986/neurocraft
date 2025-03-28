#!/bin/bash

# 保存当前分支名称以便后续恢复
CURRENT_BRANCH=$(git branch --show-current)

echo "Current branch: $CURRENT_BRANCH"
echo "Rebuilding gh-pages branch..."

# 确保当前有干净的工作区
if [[ -n $(git status -s) ]]; then
  echo "Error: Working directory not clean. Please commit or stash changes first."
  exit 1
fi

# 确保 main 分支是最新的
git checkout main
git pull origin main

# 检查是否存在远程 gh-pages 分支，如果存在则删除
if git ls-remote --heads origin gh-pages | grep gh-pages > /dev/null; then
    echo "Removing existing gh-pages branch..."
    git push origin --delete gh-pages
fi

# 检查是否存在本地 gh-pages 分支，如果存在则删除
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "Removing local gh-pages branch..."
    git branch -D gh-pages
fi

# 从 main 创建新的 gh-pages 分支
echo "Creating new gh-pages branch from main..."
git checkout -b gh-pages

# 确保所有依赖已安装
echo "Installing dependencies..."
npm install

# 仅在 gh-pages 分支上修改 package.json，添加 homepage 配置
echo "Updating package.json with homepage configuration (ONLY in gh-pages branch)..."
sed -i.bak 's/"name": "neurocraft"/"homepage": "https:\/\/dissidia-986.github.io\/neurocraft",\n  "name": "neurocraft"/' package.json
rm -f package.json.bak

# 修改 App.js 使用 HashRouter (仅在 gh-pages 分支)
echo "Updating App.js to use HashRouter (ONLY in gh-pages branch)..."
sed -i.bak 's/BrowserRouter as Router/HashRouter as Router/g' src/App.js
sed -i.bak 's/<Router>/<HashRouter>/g' src/App.js
sed -i.bak 's/<\/Router>/<\/HashRouter>/g' src/App.js
rm -f src/App.js.bak

# 添加 import HashRouter
sed -i.bak 's/import { BrowserRouter as Router, Routes, Route } from/import { HashRouter, Routes, Route } from/g' src/App.js
rm -f src/App.js.bak

# 将修改提交到 gh-pages 分支
echo "Committing changes to gh-pages branch..."
git add package.json src/App.js
git commit -m "Configure for GitHub Pages deployment (homepage and HashRouter)"

# 构建应用
echo "Building the application..."
npm run build

# 推送 gh-pages 分支到远程仓库
echo "Pushing gh-pages branch to remote..."
git push -u origin gh-pages

# 部署到 GitHub Pages (这一步其实不需要，因为我们已经手动推送了 gh-pages 分支)
# 但如果你使用 gh-pages 包来部署，可以保留这一步
echo "Deploying to GitHub Pages..."
npm run deploy

# 恢复到之前的分支
echo "Restoring to original branch: $CURRENT_BRANCH"
git checkout $CURRENT_BRANCH

echo "gh-pages branch rebuild and deployment completed successfully."
echo "Your site should be available at: https://dissidia-986.github.io/neurocraft/"
echo "Note: It may take a few minutes for changes to propagate."