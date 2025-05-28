import requests

ACCESS_TOKEN = "2915605608647161|U3sgaeHvej8RNhE5EUF7LKymYTQ"  # Replace with your actual token

url = f"https://graph.instagram.com/me/media?fields=id,caption,like_count,comment_count&access_token={ACCESS_TOKEN}"

response = requests.get(url)
data = response.json()

print(data)  # ✅ This will display Instagram posts with likes and comments count!