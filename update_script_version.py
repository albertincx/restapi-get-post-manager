# update_with_timestamp.py
import time
import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

ts = str(int(time.time() * 1000))  # например: 1720000000123

# Обновляем и script.js, и style.css
content = re.sub(
    r'(src\s*=\s*["\']script\.js\?)v=[^"\']*',
    rf'\1v={ts}',
    content
)
content = re.sub(
    r'(href\s*=\s*["\']style\.css\?)v=[^"\']*',
    rf'\1v={ts}',
    content
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print(f"✅ Обновлено с timestamp: v={ts}")
