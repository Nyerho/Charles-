import re

file_path = r'c:\Users\HP\OneDrive\Documents\Xharlesxpression\shop.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# New header content
new_header = """<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    <div class="flex items-center justify-between py-4">

      <a href="index.html" class="text-slate-700 font-medium px-3 py-1 transition-all duration-300 hover:text-[color:var(--accent)] hover:scale-110 hover:underline hover:underline-offset-4 flex items-center gap-2 text-decoration-none">
        <div class="w-10 h-10 rounded-md bg-slate-800 text-white flex items-center justify-center font-bold">
          X
        </div>
        <span class="font-semibold text-slate-800">Xharlez Xpressions</span>
      </a>

      <div class="hidden md:flex items-center gap-6 text-slate-700 font-medium">

        <a href="index.html" class="hover:text-black transition text-decoration-none">Home</a>

        <div class="relative group">
          <button class="inline-flex items-center gap-2 hover:text-black transition bg-transparent border-0 p-0 text-slate-700 font-medium">
            Services
            <i class="fa-solid fa-chevron-down text-xs"></i>
          </button>

          <ul class="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-lg list-none p-0 border border-slate-100">
            <li><a href="creative.html" class="block px-4 py-2 hover:bg-slate-100 text-decoration-none text-slate-700">Xpressions Creative</a></li>
            <li><a href="lifestyle.html" class="block px-4 py-2 hover:bg-slate-100 text-decoration-none text-slate-700">Xpressions Lifestyle</a></li>
            <li><a href="agro.html" class="block px-4 py-2 hover:bg-slate-100 text-decoration-none text-slate-700">Xpressions Agro</a></li>
            <li><a href="logistics.html" class="block px-4 py-2 hover:bg-slate-100 text-decoration-none text-slate-700">Xpressions Logistics</a></li>
            <li><a href="xpressionsnation.html" class="block px-4 py-2 hover:bg-slate-100 text-decoration-none text-slate-700">XpressionsNation (NGO)</a></li>
            <li><a href="shop.html" class="block px-4 py-2 hover:bg-slate-100 text-decoration-none text-slate-700">Xpressions Shop</a></li>          
          </ul>
        </div>

        <a href="services.html" class="hover:text-black transition text-decoration-none">All services</a>
        <a href="about.html" class="text-[color:var(--accent)] transition text-decoration-none">About</a>
        
        <!-- Cart Button (Desktop) -->
        <button class="relative px-4 py-2 border border-[color:var(--accent)] text-[color:var(--accent)] rounded hover:bg-[color:var(--accent)] hover:text-white transition ml-2 bg-transparent" data-bs-toggle="modal" data-bs-target="#cartModal">
            <i class="fa-solid fa-cart-shopping mr-2"></i>Cart
            <span id="cartCount" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white">0</span>
        </button>
      </div>

      <div class="flex items-center gap-4 md:hidden">
        <!-- Cart Button (Mobile) -->
        <button class="relative p-2 text-[color:var(--accent)] bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#cartModal">
            <i class="fa-solid fa-cart-shopping text-xl"></i>
            <span class="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">0</span>
        </button>
        <button id="mobileMenuBtn" class="p-2 rounded-md bg-white/60 backdrop-blur-xl shadow border border-slate-200">
            <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="md:hidden">
      <div class="flex flex-col space-y-2 px-4 py-4 text-slate-800">
        <a href="index.html" class="text-decoration-none text-slate-800">Home</a>
        <details class="group">
          <summary class="flex items-center justify-between font-medium text-slate-700">
            Services
            <i class="fa-solid fa-chevron-down text-xs transition-transform duration-300"></i>
          </summary>
          <div class="mt-2 pl-4 space-y-2 border-l-2 border-slate-100">
            <a href="creative.html" class="text-decoration-none text-slate-600 hover:text-[color:var(--accent)] block">Xpressions Creative</a>
            <a href="lifestyle.html" class="text-decoration-none text-slate-600 hover:text-[color:var(--accent)] block">Xpressions Lifestyle</a>
            <a href="agro.html" class="text-decoration-none text-slate-600 hover:text-[color:var(--accent)] block">Xpressions Agro</a>
            <a href="logistics.html" class="text-decoration-none text-slate-600 hover:text-[color:var(--accent)] block">Xpressions Logistics</a>
            <a href="xpressionsnation.html" class="text-decoration-none text-slate-600 hover:text-[color:var(--accent)] block">XpressionsNation (NGO)</a>
            <a href="shop.html" class="text-decoration-none text-slate-600 hover:text-[color:var(--accent)] block">Xpressions Shop</a>
          </div>
        </details>
        <a href="services.html" class="text-decoration-none text-slate-800">All services</a>
        <a href="about.html" class="text-[color:var(--accent)] text-decoration-none">About</a>
      </div>
    </div>

  </nav>
</header>"""

# Regex to match the nav block, handling whitespace (including NBSP \xa0)
# We look for <!-- Navbar --> then <nav ...> ... </nav>
pattern = re.compile(r'<!-- Navbar -->\s*<nav[^>]*>.*?</nav>', re.DOTALL)

if pattern.search(content):
    new_content = pattern.sub(new_header, content)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully replaced navbar.")
else:
    print("Could not find navbar pattern.")
    # Debug: print a snippet of where it should be
    start_idx = content.find('<!-- Navbar -->')
    if start_idx != -1:
        print("Found '<!-- Navbar -->', following content:")
        print(repr(content[start_idx:start_idx+200]))
    else:
        print("'<!-- Navbar -->' not found.")
