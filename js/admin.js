
document.addEventListener('DOMContentLoaded', function() {
    
    // Auth Check
    const loginOverlay = document.getElementById('login-overlay');
    const loginForm = document.getElementById('loginForm');
    const wrapper = document.getElementById('wrapper');
    const mainContent = document.getElementById('main-content');
    const sidebarLinks = document.querySelectorAll('.list-group-item-action');

    // Real Data Containers
    // Donations are empty as there is no backend history yet
    const mockDonations = [];

    // Products extracted from art-shop.html
    const existingProducts = [
        {
            "id": "SHOP-001",
            "title": "Art Piece #1",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.25%20%283%29.jpeg"
        },
        {
            "id": "SHOP-002",
            "title": "Art Piece #2",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.25.jpeg"
        },
        {
            "id": "SHOP-003",
            "title": "Art Piece #3",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.26%20%281%29.jpeg"
        },
        {
            "id": "SHOP-004",
            "title": "Art Piece #4",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.26%20%282%29.jpeg"
        },
        {
            "id": "SHOP-005",
            "title": "Art Piece #5",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.26%20%283%29.jpeg"
        },
        {
            "id": "SHOP-006",
            "title": "Art Piece #6",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.26.jpeg"
        },
        {
            "id": "SHOP-007",
            "title": "Art Piece #7",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.27.jpeg"
        },
        {
            "id": "SHOP-008",
            "title": "Art Piece #8",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.05.53.jpeg"
        },
        {
            "id": "SHOP-009",
            "title": "Art Piece #9",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.06.24%20%281%29.jpeg"
        },
        {
            "id": "SHOP-010",
            "title": "Art Piece #10",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.06.24.jpeg"
        },
        {
            "id": "SHOP-011",
            "title": "Art Piece #11",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.06.25%20%281%29.jpeg"
        },
        {
            "id": "SHOP-012",
            "title": "Art Piece #12",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.06.25.jpeg"
        },
        {
            "id": "SHOP-013",
            "title": "Art Piece #13",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.06.26.jpeg"
        },
        {
            "id": "SHOP-014",
            "title": "Art Piece #14",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.24%20%281%29.jpeg"
        },
        {
            "id": "SHOP-015",
            "title": "Art Piece #15",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.24%20%282%29.jpeg"
        },
        {
            "id": "SHOP-016",
            "title": "Art Piece #16",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.24%20%283%29.jpeg"
        },
        {
            "id": "SHOP-017",
            "title": "Art Piece #17",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.24.jpeg"
        },
        {
            "id": "SHOP-018",
            "title": "Art Piece #18",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.25%20%281%29.jpeg"
        },
        {
            "id": "SHOP-019",
            "title": "Art Piece #19",
            "price": 15000,
            "category": "Canvas",
            "image": "images/shop/WhatsApp%20Image%202026-03-02%20at%2009.21.25%20%282%29.jpeg"
        }
    ];

    // Load Local Products
    let localProducts = JSON.parse(localStorage.getItem('admin_products')) || [];

    // Login Handler
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        loginOverlay.style.display = 'none';
        loadView('dashboard');
    } else {
        wrapper.style.display = 'none';
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const u = document.getElementById('username').value;
        const p = document.getElementById('password').value;
        
        // Simple mock auth
        if (u === 'admin' && p === 'admin123') {
            localStorage.setItem('adminLoggedIn', 'true');
            loginOverlay.style.display = 'none';
            wrapper.style.display = 'flex';
            loadView('dashboard');
        } else {
            alert('Invalid credentials! (Try: admin / admin123)');
        }
    });

    // Navigation Handler
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            if (target) {
                sidebarLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                loadView(target);
            } else if (this.classList.contains('text-danger')) {
                // Logout
                localStorage.removeItem('adminLoggedIn');
                location.reload();
            }
        });
    });

    // View Loader
    function loadView(viewName) {
        mainContent.innerHTML = '';
        switch(viewName) {
            case 'dashboard':
                renderDashboard();
                break;
            case 'products':
                renderProducts();
                break;
            case 'donations':
                renderDonations();
                break;
            case 'users':
                renderUsers();
                break;
            case 'settings':
                renderSettings();
                break;
        }
    }

    // Render Functions
    function renderDashboard() {
        mainContent.innerHTML = `
            <h2 class="mb-4">Dashboard Overview</h2>
            <div class="row g-4">
                <div class="col-md-3">
                    <div class="card card-dashboard p-3 bg-primary text-white">
                        <h3>₦${(mockDonations.reduce((acc, curr) => acc + curr.amount, 0)).toLocaleString()}</h3>
                        <p>Total Donations</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-dashboard p-3 bg-success text-white">
                        <h3>${existingProducts.length + localProducts.length}</h3>
                        <p>Total Products</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-dashboard p-3 bg-warning text-dark">
                        <h3>0</h3>
                        <p>Pending Orders</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-dashboard p-3 bg-info text-white">
                        <h3>0</h3>
                        <p>Total Users</p>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5">
                <div class="col-md-8">
                    <div class="card shadow-sm">
                        <div class="card-header bg-white fw-bold">Recent Activity</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-muted text-center py-4">No recent activity found.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    function renderProducts() {
        const allProducts = [...existingProducts, ...localProducts];
        
        let html = `
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Product Management</h2>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
                    <i class="fas fa-plus"></i> Add New Product
                </button>
            </div>
            
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        allProducts.forEach((p, index) => {
            html += `
                <tr>
                    <td>${p.id}</td>
                    <td>${p.title}</td>
                    <td><span class="badge bg-secondary">${p.category}</span></td>
                    <td>₦${p.price.toLocaleString()}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary me-1"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct('${p.id}')"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            `;
        });

        html += `
                    </tbody>
                </table>
            </div>
            
            <div class="mt-4 p-3 bg-light rounded border">
                <h5><i class="fas fa-code text-primary"></i> God Mode: Export HTML</h5>
                <p class="small text-muted">Generate HTML for newly added products to copy-paste into shop.html</p>
                <button class="btn btn-dark btn-sm" onclick="generateHTML()">Generate Code</button>
                <textarea id="generatedCode" class="form-control mt-2 d-none" rows="5" readonly></textarea>
            </div>
        `;
        
        mainContent.innerHTML = html;
    }

    function renderDonations() {
        let html = `
            <h2 class="mb-4">Donations History</h2>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead><tr><th>Date</th><th>Donor</th><th>Amount</th><th>Method</th><th>Status</th></tr></thead>
                    <tbody>
        `;
        
        if (mockDonations.length === 0) {
            html += `<tr><td colspan="5" class="text-center text-muted py-3">No donation records found.</td></tr>`;
        } else {
            mockDonations.forEach(d => {
                html += `<tr>
                    <td>${d.date}</td>
                    <td>${d.name}</td>
                    <td>₦${d.amount.toLocaleString()}</td>
                    <td>${d.method}</td>
                    <td><span class="badge bg-${d.status === 'Success' ? 'success' : 'warning'}">${d.status}</span></td>
                </tr>`;
            });
        }
        
        html += `</tbody></table></div>`;
        mainContent.innerHTML = html;
    }

    function renderUsers() {
        mainContent.innerHTML = `<h2>User Management</h2><p class="text-muted">No registered users found in the system.</p>`;
    }

    function renderSettings() {
        mainContent.innerHTML = `
            <h2>System Settings</h2>
            <div class="card p-4 mt-3">
                <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="maintenanceMode">
                    <label class="form-check-label" for="maintenanceMode">Maintenance Mode</label>
                </div>
                <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="acceptDonations" checked>
                    <label class="form-check-label" for="acceptDonations">Accept Donations</label>
                </div>
                <button class="btn btn-primary" onclick="alert('Settings Saved!')">Save Changes</button>
            </div>
        `;
    }

    // Add Product Logic
    document.getElementById('addProductForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        
        // Close modal first
        const modalEl = document.getElementById('addProductModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();

        const title = document.getElementById('prodTitle').value;
        const category = document.getElementById('prodCategory').value;
        const price = parseInt(document.getElementById('prodPrice').value);
        const image = document.getElementById('prodImage').value;
        
        const newProduct = {
            id: `NEW-${Date.now()}`,
            title,
            category,
            price,
            image
        };

        localProducts.push(newProduct);
        localStorage.setItem('admin_products', JSON.stringify(localProducts));
        
        // Reset form
        this.reset();
        
        // Refresh view
        renderProducts();
        alert('Product Added Successfully!');
    });

    // Global functions for inline onclicks
    window.deleteProduct = function(id) {
        if (confirm('Are you sure you want to delete this product?')) {
            if (id.startsWith('SHOP-')) {
                alert('Cannot delete core products in this demo mode (protected).');
                return;
            }
            localProducts = localProducts.filter(p => p.id !== id);
            localStorage.setItem('admin_products', JSON.stringify(localProducts));
            renderProducts();
        }
    };

    window.generateHTML = function() {
        const area = document.getElementById('generatedCode');
        let code = '';
        localProducts.forEach(p => {
            // Assume standard pricing structure if only one price is given
            // If user enters 15000, we use that. If not, we might need logic.
            // For now, hardcode the variants as per previous instructions.
            
            code += `
            <!-- ${p.title} -->
            <div class="col">
                <div class="card h-100 shadow-sm product-card"
                     data-product-id="${p.id}"
                     data-title="${p.title}"
                     data-category="${p.category}">
                    <div style="height: 300px; overflow: hidden;">
                        <img class="card-img-top product-image w-100 h-100"
                             src="${p.image}"
                             alt="${p.title}"
                             loading="lazy"
                             style="object-fit: cover;"
                             onerror="this.src='css/images/bgp.jpeg';" />
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text flex-grow-1">
                            <span class="text-muted text-decoration-line-through me-2">₦35,000</span>
                            <span class="small">Premium art print.</span>
                        </p>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <span class="price fs-5 fw-bold" data-price="${p.price}">₦${p.price.toLocaleString()}</span>
                        </div>
                        <select class="form-select form-select-sm variant-select mt-2" aria-label="Variant">
                            <option value="std" data-variant-id="std" data-price="${p.price}" selected>Standard (Logo) - ₦${p.price.toLocaleString()}</option>
                            <option value="acr" data-variant-id="acr" data-price="25000">Acrylic - ₦25,000</option>
                            <option value="frm" data-variant-id="frm" data-price="99000">Framed - ₦99,000</option>
                        </select>
                        <button class="btn btn-primary w-100 mt-3 add-to-cart-btn">Add to Cart</button>
                        <button class="btn btn-outline-secondary w-100 mt-2 buy-now-btn">Buy Now</button>
                    </div>
                </div>
            </div>\n`;
        });
        
        if (!code) {
            code = "No new products to generate HTML for. Add a product first!";
        } else {
            alert('HTML copied to clipboard!');
        }
        
        area.value = code;
        area.classList.remove('d-none');
        area.select();
        document.execCommand('copy');
    };

});
