Set-Location "c:\Users\samed\Downloads\portfolio-freelance"
Write-Host "=== Suppression node_modules du tracking git ===" -ForegroundColor Yellow
git rm -r --cached node_modules
Write-Host "=== Ajout des fichiers modifies ===" -ForegroundColor Yellow
git add .gitignore index.html netlify.toml "src/"
Write-Host "=== Commit ===" -ForegroundColor Yellow
git commit -m "refonte complete: hero, process, FAQ, contact form, mobile responsive, traductions FR/EN"
Write-Host "=== Push ===" -ForegroundColor Yellow
git push origin main
Write-Host "=== Termine! ===" -ForegroundColor Green
Read-Host "Appuie sur Entree pour fermer"
