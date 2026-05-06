from PIL import Image

def remove_white_bg(input_path, output_path, threshold=235):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if the pixel is near white
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            newData.append((255, 255, 255, 0)) # fully transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

remove_white_bg("public/logo.jpg", "public/logo.png")
print("Background removed and saved as logo.png")
