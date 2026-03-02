
file_path = r'c:\Users\HP\OneDrive\Documents\Xharlesxpression\shop.html'

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 65 <= i <= 80:
        print(f"{i}: {repr(line)}")
