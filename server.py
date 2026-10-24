import http.server
import socketserver
import webbrowser

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

print(f"IA Ticaret Yerel Sunucusu Baslatiliyor...")
print(f"Tarayicida aciliyor: http://localhost:{PORT}")

webbrowser.open(f"http://localhost:{PORT}")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nSunucu kapatildi.")
