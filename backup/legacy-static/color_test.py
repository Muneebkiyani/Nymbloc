from PIL import Image
import collections

try:
    img = Image.open(r"d:\NYMBLOC\assets\logo-header.png").convert("RGBA")
    pixels = img.getdata()
    color_counts = collections.Counter()
    for r, g, b, a in pixels:
        if a > 50:
            color_counts[(r//10*10, g//10*10, b//10*10)] += 1
    
    print("Most common colors:")
    for color, count in color_counts.most_common(10):
        hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
        print(f"{hex_color}: {count}")
except Exception as e:
    print(f"Error: {e}")
