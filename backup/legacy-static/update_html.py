import os
import re
import glob

html_files = glob.glob('d:/NYMBLOC/*.html')
css_link = '<link rel="stylesheet" href="assets/css/styles.css">\n    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">'
js_link = '<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>\n    <script src="main.js"></script>'

for filepath in html_files:
    filename = os.path.basename(filepath)
    if filename in ['header.html', 'footer.html', 'get_colors.html']:
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove the entire <style>...</style> block
    # We use re.DOTALL to match across newlines
    content = re.sub(r'<style>.*?</style>\s*', '', content, flags=re.DOTALL)

    # 2. Add Stylesheet linking to <head>
    # We find </head> and replace it with linking + </head>
    if '<link rel="stylesheet" href="assets/css/styles.css">' not in content:
        content = content.replace('</head>', f'{css_link}\n</head>')

    # 3. Add AOS JS script right before <script src="main.js"></script>
    if 'aos.js' not in content:
        content = content.replace('<script src="main.js"></script>', js_link)
    
    # 4. Replace custom reveal classes with AOS data attributes
    # reveal-left -> data-aos="fade-right" (since it comes from left)
    content = re.sub(r'class="([^"]*)\breveal-left\b([^"]*)"', r'class="\1\2" data-aos="fade-right"', content)
    # reveal-right -> data-aos="fade-left"
    content = re.sub(r'class="([^"]*)\breveal-right\b([^"]*)"', r'class="\1\2" data-aos="fade-left"', content)
    # reveal-zoom -> data-aos="zoom-in"
    content = re.sub(r'class="([^"]*)\breveal-zoom\b([^"]*)"', r'class="\1\2" data-aos="zoom-in"', content)
    # reveal -> data-aos="fade-up"
    content = re.sub(r'class="([^"]*)\breveal\b([^"]*)"', r'class="\1\2" data-aos="fade-up"', content)

    # Sometimes multiple spaces might remain in class=""
    content = re.sub(r'class="\s+', 'class="', content)
    content = re.sub(r'\s+"', '"', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated HTML files.")
