
import os

# Read existing shop.html
with open("shop.html", "r", encoding="utf-8") as f:
    content = f.read()

# Read the new shop items HTML
with open("shop_items.html", "r", encoding="utf-8") as f:
    new_items = f.read()

# Define markers
start_marker = '<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4" id="productGrid">'
end_marker = '</main>'

# Find start index
start_idx = content.find(start_marker)
if start_idx == -1:
    print("Error: Could not find productGrid start marker")
    exit(1)

# Find end index (search from start_idx)
end_idx = content.find(end_marker, start_idx)
if end_idx == -1:
    print("Error: Could not find main end marker")
    exit(1)

# Find the last </div> before </main>
grid_end_idx = content.rfind('</div>', start_idx, end_idx)

new_content = content[:start_idx + len(start_marker)] + "\n" + new_items + "\n        </div>\n    " + content[end_idx:]

with open("shop.html", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Successfully updated shop.html")
