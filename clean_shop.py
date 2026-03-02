
file_path = r'c:\Users\HP\OneDrive\Documents\Xharlesxpression\shop.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace non-breaking spaces with regular spaces
new_content = content.replace('\xa0', ' ')

if content != new_content:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replaced non-breaking spaces.")
else:
    print("No non-breaking spaces found.")
