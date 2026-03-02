
import re
import json

# Read art-shop.html
with open('art-shop.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to extract product info
# data-product-id="SHOP-001"
# data-title="Art Piece #1"
# ... src="images/shop/..."

products = []
# Match pattern spanning multiple lines
pattern = r'data-product-id="([^"]+)"\s+data-title="([^"]+)".*?src="([^"]+)"'
matches = re.finditer(pattern, content, re.DOTALL)

for m in matches:
    products.append({
        'id': m.group(1),
        'title': m.group(2),
        'price': 15000,
        'category': 'Canvas',
        'image': m.group(3)
    })

print(json.dumps(products, indent=4))
