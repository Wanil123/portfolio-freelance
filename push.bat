@echo off
cd /d "c:\Users\samed\Downloads\portfolio-freelance"
echo === Suppression node_modules du tracking git ===
git rm -r --cached node_modules
echo === Ajout des fichiers modifies ===
git add .gitignore index.html netlify.toml src/
echo === Commit ===
git commit -m "refonte complete: hero, process, FAQ, contact form, mobile responsive, traductions FR/EN"
echo === Push ===
git push origin main
echo === Termine! ===
pause
