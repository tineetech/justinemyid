@echo off
echo Memulai proses git push ..
echo ==========================
SET /P commit_message="Masukkan pesan commit: "
git add .
git commit -m "%commit_message%"
git push origin main
echo.
echo ==========================
echo Proses git push selesai!