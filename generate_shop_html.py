
import os
import urllib.parse

# List of files provided by the user
files = [
    "WhatsApp Image 2026-03-02 at 09.21.25 (3).jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.25.jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.26 (1).jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.26 (2).jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.26 (3).jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.26.jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.27.jpeg",
    "WhatsApp Image 2026-03-02 at 09.05.53.jpeg",
    "WhatsApp Image 2026-03-02 at 09.06.24 (1).jpeg",
    "WhatsApp Image 2026-03-02 at 09.06.24.jpeg",
    "WhatsApp Image 2026-03-02 at 09.06.25 (1).jpeg",
    "WhatsApp Image 2026-03-02 at 09.06.25.jpeg",
    "WhatsApp Image 2026-03-02 at 09.06.26.jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.24 (1).jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.24 (2).jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.24 (3).jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.24.jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.25 (1).jpeg",
    "WhatsApp Image 2026-03-02 at 09.21.25 (2).jpeg"
]

base_path = "images/shop/"

html_output = ""

for i, filename in enumerate(files, 1):
    product_id = f"SHOP-{i:03d}"
    title = f"Art Piece #{i}"
    # URL encode filename for src
    src = base_path + urllib.parse.quote(filename)
    
    card = f"""
            <!-- Product Card {i} -->
            <div class="col">
                <div class="card h-100 shadow-sm product-card"
                     data-product-id="{product_id}"
                     data-title="{title}"
                     data-category="canvas">
                    <div style="height: 300px; overflow: hidden;">
                        <img class="card-img-top product-image w-100 h-100"
                             src="{src}"
                             alt="{title}"
                             loading="lazy"
                             style="object-fit: cover;"
                             onerror="this.src='css/images/bgp.jpeg';" />
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text flex-grow-1">
                            <span class="text-muted text-decoration-line-through me-2">₦35,000</span>
                            <span class="small">Premium art print.</span>
                        </p>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <span class="price fs-5 fw-bold" data-price="15000">₦15,000</span>
                        </div>
                        <select class="form-select form-select-sm variant-select mt-2" aria-label="Variant">
                            <option value="std" data-variant-id="std" data-price="15000" selected>Standard (Logo) - ₦15,000</option>
                            <option value="acr" data-variant-id="acr" data-price="25000">Acrylic - ₦25,000</option>
                            <option value="frm" data-variant-id="frm" data-price="99000">Framed - ₦99,000</option>
                        </select>
                        <button class="btn btn-primary w-100 mt-3 add-to-cart-btn">Add to Cart</button>
                        <button class="btn btn-outline-secondary w-100 mt-2 buy-now-btn">Buy Now</button>
                    </div>
                </div>
            </div>
"""
    html_output += card

with open("shop_items.html", "w", encoding="utf-8") as f:
    f.write(html_output)

print("Done writing to shop_items.html")
